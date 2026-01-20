

const Card = ({ name, price, image }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 hover:shadow-lg transition text-center">

      <div className="h-56 flex items-center justify-center bg-purple-50 rounded mb-4">
        <img
          src={image}
          alt={name}
          className="h-full object-cover rounded"
        />
      </div>

      <h3 className="font-semibold text-slate-700">{name}</h3>
      <p className="text-purple-600 font-bold mt-1">₹ {price}</p>

      <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition">
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
