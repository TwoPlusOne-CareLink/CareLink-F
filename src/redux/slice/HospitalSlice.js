import React from "react"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  hospital: {
    hospitalId: "",
    hospitalName: "",
    address: "",
    weekdayOpeningtime: "",
    weekendOpeningtime: "",
    latlng: { lat: "", lng: "" },
    tel: "",
    holidayCheck: "",
    lunchHour: "",
    departmentId: "",
    departmentName: [],
  },
  isLoading: false,
  error: null,
}

// 병원찾기란에서 필요한 모든 데이터를 불러오는 요청로직
export const __getHospitalInfo = createAsyncThunk(
  "GET_HOSPITALINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get(
        "/user/hospitalsearch?hospitalName='all'",
        payload
      )
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 병원찾기란에서 검색했을때 검색결과를 불러오는 로직
export const __getHospitalSearch = createAsyncThunk(
  "GET_HOSPITALSEARCH",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/hospitalsearch", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 검색한 병원을 클릭했을때 선택한 병원에 대한 정보모달창이 뜨는데, 거기에 들어갈 정보를 요청하는 로직
export const __getHospitalDetailInfo = createAsyncThunk(
  "GET_HOSPITALDETAILINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/hospitaldetailInfo", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: {
    // 등록된 전체 병원 데이터를 불러오는 로직
    [__getHospitalInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.hospital = action.payload
    },
    [__getHospitalInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 전체 병원 중, 찾고자 하는 병원 검색할 때 사용하는 로직
    [__getHospitalSearch.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalSearch.fulfilled]: (state, action) => {
      state.isLoading = false
      state.hospital = action.payload
    },
    [__getHospitalSearch.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 검색한 병원을 클릭했을떄, 선택한 병원의 아이디에 맞는 정보를 불러오는 로직
    [__getHospitalDetailInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalDetailInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.hospital = action.payload
    },
    [__getHospitalDetailInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default hospitalSlice.reducer
