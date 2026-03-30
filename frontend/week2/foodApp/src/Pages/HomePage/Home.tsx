import FoodCard from "../../Components/FoodCard";

type HomeProps = {
  cart: any[];
  setCart: React.Dispatch<React.SetStateAction<any[]>>;
  favorites: any[];
  setFavorites: React.Dispatch<React.SetStateAction<any[]>>;
};

function Home({ cart, setCart, favorites, setFavorites }: HomeProps) {

  const foods = [
    {
      id: 1,
      name: "Pizza",
      price: 200,
      rating: 4.5,
      ingredients: "Cheese, Tomato",
      image: "https://via.placeholder.com/100"
    },

    {
      id: 2,
      name: "Burger",
      price: 120,
      rating: 3.7,
      ingredients: "Cheese, Tomato, Bun",
      image: ""
    }
  ];

  return (
    <div>

      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onAddToCart={(item) => setCart([...cart, item])}
          onAddToFavorite={(item) => setFavorites([...favorites, item])}
        />
      ))}

    </div>
  );
}

export default Home;