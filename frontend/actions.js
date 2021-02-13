export const ADD_TO_CART = "ADD_TO_CART";
export const CLEAR = "CLEAR";

export const addToCart = () => {
  console.log("yo")
  return {
  type: ADD_TO_CART,
  item: {test: "yo"}
}}
export const clearCart = () => ({
  type: CLEAR
});
