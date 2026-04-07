import { FaShoppingCart, FaHeart, FaHome } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white shadow">
      <h1 className="font-bold text-white h-0">FoodAdda</h1>
      <div className="flex items-center gap-6 text-sm">
        <Link to="/"><FaHome />Home</Link>
        <Link to="/cart"><FaShoppingCart />Cart</Link>
        <Link to="/favorites"><FaHeart />Favorites</Link>
        <button onClick={handleLogout} className="bg-red-400 text-white w-full p-2 rounded">Logout</button>
      </div>
    </div>
  );
}
export default Navbar;