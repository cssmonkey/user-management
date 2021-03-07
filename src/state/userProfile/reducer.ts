import { createReducer } from "@reduxjs/toolkit";

interface UserState {
  name?: string;
  userName?: string;
}

const initialState = {} as UserState;

const userProfileReducer = createReducer(initialState, (builder) => {});
