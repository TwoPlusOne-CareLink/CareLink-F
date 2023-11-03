import React from "react"
import styled from "styled-components"

function SignUp() {
  return (
    <Wrap>
      <SignUpWrap>
        <SignUpTitle>Care Link 회원가입</SignUpTitle>
        <SignUpBody>
          <SignUpForm>
            <SignUpInput />
            <SignUpInput />
            <SignUpInput />
            <SignUpInput />
            <SignUpInput />
            <SignUpInput />
            <SignUpInput />
          </SignUpForm>
          <SignUpBtns>
            <SignUpBtn>회원가입</SignUpBtn>
            <SignUpCancelBtn>가입취소</SignUpCancelBtn>
          </SignUpBtns>
          <LogInGo>
            이미 계정이 있다면?
            <LogInGoBtn>로그인</LogInGoBtn>
          </LogInGo>
        </SignUpBody>
      </SignUpWrap>
    </Wrap>
  )
}

export default SignUp

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const SignUpWrap = styled.div`
  width: 800px;
  height: 700px;
  margin: auto;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SignUpTitle = styled.span`
  width: 400px;
  border: 1px solid black;
  text-align: center;
  font-size: 40px;
`

const SignUpBody = styled.div`
  border: transparent;
  margin-top: 20px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
`

const SignUpInput = styled.input`
  width: 370px;
  height: 43px;
  margin: 10px auto;
`
const SignUpForm = styled.form`
  width: 450px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignUpBtns = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 50px;
  margin: 15px auto;
  display: flex;
  justify-content: space-between;
`

const SignUpBtn = styled.button`
  width: 190px;
  height: 50px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 30px;
`
const SignUpCancelBtn = styled.button`
  width: 190px;
  height: 50px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 30px;
`
const LogInGo = styled.div`
  font-size: 30px;
  margin: 15px auto;
  height: 30px;
  text-align: center;
`

const LogInGoBtn = styled.a``
