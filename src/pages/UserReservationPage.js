import React from "react"
import { styled } from "styled-components"
import MainNav from "../components/Main/MainNav"
import UserReservation from "../components/User/UserReservation"

function UserReservationPage() {
  return (
    <PageWrap>
      <MainNav />
      <UserReservation />
    </PageWrap>
  )
}

export default UserReservationPage
const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
