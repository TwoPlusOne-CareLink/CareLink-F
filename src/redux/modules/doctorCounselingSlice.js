import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  counseling: {
    counselingid: "",
    counselingTitle: "",
    memberId: "",
    memberName: "",
    departmentId: "",
    departmentName: "",
    counselingContent: "",
    counselingImage: "",
    counselingImageName: "",
  },
  counselingReply: {
    replyId: 0,
    counselingId: 0,
    memberId: "doctor1",
    doctorName: "이승진",
    doctorImg: "",
    commentContent: "",
    commentDate: "",
    departmentName: "",
  },
  isLoading: false,
  error: false,
}

// 의사 입장에서 상담댓글이 아직 안달린 비대면 상담에 대한 리스트를 불러오는 로직
export const __getDoctorCounselingList = createAsyncThunk(
  "GET_DOCTORCOUNSELINGLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/doctor/counselingList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 의사 입장에서 상담을 클릭했을때 나오는 정보를 불러오는 로직
export const __getDoctorCounselingDetail = createAsyncThunk(
  "GET_DOCTORCOUNSELINGDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/doctor/counselingDetail", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 의사가 상담 댓글 내용을 입력하고 답변을 등록시켜주는 로직
export const __addDoctorCounseling = createAsyncThunk(
  "ADD_DOCTORCOUNSELING",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/doctor/createReply", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 의사 상담내역을 불러오는 로직
export const __getDoctorCompleteCounselingList = createAsyncThunk(
  "GET_DOCOTRCOUNSELINGLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/doctor/myCounselingList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      // return thunkAPI
    }
  }
)

export const doctorCounselingSlice = createSlice({
  name: "doctorCounseling",
  initialState,
  reducers: {},
  extraReducers: {
    // 의사 입장에서 상담댓글이 아직 안달린 비대면 상담에 대한 리스트를 불러오는 로직
    [__getDoctorCounselingList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDoctorCounselingList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = action.payload
    },
    [__getDoctorCounselingList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 의사 입장에서 상담을 클릭했을때 나오는 정보를 불러오는 로직
    [__getDoctorCounselingDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDoctorCounselingDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.doctorCounseling = action.payload
    },
    [__getDoctorCounselingDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 의사가 상담 댓글 내용을 입력하고 답변을 등록시켜주는 로직
    [__addDoctorCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addDoctorCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counselingReply.push(action.payload)
    },
    [__addDoctorCounseling.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 의사 상담내역을 불러오는 로직
    [__getDoctorCompleteCounselingList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDoctorCompleteCounselingList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = action.payload
    },
    [__getDoctorCompleteCounselingList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export default doctorCounselingSlice.reducer
