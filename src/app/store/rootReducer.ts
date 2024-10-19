import { combineReducers } from "redux";

import userReducer from "./slices/user/userSlice";

const rootReducer = combineReducers({
  user: userReducer
});

export default rootReducer;
