import React, { useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import Like from "../../assets/images/heart.png"
import XBtn from "../../assets/images/XBtn.png"

function CunsultingHistoryModal() {
  const [historyModal, setHistoryModal] = useState()

  const HistoryModalToggle = () => {
    setHistoryModal(!historyModal)
  }

  return (
    <CunsultingHistoryBody>
      <CunsultingHistoryContent onClick={HistoryModalToggle}>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>첫번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      {historyModal && (
        <HistoryModalWrap>
          <HistoryModalOverlay>
            <HistoryModalContent>
              <HistoryModalContentHeader>
                <HistoryHeaderBeenText></HistoryHeaderBeenText>
                <HistoryModalContentTitle>
                  상담 상세내역
                </HistoryModalContentTitle>
                <HistoryXBtn onClick={HistoryModalToggle} />
              </HistoryModalContentHeader>
              <HistoryModalContentBody>
                <HistoryContent1>
                  <HistoryContent1Detail>
                    <HistoryContent1Titles>
                      <HistoryContent1Title>
                        안녕하세요 문의드립니다
                      </HistoryContent1Title>
                    </HistoryContent1Titles>
                    <HistoryContent1Texts>
                      <HistoryContent1Text>
                        안녕하세요 반갑습니다. 제가 며칠전부터 몸이 너무
                        안좋아서,, 아주 그냥 몸살감기가 걸려부러써요.. ㅠㅠ 근데
                        이게 열도 좀 있는 것 같고 온몸이 으슬으슬 떨리네요 ..
                        이거 감기몸살인가요?
                      </HistoryContent1Text>
                    </HistoryContent1Texts>
                    <HistoryContent1Imgs>
                      <HistoryContent1Img />
                    </HistoryContent1Imgs>
                  </HistoryContent1Detail>
                </HistoryContent1>
                <HistoryContent2>
                  <HistoryDoctorInfos>
                    <HistoryDoctorImg />
                    <HistoryDoctorInfo>
                      <HistoryDoctorName>이코사 의사</HistoryDoctorName>
                      <HistoryDoctorDiagnosis>내과</HistoryDoctorDiagnosis>
                    </HistoryDoctorInfo>
                    <HistoryDoctorLike />
                  </HistoryDoctorInfos>

                  <HistoryDoctorText>
                    안녕하세요 승진님. 내과 전문의 이코사입니다. 승진님의 증상의
                    경우 감기몸살로 판단되며 가급적 찬물대신 따뜻한 물 섭취 및
                    옷차림에 유념해 주시면 좋을 것 같습니다.
                  </HistoryDoctorText>
                </HistoryContent2>
              </HistoryModalContentBody>
            </HistoryModalContent>
          </HistoryModalOverlay>
        </HistoryModalWrap>
      )}
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>두번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>세번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>네번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>다섯번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>여섯번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>일곱번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
      <CunsultingHistoryContent>
        <CunsultingHistoryImg />
        <CunsultingHistoryName>여덟번째 상담</CunsultingHistoryName>
      </CunsultingHistoryContent>
    </CunsultingHistoryBody>
  )
}

export default CunsultingHistoryModal

const CunsultingHistoryBody = styled.div`
  width: 1300px;
  height: 660px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center;
`
const CunsultingHistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const CunsultingHistoryImg = styled.div`
  width: 305px;
  height: 280px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`
const CunsultingHistoryName = styled.span`
  margin-top: 15px;
  font-weight: 600;
`

const HistoryModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const HistoryModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const HistoryModalContent = styled.div`
  width: 900px;
  height: 700px;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 17%;
  transform: translate(10%, 0);
  position: absolute;
  user-select: none;
`
const HistoryHeaderBeenText = styled.div`
  width: 30px;
`

const HistoryModalContentHeader = styled.div`
  width: 900px;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HistoryModalContentTitle = styled.span`
  width: 850px;
  text-align: center;
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const HistoryXBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 15px;
  background-image: url(${XBtn});
  background-size: cover;
  user-select: none;
`

const HistoryModalContentBody = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const HistoryContent1 = styled.div`
  width: 440px;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const HistoryContent1Titles = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HistoryContent1Title = styled.span`
  font-size: 20px;
`
const HistoryContent1Detail = styled.div`
  width: 450px;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const HistoryContent1Texts = styled.div`
  width: 390px;
  height: 300px;
  padding: 5px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 8px 62px 2px rgba(0, 0, 0, 0.14);
`
const HistoryContent1Text = styled.p`
  width: 390px;
  height: 300px;
  padding: 5px;
`
const HistoryContent1Imgs = styled.div`
  width: 400px;
  height: 230px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HistoryContent1Img = styled.div`
  width: 400px;
  height: 230px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`

const HistoryContent2 = styled.div`
  width: 440px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HistoryDoctorInfos = styled.div`
  width: 420px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const HistoryDoctorInfo = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const HistoryDoctorLike = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  background-image: url(${Like});
  background-size: contain;
`

const HistoryDoctorImg = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background-image: url(${HistoryImg});
  background-size: contain;
`
const HistoryDoctorName = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`
const HistoryDoctorDiagnosis = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`
const HistoryDoctorText = styled.p`
  width: 400px;
  height: 540px;
  padding: 10px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.14);
`
