import React from "react"
import HospitalSearch from "../components/HospitalSearch/HospitalSearch"
import MainNav from "../components/Main/MainNav"
import styled from "styled-components"

function HospitalSearchPage() {
  return (
    <PageWrap>
      <MainNav />
      <HospitalSearch />
      
    </PageWrap>
  )
}

export default HospitalSearchPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
