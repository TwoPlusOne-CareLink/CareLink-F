import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import XBtn from "../../assets/images/closewhite.png"
import Exam from "../../assets/images/exam.png"
import Bs from "../../assets/images/bs.png"
import Bmi from "../../assets/images/bmi.png"
import HeartRate from "../../assets/images/heartRate.png"
import BloodPressure from "../../assets/images/bloodPressure.png"
import { useDispatch } from "react-redux"
import {
  __getHealthCheckDetail,
  __getHealthCheckInfo,
} from "../../redux/modules/healthCheckSlice"

function HealthCheckList({ checkListInfoDtoList }) {
  const dispatch = useDispatch()
  const [selectedHealthCheckId, setSelectedHealthCheckId] = useState()

  const [healthCheck, setHealthCheck] = useState([])

  const onHealthCheck = (checkId) => {
    setSelectedHealthCheckId(checkId)
    dispatch(__getHealthCheckDetail({ checkId }))
      .then((response) => {
        if (response) {
          setHealthCheck([response.payload.data])
          console.log(response.payload.data, "나에요???")
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
          {checkListInfoDtoList && checkListInfoDtoList.length > 0 ? (
            checkListInfoDtoList.map((item) => (
              <HealthCheckPost onClick={() => onHealthCheck(item.checkId)}>
                <PostNo>{item.checkId}</PostNo>
                <PostName>{item.memberName}</PostName>
                <PostText>{item.healthMemo}</PostText>
                <PostDate>{item.nowdate}</PostDate>
              </HealthCheckPost>
            ))
          ) : (
            <HealthCheckLoad>
              <LoadText> 로드중..</LoadText>
            </HealthCheckLoad>
          )}
          {selectedHealthCheckId &&
            healthCheck &&
            healthCheck.map((item) => {
              if (item.checkId === selectedHealthCheckId) {
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
                              setSelectedHealthCheckId(!selectedHealthCheckId)
                            }
                          />
                        </PostModalContentHeader>
                        <PostModalContents>
                          <PostModalContentBody key={item.checkId}>
                            <PostModalBodyContents>
                              <PostModalBodyContent>
                                <PostModalContentName>
                                  이름
                                </PostModalContentName>
                                <PostModalContentResult>
                                  {item.memberName}
                                </PostModalContentResult>
                              </PostModalBodyContent>
                              <PostModalBodyContent>
                                <PostModalContentName>
                                  성별
                                </PostModalContentName>
                                <PostModalContentResult>
                                  {item.gender}
                                </PostModalContentResult>
                              </PostModalBodyContent>
                              <PostModalBodyContent>
                                <PostModalContentName>
                                  나이
                                </PostModalContentName>
                                <PostModalContentResult>
                                  {item.age}
                                </PostModalContentResult>
                              </PostModalBodyContent>
                              <PostModalBodyContent>
                                <PostModalContentName>
                                  신장
                                </PostModalContentName>
                                <PostModalContentResult>
                                  {item.height}cm
                                </PostModalContentResult>
                              </PostModalBodyContent>
                              <PostModalBodyContent>
                                <PostModalContentName>
                                  체중
                                </PostModalContentName>
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
                                <PostModalContentName>
                                  혈당
                                </PostModalContentName>
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
                            <PostTestResultTitle>
                              <TestResultTitle>검사결과</TestResultTitle>
                            </PostTestResultTitle>
                            <PostStandardResults>
                              <PostStandardResult>
                                <PostStandardTitle>bmi</PostStandardTitle>
                                <PostStandardText>{item.bmi}</PostStandardText>
                              </PostStandardResult>
                              <PostStandardResult>
                                <PostStandardTitle>심박수</PostStandardTitle>
                                <PostStandardText>
                                  {item.hrResult}
                                </PostStandardText>
                              </PostStandardResult>
                              <PostStandardResult>
                                <PostStandardTitle>혈당</PostStandardTitle>
                                <PostStandardText>
                                  {item.bsResult}
                                </PostStandardText>
                              </PostStandardResult>
                              <PostStandardResult>
                                <PostStandardTitle>혈압</PostStandardTitle>
                                <PostStandardText>
                                  {item.bpResult}
                                </PostStandardText>
                              </PostStandardResult>
                            </PostStandardResults>
                            <PostModalContentTexts>
                              <PostModalContentTextTitle>
                                <ContentTitle>작성내용</ContentTitle>
                              </PostModalContentTextTitle>
                              <PostModalContentText>
                                {item.healthMemo}
                              </PostModalContentText>
                            </PostModalContentTexts>
                          </PostModalContentBody>
                          <PostModalContentStandard>
                            <StandardContents>
                              <StandardTitle>BMI</StandardTitle>
                              <StandardContent>
                                <BmiStandardImg></BmiStandardImg>
                                <StandardText>
                                  * 계산법 : 체중(kg) / (키(m) * 키(m))
                                </StandardText>
                              </StandardContent>
                            </StandardContents>
                            <StandardContents>
                              <StandardTitle>혈압</StandardTitle>
                              <StandardContent>
                                <BpStandardImg />
                                <StandardText>
                                  * 수축혈압 : 심장이 수축하여 혈액을 심장 밖
                                  혈관으로 밀어낼 때의 압력 <br />* 이완혈압 :
                                  심장이 확장할 때 혈관에서 유지되는 압력
                                </StandardText>
                              </StandardContent>
                            </StandardContents>

                            <StandardContents>
                              <StandardTitle>심박수</StandardTitle>
                              <StandardContent>
                                <HrStandardImg />
                                <StandardText>
                                  심박수 또는 심박은 단위시간당 심장박동의 수로
                                  <br />
                                  일반적으로 분당 맥의 수로 표현되는 숫자
                                </StandardText>
                              </StandardContent>
                            </StandardContents>
                            <StandardContents>
                              <StandardTitle></StandardTitle>
                              <StandardContent>
                                <BsStandardImg />
                                <StandardText>
                                  혈당 수치는 8시간 이상 공복혈당 기준
                                </StandardText>
                              </StandardContent>
                            </StandardContents>
                          </PostModalContentStandard>
                        </PostModalContents>
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
  user-select: none;
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
  width: 1150px;
  height: 720px;
  border-radius: 12px;
  background-color: white;
  top: 10%;
  left: 10%;
  transform: translate(18%, 0);
  position: absolute;
`

const PostModalContentHeader = styled.div`
  width: 1150px;
  height: 50px;
  /* border-bottom: 1px solid black; */
  border: 1px solid #223359;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  background-color: #223359;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const PostModalContents = styled.div`
  display: flex;
`

const PostModalContentTitle = styled.span`
  width: 1160px;
  margin-left: 20px;
  font-size: 22px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const PostModalContentCloseBtn = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${XBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
const PostModalContentBody = styled.div`
  width: 590px;
  height: 645px;
  margin: auto;
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const PostModalBodyContents = styled.div`
  width: 560px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  gap: 12px;
`

const PostTestResultTitle = styled.div`
  margin: 15px;
  font-weight: 600;
  text-align: center;
`

const TestResultTitle = styled.span`
  border-bottom: 1.5px solid black;
`

const PostStandardResults = styled.div`
  width: 560px;
  margin: auto;
  border: 1px solid #efefef;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, auto));
  gap: 5px;
`

const PostStandardResult = styled.div`
  height: 30px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const PostStandardTitle = styled.span`
  width: 50px;
  background-color: #223359;
  color: white;
  text-align: center;
  padding: 6px;
`
const PostStandardText = styled.span`
  margin-right: 10px;
  font-weight: 600;
  color: red;
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
  width: 560px;
  height: 340px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
`
const PostModalContentTextTitle = styled.span`
  width: 560px;
  height: 20px;
  margin: 17px 0 17px 3px;
  font-family: "GmarketSansMedium";
  text-align: center;
  user-select: none;
`
const ContentTitle = styled.span`
  font-weight: 600;
  border-bottom: 1.5px solid black;
`

const PostModalContentText = styled.span`
  height: 340px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 6px;
  user-select: none;
`
const PostModalContentStandard = styled.div`
  width: 540px;
  height: 660px;
  border-left: 1px solid #efefef;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #223359;
    /* border-radius: 4px; */
  }
`
const StandardContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const StandardContent = styled.div``
const StandardTitle = styled.span`
  margin: 17px auto;
  border-bottom: 1.5px solid black;
  font-size: 25px;
  font-weight: bold;
`
const BmiStandardImg = styled.div`
  width: 500px;
  height: 325px;
  background-image: url(${Bmi});
  background-size: cover;
`
const BsStandardImg = styled.div`
  width: 500px;
  height: 325px;
  background-image: url(${Bs});
  background-size: cover;
`
const BpStandardImg = styled.div`
  width: 500px;
  height: 325px;
  background-image: url(${BloodPressure});
  background-size: cover;
`
const HrStandardImg = styled.div`
  width: 500px;
  height: 328px;
  background-image: url(${HeartRate});
  background-size: cover;
`
const StandardText = styled.div`
  margin: 17px auto;
  text-align: center;
  font-weight: 600;
  color: red;
  line-height: 1.5;
`
const HealthCheckLoad = styled.div`
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

const LoadText = styled.span`
  font-size: 30px;
`
