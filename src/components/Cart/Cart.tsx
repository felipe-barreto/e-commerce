import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const total = () => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return <h3>Total: ${totalPrice}</h3>;
  };

  return (
    <>
      <h2>Carrito</h2>
      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <>
          {cart.map((item) => {
            return (
              <div key={item.id}>
                <h3>{item.title}</h3>
                <span>{`$ ${item.price}`}</span>
                <p>Cantidad: {item.quantity}</p>
                <button onClick={() => removeFromCart(item.id)}>-</button>
                <button onClick={() => addToCart(item)}>+</button>
              </div>
            );
          })}
          {total()}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
      <Link to={"/productos"}>Seguir viendo productos</Link>
    </>
  );
};

export default Cart;
