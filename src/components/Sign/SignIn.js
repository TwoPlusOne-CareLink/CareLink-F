import React, { useEffect, useState } from "react"
import styled from "styled-components"
import User from "../../assets/images/User.png"
import Lock from "../../assets/images/Lock.png"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { __signIn } from "../../redux/modules/authSlice"
import Logo from "../../assets/images/Logo2.jpg"
import Swal from "sweetalert2"

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
  }

  const handleLoginOnKeyPress = (e) => {
    if (e.key === "Enter") {
      onLogin()
    }
  }

  const memberPasswordHandler = (event) => {
    const currentPassword = event.target.value
    setPassword(currentPassword)
    console.log(password, currentPassword)
  }

  const onLogin = () => {
    const loginForm = {
      memberId: memberId,
      password: password,
    }

    dispatch(__signIn(loginForm))
      .then((response) => {
        if (response.payload.data.role === "ROLE_USER") {
          Swal.fire({
            title: "회원님, 환영합니다 !",
            icon: "success",
            closeOnClickOutside: false,
            confirmButtonColor: "#223359",
          }).then(function () {
            navigate("/")
          })
        } else if (response.payload.data.role === "ROLE_DOCTOR") {
          Swal.fire({
            title: "의사회원님, 환영합니다 !",
            icon: "success",
            closeOnClickOutside: false,
            confirmButtonColor: "#223359",
          }).then(function () {
            navigate("/doctor")
          })
        } else if (response.payload.data.role === "ROLE_ADMIN") {
          Swal.fire({
            title: "병원관계자님, 환영합니다 !",
            icon: "success",
            closeOnClickOutside: false,
            confirmButtonColor: "#223359",
          }).then(function () {
            navigate("/hospital")
          })
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "오류가 발생했습니다.",
          icon: "false",
          closeOnClickOutside: false,
          confirmButtonColor: "#223359",
        }).then(function () {})
      })
  }

  return (
    <Wrap>
      <SignInWrap>
        <SignInTitle />

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
                onKeyPress={handleLoginOnKeyPress}
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
const SignInTitle = styled.div`
  /* font-size: 80px;
  user-select: none; */
  width: 400px;
  height: 100px;
  margin-bottom: 10px;
  background-image: url(${Logo});
  background-size: cover;
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
