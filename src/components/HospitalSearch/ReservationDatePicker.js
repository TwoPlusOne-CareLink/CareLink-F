import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import styled from "styled-components"
import { ko } from "date-fns/esm/locale"
import "react-datepicker/dist/react-datepicker.module.css"

function ReservationDatePicker({ reservationDate, setReservationDate }) {
  const [startDate, setStartDate] = useState(new Date())

  const isWeekday = (date) => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

  const onChangeDate = (date) => {
    // 시간 없이 날짜 불러오는 변수 선언
    const dateWithoutTime = new Date(date)
    // 시간에 대한 모든 구성요소를 0으로 선언하여 출력되지 않도록 함
    dateWithoutTime.setHours(0, 0, 0, 0)

    // 시간 출력에 대한 포맷 형식을 정해줌
    // Intl.DateTimeFormat접근 방식은 날짜 형식에 대한 더 많은 제어를 제공하고 브라우저나 시스템 설정에 관계없이 일관된 출력을 보장
    setReservationDate(dateWithoutTime)
    const formattedDate = new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(dateWithoutTime)

    // console.log(formattedDate)
  }

  return (
    <DateWrap>
      <StyledDatePicker
        dateFormat="yyyy-MM-dd"
        selected={reservationDate}
        onChange={onChangeDate}
        filterDate={isWeekday}
        selectsEnd
        endDate={new Date()}
        minDate={startDate}
        placeholderText="예약날짜"
        locale={ko}
      />
    </DateWrap>
  )
}

export default ReservationDatePicker

const DateWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  input {
    width: 262px;
    height: 30px;
    border: 1px solid black;
    border-radius: 8px;
    margin: auto;
    font-size: 15px;
    text-align: center;
    outline: none;
    user-select: none;
  }

  // 데이트피커
  .react-datepicker {
    width: 280px;
    border: transparent;
    box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.15);
    border-radius: 16px;
    transform: translate(-3%, 3%);
    position: absolute;

    // 최상단 헤더
    .react-datepicker__header {
      width: 280px;
      height: 80px;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
      background-color: #223359;
      color: white;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    // 최상단 좌우측 월 넘기는 버튼
    .react-datepicker__navigation--previous,
    .react-datepicker__navigation--next {
      margin-top: 14px;
    }

    // 최상단 헤더 월 / 년
    .react-datepicker__current-month {
      margin-top: 10px;
      font-size: 20px;
      color: white;
    }

    .react-datepicker__day-names {
      width: 265px;
      height: 30px;
      margin: 10px auto 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: white;
      font-size: 18px;

      .react-datepicker__day-name {
        width: 25px;
        color: white;
      }
    }
  }
  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
  }
  .react-datepicker__triangle {
    display: none;
  }
`

const StyledDatePicker = styled(ReactDatePicker)`
  .react-datepicker__header {
    // Styles for the header
    background-color: #223359;
    color: white;
  }

  .react-datepicker__month-container {
    // Styles for the body
    border: 1px solid black;
    border-radius: 8px;
    padding: 10px;
  }
`
