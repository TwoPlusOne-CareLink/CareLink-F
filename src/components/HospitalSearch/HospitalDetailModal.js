import React, { useState } from "react"
import styled from "styled-components"
import DoctorProfileImg from "../../assets/images/DoctorProfileImg.jpg"
import DefaultProfileImg from "../../assets/images/User.png"
import ReservationModal from "./ReservationModal"
import HospitalMap from "./HospitalMap"

function HospitalDetailModal() {
  const [selectedHospitalId, setSelectedHospitalId] = useState(false)

  const hospitalSelectedHospitalId = () => {
    setSelectedHospitalId(!selectedHospitalId)
  }

  const [list, setList] = useState()
  const [hospital, setHospital] = useState([
    {
      hospitalId: 1,
      name: "하늘하늘병원",
      address: "서울특별시 강동구 강동로 하늘하늘병원 111",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      latlng: { lat: "33.450705", lng: "126.570677" },
      tel: "02-4786-7835",
      departmentNames: [
        {
          departmentId: 1,
          departmentName: "소아과",
        },
        {
          departmentId: 1,
          departmentName: "내과",
        },
        {
          departmentId: 3,
          departmentName: "외과",
        },
      ],
    },
    {
      hospitalId: 2,
      name: "나풀나풀나풀나풀병원",
      address: "서울특별시 강동구 강동로 나풀나풀나풀나풀병원",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      latlng: { lat: "33.450936", lng: "126.569477" },
      departmentNames: [
        {
          departmentId: 1,
          departmentName: "소아과",
        },
        {
          departmentId: 2,
          departmentName: "내과",
        },
        {
          departmentId: 3,
          departmentName: "외과",
        },
        {
          departmentId: 4,
          departmentName: "이비인후과",
        },
      ],
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
      latlng: { lat: "33.450879", lng: "126.56994" },
      departmentNames: [
        {
          departmentId: 1,
          departmentName: "소아과",
        },
        {
          departmentId: 2,
          departmentName: "내과",
        },
        {
          departmentId: 3,
          departmentName: "외과",
        },
      ],
      tel: "02-1234-7111",
    },
  ])

  const [doctorInfo, setDoctorInfo] = useState([
    {
      doctorId: 1,
      doctorImg: { DoctorProfileImg },
      imgName: "의사사진",
      hospitalId: 1,
      departmentId: 1,
      departmentName: "내과",
      doctorName: "이승진",
    },
    {
      doctorId: 2,
      doctorImg: `${DoctorProfileImg}`,
      imgName: "의사사진",
      hospitalId: 2,
      departmentId: 2,
      departmentName: "안과",
      doctorName: "정성민",
    },
    {
      doctorId: 3,
      doctorImg: "",
      imgName: "의사사진",
      hospitalId: 3,
      departmentId: 3,
      departmentName: "소아과",
      doctorName: "윤시호",
    },
  ])

  return (
    <MapSearchResults>
      <MapSearchResultTitles>
        <MapSearchResultNameTitle>병원이름</MapSearchResultNameTitle>
        <MapSearchResultAddressTitle>병원주소</MapSearchResultAddressTitle>
        <MapSearchResultTelTitle>병원전화번호</MapSearchResultTelTitle>
      </MapSearchResultTitles>
      {hospital.map((item) => (
        <MapSearchResult
          key={item.hospitalId}
          onClick={() => setSelectedHospitalId(item.hospitalId)}
        >
          <ResultName>{item.name}</ResultName>
          <ResultAddress>{item.address}</ResultAddress>
          <ResultTel>{item.tel}</ResultTel>
        </MapSearchResult>
      ))}
      {selectedHospitalId && (
        <HospitalModalWrap>
          <HospitalModalOverlay>
            <HospitalModalContent>
              <HospitalContents>
                {hospital.map((item, index) => {
                  if (item.hospitalId === selectedHospitalId) {
                    return (
                      <HospitalContent key={item.hospitalId}>
                        <HospitalTitles>
                          <HospitalTitle>{item.name}</HospitalTitle>
                          <HospitalLike>❤️100</HospitalLike>
                        </HospitalTitles>
                        <HospitalAddress>{item.address}</HospitalAddress>
                        <HospitalTels>
                          <HospitalTelTitle>병원번호</HospitalTelTitle>
                          <HospitalTel>{item.tel}</HospitalTel>
                        </HospitalTels>
                        <HospitalDayTime>
                          <DayTimeTitle>진료일 및 진료시간</DayTimeTitle>
                          <DayTimeContent>
                            <DayContent>
                              <DayTitle>매 주 월 ~ 금</DayTitle>
                              <TimeTitle>{item.weekdayOpeningTime}</TimeTitle>
                            </DayContent>
                            <DayContent>
                              <DayTitle>점심시간</DayTitle>
                              <TimeTitle>{item.lunchHour}</TimeTitle>
                            </DayContent>
                            <DayContent>
                              <DayTitle>매 주 토요일</DayTitle>
                              <TimeTitle>{item.weekendOpeningTime}</TimeTitle>
                            </DayContent>
                            <DayContent>
                              <DayTitle>공휴일 및 일요일</DayTitle>
                              <TimeTitle>{item.holidayCheck}</TimeTitle>
                            </DayContent>
                          </DayTimeContent>
                        </HospitalDayTime>
                        <HospitalDiagonias>
                          <DiagoniasTitle>진료과목</DiagoniasTitle>
                          <DiagoniasItems>
                            {/* departmentName이 배열로 받아오므로, 배열로부터 받아와서, 순서는 상관없으니 index값으로 하나하나씩 보여주게끔함, */}
                            {Array.from(new Set(item.departmentNames)).map(
                              (department, index) => (
                                <DiagoniasItem key={department.departmentId}>
                                  {department.departmentName}
                                </DiagoniasItem>
                              )
                            )}
                          </DiagoniasItems>
                        </HospitalDiagonias>
                        <HospitalDoctors>
                          <DoctorsTitle>의사정보</DoctorsTitle>
                          <DoctorInfos>
                            {/* 의사정보에 필터를 걸어서, 의사가 가지고 있는 병원 아이디와 정보를 보여주고 있는 병원의 아이디가 일치하는 의사들을 보여줌 */}
                            {doctorInfo
                              .filter(
                                (doc) => doc.hospitalId === selectedHospitalId
                              )
                              .map((item) => (
                                <DoctorInfo key={item.doctorId}>
                                  <DoctorImg img={item.doctorImg} />
                                  <DoctorName>{item.doctorName}의사</DoctorName>
                                  <DoctorItem>{item.departmentName}</DoctorItem>
                                </DoctorInfo>
                              ))}
                          </DoctorInfos>
                        </HospitalDoctors>
                      </HospitalContent>
                    )
                  }
                  return null
                })}

                <HospitalContent2>
                  <HospitalMapWrap>
                    <HospitalMap
                      name={
                        hospital.find(
                          (item) => item.hospitalId === selectedHospitalId
                        )?.name
                      }
                      tel={
                        hospital.find(
                          (item) => item.hospitalId === selectedHospitalId
                        )?.tel
                      }
                      lat={
                        hospital.find(
                          (item) => item.hospitalId === selectedHospitalId
                        )?.latlng.lat
                      }
                      lng={
                        hospital.find(
                          (item) => item.hospitalId === selectedHospitalId
                        )?.latlng.lng
                      }
                    />
                  </HospitalMapWrap>
                  <ReservationModal
                    selectedHospitalId={selectedHospitalId}
                    hospitalSelectedHospitalId={hospitalSelectedHospitalId}
                  />
                </HospitalContent2>
              </HospitalContents>
            </HospitalModalContent>
          </HospitalModalOverlay>
        </HospitalModalWrap>
      )}
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
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
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

const MapSearchResultTitles = styled.div`
  width: 700px;
  height: 20px;
  padding: 10px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

const MapSearchResultTelTitle = styled.span`
  margin-right: 20px;
  border-bottom: 10px;
  font-size: 20px;
  font-weight: bold;
`

const MapSearchResultNameTitle = styled.span`
  margin: auto 35px;
  font-size: 20px;
  font-weight: bold;
`
const MapSearchResultAddressTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`

const MapSearchResult = styled.div`
  width: 95%;
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
  transform: translate(10%, 0);
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
const HospitalMapWrap = styled.div`
  width: 400px;
  height: 450px;
  border-radius: 12px;
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
  border: 0.3px solid black;
  border-radius: 50%;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultProfileImg})`};
  background-size: cover;
`
const DoctorName = styled.span`
  margin-top: 10px;
`
const DoctorItem = styled.span``
