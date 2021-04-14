import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "api/apiService";
import apiConfig from "api/apiConfig";

import { Users } from "../types";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await ApiService.callApi<Users>({
    url: apiConfig.endpoints.users,
    method: "GET",
  });
  return response.data;
});
