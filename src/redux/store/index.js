import { configureStore } from "@reduxjs/toolkit"
import authSlice from "../modules/authSlice"
import hospitalSlice from "../modules/hospitalSlice"
import reservationSlice from "../modules/reservationSlice"
import counselingSlice from "../modules/counselingSlice"
import healthCheckSlice from "../modules/healthCheckSlice"
import userSlice from "../modules/userSlice"
import doctorCounselingSlice from "../modules/doctorCounselingSlice"

export const store = configureStore({
  reducer: {
    authReducer: authSlice.reducer,
    hospitalReducer: hospitalSlice.reducer,
    reservationReducer: reservationSlice.reducer,
    counselingReducer: counselingSlice.reducer,
    healthCheckReducer: healthCheckSlice.reducer,
    userReducer: userSlice.reducer,
    doctorCounselingReducer: doctorCounselingSlice.reducer,
  },
})

export default store
