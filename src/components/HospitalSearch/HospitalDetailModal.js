import React, { useState } from "react"
import styled from "styled-components"
import KaKaoMap from "../../assets/images/KaKaoMap.png"
import DoctorProfileImg from "../../assets/images/DoctorProfileImg.jpg"
import ReservationModal from "./ReservationModal"
import HospitalMainModal from "./HospitalMainModal"

function HospitalDetailModal() {
  const [hospitalModals, setHospitalModals] = useState()

  function hospitalModalsToggle(hospitalId) {
    setHospitalModals(
      hospitalModals === hospitalId ? !hospitalModals : hospitalId
    )
  }

  // function hospitalResultToggle(hospitalId) {

  //   setHospitalModals((prevModals) => {
  //     if (prevModals.includes(hospitalId)) {
  //       return prevModals.filter((modalId) => modalId !== hospitalId)
  //     } else {
  //       return [...prevModals, HospitalMainModal]
  //     }
  //   })
  // }

  const [hospital, setHospital] = useState([
    {
      hospitalId: 1,
      name: "하늘하늘병원",
      address: "서울특별시 강동구 강동로 하늘하늘병원 111",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      lat: "33.450705",
      lng: "126.570677",
      tel: "02-4786-7835",
    },
    {
      hospitalId: 2,
      name: "나풀나풀나풀나풀병원",
      address: "서울특별시 강동구 강동로 나풀나풀나풀나풀병원",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      lat: "33.450936",
      lng: "126.569477",
      tel: "02-489-7898",
    },
    {
      hospitalId: 3,
      name: "하늘병원",
      address: "서울특별시 강동구 강동로 하늘병원 111",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      lat: "33.450879",
      lng: "126.56994",
      tel: "02-1234-7111",
    },
  ])

  return (
    <MapSearchResults>
      {hospital.map((item) => (
        <MapSearchResult key={item.hospitalId} onClick={hospitalModalsToggle}>
          <ResultName>{item.name}</ResultName>
          <ResultAddress>{item.address}</ResultAddress>
          <ResultTel>{item.tel}</ResultTel>
        </MapSearchResult>
      ))}
      {hospitalModals &&
        hospital.map((item) => (
          <HospitalModalWrap key={item.hospitalId}>
            <HospitalModalOverlay>
              <HospitalModalContent>
                <HospitalContents>
                  <HospitalContent>
                    <HospitalTitles>
                      <HospitalTitle>{item.name}</HospitalTitle>
                      <HospitalLike>❤️100</HospitalLike>
                    </HospitalTitles>
                    <HospitalAddress>
                      서울특별시 강동구 강동로 하늘하늘병원
                    </HospitalAddress>
                    <HospitalTels>
                      <HospitalTelTitle>병원번호</HospitalTelTitle>
                      <HospitalTel>02-4568-7865</HospitalTel>
                    </HospitalTels>
                    <HospitalDayTime>
                      <DayTimeTitle>진료일 및 진료시간</DayTimeTitle>
                      <DayTimeContent>
                        <DayContent>
                          <DayTitle>매 주 월 ~ 금</DayTitle>
                          <TimeTitle>09:00 ~ 19:00</TimeTitle>
                        </DayContent>
                        <DayContent>
                          <DayTitle>점심시간</DayTitle>
                          <TimeTitle>18:00 ~ 23:00</TimeTitle>
                        </DayContent>
                        <DayContent>
                          <DayTitle>매 주 토요일</DayTitle>
                          <TimeTitle>18:00 ~ 23:00</TimeTitle>
                        </DayContent>
                        <DayContent>
                          <DayTitle>공휴일 및 일요일</DayTitle>
                          <TimeTitle>휴무</TimeTitle>
                        </DayContent>
                      </DayTimeContent>
                    </HospitalDayTime>
                    <HospitalDiagonias>
                      <DiagoniasTitle>진료과목</DiagoniasTitle>
                      <DiagoniasItems>
                        <DiagoniasItem>소아과</DiagoniasItem>
                        <DiagoniasItem>내과</DiagoniasItem>
                        <DiagoniasItem>안과</DiagoniasItem>
                      </DiagoniasItems>
                    </HospitalDiagonias>
                    <HospitalDoctors>
                      <DoctorsTitle>의사정보</DoctorsTitle>
                      <DoctorInfos>
                        <DoctorInfo>
                          <DoctorImg />
                          <DoctorName>이코사 의사</DoctorName>
                          <DoctorItem>내과</DoctorItem>
                        </DoctorInfo>
                        <DoctorInfo>
                          <DoctorImg />
                          <DoctorName>이코사 의사</DoctorName>
                          <DoctorItem>내과</DoctorItem>
                        </DoctorInfo>
                        <DoctorInfo>
                          <DoctorImg />
                          <DoctorName>이코사 의사</DoctorName>
                          <DoctorItem>내과</DoctorItem>
                        </DoctorInfo>
                        <DoctorInfo>
                          <DoctorImg />
                          <DoctorName>이코사 의사</DoctorName>
                          <DoctorItem>내과</DoctorItem>
                        </DoctorInfo>
                        <DoctorInfo>
                          <DoctorImg />
                          <DoctorName>이코사 의사</DoctorName>
                          <DoctorItem>내과</DoctorItem>
                        </DoctorInfo>
                      </DoctorInfos>
                    </HospitalDoctors>
                  </HospitalContent>
                  <HospitalContent2>
                    <HospitalMap />
                    <ReservationModal
                      hostpitalModals={hospitalModals}
                      hospitalModalsToggle={hospitalModalsToggle}
                    />
                  </HospitalContent2>
                </HospitalContents>
              </HospitalModalContent>
            </HospitalModalOverlay>
          </HospitalModalWrap>
        ))}
    </MapSearchResults>
  )
}

