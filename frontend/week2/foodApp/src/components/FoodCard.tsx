import { useState, useEffect, useRef } from "react";
import { FaCartPlus, FaHeart, FaRupeeSign, FaStar } from "react-icons/fa";

function FoodCard({ food, onAdd, onFav }: any) {

  const [show, setShow] = useState(false);

  const clickRef = useRef(0);

  const handleAdd = () => {
    onAdd(food);
    setShow(true);
    clickRef.current++;
    setTimeout(() => setShow(false), 1000);
  };

  const handleFav = () =>{
    onFav(food);
    setShow(true);
    setTimeout(() => setShow(false),1000);
  };

  useEffect(() => {
    if (show) {
      console.log("Item added");
    }
  }, [show]);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden w-64 hover:shadow-lg transition">

      <img src={food.image} className="w-full h-40 object-cover" />

      <h3 className="text-lg font-semibold">{food.name}</h3>
      <p className="flex items-center gap-1 text-green-600 font-semibold"><FaRupeeSign/>
      <span>{food.price}</span></p>
      <p className="flex items-center gap-1 text-yellow-500"><FaStar/> {food.rating}</p>
      <p className="text-gray-500 text-sm">{food.desc}</p>

      <div className="flex justify-between mt-3">

        <button onClick={handleAdd} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1">
          <FaCartPlus />
        </button>

        <button onClick={handleFav} className="bg-red-500 text-white px-3 py-1 rounded">
          <FaHeart />
        </button>

      </div>

      {show && <p className="text-green-500 text-sm mt-2">Added!</p>}

    </div>
  );
}

export default FoodCard;