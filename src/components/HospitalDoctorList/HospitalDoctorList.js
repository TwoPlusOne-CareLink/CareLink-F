import React from "react"
import { styled } from "styled-components"
import DoctorProfileImg from "../../assets/images/doctor2.jpg"

function HospitalDoctorList() {
  return (
    <Wrap>
      <DoctorListWrap>
        <DoctorListHeader>
          <DoctorListTitle>병원 의사 목록</DoctorListTitle>
        </DoctorListHeader>
        <DoctorListBody>
          <DoctorListContent>
            <DoctorImg />
            <DoctorInfo>
              <DoctorName>이코사 의사 </DoctorName>
              <DoctorDiagnosis>내과</DoctorDiagnosis>
            </DoctorInfo>
          </DoctorListContent>
          <DoctorListContent>
            <DoctorImg />
            <DoctorInfo>
              <DoctorName>이코사 의사 </DoctorName>
              <DoctorDiagnosis>내과</DoctorDiagnosis>
            </DoctorInfo>
          </DoctorListContent>
          <DoctorListContent>
            <DoctorImg />
            <DoctorInfo>
              <DoctorName>이코사 의사 </DoctorName>
              <DoctorDiagnosis>내과</DoctorDiagnosis>
            </DoctorInfo>
          </DoctorListContent>
          <DoctorListContent>
            <DoctorImg />
            <DoctorInfo>
              <DoctorName>이코사 의사 </DoctorName>
              <DoctorDiagnosis>내과</DoctorDiagnosis>
            </DoctorInfo>
          </DoctorListContent>
        </DoctorListBody>
      </DoctorListWrap>
    </Wrap>
  )
}

export default HospitalDoctorList

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
  overflow-y: auto;
`

const DoctorListWrap = styled.div`
  width: 1300px;
  height: 800px;
  margin: auto;
  user-select: none;
`
const DoctorListHeader = styled.div`
  width: 1300px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DoctorListTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`

const DoctorListBody = styled.div`
  width: 1300px;
  height: 740px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center;
`
const DoctorListContent = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DoctorImg = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-image: url(${DoctorProfileImg});
  background-size: cover;
`
const DoctorInfo = styled.div`
  width: 150px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const DoctorName = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
const DoctorDiagnosis = styled.span`
  font-size: 20px;
  font-family: "GmarketSansMedium";
`
