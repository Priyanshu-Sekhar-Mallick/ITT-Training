function Cart({ cart, setCart }: any) {
  return (
    <div className="p-4">
      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map((item: any, index: number) => (
          <div
            key={index}
            className="flex justify-between border p-2"
          >
            <p>{item.name}</p>

            <button
              onClick={() => {
                const newCart = cart.filter(
                  (_: any, i: number) => i !== index
                );
                setCart(newCart);
              }}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;