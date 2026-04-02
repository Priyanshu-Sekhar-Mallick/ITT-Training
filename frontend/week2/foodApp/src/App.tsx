import { useState } from "react";
import Navbar from "./Components/NavBar";
import Home from "./Pages/HomePage/Home";
import Cart from "./Pages/CartPage/Cart";
import Favorites from "./Pages/Favorite/Favorite";

function App() {

  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const [page, setPage] = useState("home");

  return (
    <div className="w-full">
      <Navbar setPage={setPage} />
      {page === "home" && (
        <Home cart={cart} setCart={setCart} setFavorites={setFavorites} />
      )}
      {page === "cart" && (
        <Cart cart={cart} setCart={setCart} />
      )}
      {page === "favorites" && (
        <Favorites favorites={favorites} setFavorites={setFavorites} />
      )}
    </div>
  );
}
export default App;