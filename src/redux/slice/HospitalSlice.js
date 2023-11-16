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

const HospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: {
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
  },
})

export default HospitalSlice
