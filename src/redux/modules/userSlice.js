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
    memberAddressDetail: "",
    age: "",
    gender: "",
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
      state.member = action.payload
    },
    [__getUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 현재 유저 정보를 업데이트 하는 로직
    [__updateUserInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__updateUserInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.member = {
        ...state.member,
        id: action.payload.id,
        password: action.payload.password,
        memberName: action.payload.memberName,
        memberEmail: action.payload.memberEmail,
        memberTel: action.payload.memberTel,
        memberAddress: action.payload.memberAddress,
      }
    },
    [__updateUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default userSlice.reducer
