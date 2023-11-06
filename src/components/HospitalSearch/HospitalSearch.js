import React, { useState } from "react"

import styled from "styled-components"
import ReadingGlasses from "../../assets/images/ReadingGlasses.png"
import KaKaoMap from "../../assets/images/KaKaoMap.png"
// import DoctorProfileImg from "../../assets/images/DoctorProfileImg.jpg"
import { useNavigate } from "react-router-dom"
import HospitalDetailModal from "./HospitalDetailModal"

function HospitalSearch() {
  const navigate = useNavigate()

  // const [hospitalModal, setHospitalModal] = useState()

  // const hospitalResultToggle = () => {
  //   setHospitalModal(!hospitalModal)
  // }

  return (
    <Wrap>
      <HospitalWrapper>
        <KaKaoMapWrapper></KaKaoMapWrapper>
        <MapSearch>
          <MapSearchInputs>
            <MapSearchInput placeholder="검색" />
            <MapSearchImg />
          </MapSearchInputs>
          <HospitalDetailModal />
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
