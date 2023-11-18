import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import defaultImg from "../../assets/images/default.png"
import { useDispatch } from "react-redux"
import { __addCounseling } from "../../redux/modules/counselingSlice"

function Counseling() {
  const dispatch = useDispatch()
  const [imageSrc, setImageSrc] = useState()
  const [counselingImage, setCounselingImage] = useState("")
  const [counselingTitle, setCounselingTitle] = useState("")
  const [memberId, setMemberId] = useState("")
  const [memberName, setMemberName] = useState()
  const [departmentId, setDepartmentId] = useState()
  const [departmentName, setDepartmentName] = useState()
  const [counselingContent, setCounselingContent] = useState()

  const imgRef = useRef()

  const [member, setMember] = useState([
    {
      memberId: "sound4519",
      memberName: "이승진",
    },
  ])

  const [conuseling, setCounSeling] = useState([
    {
      conuselingId: 1,
      counselingTitle: "상담요청합니다",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 1,
      departmentName: "내과",
      counselingContent: "상담드립니다.",
      counselingImage: "image.jpg",
      counselingImageName: "상담사진",
    },
  ])

  // 이미지 선택해서 미리보기까지 연결된 로직 , ref을 사용하여 Dom에 직접 접근. 백에 데이터로 보낼 img와 미리보기를 별도 구분하여 미리보기 로직 구현.
  const saveImgFile = () => {
    const file = imgRef.current.files[0]
    const reader = new FileReader()
    reader.onloadend = () => {
      setImageSrc(reader.result)
      setCounselingImage(file)
      console.log(counselingImage + "이미지 나오냐?")
    }
    reader.readAsDataURL(file)
  }

  const imageSelect = () => {
    imgRef.current.click()
  }

  const onChangeCounselingTitle = (event) => {
    const currentTitle = event.target.value
    setCounselingTitle(currentTitle)
  }

  const onChangeMemberId = (event) => {
    const currentMemberId = event.target.value
    setMemberId(currentMemberId)
  }

  const onChangeMemberName = (event) => {
    const currentMemberName = event.target.value
    setMemberName(currentMemberName)
  }

  // const onChangeDepartmentName = (event) => {
  //   const currentDepartment = event.target.value
  //   setDepartmentName(currentDepartment)
  // }
  const onChangeDepartmentId = (event) => {
    const currentDepartmentId = event.target.value
    setDepartmentName(currentDepartmentId)
    console.log(currentDepartmentId)
  }

  const onChangeCounselingContent = (event) => {
    const currentContent = event.target.value
    setCounselingContent(currentContent)
  }

  const counselingSubmit = (event) => {
    event.preventDefault()
    const counselingForm = new FormData()
    counselingForm.append("counselingImage", counselingImage)
    counselingForm.append("counselingTitle", counselingTitle)
    counselingForm.append("memberId", memberId)
    counselingForm.append("memberName", memberName)
    counselingForm.append("departmentId", departmentId)
    counselingForm.append("counselingContent", counselingContent)

    dispatch(__addCounseling(counselingForm))
      .then((response) => {
        if (response) {
          alert("상담 접수가 완료되었습니다.")
        } else {
          alert("상담 접수에 실패했습니다.")
        }
      })
      .catch((error) => {
        alert("상담 접수간 오류가 발생했습니다. " + error.code)
      })
  }

  return (
    <Wrap>
      <CounselingWrapper>
        <CounselingHeader>
          <CounselingHeaderTitle>비대면 상담 제출하기</CounselingHeaderTitle>
        </CounselingHeader>
        <CounselingBody>
          <CounselingImgContent>
            <CounselingImg imagesrc={imageSrc} />

            <CounselingBtn onClick={imageSelect}>사진선택</CounselingBtn>
            <CounselingFileInput
              type="file"
              id="counselingImage"
              accept="image/*"
              onChange={saveImgFile}
              ref={imgRef}
            />
          </CounselingImgContent>
          <CounselingFormContent>
            <CounselingTitles>
              <CounselingTitle>제목</CounselingTitle>
              <CounselingTitleInput
                type="text"
                id="counselingTitle"
                maxlength="20"
                placeholder="상담 제목을 입력해주세요"
                onChange={onChangeCounselingTitle}
              />
            </CounselingTitles>
            <CounselingIds>
              <CounselingId>아이디</CounselingId>
              <CounselingInput
                type="text"
                id="memberId"
                maxlength="10"
                value={member.memberId}
                placeholder="아이디를 입력해주세요"
                onChange={onChangeMemberId}
              />
            </CounselingIds>
            <CounselingNames>
              <CounselingName>이름</CounselingName>
              <CounselingNameInput
                type="text"
                id="memberName"
                maxlength="4"
                value={member.memberName}
                placeholder="이름을 입력해주세요"
                onChange={onChangeMemberName}
              />
            </CounselingNames>
            <CounselingDiagnosis>
              <CounselingDiagnosisName>상담과목</CounselingDiagnosisName>
              <CounselingDiagnosisSelect onChange={onChangeDepartmentId}>
                <SelectDiagnosis id="departmentId" value="1">
                  내과
                </SelectDiagnosis>
                <SelectDiagnosis id="departmentId" value="2">
                  소아과
                </SelectDiagnosis>
                <SelectDiagnosis id="departmentId" value="3">
                  이비인후과
                </SelectDiagnosis>
                <SelectDiagnosis id="departmentId" value="4">
                  외과
                </SelectDiagnosis>
                <SelectDiagnosis id="departmentId" value="5">
                  치과
                </SelectDiagnosis>
              </CounselingDiagnosisSelect>
            </CounselingDiagnosis>
            <CounselingTexts>
              <CounselingTextName>상담내용</CounselingTextName>
              <CounselingText
                type="text"
                id="counselingContent"
                maxlength="200"
                placeholder="내용 입력"
                onChange={onChangeCounselingContent}
              />
            </CounselingTexts>
            <CounselingFormBtns>
              <CounselingSubmitBtn onClick={counselingSubmit}>
                제출하기
              </CounselingSubmitBtn>
            </CounselingFormBtns>
          </CounselingFormContent>
        </CounselingBody>
      </CounselingWrapper>
    </Wrap>
  )
}

