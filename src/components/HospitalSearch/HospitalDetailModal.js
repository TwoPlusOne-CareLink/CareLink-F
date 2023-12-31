import React, { useEffect, useState } from "react"
import styled, { keyframes } from "styled-components"
import ReadingGlasses from "../../assets/images/ReadingGlasses.png"
import DoctorProfileImg from "../../assets/images/User.png"
import ReservationModal from "./ReservationModal"
import HospitalMap from "./HospitalMap"
import {
  __getHospitalSearch,
  __getHospitalDetailInfo,
} from "../../redux/modules/hospitalSlice"
import { AnimatePresence, motion } from "framer-motion"

function HospitalDetailModal({ dispatch, hospitals }) {
  const [selectedHospitalId, setSelectedHospitalId] = useState(false)

  const hospitalSelectedHospitalId = () => {
    setSelectedHospitalId(!selectedHospitalId)
  }

  const [searchResult, setSearchResult] = useState()
  const [doctorInfo, setDoctorInfo] = useState()
  const [hospital, setHospital] = useState()
  const [hospitalDetail, setHospitalDetail] = useState([])
  const [hospitalId, setHospitalId] = useState()
  const [hospitalName, setHospitalName] = useState("")
  const [departmentNames, setDepartmentNames] = useState([])

  const onChangeSearch = (e) => {
    const currentSearch = e.target.value
    // setSearchResult(currentSearch)
    setHospitalName(currentSearch)
  }

  const filtered =
    hospitals &&
    hospitals.filter((itemList) => {
      return itemList.hospitalName
        .toUpperCase()
        .includes(hospitalName.toUpperCase())
    })

  const onClick = (event, index) => {
    dispatch(__getHospitalSearch({ hospitalName }))
      .then((response) => {
        if (response) {
          setHospital(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error, "에러임")
        console.log(error.code, "에러코드")
      })
  }

  const handleOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick()
    }
  }

  const onClickHospitalDetail = (hospitalId) => {
    setSelectedHospitalId(hospitalId)
    // setSelectedHospitalDetailId(hospitalId)
    console.log(hospitalId)

    dispatch(__getHospitalDetailInfo({ hospitalId }))
      .then((response) => {
        if (response) {
          setHospitalDetail([response.payload.data])
          setDoctorInfo(response.payload.data.doctorInfo)
          setDepartmentNames([response.payload.data.departmentNames])
          setHospitalId(response.payload.data.hospitalId)
        }
      })
      .catch((error) => {
        console.log("에러만", error)
      })
  }

  useEffect(() => {}, [
    hospitalDetail,
    doctorInfo,
    selectedHospitalId,
    hospitalName,
  ])

  return (
    <MapSearch>
      <MapSearchInputs>
        <MapSearchInput
          onChange={onChangeSearch}
          placeholder="검색할 병원이름을 입력해주세요"
          onKeyPress={handleOnKeyPress}
        />
        <MapSearchImg onClick={onClick} />
      </MapSearchInputs>
      <MapSearchResults>
        <MapSearchResultTitles>
          <MapSearchResultNameTitle>병원이름</MapSearchResultNameTitle>
          <MapSearchResultAddressTitle>병원주소</MapSearchResultAddressTitle>
          <MapSearchResultTelTitle>병원전화번호</MapSearchResultTelTitle>
        </MapSearchResultTitles>

        {filtered &&
          filtered.map((item) => (
            <MapSearchResult
              key={item.hospitalId}
              onClick={() => onClickHospitalDetail(item.hospitalId)}
            >
              <ResultName>{item.hospitalName}</ResultName>
              <ResultAddress>{item.address}</ResultAddress>
              <ResultTel>{item.tel}</ResultTel>
            </MapSearchResult>
          ))}
        <AnimatePresence>
          {selectedHospitalId && (
            <HospitalModalWrap>
              <HospitalModalOverlay>
                <HospitalModalContent
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1.5 }}
                  exit={{ opacity: 0 }}
                >
                  {hospitalDetail && hospitalDetail.length > 0 ? (
                    hospitalDetail.map((item, index) => {
                      if (item.hospitalId === selectedHospitalId) {
                        return (
                          <HospitalContents key={item.hospitalId}>
                            <HospitalContent key={item.hospitalId}>
                              <HospitalTitles>
                                <HospitalTitle>
                                  {item.hospitalName}
                                </HospitalTitle>
                                <HospitalLike>❤️{item.totalLike}</HospitalLike>
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
                                    <TimeTitle>
                                      {item.weekdayOpeningtime}
                                    </TimeTitle>
                                  </DayContent>
                                  <DayContent>
                                    <DayTitle>점심시간</DayTitle>
                                    <TimeTitle>{item.lunchHour}</TimeTitle>
                                  </DayContent>
                                  <DayContent>
                                    <DayTitle>매 주 토요일</DayTitle>
                                    <TimeTitle>
                                      {item.weekendOpeningtime}
                                    </TimeTitle>
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
                                  {departmentNames &&
                                    departmentNames.length > 0 &&
                                    departmentNames[0].map(
                                      (department, index) => (
                                        <DiagoniasItem key={index}>
                                          {department}
                                        </DiagoniasItem>
                                      )
                                    )}
                                </DiagoniasItems>
                              </HospitalDiagonias>
                              <HospitalDoctors>
                                <DoctorsTitle>의사정보</DoctorsTitle>
                                <DoctorInfos>
                                  {doctorInfo &&
                                    doctorInfo.length > 0 &&
                                    doctorInfo.map((item) => (
                                      <DoctorInfo key={item.memberId}>
                                        <DoctorImg img={item.doctorImg} />
                                        <DoctorName>
                                          {item.memberName}
                                        </DoctorName>
                                        <DoctorItem>
                                          {item.departmentName}
                                        </DoctorItem>
                                      </DoctorInfo>
                                    ))}
                                </DoctorInfos>
                              </HospitalDoctors>
                            </HospitalContent>
                            <HospitalContent2>
                              <HospitalMapWrap>
                                <HospitalMap
                                  name={
                                    hospitals.find(
                                      (item) =>
                                        item.hospitalId === selectedHospitalId
                                    )?.hospitalName
                                  }
                                  tel={
                                    hospitals.find(
                                      (item) =>
                                        item.hospitalId === selectedHospitalId
                                    )?.tel
                                  }
                                  lat={
                                    hospitals.find(
                                      (item) =>
                                        item.hospitalId === selectedHospitalId
                                    )?.latlng.lat
                                  }
                                  lng={
                                    hospitals.find(
                                      (item) =>
                                        item.hospitalId === selectedHospitalId
                                    )?.latlng.lng
                                  }
                                />
                              </HospitalMapWrap>
                              <ReservationModal
                                hospitalDetail={hospitalDetail}
                                hospitalId={hospitalId}
                                selectedHospitalId={selectedHospitalId}
                                hospitalSelectedHospitalId={
                                  hospitalSelectedHospitalId
                                }
                              />
                            </HospitalContent2>
                          </HospitalContents>
                        )
                      }
                      return null
                    })
                  ) : (
                    <HospitalLoad>로딩중 ...</HospitalLoad>
                  )}
                </HospitalModalContent>
              </HospitalModalOverlay>
            </HospitalModalWrap>
          )}
        </AnimatePresence>
      </MapSearchResults>
    </MapSearch>
  )
}

