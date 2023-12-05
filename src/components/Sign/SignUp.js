import React, { useRef, useState } from "react"
import styled from "styled-components"
import User from "../../assets/images/User.png"
import Lock from "../../assets/images/Lock.png"
import Email from "../../assets/images/Email.png"
import Phone from "../../assets/images/Phone.png"
import Address from "../../assets/images/Address.png"
import { useNavigate } from "react-router-dom"
import DaumPostcode from "react-daum-postcode"
import Logo from "../../assets/images/Logo.jpg"
import CloseBtn from "../../assets/images/XBtn.png"
import { useDispatch } from "react-redux"
import { __signUp } from "../../redux/modules/authSlice"
import Swal from "sweetalert2"

function SignUp(props) {
  const dispatch = useDispatch()
  const [memberId, setMemberId] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConfirm, setPasswordConfirm] = useState("")
  const [memberName, setMemberName] = useState("")
  const [memberEmail, setMemberEmail] = useState("")
  const [memberTel, setMemberTel] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [memberAddress, setMemberAddress] = useState("")
  const [memberAddressDetail, setMemberAddressDetail] = useState("")

  const [isId, setIsId] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isMemberName, setIsMemberName] = useState(false)
  const [isMemberEmail, setIsMemberEmail] = useState(false)
  const [isMemberTel, setIsMemberTel] = useState(false)
  const [isAge, setIsAge] = useState(false)

  const [idMessage, setIdMessage] = useState("")
  const [passwordMessage, setPasswordMessage] = useState("")
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("")
  const [memberNameMessage, setMemberNameMessage] = useState("")
  const [memberEmailMessage, setMemberEmailMessage] = useState("")
  const [memberTelMessage, setMemberTelMessage] = useState("")
  const [ageMessage, setAgeMessage] = useState("")

  const [addressModal, setAddressModal] = useState(false)

  const addressToggle = () => {
    setAddressModal(!addressModal)
  }

  const onChangeId = (event) => {
    const currentId = event.target.value
    setMemberId(currentId)
    const idRegExp = /^[a-zA-Z0-9]{4,12}$/

    if (!idRegExp.test(currentId)) {
      setIdMessage("4~12자리 대소문자 또는 숫자만 입력해주세요!")
      setIsId(false)
    } else {
      setIdMessage("사용 가능한 아이디입니다.")
      setIsId(true)
    }
  }

  const onChangePassword = (event) => {
    const currentPassword = event.target.value
    setPassword(currentPassword)
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/

    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8~16자리 입력해주세요!")
      setIsPassword(false)
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.")
      setIsPassword(true)
    }
  }

  const onChangePasswordConfirm = (event) => {
    const currentPasswordConfirm = event.target.value
    setPasswordConfirm(currentPasswordConfirm)
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.")
      setIsPasswordConfirm(false)
    } else {
      setPasswordConfirmMessage("비밀번호가 일치합니다.")
      setIsPasswordConfirm(true)
    }
  }

  const onChangeMemberName = (event) => {
    const currentMemberName = event.target.value
    setMemberName(currentMemberName)
    if (currentMemberName.length < 2 || currentMemberName.length > 5) {
      setMemberNameMessage("이름은 두글자 이상 5글자 이하로 작성해주세요.")
      setIsMemberName(false)
    } else {
      setMemberNameMessage("형식에 맞는 알맞는 이름입니다.")
      setIsMemberName(true)
    }
  }

  const onChangeMemberEmail = (event) => {
    const currentMemberEmail = event.target.value
    setMemberEmail(currentMemberEmail)
    const memberEmailRegExp =
      /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/
    if (!memberEmailRegExp.test(currentMemberEmail)) {
      setMemberEmailMessage("이메일 형식이 일치하지 않습니다.")
      setIsMemberEmail(false)
    } else {
      setMemberEmailMessage("사용 가능한 이메일입니다.")
      setIsMemberEmail(true)
    }
  }

  const onChangeMemberTel = (getNumber) => {
    const currentMemberTel = getNumber
    setMemberTel(currentMemberTel)
    const memberTelRegExp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/

    if (!memberTelRegExp.test(currentMemberTel)) {
      setMemberTelMessage("- 기호를 넣어서 입력해주세요 (ex.010-0000-0000)")
      setIsMemberTel(false)
    } else {
      setMemberTelMessage("알맞은 전화번호입니다.")
      setIsMemberTel(true)
    }
  }

  const onAddHypen = (event) => {
    const currentNumber = event.target.value
    setMemberTel(currentNumber)
    if (currentNumber.length === 3 || currentNumber.length === 8) {
      setMemberTel(currentNumber + "-")
      onChangeMemberTel(currentNumber + "-")
    } else {
      onChangeMemberTel(currentNumber)
    }
  }

  const onChangeAge = (event) => {
    const currentAgeNumber = event.target.value
    setAge(currentAgeNumber)
    const AgeNumberRegExp = /^([0-9]{6})$/
    if (!AgeNumberRegExp.test(currentAgeNumber)) {
      setAgeMessage("주민번호 형식이 일치하지 않습니다.")
      setIsAge(false)
    } else {
      setAgeMessage("알맞은 주민번호입니다.")
      setIsAge(true)
    }
  }

  const onChangeGender = (event) => {
    const currentGender = event.target.value
    setGender(currentGender)
    const GenderRegExp = /^([1-4]{1})$/
    if (!GenderRegExp.test(currentGender)) {
      setAgeMessage("뒷자리 형식이 일치하지 않습니다.")
      setIsAge(false)
    } else {
      setAgeMessage("알맞은 뒷자리 입니다.")
      setIsAge(true)
    }
  }

  const onChangeAddress = (event) => {
    const currentAddress = event.target.value
    setMemberAddress(currentAddress)
  }

  const onChangeAddressDetail = (event) => {
    const currentAddressD = event.target.value
    setMemberAddressDetail(currentAddressD)
    console.log(memberAddressDetail)
  }

  const handleComplete = (data) => {
    let fullAddress = data.address
    let extraAddress = ""
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
    }
    setMemberAddress(fullAddress)
    setAddressModal(!addressModal)
    console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  const handleSearch = (data) => {
    // console.log(data);
  }

  const postCodeStyle = {
    width: "510px",
    height: "450px",
    backgroundColor: "white",
  }

  const navigate = useNavigate()

  const BeforeLogin = () => {
    navigate("/login")
  }

  const GoToLogin = () => {
    navigate("/login")
  }

  const onSignUpSubmit = (event) => {
    event.preventDefault()

    const signUpForm = {
      memberId: memberId,
      password: password,
      memberName: memberName,
      memberEmail: memberEmail,
      memberTel: memberTel,
      memberAddress: memberAddress,
      memberAddressDetail: memberAddressDetail,
      age: age,
      gender: gender,
    }

    dispatch(__signUp(signUpForm))
      .then((response) => {
        if (response) {
          Swal.fire({
            title: "회원가입이 완료되었습니다.",
            icon: "success",
            closeOnClickOutside: false,
            confirmButtonColor: "#223359",
          }).then(function () {
            navigate("/login")
          })
        }
      })
      .catch((error) => {
        Swal.fire({
          title: "중복된 아이디입니다. ",
          icon: "false",
          closeOnClickOutside: false,
          confirmButtonColor: "#223359",
        }).then(function () {})
      })
  }

  return (
    <Wrap>
      <SignUpWrap>
        <SignUpBody>
          <SignUpLogos>
            <SignUpLogoImg />
          </SignUpLogos>
          <SignUpForm>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpUserImg />
                <SignUpInput
                  type="text"
                  id="memberId"
                  name="memberId"
                  placeholder="아이디"
                  onChange={onChangeId}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isId}>{idMessage}</SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpLockImg />
                <SignUpInput
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="비밀번호"
                  onChange={onChangePassword}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isPassword}>
                {passwordMessage}
              </SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpLockImg />
                <SignUpInput
                  type="password"
                  id="passwordConfirm"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  placeholder="비밀번호 확인"
                  onChange={onChangePasswordConfirm}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isPasswordConfirm}>
                {passwordConfirmMessage}
              </SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpUserImg />
                <SignUpInput
                  type="text"
                  id="memberName"
                  name="memberName"
                  value={memberName}
                  placeholder="이름"
                  onChange={onChangeMemberName}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isMemberName}>
                {memberNameMessage}
              </SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpEmailImg />
                <SignUpInput
                  type="email"
                  id="memberEmail"
                  name="memberEmail"
                  value={memberEmail}
                  placeholder="이메일"
                  onChange={onChangeMemberEmail}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isMemberEmail}>
                {memberEmailMessage}
              </SignUpMessage>
            </SignUpMessages>

            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpUserImg />
                <SignUpAgeInput
                  id="age"
                  name="age"
                  maxLength="6"
                  placeholder="주민번호앞"
                  value={age}
                  onChange={onChangeAge}
                />
                <Dash>ㅡ</Dash>
                <SignUpGenderInput
                  id="gender"
                  name="gender"
                  maxLength="1"
                  placeholder="뒤"
                  onChange={onChangeGender}
                />
                <SignUpEncription>
                  <SignUpEncriptionSpan>* * * * * *</SignUpEncriptionSpan>
                </SignUpEncription>
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isAge}>{ageMessage}</SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpPhoneImg />
                <SignUpInput
                  id="memberTel"
                  name="memberTel"
                  placeholder="전화번호"
                  onChange={onAddHypen}
                />
              </SignUpInputs>
            </SignUpInputDiv>
            <SignUpMessages>
              <SignUpMessage condition={isMemberTel}>
                {memberTelMessage}
              </SignUpMessage>
            </SignUpMessages>
            <SignUpInputDiv>
              <SignUpInputs>
                <SignUpAddressImg />
                <SignUpAddressInput
                  type="text"
                  id="memberAddress"
                  name="memberAddress"
                  value={memberAddress}
                  placeholder="주소"
                  onChange={onChangeAddress}
                />
                <SignUpAddressButton onClick={addressToggle}>
                  주소검색
                </SignUpAddressButton>
              </SignUpInputs>
              {addressModal && (
                <AddressWrap>
                  <AddressOverlay>
                    <AddressContent>
                      <AddressTitles>
                        <AddressTitle>주소 검색</AddressTitle>
                        <AddressCancel onClick={addressToggle} />
                      </AddressTitles>
                      <DaumPostcode
                        onComplete={handleComplete}
                        onSearch={handleSearch}
                        style={postCodeStyle}
                        {...props}
                      />
                    </AddressContent>
                  </AddressOverlay>
                </AddressWrap>
              )}
            </SignUpInputDiv>
            <SignUpAddressInputDiv>
              <SignUpInputs>
                <SignUpAddressImg />
                <SignUpInput
                  type="text"
                  id="memberAddressDetail"
                  name="memberAddressDetail"
                  placeholder="상세 주소"
                  onChange={onChangeAddressDetail}
                />
              </SignUpInputs>
            </SignUpAddressInputDiv>
            <SignUpBtns>
              <SignUpBtn type="submit" onClick={onSignUpSubmit}>
                회원가입
              </SignUpBtn>
              <SignUpCancelBtn onClick={BeforeLogin}>가입취소</SignUpCancelBtn>
            </SignUpBtns>
            <LogInGo>
              이미 계정이 있다면?
              <LogInGoBtn onClick={GoToLogin}> 로그인</LogInGoBtn>
            </LogInGo>
            {/* </SignUpInputDivSection2> */}
          </SignUpForm>
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
  width: 1050px;
  height: 820px;
  border: transparent;
  border-radius: 30px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid black; */
