import React, { useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"

function HospitalReservationModal() {
  const [reservationModal, setReservationModal] = useState()

  const reservationModalToggle = () => {
    setReservationModal(!reservationModal)
  }

  return (
    <HospitalCheckFormBody>
      <HospitalReservationContent onClick={reservationModalToggle}>
        <HospitalReservationNo>1</HospitalReservationNo>
        <HospitalReservationName>이승진</HospitalReservationName>
        <HospitalReservationDiagnosis>이비인후과</HospitalReservationDiagnosis>
        <HospitalReservationText>
          안녕하세요 반갑습니다 여러분 정말 아파요
        </HospitalReservationText>
        <HospitalReservationTime>23/09/09</HospitalReservationTime>
      </HospitalReservationContent>
      {reservationModal && (
        <ReservationWrap>
          <ReservationOverlay>
            <ReservationContent>
              <ReservationHeader>
                <ReservationTitle>예약 상세내역</ReservationTitle>
                <ReservationClose onClick={reservationModalToggle} />
              </ReservationHeader>
              <ReservationBody>
                <ReservationNames>
                  <ReservationNameTitle>예약자</ReservationNameTitle>
                  <ReservationName>이진호</ReservationName>
                </ReservationNames>
                <ReservationDates>
                  <ReservationDateTitle>예약날짜</ReservationDateTitle>
                  <ReservationDate>23/09/08</ReservationDate>
                </ReservationDates>
                <ReservationTimes>
                  <ReservationTimeTitle>예약시간</ReservationTimeTitle>
                  <ReservationTime>09:00 ~ 10:00</ReservationTime>
                </ReservationTimes>
                <ReservationTels>
                  <ReservationTelTitle>연락처</ReservationTelTitle>
                  <ReservationTel>010-1111-1111</ReservationTel>
                </ReservationTels>
                <ReservationDiagnosises>
                  <ReservationDiagnosisTitle>
                    진료과목
                  </ReservationDiagnosisTitle>
                  <ReservationDiagnosis>내과</ReservationDiagnosis>
                </ReservationDiagnosises>
                <ReservationTexts>
                  <ReservationTextTitle>예약내용</ReservationTextTitle>
                  <ReservationText>
                    안녕하세요 반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요 \
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.안녕하세요
                    반갑습니다.안녕하세요 반갑습니다.
                  </ReservationText>
                </ReservationTexts>
              </ReservationBody>
            </ReservationContent>
          </ReservationOverlay>
        </ReservationWrap>
      )}
    </HospitalCheckFormBody>
  )
}

export default HospitalReservationModal

const HospitalCheckFormBody = styled.div`
  width: 550px;
  height: 630px;
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
const HospitalReservationContent = styled.div`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;

  &:hover {
    border-radius: 8px;
    background-color: #223359;
    color: white;
  }
`
const HospitalReservationNo = styled.span`
  width: 40px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const HospitalReservationName = styled.span`
  width: 70px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const HospitalReservationDiagnosis = styled.span`
  width: 100px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const HospitalReservationText = styled.span`
  width: 250px;
  font-family: "GmarketSansMedium";
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`
const HospitalReservationTime = styled.span`
  width: 90px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const ReservationWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const ReservationOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const ReservationContent = styled.div`
  width: 500px;
  height: 700px;
  border-radius: 12px;
  background-color: white;
  top: 0;
  left: 20%;
  transform: translate(50%, 13%);
  position: absolute;
`
const ReservationHeader = styled.div`
  width: 500px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const ReservationTitle = styled.span`
  width: 430px;
  margin-left: auto;
  font-size: 25px;
  font-family: "GmarketSansMedium";
  text-align: center;
`

const ReservationClose = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(${CloseBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
const ReservationBody = styled.div`
  width: 500px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
`
const ReservationNames = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationNameTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationName = styled.span``
const ReservationDates = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationDateTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationDate = styled.span``
const ReservationTimes = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationTimeTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationTime = styled.span``
const ReservationDiagnosises = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationDiagnosisTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationDiagnosis = styled.span``
const ReservationTels = styled.div`
  height: 50px;
  padding: 10px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationTelTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationTel = styled.span``
const ReservationTexts = styled.div`
  height: 270px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ReservationTextTitle = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const ReservationText = styled.p`
  width: 340px;
  height: 250px;
  padding: 10px;
  /* border: 1px solid #dcdcdc; */
  border-radius: 8px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
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
