import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorCounselingList from "../components/DoctorCounseling/DoctorCounselingList"
import { styled } from "styled-components"

function DoctorCounselingPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorCounselingList />
    </PageWrap>
  )
}

export default DoctorCounselingPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: r;
`
