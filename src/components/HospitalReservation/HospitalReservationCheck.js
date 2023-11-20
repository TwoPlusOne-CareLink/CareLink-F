import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import Calendar from "../../assets/images/CalenderExample.png"
import HospitalReservationModal from "./HospitalReservationModal"
import HospitalReservationCalendar from "./HospitalReservationCalendar"
import { useDispatch } from "react-redux"
import { __getHospitalReservation } from "../../redux/modules/reservationSlice"

function HospitalReservationCheck() {
  const dispatch = useDispatch()

  const [reservation, setReservation] = useState([
    {
      reservationId: 1,
      memberId: "sound4519",
      hospitalId: 1,
      departmentId: 1,
      departmentName: "내과",
      reservationDate: "2023-11-09",
      reservationTime: "12:00",
      reservationMember: "이승진",
      reservationTel: "010-9303-3020",
      reservationContent: "안녕하십니까 반갑습니다",
    },
    {
      reservationId: 2,
      memberId: "sound4519",
      hospitalId: 2,
      departmentId: 2,
      departmentName: "내과",
      reservationDate: "2023-11-09",
      reservationTime: "09:00",
      reservationMember: "정성민",
      reservationTel: "010-9303-3020",
      reservationContent: "안녕하십니까 반갑습니다",
    },
    {
      reservationId: 2,
      memberId: "sound4519",
      hospitalId: 2,
      departmentId: 2,
      departmentName: "소아과",
      reservationDate: "2023-11-09",
      reservationTime: "09:00",
      reservationMember: "정성민",
      reservationTel: "010-9303-3020",
      reservationContent: "안녕하십니까 반갑습니다",
    },
    {
      reservationId: 3,
      memberId: "sound4519",
      hospitalId: 3,
      departmentId: 3,
      departmentName: "소아과",
      reservationDate: "2023-11-16",
      reservationTime: "09:00",
      reservationMember: "정성민",
      reservationTel: "010-9303-3020",
      reservationContent: "안녕하십니까 반갑습니다",
    },
    {
      reservationId: 3,
      memberId: "sound4519",
      hospitalId: 3,
      departmentId: 3,
      departmentName: "소아과",
      reservationDate: "2023-11-09",
      reservationTime: "09:00",
      reservationMember: "정성민",
      reservationTel: "010-9303-3020",
      reservationContent: "안녕하십니까 반갑습니다",
    },
  ])

  useEffect(() => {
    dispatch(__getHospitalReservation)
  })

  return (
    <Wrap>
      <HospitalCheckWrap>
        <HospitalReservationCalendar
          dispatch={dispatch}
          reservation={reservation}
        />
        <HospitalCheckForm>
          <HospitalCheckFormHeader>
            {/* <CheckFormNo>번호</CheckFormNo> */}
            <CheckFormName>예약자</CheckFormName>
            <CheckFormDiagnosis>진료과목</CheckFormDiagnosis>
            <CheckFormText>진료내용</CheckFormText>
            <CheckFormTime>시간</CheckFormTime>
          </HospitalCheckFormHeader>
          <HospitalReservationModal dispatch={dispatch} />
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
  width: 290px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const CheckFormTime = styled.span`
  width: 90px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
