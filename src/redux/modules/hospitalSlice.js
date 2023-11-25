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
    departmentNames: [],
    doctorInfo: [
      {
        doctorId: "",
        doctorName: "",
        departmentId: "",
        departmentName: "",
        imgFile: "",
        doctorImg: "",
      },
    ],
    doctorList: [
      {
        doctorId: "",
        doctorName: "",
        departmentId: "",
        departmentName: "",
        likeCount: "",
      },
    ],
    doctorDetail: {
      doctorImg: "",
      doctorId: "",
      doctorName: "",
      doctorTel: "",
      departmentName: "",
      hospitalName: "",
      counselingCount: "",
      likeCount: "",
    },
  },

  isLoading: false,
  error: null,
}

// 병원찾기란에서 필요한 모든 데이터를 불러오는 요청로직
export const __getHospitalInfo = createAsyncThunk(
  "GET_HOSPITALINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/hospitalList", {
        params: {
          hospitalName: payload.hospitalName,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 병원찾기란에서 검색했을때 검색결과를 불러오는 로직
export const __getHospitalSearch = createAsyncThunk(
  "GET_HOSPITALSEARCH",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/user/hospitalList", {
        params: {
          hospitalName: payload.hospitalName,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 검색한 병원을 클릭했을때 선택한 병원에 대한 정보모달창이 뜨는데, 거기에 들어갈 정보를 요청하는 로직
export const __getHospitalDetailInfo = createAsyncThunk(
  "GET_HOSPITALDETAILINFO",
  async (payload, thunkAPI) => {
    try {
      const hospitalId = payload.hospitalId
      const data = await axiosIns.get(
        `/user/hospitalInfo/${hospitalId}`,
        payload
      )
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
// 직렬화 문제로 인하여 serialized관련 코드를 추가
// 직렬화의 목적은 메모리에 저장된 데이터 구조나 객체를 전송 가능한 형식으로 변환하는 과정, 주요 목적은 데이터를 저장하거나 다른 시스템과 공유하기 위해 효율적인 형식으로 변환

// 병원 입장에서 의사목록을 불러오는 로직
export const __getHospitalDoctorList = createAsyncThunk(
  "GET_HOSPITALDOCTORLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospital/doctorList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// 병원 입장에서 의사 상세정보를 띄워주는 로직
export const __getHospitalDoctorInfo = createAsyncThunk(
  "GET_HOSPITALDOCTORINFO",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospital/doctorDetail", {
        params: {
          doctorId: payload.doctorId,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {},
  extraReducers: {
    // 등록된 전체 병원 데이터를 불러오는 로직
    [__getHospitalInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalInfo.fulfilled]: (state, action) => {
      state.isLoading = false

      if (action.payload.data) {
        state.hospital = {
          hospitalId: action.payload.data.hospitalId,
          hospitalName: action.payload.data.hospitalName,
          address: action.payload.data.address,
          weekdayOpeningtime: action.payload.data.weekdayOpeningtime,
          weekendOpeningtime: action.payload.data.weekendOpeningtime,
          latlng: {
            lat: action.payload.data.latlng?.lat,
            lng: action.payload.data.latlng?.lng,
          },
          tel: action.payload.data.tel,
          holidayCheck: action.payload.data.holidayCheck,
          lunchHour: action.payload.data.lunchHour,
          departmentId: action.payload.data.departmentId,
          departmentName: [action.payload.data.departmentName],
        }
      }
    },
    [__getHospitalInfo.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 전체 병원 중, 찾고자 하는 병원 검색할 때 사용하는 로직
    [__getHospitalSearch.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalSearch.fulfilled]: (state, action) => {
      state.isLoading = false
      state.hospital = {
        hospitalId: action.payload.data.hospitalId,
        hospitalName: action.payload.data.hospitalName,
        address: action.payload.data.address,
        latlng: {
          lat: action.payload.data.latlng?.lat,
          lng: action.payload.data.latlng?.lng,
        },
        tel: action.payload.data.tel,
      }
    },
    [__getHospitalSearch.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 검색한 병원을 클릭했을떄, 선택한 병원의 아이디에 맞는 정보를 불러오는 로직
    [__getHospitalDetailInfo.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getHospitalDetailInfo.fulfilled]: (state, action) => {
      state.isLoading = false
      state.hospital = {
        hospitalId: action.payload.data.hospitalId,
        hospitalName: action.payload.data.hospitalName,
        address: action.payload.data.address,
        weekdayOpeningtime: action.payload.data.weekdayOpeningTime,
        weekendOpeningtime: action.payload.data.weekendOpeningTime,
        tel: action.payload.data.tel,
        holidayCheck: action.payload.data.holidayCheck,
        lunchHour: action.payload.data.lunchHour,
        latlng: {
          lat: action.payload.data.latlng.lat,
          lng: action.payload.data.latlng.lng,
        },
        totalLike: action.payload.data.totalLike,
        departmentNames: [action.payload.data.departmentNames],
        doctorInfo: [
          {
            doctorId: action.payload.data.doctorInfo.doctorId,
            doctorName: action.payload.data.doctorInfo.doctorName,
            departmentId: action.payload.data.doctorInfo.departmentId,
            doctorImg: action.payload.data.doctorInfo.doctorImg,
            fileName: action.payload.data.doctorInfo.fileName,
            departmentName: action.payload.data.doctorInfo.departmentName,
          },
        ],
      }
    },
  },
  [__getHospitalDetailInfo.rejected]: (state, action) => {
    state.isLoading = false
    state.error = action.error
  },
  // 병원 입장에서 의사목록을 불러오는 로직
  [__getHospitalDoctorList.pending]: (state, action) => {
    state.isLoading = true
  },
  [__getHospitalDoctorList.fulfilled]: (state, action) => {
    state.isLoading = false
    state.doctorList = [
      {
        doctorId: action.payload.data.doctorId,
        doctorName: action.payload.data.doctorName,
        departmentId: action.payload.data.departmentId,
        departmentName: action.payload.data.departmentName,
        likeCount: action.payload.data.likeCount,
      },
    ]
  },
  [__getHospitalDoctorList.rejected]: (state, action) => {
    state.isLoading = false
    state.error = action.error
  },
  // 병원 입장에서 의사 상세정보를 띄워주는 로직
  [__getHospitalDoctorInfo.pending]: (state, action) => {
    state.isLoading = true
  },
  [__getHospitalDoctorInfo.fulfilled]: (state, action) => {
    state.isLoading = false
    state.doctorDetail = {
      doctorImg: action.payload.data.doctorImg,
      doctorId: action.payload.data.doctorId,
      doctorName: action.payload.data.doctorName,
      doctorTel: action.payload.data.doctorTel,
      departmentName: action.payload.data.departmentName,
      hospitalName: action.payload.data.hospitalName,
      counselingCount: action.payload.data.counselingCount,
      likeCount: action.payload.data.likeCount,
    }
  },
  [__getHospitalDoctorInfo.rejected]: (state, action) => {
    state.isLoading = false
    state.error = action.error
  },
})

export default hospitalSlice.reducer