export default HospitalDetailModal

const MapSearchResults = styled.div`
  width: 720px;
  height: 530px;
  margin-right: 10px;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #223359;
    border-radius: 4px;
  }
`

const MapSearchResult = styled.div`
  margin: 7px auto;
  padding: 12px;
  border: transparent;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  font-size: 18px;

  &:hover {
    background-color: #223359;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
`
const ResultNumber = styled.div``
const ResultName = styled.div`
  width: 176px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const ResultAddress = styled.div`
  width: 320px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const ResultTel = styled.div`
  width: 140px;
`

const HospitalModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const HospitalModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(49, 49, 49, 0.8);
  position: fixed;
`
const HospitalModalContent = styled.div`
  width: 1000px;
  height: 650px;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 14%;
  left: 23%;
  transform: translate(0, 0);
  position: absolute;
`
const HospitalContents = styled.div`
  display: flex;
  flex-direction: row;
`
const HospitalContent = styled.div`
  width: 480px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const HospitalTitles = styled.div`
  width: 480px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HospitalTitle = styled.div`
  margin-left: 10px;
  font-size: 35px;
  font-weight: 600;
`
const HospitalLike = styled.div`
  font-size: 20px;
`
const HospitalAddress = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`

const HospitalContent2 = styled.div`
  width: 400px;
  height: 550px;
  margin-left: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const HospitalMap = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 12px;
  background-image: url(${KaKaoMap});
  background-size: cover;
`

const HospitalTels = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const HospitalTelTitle = styled.span`
  margin-right: 10px;
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
`
const HospitalTel = styled.div`
  font-size: 20px;
`

const HospitalDayTime = styled.div`
  user-select: none;
`

const DayTimeContent = styled.div`
  margin-top: 10px;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
`
const DayTimeTitle = styled.span`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
`

const DayContent = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const DayTitle = styled.div`
  margin-right: 12px;
  font-weight: 600;
`
const TimeTitle = styled.div``

const HospitalDiagonias = styled.div`
  user-select: none;
`
const DiagoniasItems = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, auto));
  place-items: center;
`
const DiagoniasTitle = styled.div`
  padding: 10px;
  font-size: 20px;
  font-weight: 600;
`
const DiagoniasItem = styled.span`
  width: 80%;
  padding: 6px;
  border-radius: 8px;
  background-color: #223359;
  text-align: center;
  color: white;
`

const HospitalDoctors = styled.div`
  width: 100%;
`
const DoctorsTitle = styled.div`
  margin-left: 10px;
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: bold;
  user-select: none;
`

const DoctorInfos = styled.div`
  border-radius: 12px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(20%, 0));
  place-items: center;
`
const DoctorInfo = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const DoctorImg = styled.div`
  width: 55px;
  height: 55px;
  border: 1px solid black;
  border-radius: 50%;
  background-image: url(${DoctorProfileImg});
  background-size: cover;
`
const DoctorName = styled.span`
  margin-top: 10px;
`
const DoctorItem = styled.span``
