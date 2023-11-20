import React from "react"
import { styled } from "styled-components"
import HealthCheckBody from "./HealthCheckBody"
import HealthCheckList from "./HealthCheckList"

function HealthCheck() {
  return (
    <Wrap>
      <HealthCheckTop>
        <HealthCheckTopTitle>헬스케어</HealthCheckTopTitle>
      </HealthCheckTop>
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
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HealthCheckTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const HealthCheckTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
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
  user-select: none;
`
const HealthCheckFormTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
