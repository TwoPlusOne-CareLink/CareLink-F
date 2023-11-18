import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  healthCheck: {
    checkId: "",
    memberId: "",
    genderName: "",
    age: "",
    height: "",
    weight: "",
    systolicBloodPressure: "",
    relaxationBloodPressure: "",
    bloodSugar: "",
    heartRate: "",
    healthMemo: "",
  },
  isLoading: false,
  error: false,
}

// 헬스케어 체크리스트 페이지 접속시, 유저의 정보를 불러오는 로직(이름, 성별, 나이)
export const __getHealthCheckMember = createAsyncThunk(
  "GET_HEALTHCHECKMEMBER",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/gethealthmember", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 헬스케어 체크리스트를 작성하는 로직
export const __addHealthCheck = createAsyncThunk(
  "ADD_HEALTHCHECK",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/healthcheck", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 내가 작성한 헬스케어 체크리스트를 불러오는 로직
export const __getHealthCheckList = createAsyncThunk(
  "GET_HEALTHCHECKLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/healthchecklist", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 내가 작성한 헬스케어 체크리스트 상세내역을 불러오는 로직
export const __getHealthCheckDetail = createAsyncThunk(
  "GET_HEALTHCHECKDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/healthcheckdetail", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

export const healthCheckSlice = createSlice({
  name: "healthCheck",
  initialState,
  reducers: {},
  extraReducers: {
    // 헬스케어 체크리스트 페이지 접속시, 유저의 정보를 불러오는 로직(이름, 성별, 나이)
    [__getHealthCheckMember.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHealthCheckMember.fulfilled]: (state, action) => {
      state.isLoading = false
      state.healthCheck = action.payload
    },
    [__getHealthCheckMember.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },

    // 헬스케어 체크리스트를 작성하는 로직
    [__addHealthCheck.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addHealthCheck.fulfilled]: (state, action) => {
      state.isLoading = false
      state.healthCheck.push(action.payload)
    },
    [__addHealthCheck.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 내가 작성한 헬스케어 체크리스트를 불러오는 로직
    [__getHealthCheckList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHealthCheckList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.healthCheck = action.payload
    },
    [__getHealthCheckList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 내가 작성한 헬스케어 체크리스트 상세내역을 불러오는 로직
    [__getHealthCheckDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHealthCheckDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.healthCheck = action.payload
    },
    [__getHealthCheckDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default healthCheckSlice.reducer
