import React from "react"
import { styled } from "styled-components"
import CounselingHistoryModal from "./CounselingHistoryModal"

function CounselingHistory() {
  return (
    <Wrap>
      <CounselingHistoryWrap>
        <CounselingHistoryHeader>
          <CounselingHistoryTitle>나의 상담내역</CounselingHistoryTitle>
        </CounselingHistoryHeader>
        <CounselingHistoryModal />
        <CounselingHistoryFooter>이전 1 2 3 4 5 다음 </CounselingHistoryFooter>
      </CounselingHistoryWrap>
    </Wrap>
  )
}

export default CounselingHistory

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`
const CounselingHistoryWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`
const CounselingHistoryHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const CounselingHistoryTitle = styled.span`
  font-size: 30px;
  font-weight: 600;
`

const CounselingHistoryFooter = styled.div`
  width: 1300px;
  height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
