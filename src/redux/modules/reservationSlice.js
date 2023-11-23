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

// 병원찾기 페이지에서 검색 후 나온 병원 클릭 후 예약하기 버튼을 눌렀을 때 해당병원 전체 예약 정보를 불러오는 로직
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

// 병원찾기 페이지에서 검색 후 나온 병원 클릭 후 예약하기 버튼을 눌렀을 때  해당 병원 진료 예약 로직
export const __addReservation = createAsyncThunk(
  "ADD_RESERVATION",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/user/reservation", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 병원 로그인 후 예약내역 조회 페이지를 들어갔을 때 캘린더에 들어갈 예약정보를 요청하는 로직
export const __getHospitalReservation = createAsyncThunk(
  "GET_HOSPITALRESERVATION",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospital/reservationList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 병원 로그인 후 예약내역조회 페이지를 들어가서 날짜를 클릭했을때 해당 날짜 예약 정보를 요청하는 로직
export const __getHospitalDayReservationList = createAsyncThunk(
  "GET_HOSPITALDAYRESERVATIONLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospital/reservationDateList", {
        params: {
          reservationDate: payload.reservationDate,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 병원 로그인 후 예약내역조회페이지에서 해당 날짜 예약 정보를 요청한 후 특정 예약 정보를 클릭시 예약 상세정보를 요청하는 로직
export const __getHospitalDayReservationDetail = createAsyncThunk(
  "GET_HOSPITALDAYRESERVATIONDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospital/reservationInfo", payload)
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
    // 병원찾기 페이지에서 검색 후 나온 병원 클릭 후 예약하기 버튼을 눌렀을 때 해당병원 전체 예약 정보를 불러오는 로직
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
    //병원찾기 페이지에서 검색 후 나온 병원 클릭 후 예약하기 버튼을 눌렀을 때  해당 병원 진료 예약 로직
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
    // 병원 로그인 후 예약내역 조회 페이지를 들어갔을 때 캘린더에 들어갈 예약정보를 요청하는 로직
    [__getHospitalReservation.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalReservation.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = {
        reservationId: action.payload.reservationId,
        memberId: action.payload.memberId,
        hospitalId: action.payload.hospitalId,
        departmentId: action.payload.departmentId,
        departmentName: action.payload.departmentName,
        reservationDate: action.payload.reservationDate,
        reservationTime: action.payload.reservationTime,
        reservationMember: action.payload.reservationMember,
        reservationTel: action.payload.reservationTel,
        reservationContent: action.payload.reservationContent,
      }
    },
    [__getHospitalReservation.rejected]: (state, action) => {
      state.isLoading = false
    },
    // 병원 로그인 후 예약내역조회 페이지를 들어가서 날짜를 클릭했을때 해당 날짜 예약 정보를 요청하는 로직
    [__getHospitalDayReservationList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalDayReservationList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = [
        {
          reservationId: action.payload.reservationId,
          memberId: action.payload.memberId,
          hospitalId: action.payload.hospitalId,
          departmentId: action.payload.departmentId,
          reservationDate: action.payload.reservationDate,
          reservationTime: action.payload.reservationTime,
          reservationMember: action.payload.reservationMember,
          reservationTel: action.payload.reservationTel,
          reservationContent: action.payload.reservationContent,
          departmentName: action.payload.departmentName,
        },
      ]
    },
    [__getHospitalDayReservationList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 병원 로그인 후 예약내역조회페이지에서 해당 날짜 예약 정보를 요청한 후 특정 예약 정보를 클릭시 예약 상세정보를 요청하는 로직
    [__getHospitalDayReservationDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalDayReservationDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = action.payload
    },
    [__getHospitalDayReservationDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default reservationSlice.reducer
