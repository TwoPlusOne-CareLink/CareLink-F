import React, { useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"
import DaumPostcode from "react-daum-postcode"
import { __updateUserInfo } from "../../redux/modules/userSlice"

function UserInfoUpdate(props) {
  const [id, setId] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [memberName, setMemberName] = useState()
  const [memberEmail, setMemberEmail] = useState()
  const [memberTel, setMemberTel] = useState()
  const [memberAddress, setMemberAddress] = useState()
  const [memberAddressDetail, setMemberAddressDetail] = useState()

  const [isId, setIsId] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isMemberEmail, setIsMemberEmail] = useState(false)
  const [isMemberTel, setIsMemberTel] = useState(false)

  const [passwordMessage, setPasswordMessage] = useState()
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState()
  const [memberEmailMessage, setMemberEmailMessage] = useState()
  const [memberTelMessage, setMemberTelMessage] = useState()

  const [addressModal, setAddressModal] = useState()

  const [member, setMember] = useState([
    {
      memberId: "sound4519",
      memberName: "이승진",
    },
  ])

  const addressToggle = () => {
    setAddressModal(!addressModal)
  }

  const handleComplete = (data) => {
    let fullAddress = data.address
    let extraAddress = ""
    // console.log(data);
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

  // 아이디 감지 로직 ( 이부분은 멤버 정보 받아와서 불러올 예정 )
  const onChangeId = (event) => {
    const currentId = event.target.value
    setId(currentId)
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

  const onChangeAddress = (event) => {
    const currentAddress = event.target.value
    setMemberAddress(currentAddress)
  }

  const onChangeAddressDetail = (event) => {
    const currentAddressD = event.target.value
    setMemberAddressDetail(currentAddressD)
    console.log(memberAddressDetail)
  }

  const userInfoSubmit = (event) => {
    event.preventDefault()
    const userInfoForm = new FormData()
    userInfoForm.append("id", id)
    userInfoForm.append("password", password)
    userInfoForm.append("memberName", memberName)
    userInfoForm.append("memberEmail", memberEmail)
    userInfoForm.append("memberTel", memberTel)
    userInfoForm.append("memberAddress", memberAddress)
    userInfoForm.append("memberAddressDetail", memberAddressDetail)

    dispatchEvent(__updateUserInfo(userInfoForm))
      .then((response) => {
        if (response) {
          alert("업데이트가 완료되었습니다.")
        }
      })
      .catch((error) => {
        alert("오류가 발생했습니다." + error)
      })
  }

  return (
    <Wrap>
      <UserInfoWrap>
        <UserInfoHeader>
          <UserInfoTitle>회원정보수정</UserInfoTitle>
        </UserInfoHeader>
        <UserInfoBody>
          {member.map((item) => (
            <UserInfoContents>
              <UserInfoContent>
                <UserInfoContentUpTitles>
                  <UserInfoContentTitle>아이디</UserInfoContentTitle>
                </UserInfoContentUpTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    id="id"
                    readOnly
                    placeholder="예시아이디"
                    value={item.memberId}
                    onChange={onChangeId}
                  />
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>비밀번호</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    type="password"
                    id="password"
                    name="password"
                    placeholder="수정하실 비밀번호를 입력해주세요"
                    onChange={onChangePassword}
                  />
                  {/* <UserInfoMessage>{passwordMessage}</UserInfoMessage> */}
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>비밀번호 확인</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="수정하실 비밀번호를 다시 입력해주세요"
                    onChange={onChangePasswordConfirm}
                  />
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>이름</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    id="memberName"
                    readOnly
                    placeholder="예시이름"
                    value={item.memberName}
                    onChange={onChangeMemberName}
                  />
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>이메일</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    type="email"
                    id="memberEmail"
                    name="memberEmail"
                    maxlength="40"
                    placeholder="수정하실 이메일을 입력해주세요"
                    onChange={onChangeMemberEmail}
                  />
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>전화번호</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    id="memberTel"
                    name="memberTel"
                    placeholder="수정하실 전화번호를 입력해주세요"
                    onChange={onAddHypen}
                  />
                </UserInfoInputs>
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentTitles>
                  <UserInfoContentTitle>주소</UserInfoContentTitle>
                </UserInfoContentTitles>
                <UserInfoInputs>
                  <UserInfoInput
                    type="text"
                    id="memberAddress"
                    name="memberAddress"
                    placeholder="주소를 검색해주세요"
                    onChange={onChangeAddress}
                    value={memberAddress}
                  />
                  <UserAddressButton onClick={addressToggle}>
                    주소검색
                  </UserAddressButton>
                </UserInfoInputs>
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
              </UserInfoContent>
              <UserInfoContent>
                <UserInfoContentDownTitles>
                  <UserInfoContentTitle>상세주소</UserInfoContentTitle>
                </UserInfoContentDownTitles>
                <UserInfoLastInputs>
                  <UserInfoInput
                    type="text"
                    id="memberAddressDetail"
                    name="memberAddressDetail"
                    placeholder="상세주소를 입력해주세요"
                    onChange={onChangeAddressDetail}
                  />
                </UserInfoLastInputs>
              </UserInfoContent>
            </UserInfoContents>
          ))}
        </UserInfoBody>
        <UserInfoBtns>
          <UserInfoBtn onClick={userInfoSubmit}>수정완료</UserInfoBtn>
        </UserInfoBtns>
      </UserInfoWrap>
    </Wrap>
  )
}

export default UserInfoUpdate

const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
  display: flex;
`
const UserInfoWrap = styled.div`
  width: 1000px;
  height: 800px;
  margin: auto;
`
const UserInfoHeader = styled.div`
  width: 1000px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoTitle = styled.span`
  font-size: 25px;
  font-family: "GmarketSansMedium";
  user-select: none;
`
const UserInfoBody = styled.div`
  width: 1000px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoContents = styled.div`
  width: 620px;
  height: 640px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const UserInfoContent = styled.div`
  width: 620px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const UserInfoContentUpTitles = styled.div`
  width: 180px;
  height: 80px;
  border-top-left-radius: 12px;
  background-color: #223359;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserInfoContentTitles = styled.div`
  width: 180px;
  height: 80px;
  background-color: #223359;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoContentTitle = styled.span`
  font-size: 20px;
`

const UserInfoContentDownTitles = styled.div`
  width: 180px;
  height: 80px;
  border-bottom-left-radius: 12px;
  background-color: #223359;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoInputs = styled.div`
  width: 600px;
  height: 80px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  /* flex-direction: column; */
  justify-content: right;
  align-items: center;
`
const UserInfoLastInputs = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  user-select: none;
`

const UserInfoInput = styled.input`
  width: 430px;
  margin-right: 10px;
  padding: 10px;
  border: transparent;
  font-size: 20px;
  text-align: right;
`

const UserInfoMessage = styled.div`
  border: 1px solid black;
`

const UserAddressButton = styled.button`
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

const UserInfoBtns = styled.div`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoBtn = styled.button`
  width: 200px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 25px;
  color: white;
  user-select: none;

  &:hover {
    background-color: #192849;
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
  transform: translate(40%, 0);
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
