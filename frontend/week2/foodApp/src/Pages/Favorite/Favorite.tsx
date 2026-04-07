import type React from "react";
import type { Food } from "../../types";
type FavoriteProps = {
  favorites: Food[];
  setFavorites: React.Dispatch<React.SetStateAction<Food[]>>;
};
function Favorites({ favorites, setFavorites }: FavoriteProps) {
  const handleRemove = (id: number) => {
    const newFavorites = favorites.filter((item) => item.id !== id);
    setFavorites(newFavorites);
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Favorites</h2>
      {favorites.length === 0 ? (
        <p>This page is empty</p>) : 
        (favorites.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border p-2 mb-2 rounded">
            <p>{item.name}</p>
            <button
              onClick={() => {
                handleRemove(item.id)}
              }className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Favorites;