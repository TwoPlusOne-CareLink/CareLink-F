import React from "react"
import styled from "styled-components"

function HospitalSearch() {
  return (
    <Wrap>
      <HospitalWrapper>미인이세요</HospitalWrapper>
    </Wrap>
  )
}

export default HospitalSearch

/*병원찾기 메인 전체 */
const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  /* display: flex; */
`
/*병원찾기 메인 */
const HospitalWrapper = styled.div`
  width: 1440px;
  height: 910px;
  /* border: 1px solid black; */
`