`

const SignUpLogos = styled.div`
  width: 400px;
  height: 250px;
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`
const SignUpLogoImg = styled.div`
  width: 480px;
  height: 200px;
  background-image: url(${Logo});
  background-size: contain;
`
/*회원가입항목 입력 픽토그램과 Input을 감싸는 div*/
const SignUpInputDiv = styled.div`
  width: 440px;
  height: 60px;
  border: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const SignUpAddressInputDiv = styled.div`
  width: 440px;
  height: 60px;
  margin-top: 14px;
  border: transparent;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const SignUpInputs = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  width: 83%;
  height: 60%;
  margin-left: 10px;
  border: transparent;
  border-bottom: 1px solid black;
  background-color: transparent;
  font-size: 15px;
  font-weight: 600;
  outline: none;
`
/*회원가입 항목 Input */
const SignUpAddressInput = styled.input`
  width: 67%;
  height: 60%;
  margin-left: 10px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 15px;
  font-weight: 600;
  outline: none;
`
const SignUpAddressButton = styled.button`
  width: 16%;
  height: 60%;
  border: transparent;
  background-color: white;
  font-family: "GmarketSansMedium";

  &:hover {
    font-weight: 600;
    /* font-family: "GmarketSansBold"; */
  }
`

const SignUpAgeInput = styled.input`
  width: 36%;
  height: 60%;
  border: transparent;
  border-bottom: 1px solid black;
  margin-left: 10px;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  text-align: center;
`

