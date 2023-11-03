import { BrowserRouter, Routes } from "react-router-dom"
import "./App.css"
import MainPage from "./pages/MainPage"
import { Route } from "react-router-dom"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { createGlobalStyle } from "styled-components"

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
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
