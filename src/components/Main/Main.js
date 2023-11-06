import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function Main() {
  const navigate = useNavigate()

  const GoToSignIn = () => {
    navigate("/signin")
  }

  const GoToSignUp = () => {
    navigate("/signup")
  }

  const GoToHospitalSearch = () => {
    navigate("/hospitalsearch")
  }

  return (
    <Wrap>
      <MainWrapper>
        <MainHeader>
          <MainHeaderTitle>CareLink</MainHeaderTitle>
          <MainHeaderContent>
            건강한 내일을 연결하다 <br />
            아플 때, 더 가까워지는 케어링크
          </MainHeaderContent>
        </MainHeader>
        <MainBody>
          <ConsultingBtn>
            <ConsultingBtnTitle>비대면 상담</ConsultingBtnTitle>
            <ConsultingBtnContent>
              전문 의료인의 상담을 받아보세요.
            </ConsultingBtnContent>
          </ConsultingBtn>
          <SearchBtn onClick={GoToHospitalSearch}>
            <SearchBtnContent>
              내 주변에 가까운 병원이 궁금하거나
              <br />
              병원 예약을 하고자 한다면?
            </SearchBtnContent>
            <SearchBtnTitle>병원찾기</SearchBtnTitle>
          </SearchBtn>
          <MainBtn>
            <MainBtnContent>헬스케어</MainBtnContent>
          </MainBtn>
          <MainBtn>
            <MainBtnContent>질병백과</MainBtnContent>
          </MainBtn>
          <SignBtns>
            <SignInBtn onClick={GoToSignIn}>로그인</SignInBtn>
            <SignUpBtn onClick={GoToSignUp}>회원가입</SignUpBtn>
          </SignBtns>
        </MainBody>
      </MainWrapper>
    </Wrap>
  )
}

export default Main

/*메인 전체를 감싸는 div */
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

/*메인 div*/
const MainWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin: auto;
`

/**메인 헤더 */
const MainHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/*헤더 CareLink 타이틀 */
const MainHeaderTitle = styled.span`
  height: 100%;
  margin-right: 15%;
  font-size: 7rem;
  font-family: "GmarketSansMeduim";
  user-select: none;
`

/**헤더 CareLink 소개 */
const MainHeaderContent = styled.span`
  font-size: 25px;
  text-align: center;
  user-select: none;
`

/**바디 버튼 부분 */
const MainBody = styled.div`
  width: 100%;
  height: 70%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 15px;
`
/*비대면 상담 버튼 */
const ConsultingBtn = styled.button`
  height: 250px;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: #223359;
  display: grid;
  grid-column: auto / span 2;
  color: white;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
/*비대면 상담 버튼 내부 비대면 상담  */
const ConsultingBtnTitle = styled.span`
  margin-top: 40px;
  font-family: "GmarketSansMedium";
  font-size: 90px;
`
/*비대면 상담 버튼 내부 안내글귀 */
const ConsultingBtnContent = styled.span`
  margin-bottom: 20px;
  font-size: 25px;
`

/**병원찾기 버튼 */
const SearchBtn = styled.button`
  height: 250px;
  border: 1px solid transparent;
  border-radius: 16px;
  background-color: #4dc9c2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.05);
    cursor: pointer;
  }
`
/*병원찾기 타이틀 */
const SearchBtnTitle = styled.span`
  margin-top: 20px;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
`
/*병원찾기 내부 안내글귀 */
const SearchBtnContent = styled.span`
  font-size: 18px;
  color: white;
`
/*헬스케어, 질병백과,  */
const MainBtn = styled.button`
  height: 220px;
  border: 1px solid transparent;
  box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.08);
  border-radius: 16px;
  background-color: white;
  display: grid;
  place-items: center;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
/*헬스케어, 질병백과 타이틀 */
const MainBtnContent = styled.span`
  font-size: 40px;
`
/*로그인,로그아웃 버튼을 감싸는 div */
const SignBtns = styled.div`
  height: 220px;
`
/**로그인 버튼 */
const SignInBtn = styled.button`
  width: 100%;
  height: 105px;
  margin-bottom: 10px;
  border: 1px solid transparent;
  box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.08);
  border-radius: 16px;
  background-color: white;
  font-size: 40px;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
/*로그아웃 버튼 */
const SignUpBtn = styled.button`
  width: 100%;
  height: 105px;
  font-size: 40px;
  border: 1px solid transparent;
  box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.08);
  border-radius: 16px;
  background-color: white;
  user-select: none;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 90, 0.12);
  }
`
