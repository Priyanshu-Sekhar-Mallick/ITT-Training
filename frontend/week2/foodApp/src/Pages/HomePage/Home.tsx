import { useNavigate, useSearchParams } from "react-router-dom";
import FoodCard from "../../components/FoodCard";
import type { Food } from "../../types";
import type React from "react";
import { useGetFoodsQuery } from "../../redux/apiSlice";
type HomeComponents = {
  cart: Food[];
  setCart: React.Dispatch<React.SetStateAction<Food[]>>;
  setFavorites: React.Dispatch<React.SetStateAction<Food[]>>;
};
function Home({ cart, setCart, setFavorites }: HomeComponents) {
  const[searchParams] = useSearchParams();
  const navigate = useNavigate();
  const search = searchParams.get("search") || "";
  const {data, isLoading, error} = useGetFoodsQuery();
  if(isLoading) return <p>Loading...</p>
  if(error) return <p>Error loading data</p>
  
  const formattedFoods = (data?.products || []).map((item: any) => ({
  id: item.id,
  name: item.title,
  price: item.price,
  image: item.thumbnail,   // changed
  desc: item.description,
  rating: 4
}));
  const filterFoods = formattedFoods.filter((item: Food)=> item.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className="p-6">
      <input
        type="text"
        placeholder="Search for foods"
        value={search}
        onChange={(e) => navigate(`/?search=${e.target.value}`)}
        className="border p-2 mb-4"
      />
      <div className="grid grid-cols-4 gap-6">
        {filterFoods.map((food: Food) => (
          <FoodCard
            key={food.id}
            food={food}
            onAdd={(item: Food) => setCart((prev: Food[]) => [...prev, item])}
            onFav={(item: Food) => setFavorites((prev: Food[]) => [...prev, item])}
          />
        ))}
      </div>
    </div>
  );
}
export default Home;