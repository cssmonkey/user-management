import { combineReducers } from "@reduxjs/toolkit";

import userProfile from "./userProfile/reducer";
import users from "./users/reducer";

export const reducers = { userProfile, users } as const;

const rootReducer = combineReducers(reducers);

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
