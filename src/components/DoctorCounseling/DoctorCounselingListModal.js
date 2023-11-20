import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import CloseBtn from "../../assets/images/XBtn.png"
import DoctorCounselingModal from "./DoctorCounselingModal"
import DefaultCounselingImg from "../../assets/images/defaultCounseling.png"
import { __getDoctorCounselingList } from "../../redux/modules/doctorCounselingSlice"

function DoctorCounselingListModal({ dispatch }) {
  const [selectedCounselingId, setSelectedCounselingId] = useState()
  // const [CounselingModal, setCounselingModal] = useState()

  const [counseling, setCounSeling] = useState([
    {
      counselingId: 1,
      counselingTitle: "상담요청합니다",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 1,
      departmentName: "내과",
      counselingContent:
        "안녕하세요 며칠전부터 내가 ㅂ몸이 너무 쓰리디 쓰려서 그러는데 걍 집에 가면안될까요?",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 2,
      counselingTitle: "하이루",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 2,
      departmentName: "외과",
      counselingContent: "안돼. 돌아가.",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 1,
      counselingTitle: "상담요청합니다",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 1,
      departmentName: "내과",
      counselingContent:
        "안녕하세요 며칠전부터 내가 ㅂ몸이 너무 쓰리디 쓰려서 그러는데 걍 집에 가면안될까요?",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 2,
      counselingTitle: "하이루",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 2,
      departmentName: "외과",
      counselingContent: "안돼. 돌아가.",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 1,
      counselingTitle: "상담요청합니다",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 1,
      departmentName: "내과",
      counselingContent:
        "안녕하세요 며칠전부터 내가 ㅂ몸이 너무 쓰리디 쓰려서 그러는데 걍 집에 가면안될까요?",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 2,
      counselingTitle: "하이루",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 2,
      departmentName: "외과",
      counselingContent: "안돼. 돌아가.",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 1,
      counselingTitle: "상담요청합니다",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 1,
      departmentName: "내과",
      counselingContent:
        "안녕하세요 며칠전부터 내가 ㅂ몸이 너무 쓰리디 쓰려서 그러는데 걍 집에 가면안될까요?",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
    {
      counselingId: 2,
      counselingTitle: "하이루",
      memberId: "sound4519",
      memberName: "이승진",
      departmentId: 2,
      departmentName: "외과",
      counselingContent: "안돼. 돌아가.",
      counselingImage: `${HistoryImg}`,
      counselingImageName: "상담사진",
    },
  ])

  const [counselingReply, setCounselingReply] = useState([
    {
      replyId: 1,
      counselingId: 1,
      memberId: "doctor1",
      doctorName: "이승진",
      doctorImg: "",
      commentContent: "안녕하세요 승진님, 반갑습니다 조아용",
      commentDate: "2023-11-19",
      departmentName: "내과",
    },
    // {
    //   replyId: 2,
    //   counselingId: 2,
    //   memberId: "doctor2",
    //   doctorName: "정성민",
    //   doctorImg: `${HistoryImg}`,
    //   commentContent: "하이!!",
    //   commentDate: "2023-11-19",
    //   departmentName: "외과",
    // },
  ])

  const CounselingToggle = () => {
    setSelectedCounselingId(!selectedCounselingId)
  }

  // 의사 입장에서 상담댓글이 아직 안달린 비대면 상담에 대한 리스트를 불러오는 로직
  useEffect(() => {
    dispatch(__getDoctorCounselingList)
  }, [])

  // const replyIdExists = counselingReply.some(
  //   (item) => item.counselingId === selectedCounselingId && item.replyId
  // )

  return (
    <DCounselingListBody>
      {counseling.map((item) => (
        <DCounselingListContent
          key={item.counselingId}
          onClick={() => setSelectedCounselingId(item.counselingId)}
        >
          <DCounselingListImg img={item.counselingImage} />
          <DCounselingListName>{item.counselingTitle}</DCounselingListName>
        </DCounselingListContent>
      ))}
      {selectedCounselingId && (
        <DCounselingModalWrap>
          <DCounselingModalOverlay>
            <DCounselingModalContent>
              {counseling.map((item) => {
                if (item.counselingId === selectedCounselingId) {
                  return (
                    <DCounselingModalContents>
                      <DCounselingModalHeader>
                        <DCounselingModalTitle>
                          상담 상세내역
                        </DCounselingModalTitle>
                        <DCounselingCloseBtn onClick={CounselingToggle} />
                      </DCounselingModalHeader>
                      <DCounselingModalBody>
                        <DCounselingModalContent1>
                          <ModalContent1Titles>
                            <ModalContent1Title>
                              {item.counselingTitle}
                            </ModalContent1Title>
                          </ModalContent1Titles>
                          <ModalContent1Texts>
                            <ModalContent1Text>
                              {item.counselingContent}
                            </ModalContent1Text>
                          </ModalContent1Texts>
                          <ModalContent1Imgs>
                            <ModalContent1Img />
                          </ModalContent1Imgs>
                        </DCounselingModalContent1>
                        <DoctorCounselingModal
                          counselingId={item.counselingId}
                        />
                      </DCounselingModalBody>
                    </DCounselingModalContents>
                  )
                }
              })}
            </DCounselingModalContent>
          </DCounselingModalOverlay>
        </DCounselingModalWrap>
      )}
    </DCounselingListBody>
  )
}

export default DoctorCounselingListModal

const DCounselingListBody = styled.div`
  width: 1300px;
  height: 700px;
  margin-top: 25px;
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
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultCounselingImg})`};
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
  height: 700px;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 19%;
  transform: translate(10%, 0);
  position: absolute;
`

const DCounselingModalContents = styled.div``

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
