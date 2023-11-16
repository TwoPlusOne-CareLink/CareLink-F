import React, { useEffect, useState } from "react"
import styled from "styled-components"
import CalendarImg from "../../assets/images/CalenderExample.png"
import "react-datepicker/dist/react-datepicker.module.css"
import DatePicker from "./ReservationDatePicker"
import ReservationCalendar from "./ReservationCalendar"
import { useDispatch } from "react-redux"
import { current } from "@reduxjs/toolkit"

function ReservationModal({
  hospitalSelectedHospitalId,
  selectedHospitalId,
  hospital,
}) {
  const [member, setMember] = useState([
    {
      memberId: "sound4519",
      memberName: "이승진",
      memberTel: "010-0000-0000",
    },
  ])

  const [index, setIndex] = useState("0")
  const [departmentName, setDepartmentName] = useState("")
  const [reservationName, setReservationName] = useState("")
  const [reservationDate, setReservationDate] = useState("")
  const [reservationTime, setReservationTime] = useState("")
  const [reservationTel, setReservationTel] = useState("")
  const [reservationContent, setreservationContent] = useState("")

  const [reservationModal, setReservationModal] = useState()

  const reservationToggle = () => {
    setReservationModal(!reservationModal)
  }

  const reservationComplete = () => {
    alert("예약이 완료되었습니다.")
    console.log("")
  }

  // 예약자 이름 감지
  const onChangeReservationName = (e) => {
    const currentName = e.target.value
    setReservationName(currentName)
    console.log(reservationName)
  }

  // 예약 시간 감지
  const onChangeReservationTime = (e) => {
    const currentTime = e.target.value
    setReservationTime(currentTime)
  }

  // 진료과목 감지
  const onChangeDepartmentName = (e) => {
    const currentDepartment = e.target.value
    setDepartmentName(currentDepartment)
  }

  // 예약자 전화번호 감지
  const onChangeReservationTel = (e) => {
    const currentTel = e.target.value
    setReservationTel(currentTel)
    // console.log(currentTel)
  }

  // 예약내용 감지
  const onChangeReservationContent = (e) => {
    const currentContent = e.target.value
    setreservationContent(currentContent)
    // console.log(currentContent)
  }

  // 비동기기때문에 바로 되지않으므로 함수값이 즉시 업데이트 되지않아
  // 아래와 같이 작성항 reservationTime이 변하면 업데이트 되게끔 작성
  useEffect(() => {
    console.log(reservationTime, departmentName)
  }, [reservationTime, departmentName])

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
                <ReservationCalendarWrap>
                  <ReservationCalendar reservation={reservation} />
                </ReservationCalendarWrap>
                <ReservationForm>
                  <ReservationFormNames>
                    <ReservationName>예약자</ReservationName>
                    {member.map((item) => (
                      <ReservationInput
                        placeholder="예약자 성함 입력"
                        onChange={onChangeReservationName}
                        value={item.memberName}
                      />
                    ))}
                  </ReservationFormNames>
                  <ReservationFormDate>
                    <ReservationDateName>예약날짜</ReservationDateName>
                    <ReservationDate>
                      <DatePicker
                        reservationDate={reservationDate}
                        setReservationDate={setReservationDate}
                      />
                    </ReservationDate>
                  </ReservationFormDate>
                  <ReservationDiagnosis>
                    <ReservationDiagnosisName>
                      진료과목
                    </ReservationDiagnosisName>

                    <ReservationDiagnosisList onChange={onChangeDepartmentName}>
                      {hospital.map((item) => {
                        if (item.hospitalId === selectedHospitalId) {
                          return Array.from(new Set(item.departmentName)).map(
                            (department, index) => (
                              <SelectDiagnosis key={index}>
                                {department}
                              </SelectDiagnosis>
                            )
                          )
                        }
                      })}
                    </ReservationDiagnosisList>
                  </ReservationDiagnosis>
                  <ReservationTimes>
                    <ReservationTimeName>예약시간</ReservationTimeName>
                    <ReservationTime onChange={onChangeReservationTime}>
                      <SelectTime>09:00</SelectTime>
                      <SelectTime>10:00</SelectTime>
                      <SelectTime>11:00</SelectTime>
                      <SelectTime>12:00</SelectTime>
                      <SelectTime>14:00</SelectTime>
                      <SelectTime>15:00</SelectTime>
                      <SelectTime>16:00</SelectTime>
                      <SelectTime>17:00</SelectTime>
                      <SelectTime>18:00</SelectTime>
                    </ReservationTime>
                    <ReservationTimeTexts>
                      <ReservationTimeText>
                        한시간단위 예약가능
                      </ReservationTimeText>
                      <ReservationTimeText>주말 예약 불가</ReservationTimeText>
                    </ReservationTimeTexts>
                  </ReservationTimes>
                  <ReservationTels>
                    <ReservationTelName>연락처</ReservationTelName>
                    {member.map((item) => (
                      <ReservationTel
                        placeholder="전화번호 입력"
                        onChange={onChangeReservationTel}
                        value={item.memberTel}
                      />
                    ))}
                  </ReservationTels>
                  <ReservationContents>
                    <ReservationContentName>예약내용</ReservationContentName>
                    <ReservationContentText
                      onChange={onChangeReservationContent}
                      placeholder="진료받고자 하는 내용을 입력해주세요."
                    ></ReservationContentText>
                  </ReservationContents>
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
      <BackBtn onClick={hospitalSelectedHospitalId}>뒤로가기</BackBtn>
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
  top: -20%;
  right: 0;
  left: -40%;
  bottom: 0;
  position: fixed;
  z-index: 1;
`

const ReservationOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: -20%;
  right: 0;
  left: -40%;
  bottom: 0;
  position: fixed;
`
const ReservationContent = styled.div`
  width: 1300px;
  height: 770px;
  border-radius: 12px;
  background-color: white;
  top: 0;
  left: 0;
  transform: translate(18%, 10%);
`

const ReservationHeader = styled.div`
  width: 1300px;
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
  width: 1275px;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationCalendarWrap = styled.div`
  width: 700px;
  height: 600px;
  border-radius: 12px;
  margin: 0 10px;
`
const ReservationForm = styled.div`
  width: 360px;
  height: 620px;
  margin-top: 40px;
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
  width: 130px;
  height: 30px;
  border: 1px solid black;
  border-radius: 8px;
  outline: none;
`

const SelectTime = styled.option`
  text-align: center;
`

const ReservationTimeTexts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const ReservationTimeText = styled.span`
  margin: 2px;
  color: red;
  font-size: 13px;
  font-weight: 600;
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
  font-size: 15px;
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
const ReservationContents = styled.div`
  width: 340px;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const ReservationContentName = styled.div`
  font-family: "GmarketSansMedium";
`
const ReservationContentText = styled.textarea`
  width: 255px;
  height: 170px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 6px;
  outline: none;
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
