import { BrowserRouter, Routes } from "react-router-dom"
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
import DoctorCounselingHistoryPage from "./pages/DoctorCounselingHistoryPage"
import HospitalReservationCheckPage from "./pages/HospitalReservationCheckPage"
import HospitalDoctorListPage from "./pages/HospitalDoctorListPage"

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/hospitalsearch" element={<HospitalSearchPage />} />
          <Route path="/counseling" element={<CounselingPage />} />
          <Route
            path="/counselinghistory"
            element={<CounselingHistoryPage />}
          />
          <Route path="/healthcheck" element={<HealthCheckPage />} />
          <Route path="/userinfoupdate" element={<UserInfoPage />} />
        </Routes>
        <Routes>
          <Route path="/doctor" element={<DoctorMainPage />} />
          <Route
            path="/doctorcounselinglist"
            element={<DoctorCounselingPage />}
          />
          <Route
            path="/doctorcounselinghistory"
            element={<DoctorCounselingHistoryPage />}
          />
        </Routes>
        <Routes>
          <Route path="/hospital" element={<HospitalMainPage />} />
          <Route
            path="/hospitalcheck"
            element={<HospitalReservationCheckPage />}
          />
          <Route
            path="/hospitaldoctorlist"
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
