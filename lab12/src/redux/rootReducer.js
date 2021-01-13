import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import firmReducer from "./reducer";

const rootReducer = combineReducers({
  lawyerFirm: firmReducer,
  firebase: firebaseReducer,
});

export default rootReducer;
