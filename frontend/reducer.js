import { ADD_TO_CART, CLEAR, REMOVE_ITEM } from "./actions";
const _ = require('lodash');
const myStorage = window.localStorage;
const _defaultState = require("../data/data"); 


function removeItemOnce(cart, product) {
  var index = cart.findIndex(function(item){
    return item.id == product.id
  });
  if (index > -1) {
    cart.splice(index, 1);
  }
  return cart;
}

const reducer = (oldState = _defaultState, action) => {
  switch(action.type) {
    case ADD_TO_CART:
      oldState.cartItems = [...oldState.cartItems, action.item]
      myStorage.clear();
      myStorage.setItem('cart', JSON.stringify(oldState.cartItems))
      return oldState;
    case REMOVE_ITEM:
      oldState.cartItems = removeItemOnce(oldState.cartItems, action.item);
      myStorage.clear();
      myStorage.setItem('cart', JSON.stringify(oldState.cartItems))
      return oldState;
    case CLEAR:
      return _defaultState;
    default:
      return oldState;
  }
}

export default reducer;
