import React, { useState } from "react"
import { styled } from "styled-components"
import { __getSelectMyCounseling } from "../../redux/modules/counselingSlice"
import Like from "../../assets/images/heart.png"
import ClickedLike from "../../assets/images/Redheart.png"
import XBtn from "../../assets/images/XBtn.png"
import HistoryImg from "../../assets/images/DoctorImg.png"
import DefaultCounselingImg from "../../assets/images/defaultCounseling.png"
import DefaultProfileImg from "../../assets/images/User.png"

function CounselingHistoryModal({ dispatch }) {
  const [selectedCounselingId, setSelectedCounselingId] = useState()
  const [isLiked, setIsLiked] = useState()
  const [doctorId, setDoctorId] = useState()
  const [historyModal, setHistoryModal] = useState()

  const HistoryModalToggle = () => {
    setSelectedCounselingId(!selectedCounselingId)

    // dispatch(__getSelectMyCounseling(counselingId))
  }

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

  const LikeClick = () => {
    console.log("클릭중!")
    setIsLiked(!isLiked)
    // dispatch(__)
  }

  const replyIdExists = counselingReply.some(
    (item) => item.counselingId === selectedCounselingId && item.replyId
  )

  // replyId가 존재할때와 존재하지 않을때 ModalContent의 위치를 조정해주기위한 스타일
  // const additionalTransformStyles = replyIdExists
  //   ? { transform: "translate(25%, 0)" }
  //   : { left: "20%", transform: "translate(90%, 0)" }

  // replyId가 존재할때와 존재하지 않을때 Header title 부분(상담상세내역) 부분을 조절하기위한 스타일
  // const additionalTitleStyles = replyIdExists
  //   ? { width: "90%", marginLeft: "45px" }
  //   : { width: "90%", marginLeft: "70px" }

  // const additionalTextStyles = replyIdExists ? {} : { marginTop: "30px" }
  return (
    <CounselingHistoryBody>
      {counseling.map((item) => (
        <CounselingHistoryContent
          key={item.counselingId}
          onClick={() => setSelectedCounselingId(item.counselingId)}
        >
          <CounselingHistoryImg img={item.counselingImage} />
          <CounselingHistoryName>{item.counselingTitle}</CounselingHistoryName>
        </CounselingHistoryContent>
      ))}
      {selectedCounselingId && (
        <HistoryModalWrap>
          <HistoryModalOverlay>
            <HistoryModalContent>
              {counseling.map((item) => {
                if (item.counselingId === selectedCounselingId) {
                  return (
                    <HistoryModalContents key={item.counselingId}>
                      <HistoryModalContentHeader>
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
                                {item.counselingTitle}
                              </HistoryContent1Title>
                            </HistoryContent1Titles>
                            <HistoryContent1Texts>
                              <HistoryContent1Text>
                                {item.counselingContent}
                              </HistoryContent1Text>
                            </HistoryContent1Texts>
                            <HistoryContent1Imgs>
                              <HistoryContent1Img />
                            </HistoryContent1Imgs>
                          </HistoryContent1Detail>
                        </HistoryContent1>
                        {replyIdExists ? (
                          <React.Fragment>
                            {counselingReply.map((item) => {
                              if (item.counselingId === selectedCounselingId) {
                                return (
                                  <HistoryContent2 key={item.replyId}>
                                    <HistoryContent2Detail>
                                      <HistoryDoctorInfos key={item.memberId}>
                                        <HistoryDoctorImg
                                          img={item.doctorImg}
                                        />
                                        <HistoryDoctorInfo>
                                          <HistoryDoctorName>
                                            {item.doctorName}
                                          </HistoryDoctorName>
                                          <HistoryDoctorDiagnosis>
                                            {item.departmentName}
                                          </HistoryDoctorDiagnosis>
                                        </HistoryDoctorInfo>
                                        <HistoryDoctorLike
                                          onClick={LikeClick}
                                          isLiked={isLiked}
                                        />
                                      </HistoryDoctorInfos>

                                      <HistoryDoctorText>
                                        {item.commentContent}
                                      </HistoryDoctorText>
                                    </HistoryContent2Detail>
                                  </HistoryContent2>
                                )
                              }
                              return null
                            })}
                          </React.Fragment>
                        ) : (
                          <HistoryContent2>
                            <HistoryContent2Detail>
                              <HistoryDoctorInfos />
                              <HistoryDoctorText>
                                답변을 기다리는 중입니다..
                              </HistoryDoctorText>
                            </HistoryContent2Detail>
                          </HistoryContent2>
                        )}
                      </HistoryModalContentBody>
                    </HistoryModalContents>
                  )
                }
                return null
              })}
            </HistoryModalContent>
          </HistoryModalOverlay>
        </HistoryModalWrap>
      )}
    </CounselingHistoryBody>
  )
}

export default CounselingHistoryModal

const CounselingHistoryBody = styled.div`
  width: 1300px;
  height: 700px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center;
`
const CounselingHistoryContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const CounselingHistoryImg = styled.div`
  width: 305px;
  height: 280px;
  border: transparent;
  border-radius: 12px;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultCounselingImg})`};
  background-size: cover;
`
const CounselingHistoryName = styled.span`
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
  /* width: 900px; */
  /* width: 200px; */
  height: 700px;
  margin: auto;
  border: transparent;
  border-radius: 12px;
  background-color: white;
  top: 11%;
  left: 19%;
  transform: translate(20%, 0);
  position: absolute;
  user-select: none;
`
const HistoryModalContents = styled.div``

const HistoryModalContentHeader = styled.div`
  /* width: 900px; */
  height: 50px;
  border-bottom: 1px solid #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
`
const HistoryModalContentTitle = styled.span`
  width: 850px;
  /* width: 70%; */
  /* margin: auto; */
  margin-left: 20px;
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
  /* width: 900px; */
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const HistoryContent1 = styled.div`
  /* width: 440px; */
  width: 50%;
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

const HistoryContent2Detail = styled.div``

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
  background-image: url(${(props) => (props.isLiked ? ClickedLike : Like)});
  background-size: contain;
`

const HistoryDoctorImg = styled.img`
  width: 50px;
  height: 50px;
  margin: 0 10px;
  border-radius: 50%;
  background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultProfileImg})`};
  background-size: cover;
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
