import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import { useDispatch } from "react-redux"
import {
  __deleteUserReservation,
  __getUserReservation,
  __getUserReservationDetail,
} from "../../redux/modules/userSlice"
import Default from "../../assets/images/defaultReservation.png"
import FullCalendar from "@fullcalendar/react"
import dayGridPlugin from "@fullcalendar/daygrid"
import interactionPlugin from "@fullcalendar/interaction"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"

function UserReservation() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [reservation, setReservation] = useState([])
  const [reservationId, setReservationId] = useState()
  const [reservationData, setReservationData] = useState([])
  const [selectedReservationDate, setSelectedReservationDate] = useState()

  const dayReservationRequestButton = (info) => {
    const clickDate = info.dateStr
    setSelectedReservationDate(clickDate)
    dispatch(__getUserReservationDetail({ reservationDate: clickDate }))
      .then((response) => {
        if (response) {
          setReservationData([response.payload.data])
          setReservationId([response.payload.data.reservationId])
          // setReservationId(response.payload.data.reservationId)
          console.log(response.payload.data, " 결과값")
          console.log(response.payload.data.reservationId, "하하")
        }
      })
      .catch((error) => {
        console.log(error, "결과값 에러")
      })
  }
  useEffect(() => {
    dispatch(__getUserReservation())
      .then((response) => {
        if (response) {
          setReservation(response.payload.data)
          console.log(response.payload.data, "데이터담기냐?")
        }
      })
      .catch((error) => {
        console.log(error, "데이터 에러발생")
      })
  }, [])

  const events =
    reservation &&
    reservation.map((item) => ({
      start: `${item.reservationDate}T${item.reservationTime}`,
      title: `${item.departmentName}예약진료`,
      rendering: "backgroundColor",
    }))

  const reservationDeleteClick = (event) => {
    event.preventDefault()

    dispatch(__deleteUserReservation({ reservationId }))
      .then((response) => {
        if (response) {
          Swal.fire({
            title: "삭제가 완료되었습니다. ",
            icon: "success",
            closeOnClickOutside: false,
            confirmButtonColor: "#223359",
          }).then(function () {
            window.location.reload()
            // navigate("/user/userReservation")
          })
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {}, [reservationData])

  return (
    <Wrap>
      <UserReservationTop>
        <UserReservationTopTitle>나의 예약내역</UserReservationTopTitle>
      </UserReservationTop>
      <UserReservationWrap>
        <UserReservationCalendarWrap>
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
              selectable={true}
              dateClick={(info) => dayReservationRequestButton(info)}
            />
          </UpperDiv>
          {/* <UserReservationCalendar reservation={reservation} /> */}
        </UserReservationCalendarWrap>
        <UserReservaionBody>
          {reservationData && reservationData.length > 0 ? (
            reservationData.map((item) => (
              <ReservationForm key={item.reservationId}>
                <ReservationHospitals>
                  <ReservationHospitalTitle>병원명</ReservationHospitalTitle>
                  <ReservationHospitalInput
                    id="hospitalName"
                    name="hospitalName"
                    value={item.hospitalName}
                    readOnly
                  />
                </ReservationHospitals>
                <ReservationNames>
                  <ReservationNameTitle>예약자</ReservationNameTitle>
                  <ReservationNameInput
                    id="reservationMember"
                    name="reservationMember"
                    value={item.reservationMember}
                    readOnly
                  />
                </ReservationNames>
                <ReservationDates>
                  <ReservationDateTitle>예약날짜</ReservationDateTitle>
                  <ReservationDateInput
                    id="reservationDate"
                    name="reservationDate"
                    value={item.reservationDate}
                    readOnly
                  />
                </ReservationDates>
                <ReservationDiagnosiss>
                  <ReservationDiagnosisTitle>
                    진료과목
                  </ReservationDiagnosisTitle>
                  <ReservationDiagnosisInput
                    id="departmentName"
                    name="departmentName"
                    value={item.departmentName}
                    readOnly
                  />
                </ReservationDiagnosiss>
                <ReservationTimes>
                  <ReservationTimeTitle>예약시간</ReservationTimeTitle>
                  <ReservationTimeInput
                    id="reservationTime"
                    name="reservationTime"
                    value={item.reservationTime}
                    readOnly
                  />
                </ReservationTimes>
                <ReservationTels>
                  <ReservationTelTitle>연락처</ReservationTelTitle>
                  <ReservationTelInput
                    id="reservationTel"
                    name="reservationTel"
                    value={item.reservationTel}
                    readOnly
                  />
                </ReservationTels>
                <ReservationComments>
                  <ReservationCommentTitle>예약내용</ReservationCommentTitle>
                  <ReservationCommentArea
                    id="reservationContent"
                    name="reservationContent"
                    value={item.reservationContent}
                  />
                </ReservationComments>
                <ReservationButtons>
                  <ReservationDeleteButton onClick={reservationDeleteClick}>
                    예약취소
                  </ReservationDeleteButton>
                </ReservationButtons>
              </ReservationForm>
            ))
          ) : (
            <ReservationLoad />
          )}
        </UserReservaionBody>
      </UserReservationWrap>
    </Wrap>
  )
}

export default UserReservation
const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const UserReservationTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const UserReservationTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`
const UserReservationWrap = styled.div`
  width: 1400px;
  height: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const UserReservationCalendarWrap = styled.div`
  width: 600px;
  height: 640px;
  border-radius: 12px;
  margin: 0 10px;
`

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
    width: 900px;
    z-index: 0;
    position: absolute;
    user-select: none;
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

const UserReservaionBody = styled.div`
  width: 450px;
  height: 650px;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
`

const ReservationForm = styled.div`
  width: 450px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ReservationHospitals = styled.div`
  width: 350px;
  height: 60px;
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationHospitalTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationHospitalInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`

const ReservationNames = styled.div`
  width: 350px;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const ReservationNameTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationNameInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`

const ReservationDates = styled.div`
  width: 350px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationDateTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationDateInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`
const ReservationDiagnosiss = styled.div`
  width: 350px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationDiagnosisTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationDiagnosisInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`
const ReservationTimes = styled.div`
  width: 350px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationTimeTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationTimeInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`
const ReservationTels = styled.div`
  width: 350px;
  height: 60px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationTelTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationTelInput = styled.input`
  width: 230px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`
const ReservationComments = styled.div`
  width: 350px;
  height: 130px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationCommentTitle = styled.span`
  font-size: 18px;
  font-weight: 600;
`
const ReservationCommentArea = styled.textarea`
  width: 220px;
  height: 100px;
  padding: 6px;
  resize: none;
  outline: none;
`

const ReservationButtons = styled.div`
  width: 350px;
  height: 70px;

  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ReservationDeleteButton = styled.button`
  /* border:transparent; */
  width: 230px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    font-weight: 600;
  }
`

const ReservationLoad = styled.div`
  width: 450px;
  height: 650px;
  background-image: url(${Default});
  background-size: cover;
  user-select: none;
`
