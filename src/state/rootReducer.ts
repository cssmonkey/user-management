import { combineReducers } from "@reduxjs/toolkit";

import userProfile from "./userProfile/reducer";
import users from "./users/reducer";

const rootReducer = combineReducers({ userProfile, users });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
