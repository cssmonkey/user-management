import { createAsyncThunk } from "@reduxjs/toolkit";
import ApiService from "../../api/apiService";
import apiConfig from "../../api/apiConfig";

export const fetchUserById = createAsyncThunk("users/fetchById", async () => {
  const response = await ApiService.callApi({
    url: apiConfig.endpoints.userProfile("1"),
    method: "GET",
  });
  return response.data;
});
