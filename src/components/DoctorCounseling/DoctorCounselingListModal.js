import React, { useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import CloseBtn from "../../assets/images/XBtn.png"
import DoctorCounselingModal from "./DoctorCounselingModal"

function DoctorCounselingListModal() {
  const [CounselingModal, setCounselingModal] = useState()

  const CounselingToggle = () => {
    setCounselingModal(!CounselingModal)
  }

  return (
    <DCounselingListBody>
      <DCounselingListContent onClick={CounselingToggle}>
        <DCounselingListImg />
        <DCounselingListName>첫번째 상담</DCounselingListName>
      </DCounselingListContent>
      {CounselingModal && (
        <DCounselingModalWrap>
          <DCounselingModalOverlay>
            <DCounselingModalContent>
              <DCounselingModalHeader>
                <DCounselingModalTitle>상담 상세내역</DCounselingModalTitle>
                <DCounselingCloseBtn onClick={CounselingToggle} />
              </DCounselingModalHeader>
              <DCounselingModalBody>
                <DCounselingModalContent1>
                  <ModalContent1Titles>
                    <ModalContent1Title>
                      안녕하세요 문의드립니다
                    </ModalContent1Title>
                  </ModalContent1Titles>
                  <ModalContent1Texts>
                    <ModalContent1Text>
                      안녕하세요 반갑습니다. 제가 며칠전부터 몸이 너무
                      안좋아서,, 아주 그냥 몸살감기가 걸려부러써요.. ㅠㅠ 근데
                      이게 열도 좀 있는 것 같고 온몸이 으슬으슬 떨리네요 .. 이거
                      감기몸살인가요?
                    </ModalContent1Text>
                  </ModalContent1Texts>
                  <ModalContent1Imgs>
                    <ModalContent1Img />
                  </ModalContent1Imgs>
                </DCounselingModalContent1>
                <DoctorCounselingModal />
              </DCounselingModalBody>
            </DCounselingModalContent>
          </DCounselingModalOverlay>
        </DCounselingModalWrap>
      )}

      {/* <DCounselingListContent>
        <DCounselingListImg />
        <DCounselingListName>첫번째 상담</DCounselingListName>
      </DCounselingListContent>
      <DCounselingListContent>
        <DCounselingListImg />
        <DCounselingListName>첫번째 상담</DCounselingListName>
      </DCounselingListContent>
      <DCounselingListContent>
        <DCounselingListImg />
        <DCounselingListName>첫번째 상담</DCounselingListName>
      </DCounselingListContent> */}
    </DCounselingListBody>
  )
}

export default DoctorCounselingListModal

const DCounselingListBody = styled.div`
  width: 1300px;
  height: 660px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
`
const DCounselingListContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DCounselingListImg = styled.div`
  width: 305px;
  height: 280px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`
const DCounselingListName = styled.span`
  margin-top: 15px;
  font-weight: 600;
`
const DCounselingModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DCounselingModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DCounselingModalContent = styled.div`
  width: 900px;
  height: 700px;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 19%;
  transform: translate(10%, 0);
  position: absolute;
`

const DCounselingModalHeader = styled.div`
  width: 900px;
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DCounselingModalTitle = styled.span`
  width: 830px;
  margin-left: auto;
  font-size: 25px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const DCounselingCloseBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  background-image: url(${CloseBtn});
  background-size: cover;
  user-select: none;
  cursor: pointer;
`
const DCounselingModalBody = styled.div`
  width: 900px;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const DCounselingModalContent1 = styled.div`
  width: 450px;
  height: 610px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const ModalContent1Titles = styled.div`
  width: 450px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContent1Title = styled.span`
  font-size: 20px;
`
const ModalContent1Texts = styled.div`
  width: 390px;
  height: 300px;
  padding: 5px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 8px 62px 2px rgba(0, 0, 0, 0.14);
`
const ModalContent1Text = styled.p`
  width: 390px;
  height: 300px;
  padding: 5px;
`
const ModalContent1Imgs = styled.div`
  width: 400px;
  height: 230px;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const ModalContent1Img = styled.div`
  width: 400px;
  height: 230px;
  border: transparent;
  border-radius: 12px;
  background-image: url(${HistoryImg});
  background-size: cover;
`
