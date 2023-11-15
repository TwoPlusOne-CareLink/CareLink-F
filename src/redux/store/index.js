import { configureStore } from "@reduxjs/toolkit"
import AuthSlice from "../slice/AuthSlice"
import HospitalSlice from "../slice/HospitalSlice"
import ReservationSlice from "../slice/ReservationSlice"

export const store = configureStore({
  reducer: {
    authReducer: AuthSlice.reducer,
    hospitalReducer: HospitalSlice.reducer,
    reservationReducer: ReservationSlice.reducer,
  },
})

export default store
