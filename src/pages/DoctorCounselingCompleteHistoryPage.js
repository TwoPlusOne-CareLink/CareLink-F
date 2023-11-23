import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorCounselingCompleteHistory from "../components/DoctorCounseling/DoctorCounselingCompleteHistory"
import { styled } from "styled-components"

function DoctorCounselingCompleteHistoryPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorCounselingCompleteHistory />
    </PageWrap>
  )
}

export default DoctorCounselingCompleteHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
