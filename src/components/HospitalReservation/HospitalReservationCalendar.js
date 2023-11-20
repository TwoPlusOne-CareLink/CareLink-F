import React from "react"
import { styled } from "styled-components"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { __getHospitalDayReservationList } from "../../redux/modules/reservationSlice"

function HospitalReservationCalendar({ reservation, dispatch }) {
  const events = reservation.map((item) => ({
    start: `${item.reservationDate}T${item.reservationTime}`,
    title: `${item.departmentName}예약진료`,
    rendering: "backgroundColor",
  }))

  const dayReservationRequestButton = () => {
    dispatch(__getHospitalDayReservationList)
  }

  return (
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
        dateClick={function () {
          alert("하이")
        }}
      />
    </UpperDiv>
  )
}

export default HospitalReservationCalendar

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
