import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "60a81dcada9c4b9b9953b8aef42b1c93",
  },
});
