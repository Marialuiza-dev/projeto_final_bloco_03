import axios from "axios";

export const api = axios.create({
  baseURL: "https://farmacia-ug0p.onrender.com/",
});