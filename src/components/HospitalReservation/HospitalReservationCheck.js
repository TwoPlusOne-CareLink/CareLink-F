import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import Calendar from "../../assets/images/CalenderExample.png"
import HospitalReservationModal from "./HospitalReservationModal"
// import HospitalReservationCalendar from "./HospitalReservationCalendar"
import { useDispatch } from "react-redux"
import { __getHospitalReservation } from "../../redux/modules/reservationSlice"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { __getHospitalDayReservationList } from "../../redux/modules/reservationSlice"

function HospitalReservationCheck() {
  const dispatch = useDispatch()
  const [reservation, setReservation] = useState([])
  const [clickDate, setClickDate] = useState()
  const [reservationDate, setReservationDate] = useState()
  const [reservationMember, setReservationMember] = useState()
  const [reservationData, setReservationData] = useState()

  const [selectedReservationDate, setSelectedReservationDate] = useState()
  const events =
    reservation &&
    reservation.map((item) => ({
      start: `${item.reservationDate}T${item.reservationTime}`,
      title: `${item.departmentName}예약진료`,
      rendering: "backgroundColor",
    }))

  const dayReservationRequestButton = (info) => {
    const clickDate = info.dateStr
    setSelectedReservationDate(clickDate)
    console.log(clickDate, "해당날짜짜")
    dispatch(__getHospitalDayReservationList({ reservationDate: clickDate }))
      .then((response) => {
        if (response) {
          setReservationData(response.payload.data)
          console.log(response.payload.data, "되나요")
        }
      })
      .catch((error) => {
        console.log(error, "에러에오")
      })
  }

  useEffect(() => {
    dispatch(__getHospitalReservation())
      .then((response) => {
        if (response) {
          console.log(response.payload.data)
          setReservation(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error, "병원 로그인후 캘린더 정보 요청 에러")
      })
  }, [])

  return (
    <Wrap>
      <HospitalTop>
        <HospitalTopTitle>예약내역 조회</HospitalTopTitle>
      </HospitalTop>
      <HospitalCheckWrap>
        <HospitalReservationCalendar>
          <UpperDiv>
            <FullCalendar
              plugins={[dayGridPlugin, interactionPlugin]}
              initialView="dayGridMonth"
              dayMaxEvents={true}
              height={"700px"}
              buttonText={{ today: "오늘" }}
              headerToolbar={{
                start: "prev",
                center: "title today",
                end: "next",
              }}
              events={events}
              eventTimeFormat={{
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              }}
              locale="ko"
              displayEventTime={true}
              selectable={true}
              dateClick={(info) => dayReservationRequestButton(info)}
            />
          </UpperDiv>
        </HospitalReservationCalendar>

        <HospitalCheckForm>
          <HospitalCheckFormHeader>
            <CheckFormName>예약자</CheckFormName>
            <CheckFormDiagnosis>진료과목</CheckFormDiagnosis>
            <CheckFormText>진료내용</CheckFormText>
            <CheckFormTime>시간</CheckFormTime>
          </HospitalCheckFormHeader>
          <HospitalReservationModal
            reservationData={reservationData}
            dispatch={dispatch}
          />
        </HospitalCheckForm>
      </HospitalCheckWrap>
    </Wrap>
  )
}

export default HospitalReservationCheck

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const HospitalTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const HospitalTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
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
const HospitalReservationCalendar = styled.div`
  width: 800px;
  height: 700px;
  z-index: 0;
`

const UpperDiv = styled.div`
  z-index: 0;
  .fc {
    width: 800px;
    user-select: none;
  }

  .fc-toolbar-chunk {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: red;
  }

  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }
`

const HospitalCheckForm = styled.div`
  width: 550px;
  height: 675px;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.2);
  user-select: none;
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
