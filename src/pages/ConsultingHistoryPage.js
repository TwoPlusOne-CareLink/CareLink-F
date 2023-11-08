import React from "react"
import MainNav from "../components/Main/MainNav"
import ConsultingHistory from "../components/Consulting/ConsultingHistory"
import styled from "styled-components"

function ConsultingHistoryPage() {
  return (
    <PageWrap>
      <MainNav />
      <ConsultingHistory />
    </PageWrap>
  )
}

export default ConsultingHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
