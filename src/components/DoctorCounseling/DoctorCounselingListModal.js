import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/closewhite.png"
import DoctorCounselingModal from "./DoctorCounselingModal"
import DefaultCounselingImg from "../../assets/images/defaultCounseling.png"

import ReactPaginate from "react-paginate"
import { useDispatch } from "react-redux"
import { __getDoctorCounselingList } from "../../redux/modules/doctorCounselingSlice"

function DoctorCounselingListModal() {
  const dispatch = useDispatch()
  const [selectedCounselingId, setSelectedCounselingId] = useState()
  const [counseling, setCounseling] = useState()
  const [counselingReply, setCounselingReply] = useState()
  const [counselingId, setCounselingId] = useState()
  const [pageCount, setPageCount] = useState()

  //현재 페이지
  const [currentPage, setCurrentPage] = useState(0)
  const handlePageClick = (data) => {
    setCurrentPage(data.selected)
  }
  const itemsPerPage = 8
  const offset = currentPage * itemsPerPage

  const CounselingToggle = () => {
    setSelectedCounselingId(!selectedCounselingId)
  }

  useEffect(() => {
    dispatch(__getDoctorCounselingList())
      .then((response) => {
        if (response) {
          const counselingData = response.payload.data
          setCounseling(counselingData)
          const updatedPageCount = Math.ceil(
            counselingData.length / itemsPerPage
          )
          setPageCount(updatedPageCount)
        }
      })
      .catch((error) => {
        console.log(error, "에러에요")
      })
  }, [])

  const selectCounselingDetail = (counselingId) => {
    setSelectedCounselingId(counselingId)
  }

  return (
    <>
      <DCounselingListBody>
        {counseling && counseling.length > 0 ? (
          counseling.slice(offset, offset + itemsPerPage).map((item) => (
            <DCounselingListContent
              key={item.counselingId}
              onClick={() => selectCounselingDetail(item.counselingId)}
            >
              <DCounselingListImg img={item.counselingImage} />
              <DCounselingListName>{item.counselingTitle}</DCounselingListName>
            </DCounselingListContent>
          ))
        ) : (
          <CounselingLoad>로딩중 ...</CounselingLoad>
        )}
        {selectedCounselingId && (
          <DCounselingModalWrap>
            <DCounselingModalOverlay>
              <DCounselingModalContent>
                {counseling.map((item) => {
                  if (item.counselingId === selectedCounselingId) {
                    return (
                      <DCounselingModalContents key={item.counselingId}>
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
                              <ModalContent1Img img={item.counselingImage} />
                            </ModalContent1Imgs>
                          </DCounselingModalContent1>
                          <DoctorCounselingModal
                            counselingId={item.counselingId}
                          />
                        </DCounselingModalBody>
                      </DCounselingModalContents>
                    )
                  }
                  return null
                })}
              </DCounselingModalContent>
            </DCounselingModalOverlay>
          </DCounselingModalWrap>
        )}
      </DCounselingListBody>
      {pageCount > 1 && (
        <DPaginationWrapper>
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
        </DPaginationWrapper>
      )}
    </>
  )
}

export default DoctorCounselingListModal

const DCounselingListBody = styled.div`
  width: 1300px;
  height: 700px;
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25%, auto));
  place-items: center;
  user-select: none;
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
  background-image: url(${(props) =>
    props.img
      ? "data:image/*;base64," + props.img
      : `${DefaultCounselingImg}`});
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
  transform: translate(20%, 0);
  position: absolute;
`

const DCounselingModalContents = styled.div``

const DCounselingModalHeader = styled.div`
  width: 900px;
  height: 50px;

  border-bottom: 1px solid #dcdcdc;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  background-color: #223359;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: white;
`

const DCounselingModalTitle = styled.span`
  width: 830px;
  margin-left: auto;

  font-size: 25px;
  font-family: "GmarketSansMedium";
  text-align: center;
`
const DCounselingCloseBtn = styled.div`
  width: 40px;
  height: 40px;
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
  background-image: url(${(props) =>
    props.img
      ? "data:image/*;base64," + props.img
      : `${DefaultCounselingImg}`});
  background-size: 100% 100%;
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

const CounselingLoad = styled.div`
  width: 1300px;
  margin: auto;
  font-size: 30px;
  text-align: center;
  user-select: none;
`
