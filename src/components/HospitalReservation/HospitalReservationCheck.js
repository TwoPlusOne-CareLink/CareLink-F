import React from "react"
import { styled } from "styled-components"
import Calendar from "../../assets/images/CalenderExample.png"
import HospitalReservationModal from "./HospitalReservationModal"

function HospitalReservationCheck() {
  return (
    <Wrap>
      <HospitalCheckWrap>
        <HospitalCheckCalendar>캘린더</HospitalCheckCalendar>
        <HospitalCheckForm>
          <HospitalCheckFormHeader>
            <CheckFormNo>번호</CheckFormNo>
            <CheckFormName>예약자</CheckFormName>
            <CheckFormDiagnosis>진료과목</CheckFormDiagnosis>
            <CheckFormText>진료내용</CheckFormText>
            <CheckFormTime>시간</CheckFormTime>
          </HospitalCheckFormHeader>
          <HospitalReservationModal />
        </HospitalCheckForm>
      </HospitalCheckWrap>
    </Wrap>
  )
}

export default HospitalReservationCheck

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`
const HospitalCheckWrap = styled.div`
  width: 1400px;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const HospitalCheckCalendar = styled.div`
  width: 800px;
  height: 700px;
  background-image: url(${Calendar});
  background-size: cover;
`
const HospitalCheckForm = styled.div`
  width: 550px;
  height: 675px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.2);
`
const HospitalCheckFormHeader = styled.div`
  width: 550px;
  height: 35px;
  margin-bottom: 10px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CheckFormNo = styled.span`
  width: 40px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const CheckFormName = styled.span`
  width: 70px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const CheckFormDiagnosis = styled.span`
  width: 100px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const CheckFormText = styled.span`
  width: 250px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const CheckFormTime = styled.span`
  width: 90px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
