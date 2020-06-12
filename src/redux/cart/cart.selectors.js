import { createSelector } from "reselect";

// create an input selector that returns a part of state, usually one level
// too large slice of state to use
const selectCart = (state) => state.cart;

// output selector takes in input selector or other output selectors
// preferred more due to smaller state slices
export const selectCartItems = createSelector(
  [selectCart], // this is added with the same order as selectors are defined
  (cart) => cart.cartItems // parameters are passed with the same order as selectors
);

export const selectCartHidden = createSelector(
  [selectCart], // this is added with the same order as selectors are defined
  (cart) => cart.hidden // parameters are passed with the same order as selectors
);

// output selector can take other output selectors
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectTotalCartPrice = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (acc, cartItem) => acc + cartItem.quantity * cartItem.price,
      0
    )
);
