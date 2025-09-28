import { addProduct, removeProduct, clear, type Product } from "../store/cart/slice";
import { useAppDispatch } from "./store";

export const useCartActions = () => {
  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addProduct(product));
  };

  const removeFromCart = (id: number) => {
    dispatch(removeProduct(id));
  };

  const clearCart = () => {
    dispatch(clear());
  };

  return { addToCart, removeFromCart, clearCart };
};
