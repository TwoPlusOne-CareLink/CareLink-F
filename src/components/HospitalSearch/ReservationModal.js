import React, { useState } from "react"
import styled from "styled-components"
import CalendarImg from "../../assets/images/CalenderExample.png"
import "react-datepicker/dist/react-datepicker.module.css"
import DatePicker from "./ReservationDatePicker"

function ReservationModal({ hospitalResultToggle }) {
  const [reservationModal, setReservationModal] = useState()

  const reservationToggle = () => {
    setReservationModal(!reservationModal)
  }

  const reservationComplete = () => {
    alert("예약이 완료되었습니다.")
    setReservationModal(!reservationModal)
    hospitalResultToggle()
  }

  return (
    <HospitalBtns>
      <ReservationBtn onClick={reservationToggle}>예약하기</ReservationBtn>
      {reservationModal && (
        <ReservationWrap>
          <ReservationOverlay>
            <ReservationContent>
              <ReservationHeader>
                <ReservationTitle>예약하기</ReservationTitle>
              </ReservationHeader>
              <ReservationBody>
                <ReservationCalendar />
                <ReservationForm>
                  <ReservationFormNames>
                    <ReservationName>예약자</ReservationName>
                    <ReservationInput placeholder="예약자 성함 입력" />
                  </ReservationFormNames>
                  <ReservationFormDate>
                    <ReservationDateName>예약날짜</ReservationDateName>
                    <ReservationDate>
                      <DatePicker />
                    </ReservationDate>
                  </ReservationFormDate>
                  <ReservationTimes>
                    <ReservationTimeName>예약시간</ReservationTimeName>
                    <ReservationTime>
                      <SelectTime>09:00 ~ 10:00</SelectTime>
                      <SelectTime>10:00 ~ 11:00</SelectTime>
                      <SelectTime>11:00 ~ 12:00</SelectTime>
                      <SelectTime>12:00 ~ 13:00</SelectTime>
                      <SelectTime>14:00 ~ 15:00</SelectTime>
                      <SelectTime>15:00 ~ 16:00</SelectTime>
                      <SelectTime>16:00 ~ 17:00</SelectTime>
                      <SelectTime>17:00 ~ 18:00</SelectTime>
                      <SelectTime>18:00 ~ 19:00</SelectTime>
                    </ReservationTime>
                  </ReservationTimes>
                  <ReservationDiagnosis>
                    <ReservationDiagnosisName>
                      진료과목
                    </ReservationDiagnosisName>
                    <ReservationDiagnosisList>
                      <SelectDiagnosis>내과</SelectDiagnosis>
                      <SelectDiagnosis>소아과</SelectDiagnosis>
                      <SelectDiagnosis>이비인후과</SelectDiagnosis>
                      <SelectDiagnosis>치과</SelectDiagnosis>
                    </ReservationDiagnosisList>
                  </ReservationDiagnosis>
                  <ReservationTels>
                    <ReservationTelName>연락처</ReservationTelName>
                    <ReservationTel placeholder="전화번호 입력" />
                  </ReservationTels>
                  <ReservationTexts>
                    <ReservationTextName>예약내용</ReservationTextName>
                    <ReservationText placeholder="진료받고자 하는 내용을 입력해주세요."></ReservationText>
                  </ReservationTexts>
                  <ReservationBtns>
                    <ReservationComplete onClick={reservationComplete}>
                      예약하기
                    </ReservationComplete>
                    <ReservationCancel onClick={reservationToggle}>
                      예약취소
                    </ReservationCancel>
                  </ReservationBtns>
                </ReservationForm>
              </ReservationBody>
            </ReservationContent>
          </ReservationOverlay>
        </ReservationWrap>
      )}
      <BackBtn onClick={hospitalResultToggle}>뒤로가기</BackBtn>
    </HospitalBtns>
  )
}

export default ReservationModal

const HospitalBtns = styled.div`
  width: 330px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationBtn = styled.button`
  width: 150px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 25px;
  color: white;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
const BackBtn = styled.button`
  width: 150px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 25px;
  color: white;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`

const ReservationWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
`

const ReservationOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  position: fixed;
`
const ReservationContent = styled.div`
  width: 1100px;
  height: 700px;
  border-radius: 12px;
  background-color: white;
  top: 0;
  left: 0;
  transform: translate(-5%, -4%);
`

const ReservationHeader = styled.div`
  width: 1100px;
  height: 70px;
  border-bottom: 1px solid #dcdcdc;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ReservationTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`

const ReservationBody = styled.div`
  width: 1100px;
  height: 630px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const ReservationCalendar = styled.div`
  width: 700px;
  height: 600px;
  border-radius: 12px;
  margin: 0 10px;
  background-image: url(${CalendarImg});
  background-size: cover;
`
const ReservationForm = styled.div`
  width: 360px;
  height: 550px;
  margin: 0 10px;
  border: transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ReservationFormNames = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationName = styled.span`
  font-family: "GmarketSansMedium";
`
const ReservationInput = styled.input`
  width: 260px;
  height: 30px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const ReservationFormDate = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationDateName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationDate = styled.div``

const ReservationTimes = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationTimeName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationTime = styled.select`
  width: 265px;
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
  outline: none;
`
const SelectTime = styled.option`
  text-align: center;
`
const ReservationDiagnosis = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationDiagnosisName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationDiagnosisList = styled.select`
  width: 265px;
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
  outline: none;
  user-select: none;
`
const SelectDiagnosis = styled.option`
  text-align: center;
`
const ReservationTels = styled.div`
  width: 340px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationTelName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationTel = styled.input`
  width: 262px;
  height: 30px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const ReservationTexts = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationTextName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationText = styled.textarea`
  width: 255px;
  height: 170px;
  padding: 5px;
  border: 1px solid black;
  resize: none;
`
const ReservationBtns = styled.div`
  width: 260px;
  height: 60px;
  /* margin-left: auto; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const ReservationComplete = styled.button`
  width: 120px;
  height: 40px;
  margin-right: auto;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 20px;
  color: white;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
const ReservationCancel = styled.button`
  width: 120px;
  height: 40px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 20px;
  color: white;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
