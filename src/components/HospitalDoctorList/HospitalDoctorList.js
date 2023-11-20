import React, { useState } from "react"
import { styled } from "styled-components"
import DoctorProfileImg from "../../assets/images/doctor2.jpg"
import DefaultProfileImg from "../../assets/images/User.png"

function HospitalDoctorList() {
  const [doctorInfo, setDoctorInfo] = useState([
    {
      doctorId: 1,
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: 2,
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 3,
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 1,
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: 2,
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 3,
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 1,
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: 2,
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 3,
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 1,
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: 2,
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: 3,
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
  ])

  return (
    <Wrap>
      <DoctorListWrap>
        <DoctorListHeader>
          <DoctorListTitle>병원 의사 목록</DoctorListTitle>
        </DoctorListHeader>
        <DoctorListBody>
          {doctorInfo.map((doctor) => (
            <DoctorListContent key={doctor.doctorId}>
              <DoctorImg img={doctor.doctorImg} />
              <DoctorInfo>
                <DoctorName>{doctor.doctorName}의사 </DoctorName>
                <DoctorDiagnosis>{doctor.departmentName}</DoctorDiagnosis>
              </DoctorInfo>
            </DoctorListContent>
          ))}
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
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultProfileImg})`};
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
