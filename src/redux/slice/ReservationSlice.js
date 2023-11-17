import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  reservation: {
    reservationId: "",
    memberId: "",
    hospitalId: "",
    departmentId: "",
    departmentName: "",
    reservationDate: "",
    reservationTime: "",
    reservationMember: "",
    reservationTel: "",
    reservationContent: "",
  },
  isLoading: false,
  error: false,
}

// 해당병원 전체 예약 정보를 불러오는 로직
export const __getReservation = createAsyncThunk(
  "GET_RESERVATION",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/reservation", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 해당 병원 진료 예약 로직
export const __addReservation = createAsyncThunk(
  "CREATE_RESERVATION",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/user/reservation", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const reservationSlice = createSlice({
  name: "reservation",
  initialState,
  reducers: {},
  extraReducers: {
    [__getReservation.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getReservation.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservations = action.payload
    },
    [__getReservation.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__addReservation.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addReservation.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation.push(action.payload)
    },
    [__addReservation.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default reservationSlice.reducer
