import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
class ApiService {
  async callApi<T>(config: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return axios.request(config);
  }
}

export default new ApiService();
