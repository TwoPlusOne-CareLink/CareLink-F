import React from "react"
import DoctorNav from "../components/Main/DoctorNav"
import DoctorCunsultingList from "../components/DoctorCunsulting/DoctorCunsultingList"
import { styled } from "styled-components"

function DoctorCunsultingPage() {
  return (
    <PageWrap>
      <DoctorNav />
      <DoctorCunsultingList />
    </PageWrap>
  )
}

export default DoctorCunsultingPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: r;
`
