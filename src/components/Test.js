import React, { useState } from "react"
import { styled } from "styled-components"
import XBtn from "../assets/images/XBtn.png"

function Test() {
  const [modal, setModal] = useState()

  const ToggleModal = () => {
    setModal(!modal)
  }

  return (
    <Wrap>
      <Wrapper>
        안녕하세요
        <ModalButton onClick={ToggleModal}>모달창 켜기</ModalButton>
        {modal && (
          <ModalWrap>
            <ModalOverlay>
              <ModalContent>
                <ModalHeader>
                  <ModalBeen></ModalBeen>
                  <ModalTitle>개인정보 동의에 대한 설명서</ModalTitle>
                  <CloseBtns>
                    <CloseBtn />
                  </CloseBtns>
                </ModalHeader>
              </ModalContent>
            </ModalOverlay>
          </ModalWrap>
        )}
      </Wrapper>
    </Wrap>
  )
}

export default Test

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const Wrapper = styled.div`
  width: 1000px;
  height: 700px;
  border: 1px solid black;
  border-radius: 12px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const ModalButton = styled.button`
  width: 100px;
  height: 30px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  color: white;
`
const ModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const ModalContent = styled.div`
  width: 1000px;
  height: 600px;
  background-color: white;
  top: 18%;
  left: 21%;
  transform: translate(0, 0);
  position: absolute;
`
const ModalHeader = styled.div`
  width: 1000px;
  height: 50px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const ModalBeen = styled.div`
  width: 5%;
`

const ModalTitle = styled.span`
  width: 960px;
  text-align: center;
  font-size: 20px;
`
const CloseBtns = styled.div`
  width: 3%;
`

const CloseBtn = styled.div`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  height: 20px;
  background-image: url(${XBtn});
  background-size: cover;
`
