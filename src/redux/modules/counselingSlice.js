import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"
import { useNavigate } from "react-router-dom"

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
  counselingReply: {
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
  memeber: {
    memberId: "",
    memberName: "",
  },
  doctorLike: {
    doctorId: "",
  },
  isLoading: false,
  error: false,
}

// 비대면 상담 폼 접속시에 유저 정보를 불러오는 로직
export const __getCounselingUserInfo = createAsyncThunk(
  "GET_COUNSELINGUSERINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/requestCounseling", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 비대면 상담을 제출하는 폼
export const __addCounseling = createAsyncThunk(
  "ADD_COUNSELING",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post("/user/requestCounseling", payload)
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
      const data = await axiosIns.get("/user/counselingList")
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
      const counselingId = payload.counselingId
      const data = await axiosIns.get(
        `/user/counselingDetail/${counselingId}`,
        payload
      )
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 내가 남긴 상담내역 중 상담 답변이 달린거 확인 후 해당 의사에 대한 하트(좋아요)버튼을 클릭했을때, 카운트를 해주는 로직
export const __updateLikedCount = createAsyncThunk(
  "UPDATE_LIKEDCOUNT",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.post(
        "/user/counselingDetail/counselingLike",
        {
          params: {
            doctorId: payload.doctorId,
          },
        }
      )
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
    // 비대면 상담 폼 접속시에 유저 정보를 불러오는 로직
    [__getCounselingUserInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getCounselingUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.member = {
        memberId: action.payload.data.memberId,
        memberName: action.payload.data.memberName,
      }
    },
    [__getCounselingUserInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    // 비대면 상담 폼을 제출하기 위한 액션 로직
    [__addCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__addCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.counseling = action.payload
    },
    [__addCounseling.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
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
      state.error = action.error
    },
    // 내가 남긴 상담내역중 보고자 하는 상담을 클릭했을때 정보를 불러오는 액션 로직
    [__getSelectMyCounseling.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getSelectMyCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      // state.counseling = {
      //   counselingId: action.payload.data.counselingId,
      //   counselingTitle: action.payload.data.counselingTitle,
      //   memberId: action.payload.data.memberId,
      //   departmentId: action.payload.data.departmentId,
      //   counselingContent: action.payload.data.counselingContent,
      //   counselingImage: action.payload.data.counselingImage,
      //   counselingImageName: action.payload.data.counselingImageName,
      // }
      state.counselingReply = {
        patientId: action.payload.data.patientId,
        counselingId: action.payload.data.counselingId,
        counselingTitle: action.payload.data.counselingTitle,
        counselingContent: action.payload.data.counselingContent,
        counselingImage: action.payload.data.counselingImage,
        counselingImageName: action.payload.data.counselingImageName,
        doctorImage: action.payload.data.doctorImage,
        doctorImageName: action.payload.data.doctorImageName,
        doctorId: action.payload.data.doctorId,
        doctorName: action.payload.data.doctorName,
        departmentName: action.payload.data.departmentName,
        replyId: action.payload.data.replyId,
        commentContent: action.payload.data.commentContent,
        likedByPatient: action.payload.data.likedByPatient,
      }
    },
    [__getSelectMyCounseling.fulfilled]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 내가 남긴 상담내역 중 상담 답변이 달린거 확인 후 해당 의사에 대한 하트(좋아요)버튼을 클릭했을때, 카운트를 해주는 로직
    [__updateLikedCount.pending]: (state, action) => {
      state.isLoading = true
    },
    [__updateLikedCount.fulfilled]: (state, action) => {
      state.isLoading = false
      state.doctorLike = action.payload
    },
    [__updateLikedCount.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
  },
})

export default counselingSlice.reducer
