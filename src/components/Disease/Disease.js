import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import Search from "../../assets/images/ReadingGlasses.png"
import CloseBtn from "../../assets/images/XBtn.png"
import { useDispatch } from "react-redux"
import {
  __getDiseaseDetail,
  __getDiseaseList,
} from "../../redux/modules/diseaseSlice"

function Disease() {
  const dispatch = useDispatch()
  const [selectedDisease, setSelectedDisease] = useState(false)
  const [disease, setDisease] = useState()
  const [searchName, setSearchName] = useState("")
  const [diseaseDetail, setDiseaseDetail] = useState()

  const filtered =
    disease &&
    disease.filter((itemList) => {
      return itemList.diseaseName
        .toUpperCase()
        .includes(searchName.toUpperCase())
    })

  const diseaseToggle = (diseaseId) => {
    setSelectedDisease(!selectedDisease)

    dispatch(__getDiseaseDetail({ diseaseId }))
      .then((response) => {
        if (response) {
          setDiseaseDetail(response.payload.data)
          console.log(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onChangeSearchName = (e) => {
    const currentSearchName = e.target.value
    setSearchName(currentSearchName)
  }

  const searchClick = () => {
    alert("검색완료")
  }

  const handleSearchOnKeyPress = (e) => {
    if (e.key === "Enter") {
      searchClick()
    }
  }

  useEffect(() => {
    dispatch(__getDiseaseList())
      .then((response) => {
        if (response) {
          setDisease(response.payload.data)
          console.log(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error, "에러임")
      })
  }, [])

  return (
    <Wrap>
      <DiseaseCheckTop>
        <DiseaseTopTitle>질병백과</DiseaseTopTitle>
      </DiseaseCheckTop>
      <DiseaseCheckBody>
        <DiseaseSearchInputs>
          <DiseaseSearchInput
            placeholder="검색할 질병을 입력해주세요"
            onChange={onChangeSearchName}
            onKeyPress={handleSearchOnKeyPress}
          />
          <DiseaseSearchImg />
        </DiseaseSearchInputs>
        <DiseaseSearchLists>
          {filtered &&
            filtered.map((item) => (
              <DiseaseSearchResult
                key={item.diseaseId}
                onClick={() => diseaseToggle(item.diseaseId)}
              >
                <DiseaseSearchResultName>
                  {item.diseaseName}
                </DiseaseSearchResultName>
              </DiseaseSearchResult>
            ))}
          {/* {disease &&
            disease.length > 0 &&
            disease.map((item) => (
              <DiseaseSearchResult
                key={item.diseaseId}
                onClick={() => diseaseToggle(item.diseaseId)}
              >
                <DiseaseSearchResultName>
                  {item.diseaseName}
                </DiseaseSearchResultName>
              </DiseaseSearchResult>
            ))} */}
          {selectedDisease && (
            <DiseaseModalWrap>
              <DiseaseModalOverlay>
                <DiseaseModalContent>
                  <DiseaseModalHeaders>
                    <DiseaseModalHeader>
                      <DiseaseModalHeaderTitles>
                        <DiseaseModalHeaderTitle>
                          가성 근시
                        </DiseaseModalHeaderTitle>
                      </DiseaseModalHeaderTitles>
                      <DiseaseModalHeaderCloseBtn onClick={diseaseToggle} />
                    </DiseaseModalHeader>
                    <DiseaseModalIntroduction disabled>
                      근시란 먼 곳을 볼 때 눈으로 들어간 빛의 초점이 망막보다
                      앞에 맺히는 것이다. 가성근시란 일반적인 근시와는 다르게
                      눈의 조절력(망막에 상이 잘 맺히도록 수정체의 두께가
                      조절하여 굴절력을 변화시키는 능력)이 증가하는 과정이
                      일정기간 과도하게 발생하여 일시적으로 근시상태가 되는 것을
                      말한다. 가성근시는 오랜 시간 동안 눈의 조절력이 높아지는
                      근거리 작업(컴퓨터, 독서, 비디오 게임 등)을 할 때 발생할
                      가능성이 높고 성인에게 발생하기도 하나 주로 학동기
                      어린이에게 호발한다.
                    </DiseaseModalIntroduction>
                  </DiseaseModalHeaders>
                  <DiseaseModalBody>
                    <DiseaseModalBodyInfos>
                      <DiseaseInfoHeader>질병정보</DiseaseInfoHeader>
                      <DiseaseInfos>
                        <DiseaseInfo>
                          <DiseaseInfoTitle></DiseaseInfoTitle>
                          <DiseaseInfoText disabled>
                            근거리 물체를 볼 때 수정체를 감싼 모양체 근육이
                            수축돼 수정체가 두꺼워지고 먼 거리를 볼 때는 반대로
                            모양체 근육이 이완돼 수정체가 얇아지는데 이 조절력이
                            너무 강할 때 가성근시가 생길 수 있다. 진성근시는
                            눈의 구조적인 원인에 의해 눈으로 들어간 빛이
                            망막보다 앞쪽에 맺힐 때를 말하며 자연적으로 교정되지
                            않는다. 그러나 가성근시는 조절력이 강한 상태로
                            장시간 한곳에 집중하다가 먼 곳을 볼 때 근육이 쉽게
                            이완되지 않아 일시적으로 나타나는 근시이다.
                          </DiseaseInfoText>
                        </DiseaseInfo>
                        <DiseaseInfo>
                          <DiseaseInfoTitle></DiseaseInfoTitle>
                          <DiseaseInfoText disabled>
                            원거리 시력저하가 나타나고 과도한 모양체 근육의
                            수축으로 인해서 눈이 피로하고 안구통증, 두통,
                            어지러움 등이 나타날 수 있다.
                          </DiseaseInfoText>
                        </DiseaseInfo>
                        <DiseaseInfo>
                          <DiseaseInfoTitle></DiseaseInfoTitle>
                          <DiseaseInfoText disabled>
                            가성근시는 일반적인 시력검사로는 알기 어렵다.
                            안과에서의 굴절 검사(현성 굴절 검사, 조절마비 굴절
                            검사)를 통해 진단하게 된다.
                          </DiseaseInfoText>
                        </DiseaseInfo>
                        <DiseaseInfo>
                          <DiseaseInfoTitle></DiseaseInfoTitle>
                          <DiseaseInfoText disabled>
                            먼저 약물 치료 전 가성근시를 유발시킬 수 있는
                            생활조건에 대해 확인한다. 대부분 생활습관의 조절로
                            예방과 치료가 가능하다. 그러나 이러한 노력에도
                            불구하고 증상이 심하거나 빈번할 때에는 조절 기능을
                            마비시키는 조절마비제 안약을 사용할 수 있고 원시가
                            있다면 원시를 교정한다.
                          </DiseaseInfoText>
                        </DiseaseInfo>
                      </DiseaseInfos>
                    </DiseaseModalBodyInfos>
                  </DiseaseModalBody>
                  {/* {diseaseDetail &&
                    diseaseDetail > 0 &&
                    diseaseDetail.map((item) => {
                      if (item.diseaseId === selectedDisease) {
                        return (
                          <>
                            <DiseaseModalHeaders>
                              <DiseaseModalHeader>
                                <DiseaseModalHeaderTitles>
                                  <DiseaseModalHeaderTitle>
                                    가성 근시
                                  </DiseaseModalHeaderTitle>
                                </DiseaseModalHeaderTitles>
                                <DiseaseModalHeaderCloseBtn />
                              </DiseaseModalHeader>
                              <DiseaseModalIntroduction disabled>
                                근시란 먼 곳을 볼 때 눈으로 들어간 빛의 초점이
                                망막보다 앞에 맺히는 것이다. 가성근시란 일반적인
                                근시와는 다르게 눈의 조절력(망막에 상이 잘
                                맺히도록 수정체의 두께가 조절하여 굴절력을
                                변화시키는 능력)이 증가하는 과정이 일정기간
                                과도하게 발생하여 일시적으로 근시상태가 되는
                                것을 말한다. 가성근시는 오랜 시간 동안 눈의
                                조절력이 높아지는 근거리 작업(컴퓨터, 독서,
                                비디오 게임 등)을 할 때 발생할 가능성이 높고
                                성인에게 발생하기도 하나 주로 학동기 어린이에게
                                호발한다.
                              </DiseaseModalIntroduction>
                            </DiseaseModalHeaders>
                            <DiseaseModalBody>
                              <DiseaseModalBodyInfos>
                                <DiseaseInfoHeader>질병정보</DiseaseInfoHeader>
                                <DiseaseInfos>
                                  <DiseaseInfo>
                                    <DiseaseInfoTitle></DiseaseInfoTitle>
                                    <DiseaseInfoText disabled>
                                      근거리 물체를 볼 때 수정체를 감싼 모양체
                                      근육이 수축돼 수정체가 두꺼워지고 먼
                                      거리를 볼 때는 반대로 모양체 근육이 이완돼
                                      수정체가 얇아지는데 이 조절력이 너무 강할
                                      때 가성근시가 생길 수 있다. 진성근시는
                                      눈의 구조적인 원인에 의해 눈으로 들어간
                                      빛이 망막보다 앞쪽에 맺힐 때를 말하며
                                      자연적으로 교정되지 않는다. 그러나
                                      가성근시는 조절력이 강한 상태로 장시간
                                      한곳에 집중하다가 먼 곳을 볼 때 근육이
                                      쉽게 이완되지 않아 일시적으로 나타나는
                                      근시이다.
                                    </DiseaseInfoText>
                                  </DiseaseInfo>
                                  <DiseaseInfo>
                                    <DiseaseInfoTitle></DiseaseInfoTitle>
                                    <DiseaseInfoText disabled>
                                      원거리 시력저하가 나타나고 과도한 모양체
                                      근육의 수축으로 인해서 눈이 피로하고
                                      안구통증, 두통, 어지러움 등이 나타날 수
                                      있다.
                                    </DiseaseInfoText>
                                  </DiseaseInfo>
                                  <DiseaseInfo>
                                    <DiseaseInfoTitle></DiseaseInfoTitle>
                                    <DiseaseInfoText disabled>
                                      가성근시는 일반적인 시력검사로는 알기
                                      어렵다. 안과에서의 굴절 검사(현성 굴절
                                      검사, 조절마비 굴절 검사)를 통해 진단하게
                                      된다.
                                    </DiseaseInfoText>
                                  </DiseaseInfo>
                                  <DiseaseInfo>
                                    <DiseaseInfoTitle></DiseaseInfoTitle>
                                    <DiseaseInfoText disabled>
                                      먼저 약물 치료 전 가성근시를 유발시킬 수
                                      있는 생활조건에 대해 확인한다. 대부분
                                      생활습관의 조절로 예방과 치료가 가능하다.
                                      그러나 이러한 노력에도 불구하고 증상이
                                      심하거나 빈번할 때에는 조절 기능을
                                      마비시키는 조절마비제 안약을 사용할 수
                                      있고 원시가 있다면 원시를 교정한다.
                                    </DiseaseInfoText>
                                  </DiseaseInfo>
                                </DiseaseInfos>
                              </DiseaseModalBodyInfos>
                            </DiseaseModalBody>
                          </>
                        )
                      }
                    })} */}
                </DiseaseModalContent>
              </DiseaseModalOverlay>
            </DiseaseModalWrap>
          )}
        </DiseaseSearchLists>
      </DiseaseCheckBody>
    </Wrap>
  )
}

export default Disease

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DiseaseCheckTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const DiseaseTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`

const DiseaseCheckBody = styled.div`
  width: 1400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const DiseaseSearchInputs = styled.div`
  width: 700px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

const DiseaseSearchInput = styled.input`
  width: 620px;
  padding: 20px;
  border: transparent;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 20px;
`
const DiseaseSearchImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Search});
  background-size: cover;
  cursor: pointer;
`

const DiseaseSearchLists = styled.div`
  width: 850px;
  height: 600px;
  margin-top: 20px;
  padding: 10px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
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
    border-radius: 4px;
  }
`

const DiseaseSearchResult = styled.div`
  width: 800px;
  height: 30px;
  padding: 10px;
  margin: 10px auto;
  /* border: 1px solid #efefef; */
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #223359;
    color: white;
  }
`
const DiseaseSearchResultName = styled.span`
  font-size: 30px;
`
const DiseaseModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DiseaseModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const DiseaseModalContent = styled.div`
  width: 1100px;
  height: 760px;
  border-radius: 16px;
  background-color: white;
  top: 10%;
  left: 10%;
  transform: translate(23%, 0);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DiseaseModalHeaders = styled.div`
  width: 1050px;
  height: 190px;
`

const DiseaseModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DiseaseModalHeaderTitles = styled.div`
  width: 980px;
  padding: 10px;
  margin-left: 10px;
`

const DiseaseModalHeaderTitle = styled.span`
  border-bottom: 1.5px solid black;
  font-size: 25px;
  font-weight: 600;
`
const DiseaseModalHeaderCloseBtn = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${CloseBtn});
  background-size: cover;
  cursor: pointer;
`

const DiseaseModalIntroduction = styled.textarea`
  width: 1000px;
  height: 100px;
  /* margin-top: 5px; */
  margin: 5px auto 0 13px;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  background-color: #4dc9c2;
  color: white;
  font-size: 16px;
  outline: none;
  resize: none;
`

const DiseaseModalBody = styled.div`
  width: 1050px;
  height: 520px;
`
const DiseaseModalBodyInfos = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`
const DiseaseInfoHeader = styled.span`
  width: 100px;
  margin-left: 10px;
  border-bottom: 1.5px solid black;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`
const DiseaseInfos = styled.div`
  height: 470px;
  margin-top: 13px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(46%, auto));
  gap: 12px;
`
const DiseaseInfo = styled.div``
const DiseaseInfoTitle = styled.span``
const DiseaseInfoText = styled.textarea`
  width: 480px;
  height: 200px;
  margin: auto;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 16px;
  color: white;
  outline: none;
  resize: none;
`
