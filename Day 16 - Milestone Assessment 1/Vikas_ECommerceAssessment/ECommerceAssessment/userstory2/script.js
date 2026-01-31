async function loadProducts() {
    const status = document.getElementById("status");
    const list = document.getElementById("productList");
    const filter = document.getElementById("categoryFilter").value;

    status.textContent = "Loading products...";
    list.innerHTML = "";

    try {
        const response = await fetch("products.json");
        if (!response.ok) throw new Error("Failed to fetch");

        const data = await response.json();

        let filtered = data.filter(p => 
            filter === "All" || p.category === filter
        );

        filtered.forEach(product => {
            const li = document.createElement("li");
            li.textContent = `${product.name} - $${product.price}`;
            list.appendChild(li);
        });

        status.textContent = "Products loaded successfully.";
    } catch (error) {
        status.textContent = "Error loading products.";
        console.error(error);
    }
}
