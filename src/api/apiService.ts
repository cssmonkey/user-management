import axios, { AxiosPromise, AxiosRequestConfig, AxiosResponse } from "axios";

class ApiService {
  async callApi(config: AxiosRequestConfig): Promise<AxiosPromise<AxiosResponse>> {
    return axios.request(config);
  }
  test() {}
}

export default new ApiService();
