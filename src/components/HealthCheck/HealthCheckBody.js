import React from "react"
import { styled } from "styled-components"

function HealthCheckBody() {
  return (
    <HealthCheckFormBody>
      <HealthCheckFormContents>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>이름</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="text"
            maxLength="6"
            placeholder="이름 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>성별</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="text"
            maxLength="2"
            placeholder="성별 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>나이</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxLength="3"
            placeholder="나이 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>신장</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="6"
            placeholder="키 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>체중</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="3"
            placeholder="몸무게 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>심박수</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="3"
            placeholder="심박수 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>혈당</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="3"
            placeholder="혈당수치 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>수축혈압</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="3"
            placeholder="수축혈압수치 입력"
          />
        </HealthCheckFormContent>
        <HealthCheckFormContent>
          <HealthCheckContentTitle>이완혈압</HealthCheckContentTitle>
          <HealthCheckContentInput
            type="number"
            maxlength="3"
            placeholder="이완혈압수치 입력"
          />
        </HealthCheckFormContent>
      </HealthCheckFormContents>
      <HealthCheckFormTexts>
        <HealthCheckFormTextTitle>작성내용</HealthCheckFormTextTitle>
        <HealthCheckFormText placeholder="상세 내역을 입력해주세요" />
      </HealthCheckFormTexts>
      <HealthCheckFormBtns>
        <HealthCheckFormBtn>작성하기</HealthCheckFormBtn>
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
