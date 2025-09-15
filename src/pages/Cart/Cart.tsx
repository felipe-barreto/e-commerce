import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();

  const total = () => {
    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return (
      <span className="text-2xl sm:text-3xl font-bold w-3xl max-w-11/12 py-3">
        Total: ${totalPrice.toFixed(2)}
      </span>
    );
  };

  return (
    <main className="flex flex-col items-center pt-36 pb-16 sm:pt-40">
      {cart.length === 0 ? (
        <>
          <p className="text-4xl sm:text-5xl font-bold text-center text-balance max-w-11/12 pb-5">
            Tu carrito está vacío
          </p>
          <Link
            to={"/productos"}
            className="h-14 w-96 max-w-11/12 rounded-md bg-gray-900 text-center leading-14 font-bold text-white hover:bg-gray-700 transition duration-200">
            Seguir viendo productos
          </Link>
        </>
      ) : (
        <>
          <h1 className="text-4xl sm:text-5xl text-center sm:text-left font-bold w-3xl max-w-11/12 pb-8 sm:pb-5">
            Carrito
          </h1>
          {cart.map((item) => {
            return (
              <section key={item.id} className="flex w-3xl max-w-11/12 items-center gap-4 pb-2">
                <div className="flex items-center rounded-md bg-gradient-to-b from-gray-700 to-gray-400 p-5">
                  <img src={item.image} alt={`Imagen de ${item.title}`} className="size-24 object-contain" />
                </div>
                <div className="flex flex-col w-full gap-1">
                  <h2 className="sm:text-3xl font-bold">{item.title}</h2>
                  <span className="sm:text-2xl font-bold">{`$ ${item.price}`}</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="size-9 cursor-pointer bg-gray-300 rounded-md sm:text-2xl font-bold">
                      -
                    </button>
                    <span className="sm:text-2xl font-bold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="size-9 cursor-pointer bg-gray-300 rounded-md sm:text-2xl font-bold">
                      +
                    </button>
                  </div>
                </div>
              </section>
            );
          })}
          {total()}
          <div className="flex flex-col sm:flex-row w-full sm:w-3xl max-w-11/12 gap-3">
            <Link
              to={"/productos"}
              className="h-14 w-full sm:w-96 rounded-md bg-gray-900 text-center leading-14 font-bold text-white hover:bg-gray-700 transition duration-200">
              Seguir viendo productos
            </Link>
            <button
              onClick={clearCart}
              className="h-14 w-full sm:w-96 cursor-pointer rounded-md bg-gray-900 font-bold text-white hover:bg-gray-700 transition duration-200">
              Vaciar carrito
            </button>
          </div>
        </>
      )}
    </main>
  );
};

export default Cart;
