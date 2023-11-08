import React, { useState } from "react"
import ReactDatePicker from "react-datepicker"
import styled from "styled-components"
import { ko } from "date-fns/esm/locale"
import "react-datepicker/dist/react-datepicker.module.css"

function ReservationDatePicker() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState()

  return (
    <DateWrap>
      {/* <ReactDatePicker
        dateFormat="yyyy-MM-dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={new Date()}
        endDate={null}
        minDate={startDate}
        placeholderText="시작일"
        local={ko}
      />
      <Dash>-</Dash> */}
      <ReactDatePicker
        dateFormat="yyyy-MM-dd"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={new Date()}
        endDate={null}
        minDate={startDate}
        placeholderText="예약날짜"
        local={ko}
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
`
const Dash = styled.span`
  margin: 0 5px;
`
