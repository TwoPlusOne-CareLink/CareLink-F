import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../slice/authSlice"
import hospitalSlice from "../slice/hospitalSlice"
import reservationSlice from "../slice/reservationSlice"
import counselingSlice from "../slice/counselingSlice"
import healthCheckSlice from "../slice/healthCheckSlice"
import userSlice from "../slice/userSlice"

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    hospitalReducer: hospitalSlice.reducer,
    reservationReducer: reservationSlice.reducer,
    counselingReducer: counselingSlice.reducer,
    healthCheckReducer: healthCheckSlice.reducer,
    userReducer: userSlice.reducer,
  },
})

export default store
