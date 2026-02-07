// const express = require("express");
// const app = express();

// let products = [{id:1, name:"laptop"}];


// app.use(express.json()); 

// app.get("/health", (req, res)=>{ // rest endpoint or api is created
//     res.json({status: "UP"}); // It gives json response and it is stateless
// });

// app.post("/postproduct", (req, res)=>{
//     products.push(req.body); // pushing the products into req body
//     res.status(201).send("Product inserted"); 
// });
// app.post("/getproduct", (req, res)=>{
//     res.json(products);
// })
// app.put("/product/:id", (req, res)=>{ // req.params.id
//     const product = products.find(p=> p.id == req.params.id);
//     product.name = req.body.name;
//     res.send("Product updated");
// })
// app.delete("/product/:id", (req, res)=>{
//     const products = products.filter(p=> p.id == req.params.id)

//     res.send("product deleted");
// })


// app.listen(3000);
// console.log("app started");





// const express = require("express");
// const app = express();

// let products = [{ id: 1, name: "laptop" }];

// app.use(express.json());

// // Health Check
// app.get("/health", (req, res) => {
//   res.json({ status: "UP" });
// });

// // GET All Products
// app.get("/products", (req, res) => {
//   res.json(products);
// });

// // CREATE Product
// app.post("/products", (req, res) => {
//   products.push(req.body);
//   res.status(201).send("Product inserted");
// });

// // UPDATE Product
// app.put("/products/:id", (req, res) => {
//   const product = products.find(p => p.id == req.params.id);

//   if (!product) {
//     return res.status(404).send("Product not found");
//   }

//   product.name = req.body.name;
//   res.send("Product updated");
// });

// // DELETE Product
// app.delete("/products/:id", (req, res) => {
//       const id = parseInt(req.params.id);
//   products = products.filter(p => p.id != id);
//   res.send("Product deleted");
// });

// app.listen(3000, () => console.log("App started"));


   const express = require('express');
        const app = express();

const {body, validationResult} = require("express-validator")
         app.use(express.json()); 

let products =[{id:1, name:"laptop",email:"abc@gmail.com"}];
         //rest endpoint / api
           app.get("/health"  ,(req,res)=>{
            // its giving the json response and it is stateless
            res.json({status:"UP"});
        });

         app.post("/postproduct"  ,(req,res)=>{
            products.push(req.body);
            res.status (201).send("Product inserted");
        })
        app.get("/getproduct", (req,res)=>{

            res.json(products);
        })
        app.put("/product/:id" , (req,res)=>{

         const products =  products.find(p=> p.id == req.params.id)
              products.name =  req.body.name;
            res.send("Product  updated");
        })

           app.delete("/product/:id" , (req,res)=>{
           const id =  req.params.id;
           console.log(id);
          products =  products.filter(p=> p &&  p.id != id)
             
            res.send("Product  deleted");
        })

app.post("/postproduct" , body("email").isEmail() ,(req,res)=>{
    const errors  = validationResult(req);
    if(!errors.isEmpty())
    {return res.status(400).json(errors.array());
    }
        else
        {
            products.push(req.body);
            res.status (201).send("Product inserted");
    }
        })

        app.use((err,req,res,next)=>{
                res.status(500).json({message: "Internal server error"})
        })

        fetch("http://localhost:3000/products")
        .then(res=>res.json())
        .then(data=>console.log(data));

        app.listen(3000);
        console.log("app started");