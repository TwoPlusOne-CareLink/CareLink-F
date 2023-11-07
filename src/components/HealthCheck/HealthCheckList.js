import React, { useState } from "react"
import { styled } from "styled-components"
import XBtn from "../../assets/images/XBtn.png"

function HealthCheckList() {
  const [postModal, setPostModal] = useState()

  const postToggleModal = () => {
    setPostModal(!postModal)
  }

  return (
    <HealthCheckFormList>
      <HealthCheckListTitles>
        <HealthCheckListTitle>체크리스트 작성 내역</HealthCheckListTitle>
      </HealthCheckListTitles>
      <HealthCheckListBody>
        <HealthCheckPostTitles>
          <HealthCheckPostTitleNo>번호</HealthCheckPostTitleNo>
          <HealthCheckPostTitleName>이름</HealthCheckPostTitleName>
          <HealthCheckPostTitleText>내용</HealthCheckPostTitleText>
          <HealthCheckPostTitleDate>작성날짜</HealthCheckPostTitleDate>
        </HealthCheckPostTitles>
        <HealthCheckPosts>
          <HealthCheckPost onClick={postToggleModal}>
            <PostNo>1</PostNo>
            <PostName>이승진</PostName>
            <PostText>
              안녕하세요 제가 너무 너무 떨려요 지금 심장이 두근두근 대요 근데
              어쩌라구요
            </PostText>
            <PostDate>23/09/23</PostDate>
          </HealthCheckPost>
          {postModal && (
            <PostModalWrapper>
              <PostModalOverlay>
                <PostModalContent>
                  <PostModalContentHeader>
                    <PostModalContentTitle>
                      체크리스트 작성상세내역
                    </PostModalContentTitle>
                    <PostModalContentCloseBtn onClick={postToggleModal} />
                  </PostModalContentHeader>
                  <PostModalContentBody>
                    <PostModalBodyContents>
                      <PostModalBodyContent>
                        <PostModalContentName>이름</PostModalContentName>
                        <PostModalContentInput placeholder="이름" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>성별</PostModalContentName>
                        <PostModalContentInput placeholder="성별" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>나이</PostModalContentName>
                        <PostModalContentInput placeholder="나이" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>신장</PostModalContentName>
                        <PostModalContentInput placeholder="신장" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>체중</PostModalContentName>
                        <PostModalContentInput placeholder="체중" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>심박수</PostModalContentName>
                        <PostModalContentInput placeholder="심박수" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>혈당</PostModalContentName>
                        <PostModalContentInput placeholder="혈당" readOnly />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>수축혈압</PostModalContentName>
                        <PostModalContentInput
                          placeholder="수축혈압"
                          readOnly
                        />
                      </PostModalBodyContent>
                      <PostModalBodyContent>
                        <PostModalContentName>이완혈압</PostModalContentName>
                        <PostModalContentInput
                          placeholder="이완혈압"
                          readOnly
                        />
                      </PostModalBodyContent>
                    </PostModalBodyContents>
                    <PostModalContentTexts>
                      <PostModalContentTextTitle>
                        작성내용
                      </PostModalContentTextTitle>
                      <PostModalContentText>안녕하십니까</PostModalContentText>
                    </PostModalContentTexts>
                  </PostModalContentBody>
                </PostModalContent>
              </PostModalOverlay>
            </PostModalWrapper>
          )}
        </HealthCheckPosts>
      </HealthCheckListBody>
    </HealthCheckFormList>
  )
}

export default HealthCheckList

const HealthCheckFormList = styled.div`
  width: 700px;
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HealthCheckListTitles = styled.div`
  width: 700px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const HealthCheckListTitle = styled.div`
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const HealthCheckListBody = styled.div`
  width: 700px;
  height: 650px;
  padding: 10px;

  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.15);
`

const HealthCheckPostTitles = styled.div`
  width: 700px;
  height: 40px;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`
const HealthCheckPostTitleNo = styled.span`
  width: 50px;
  text-align: center;
`
const HealthCheckPostTitleName = styled.span`
  width: 90px;
  text-align: center;
`
const HealthCheckPostTitleText = styled.span`
  width: 440px;
  text-align: center;
`
const HealthCheckPostTitleDate = styled.span`
  width: 120px;
  text-align: center;
`
const HealthCheckPosts = styled.div`
  width: 700px;
  height: 580px;
`
const HealthCheckPost = styled.div`
  margin: 7px auto;
  border: 1px solid transparent;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;

  &:hover {
    background-color: #dcdcdc;
    box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
    font-weight: 600;
    cursor: pointer;
  }
`

const PostNo = styled.div`
  width: 50px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PostName = styled.div`
  width: 90px;
  height: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`
const PostText = styled.span`
  width: 440px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 30px;
  white-space: nowrap;
`
const PostDate = styled.div`
  width: 120px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const PostModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const PostModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const PostModalContent = styled.div`
  width: 800px;
  height: 700px;
  border-radius: 12px;
  background-color: white;
  top: 10%;
  left: 10%;
  transform: translate(35%, 0);
  position: absolute;
`

const PostModalContentHeader = styled.div`
  width: 800px;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const PostModalContentTitle = styled.span`
  width: 750px;
  margin-left: 20px;
  font-size: 22px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const PostModalContentCloseBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(${XBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
const PostModalContentBody = styled.div`
  width: 790px;
  height: 630px;
  margin: auto;
  padding: 5px;
`
const PostModalBodyContents = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28%, auto));
  gap: 12px;
`
const PostModalBodyContent = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const PostModalContentName = styled.span`
  margin-left: 3px;
  font-family: "GmarketSansMedium";
`
const PostModalContentInput = styled.input`
  padding: 8px;
  text-align: center;
  outline: none;
  caret-color: transparent;
`
const PostModalContentTexts = styled.div`
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PostModalContentTextTitle = styled.span`
  width: 788px;
  height: 20px;
  margin: 17px 0 17px 3px;
  font-family: "GmarketSansMedium";
  text-align: center;
  user-select: none;
`
const PostModalContentText = styled.p`
  width: 768px;
  height: 400px;
  padding: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  user-select: none;
`
