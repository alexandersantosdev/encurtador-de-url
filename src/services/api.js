import axios from "axios";

export const key = "9205abec3cb997ff49d77abbb9a9480104009f78";

const api = axios.create({
  baseURL: "https://api-ssl.bitly.com/v4",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${key}`,
  },
});

export default api;
