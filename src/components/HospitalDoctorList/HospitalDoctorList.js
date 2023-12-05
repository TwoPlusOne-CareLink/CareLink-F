import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import DoctorListDefault from "../../assets/images/doctorListDefalut.png"
import DefaultProfileImg from "../../assets/images/User.png"
import { useDispatch } from "react-redux"
import {
  __getHospitalDoctorInfo,
  __getHospitalDoctorList,
} from "../../redux/modules/hospitalSlice"

function HospitalDoctorList() {
  const dispatch = useDispatch()
  const [selectedDoctorId, setSelectedDoctorId] = useState()
  const [doctorList, setDoctorList] = useState([])
  const [doctorDetail, setDoctorDetail] = useState([])

  useEffect(() => {
    dispatch(__getHospitalDoctorList())
      .then((response) => {
        if (response) {
          setDoctorList(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error, "소속의사목록 에러")
      })
  }, [])

  const selectDoctorDetail = (doctorId) => {
    setSelectedDoctorId(doctorId)
  }

  useEffect(() => {
    if (selectedDoctorId) {
      dispatch(__getHospitalDoctorInfo({ doctorId: selectedDoctorId }))
        .then((response) => {
          if (response) {
            setDoctorDetail([response.payload.data])
          }
        })
        .catch((error) => {
          console.log(error, "에러메시지")
        })
    }
  }, [selectedDoctorId])

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
              <DoctorLike>관심도</DoctorLike>
            </DoctorListTitles>
            <DoctorListResults>
              {doctorList &&
                doctorList.length > 0 &&
                doctorList.map((item) => (
                  <DoctorListResult
                    key={item.doctorId}
                    onClick={() => selectDoctorDetail(item.doctorId)}
                  >
                    <DoctorListId>{item.doctorId}</DoctorListId>
                    <DoctorListDiagnosis>
                      {item.departmentName}
                    </DoctorListDiagnosis>
                    <DoctorListName>{item.doctorName}</DoctorListName>
                    <DoctorListLike>❤️ {item.likeCount}</DoctorListLike>
                  </DoctorListResult>
                ))}
            </DoctorListResults>
          </DoctorListContents>
          <DoctorDetailContents>
            {selectedDoctorId ? (
              <DoctorDetailWrapper>
                {doctorDetail &&
                  doctorDetail?.map((item) => {
                    if (item.doctorId === selectedDoctorId) {
                      return (
                        <DoctorDetailContent>
                          {/* <DoctorDetailTitle>의사 상세정보</DoctorDetailTitle> */}
                          <DoctorDetailInfos key={item.doctorId}>
                            <DoctorDetailImg img={item.doctorImg} />
                            <DoctorDetailInfo>
                              <DoctorDetailIds>
                                <DoctorDetailIdTitle>
                                  아이디
                                </DoctorDetailIdTitle>
                                <DoctorDetailId>{item.doctorId}</DoctorDetailId>
                              </DoctorDetailIds>
                              <DoctorDetailNames>
                                <DoctorDetailNameTitle>
                                  이름
                                </DoctorDetailNameTitle>
                                <DoctorDetailName>
                                  {item.doctorName}
                                </DoctorDetailName>
                              </DoctorDetailNames>
                              <DoctorDetailDiagnosiss>
                                <DoctorDetailDiagnosisTitle>
                                  진료과목
                                </DoctorDetailDiagnosisTitle>
                                <DoctorDetailDiagnosis>
                                  {item.departmentName}
                                </DoctorDetailDiagnosis>
                              </DoctorDetailDiagnosiss>
                              <DoctorDetailTels>
                                <DoctorDetailTelTitle>
                                  전화번호
                                </DoctorDetailTelTitle>
                                <DoctorDetailTel>
                                  {item.doctorTel}
                                </DoctorDetailTel>
                              </DoctorDetailTels>
                              <DoctorDetailHospitals>
                                <DoctorDetailHospitalTitle>
                                  소속병원
                                </DoctorDetailHospitalTitle>
                                <DoctorDetailHospital>
                                  {item.hospitalName}
                                </DoctorDetailHospital>
                              </DoctorDetailHospitals>
                            </DoctorDetailInfo>
                          </DoctorDetailInfos>
                        </DoctorDetailContent>
                      )
                    }
                  })}
              </DoctorDetailWrapper>
            ) : (
              <DoctorListDefaultImg />
            )}
          </DoctorDetailContents>
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
  width: 1200px;
  height: 740px;
  margin: 20px auto auto auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DoctorListContents = styled.div`
  width: 620px;
  height: 670px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DoctorDetailContents = styled.div`
  width: 500px;
  height: 670px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
`

const DoctorListDefaultImg = styled.div`
  width: 500px;
  height: 670px;
  background-image: url(${DoctorListDefault});
  background-size: cover;
`

// 여기서부터 의사 상세정보 탭

const DoctorDetailWrapper = styled.div``

const DoctorDetailContent = styled.div`
  width: 500px;
  height: 650px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const DoctorDetailTitle = styled.div`
  margin: 10px 0;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
`
const DoctorDetailInfos = styled.div`
  width: 500px;
  height: 670px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DoctorDetailImg = styled.div`
  width: 400px;
  height: 350px;
  margin: 20px auto 10px auto;
  border-radius: 12px;
  background-image: url(${(props) =>
    props.img ? "data:image/*;base64," + props.img : `${DefaultProfileImg}`});
  background-size: cover;
`
const DoctorDetailInfo = styled.div`
  width: 400px;
  height: 280px;
  /* margin-left: 15px; */

  border: 1px solid #dcdcdc;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailIds = styled.div`
  width: 400px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailIdTitle = styled.div`
  width: 100px;
  height: 45px;
  padding: 5px;
  border-top-left-radius: 12px;
  background-color: #223359;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600px;
  text-align: center;
  color: white;
`
const DoctorDetailId = styled.div`
  font-size: 20px;
  margin-right: 20px;
`
const DoctorDetailNames = styled.div`
  width: 400px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailNameTitle = styled.div`
  width: 100px;
  height: 45px;
  padding: 5px;
  background-color: #223359;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600px;
  text-align: center;
  color: white;
`
const DoctorDetailName = styled.div`
  font-size: 20px;
  margin-right: 20px;
`
const DoctorDetailTels = styled.div`
  width: 400px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailTelTitle = styled.div`
  width: 100px;
  height: 45px;
  padding: 5px;
  background-color: #223359;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600px;
  text-align: center;
  color: white;
`
const DoctorDetailTel = styled.div`
  font-size: 20px;
  margin-right: 20px;
`
const DoctorDetailDiagnosiss = styled.div`
  width: 400px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailDiagnosisTitle = styled.div`
  width: 100px;
  height: 45px;
  padding: 5px;
  background-color: #223359;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600px;
  text-align: center;
  color: white;
`
const DoctorDetailDiagnosis = styled.div`
  font-size: 20px;
  margin-right: 20px;
`
const DoctorDetailHospitals = styled.div`
  width: 400px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DoctorDetailHospitalTitle = styled.div`
  width: 100px;
  height: 45px;
  padding: 5px;
  border-bottom-left-radius: 12px;
  background-color: #223359;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-weight: 600px;
  text-align: center;
  color: white;
`
const DoctorDetailHospital = styled.div`
  font-size: 20px;
  margin-right: 20px;
`

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
  font-size: 25px;
  font-family: "GmarketSansMedium";
`

const DoctorLike = styled.span`
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
  width: 120px;
  font-size: 20px;
`
const DoctorListName = styled.span`
  width: 120px;
  text-align: center;
  font-size: 20px;
`
const DoctorListDiagnosis = styled.span`
  width: 140px;
  font-size: 20px;
  text-align: center;
`

const DoctorListLike = styled.span`
  width: 100px;
  font-size: 20px;
  text-align: center;
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
