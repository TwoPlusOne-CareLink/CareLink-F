import React, { useState } from "react"
import { styled } from "styled-components"
import DoctorProfileImg from "../../assets/images/doctor2.jpg"
import DefaultProfileImg from "../../assets/images/User.png"

function HospitalDoctorList() {
  const [selectedDoctorId, setSelectedDoctorId] = useState()

  const [doctorInfo, setDoctorInfo] = useState([
    {
      doctorId: "doctor1",
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      doctorTel: "010-2222-2222",

      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "윤시호",
      departmentId: "3",
      departmentName: "소아과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "이승진",
      departmentId: "1",
      departmentName: "내과",
      imgFile: "",
      doctorImg: `${DoctorProfileImg}`,
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor111",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
    {
      doctorId: "doctor1",
      doctorName: "정성민",
      departmentId: "2",
      departmentName: "외과",
      imgFile: "",
      doctorImg: "",
    },
  ])

  return (
    <Wrap>
      <HospitalTop>
        <HospitalTopTitle>병원 소속 의사목록</HospitalTopTitle>
      </HospitalTop>
      <DoctorListWrap>
        <DoctorListBody>
          <DoctorListContents>
            <DoctorListTitles>
              <DoctorListTitle>아이디</DoctorListTitle>
              <DoctorListTitle>진료과목</DoctorListTitle>
              <DoctorListNameTitle>이름</DoctorListNameTitle>
            </DoctorListTitles>
            <DoctorListResults>
              {doctorInfo.map((item) => (
                <DoctorListResult
                  key={item.doctorId}
                  onClci={() => setSelectedDoctorId(item.doctorId)}
                >
                  <DoctorListId>{item.doctorId}</DoctorListId>
                  <DoctorListDiagnosis>
                    {item.departmentName}
                  </DoctorListDiagnosis>
                  <DoctorListName>{item.doctorName}</DoctorListName>
                </DoctorListResult>
              ))}
            </DoctorListResults>
          </DoctorListContents>
          <DoctorDetailContents>
            {selectedDoctorId && (
              <DoctorDetailContent>
                {doctorInfo.map((item) => {
                  if (item.doctorId === selectedDoctorId) {
                    return (
                      <DoctorDetailInfos>
                        <DoctorDetailImg />
                        <DoctorDetailInfo>
                          <DoctorDetailIds>
                            <DoctorDetailIdTitle>아이디</DoctorDetailIdTitle>
                            <DoctorDetailId>doctor1</DoctorDetailId>
                          </DoctorDetailIds>
                          <DoctorDetailNames>
                            <DoctorDetailNameTitle>이름</DoctorDetailNameTitle>
                            <DoctorDetailName>이승진</DoctorDetailName>
                          </DoctorDetailNames>
                          <DoctorDetailDiagnosiss>
                            <DoctorDetailDiagnosisTitle>
                              진료과목
                            </DoctorDetailDiagnosisTitle>
                            <DoctorDetailDiagnosis>내과</DoctorDetailDiagnosis>
                          </DoctorDetailDiagnosiss>
                          <DoctorDetailTels>
                            <DoctorDetailTelTitle>
                              전화번호
                            </DoctorDetailTelTitle>
                            <DoctorDetailTel>010-0000-0000</DoctorDetailTel>
                          </DoctorDetailTels>
                          <DoctorDetailHospitals>
                            <DoctorDetailHospitalTitle>
                              소속병원
                            </DoctorDetailHospitalTitle>
                            <DoctorDetailHospital>
                              삼성서울병원
                            </DoctorDetailHospital>
                          </DoctorDetailHospitals>
                        </DoctorDetailInfo>
                      </DoctorDetailInfos>
                    )
                  }
                })}
              </DoctorDetailContent>
            )}
          </DoctorDetailContents>
          {/* {doctorInfo.map((doctor) => (
            <DoctorListContent key={doctor.doctorId}>
              <DoctorImg img={doctor.doctorImg} />
              <DoctorInfo>
                <DoctorName>{doctor.doctorName}의사 </DoctorName>
                <DoctorDiagnosis>{doctor.departmentName}</DoctorDiagnosis>
              </DoctorInfo>
            </DoctorListContent>
          ))} */}
        </DoctorListBody>
      </DoctorListWrap>
    </Wrap>
  )
}

export default HospitalDoctorList

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
`

const HospitalTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const HospitalTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
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

const DoctorListBody = styled.div`
  width: 1300px;
  height: 740px;
  margin-top: 20px;
  border: 1px solid black;
  /* display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

// const DoctorListBody = styled.div`
//   width: 1300px;
//   height: 740px;
//   margin-top: 20px;
//   border: 1px solid black;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(25%, auto));
//   place-items: center;
// `

const DoctorListContents = styled.div`
  width: 620px;
  height: 90%;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DoctorDetailContents = styled.div`
  width: 620px;
  height: 90%;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
`

// 여기서부터 의사 상세정보 탭

const DoctorDetailContent = styled.div`
  border: 1px solid black;
  width: 620px;
  height: 90%;
`
const DoctorDetailInfos = styled.div`
  border: 1px solid black;
`
const DoctorDetailImg = styled.div`
  width: 100px;
  height: 100px;
  /* background-image: ${(props) => `url(${props.img})`}; */
  background-image: url(${DoctorProfileImg});
  background-size: cover;
`
const DoctorDetailInfo = styled.div``
const DoctorDetailIds = styled.div``
const DoctorDetailIdTitle = styled.div``
const DoctorDetailId = styled.div``
const DoctorDetailNames = styled.div``
const DoctorDetailNameTitle = styled.div``
const DoctorDetailName = styled.div``
const DoctorDetailTels = styled.div``
const DoctorDetailTelTitle = styled.div``
const DoctorDetailTel = styled.div``
const DoctorDetailDiagnosiss = styled.div``
const DoctorDetailDiagnosisTitle = styled.div``
const DoctorDetailDiagnosis = styled.div``
const DoctorDetailHospitals = styled.div``
const DoctorDetailHospitalTitle = styled.div``
const DoctorDetailHospital = styled.div``

// 여기까지 의사 상세 정보 탭//
const DoctorListTitles = styled.div`
  width: 500px;
  padding: 10px;
  margin-top: 10px;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`

const DoctorListTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`

const DoctorListNameTitle = styled.span`
  margin-right: 22px;
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const DoctorListResults = styled.div`
  width: 580px;
  height: 620px;
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
const DoctorListResult = styled.div`
  width: 510px;
  height: 20px;
  margin: 8px auto;
  padding: 10px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #223359;
    font-weight: 600;
    color: white;
  }
`
const DoctorListId = styled.span`
  width: 100px;
  font-size: 20px;
`
const DoctorListName = styled.span`
  width: 100px;
  text-align: center;
  font-size: 20px;
`
const DoctorListDiagnosis = styled.span`
  font-size: 20px;
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
