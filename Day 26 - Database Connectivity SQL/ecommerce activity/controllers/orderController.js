const pool = require("../config/db");

exports.placeOrder = async (req, res) => {
  const { custname, items } = req.body;

  const connection = await pool.getConnection();

  try {
    await connection.beginTransaction();

    let totalAmount = 0;

    // 1. Check stock & calculate total
    for (let item of items) {
      const [product] = await connection.query(
        "SELECT * FROM products WHERE id = ? FOR UPDATE",
        [item.product_id]
      );

      if (product.length === 0)
        throw new Error("Product not found");

      if (product[0].stock < item.quantity)
        throw new Error("Insufficient stock");

      totalAmount += product[0].price * item.quantity;
    }

    // 2. Insert Order
    const [orderResult] = await connection.query(
      "INSERT INTO orders (custname, totalamount) VALUES (?,?)",
      [custname, totalAmount]
    );

    const orderId = orderResult.insertId;

    // 3. Insert Items & Reduce Stock
    for (let item of items) {
      await connection.query(
        "INSERT INTO order_items (order_id, product_id, quantity) VALUES (?,?,?)",
        [orderId, item.product_id, item.quantity]
      );

      await connection.query(
        "UPDATE products SET stock = stock - ? WHERE id = ?",
        [item.quantity, item.product_id]
      );
    }

    await connection.commit();
    res.json({ message: "Order created successfully" });

  } catch (err) {
    await connection.rollback();
    res.status(500).json({ error: err.message });
  } finally {
    connection.release();
  }
};

exports.getOrders = async (req, res) => {
  try {
    const [orders] = await pool.query("SELECT * FROM orders");
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

