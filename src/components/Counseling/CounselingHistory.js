import React, { useEffect } from "react"
import { styled } from "styled-components"
import CounselingHistoryModal from "./CounselingHistoryModal"
import { useDispatch } from "react-redux"
import { __getMyCounselingList } from "../../redux/modules/counselingSlice"

function CounselingHistory() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(__getMyCounselingList)
  }, [])

  return (
    <Wrap>
      <CounselingTop>
        <CounselingTopTitle>내가 작성한 상담내역</CounselingTopTitle>
      </CounselingTop>
      <CounselingHistoryWrap>
        {/* <CounselingHistoryHeader>
          <CounselingHistoryTitle>나의 상담내역</CounselingHistoryTitle>
        </CounselingHistoryHeader> */}
        <CounselingHistoryModal dispatch={dispatch} />
        {/* <CounselingHistoryFooter>이전 1 2 3 4 5 다음 </CounselingHistoryFooter> */}
      </CounselingHistoryWrap>
    </Wrap>
  )
}

export default CounselingHistory

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CounselingTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const CounselingTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
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
