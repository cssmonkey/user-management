import { combineReducers } from "@reduxjs/toolkit";

import userProfile from "./userProfile/reducer";

const rootReducer = combineReducers({ userProfile });

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
