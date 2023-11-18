import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { styled } from "styled-components"
import {
  __addHealthCheck,
  __getHealthCheckMember,
} from "../../redux/modules/healthCheckSlice"

function HealthCheckBody() {
  const dispatch = useDispatch()
  const [memberName, setMemberName] = useState()
  const [genderName, setGenderName] = useState()
  const [age, setAge] = useState()
  const [height, setHeight] = useState()
  const [weight, setWeight] = useState()
  const [systolicBloodPressure, setSystolicBloodPressure] = useState()
  const [relaxationBloodPressure, setRelaxationBloodPressure] = useState()
  const [bloodSugar, setBloodSugar] = useState()
  const [heartRate, setHeartRate] = useState()
  const [healthMemo, setHealthMemo] = useState()

  const [healthCheck, setHealthCheck] = useState([
    {
      checkId: 1,
      memberId: "sound4519",
      memberName: "윤시호",
      genderName: "남자",
      age: 22,
      height: 175.5,
      weight: 70.3,
      systolicBloodPressure: 110,
      relaxationBloodPressure: 70,
      bloodSugar: 120,
      heartRate: 75,
      healthMemo: "오늘의 컨디션은 매우 피곤해요",
    },
  ])

  // 헬스케어 체크리스트 페이지 접속시, 유저의 정보를 불러오는 로직(이름, 성별, 나이)
  useEffect(() => {
    dispatch(__getHealthCheckMember)
  }, [])

  // 체크리스트 작성자 이름 입력 감지 로직
  const onChangeMemberName = (event) => {
    const currentMemberName = event.target.value
    setMemberName(currentMemberName)
  }

  // 체크리스트 작성자 성별 입력 감지 로직
  const onChangeGenderName = (event) => {
    const currentGenderName = event.target.value
    setGenderName(currentGenderName)
  }

  // 체크리스트 작성자 나이 입력 감지 로직
  const onChangeAge = (event) => {
    const currentAge = event.target.value
    setAge(currentAge)
  }

  // 체크리스트 작성자 신장 입력 감지 로직
  const onChangeHeight = (event) => {
    const currentHeight = event.target.value
    setHeight(currentHeight)
  }

  // 체크리스트 작성자 체중 입력 감지 로직
  const onChangeWeight = (event) => {
    const currentWeight = event.target.value
    setWeight(currentWeight)
  }

  // 체크리스트 작성자 수축혈압 입력 감지 로직
  const onChangeSystolicBloodPressure = (event) => {
    const currentSystolicBloodPressure = event.target.value
    setSystolicBloodPressure(currentSystolicBloodPressure)
  }

  // 체크리스트 작성자 이완혈압 입력 감지 로직
  const onChangeRelaxationBloodPressure = (event) => {
    const currentRelaxationBloodPressure = event.target.value
    setRelaxationBloodPressure(currentRelaxationBloodPressure)
  }

  // 체크리스트 작성자 혈당수치 입력 감지 로직
  const onChangeBloodSugar = (event) => {
    const currentBloodSugar = event.target.value
    setBloodSugar(currentBloodSugar)
  }

  // 체크리스트 작성자 심박수 입력 감지 로직
  const onChangeHeartRate = (event) => {
    const currentHeartRate = event.target.value
    setHeartRate(currentHeartRate)
  }

  // 체크리스트 작성자 세부내용 입력 감지 로직
  const onChangeHealthMemo = (event) => {
    const currentHealthMemo = event.target.value
    setHealthMemo(currentHealthMemo)
  }

  const checkListSubmit = (event) => {
    event.preventDefault()
    const checkListForm = new FormData()
    checkListForm.append("memberName", memberName)
    checkListForm.append("genderName", genderName)
    checkListForm.append("age", age)
    checkListForm.append("height", height)
    checkListForm.append("weight", weight)
    checkListForm.append("systolicBloodPressure", systolicBloodPressure)
    checkListForm.append("relaxationBloodPressure", relaxationBloodPressure)
    checkListForm.append("bloodSugar", bloodSugar)
    checkListForm.append("heartRate", heartRate)
    checkListForm.append("healthMemo", healthMemo)
    console.log()

    dispatch(__addHealthCheck(checkListForm))
      .then((response) => {
        if (response) {
          alert("체크리스트 작성이 완료되었습니다.")
          console.log(checkListForm)
        }
      })
      .catch((error) => {
        alert("체크리스트 작성에 실패했습니다. " + error)
      })
  }

  return (
    <HealthCheckFormBody>
      <HealthCheckForm>
        <HealthCheckFormContents>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>이름</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="memberName"
              type="text"
              maxLength="6"
              placeholder="이름 입력"
              onChange={onChangeMemberName}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>성별</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="genderName"
              type="text"
              maxLength="2"
              placeholder="성별 입력"
              onChange={onChangeGenderName}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>나이</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="age"
              type="number"
              maxLength="3"
              placeholder="나이 입력"
              onChange={onChangeAge}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>신장</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="height"
              type="number"
              maxlength="6"
              placeholder="키 입력"
              onChange={onChangeHeight}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>체중</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="weight"
              type="number"
              maxlength="3"
              placeholder="몸무게 입력"
              onChange={onChangeWeight}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>심박수</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="heartRate"
              type="number"
              maxlength="3"
              placeholder="심박수 입력"
              onChange={onChangeHeartRate}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>혈당</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="bloodSugar"
              type="number"
              maxlength="3"
              placeholder="혈당수치 입력"
              onChange={onChangeBloodSugar}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>수축혈압</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="systolicBloodPressure"
              type="number"
              maxlength="3"
              placeholder="수축혈압수치 입력"
              onChange={onChangeSystolicBloodPressure}
            />
          </HealthCheckFormContent>
          <HealthCheckFormContent>
            <HealthCheckContentTitle>이완혈압</HealthCheckContentTitle>
            <HealthCheckContentInput
              id="relaxationBloodPressure"
              type="number"
              maxlength="3"
              placeholder="이완혈압수치 입력"
              onChange={onChangeRelaxationBloodPressure}
            />
          </HealthCheckFormContent>
        </HealthCheckFormContents>
        <HealthCheckFormTexts>
          <HealthCheckFormTextTitle>작성내용</HealthCheckFormTextTitle>
          <HealthCheckFormText
            id="healthMemo"
            onChange={onChangeHealthMemo}
            placeholder="상세 내역을 입력해주세요"
          />
        </HealthCheckFormTexts>
      </HealthCheckForm>

      <HealthCheckFormBtns>
        <HealthCheckFormBtn onClick={checkListSubmit}>
          작성하기
        </HealthCheckFormBtn>
      </HealthCheckFormBtns>
    </HealthCheckFormBody>
  )
}

