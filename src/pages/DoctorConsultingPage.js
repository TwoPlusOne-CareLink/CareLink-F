import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorConsultingList from "../components/DoctorConsulting/DoctorConsultingList"
import { styled } from "styled-components"

function DoctorConsultingPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorConsultingList />
    </PageWrap>
  )
}

export default DoctorConsultingPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: r;
`
