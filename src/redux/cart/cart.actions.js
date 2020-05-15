import { cartActionTypes } from "./cart.types";

export const toggleCartHidden = (hidden) => ({
  type: cartActionTypes.TOGGLE_CART_VISIBILITY,
});

export const addItem = (item) => ({
  type: cartActionTypes.ADD_ITEM,
  payload: item,
});
