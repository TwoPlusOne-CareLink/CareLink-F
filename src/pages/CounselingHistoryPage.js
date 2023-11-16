import React from "react"
import MainNav from "../components/Main/MainNav"
import CounselingHistory from "../components/Counseling/CounselingHistory"
import styled from "styled-components"

function CounselingHistoryPage() {
  return (
    <PageWrap>
      <MainNav />
      <CounselingHistory />
    </PageWrap>
  )
}

export default CounselingHistoryPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
