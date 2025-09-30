import { configureStore, type Middleware } from "@reduxjs/toolkit";
import cartReducer from "./cart/slice";

const persistenceMiddleware: Middleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("cart", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(persistenceMiddleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
