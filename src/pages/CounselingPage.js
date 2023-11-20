import React from "react"
import Counseling from "../components/Counseling/Counseling"
import MainNav from "../components/Main/MainNav"
import { styled } from "styled-components"

function CounselingPage() {
  return (
    <PageWrap>
      <MainNav />
      <Counseling />
    </PageWrap>
  )
}

export default CounselingPage
const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
