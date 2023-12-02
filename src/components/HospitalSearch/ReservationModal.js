import React, { useEffect, useState } from "react"
import styled from "styled-components"
import "react-datepicker/dist/react-datepicker.module.css"
import DatePicker from "./ReservationDatePicker"
import ReservationCalendar from "./ReservationCalendar"
import { useDispatch } from "react-redux"
import {
  __addReservation,
  __getReservation,
} from "../../redux/modules/reservationSlice"
import { AnimatePresence, motion } from "framer-motion"

function ReservationModal({
  hospitalSelectedHospitalId,
  selectedHospitalId,
  hospitalId,
  hospitalDetail,
}) {
  const dispatch = useDispatch()

  const [departments, setDepartments] = useState()
  const [departmentId, setDepartmentId] = useState()
  const [departmentName, setDepartmentName] = useState("")
  const [reservations, setReservations] = useState()
  const [reservationMember, setReservationMember] = useState("")
  const [reservationDate, setReservationDate] = useState()
  const [reservationTime, setReservationTime] = useState("")
  const [reservationTel, setReservationTel] = useState("")
  const [reservationContent, setreservationContent] = useState("")
  const [reservationModal, setReservationModal] = useState()
  const [hospitalReservation, setHospitalReservation] = useState([])

  const reservationToggle = (hospitalId) => {
    setReservationModal(!reservationModal)

    dispatch(__getReservation({ hospitalId }))
      .then((response) => {
        if (response) {
          setHospitalReservation([response.payload.data])
          setDepartments(response.payload.data.departments)
          setReservations(response.payload.data.reservations)
          setReservationMember(response.payload.data.memberName)
          setReservationTel(response.payload.data.memberTel)
          console.log(
            [
              response.payload.data.departments.map(
                (department) => department.departmentId
              ),
            ],
            "아니"
          )
        }
      })
      .catch((error) => {
        console.log(error, "에러발생!")
      })
  }

  const reservationComplete = (event) => {
    event.preventDefault()

    const newReservation = {
      departmentId: departmentId,
      hospitalId: hospitalId,
      reservationContent: reservationContent,
      reservationDate: reservationDate,
      reservationMember: reservationMember,
      reservationTel: reservationTel,
      reservationTime: reservationTime,
    }

    dispatch(__addReservation(newReservation))
      .then((response) => {
        if (response) {
          alert("예약이 완료되었습니다.")
          setReservationModal(!reservationModal)
          hospitalSelectedHospitalId()
          window.location.reload()
        }
      })
      .catch((error) => {
        alert("예약에 실패했습니다" + error.message)
      })
  }

  // 예약자 이름 감지
  const onChangeReservationName = (e) => {
    const currentName = e.target.value
    // setMemberName
    // setReservationMember(currentName)
    console.log(reservationMember)
  }

  // 예약 시간 감지
  const onChangeReservationTime = (e) => {
    const currentTime = e.target.value
    setReservationTime(currentTime)
  }

  // 진료과목 감지
  const onChangeDepartment = (e) => {
    const currentDepartment = e.target.value
    setDepartmentName(currentDepartment)
    setDepartmentId(currentDepartment)
    console.log(currentDepartment)
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
    console.log(hospitalReservation, "ddd", departments, "디파트먼츠")
  }, [
    reservationTime,
    departmentName,
    hospitalReservation,
    departments,
    departmentId,
    reservations,
    reservationMember,
    reservationTel,
  ])

  return (
    <HospitalBtns>
      {hospitalDetail.map((item) => (
        <ReservationBtn onClick={() => reservationToggle(item.hospitalId)}>
          예약하기
        </ReservationBtn>
      ))}
      <AnimatePresence>
        {reservationModal && (
          <ReservationWrap>
            <ReservationOverlay>
              <ReservationContent
                initial={{ opacity: 0 }}
                animate={{ opacity: 1.5 }}
                exit={{ opacity: 0 }}
              >
                <ReservationHeader>
                  <ReservationTitle>예약하기</ReservationTitle>
                </ReservationHeader>

                <ReservationBody>
                  {hospitalReservation && hospitalReservation.length > 0 ? (
                    hospitalReservation.map((item) => (
                      <>
                        <ReservationCalendarWrap>
                          <ReservationCalendar reservations={reservations} />
                        </ReservationCalendarWrap>
                        <ReservationForm>
                          <ReservationFormNames>
                            <ReservationName>예약자</ReservationName>

                            <ReservationInput
                              placeholder="예약자 성함 입력"
                              onChange={onChangeReservationName}
                              value={item.memberName}
                            />
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

                            <ReservationDiagnosisList
                              onChange={onChangeDepartment}
                            >
                              {departments &&
                                departments.map((department) => (
                                  <SelectDiagnosis
                                    key={department.departmentId}
                                    value={department.departmentId}
                                  >
                                    {department.departmentName}
                                  </SelectDiagnosis>
                                ))}
                            </ReservationDiagnosisList>
                          </ReservationDiagnosis>
                          <ReservationTimes>
                            <ReservationTimeName>예약시간</ReservationTimeName>
                            <ReservationTime onChange={onChangeReservationTime}>
                              <SelectTime>시간 선택</SelectTime>
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
                              <ReservationTimeText>
                                주말 예약 불가
                              </ReservationTimeText>
                            </ReservationTimeTexts>
                          </ReservationTimes>
                          <ReservationTels>
                            <ReservationTelName>연락처</ReservationTelName>

                            <ReservationTel
                              placeholder="전화번호 입력"
                              onChange={onChangeReservationTel}
                              value={item.memberTel}
                            />
                          </ReservationTels>
                          <ReservationContents>
                            <ReservationContentName>
                              예약내용
                            </ReservationContentName>
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
                      </>
                    ))
                  ) : (
                    <ReservationLoad>로딩중 ...</ReservationLoad>
                  )}
                </ReservationBody>
              </ReservationContent>
            </ReservationOverlay>
          </ReservationWrap>
        )}
      </AnimatePresence>
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
const BackBtn = styled(motion.button)`
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
const ReservationContent = styled(motion.div)`
  width: 1300px;
  height: 770px;
  border-radius: 12px;
  background-color: white;
  top: 0;
  left: 0;
  transform: translate(19%, 10%);
`

const ReservationHeader = styled.div`
  width: 1300px;
  height: 70px;
  background-color: #223359;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
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
const ReservationLoad = styled.div`
  width: 500px;
  margin: auto;
  font-size: 30px;
  text-align: center;
`

const LoadSpan = styled(motion.span)`
  opacity: 0;
`

const moveMove = {
  firstDot: {
    opacity: 1,
    transition: {
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  secondDot: {
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  thirdDot: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  fourDot: {
    opacity: 1,
    transition: {
      delay: 0.75,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
  fiveDot: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
      repeat: Infinity,
      repeatDelay: 2,
    },
  },
}
