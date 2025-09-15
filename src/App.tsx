import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./contexts/CartProvider";
import Header from "./components/Header/Header";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <CartProvider>
      <Header />
      <Routes>
        <Route path="/productos" element={<ProductList />} />
        <Route path="/productos/:id" element={<ProductDetails />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/productos" />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
