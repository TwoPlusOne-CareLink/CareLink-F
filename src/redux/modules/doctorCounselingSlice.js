import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  counseling: {
    counselingId: "",
    counselingTitle: "",
    memberId: "",
    memberName: "",
    departmentId: "",
    departmentName: "",
    counselingContent: "",
    counselingDate: "",
    counselingImage: "",
    counselingImageName: "",
  },
  counselingReply: [
    {
      patientId: "",
      counselingId: "",
      counselingTitle: "",
      counselingContent: "",
      counselingImage: "",
      counselingImageName: "",
      doctorImage: "",
      doctorImageName: "",
      doctorId: "",
      doctorName: "",
      departmentName: "",
      replyId: "",
      commentContent: "",
      likedByPatient: "",
    },
  ],
  reply: {
    counselingId: "",
    commentContent: "",
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
      const counselingId = payload.counselingId
      const data = await axiosIns.get(
        `/doctor/counselingDetail/${counselingId}`
      )
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
      const data = await axiosIns.post(
        "/doctor/createReply",
        // {
        //   params: {
        //     counselingId: payload.counselingId,
        //     commentContent: payload.commentContent,
        //   },
        // }
        payload
      )
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
      const data = await axiosIns.get("/doctor/myCounselingResult", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
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
      state.counseling = [
        {
          counselingId: action.payload.data.counselingId,
          counselingTitle: action.payload.data.counselingTitle,
          memberId: action.payload.data.memberId,
          memberName: action.payload.data.memberName,
          departmentId: action.payload.data.departmentId,
          departmentName: action.payload.data.departmentName,
          counselingContent: action.payload.data.counselingContent,
          counselingDate: action.payload.data.counselingDate,
          counselingImage: action.payload.data.counselingImage,
          counselingImageName: action.payload.data.counselingImageName,
        },
      ]
    },
    [__getDoctorCounselingList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 의사 입장에서 상담을 클릭했을때 나오는 정보를 불러오는 로직
    [__getDoctorCounselingDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDoctorCounselingDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counselingReply = [
        {
          patientId: action.payload.data.patientId,
          counselingId: action.payload.data.counselingId,
          counselingTitle: action.payload.data.counselingTitle,
          counselingContent: action.payload.data.counselingContent,
          counselingImage: action.payload.data.counselingImage,
          counselingImageName: action.payload.data.counselingImageName,
          doctorImage: action.payload.data.doctorImage,
          doctorImageName: action.payload.data.doctorImageName,
          doctorId: action.payload.data.doctorId,
          departmentName: action.payload.data.departmentName,
          replyId: action.payload.data.replyId,
          commentContent: action.payload.data.commentContent,
          likedByPatient: action.payload.data.likedByPatient,
        },
      ]
    },
    [__getDoctorCounselingDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 의사가 상담 댓글 내용을 입력하고 답변을 등록시켜주는 로직
    [__addDoctorCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addDoctorCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counselingReply = action.payload
    },
    [__addDoctorCounseling.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 의사 상담내역을 불러오는 로직
    [__getDoctorCompleteCounselingList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDoctorCompleteCounselingList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = {
        counselingId: action.payload.data.counselingId,
        counselingTitle: action.payload.data.counselingTitle,
        memberId: action.payload.data.memberId,
        memberName: action.payload.data.memberName,
        departmentId: action.payload.data.departmentId,
        departmentName: action.payload.data.departmentName,
        counselingContent: action.payload.data.counselingContent,
        counselingImage: action.payload.data.counselingImage,
        counselingImageName: action.payload.data.counselingImageName,
      }
    },
    [__getDoctorCompleteCounselingList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
  },
})

export default doctorCounselingSlice.reducer
