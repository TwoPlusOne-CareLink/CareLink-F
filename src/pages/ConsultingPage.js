import React from "react"
import Consulting from "../components/Consulting/Consulting"
import MainNav from "../components/Main/MainNav"
import { styled } from "styled-components"

function ConsultingPage() {
  return (
    <PageWrap>
      <MainNav />
      <Consulting />
    </PageWrap>
  )
}

export default ConsultingPage
const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
