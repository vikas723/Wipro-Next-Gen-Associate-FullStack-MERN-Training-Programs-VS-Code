import {createContext, useState, useEffect} from "react";

export const ProductContext = createContext();

export function ProductProvider({children}){
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5001/products")
        .then(res=>res.json())
        .then(data=> setProducts(data));
    }, []);
    const addProduct = (product) => {
    setProducts(prev => [...prev, product]);

    };
    return(
        <ProductContext.Provider value={{products, addProduct}}>
            {children}
        </ProductContext.Provider>
    )
}