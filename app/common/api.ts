import axios from "axios";

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : "";

export const api = axios.create({
  baseURL: "http://localhost:4000",
  headers: token ? { Authorization: `Bearer ${token}` } : {},
});
