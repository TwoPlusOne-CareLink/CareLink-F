import axios from "axios"

function getToken() {
  return localStorage.getItem("token")
}

export const axiosIns = axios.create({
  baseURL: "http://localhost:8888",
})

axiosIns.interceptors.request.use((config) => {
  const token = getToken()
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`
  }
  return config
})
