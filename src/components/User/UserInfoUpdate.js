import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"
import DaumPostcode from "react-daum-postcode"
import { __getUserInfo, __updateUserInfo } from "../../redux/modules/userSlice"
import { useDispatch } from "react-redux"

function UserInfoUpdate(props) {
  const dispatch = useDispatch()
  const [member, setMember] = useState()
  const [memberId, setMemberId] = useState()
  const [password, setPassword] = useState()
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [memberName, setMemberName] = useState()
  const [memberEmail, setMemberEmail] = useState()
  const [memberTel, setMemberTel] = useState()
  const [memberAddress, setMemberAddress] = useState()
  const [memberAddressDetail, setMemberAddressDetail] = useState()

  const [isMemberId, setIsMemberId] = useState(false)
  const [isPassword, setIsPassword] = useState(false)
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
  const [isMemberEmail, setIsMemberEmail] = useState(false)
  const [isMemberTel, setIsMemberTel] = useState(false)

  const [passwordMessage, setPasswordMessage] = useState()
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState()
  const [memberEmailMessage, setMemberEmailMessage] = useState()
  const [memberTelMessage, setMemberTelMessage] = useState()

  const [addressModal, setAddressModal] = useState()

  const addressToggle = () => {
    setAddressModal(!addressModal)
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

  // 아이디 감지 로직 ( 이부분은 멤버 정보 받아와서 불러올 예정 )
  const onChangeMemberId = (event) => {
    const currentId = event.target.value
    setMemberId(currentId)
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
    console.log(currentAddress)
  }

  const onChangeAddressDetail = (event) => {
    const currentAddressDetail = event.target.value
    setMemberAddressDetail(currentAddressDetail)
    console.log(memberAddressDetail)
  }

  useEffect(() => {
    dispatch(__getUserInfo())
      .then((response) => {
        if (response) {
          console.log(response.payload.data, "문제있어?")
          setMember([response.payload.data])
          setMemberId(response.payload.data.memberId)
          setMemberName(response.payload.data.memberName)
          setMemberEmail(response.payload.data.memberEmail)
          setMemberTel(response.payload.data.memberTel)
          setMemberAddress(response.payload.data.memberAddress)
          setMemberAddressDetail(response.payload.data.memberAddressDetail)
        }
      })
      .catch((error) => {
        console.log(error + "에러발생중!")
      })
  }, [])

  const userInfoSubmit = (event) => {
    event.preventDefault()
    const userInfoForm = {
      memberId: memberId,
      password: password,
      memberName: memberName,
      memberEmail: memberEmail,
      memberTel: memberTel,
      memberAddress: memberAddress,
      memberAddressDetail: memberAddressDetail,
    }
    console.log(userInfoForm)

    dispatch(__updateUserInfo(userInfoForm))
      .then((response) => {
        if (response) {
          alert("업데이트가 완료되었습니다.")
          window.location.reload()
        }
      })
      .catch((error) => {
        alert("오류가 발생했습니다." + error)
      })
  }

  return (
    <Wrap>
      <UserInfoTop>
        <UserInfoTopTitle>회원정보수정</UserInfoTopTitle>
      </UserInfoTop>
      <UserInfoWrap>
        <UserInfoBody>
          {member &&
            member.map((item) => (
              <UserInfoContents>
                <UserInfoContent>
                  <UserInfoContent1>
                    <UserInfoContentDetails1>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>아이디</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput1
                        id="memberId"
                        name="memberId"
                        type="text"
                        value={item.memberId}
                        onChange={onChangeMemberId}
                        readOnly
                      />
                    </UserInfoContentDetails1>
                    <UserInfoMessages>
                      <UserInfoMessage></UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails1>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>비밀번호</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput1
                        id="password"
                        name="password"
                        type="password"
                        onChange={onChangePassword}
                      />
                    </UserInfoContentDetails1>
                    <UserInfoMessages>
                      <UserInfoMessage condition={isPassword}>
                        {passwordMessage}
                      </UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails1>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>
                          비밀번호확인
                        </UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput1
                        id="passwordConfirm"
                        name="passwordConfirm"
                        type="password"
                        onChange={onChangePasswordConfirm}
                      />
                    </UserInfoContentDetails1>
                    <UserInfoMessages>
                      <UserInfoMessage condition={isPasswordConfirm}>
                        {passwordConfirmMessage}
                      </UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails1>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>이름</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput1
                        id="memberName"
                        name="memberName"
                        type="text"
                        value={item.memberName}
                        onChange={onChangeMemberName}
                      />
                    </UserInfoContentDetails1>
                    <UserInfoMessages>
                      <UserInfoMessage></UserInfoMessage>
                    </UserInfoMessages>
                  </UserInfoContent1>
                  <UserInfoContent2>
                    <UserInfoContentDetails2>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>이메일</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput2
                        id="memberEmail"
                        name="memberEmail"
                        type="email"
                        defaultValue={item.memberEmail}
                        onChange={onChangeMemberEmail}
                      />
                    </UserInfoContentDetails2>
                    <UserInfoMessages>
                      <UserInfoMessage condition={isMemberEmail}>
                        {memberEmailMessage}
                      </UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails2>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>전화번호</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput2
                        id="memberTel"
                        name="memberTel"
                        type="text"
                        defaultValue={item.memberTel}
                        onChange={onAddHypen}
                      />
                    </UserInfoContentDetails2>
                    <UserInfoMessages>
                      <UserInfoMessage condition={isMemberTel}>
                        {memberTelMessage}
                      </UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails2>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>주소</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoAddressInput
                        id="memberAddress"
                        name="memberAddress"
                        type="text"
                        defaultValue={item.memberAddress}
                        onChange={onChangeAddress}
                      />
                      <UserAddressButton onClick={addressToggle}>
                        주소검색
                      </UserAddressButton>
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
                    </UserInfoContentDetails2>
                    <UserInfoMessages>
                      <UserInfoMessage></UserInfoMessage>
                    </UserInfoMessages>
                    <UserInfoContentDetails2>
                      <UserInfoContentTitles>
                        <UserInfoContentTitle>상세주소</UserInfoContentTitle>
                      </UserInfoContentTitles>
                      <UserInfoContentInput2
                        id="memberAddressDetail"
                        name="memberAddressDetail"
                        type="text"
                        defaultValue={item.memberAddressDetail}
                        onChange={onChangeAddressDetail}
                      />
                    </UserInfoContentDetails2>
                    <UserInfoMessages>
                      <UserInfoMessage></UserInfoMessage>
                    </UserInfoMessages>
                  </UserInfoContent2>
                </UserInfoContent>
                <UserInfoBtns>
                  <UserInfoBtn onClick={userInfoSubmit}>수정완료</UserInfoBtn>
                </UserInfoBtns>
              </UserInfoContents>
            ))}
        </UserInfoBody>
      </UserInfoWrap>
    </Wrap>
  )
}

export default UserInfoUpdate

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const UserInfoTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const UserInfoTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`

const UserInfoWrap = styled.div`
  width: 1200px;
  height: 800px;
  /* margin: auto; */
  display: flex;
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
  width: 1200px;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoContents = styled.div`
  width: 1200px;
  height: 700px;
  margin: auto;
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
  width: 1100px;
  height: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const UserInfoContent1 = styled.div`
  width: 520px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const UserInfoMessages = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const UserInfoMessage = styled.p`
  color: ${(props) => (props.condition ? "black" : "red")};
  font-weight: 600;
`

const UserInfoContent2 = styled.div`
  width: 550px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const UserInfoContentDetails1 = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const UserInfoContentDetails2 = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const UserInfoContentTitles = styled.div`
  width: 133px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 12px;
  background-color: #223359;
  text-align: center;
`

const UserInfoContentTitle = styled.span`
  font-size: 23px;
  color: white;
`

const UserInfoContentInput1 = styled.input`
  width: 250px;
  height: 40px;
  margin-left: 20px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`
const UserInfoContentInput2 = styled.input`
  width: 300px;
  height: 40px;
  margin-left: 20px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  text-align: center;
  outline: none;
`

const UserInfoAddressInput = styled.input`
  width: 220px;
  height: 40px;
  border: transparent;
  border-bottom: 1px solid black;
  margin-left: 45px;
  font-size: 20px;
  outline: none;
`
const UserAddressButton = styled.button`
  padding: 7px;
  /* border: transparent; */
  border: 1px solid #223359;
  border-radius: 8px;
  background-color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    font-weight: 600;
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
