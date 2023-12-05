import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../assets/images/Logo.jpg"
import Swal from "sweetalert2"

function HospitalMain() {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")
  const navigate = useNavigate()

  const HGoToLogIn = () => {
    navigate("/login")
  }

  const HLogout = () => {
    Swal.fire({
      title: "로그아웃이 완료되었습니다.",
      icon: "success",
      closeOnClickOutside: false,
      confirmButtonColor: "#223359",
    }).then(function () {
      navigate("/hospital")
      localStorage.removeItem("token")
      localStorage.removeItem("memberId")
      localStorage.removeItem("role")
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
      <HMainWrapper>
        <HMainContents>
          <HMainHeader>
            <HMainTitleImg />
            <HMainHeaderContent>
              건강한 내일을 연결하다 <br />
              아플 때, 더 가까워지는 케어링크
            </HMainHeaderContent>
          </HMainHeader>
          <HMainBody>
            <HDoctorListBtn onClick={GoToHospitalDoctorList}>
              의사목록조회
            </HDoctorListBtn>
            <HReservationBtn onClick={GoToHospitalcheck}>
              예약내역조회
            </HReservationBtn>
            {token !== null && role === "ROLE_ADMIN" ? (
              <HLogoutBtn onClick={HLogout}>로그아웃</HLogoutBtn>
            ) : (
              <HLogInBtn onClick={HGoToLogIn}>로그인</HLogInBtn>
            )}
          </HMainBody>
        </HMainContents>
      </HMainWrapper>
    </Wrap>
  )
}

export default HospitalMain

/*병원 메인 전체를 감싸는 div */
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-color: #223359;
`
/*병원 메인을 감싸는 div */
const HMainWrapper = styled.div`
  width: 1275px;
  height: 800px;
  border: transparent;
  border-radius: 20px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
  display: flex;
  background-color: white;
`
const HMainContents = styled.div`
  width: 1000px;
  height: 650px;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/**병원메인 헤더 */
const HMainHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const HMainTitleImg = styled.div`
  width: 500px;
  height: 200px;
  margin-right: 50px;
  background-image: url(${Logo});
  background-size: cover;
  user-select: none;
`

/*병원헤더 CareLink 타이틀 */
const HMainHeaderTitle = styled.span`
  height: 100%;
  margin-right: 15%;
  font-size: 7rem;
  font-family: "GmarketSansMeduim";
  user-select: none;
`

/**병원헤더 CareLink 소개 */
const HMainHeaderContent = styled.span`
  font-size: 25px;
  text-align: center;
  user-select: none;
`

/*병원메인을 감싸는 div */
const HMainBody = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
`

/*병원 의사목록 버튼 */
const HDoctorListBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #223359;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  user-select: none;
  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
/*병원 예약 목록 버튼 */
const HReservationBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #4dc9c2;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  user-select: none;
  &:hover {
    box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.05);
    cursor: pointer;
  }
`
/*로그인 버튼 */
const HLogInBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
const HLogoutBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
