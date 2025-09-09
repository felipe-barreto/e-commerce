import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider";
import ProductList from "./components/ProductList/ProductList";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/productos" element={<ProductList />} />
        <Route path="/productos/:id" element={<ProductDetails />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