export default HospitalDetailModal

const MapSearchResults = styled.div`
  width: 730px;
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

const MapSearch = styled.div`
  width: 720px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const MapSearchInputs = styled.div`
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const MapSearchImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background-image: url(${ReadingGlasses});
  background-size: cover;
  cursor: pointer;
`

const MapSearchInput = styled.input`
  width: 400px;
  padding: 6px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  outline: none;
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
const HospitalModalContent = styled(motion.div)`
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
  left: 21%;
  transform: translate(10%, 0);
  position: absolute;
  user-select: none;
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
  width: 380px;
  margin-left: 10px;
  font-size: 35px;
  font-weight: 600;
`
const HospitalLike = styled.div`
  width: 70px;
  font-size: 20px;
  text-align: right;
`
const HospitalAddress = styled.span`
  margin-top: 20px;
  margin-left: 10px;
  font-size: 20px;
  font-weight: 600;
  word-break: keep-all;
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
  width: 82%;
  padding: 6px;
  border-radius: 8px;
  background-color: #223359;
  text-align: center;
  color: white;
`

const HospitalDoctors = styled.div`
  width: 100%;
  height: 30%;
  margin-top: 10px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    margin-left: 30px;
    scroll-margin-left: 50px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: black; */
    box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  }
  &::-webkit-scrollbar-thumb {
    background-color: #223359;
    border-radius: 4px;
  }
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
  grid-auto-flow: row;
  place-items: center;
`
const DoctorInfo = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
    margin-left: 30px;
    scroll-margin-left: 50px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #223359;
    border-radius: 4px;
  }
`
const DoctorImg = styled.div`
  width: 55px;
  height: 55px;
  border: transparent;
  border-radius: 50%;
  background-image: url(${(props) =>
    props.img ? "data:image/*;base64," + props.img : `${DoctorProfileImg}`});
  background-size: cover;
`
const DoctorName = styled.span`
  margin-top: 10px;
`
const DoctorItem = styled.span``

const HospitalLoad = styled.span`
  font-size: 50px;
`
