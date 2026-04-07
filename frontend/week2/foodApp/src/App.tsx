import { useState } from "react";
import Home from "./Pages/HomePage/Home";
import Cart from "./Pages/CartPage/Cart";
import Favorites from "./Pages/Favorite/Favorite";
import { Route, Routes, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import FoodDetails from "./Pages/FoodDetails/FoodDetails";
import Login from "./Pages/Login/login";

function App() {

  const [cart, setCart] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  const user = localStorage.getItem("user");

  return (
    <Routes>
      {!user && <Route path="*" element={<Navigate to="/login" />} />}
      <Route path="/login" element={<Login />} />
      {user && (
        <>
          <Route path="/login" element={<Navigate to="/" />} />
          <Route path="/" element={<Layout />}>
          <Route index element={<Home cart={cart} setCart={setCart} setFavorites={setFavorites}/>}/>
          <Route path="cart" element={<Cart cart={cart} setCart={setCart} />}/>
          <Route path="favorites" element={<Favorites favorites={favorites} setFavorites={setFavorites}/>}/>
          <Route path="food/:id" element={<FoodDetails />} />
          </Route>
        </>
      )}
    </Routes>
  );
}

export default App;