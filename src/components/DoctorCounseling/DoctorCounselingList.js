import React from "react"
import { styled } from "styled-components"
import DoctorCounselingListModal from "./DoctorCounselingListModal"
import { useDispatch } from "react-redux"

function DoctorCounselingList() {
  const dispatch = useDispatch()

  return (
    <Wrap>
      <DoctorTop>
        <DoctorTopTitle>비대면 상담목록</DoctorTopTitle>
      </DoctorTop>
      <DCounselingListWrap>
        <DoctorCounselingListModal dispatch={dispatch} />

      </DCounselingListWrap>
    </Wrap>
  )
}

export default DoctorCounselingList

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
