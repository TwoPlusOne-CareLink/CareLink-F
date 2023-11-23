import React from "react"
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
    age: "",
    gender: "",
  },
  isLoading: false,
  isLogin: false,
  error: null,
}
// createAsyncThunk를 이용하여 작업에 대한 행동 액션을 생성 (extraReducer - pending, fulfiled, rejected)
// Redux에서는 자체적으로 비동기 처리를 지원하지 않아서, extraReducers라는 것을 사용해 createAsyncThunk로 생성한 Thunk를 등록시켜주어야함
// // extraReducers는 액션을 따로 정의한 함수에 대한 리듀서를 정의하는 역활을 담당
// 유저 로그인에 관한 로직
export const __signIn = createAsyncThunk(
  "POST_SIGNIN",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/login", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 유저 회원가입에 관한 로직
export const __signUp = createAsyncThunk(
  "POST_SIGNUP",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/signup", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const authSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [__signIn.pending]: (state, action) => {
      state.isLoading = true
    },
    [__signIn.fulfilled]: (state, action) => {
      state.isLoading = false
      state.isLogin = true
      state.member = {
        memberId: action.payload.memberId,
        password: action.payload.password,
      }
      const token = action.payload.data.token
      const memberId = action.payload.data.memberId
      const role = action.payload.data.role
      localStorage.setItem("token", token)
      localStorage.setItem("memberId", memberId)
      localStorage.setItem("role", role)
    },
    [__signIn.rejected]: (state, action) => {
      state.isLoading = false
      state.message = "오류가 발생했습니다."
    },
    [__signUp.pending]: (state, action) => {
      state.isLoading = true
    },
    [__signUp.fulfilled]: (state, action) => {
      state.isLoading = false
      state.member = {
        memberId: action.payload.memberId,
        password: action.payload.password,
        memberName: action.payload.memberName,
        memberEmail: action.payload.memberEmail,
        memberTel: action.payload.memberTel,
        memberAddress: action.payload.memberAddress,
        memberAddressDetail: action.payload.memberAddressDetail,
        age: action.payload.age,
        gender: action.payload.gender,
      }
      alert("회원가입을 축하합니다 !")
    },
    [__signUp.rejected]: (state, action) => {
      state.isLoading = false
      // state.error = action.payload
    },
  },
})

export default authSlice.reducer
