import axios from "axios";

export const api = axios.create({
  baseURL: "http://10.0.2.2:3333",
});
api.defaults.headers.common[
  "Authorization"
] = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdHVkZW50SWQiOjEsInN0dWRlbnROYW1lIjoidmluaWNpdXMiLCJpYXQiOjE2MTQ5Njc5OTQsImV4cCI6MTYxNDk3NTE5NH0.PVcDRs8RQIioyyaRm4KvC7d1953GA7xBNP_GjWrjiiU`;
