import { styled } from "styled-components"
import ReservationModal from "./ReservationModal"
import KaKaoMap from "../../assets/images/KaKaoMap.png"
import DoctorProfileImg from "../../assets/images/DoctorProfileImg.jpg"

function HospitalMainModal({ hospitalResultToggle, hospital }) {
  return (
    <HospitalModalWrap>
      <HospitalModalOverlay>
        <HospitalModalContent>
          <HospitalContents>
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
              <ReservationModal hospitalResultToggle={hospitalResultToggle} />
            </HospitalContent2>
          </HospitalContents>
        </HospitalModalContent>
      </HospitalModalOverlay>
    </HospitalModalWrap>
  )
}

export default HospitalMainModal

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
