import React from "react"
import { styled } from "styled-components"
import DoctorHistoryModal from "./DoctorCompleteHistoryModal"

function DoctorCounselingCompleteHistory() {
  return (
    <Wrap>
      <DoctorTop>
        <DoctorTopTitle>비대면 상담내역</DoctorTopTitle>
      </DoctorTop>
      <DoctorHistoryWrap>
        <DoctorHistoryModal />
        {/* <DoctorHistoryFooter>이전 1 2 3 4 5 다음</DoctorHistoryFooter> */}
      </DoctorHistoryWrap>
    </Wrap>
  )
}

export default DoctorCounselingCompleteHistory

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DoctorTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const DoctorTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`

const DoctorHistoryWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`
const DoctorHistoryHeader = styled.div`
  width: 1300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DoctorHistoryHeaderTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
  user-select: none;
`

const DoctorHistoryFooter = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
