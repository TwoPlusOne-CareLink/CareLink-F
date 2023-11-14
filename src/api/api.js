import axios from "axios"

export const axiosIns = axios.create({
  baseUrl: "http://localhost:3000",
})
