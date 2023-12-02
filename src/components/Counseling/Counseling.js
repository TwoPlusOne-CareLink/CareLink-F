import React, { useEffect, useRef, useState } from "react"
import styled from "styled-components"
import defaultImg from "../../assets/images/default.png"
import { useDispatch } from "react-redux"
import {
  __addCounseling,
  __getCounselingUserInfo,
} from "../../redux/modules/counselingSlice"

function Counseling() {
  const dispatch = useDispatch()
  const [imageSrc, setImageSrc] = useState()
  const [counselingImage, setCounselingImage] = useState()
  const [counselingTitle, setCounselingTitle] = useState()
  const [memberId, setMemberId] = useState("")
  const [memberName, setMemberName] = useState()
  const [departmentId, setDepartmentId] = useState()
  const [departmentName, setDepartmentName] = useState()
  const [counselingContent, setCounselingContent] = useState()

  const imgRef = useRef()

  const [member, setMember] = useState({})

  // 이미지 선택해서 미리보기까지 연결된 로직 , ref을 사용하여 Dom에 직접 접근. 백에 데이터로 보낼 img와 미리보기를 별도 구분하여 미리보기 로직 구현.
  // 이미지 한 개 추가 한 후 다시 추가하려고 할때, 파일 선택이 되었는지에 대한 여부 관련 처리 추가
  const saveImgFile = () => {
    const fileInput = imgRef.current
    if (!fileInput) {
      console.error("imageRef.current is null or undefined.")
      return
    }

    const file = fileInput.files[0]
    if (!file) {
      console.error("No File Selected")
      return
    }

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
    console.log(counselingTitle)
  }

  const onChangeMemberId = (event) => {
    const currentMemberId = event.target.value
    setMemberId(currentMemberId)
  }

  const onChangeMemberName = (event) => {
    const currentMemberName = event.target.value
    setMemberName(currentMemberName)
    console.log(memberName)
  }

  const onChangeDepartmentId = (event) => {
    const currentDepartmentId = event.target.value
    setDepartmentId(currentDepartmentId)
    console.log(departmentId)
  }

  const onChangeCounselingContent = (event) => {
    const currentContent = event.target.value
    setCounselingContent(currentContent)
    console.log(counselingContent)
  }

  const counselingSubmit = (event) => {
    event.preventDefault()
    const counselingForm = new FormData()
    if (counselingImage) {
      counselingForm.append("counselingAttach", counselingImage)
    }

    counselingForm.append("counselingTitle", counselingTitle)
    counselingForm.append("departmentId", departmentId)
    counselingForm.append("counselingContent", counselingContent)
    console.log(
      counselingImage,
      counselingTitle,
      departmentId,
      counselingContent
    )

    dispatch(__addCounseling(counselingForm))
      .then((response) => {
        if (response) {
          console.log(response)
          alert("상담 접수가 완료되었습니다.")
          // setCounselingImage("")
          // setCounselingTitle("")
          // setDepartmentId("")
          // setCounselingContent("")
          window.location.reload()
        }
      })
      .catch((error) => {
        console.log(error, error.message, error.code)
        alert("상담 접수간 오류가 발생했습니다. " + error.code)
      })
  }

  useEffect(() => {
    dispatch(__getCounselingUserInfo())
      .then((response) => {
        if (response) {
          setMember(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <Wrap>
      <HospitalTop>
        <HospitalTopTitle>비대면 상담 제출하기</HospitalTopTitle>
      </HospitalTop>
      <CounselingWrapper>
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
                <SelectDiagnosis value="0">
                  === 상담과목을 선택해주세요 ==
                </SelectDiagnosis>
                <SelectDiagnosis value="1">내과</SelectDiagnosis>
                <SelectDiagnosis value="2">소아과</SelectDiagnosis>
                <SelectDiagnosis value="3">이비인후과</SelectDiagnosis>
                <SelectDiagnosis value="4">외과</SelectDiagnosis>
                <SelectDiagnosis value="5">치과</SelectDiagnosis>
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
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CounselingWrapper = styled.div`
  width: 1200px;
  height: 700px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  margin: auto;
`

const CounselingHeader = styled.div`
  width: 1200px;
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
  width: 1200px;
  height: 700px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const CounselingImgContent = styled.div`
  width: 550px;
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
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  background-image: ${({ imagesrc }) =>
    imagesrc ? `url(${imagesrc})` : `url(${defaultImg})`};
  background-size: 100% 100%;
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
  width: 550px;
  height: 570px;
  /* margin-left: 30px; */
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
