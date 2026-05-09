import axios from "axios";

// in development, use the local server; in production, use the same origin
// because in production there is no localhost 
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:3000/api" : "/api";

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;