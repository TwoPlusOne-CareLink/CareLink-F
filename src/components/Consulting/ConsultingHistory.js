import React from "react"
import { styled } from "styled-components"
import ConsultingHistoryModal from "./ConsultingHistoryModal"

function ConsultingHistory() {
  return (
    <Wrap>
      <ConsultingHistoryWrap>
        <ConsultingHistoryHeader>
          <ConsultingHistoryTitle>나의 상담내역</ConsultingHistoryTitle>
        </ConsultingHistoryHeader>
        <ConsultingHistoryModal />
        <ConsultingHistoryFooter>이전 1 2 3 4 5 다음 </ConsultingHistoryFooter>
      </ConsultingHistoryWrap>
    </Wrap>
  )
}

export default ConsultingHistory

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`
const ConsultingHistoryWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`
const ConsultingHistoryHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ConsultingHistoryTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const ConsultingHistoryFooter = styled.div`
  width: 1300px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
