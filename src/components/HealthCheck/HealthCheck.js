import React from "react"
import { styled } from "styled-components"
import HealthCheckBody from "./HealthCheckBody"
import HealthCheckList from "./HealthCheckList"

function HealthCheck() {
  return (
    <Wrap>
      <HealthCheckWrap>
        <HealthCheckForm>
          <HealthCheckFormHeader>
            <HealthCheckFormTitle>일일 체크리스트 작성</HealthCheckFormTitle>
          </HealthCheckFormHeader>
          <HealthCheckBody />
        </HealthCheckForm>
        <HealthCheckList />
      </HealthCheckWrap>
    </Wrap>
  )
}

export default HealthCheck

/**포스트는 14개까지, 이후에는 페이지네이션 */

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
`
const HealthCheckWrap = styled.div`
  width: 1400px;
  height: 900px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const HealthCheckForm = styled.div`
  width: 650px;
  height: 700px;
`
const HealthCheckFormHeader = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HealthCheckFormTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
