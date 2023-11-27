import React from "react"
import { styled } from "styled-components"
import MainNav from "../components/Main/MainNav"
import Disease from "../components/Disease/Disease"

function DiseasePage() {
  return (
    <PageWrap>
      <MainNav />
      <Disease />
    </PageWrap>
  )
}

export default DiseasePage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
