import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorCounselingHistory from "../components/DoctorCounseling/DoctorCounselingHistory"
import { styled } from "styled-components"

function DoctorCounselingHistoryPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorCounselingHistory />
    </PageWrap>
  )
}

export default DoctorCounselingHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
