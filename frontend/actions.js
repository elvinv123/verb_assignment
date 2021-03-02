export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR = "CLEAR";
export const REMOVE_ITEM = "REMOVE_ITEM";

export const addToCart = (item) => {
  return({
  type: ADD_TO_CART,
  item: item
})}

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  item: item
});

export const clearCart = () => ({
  type: CLEAR
});
