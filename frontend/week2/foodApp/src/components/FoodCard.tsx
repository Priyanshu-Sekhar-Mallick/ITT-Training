import { useState } from "react";

type FoodProps = {
  food: any;
  onAddToCart: (item: any) => void;
  onAddToFavorite: (item: any) => void;
};

function FoodCard({ food, onAddToCart, onAddToFavorite }: FoodProps) {

  const [showMsg, setShowMsg] = useState(false);

  const handleAdd = () => {
    onAddToCart(food);
    setShowMsg(true);

    setTimeout(() => setShowMsg(false), 1500);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>

      <img src={food.image} width="100" />

      <h3>{food.name}</h3>
      <p>₹{food.price}</p>
      <p> {food.rating}</p>
      <p>{food.ingredients}</p>

    
      <button onClick={handleAdd}>
        Add to Cart
      </button>

      
      <button onClick={() => onAddToFavorite(food)}>
         Favorite
      </button>

      
      {showMsg && <p style={{ color: "green" }}>Added to cart</p>}

    </div>
  );
}

export default FoodCard;