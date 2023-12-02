import React, { useEffect, useState } from "react"
import { styled } from "styled-components"
import Search from "../../assets/images/ReadingGlasses.png"
import CloseBtn from "../../assets/images/XBtn.png"
import { useDispatch } from "react-redux"
import {
  __getDiseaseDetail,
  __getDiseaseList,
} from "../../redux/modules/diseaseSlice"
import DiseaseModal from "./DiseaseModal"

function Disease() {
  const dispatch = useDispatch()
  const [selectedDisease, setSelectedDisease] = useState(false)
  const [disease, setDisease] = useState()
  const [searchName, setSearchName] = useState("")
  const [diseaseDetail, setDiseaseDetail] = useState([])

  const diseaseToggle = (diseaseId) => {
    setSelectedDisease(selectedDisease === diseaseId ? null : diseaseId)

    dispatch(__getDiseaseDetail({ diseaseId }))
      .then((response) => {
        if (response) {
          setDiseaseDetail([response.payload.data])
          console.log(response.payload.data, "받아오고있니?")
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const onChangeSearchName = (e) => {
    const currentSearchName = e.target.value
    setSearchName(currentSearchName)
  }

  const searchClick = () => {
    alert("검색완료")
  }

  const handleSearchOnKeyPress = (e) => {
    if (e.key === "Enter") {
      searchClick()
    }
  }

  useEffect(() => {
    dispatch(__getDiseaseList())
      .then((response) => {
        if (response) {
          setDisease(response.payload.data)
          console.log(response.payload.data)
        }
      })
      .catch((error) => {
        console.log(error, "에러임")
      })
  }, [])

  useEffect(() => {
    console.log(diseaseDetail, "ㅎㅎ")
  }, [diseaseDetail])

  return (
    <Wrap>
      <DiseaseCheckTop>
        <DiseaseTopTitle>질병백과</DiseaseTopTitle>
      </DiseaseCheckTop>
      <DiseaseCheckBody>
        <DiseaseSearchInputs>
          <DiseaseSearchInput
            placeholder="검색할 질병을 입력해주세요"
            onChange={onChangeSearchName}
            onKeyPress={handleSearchOnKeyPress}
          />
          <DiseaseSearchImg />
        </DiseaseSearchInputs>
        <DiseaseModal
          disease={disease}
          searchName={searchName}
          diseaseToggle={diseaseToggle}
          selectedDisease={selectedDisease}
          setSelectedDisease={setSelectedDisease}
          diseaseDetail={diseaseDetail}
        />
      </DiseaseCheckBody>
    </Wrap>
  )
}

export default Disease

const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DiseaseCheckTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const DiseaseTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`

const DiseaseCheckBody = styled.div`
  width: 1400px;
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`

const DiseaseSearchInputs = styled.div`
  width: 700px;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
`

const DiseaseSearchInput = styled.input`
  width: 620px;
  padding: 20px;
  border: transparent;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 20px;
`
const DiseaseSearchImg = styled.div`
  width: 40px;
  height: 40px;
  background-image: url(${Search});
  background-size: cover;
  cursor: pointer;
`
