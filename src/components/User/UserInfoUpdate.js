import React from "react"
import { styled } from "styled-components"

function UserInfoUpdate() {
  return (
    <Wrap>
      <UserInfoWrap>
        <UserInfoHeader>
          <UserInfoTitle>회원정보수정</UserInfoTitle>
        </UserInfoHeader>
        <UserInfoBody>
          <UserInfoContents>
            <UserInfoContent>
              <UserInfoContentUpTitles>
                <UserInfoContentTitle>아이디</UserInfoContentTitle>
              </UserInfoContentUpTitles>
              <UserInfoInputs>
                <UserInfoInput readOnly placeholder="예시아이디" />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentTitles>
                <UserInfoContentTitle>비밀번호</UserInfoContentTitle>
              </UserInfoContentTitles>
              <UserInfoInputs>
                <UserInfoInput placeholder="수정하실 비밀번호를 입력해주세요" />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentTitles>
                <UserInfoContentTitle>비밀번호 확인</UserInfoContentTitle>
              </UserInfoContentTitles>
              <UserInfoInputs>
                <UserInfoInput placeholder="수정하실 비밀번호를 다시 입력해주세요" />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentTitles>
                <UserInfoContentTitle>이름</UserInfoContentTitle>
              </UserInfoContentTitles>
              <UserInfoInputs>
                <UserInfoInput readOnly placeholder="예시이름" />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentTitles>
                <UserInfoContentTitle>이메일</UserInfoContentTitle>
              </UserInfoContentTitles>
              <UserInfoInputs>
                <UserInfoInput
                  maxlength="40"
                  placeholder="수정하실 이메일을 입력해주세요"
                />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentTitles>
                <UserInfoContentTitle>전화번호</UserInfoContentTitle>
              </UserInfoContentTitles>
              <UserInfoInputs>
                <UserInfoInput placeholder="수정하실 전화번호를 입력해주세요" />
              </UserInfoInputs>
            </UserInfoContent>
            <UserInfoContent>
              <UserInfoContentDownTitles>
                <UserInfoContentTitle>주소</UserInfoContentTitle>
              </UserInfoContentDownTitles>
              <UserInfoLastInputs>
                <UserInfoInput placeholder="수정하실 주소를 입력해주세요" />
              </UserInfoLastInputs>
            </UserInfoContent>
          </UserInfoContents>
        </UserInfoBody>
        <UserInfoBtns>
          <UserInfoBtn>수정완료</UserInfoBtn>
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
  height: 630px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const UserInfoContents = styled.div`
  width: 620px;
  height: 560px;
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
  justify-content: right;
  align-items: center;
`
const UserInfoLastInputs = styled.div`
  width: 600px;
  height: 80px;
  display: flex;
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
