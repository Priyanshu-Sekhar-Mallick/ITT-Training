import FoodCard from "../../Components/FoodCard";

function Home({ cart, setCart, setFavorites }: any) {

  const foods = [
    {
      id: 1,
      name: "Pizza",
      price: 200,
      rating: 4.5,
      desc: "Cheesy pizza",
      image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
    },
    {
      id: 2,
      name: "Burger",
      price: 150,
      rating: 4.2,
      desc: "Tasty burger",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349"
    }
  ];

  return (
    <div className="p-6 flex flex-wrap gap-6 justify-start">

      {foods.map((food) => (
        <FoodCard
          key={food.id}
          food={food}
          onAdd={(item: any) => setCart((prev: any[]) => [...prev, item])}
          onFav={(item: any) => setFavorites((prev: any[]) => [...prev, item])}
        />
      ))}

    </div>
  );
}

export default Home;