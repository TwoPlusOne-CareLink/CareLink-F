import { BrowserRouter, Routes, useNavigate } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage"
import { Route } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { createGlobalStyle } from "styled-components"
import DoctorMainPage from "./pages/DoctorMainPage"
import HospitalMainPage from "./pages/HospitalMainPage"
import HospitalSearchPage from "./pages/HospitalSearchPage"
import CounselingPage from "./pages/CounselingPage"
import CounselingHistoryPage from "./pages/CounselingHistoryPage"
import HealthCheckPage from "./pages/HealthCheckPage"
import UserInfoPage from "./pages/UserInfoPage"
import DoctorCounselingPage from "./pages/DoctorCounselingPage"
import DoctorCounselingCompleteHistoryPage from "./pages/DoctorCounselingCompleteHistoryPage"
import HospitalReservationCheckPage from "./pages/HospitalReservationCheckPage"
import HospitalDoctorListPage from "./pages/HospitalDoctorListPage"
import UserReservationPage from "./pages/UserReservationPage"
import DiseasePage from "./pages/DiseasePage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/disease" element={<DiseasePage />} />
          <Route path="/user/hospitalsearch" element={<HospitalSearchPage />} />
          <Route path="/user/counseling" element={<CounselingPage />} />
          <Route
            path="/user/counselinghistory"
            element={<CounselingHistoryPage />}
          />
          <Route path="/user/healthcheck" element={<HealthCheckPage />} />
          <Route path="/user/infoupdate" element={<UserInfoPage />} />
          <Route
            path="/user/userReservation"
            element={<UserReservationPage />}
          />
          <Route path="/doctor" element={<DoctorMainPage />} />
          <Route
            path="/doctor/counselinglist"
            element={<DoctorCounselingPage />}
          />
          <Route
            path="/doctor/counselinghistory"
            element={<DoctorCounselingCompleteHistoryPage />}
          />

          <Route path="/hospital" element={<HospitalMainPage />} />
          <Route
            path="/hospital/check"
            element={<HospitalReservationCheckPage />}
          />
          <Route
            path="/hospital/doctorlist"
            element={<HospitalDoctorListPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
  font-family: "GmarketSansLight";
  font-size:30px;
`
