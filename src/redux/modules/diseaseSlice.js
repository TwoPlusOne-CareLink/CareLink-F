import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {
  disease: [
    {
      diseaseId: "",
      diseaseName: "",
      definition: "",
      cause: "",
      symptom: "",
      diagnosis: "",
      treatment: "",
    },
  ],
  isLoading: false,
  error: false,
}

// 질병 전체 리스트를 불러오는 로직
export const __getDiseaseList = createAsyncThunk(
  "GET_DISEASELIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/diseaseList", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

// 질병 상세정보를 불러오는 로직
export const __getDiseaseDetail = createAsyncThunk(
  "GET_DISEASEDETAIL",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/diseaseDetail", {
        params: {
          diseaseId: payload.diseaseId,
        },
      })
      return thunkAPI.fulfillWithValue(data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const diseaseSlice = createSlice({
  name: "disease",
  initialState,
  reducers: {},
  extraReducers: {
    // 질병 전체 리스트를 불러오는 로직
    [__getDiseaseList.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDiseaseList.fulfilled]: (state, action) => {
      state.isLoading = false
      state.disease = [
        {
          diseaseId: action.payload.diseaseId,
          diseaseName: action.payload.diseaseName,
          definition: action.payload.definition,
          cause: action.payload.cause,
          symptom: action.payload.symptom,
          diagnosis: action.payload.diagnosis,
          treatment: action.payload.treatment,
        },
      ]
    },
    [__getDiseaseList.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
    // 질병 상세정보를 불러오는 로직
    [__getDiseaseDetail.pending]: (state, action) => {
      state.isLoading = true
    },
    [__getDiseaseDetail.fulfilled]: (state, action) => {
      state.isLoading = false
      state.definition = {
        diseaseId: action.payload.diseaseId,
        diseaseName: action.payload.diseaseName,
        definition: action.payload.definition,
        cause: action.payload.cause,
        symptom: action.payload.symptom,
        diagnosis: action.payload.diagnosis,
        treatment: action.payload.treatment,
      }
    },
    [__getDiseaseDetail.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.error
    },
  },
})

export default diseaseSlice.reducer
