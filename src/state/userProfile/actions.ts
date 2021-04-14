import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "api/apiService";
import apiConfig from "api/apiConfig";

import { User } from "../types";

export const fetchUserById = createAsyncThunk("users/fetchById", async () => {
  const response = await ApiService.callApi<User>({
    url: apiConfig.endpoints.userProfile("1"),
    method: "GET",
  });
  return response.data;
});
