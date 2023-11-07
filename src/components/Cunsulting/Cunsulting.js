import React from "react"
import styled from "styled-components"
import SelectImg from "../../assets/images/DoctorProfileImg.jpg"

function Cunsulting() {
  return (
    <Wrap>
      <CunsultingWrapper>
        <CunsultingHeader>
          <CunsultingHeaderTitle>비대면 상담 제출하기</CunsultingHeaderTitle>
        </CunsultingHeader>
        <CunsultingBody>
          <CunsultingImgContent>
            <CunsultingImg />
            <CunsultingBtn>사진선택</CunsultingBtn>
          </CunsultingImgContent>
          <CunsultingFormContent>
            <CunsultingTitles>
              <CunsultingTitle>제목</CunsultingTitle>
              <CunsultingTitleInput
                maxlength="20"
                placeholder="상담 제목을 입력해주세요"
              />
            </CunsultingTitles>
            <CunsultingIds>
              <CunsultingId>아이디</CunsultingId>
              <CunsultingInput
                id="userId"
                maxlength="10"
                placeholder="아이디를 입력해주세요"
              />
            </CunsultingIds>
            <CunsultingNames>
              <CunsultingName>이름</CunsultingName>
              <CunsultingNameInput
                id="userName"
                maxlength="4"
                placeholder="이름을 입력해주세요"
              />
            </CunsultingNames>
            <CunsultingDiagnosis>
              <CunsultingDiagnosisName>상담과목</CunsultingDiagnosisName>
              <CunsultingDiagnosisSelect>
                <SelectDiagnosis>소아과</SelectDiagnosis>
                <SelectDiagnosis>내과</SelectDiagnosis>
                <SelectDiagnosis>이비인후과</SelectDiagnosis>
                <SelectDiagnosis>치과</SelectDiagnosis>
              </CunsultingDiagnosisSelect>
            </CunsultingDiagnosis>
            <CunsultingTexts>
              <CunsultingTextName>상담내용</CunsultingTextName>
              <CunsultingText maxlength="200" placeholder="내용 입력" />
            </CunsultingTexts>
            <CunsultingFormBtns>
              <CunsultingSubmitBtn>제출하기</CunsultingSubmitBtn>
              <CunsultingCancelBtn>취소하기</CunsultingCancelBtn>
            </CunsultingFormBtns>
          </CunsultingFormContent>
        </CunsultingBody>
      </CunsultingWrapper>
    </Wrap>
  )
}

export default Cunsulting

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`

const CunsultingWrapper = styled.div`
  width: 1100px;
  height: 700px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
`

const CunsultingHeader = styled.div`
  width: 1100px;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CunsultingHeaderTitle = styled.span`
  font-size: 30px;
  font-family: "GmarketSansMedium";
`
const CunsultingBody = styled.div`
  width: 1100px;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const CunsultingImgContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const CunsultingImg = styled.div`
  width: 450px;
  height: 450px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${SelectImg});
  background-size: cover;
`
const CunsultingBtn = styled.button`
  width: 170px;
  height: 55px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 25px;
  user-select: none;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
const CunsultingFormContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const CunsultingTitles = styled.div`
  width: 450px;
  height: 70px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CunsultingTitleInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: right;
  font-size: 15px;
  outline: none;
`
const CunsultingIdNames = styled.div`
  width: 450px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const CunsultingIds = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingId = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CunsultingInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: right;
  outline: none;
`
const CunsultingNames = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CunsultingNameInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: right;
  outline: none;
`
const CunsultingDiagnosis = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingDiagnosisName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CunsultingDiagnosisSelect = styled.select`
  width: 311px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const SelectDiagnosis = styled.option``
const CunsultingTexts = styled.div`
  width: 450px;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingTextName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CunsultingText = styled.textarea`
  width: 300px;
  height: 190px;
  padding: 5px;
  resize: none;
  outline: none;
`
const CunsultingFormBtns = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CunsultingSubmitBtn = styled.button`
  width: 130px;
  height: 55px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 25px;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
const CunsultingCancelBtn = styled.button`
  width: 130px;
  height: 55px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 25px;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
