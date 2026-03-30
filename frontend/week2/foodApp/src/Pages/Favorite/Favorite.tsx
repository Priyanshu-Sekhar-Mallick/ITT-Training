function Favorites({ favorites }: any) {
  return (
    <div>
      <h2>Favorites</h2>

      {favorites.map((item: any) => (
        <p key={item.id}>{item.name}</p>
      ))}

    </div>
  );
}

export default Favorites;