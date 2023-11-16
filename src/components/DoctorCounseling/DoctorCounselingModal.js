import React, { useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import Like from "../../assets/images/heart.png"
import CloseBtn from "../../assets/images/XBtn.png"

function DoctorCounselingModal() {
  const [doctorCounselingModal, setDoctorCounselingModal] = useState()

  const DCounselingModalToggle = () => {
    setDoctorCounselingModal(!doctorCounselingModal)
  }

  const CounselingComplete = () => {
    alert("답변이 완료되었습니다 !")
    setDoctorCounselingModal(!doctorCounselingModal)
  }

  return (
    <>
      <DCounselingModalContent2>
        <ModalContent2StartBtn onClick={DCounselingModalToggle}>
          상담하기
        </ModalContent2StartBtn>
        {/* <ModalContent2DoctorInfos>
      <ModalContent2Img />
      <ModalContent2DoctorInfo>
        <ModalContent2DoctorName>
          이코사 의사
        </ModalContent2DoctorName>
        <ModalContent2DoctorDiagnosis>
          내과
        </ModalContent2DoctorDiagnosis>
      </ModalContent2DoctorInfo>
      <ModalContent2Like />
    </ModalContent2DoctorInfos>

    <ModalContent2DoctorText>
      안녕하세요 승진님. 내과 전문의 이코사입니다. 승진님의 증상의
      경우 감기몸살로 판단되며 가급적 찬물대신 따뜻한 물 섭취 및
      옷차림에 유념해 주시면 좋을 것 같습니다.
    </ModalContent2DoctorText> */}
      </DCounselingModalContent2>
      {doctorCounselingModal && (
        <DConModalWrap>
          <DConModalOverlay>
            <DConModalContent>
              <DConModalHeader>
                <DConModalTitle>상담작성</DConModalTitle>
              </DConModalHeader>
              <DConModalBody>
                <DConModalTexts>
                  <DConModalText
                    maxLength="2000"
                    placeholder="상담 내용을 작성해주세요"
                  />
                </DConModalTexts>
                <DConModalBtns>
                  <DConModalCompleteBtn onClick={CounselingComplete}>
                    답변완료
                  </DConModalCompleteBtn>
                  <DConModalCancelBtn onClick={DCounselingModalToggle}>
                    답변취소
                  </DConModalCancelBtn>
                </DConModalBtns>
              </DConModalBody>
            </DConModalContent>
          </DConModalOverlay>
        </DConModalWrap>
      )}
    </>
  )
}

export default DoctorCounselingModal

const ModalContent2StartBtn = styled.button`
  width: 200px;
  height: 40px;
  margin: auto;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  font-size: 20px;

  &:hover {
    background-color: #192849;
    cursor: pointer;
  }
`

const DCounselingModalContent2 = styled.div`
  width: 450px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalContent2Titles = styled.div``
const ModalContent2Img = styled.div`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background-image: url(${HistoryImg});
  background-size: contain;
`
const ModalContent2DoctorInfos = styled.div`
  width: 420px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ModalContent2DoctorInfo = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ModalContent2DoctorName = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`
const ModalContent2DoctorDiagnosis = styled.span`
  font-size: 17px;
  font-family: "GmarketSansMedium";
`

const ModalContent2Like = styled.div`
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 10px;
  background-image: url(${Like});
  background-size: contain;
`

const ModalContent2DoctorText = styled.div`
  width: 400px;
  height: 540px;
  padding: 10px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.14);
`
const DConModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`

const DConModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translate(-24%, -11%);
  position: fixed;
`

const DConModalContent = styled.div`
  width: 700px;
  height: 700px;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 15%;
  transform: translate(35%, 0);
  position: absolute;
`
const DConModalHeader = styled.div`
  width: 700px;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DConModalTitle = styled.span`
  width: 700px;
  font-size: 20px;
  font-family: "GmarketSansMedium";
  text-align: center;
  user-select: none;
`
const DConModalBody = styled.div`
  width: 700px;
  height: 650px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DConModalTexts = styled.div`
  width: 670px;
  height: 540px;
  user-select: none;
`
const DConModalText = styled.textarea`
  width: 650px;
  height: 520px;
  padding: 10px;
  border-radius: 12px;
  resize: none;
  outline: none;
`
const DConModalBtns = styled.div`
  width: 260px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const DConModalCompleteBtn = styled.button`
  width: 120px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  font-size: 20px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #192849;
  }
`
const DConModalCancelBtn = styled.button`
  width: 120px;
  height: 50px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
  font-size: 20px;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: #192849;
  }
`
