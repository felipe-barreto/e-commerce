import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type CartItem = Product & { quantity: number };

const initialState: CartItem[] = (() => {
  const storedCart = localStorage.getItem("cart");
  return storedCart ? JSON.parse(storedCart).cart : [];
})();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const existing = state.find((cartItem) => cartItem.id === action.payload.id);
      if (existing) {
        return state.map((cartItem) =>
          cartItem.id === action.payload.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...state, { ...action.payload, quantity: 1 }];
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      return state
        .map((cartItem) =>
          cartItem.id === action.payload ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    },
    clear: () => {
      return [];
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct, clear } = cartSlice.actions;
