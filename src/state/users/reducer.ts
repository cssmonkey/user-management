import { createReducer } from "@reduxjs/toolkit";

import { Users } from "../types";
import { fetchUsers } from "./actions";

interface UsersState {
  list: Users | null;
}

export const initialState = {} as UsersState;

const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchUsers.fulfilled, (state, action) => {
    return {
      ...state,
      list: action.payload,
    };
  });
});

export default usersReducer;
