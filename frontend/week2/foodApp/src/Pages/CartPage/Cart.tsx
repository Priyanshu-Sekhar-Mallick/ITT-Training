import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../redux/store"
import { removeFromCart } from "../../redux/cartSlice";
function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const handleRemove = (id: number) => {
      dispatch(removeFromCart(id));
  };
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>) : 
        (cart.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border p-2 mb-2 rounded">
            <p>{item.name}</p>
            <button
              onClick={() => handleRemove(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded">
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;