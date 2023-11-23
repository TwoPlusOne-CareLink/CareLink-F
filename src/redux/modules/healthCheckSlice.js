import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  healthCheck: {
    checkId: "",
    memberId: "",
    gender: "",
    age: "",
    height: "",
    weight: "",
    systolicBloodPressure: "",
    relaxationBloodPressure: "",
    bloodSugar: "",
    heartRate: "",
    healthMemo: "",
  },
  checkListInfo: {
    memberId: "",
    memberName: "",
    age: "",
    gender: "",
    checkListInfoDtoList: [
      {
        checkId: "",
        memberId: "",
        memberName: "",
        healthMemo: "",
        nowdate: "",
      },
    ],
  },
  isLoading: false,
  error: false,
}

// 헬스케어 체크리스트 페이지 접속시, 유저의 정보 및, 내가 작성한 헬스케어 체크리스트를 불러오는 로직 로직(이름, 성별, 나이)
export const __getHealthCheckInfo = createAsyncThunk(
  "GET_HEALTHCHECKMEMBER",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/checkList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 헬스케어 체크리스트 폼 제출하는 로직
export const __addHealthCheck = createAsyncThunk(
  "ADD_HEALTHCHECK",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/user/checkAdd", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// // 내가 작성한 헬스케어 체크리스트를 불러오는 로직
// export const __getHealthCheckList = createAsyncThunk(
//   "GET_HEALTHCHECKLIST",
//   async (payload, thunkAPI) => {
//     try {
//       const data = await axiosIns.get("/healthchecklist", payload)
//       return thunkAPI.fulfillWithValue(data)
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code)
//     }
//   }
// )

// 내가 작성한 헬스케어 체크리스트 상세내역을 불러오는 로직
export const __getHealthCheckDetail = createAsyncThunk(
  "GET_HEALTHCHECKDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/checkListInfo", {
        params: {
          checkId: payload.checkId,
        },
      })
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
    [__getHealthCheckInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHealthCheckInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.checkListInfo = {
        memberId: action.payload.data.memberId,
        memberName: action.payload.data.memberName,
        age: action.payload.data.age,
        gender: action.payload.data.gender,
        checkListInfoDtoList: [
          {
            checkId: action.payload.data.checkListInfoDtoList.checkId,
            memberId: action.payload.data.checkListInfoDtoList.memberId,
            memberName: action.payload.data.checkListInfoDtoList.memberName,
            healthMemo: action.payload.data.checkListInfoDtoList.healthMemo,
            nowdate: action.payload.data.checkListInfoDtoList.nowdate,
          },
        ],
      }
    },
    [__getHealthCheckInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },

    // 헬스케어 체크리스트 폼을 제출하는 로직
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
    // // 내가 작성한 헬스케어 체크리스트를 불러오는 로직
    // [__getHealthCheckList.pending]: (state, action) => {
    //   state.isLoading = true
    // },
    // [__getHealthCheckList.fulfilled]: (state, action) => {
    //   state.isLoading = false
    //   state.healthCheck = action.payload
    // },
    // [__getHealthCheckList.rejected]: (state, action) => {
    //   state.isLoading = false
    //   state.error = action.payload
    // },
    // 내가 작성한 헬스케어 체크리스트 상세내역을 불러오는 로직
    [__getHealthCheckDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHealthCheckDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.healthCheck = {
        checkId: action.payload.data.checkId,
        memberId: action.payload.data.memberId,
        memberName: action.payload.data.memberName,
        gender: action.payload.data.gender,
        age: action.payload.data.age,
        height: action.payload.data.height,
        weight: action.payload.data.weight,
        heartRate: action.payload.data.heartRate,
        bloodSugar: action.payload.data.bloodSugar,
        systolicBloodPressure: action.payload.data.systolicBloodPressure,
        relaxationBloodPressure: action.payload.data.relaxationBloodPressure,
        healthMemo: action.payload.data.healthMemo,
        bpResult: action.payload.data.bpResult,
        bsResult: action.payload.data.bsResult,
        hrResult: action.payload.data.hrResult,
        bmi: action.payload.data.bmi,
      }
    },
    [__getHealthCheckDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default healthCheckSlice.reducer
