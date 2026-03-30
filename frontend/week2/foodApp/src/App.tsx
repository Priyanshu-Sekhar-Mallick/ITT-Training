import { useState } from "react";
import Home from "./Pages/HomePage/Home";
import Cart from "./Pages/CartPage/Cart";

function App() {
  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);

  return (
    <div>
      <h1>Food App</h1>

      {/* Pass props */}
      <Home
        cart={cart}
        setCart={setCart}
        favorites={favorites}
        setFavorites={setFavorites}
      />

      <hr />

      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;