import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

function DoctorMain() {
  const navigate = useNavigate()

  const DGoToLogIn = () => {
    navigate("/signin")
  }

  return (
    <Wrap>
      <DMainWrapper>
        <DMainHeader>
          <DMainHeaderTitle>CareLink</DMainHeaderTitle>
          <DMainHeaderContent>
            건강한 내일을 연결하다 <br />
            아플 때, 더 가까워지는 케어링크
          </DMainHeaderContent>
        </DMainHeader>
        <DMainBody>
          <DCunsultingBtn>비대면 상담목록</DCunsultingBtn>
          <DCunsultingListBtn>비대면 상담내역</DCunsultingListBtn>
          <DLogInBtn onClick={DGoToLogIn}>로그인</DLogInBtn>
        </DMainBody>
      </DMainWrapper>
    </Wrap>
  )
}

export default DoctorMain

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const DMainWrapper = styled.div`
  width: 1000px;
  height: 700px;
  margin: auto;
`
/**메인 헤더 */
const DMainHeader = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
/*헤더 CareLink 타이틀 */
const DMainHeaderTitle = styled.span`
  height: 100%;
  margin-right: 15%;
  font-size: 7rem;
  font-family: "GmarketSansMeduim";
  user-select: none;
`
/**헤더 CareLink 소개 */
const DMainHeaderContent = styled.span`
  font-size: 25px;
  text-align: center;
  user-select: none;
`

const DMainBody = styled.div`
  width: 100%;
  height: 50%;
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
`
const DCunsultingBtn = styled.button`
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
const DCunsultingListBtn = styled.button`
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
const DLogInBtn = styled.button`
  border: transparent;
  border-radius: 16px;
  background-color: white;
  box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.08);
  font-size: 40px;

  &:hover {
    box-shadow: 8px 4px 62px 2px rgba(34, 51, 89, 0.12);
  }
`
