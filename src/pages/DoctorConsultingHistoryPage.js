import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorConsultingHistory from "../components/DoctorConsulting/DoctorConsultingHistory"
import { styled } from "styled-components"

function DoctorConsultingHistoryPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorConsultingHistory />
    </PageWrap>
  )
}

export default DoctorConsultingHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
