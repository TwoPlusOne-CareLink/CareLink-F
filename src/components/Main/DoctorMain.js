import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "../../assets/images/Logo.jpg"

function DoctorMain() {
  const token = localStorage.getItem("token")
  const role = localStorage.getItem("role")

  const navigate = useNavigate()

  const DGoToLogIn = () => {
    navigate("/login")
  }

  const DLogout = () => {
    navigate("/doctor")
    alert("로그아웃 되었습니다 !")
    localStorage.removeItem("token")
    localStorage.removeItem("memberId")
    localStorage.removeItem("role")
  }

  const DGoToCounselingList = () => {
    navigate("/doctor/counselinglist")
  }
  const GoToDCounselingHistory = () => {
    navigate("/doctor/counselinghistory")
  }

  return (
    <Wrap>
      <DMainWrapper>
        <DMainContents>
          <DMainHeader>
            <DMainTitleImg />
            <DMainHeaderContent>
              건강한 내일을 연결하다 <br />
              아플 때, 더 가까워지는 케어링크
            </DMainHeaderContent>
          </DMainHeader>
          <DMainBody>
            <DCounselingBtn onClick={DGoToCounselingList}>
              비대면 상담목록
            </DCounselingBtn>
            <DCounselingListBtn onClick={GoToDCounselingHistory}>
              비대면 상담내역
            </DCounselingListBtn>
            {token !== null && role === "ROLE_DOCTOR" ? (
              <DLogoutBtn onClick={DLogout}>로그아웃</DLogoutBtn>
            ) : (
              <DLogInBtn onClick={DGoToLogIn}>로그인</DLogInBtn>
            )}
          </DMainBody>
        </DMainContents>
      </DMainWrapper>
    </Wrap>
  )
}

export default DoctorMain

/*메인 전체를 감싸는 div */
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #223359;
  display: flex;
`
/*의사메인 div */
const DMainWrapper = styled.div`
  width: 1275px;
  height: 800px;
  margin: auto;
  border: transparent;
  border-radius: 20px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  display: flex;
`
const DMainContents = styled.div`
  width: 1000px;
  height: 650px;
  margin: auto;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

/**의사메인 헤더 */
const DMainHeader = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const DMainTitleImg = styled.div`
  width: 500px;
  height: 200px;
  margin-right: 50px;
  background-image: url(${Logo});
  background-size: cover;
  user-select: none;
`

/*의사헤더 CareLink 타이틀 */
const DMainHeaderTitle = styled.span`
  height: 100%;
  margin-right: 15%;
  font-size: 7rem;
  font-family: "GmarketSansMeduim";
  user-select: none;
`
/**의사헤더 CareLink 소개 */
const DMainHeaderContent = styled.span`
  font-size: 25px;
  text-align: center;
  user-select: none;
`
/*의사메인 버튼들을 감싸는 div */
const DMainBody = styled.div`
  width: 100%;
  height: 45%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
`
/*비대면 상담목록 버튼 */
const DCounselingBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #223359;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
/*비대면 상담내역 버튼 */
const DCounselingListBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #4dc9c2;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  &:hover {
    box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.05);
    cursor: pointer;
  }
`
/*로그인 화면 이동 버튼 */
const DLogInBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
/*의사 로그아웃 */
const DLogoutBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
    cursor: pointer;
  }
`
