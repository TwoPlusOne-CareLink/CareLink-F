import React from "react"
import HealthCheck from "../components/HealthCheck/HealthCheck"
import MainNav from "../components/Main/MainNav"
import { styled } from "styled-components"

function HealthCheckPage() {
  return (
    <PageWrap>
      <MainNav />
      <HealthCheck />
    </PageWrap>
  )
}

export default HealthCheckPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
