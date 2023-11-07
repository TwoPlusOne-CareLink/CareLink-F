import React from "react"
import Cunsulting from "../components/Cunsulting/Cunsulting"
import MainNav from "../components/Main/MainNav"
import { styled } from "styled-components"

function CunsultingPage() {
  return (
    <PageWrap>
      <MainNav />
      <Cunsulting />
    </PageWrap>
  )
}

export default CunsultingPage
const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
