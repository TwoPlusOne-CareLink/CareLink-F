import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function HospitalMain() {
  const navigate = useNavigate()

  const HGoToLogIn = () => {
    navigate("/signin")
  }

  return (
    <Wrap>
      <HMainWrapper>
        <HMainHeader>
          <HMainHeaderTitle>CareLink</HMainHeaderTitle>
          <HMainHeaderContent>
            건강한 내일을 연결하다 <br />
            아플 때, 더 가까워지는 케어링크
          </HMainHeaderContent>
        </HMainHeader>
        <HMainBody>
          <HCunsultingBtn>의사목록조회</HCunsultingBtn>
          <HCunsultingListBtn>예약내역조회</HCunsultingListBtn>
          <HLogInBtn onClick={HGoToLogIn}>로그인</HLogInBtn>
        </HMainBody>
      </HMainWrapper>
    </Wrap>
  )
}

export default HospitalMain

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const HMainWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin: auto;
`
/**메인 헤더 */
const HMainHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

/*헤더 CareLink 타이틀 */
const HMainHeaderTitle = styled.span`
  height: 100%;
  margin-right: 15%;
  font-size: 7rem;
  font-family: "GmarketSansMeduim";
  user-select: none;
`

/**헤더 CareLink 소개 */
const HMainHeaderContent = styled.span`
  font-size: 25px;
  text-align: center;
  user-select: none;
`
const HMainBody = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
`
const HCunsultingBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #223359;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
const HCunsultingListBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: #4dc9c2;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  color: white;
  &:hover {
    box-shadow: 8px 4px 62px 0px rgba(34, 51, 89, 0.05);
  }
`
const HLogInBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
