import * as actionTypes from "./types";
import firebase from "./../firebase";

const db = firebase.ref("/lawyers");
var data = [];
var keys = [];
db.once("value", (snapshot) => {
  snapshot.forEach((childSnapshop) => {
    keys.push(childSnapshop.key);
    data.push(childSnapshop.val());
  });
});

const INITIAL_STATE = {
  lawyers: data,
  database: db,
  cart: [],
};

const firmReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.lawyers.find(
        (lawyer) => lawyer.key === action.payload.key
      );
      const inCart = state.cart.find((item) =>
        item.key === action.payload.key ? true : false
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.key === action.payload.key
                ? { ...item, quantity: item.quantity + 1 }
                : item
            )
          : [...state.cart, { ...item, quantity: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.key !== action.payload.key),
      };
    case actionTypes.EDIT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.key === action.payload.key
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    case actionTypes.REMOVE_ALL_FROM_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default firmReducer;
