import ActionButton from "./ActionButton";
function MenuCard ({cuisine, dish, price}){
    return(
        <div className="border border-gray-300 w-72 rounded p-4 m-3 bg-gray-50 shadow-lg flex flex-col gap-3 hover:bg-neutral-200 transition-all">
           <h2 className = "font-bold text-lg"> {dish}</h2>
           <p className="text-sm">Cuisine</p>
           <p className="font-semibold">Price: Rs{price}</p> 

           <div className="flex justify-center">
            <ActionButton title = "Order Now" link="#" />
            <ActionButton
                title = "Navigate"
                link = "https://www.google.com/maps"
            />
           </div>
        </div>
    )
}
export default MenuCard;