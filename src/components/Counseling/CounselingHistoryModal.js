import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import {
  __getMyCounselingList,
  __getSelectMyCounseling,
  __updateLikedCount,
} from "../../redux/modules/counselingSlice"
import Like from "../../assets/images/heart.png"
import ClickedLike from "../../assets/images/Redheart.png"
import XBtn from "../../assets/images/closewhite.png"
import HistoryImg from "../../assets/images/DoctorImg.png"
import DefaultCounselingImg from "../../assets/images/defaultCounseling.png"
import DefaultProfileImg from "../../assets/images/User.png"
import ReactPaginate from "react-paginate"
import { useDispatch } from "react-redux"
import LazyLoad from "react-lazy-load"

function CounselingHistoryModal() {
  const dispatch = useDispatch()
  const [selectedCounselingId, setSelectedCounselingId] = useState()
  const [isLiked, setIsLiked] = useState()
  const [counseling, setCounseling] = useState()
  const [counselingReply, setCounselingReply] = useState([])
  const [likeCount, setLikeCount] = useState()
  const [pageCount, setPageCount] = useState()

  // 여기서부터 페이지네이션 관련 로직
  const [currentPage, setCurrentPage] = useState(0)
  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }
  const itemsPerPage = 8

  const offset = currentPage * itemsPerPage

  const HistoryModalToggle = () => {
    setSelectedCounselingId(!selectedCounselingId)
  }
  useEffect(() => {
    dispatch(__getMyCounselingList())
      .then((response) => {
        if (response) {
          const counselingData = response.payload.data
          setCounseling(counselingData)
          const updatedPageCount = Math.ceil(
            counselingData.length / itemsPerPage
          )
          setPageCount(updatedPageCount)
          console.log(counselingData)
        }
      })
      .catch((error) => {
        console.log(error, "에러")
      })
  }, [])

  useEffect(() => {
    if (selectedCounselingId) {
      dispatch(__getSelectMyCounseling({ counselingId: selectedCounselingId }))
        .then((response) => {
          if (response) {
            const responseData = response.payload.data
            setCounselingReply([responseData])
            console.log(responseData, "리스폰스 데이터")
          }
        })
        .catch((error) => {
          console.log(error, "에러")
        })
    }
  }, [selectedCounselingId])

  useEffect(() => {
    console.log(counselingReply)
  }, [counselingReply])

  const selectCounselingDetail = (counselingId) => {
    setSelectedCounselingId(counselingId)
  }
  const likeClick = (doctorId) => {
    console.log("클릭중!", doctorId)
    setIsLiked(!isLiked)
    dispatch(__updateLikedCount({ doctorId }))
      .then((response) => {
        if (response) {
          setLikeCount(response.payload.data)
          console.log(response.payload.data)
          console.log(response)

          // alert("업데이트 됨!")
        }
      })
      .catch((error) => {
        console.log(error)
        alert("에러발생!!")
      })
  }

  // const replyIdExists = counselingReply.find(
  //   (item) => item.counselingId === selectedCounselingId && item.replyId
  // )

  return (
    <>
      <CounselingHistoryBody>
        {counseling && counseling.length > 0 ? (
          counseling.slice(offset, offset + itemsPerPage).map((item) => (
            <CounselingHistoryContent
              key={item.counselingId}
              onClick={() => selectCounselingDetail(item.counselingId)}
            >
              <CounselingHistoryImg img={item.counselingImage} />

              <CounselingHistoryName>
                {item.counselingTitle}
              </CounselingHistoryName>
            </CounselingHistoryContent>
          ))
        ) : (
          <CounselingLoad>로딩중입니다..</CounselingLoad>
        )}
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
                          {counselingReply &&
                            counselingReply.length > 0 &&
                            counselingReply.map((item) => {
                              console.log(counselingReply)
                              if (
                                item.counselingId === selectedCounselingId &&
                                item.replyId !== 0
                              ) {
                                return (
                                  <HistoryContent2 key={item.replyId}>
                                    <HistoryContent2Detail>
                                      <HistoryDoctorInfos key={item.doctorId}>
                                        <HistoryDoctorImg
                                          img={item.doctorImage}
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
                                          onClick={() =>
                                            likeClick(item.doctorId)
                                          }
                                          isLiked={isLiked}
                                        />
                                      </HistoryDoctorInfos>

                                      <HistoryDoctorText>
                                        {item.commentContent}
                                      </HistoryDoctorText>
                                    </HistoryContent2Detail>
                                  </HistoryContent2>
                                )
                              } else {
                                return (
                                  <HistoryContent2>
                                    <HistoryContent2Detail>
                                      <HistoryDoctorInfos />
                                      <HistoryDoctorTexts>
                                        <HistoryDText>
                                          답변을 기다리는중이거나 ..
                                          <br />
                                          로딩중 입니다..
                                        </HistoryDText>
                                      </HistoryDoctorTexts>
                                    </HistoryContent2Detail>
                                  </HistoryContent2>
                                )
                              }
                            })}
                        </HistoryModalContentBody>
                      </HistoryModalContents>
                    )
                  }
                })}
              </HistoryModalContent>
            </HistoryModalOverlay>
          </HistoryModalWrap>
        )}
      </CounselingHistoryBody>
      {pageCount !== null && pageCount > 1 && (
        <PaginationWrapper>
          <ReactPaginate
            previousLabel={"이전"}
            nextLabel={"다음"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </PaginationWrapper>
      )}
    </>
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
  /* border: 1px solid black; */
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  /* background-image: ${(props) =>
    props.img ? `url(${props.img})` : `url(${DefaultProfileImg})`}; */

  background-image: url(${(props) =>
    props.img
      ? "data:image/*;base64," + props.img
      : `${DefaultCounselingImg}`});
  background-size: cover;
`

const CounselingLoad = styled.div`
  width: 1300px;
  margin: auto;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
`

const CounselingHistoryName = styled.span`
  /* margin-top: 15px; */
  margin: 15px 0;
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
  height: 50px;
  border: #223359;
  background-color: #223359;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const HistoryModalContentTitle = styled.span`
  width: 850px;
  margin-left: 20px;
  text-align: center;
  font-size: 25px;
  font-family: "GmarketSansMedium";
`
const HistoryXBtn = styled.div`
  width: 40px;
  height: 40px;
  margin-left: auto;
  margin-right: 15px;
  background-image: url(${XBtn});
  background-size: cover;
  cursor: pointer;
  user-select: none;
`

const HistoryModalContentBody = styled.div`
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
  background-image: url(${(props) =>
    props.img
      ? "data:image/*;base64," + props.img
      : `${DefaultCounselingImg}`});

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

const HistoryDoctorTexts = styled.div`
  width: 400px;
  height: 540px;
  padding: 10px;
  border: transparent;
  border-radius: 8px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.14);
  display: flex;
  justify-content: center;
  align-items: center;
`

const HistoryDText = styled.span`
  font-size: 30px;
  text-align: center;
`

const PaginationWrapper = styled.div`
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
    padding: 0;
    margin: 20px 0;
  }

  .pagination li {
    margin-right: 10px;
    font-size: 20px;
    cursor: pointer;
  }

  .pagination li.active {
    font-weight: bold;
  }
`
