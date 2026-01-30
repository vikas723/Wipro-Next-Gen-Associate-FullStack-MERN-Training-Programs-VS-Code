import { FaRupeeSign } from "react-icons/fa";

function Product(props) {
  return (
    <div>
      <p>Product Name : {props.productname}</p>

      <div className="flex justify-center items-center gap-2">
        <p>Price :</p> {/*Price : Rs 70000*/ }
        <FaRupeeSign />
        <span>{props.productprice}</span>
      </div>
    <button className="bg-blue-800 text-white px-3 py- 2 mt rounded hover :cursor-pointer" onClick= {props.Buy}>Buy</button>
    </div>
    
  );
}

export default Product
