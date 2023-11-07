import React from "react"
import MainNav from "../components/Main/MainNav"
import UserInfoUpdate from "../components/User/UserInfoUpdate"
import { styled } from "styled-components"

function UserInfoPage() {
  return (
    <PageWrap>
      <MainNav />
      <UserInfoUpdate />
    </PageWrap>
  )
}

export default UserInfoPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
