import { FaShoppingCart, FaHeart } from "react-icons/fa";

function Navbar({ setPage }: any) {
  return (
    <div className="flex justify-between items-center px-6 py-3 bg-gray-900 text-white shadow-md">

      <h1 className="font-bold text-white ">FoodAdda</h1>

      <div className="flex items-center gap-6 text-sm">

        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("cart")}>
          <FaShoppingCart />
          Cart
        </button>

        <button onClick={() => setPage("favorites")}>
          <FaHeart />
          Favorite
        </button>

      </div>
    </div>
  );
}

export default Navbar;