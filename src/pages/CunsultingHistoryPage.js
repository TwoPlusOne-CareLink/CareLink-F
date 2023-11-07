import React from "react"
import MainNav from "../components/Main/MainNav"
import CunsultingHistory from "../components/Cunsulting/CunsultingHistory"
import styled from "styled-components"

function CunsultingHistoryPage() {
  return (
    <PageWrap>
      <MainNav />
      <CunsultingHistory />
    </PageWrap>
  )
}

export default CunsultingHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
