import React from "react"
import { styled } from "styled-components"
import DoctorHistoryModal from "./DoctorHistoryModal"

function DoctorConsultingHistory() {
  return (
    <Wrap>
      <DoctorHistoryWrap>
        <DoctorHistoryHeader>
          <DoctorHistoryHeaderTitle>비대면 상담내역</DoctorHistoryHeaderTitle>
        </DoctorHistoryHeader>
        <DoctorHistoryModal />
        <DoctorHistoryFooter>이전 1 2 3 4 5 다음</DoctorHistoryFooter>
      </DoctorHistoryWrap>
    </Wrap>
  )
}

export default DoctorConsultingHistory

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
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
