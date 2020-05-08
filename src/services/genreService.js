import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://db-edm.herokuapp.com/api/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default {
  getGenres() {
    return apiClient.get("/genres");
  },
};
