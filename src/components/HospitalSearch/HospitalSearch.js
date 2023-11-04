import React from "react"
import styled from "styled-components"
import ReadingGlasses from "../../assets/images/ReadingGlasses.png"
import KaKaoMap from "../../assets/images/KaKaoMap.png"

function HospitalSearch() {
  return (
    <Wrap>
      <HospitalWrapper>
        <KaKaoMapWrapper></KaKaoMapWrapper>
        <MapSearch>
          <MapSearchInputs>
            <MapSearchInput placeholder="검색" />
            <MapSearchImg />
          </MapSearchInputs>
          <MapSearchResults>
            <MapSearchResult>
              <ResultNumber>1</ResultNumber>
              <ResultName>하늘하늘병원</ResultName>
              <ResultAddress>
                서울특별시 강동구 강동로 하늘하늘병원
              </ResultAddress>
              <ResultTel>02-4786-7835</ResultTel>
            </MapSearchResult>
          </MapSearchResults>
        </MapSearch>
      </HospitalWrapper>
    </Wrap>
  )
}

export default HospitalSearch

/*병원찾기 메인 전체 */
const Wrap = styled.div`
  width: 85vw;
  height: 100vh;
`
/*병원찾기 메인 */
const HospitalWrapper = styled.div`
  width: 1440px;
  height: 910px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
const KaKaoMapWrapper = styled.div`
  width: 600px;
  height: 600px;
  border-radius: 16px;
  background-image: url(${KaKaoMap});
  background-size: cover;
  user-select: none;
`
const MapSearch = styled.div`
  width: 600px;
  height: 600px;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const MapSearchInputs = styled.div`
  border-radius: 8px;
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const MapSearchImg = styled.div`
  width: 30px;
  height: 30px;
  margin-left: 15px;
  background-image: url(${ReadingGlasses});
  background-size: cover;
  cursor: pointer;
`

const MapSearchInput = styled.input`
  width: 400px;
  padding: 6px;
  border: transparent;
  border-bottom: 1px solid black;
  font-size: 20px;
  outline: none;
`
const MapSearchResults = styled.div`
  width: 600px;
  height: 530px;
  border: transparent;
  border-radius: 12px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.12);
  padding: 10px;
`

const MapSearchResult = styled.div`
  margin: 10px auto;
  padding: 12px;
  border: transparent;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  font-size: 18px;

  &:hover {
    background-color: #efefef;
    font-weight: 600;
    cursor: pointer;
  }
`
const ResultNumber = styled.div``
const ResultName = styled.div``

const ResultAddress = styled.div``
const ResultTel = styled.div``
