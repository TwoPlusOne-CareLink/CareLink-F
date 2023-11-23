import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import HistoryImg from "../../assets/images/DoctorImg.png"
import CloseBtn from "../../assets/images/XBtn.png"
import Like from "../../assets/images/heart.png"
import DefaultCounselingImg from "../../assets/images/defaultCounseling.png"
import ReactPaginate from "react-paginate"
import { useDispatch } from "react-redux"
import {
  __getDoctorCompleteCounselingList,
  __getDoctorCounselingDetail,
} from "../../redux/modules/doctorCounselingSlice"

function DoctorCompleteHistoryModal() {
  const dispatch = useDispatch()
  const [selectedCounselingId, setSelectedCounselingId] = useState()
  const [counseling, setCounseling] = useState([{}])
  const [counselingReply, setCounselingReply] = useState([])
  const [pageCount, setPageCount] = useState()
  const [doctorId, setDoctorId] = useState()

  const historyModalToggle = () => {
    setSelectedCounselingId(!selectedCounselingId)
  }

  const [currentPage, setCurrentPage] = useState(0)
  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }

  const itemsPerPage = 8
  const offset = currentPage * itemsPerPage

  useEffect(() => {
    dispatch(__getDoctorCompleteCounselingList())
      .then((response) => {
        if (response) {
          console.log(response.payload)
          const counselingData = response.payload.data
          setCounseling(counselingData)
          const updatedPageCount = Math.ceil(
            counselingData.length / itemsPerPage
          )
          setPageCount(updatedPageCount)
          console.log(counselingData)
          console.log(counseling, "카운셀링 나오냐?")
        }
      })
      .catch((error) => {
        console.log(error, "에러임")
      })
  }, [])

  useEffect(() => {
    if (selectedCounselingId) {
      dispatch(
        __getDoctorCounselingDetail({ counselingId: selectedCounselingId })
      )
        .then((response) => {
          if (response) {
            const responseData = response.payload.data
            setCounselingReply(responseData)
            console.log(responseData)
          }
        })
        .catch((error) => {
          console.log(error, "에러메시지")
        })
    }
  }, [selectedCounselingId])

  useEffect(() => {
    console.log(counselingReply)
  }, [counselingReply])

  const selectCounselingDetail = (counselingId) => {
    setSelectedCounselingId(counselingId)
  }

  return (
    <>
      <DoctorHistoryBody>
        {counseling &&
          counseling.slice(offset, offset + itemsPerPage).map((item) => (
            <DoctorHistoryContent
              key={item.counselingId}
              onClick={() => selectCounselingDetail(item.counselingId)}
            >
              <DoctorHistoryImg img={item.counselingImage} />
              <DoctorHistoryName>{item.counselingTitle}</DoctorHistoryName>
            </DoctorHistoryContent>
          ))}
        {selectedCounselingId && (
          <DoctorHistoryModalWrap>
            <DoctorHistoryModalOverlay>
              <DoctorHistoryModalContent>
                {counseling.map((item) => {
                  if (item.counselingId === selectedCounselingId) {
                    return (
                      <DoctorHistoryModalContents>
                        <DoctorHistoryModalHeader>
                          <DoctorHistoryHeaderTitle>
                            비대면 상담 상세내역
                          </DoctorHistoryHeaderTitle>
                          <DoctorHistoryModalCloseBtn
                            onClick={historyModalToggle}
                          />
                        </DoctorHistoryModalHeader>
                        <DHistoryModalContentBody>
                          <DHistoryContent1>
                            <DHistoryContent1Detail>
                              <DHistoryContent1Titles>
                                <DHistoryContent1Title>
                                  {item.counselingTitle}
                                </DHistoryContent1Title>
                              </DHistoryContent1Titles>
                              <DHistoryContent1Texts>
                                <DHistoryContent1Text>
                                  {item.counselingContent}
                                </DHistoryContent1Text>
                              </DHistoryContent1Texts>
                              <DHistoryContent1Imgs>
                                <DHistoryContent1Img />
                              </DHistoryContent1Imgs>
                            </DHistoryContent1Detail>
                          </DHistoryContent1>

                          {counselingReply &&
                            Array.isArray(counselingReply) &&
                            counselingReply.map((item) => {
                              if (item.counselingId === selectedCounselingId) {
                                return (
                                  <DHistoryContent2>
                                    <DHistoryDoctorInfos>
                                      <DHistoryDoctorImg />
                                      <DHistoryDoctorInfo>
                                        <DHistoryDoctorName>
                                          {item.doctorName}
                                        </DHistoryDoctorName>
                                        <DHistoryDoctorDiagnosis>
                                          {item.departmentName}
                                        </DHistoryDoctorDiagnosis>
                                      </DHistoryDoctorInfo>
                                      <DHistoryDoctorLike />
                                    </DHistoryDoctorInfos>

                                    <DHistoryDoctorText>
                                      {item.commentContent}
                                    </DHistoryDoctorText>
                                  </DHistoryContent2>
                                )
                              }
                            })}
                        </DHistoryModalContentBody>
                      </DoctorHistoryModalContents>
                    )
                  }
                })}
              </DoctorHistoryModalContent>
            </DoctorHistoryModalOverlay>
          </DoctorHistoryModalWrap>
        )}
      </DoctorHistoryBody>
      {pageCount > 1 && (
        <DPaginationWrapper>
          <ReactPaginate
            previousLabel={"이전"}
            nextLabel={"다음"}
            breakLabel={"..."}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </DPaginationWrapper>
      )}
    </>
  )
}

export default DoctorCompleteHistoryModal

const DoctorHistoryBody = styled.div`
  width: 1300px;
  height: 700px;
  margin-top: 25px;
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
  background-image: url(${(props) =>
    props.img
      ? "data:image/*;base64," + props.img
      : `${DefaultCounselingImg}`});
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
const DoctorHistoryModalContents = styled.div``

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
const DPaginationWrapper = styled.div`
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
