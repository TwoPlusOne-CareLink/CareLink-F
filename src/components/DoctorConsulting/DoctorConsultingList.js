import React from "react"
import { styled } from "styled-components"
import DoctorConsultingListModal from "./DoctorConsultingListModal"

function DoctorConsultingList() {
  return (
    <Wrap>
      <DConsultingListWrap>
        <DConsultingListHeader>
          <DConsultingListTitle>비대면 상담목록</DConsultingListTitle>
        </DConsultingListHeader>
        <DoctorConsultingListModal />
        <DConsultingListFooter>이전 1 2 3 4 5 다음</DConsultingListFooter>
      </DConsultingListWrap>
    </Wrap>
  )
}

export default DoctorConsultingList

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`

const DConsultingListWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`

const DConsultingListHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DConsultingListTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
  user-select: none;
`

const DConsultingListFooter = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
