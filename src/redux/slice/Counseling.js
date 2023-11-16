import { createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  counseling: {
    counselingId:"",
    counselingTitle:"",
    memberId:"",
    departmentId:"",
    counselingContent:"",
    counselingImage:"",
    counselingImageName:"",
    counselingDate:""
  }
}

const __AddCounseling = createAsyncThunk(
  "ADD_COUNSELING"
)