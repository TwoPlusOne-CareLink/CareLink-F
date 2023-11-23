import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import XBtn from "../../assets/images/XBtn.png"
import { useDispatch } from "react-redux"
import {
  __getHealthCheckDetail,
  __getHealthCheckInfo,
} from "../../redux/modules/healthCheckSlice"

function HealthCheckList({ checkListInfoDtoList }) {
  const dispatch = useDispatch()
  const [selectedHealthCheck, setSelectedHealthCheck] = useState()

  const [healthCheck, setHealthCheck] = useState([])

  const onHealthCheck = (checkId) => {
    // setSelectedHealthCheck(checkId)
    dispatch(__getHealthCheckDetail({ checkId }))
      .then((response) => {
        if (response) {
          setHealthCheck(response.payload)
          console.log(healthCheck, "나에요???")
        }
      })
      .catch((error) => {
        console.log(error)
      })
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
          {checkListInfoDtoList &&
            checkListInfoDtoList.map((item) => (
              <HealthCheckPost onClick={() => onHealthCheck(item.checkId)}>
                <PostNo>{item.checkId}</PostNo>
                <PostName>{item.memberName}</PostName>
                <PostText>{item.healthMemo}</PostText>
                <PostDate>{item.nowdate}</PostDate>
              </HealthCheckPost>
            ))}
          {selectedHealthCheck &&
            healthCheck.map((item) => {
              if (item.checkId === selectedHealthCheck) {
                return (
                  <PostModalWrapper>
                    <PostModalOverlay>
                      <PostModalContent key={item.checkId}>
                        <PostModalContentHeader>
                          <PostModalContentTitle>
                            체크리스트 작성상세내역
                          </PostModalContentTitle>
                          <PostModalContentCloseBtn
                            onClick={() =>
                              setSelectedHealthCheck(!selectedHealthCheck)
                            }
                          />
                        </PostModalContentHeader>
                        <PostModalContentBody key={item.checkId}>
                          <PostModalBodyContents>
                            <PostModalBodyContent>
                              <PostModalContentName>이름</PostModalContentName>
                              <PostModalContentResult>
                                {item.memberName}
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>성별</PostModalContentName>
                              <PostModalContentResult>
                                {item.gender}
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>나이</PostModalContentName>
                              <PostModalContentResult>
                                {item.age}
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>신장</PostModalContentName>
                              <PostModalContentResult>
                                {item.height}cm
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>체중</PostModalContentName>
                              <PostModalContentResult>
                                {item.weight}kg
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>
                                심박수
                              </PostModalContentName>
                              <PostModalContentResult>
                                {item.heartRate}bpm
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>혈당</PostModalContentName>
                              <PostModalContentResult>
                                {item.bloodSugar}mg/dL
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>
                                수축혈압
                              </PostModalContentName>
                              <PostModalContentResult>
                                {item.systolicBloodPressure}mmHg
                              </PostModalContentResult>
                            </PostModalBodyContent>
                            <PostModalBodyContent>
                              <PostModalContentName>
                                이완혈압
                              </PostModalContentName>
                              <PostModalContentResult>
                                {item.relaxationBloodPressure}mmHg
                              </PostModalContentResult>
                            </PostModalBodyContent>
                          </PostModalBodyContents>
                          <PostModalContentTexts>
                            <PostModalContentTextTitle>
                              작성내용
                            </PostModalContentTextTitle>
                            <PostModalContentText>
                              {item.healthMemo}
                            </PostModalContentText>
                          </PostModalContentTexts>
                        </PostModalContentBody>
                      </PostModalContent>
                    </PostModalOverlay>
                  </PostModalWrapper>
                )
              }
            })}
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
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleName = styled.span`
  width: 90px;
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleText = styled.span`
  width: 440px;
  font-weight: 600;
  text-align: center;
`
const HealthCheckPostTitleDate = styled.span`
  width: 120px;
  font-weight: 600;
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
    border-radius: 8px;
    background-color: #223359;
    color: white;
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
const PostModalContentResult = styled.span`
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
