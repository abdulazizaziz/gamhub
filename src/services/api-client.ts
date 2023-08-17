import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60a81dcada9c4b9b9953b8aef42b1c93",
  },
});

class ApiClient<T> {
  endpoint: string;
  params: any;

  constructor(endpoint: string, params?: any | undefined) {
    this.endpoint = endpoint;
    this.params = params;
  }

  getAll = () => {
    return axiosInstance
      .get<T>(this.endpoint, { params: this.params })
      .then((res) => res.data);
  };

  // post = (data: T) => {
  //   return axiosInstance.post<T>(this.endpoint, data).then((res) => res.data);
  // };
}

export default ApiClient;
