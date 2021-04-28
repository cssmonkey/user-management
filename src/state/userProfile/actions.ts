import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "api/apiService";
import apiConfig from "api/apiConfig";

import { User } from "../types";

export const ACTION_TYPES = {
  FETCH_USER_BY_ID: "users/fetchById",
} as const;

export const fetchUserById = createAsyncThunk("users/fetchById", async (userId: string) => {
  const response = await ApiService.callApi<User>({
    url: apiConfig.endpoints.userProfile(userId),
    method: "GET",
  });
  return response.data;
});
