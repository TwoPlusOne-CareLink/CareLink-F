import React from "react"
import { styled } from "styled-components"
import HospitalNav from "../components/Main/HospitalNav"
import HospitalReservationCheck from "../components/HospitalReservation/HospitalReservationCheck"

function HospitalReservationCheckPage() {
  return (
    <PageWrap>
      <HospitalNav />
      <HospitalReservationCheck />
    </PageWrap>
  )
}

export default HospitalReservationCheckPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
