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
import CunsultingPage from "./pages/CunsultingPage"
import CunsultingHistoryPage from "./pages/CunsultingHistoryPage"
import HealthCheckPage from "./pages/HealthCheckPage"
import UserInfoPage from "./pages/UserInfoPage"
import DoctorCunsultingPage from "./pages/DoctorCunsultingPage"

function App() {
  return (
    <>
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/hospital" element={<HospitalMainPage />} />
          <Route path="/hospitalsearch" element={<HospitalSearchPage />} />
          <Route path="/cunsulting" element={<CunsultingPage />} />
          <Route
            path="/cunsultinghistory"
            element={<CunsultingHistoryPage />}
          />
          <Route path="/healthCheck" element={<HealthCheckPage />} />
          <Route path="/userinfoupdate" element={<UserInfoPage />} />
        </Routes>
        <Routes>
          <Route path="/doctor" element={<DoctorMainPage />} />
          <Route
            path="/doctorcunsultingList"
            element={<DoctorCunsultingPage />}
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
