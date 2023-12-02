import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import XBtn from "../../assets/images/closewhite.png"
import Bs from "../../assets/images/bs.png"
import Bmi from "../../assets/images/bmi.png"
import HeartRate from "../../assets/images/heartRate.png"
import BloodPressure from "../../assets/images/bloodPressure.png"
import { useDispatch } from "react-redux"
import {
  __getHealthCheckDetail,
  __getHealthCheckInfo,
} from "../../redux/modules/healthCheckSlice"
import HealthCheckModal from "./HealthCheckModal"

function HealthCheckList({ checkListInfoDtoList }) {
  return (
    <HealthCheckFormList>
      <HealthCheckListTitles>
        <HealthCheckListTitle>체크리스트 작성 내역</HealthCheckListTitle>
      </HealthCheckListTitles>
      <HealthCheckListBody>
        <HealthCheckPostTitles>
          <HealthCheckPostTitleNo>번호</HealthCheckPostTitleNo>
          <HealthCheckPostTitleName>이름</HealthCheckPostTitleName>
          <HealthCheckPostTitleText>내용</HealthCheckPostTitleText>
          <HealthCheckPostTitleDate>작성날짜</HealthCheckPostTitleDate>
        </HealthCheckPostTitles>
        <HealthCheckModal checkListInfoDtoList={checkListInfoDtoList} />
      </HealthCheckListBody>
    </HealthCheckFormList>
  )
}

export default HealthCheckList

const HealthCheckFormList = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HealthCheckListTitles = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const HealthCheckListTitle = styled.div`
  font-size: 25px;
  font-family: "GmarketSansMedium";
  user-select: none;
`
const HealthCheckListBody = styled.div`
  width: 700px;
  height: 650px;
  padding: 10px;

  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.15);
`

const HealthCheckPostTitles = styled.div`
  width: 700px;
  height: 40px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`
const HealthCheckPostTitleNo = styled.span`
  width: 50px;
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleName = styled.span`
  width: 90px;
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleText = styled.span`
  width: 440px;
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleDate = styled.span`
  width: 120px;
  font-weight: 600;
  text-align: center;
`
