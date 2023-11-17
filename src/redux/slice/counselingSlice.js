import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  counseling: {
    counselingId: "",
    counselingTitle: "",
    memberId: "",
    departmentId: "",
    counselingContent: "",
    counselingImage: "",
    counselingImageName: "",
    counselingDate: "",
  },
  isLoading: false,
  error: false,
}

// 비대면 상담을 제출하는 폼
export const __addCounseling = createAsyncThunk(
  "ADD_COUNSELING",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/counseling", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 내가 남긴 상담내역 전체리스트를 불러오기 위한 로직
export const __getMyCounselingList = createAsyncThunk(
  "GET_MYCOUNSELINGLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/counselingList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 내가 남긴 상담내역중 보고자 하는 상담을 클릭했을때 정보를 불러오는 로직
export const __getSelectMyCounseling = createAsyncThunk(
  "GET_SELECTMYCOUNSELING",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/selectcounseling", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const counselingSlice = createSlice({
  name: "counseling",
  initialState,
  reducers: {},
  extraReducers: {
    // 비대면 상담 폼을 제출하기 위한 액션 로직
    [__addCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling.push(action.payload)
    },
    [__addCounseling.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 내가 남긴 상담내역을 불러오기 위한 액션 로직
    [__getMyCounselingList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getMyCounselingList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = action.payload
    },
    [__getMyCounselingList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 내가 남긴 상담내역중 보고자 하는 상담을 클릭했을때 정보를 불러오는 액션 로직
    [__getSelectMyCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getSelectMyCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = action.payload
    },
    [__getSelectMyCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default counselingSlice.reducer
