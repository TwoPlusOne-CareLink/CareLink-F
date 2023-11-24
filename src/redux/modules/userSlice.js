import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  member: {
    memberId: "",
    password: "",
    memberName: "",
    memberEmail: "",
    memberTel: "",
    memberAddress: "",
    memberAddressDetail: "",
  },
  reservation: {
    reservationId: "",
    memberId: "",
    hospitalId: "",
    hospitalName: "",
    departmentName: "",
    reservationDate: "",
    reservationTime: "",
    nowdate: "",
    reservationMember: "",
    reservationTel: "",
    reservationContent: "",
  },
  isLoading: false,
  isLogin: false,
  error: null,
}

// 현재 유저 정보를 불러오는 로직
export const __getUserInfo = createAsyncThunk(
  "GET_USERINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/modifyMemberInfo", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 현재 유저 정보를 업데이트 하는 로직
export const __updateUserInfo = createAsyncThunk(
  "PUT_USERINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.put("/user/modifyMemberInfo", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 현재 유저가 예약한 병원예약 정보 전체를 불러오는 로직

export const __getUserReservation = createAsyncThunk(
  "GET_USERRESERVATION",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/getMyReservation", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 현재 유저가 예약한 날짜에 대한 예약정보를 불러오는 로직
export const __getUserReservationDetail = createAsyncThunk(
  "GET_USERRESERVATIONDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/getMyReservationDetail", {
        params: {
          reservationDate: payload.reservationDate,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue
    }
  }
)

// 현재 유저가 예약한 날짜에 대한 예약정보를 삭제하는 로직
export const __deleteUserReservation = createAsyncThunk(
  "DELETE_USERRESERVATION",
  async (payload, thunkAPI) => {
    try {
      const reservationId = payload.reservationId
      const data = await axiosIns.delete(
        `/user/hospitalReservationDelete/${reservationId}`,
        payload
      )
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const userSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    // 현재 유저 정보를 불러오는 로직
    [__getUserInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.member = {
        memberId: action.payload.data.memberId,
        memberName: action.payload.data.memberName,
        memberEmail: action.payload.data.memberEmail,
        memberTel: action.payload.data.memberTel,
        memberAddress: action.payload.data.memberAddress,
        memberAddressDetail: action.payload.data.memberAddressDetail,
      }
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 현재 유저 정보를 업데이트 하는 로직
    [__updateUserInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__updateUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.member = {
        ...state.member,
        memberId: action.payload.memberId,
        password: action.payload.password,
        memberName: action.payload.memberName,
        memberEmail: action.payload.memberEmail,
        memberTel: action.payload.memberTel,
        memberAddress: action.payload.memberAddress,
        memberAddressDetail: action.payload.memberAddressDetail,
      }
    },
    [__updateUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 현재 유저가 예약한 캘린더에 들어갈 병원예약 정보 전체를 불러오는 로직
    [__getUserReservation.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getUserReservation.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = {
        reservationId: action.payload.reservationId,
        memberId: action.payload.memberId,
        hospitalId: action.payload.hospitalId,
        hospitalName: action.payload.hospitalName,
        departmentName: action.payload.departmentName,
        reservationDate: action.payload.reservationDate,
        reservationTime: action.payload.reservationTime,
        nowdate: action.payload.nowdate,
        reservationMember: action.payload.reservationMember,
        reservationTel: action.payload.reservationTel,
        reservationContent: action.payload.reservationContent,
      }
    },
    [__getUserReservation.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 현재 유저가 예약한 날짜에 대한 예약정보를 불러오는 로직
    [__getUserReservationDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getUserReservationDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = {
        reservationId: action.payload.reservationId,
        memberId: action.payload.memberId,
        hospitalId: action.payload.hospitalId,
        hospitalName: action.payload.hospitalName,
        departmentName: action.payload.departmentName,
        reservationDate: action.payload.reservationDate,
        reservationTime: action.payload.reservationTime,
        nowdate: action.payload.nowdate,
        reservationMember: action.payload.reservationMember,
        reservationTel: action.payload.reservationTel,
        reservationContent: action.payload.reservationContent,
      }
      // state.reservation = {
      //   reservationDate: action.payload.reservationDate,
      // }
    },
    [__getUserReservationDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 현재 유저가 예약한 날짜에 대한 예약정보를 삭제하는 로직
    [__deleteUserReservation.pending]: (state, action) => {
      state.isLoading = true
    },
    [__deleteUserReservation.fulfilled]: (state, action) => {
      state.isLoading = false
      state.reservation = action.payload
    },
    [__deleteUserReservation.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
  },
})

export default userSlice.reducer
