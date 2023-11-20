import React, { useState } from "react"
import styled from "styled-components"
import User from "../../assets/images/User.png"
import Lock from "../../assets/images/Lock.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { __signIn } from "../../redux/modules/authSlice"

function SignIn() {
  const dispatch = useDispatch()
  const [memberId, setMemberId] = useState()
  const [password, setPassword] = useState()

  const navigate = useNavigate()

  const GoToSignUp = () => {
    navigate("/signup")
  }

  const memberIdHandler = (event) => {
    const currentId = event.target.value
    setMemberId(currentId)
    console.log(memberId, currentId)
  }

  const memberPasswordHandler = (event) => {
    const currentPassword = event.target.value
    setPassword(currentPassword)
    console.log(password, currentPassword)
  }

  const onLogin = (event) => {
    event.preventDefault()
    const loginForm = new FormData()
    loginForm.append("memberId", memberId)
    loginForm.append("password", password)

    dispatch(__signIn(loginForm))
      .then((response) => {
        if (response) {
          alert("회원님, 환영합니다!")
          console.log("토큰이 있어")
        }
      })
      .catch((error) => {
        alert("로그인 실패!" + error.code)
      })
  }

  return (
    <Wrap>
      <SignInWrap>
        <SignInTitle>CareLink</SignInTitle>
        <SignInBody>
          <SignInDiv>
            <SignInInputDiv>
              <SignInUserImg />
              <SignInId
                type="text"
                id="id"
                name="id"
                placeholder="아이디"
                onChange={memberIdHandler}
              />
            </SignInInputDiv>
            <SignInInputDiv>
              <SignInPasswordImg />
              <SignInPassword
                type="password"
                id="password"
                name="password"
                placeholder="비밀번호"
                onChange={memberPasswordHandler}
              />
            </SignInInputDiv>
          </SignInDiv>
          <SignBtns>
            <SignInBtn onClick={onLogin}>로그인</SignInBtn>
            <SignUpBtn onClick={GoToSignUp}>회원가입</SignUpBtn>
          </SignBtns>
        </SignInBody>
      </SignInWrap>
    </Wrap>
  )
}

export default SignIn

/*로그인 메인 전체 */
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
/*로그인 메인 감싸는 div */
const SignInWrap = styled.div`
  width: 800px;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
/*로그인 타이틀 */
const SignInTitle = styled.span`
  font-size: 80px;
  user-select: none;
`
const SignInBody = styled.div`
  width: 450px;
  height: 400px;
  margin-top: 10px;
  border: transparent;
  border-radius: 20px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignInDiv = styled.div`
  width: 360px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const SignInInputDiv = styled.div`
  padding: 10px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
  &:focus-within {
    outline: auto;
  }
`
const SignInUserImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${User});
  background-size: cover;
`
const SignInPasswordImg = styled.div`
  width: 25px;
  height: 25px;
  background-image: url(${Lock});
  background-size: cover;
`

const SignInId = styled.input`
  width: 300px;
  height: 40px;
  margin-left: 10px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  outline: none;
`
const SignInPassword = styled.input`
  width: 300px;
  height: 40px;
  margin-left: 10px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  outline: none;
`

const SignBtns = styled.div`
  width: 300px;
  height: 50px;
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const SignInBtn = styled.button`
  width: 140px;
  height: 50px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #223369;
  color: white;
  font-size: 23px;
  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
const SignUpBtn = styled.button`
  width: 140px;
  height: 50px;
  border: 1px solid transparent;
  border-radius: 8px;
  background-color: #223369;
  color: white;
  font-size: 23px;
  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