export default HealthCheckBody

const HealthCheckFormBody = styled.div`
  width: 650px;
  height: 630px;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
`

const HealthCheckForm = styled.div``

const HealthCheckFormContents = styled.div`
  width: 650px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 10px;
`
const HealthCheckFormContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const HealthCheckContentTitle = styled.span`
  margin-left: 5px;
  font-size: 15px;
  font-family: "GmarketSansMedium";
  text-align: center;
  user-select: none;
`
const HealthCheckContentInput = styled.input`
  width: 120px;
  padding: 8px;
  border: transparent;
  border-bottom: 1px solid black;
  text-align: center;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`

const HealthCheckFormTexts = styled.div`
  width: 650px;
  height: 370px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  user-select: none;
`
const HealthCheckFormTextTitle = styled.span`
  margin: 30px 0 10px 5px;
  font-size: 15px;
  font-family: "GmarketSansMedium";
  text-align: center;
  user-select: none;
`
const HealthCheckFormText = styled.textarea`
  width: 625px;
  height: 380px;
  margin: auto;
  padding: 10px;
  border-radius: 8px;
  outline: none;
  resize: none;
`

const HealthCheckFormBtns = styled.div`
  width: 650px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const HealthCheckFormBtn = styled.button`
  width: 200px;
  height: 45px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  font-size: 23px;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
