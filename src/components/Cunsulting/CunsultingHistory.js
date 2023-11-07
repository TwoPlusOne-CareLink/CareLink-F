import React from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorProfileImg.jpg"
import CunsultingHistoryModal from "./CunsultingHistoryModal"

function CunsultingHistory() {
  return (
    <Wrap>
      <CunsultingHistoryWrap>
        <CunsultingHistoryHeader>
          <CunsultingHistoryTitle>나의 상담내역</CunsultingHistoryTitle>
        </CunsultingHistoryHeader>
        <CunsultingHistoryModal />
        <CunsultingHistoryFooter>이전 1 2 3 4 5 다음 </CunsultingHistoryFooter>
      </CunsultingHistoryWrap>
    </Wrap>
  )
}

export default CunsultingHistory

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`
const CunsultingHistoryWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`
const CunsultingHistoryHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CunsultingHistoryTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const CunsultingHistoryFooter = styled.div`
  width: 1300px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
