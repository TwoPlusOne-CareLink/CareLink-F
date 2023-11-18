import { createAsyncThunk } from "@reduxjs/toolkit"
import { axiosIns } from "../../api/api"

const initialState = {

}

// 병원 입장에서 의사목록을 불러오는 로직
export const __getHospitalDoctorList = createAsyncThunk(
  "GET_HOSPITALDOCTORLIST",
  async (payload, thunkAPI) => {
    try {
      const data = await axiosIns.get("/hospitaldoctorlist", payload)
      return thunkAPI.fulfillWithValue(data)
    } catch(error) {
      return thunkAPI.rejectWithValue(error.code)
    }
  }
)

// export const doctor