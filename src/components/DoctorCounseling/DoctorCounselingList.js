import React from "react"
import { styled } from "styled-components"
import DoctorCounselingListModal from "./DoctorCounselingListModal"

function DoctorCounselingList() {
  return (
    <Wrap>
      <DCounselingListWrap>
        <DCounselingListHeader>
          <DCounselingListTitle>비대면 상담목록</DCounselingListTitle>
        </DCounselingListHeader>
        <DoctorCounselingListModal />
        <DCounselingListFooter>이전 1 2 3 4 5 다음</DCounselingListFooter>
      </DCounselingListWrap>
    </Wrap>
  )
}

export default DoctorCounselingList

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`

const DCounselingListWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
`

const DCounselingListHeader = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DCounselingListTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
  user-select: none;
`

const DCounselingListFooter = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
