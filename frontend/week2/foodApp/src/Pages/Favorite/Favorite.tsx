function Favorites({ favorites, setFavorites }: any) {
  return (
    <div className="p-4">
      <h2>Favorites</h2>
      {favorites.map((item: any, index: number) => (
        <div key={index} className="flex justify-between border p-2">
          <p>{item.name}</p>
          <button
            onClick={() => {
              console.log("clicked");
              const newFav = favorites.filter((_: any, i: number) => i !== index);
              setFavorites(newFav);
            }}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
export default Favorites;