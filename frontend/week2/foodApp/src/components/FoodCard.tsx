import { useState, useEffect, useRef } from "react";
import { FaCartPlus, FaHeart, FaRupeeSign, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import type { Food } from "../types";
type FoodCardProps = {
  food: Food;
  onAdd: (item: Food) => void;
  onFav: (item: Food) => void;
};
function FoodCard({ food, onAdd, onFav }: FoodCardProps) {

  const [show, setShow] = useState(false);
  const clickRef = useRef(0);
  const navigate = useNavigate();

  const handleAdd = () => {
    onAdd(food);
    // navigate("/cart")
    setShow(true);
    clickRef.current++;
    setTimeout(() => setShow(false), 1000);

  };

  const handleFav = () =>{
    onFav(food);
    setShow(true);
    setTimeout(() => setShow(false),1000);
  };
  const handleAddClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleAdd();
  }
  const handleFavClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleFav();
  }
  const handleFoodCardDetails = () =>{
    navigate(`/food/${food.id}`);
  };

  useEffect(() => {
    if (show) {
      console.log("Item added");
    }
  }, [show]);

  return (
    <div onClick={handleFoodCardDetails} className="bg-white rounded-xl shadow-md overflow-hidden w-full hover:shadow-lg transition flex flex-col">
      <img src={food.image} className="w-full h-40 object-cover" />
      <h3 className="text-lg font-semibold text-left">{food.name}</h3>
      <p className="flex items-center gap-1 text-green-600 font-semibold"><FaRupeeSign/>
      <span>{food.price}</span></p>
      <p className="flex items-center gap-1 text-yellow-500"><FaStar/> {food.rating}</p>
      <p className="text-gray-500 text-sm text-left">{food.desc}</p>

      <div className="flex justify-between mt-auto">
        <button onClick={handleAddClick} className="bg-blue-500 text-white px-3 py-1 rounded flex items-center gap-1">
          <FaCartPlus />
        </button>
        <button onClick={handleFavClick} className="bg-red-500 text-white px-3 py-1 rounded">
          <FaHeart />
        </button>
      </div>
      {show && <p className="text-green-500 text-sm mt-2">Added!</p>}
      
    </div>
  );
}
export default FoodCard;