import React, { useState } from "react"
import styled from "styled-components"
import ReadingGlasses from "../../assets/images/ReadingGlasses.png"
import KaKaoMap from "../../assets/images/KaKaoMap.png"

function HospitalSearch() {
  const [hospitalModal, setHospitalModal] = useState()

  const hospitalResultOpen = () => {
    setHospitalModal(!hospitalModal)
  }

  return (
    <Wrap>
      <HospitalWrapper>
        <KaKaoMapWrapper></KaKaoMapWrapper>
        <MapSearch>
          <MapSearchInputs>
            <MapSearchInput placeholder="검색" />
            <MapSearchImg />
          </MapSearchInputs>
          <MapSearchResults>
            <MapSearchResult onClick={hospitalResultOpen}>
              <ResultNumber>1</ResultNumber>
              <ResultName>하늘하늘병원</ResultName>
              <ResultAddress>
                서울특별시 강동구 강동로 하늘하늘병원
              </ResultAddress>
              <ResultTel>02-4786-7835</ResultTel>
            </MapSearchResult>
            {hospitalModal && (
              <HospitalModalWrap>
                <HospitalModalOverlay>
                  <HospitalModalContent>
                    <HospitalContent>
                      <HospitalTitles>
                        <HospitalTitle>하늘하늘병원</HospitalTitle>
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
                      {/* <HospitalDoctors>
                        <Doctorstitle>의사정보</Doctorstitle>
                      </HospitalDoctors> */}
                    </HospitalContent>
                    <HospitalContent2>
                      <HospitalMap></HospitalMap>
                      <HospitalBtns>
                        <ReservationBtn>예약하기</ReservationBtn>
                        <BackBtn>뒤로가기</BackBtn>
                      </HospitalBtns>
                    </HospitalContent2>
                  </HospitalModalContent>
                </HospitalModalOverlay>
              </HospitalModalWrap>
            )}
          </MapSearchResults>
        </MapSearch>
      </HospitalWrapper>
    </Wrap>
  )
}

export default HospitalSearch

/*병원찾기 메인 전체 */
const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
`
/*병원찾기 메인 */
const HospitalWrapper = styled.div`
  width: 1440px;
  height: 910px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const KaKaoMapWrapper = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 16px;
  background-image: url(${KaKaoMap});
  background-size: cover;
  user-select: none;
`
const MapSearch = styled.div`
  width: 600px;
  height: 600px;
  margin-left: 50px;
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
const MapSearchResults = styled.div`
  width: 600px;
  height: 530px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
  padding: 10px;
`

const MapSearchResult = styled.div`
  margin: 10px auto;
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
    background-color: #efefef;
    font-weight: 600;
    cursor: pointer;
  }
`
const ResultNumber = styled.div``
const ResultName = styled.div``

const ResultAddress = styled.div``
const ResultTel = styled.div``

const HospitalModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  transform: translate(-59%, -32%);
  position: relative;
`
const HospitalModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(49, 49, 49, 0.8);
`
const HospitalModalContent = styled.div`
  width: 1000px;
  height: 800px;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 6%;
  left: 20%;
  transform: translate(0, 0);
  position: absolute;
`

const HospitalContent = styled.div`
  width: 480px;
  height: 730px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`
const HospitalTitles = styled.div`
  border: 1px solid black;
  width: 480px;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const HospitalTitle = styled.div`
  font-size: 35px;
`
const HospitalLike = styled.div`
  font-size: 20px;
`
const HospitalAddress = styled.div`
  margin-top: 10px;
  border: 1px solid black;
  font-size: 20px;
`

const HospitalContent2 = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 730px;
  margin-left: 40px;
`
const HospitalMap = styled.div``
const HospitalBtns = styled.div``
const ReservationBtn = styled.button``
const BackBtn = styled.button``

const HospitalTels = styled.div`
  border: 1px solid black;
  display: flex;
`
const HospitalTelTitle = styled.div`
  margin-right: 10px;
  font-size: 20px;
`
const HospitalTel = styled.div`
  font-size: 20px;
`

const HospitalDayTime = styled.div``
const DayTimeContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50%, auto));
  /* place-items: center; */
`
const DayTimeTitle = styled.div`
  padding: 10px;
  font-size: 20px;
`

const DayContent = styled.div`
  border: 1px solid black;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* flex-direction: row;
  justify-content: space-between;
  align-items: center; */
`
const DayTitle = styled.div`
  margin-right: 12px;
`
const TimeTitle = styled.div``

const HospitalDiagonias = styled.div``
const DiagoniasItems = styled.div`
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14%, auto));
  place-items: center;
`
const DiagoniasTitle = styled.div`
  padding: 10px;
  /* border: 1px solid black; */
  font-size: 20px;
`
const DiagoniasItem = styled.div`
  /* margin-left: 10px; */
  padding: 6px;
  height: 40px;
  /* margin: 0 12px; */
  display: flex;
  /* justify-content: center; */
  align-items: center;
  /* border: 1px solid black; */
  text-align: center;
`
