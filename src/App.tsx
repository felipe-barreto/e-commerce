import { Navigate, Route, Routes } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import ProductList from "./pages/ProductList/ProductList";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/productos/:category?" element={<ProductList />} />
        <Route path="/producto/:id" element={<ProductDetails />} />
        <Route path="/carrito" element={<Cart />} />
        <Route path="/*" element={<Navigate to="/productos" />} />
      </Routes>
    </Provider>
  );
};

export default App;
