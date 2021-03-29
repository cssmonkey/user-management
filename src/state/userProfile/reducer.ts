import { createReducer } from "@reduxjs/toolkit";

import { fetchUserById } from "./actions";

interface UserState {
  name?: string;
  username?: string;
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