export default Counseling

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`

const CounselingWrapper = styled.div`
  width: 1100px;
  height: 700px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
`

const CounselingHeader = styled.div`
  width: 1100px;
  height: 105px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const CounselingHeaderTitle = styled.span`
  font-size: 30px;
  font-family: "GmarketSansMedium";
`
const CounselingBody = styled.div`
  width: 1100px;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const CounselingImgContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const CounselingImg = styled.div`
  width: 450px;
  height: 450px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.15);
  background-image: ${({ imagesrc }) =>
    imagesrc ? `url(${imagesrc})` : `url(${defaultImg})`};
  background-size: cover;
`
const CounselingBtn = styled.button`
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

const CounselingFileInput = styled.input`
  display: none;
`

const CounselingFormContent = styled.div`
  width: 500px;
  height: 570px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const CounselingTitles = styled.div`
  width: 450px;
  height: 70px;
  /* border: 1px solid black; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CounselingTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CounselingTitleInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  text-align: center;
  font-size: 15px;
  outline: none;
`
// const CounselingIdNames = styled.div`
//   width: 450px;
//   height: 100px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `
const CounselingIds = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CounselingId = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CounselingInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const CounselingNames = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CounselingName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CounselingNameInput = styled.input`
  width: 300px;
  height: 30px;
  padding: 5px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const CounselingDiagnosis = styled.div`
  width: 450px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CounselingDiagnosisName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CounselingDiagnosisSelect = styled.select`
  width: 311px;
  height: 40px;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 15px;
  text-align: center;
  outline: none;
`
const SelectDiagnosis = styled.option``
const CounselingTexts = styled.div`
  width: 450px;
  height: 270px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const CounselingTextName = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const CounselingText = styled.textarea`
  width: 300px;
  height: 190px;
  padding: 5px;
  resize: none;
  outline: none;
`
const CounselingFormBtns = styled.div`
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: right;
  align-items: center;
`
const CounselingSubmitBtn = styled.button`
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
