function Cart({ cart, setCart }: any) {
  return (
    <div>
      <h2>Cart</h2>

      {cart.length === 0 && <p>No items</p>}

      {cart?.map((item: any, index: number) => (
        <div key={index}>
          <p>{item.name}</p>

          <button onClick={() => {
            const newCart = cart.filter((_: any, i: number) => i !== index);
            setCart(newCart);
          }}>
             Remove
          </button>

        </div>
      ))}
    </div>
  );
}

export default Cart;