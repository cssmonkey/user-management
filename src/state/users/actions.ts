import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "api/apiService";
import apiConfig from "api/apiConfig";

import { Users } from "../types";

export const ACTION_TYPES = {
  FETCH_USERS: "users/fetchUsers",
} as const;

export const fetchUsers = createAsyncThunk(ACTION_TYPES.FETCH_USERS, async () => {
  const response = await ApiService.callApi<Users>({
    url: apiConfig.endpoints.users,
    method: "GET",
  });
  return response.data;
});
