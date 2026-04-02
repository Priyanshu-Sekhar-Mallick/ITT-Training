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
    },
    {
      id: 3,
      name: "Sandwise",
      price: 120,
      rating: 3.5,
      desc: "Wrap with good quality bread and vegies",
      image: "https://media.istockphoto.com/id/1085139228/photo/paneer-tikka-sandwich-is-a-popular-indian-version-of-sandwich-using-cottage-cheese-curry-with.webp?a=1&b=1&s=612x612&w=0&k=20&c=gOlul1WNGJqjf-zaEOa1SyF52pFWPI8XHro7aSWi75g="
    },
    {
      id: 4,
      name: "Pasta",
      price: 80,
      rating: 4.0,
      desc: "Millet pasta and serve with vegies",
      image: "https://images.unsplash.com/photo-1611270629569-8b357cb88da9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFzdGF8ZW58MHx8MHx8fDA%3D"
    }
  ];

  return (
    <div className="p-6 grid grid-cols-4 gap-6">

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