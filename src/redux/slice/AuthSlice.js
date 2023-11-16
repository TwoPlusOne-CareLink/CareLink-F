import React from "react"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  member: {
    id: "",
    password: "",
    memberName: "",
    memberEmail: "",
    memberTel: "",
    memberAddress: "",
    memberAddressD: "",
    agree: "",
    age: "",
    gender: "",
  },
  isLoading: false,
  isLogin: false,
  error: null,
}

export const __SignIn = createAsyncThunk(
  "SignIn",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/signin", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const __SignUp = createAsyncThunk(
  "SignUp",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/signup", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const AuthSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [__SignIn.pending]: (state, action) => {
      state.isLoading = true
    },
    [__SignIn.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isLogin = true
    },
    [__SignIn.rejected]: (state, action) => {
      state.isLoading = false
      state.message = "오류가 발생했습니다."
    },
    [__SignUp.pending]: (state, action) => {
      state.isLoading = true
    },
    [__SignUp.fulfilled]: (state, action) => {
      state.isLoading = false
      alert("회원가입을 축하합니다 !")
    },
    [__SignUp.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default AuthSlice
