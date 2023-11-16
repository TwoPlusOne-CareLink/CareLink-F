import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import { styled } from "styled-components"
import { useEffect, useState } from "react"

function ReservationCalendar({ reservation }) {
  const events = reservation.map((item) => ({
    start: `${item.reservationDate}T${item.reservationTime}`,
    title: `${item.departmentName}예약진료`,
    rendering: "backgroundColor",
  }))

  return (
    <UpperDiv>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dayMaxEvents={true}
        height={"645px"}
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
      />
    </UpperDiv>
  )
}
export default ReservationCalendar

const UpperDiv = styled.div`
  .fc-header-toolbar {
    width: 100%;
    height: 6%;
    display: flex;
    justify-content: space-between;
  }

  .fc-button {
    width: 53px;
    height: 30px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #223359;
  }

  .fc {
    width: 870px;
    margin-left: 10px;
  }

  .fc-toolbar-chunk {
    margin: 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .fc-today {
    background-color: #223359;
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
