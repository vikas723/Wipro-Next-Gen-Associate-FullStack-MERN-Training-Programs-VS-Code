import React from 'react'
import Product from './Product'

function ProductList() {

    const handlerBuy = (productname) => {
        alert(productname + " added to a cart")
    }
  return (
    <div>
         <Product  productname="Laptop" productprice = {70000} Buy= {() => handlerBuy("Laptop")}/>
         <Product  productname="Mobile" productprice = {20000} Buy= {() => handlerBuy("Mobile")}/>
         <Product  productname="Keyboard" productprice = {1000} Buy= {() => handlerBuy("Keyboard")}/>
      
    </div>
  )
}

export default ProductList;
