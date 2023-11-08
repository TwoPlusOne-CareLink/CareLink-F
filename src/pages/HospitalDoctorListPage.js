import React from "react"
import { styled } from "styled-components"
import HospitalNav from "../components/Main/HospitalNav"
import HospitalDoctorList from "../components/HospitalDoctorList/HospitalDoctorList"

function HospitalDoctorListPage() {
  return (
    <PageWrap>
      <HospitalNav />
      <HospitalDoctorList />
    </PageWrap>
  )
}

export default HospitalDoctorListPage

const PageWrap = styled.div`
  display: flex;
  flex-direction: row;
`
