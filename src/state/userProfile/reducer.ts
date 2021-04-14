import { createReducer } from "@reduxjs/toolkit";

import { User } from "../types";
import { fetchUserById } from "./actions";

export const initialState = {} as User;

const userProfileReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUserById.fulfilled, (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  });
});

export default userProfileReducer;
