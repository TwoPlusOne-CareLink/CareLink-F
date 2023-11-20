import React, { useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import CloseBtn from "../../assets/images/XBtn.png"
import Like from "../../assets/images/heart.png"
import { jwtDecode } from "jwt-decode"

function DoctorCompleteHistoryModal() {
  // const Token = localStorage.getItem("Token")
  const [doctorId, setDoctorId] = useState()

  // 로컬스토리지에 담긴 토큰을 디코딩 하여 서버와 통신에 필요한 doctorId를 추출하기 위해 사용
  // if (Token && doctorId === undefined) {
  //   try {
  //     const decodedToken = jwtDecode(Token)
  //     const doctorId = decodedToken.doctorId
  //     setDoctorId(doctorId)
  //   } catch (error) {
  //     console.error("토큰 해석에 실패했습니다.", error)
  //   }
  // } else if (!Token) {
  //   console.log("토큰이 로컬스토리지에 존재하지 않습니다.")
  // }

  const [historyModal, setHistoryModal] = useState()

  const historyModalToggle = () => {
    setHistoryModal(!historyModal)
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

  return (
    <DoctorHistoryBody>
      {counseling.map((item) => (
        <DoctorHistoryContent onClick={historyModalToggle}>
          <DoctorHistoryImg />
          <DoctorHistoryName>첫번쨰 상담</DoctorHistoryName>
        </DoctorHistoryContent>
      ))}
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

export default DoctorCompleteHistoryModal

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
