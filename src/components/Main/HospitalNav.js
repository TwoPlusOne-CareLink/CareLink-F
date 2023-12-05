import React from "react"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

function DoctorNav() {
  const navigate = useNavigate()

  const HGoToMain = () => {
    navigate("/hospital")
  }

  const HGoToLogout = () => {
    Swal.fire({
      title: "로그아웃 되었습니다 !",
      icon: "success",
      closeOnClickOutside: false,
      confirmButtonColor: "#223359",
    }).then(function () {
      localStorage.removeItem("token")
      localStorage.removeItem("memberId")
      localStorage.removeItem("token")
      navigate("/hospital")
    })
  }

  const GoToHospitalDoctorList = () => {
    navigate("/hospital/doctorList")
  }

  const GoToHospitalcheck = () => {
    navigate("/hospital/check")
  }

  return (
    <Wrap>
      <NavWrapper>
        <NavBarHeader>
          <NavBarTitle onClick={HGoToMain}>
            비대면 <br />
            상담 플랫폼 <Hr /> CareLink
          </NavBarTitle>
        </NavBarHeader>
        <NavBody>
          <NavMenu>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToHospitalDoctorList}>
                의사목록조회
              </NavMenuItemTitle>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToHospitalcheck}>
                예약내역조회
              </NavMenuItemTitle>
            </NavMenuItem>
          </NavMenu>
        </NavBody>
        <NavFooter>
          <NavLogout onClick={HGoToLogout}>로그아웃</NavLogout>
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
  font-size: 30px;
  user-select: none;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
