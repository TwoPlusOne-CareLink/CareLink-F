import React, { useRef } from "react"
import styled from "styled-components"
import User from "../../assets/images/User.png"
import Lock from "../../assets/images/Lock.png"
import Email from "../../assets/images/Email.png"
import Phone from "../../assets/images/Phone.png"
import Address from "../../assets/images/Address.png"
import { useNavigate } from "react-router-dom"

function SignUp() {
  const navigate = useNavigate()

  const BeforeLogin = () => {
    navigate(-1)
  }

  const UserSignUp = () => {
    navigate("/signin")
    alert("가입이 완료되었습니다!")
  }

  return (
    <Wrap>
      <SignUpWrap>
        <SignUpTitle>Care Link 회원가입</SignUpTitle>
        <SignUpBody>
          <SignUpForm>
            <SignUpInputDiv>
              <SignUpUserImg />
              <SignUpInput type="text" id="id" name="id" placeholder="아이디" />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpLockImg />
              <SignUpInput
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpLockImg />
              <SignUpInput
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="비밀번호 확인"
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpUserImg />
              <SignUpInput
                type="text"
                id="name"
                name="name"
                placeholder="이름"
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpEmailImg />
              <SignUpInput
                type="email"
                id="email"
                name="email"
                placeholder="이메일"
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpPhoneImg />
              <SignUpInput
                type="tel"
                id="tel"
                name="tel"
                placeholder="전화번호"
              />
            </SignUpInputDiv>
            <SignUpInputDiv>
              <SignUpAddressImg />
              <SignUpInput
                type="text"
                id="address_kakao"
                name="address"
                placeholder="주소"
              />
            </SignUpInputDiv>
          </SignUpForm>
          <SignUpBtns>
            <SignUpBtn onClick={UserSignUp}>회원가입</SignUpBtn>
            <SignUpCancelBtn onClick={BeforeLogin}>가입취소</SignUpCancelBtn>
          </SignUpBtns>
          <LogInGo>
            이미 계정이 있다면?
            <LogInGoBtn onClick={BeforeLogin}> 로그인</LogInGoBtn>
          </LogInGo>
        </SignUpBody>
      </SignUpWrap>
    </Wrap>
  )
}

export default SignUp
/*메인 전체를 감싸는 div */
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

/*회원가입 메인 div */
const SignUpWrap = styled.div`
  width: 800px;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
/*회원가입 타이틀 */
const SignUpTitle = styled.span`
  width: 400px;
  text-align: center;
  font-size: 40px;
  font-family: "GmarketSansMedium";
  user-select: none;
`
/*회원가입  */
const SignUpBody = styled.div`
  margin-top: 20px;
  border: transparent;
  border-radius: 30px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
`

/*회원가입항목 입력 픽토그램과 Input을 감싸는 div*/
const SignUpInputDiv = styled.div`
  width: 400px;
  height: 50px;
  margin: 10px auto;
  border: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:focus-within {
    outline: auto;
  }
`
/*유저 픽토그램 */
const SignUpUserImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${User});
  background-size: cover;
  user-select: none;
`
/*비밀번호 픽토그램 */
const SignUpLockImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${Lock});
  background-size: cover;
  user-select: none;
`
/*이메일 픽토그램 */
const SignUpEmailImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${Email});
  background-size: cover;
  user-select: none;
`
/*전화번호 픽토그램 */
const SignUpPhoneImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${Phone});
  background-size: cover;
  user-select: none;
`
/*주소 픽토그램 */
const SignUpAddressImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${Address});
  background-size: cover;
  user-select: none;
`

/*회원가입 항목 Input */
const SignUpInput = styled.input`
  width: 87%;
  height: 60%;
  margin-left: 10px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 18px;
  outline: none;
`

/*회원가입 제출폼 */
const SignUpForm = styled.form`
  width: 450px;
  height: 540px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
/*회원가입 , 취소 버튼 감싸는 div */
const SignUpBtns = styled.div`
  width: 400px;
  height: 50px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  user-select: none;
`
/*회원가입 버튼 */
const SignUpBtn = styled.button`
  width: 190px;
  height: 50px;
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
/*가입취소버튼 */
const SignUpCancelBtn = styled.button`
  width: 190px;
  height: 50px;
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
/*이미 계정이 있으신가요? 와 로그인을 감싸는 div */
const LogInGo = styled.div`
  font-size: 25px;
  margin: 20px auto;
  height: 30px;
  text-align: center;
  user-select: none;
`

/*로그인 화면으로 가는 링크 */
const LogInGoBtn = styled.a`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
