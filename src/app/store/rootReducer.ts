import { combineReducers } from "redux";

import userReducer from "./slices/user/userSlice";
import settingsReducer from "./slices/settings/settingsSlice";

const rootReducer = combineReducers({
  user: userReducer,
  settings: settingsReducer
});

export default rootReducer;
