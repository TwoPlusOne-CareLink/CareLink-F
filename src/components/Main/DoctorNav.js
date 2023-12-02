import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"

function DoctorNav() {
  const navigate = useNavigate()

  const GoToMain = () => {
    navigate("/doctor")
  }

  const GoToLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("memberId")
    localStorage.removeItem("role")
    navigate("/doctor")
  }

  const GoToDCounselingList = () => {
    navigate("/doctor/counselinglist")
  }

  const GoToDCounselingHistory = () => {
    navigate("/doctor/counselinghistory")
  }

  return (
    <Wrap>
      <NavWrapper>
        <NavBarHeader>
          <NavBarTitle onClick={GoToMain}>
            비대면 <br />
            상담 플랫폼 <Hr /> CareLink
          </NavBarTitle>
          {/* <NavBarTitle onClick={GoToMain}>CareLink</NavBarTitle> */}
        </NavBarHeader>
        <NavBody>
          <NavMenu>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToDCounselingList}>
                비대면 상담목록
              </NavMenuItemTitle>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToDCounselingHistory}>
                나의 상담내역
              </NavMenuItemTitle>
            </NavMenuItem>
          </NavMenu>
        </NavBody>
        <NavFooter>
          <NavLogout onClick={GoToLogout}>로그아웃</NavLogout>
        </NavFooter>
      </NavWrapper>
    </Wrap>
  )
}

export default DoctorNav

const Wrap = styled.div`
  width: 12vw;
  height: 100vh;
`
const NavWrapper = styled.div`
  width: 220px;
  height: 100%;
  background-color: #223359;
  color: white;
  z-index: 1;
  position: absolute;
`

const NavBarHeader = styled.div`
  width: 220px;
  /* height: 142px; */
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const NavBarTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  cursor: pointer;
`

const Hr = styled.hr`
  margin: 5px auto;
`

const NavBody = styled.div`
  width: 100%;
  /* height: 675px; */
  height: 70%;

  margin-bottom: auto;
`

const NavMenu = styled.div``

const NavMenuItem = styled.div`
  width: 200px;
  height: 50px;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
`

const NavMenuItemTitle = styled.button`
  font-size: 25px;
  border: transparent;
  background-color: #223359;
  color: white;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`

const NavFooter = styled.div`
  width: 220px;
  /* height: 93px; */
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NavLogout = styled.span`
  font-size: 25px;
  user-select: none;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