const SignUpGenderInput = styled.input`
  width: 8%;
  height: 62%;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  text-align: center;
`

const SignUpEncription = styled.div`
  width: 27%;
  height: 62%;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const SignUpEncriptionSpan = styled.span`
  height: 50%;
  margin-top: 10px;
  border: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

const Dash = styled.span`
  width: 20px;
  margin: 0 10px 0 15px;
`

const SignUpMessages = styled.div`
  width: 400px;
  height: 12px;
  text-align: center;
  user-select: none;
`

const SignUpMessage = styled.p`
  height: 12px;
  font-weight: 600;
  color: ${(props) => (props.condition ? "black" : "red")};
`

/*회원가입 제출폼 */
const SignUpForm = styled.div`
  width: 450px;
  height: 550px;
  margin-left: 60px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const SignUpInputDivSection1 = styled.div`
  border: 1px solid black;
`
const SignUpInputDivSection2 = styled.div`
  height: 380px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

/*회원가입 , 취소 버튼 감싸는 div */
const SignUpBtns = styled.div`
  width: 360px;
  height: 45px;
  margin: 14px auto 10px auto;
  display: flex;
  justify-content: space-between;
  user-select: none;
`
/*회원가입 버튼 */
const SignUpBtn = styled.button`
  width: 170px;
  height: 45px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 22px;
  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
/*가입취소버튼 */
const SignUpCancelBtn = styled.button`
  width: 170px;
  height: 45px;
  border: transparent;
  border-radius: 8px;
  background-color: #223359;
  color: white;
  font-size: 22px;
  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`
/*이미 계정이 있으신가요? 와 로그인을 감싸는 div */
const LogInGo = styled.div`
  font-size: 22px;
  margin-top: 10px;
  height: 20px;
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

const AddressWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const AddressOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`

const AddressContent = styled.div`
  width: 510px;
  height: 520px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  top: 20%;
  left: 30%;
  transform: translate(10%, 0);
  position: absolute;
`

const AddressTitles = styled.div`
  width: 510px;
  height: 70px;
  margin-bottom: 5px;
  /* border: 1px solid black; */
  display: flex;
  justify-content: center;
  align-items: center;
`

const AddressTitle = styled.span`
  width: 440px;
  font-size: 25px;
  margin-left: 20px;
  text-align: center;
  font-family: "GmarketSansMedium";
`
const AddressCancel = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${CloseBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
// SignUp.defaultProps = {
//   style: {
//     width: "500px",
//     height: "700px",
//   },
// }
