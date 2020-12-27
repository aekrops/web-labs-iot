import * as actionTypes from "./types";

export const addToCart = (itemKey) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      key: itemKey,
    },
  };
};

export const removeFromCart = (itemKey) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: {
      key: itemKey,
    },
  };
};

export const removeAllFromCart = () => {
  return {
    type: actionTypes.REMOVE_ALL_FROM_CART,
  };
};

export const editQuantity = (itemKey, quantity) => {
  return {
    type: actionTypes.EDIT_QUANTITY,
    payload: {
      key: itemKey,
      quantity: quantity,
    },
  };
};

export const loadCurrentItem = (item) => {
  return {
    type: actionTypes.LOAD_CURRENT_ITEM,
    payload: item,
  };
};
