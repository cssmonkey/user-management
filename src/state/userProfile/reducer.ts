import { createReducer } from "@reduxjs/toolkit";

import { fetchUserById } from "./actions";

interface UserState {
  name?: string;
  userName?: string;
}

const initialState = {} as UserState;

const userProfileReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUserById.fulfilled, (state, action) => {
    return {
      ...state,
      ...action.payload,
    };
  });
});

export default userProfileReducer;
