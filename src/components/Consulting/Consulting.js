import React from "react"
import styled from "styled-components"
import SelectImg from "../../assets/images/DoctorProfileImg.jpg"

function Consulting() {
  return (
    <Wrap>
      <ConsultingWrapper>
        <ConsultingHeader>
          <ConsultingHeaderTitle>비대면 상담 제출하기</ConsultingHeaderTitle>
        </ConsultingHeader>
        <ConsultingBody>
          <ConsultingImgContent>
            <ConsultingImg />
            <ConsultingBtn>사진선택</ConsultingBtn>
          </ConsultingImgContent>
          <ConsultingFormContent>
            <ConsultingTitles>
              <ConsultingTitle>제목</ConsultingTitle>
              <ConsultingTitleInput
                maxlength="20"
                placeholder="상담 제목을 입력해주세요"
              />
            </ConsultingTitles>
            <ConsultingIds>
              <ConsultingId>아이디</ConsultingId>
              <ConsultingInput
                id="userId"
                maxlength="10"
                placeholder="아이디를 입력해주세요"
              />
            </ConsultingIds>
            <ConsultingNames>
              <ConsultingName>이름</ConsultingName>
              <ConsultingNameInput
                id="userName"
                maxlength="4"
                placeholder="이름을 입력해주세요"
              />
            </ConsultingNames>
            <ConsultingDiagnosis>
              <ConsultingDiagnosisName>상담과목</ConsultingDiagnosisName>
              <ConsultingDiagnosisSelect>
                <SelectDiagnosis>소아과</SelectDiagnosis>
                <SelectDiagnosis>내과</SelectDiagnosis>
                <SelectDiagnosis>이비인후과</SelectDiagnosis>
                <SelectDiagnosis>치과</SelectDiagnosis>
              </ConsultingDiagnosisSelect>
            </ConsultingDiagnosis>
            <ConsultingTexts>
              <ConsultingTextName>상담내용</ConsultingTextName>
              <ConsultingText maxlength="200" placeholder="내용 입력" />
            </ConsultingTexts>
            <ConsultingFormBtns>
              <ConsultingSubmitBtn>제출하기</ConsultingSubmitBtn>
            </ConsultingFormBtns>
          </ConsultingFormContent>
        </ConsultingBody>
      </ConsultingWrapper>
    </Wrap>
  )
}

export default Consulting

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`

const ConsultingWrapper = styled.div`
  width: 1100px;
  height: 700px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
`

const ConsultingHeader = styled.div`
  width: 1100px;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const ConsultingHeaderTitle = styled.span`
  font-size: 30px;
  font-family: "GmarketSansMedium";
`
const ConsultingBody = styled.div`
  width: 1100px;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const ConsultingImgContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ConsultingImg = styled.div`
  width: 450px;
  height: 450px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${SelectImg});
  background-size: cover;
`
const ConsultingBtn = styled.button`
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
const ConsultingFormContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ConsultingTitles = styled.div`
  width: 450px;
  height: 70px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ConsultingTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const ConsultingTitleInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  font-size: 15px;
  outline: none;
`
// const ConsultingIdNames = styled.div`
//   width: 450px;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `
const ConsultingIds = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ConsultingId = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const ConsultingInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const ConsultingNames = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ConsultingName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const ConsultingNameInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const ConsultingDiagnosis = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ConsultingDiagnosisName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const ConsultingDiagnosisSelect = styled.select`
  width: 311px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const SelectDiagnosis = styled.option``
const ConsultingTexts = styled.div`
  width: 450px;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ConsultingTextName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const ConsultingText = styled.textarea`
  width: 300px;
  height: 190px;
  padding: 5px;
  resize: none;
  outline: none;
`
const ConsultingFormBtns = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`
const ConsultingSubmitBtn = styled.button`
  width: 300px;
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
