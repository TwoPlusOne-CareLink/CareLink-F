import React, { useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import CloseBtn from "../../assets/images/XBtn.png"
import Like from "../../assets/images/heart.png"

function DoctorHistoryModal() {
  const [historyModal, setHistoryModal] = useState()

  const historyModalToggle = () => {
    setHistoryModal(!historyModal)
  }

  return (
    <DoctorHistoryBody>
      <DoctorHistoryContent onClick={historyModalToggle}>
        <DoctorHistoryImg />
        <DoctorHistoryName>첫번쨰 상담</DoctorHistoryName>
      </DoctorHistoryContent>
      {historyModal && (
        <DoctorHistoryModalWrap>
          <DoctorHistoryModalOverlay>
            <DoctorHistoryModalContent>
              <DoctorHistoryModalHeader>
                <DoctorHistoryHeaderTitle>
                  비대면 상담 상세내역
                </DoctorHistoryHeaderTitle>
                <DoctorHistoryModalCloseBtn onClick={historyModalToggle} />
              </DoctorHistoryModalHeader>
              <DHistoryModalContentBody>
                <DHistoryContent1>
                  <DHistoryContent1Detail>
                    <DHistoryContent1Titles>
                      <DHistoryContent1Title>
                        안녕하세요 문의드립니다
                      </DHistoryContent1Title>
                    </DHistoryContent1Titles>
                    <DHistoryContent1Texts>
                      <DHistoryContent1Text>
                        안녕하세요 반갑습니다. 제가 며칠전부터 몸이 너무
                        안좋아서,, 아주 그냥 몸살감기가 걸려부러써요.. ㅠㅠ 근데
                        이게 열도 좀 있는 것 같고 온몸이 으슬으슬 떨리네요 ..
                        이거 감기몸살인가요?
                      </DHistoryContent1Text>
                    </DHistoryContent1Texts>
                    <DHistoryContent1Imgs>
                      <DHistoryContent1Img />
                    </DHistoryContent1Imgs>
                  </DHistoryContent1Detail>
                </DHistoryContent1>
                <DHistoryContent2>
                  <DHistoryDoctorInfos>
                    <DHistoryDoctorImg />
                    <DHistoryDoctorInfo>
                      <DHistoryDoctorName>이코사 의사</DHistoryDoctorName>
                      <DHistoryDoctorDiagnosis>내과</DHistoryDoctorDiagnosis>
                    </DHistoryDoctorInfo>
                    <DHistoryDoctorLike />
                  </DHistoryDoctorInfos>

                  <DHistoryDoctorText>
                    안녕하세요 승진님. 내과 전문의 이코사입니다. 승진님의 증상의
                    경우 감기몸살로 판단되며 가급적 찬물대신 따뜻한 물 섭취 및
                    옷차림에 유념해 주시면 좋을 것 같습니다.
                  </DHistoryDoctorText>
                </DHistoryContent2>
              </DHistoryModalContentBody>
            </DoctorHistoryModalContent>
          </DoctorHistoryModalOverlay>
        </DoctorHistoryModalWrap>
      )}
    </DoctorHistoryBody>
  )
}

export default DoctorHistoryModal

const DoctorHistoryBody = styled.div`
  width: 1300px;
  height: 660px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center;
`
const DoctorHistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DoctorHistoryImg = styled.div`
  width: 305px;
  height: 280px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`
const DoctorHistoryName = styled.span`
  margin-top: 15px;
  font-weight: 600;
`
const DoctorHistoryModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DoctorHistoryModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DoctorHistoryModalContent = styled.div`
  width: 900px;
  height: 700px;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 19%;
  transform: translate(10%, 0);
  position: absolute;
  user-select: none;
`
const DoctorHistoryModalHeader = styled.div`
  width: 900px;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DoctorHistoryHeaderTitle = styled.span`
  width: 830px;
  margin-left: auto;
  text-align: center;
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const DoctorHistoryModalCloseBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  background-image: url(${CloseBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
const DHistoryModalContentBody = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const DHistoryContent1 = styled.div`
  width: 440px;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DHistoryContent1Titles = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DHistoryContent1Title = styled.span`
  font-size: 20px;
`
const DHistoryContent1Detail = styled.div`
  width: 450px;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const DHistoryContent1Texts = styled.div`
  width: 390px;
  height: 300px;
  padding: 5px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 8px 62px 2px rgba(0, 0, 0, 0.14);
`
const DHistoryContent1Text = styled.p`
  width: 390px;
  height: 300px;
  padding: 5px;
`
const DHistoryContent1Imgs = styled.div`
  width: 400px;
  height: 230px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DHistoryContent1Img = styled.div`
  width: 400px;
  height: 230px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`

const DHistoryContent2 = styled.div`
  width: 440px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const DHistoryDoctorInfos = styled.div`
  width: 420px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DHistoryDoctorInfo = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const DHistoryDoctorLike = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  background-image: url(${Like});
  background-size: contain;
`

const DHistoryDoctorImg = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background-image: url(${HistoryImg});
  background-size: contain;
`
const DHistoryDoctorName = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`
const DHistoryDoctorDiagnosis = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`
const DHistoryDoctorText = styled.p`
  width: 400px;
  height: 540px;
  padding: 10px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.14);
`
