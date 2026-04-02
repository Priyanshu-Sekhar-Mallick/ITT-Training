function Favorites({ favorites }: any) {
  return (
    <div className="p-4">

      <h2>Favorites</h2>

      {favorites.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}

    </div>
  );
}
export default Favorites;