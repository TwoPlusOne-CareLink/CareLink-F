import React, { useEffect, useState } from "react"

import styled from "styled-components"

import HospitalDetailModal from "./HospitalDetailModal"
import HospitalSearchMap from "./HospitalSearchMap"
import { useDispatch } from "react-redux"
import { __getHospitalInfo } from "../../redux/modules/hospitalSlice"

function HospitalSearch() {
  const dispatch = useDispatch()

  const [hospitalData, setHospitalData] = useState()

  useEffect(() => {
    let hospitalName = "all"

    dispatch(__getHospitalInfo({ hospitalName }))
      .then((response) => {
        if (response) {
          setHospitalData(response.payload.data)

          console.log(response, "받아오냐?")
          console.log(response.payload.data, "dd")
        }
      })
      .catch((error) => {
        console.log(error.message)
      })

    // console.log(searchResult)
  }, [])

  useEffect(() => {
    console.log(hospitalData, "업뎃")
  }, [hospitalData])

  return (
    <Wrap>
      <HospitalTop>
        <HospitalTopTitle>병원찾기</HospitalTopTitle>
      </HospitalTop>
      <HospitalWrapper>
        <KaKaoMapWrapper>
          <HospitalSearchMap hospital={hospitalData} />
        </KaKaoMapWrapper>

        <HospitalDetailModal hospitals={hospitalData} dispatch={dispatch} />
      </HospitalWrapper>
    </Wrap>
  )
}

export default HospitalSearch

/*병원찾기 메인 전체 */
const Wrap = styled.div`
  width: 88vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const HospitalTop = styled.div`
  width: 91%;
  height: 100px;
  border-bottom: 4px solid #223359;
  display: flex;
  justify-content: left;
  align-items: end;
  user-select: none;
`

const HospitalTopTitle = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-left: 20px;
  margin-bottom: 20px;
`
/*병원찾기 메인 */
const HospitalWrapper = styled.div`
  width: 1380px;
  height: 800px;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const KaKaoMapWrapper = styled.div`
  width: 600px;
  height: 600px;
  margin-right: 40px;
  border-radius: 16px;
  user-select: none;
`
// const MapSearch = styled.div`
//   width: 720px;
//   height: 600px;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: center;
// `
// const MapSearchInputs = styled.div`
//   border-radius: 8px;
//   padding: 12px;
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   align-items: center;
//   user-select: none;
// `
// const MapSearchImg = styled.div`
//   width: 30px;
//   height: 30px;
//   margin-left: 15px;
//   background-image: url(${ReadingGlasses});
//   background-size: cover;
//   cursor: pointer;
// `

// const MapSearchInput = styled.input`
//   width: 400px;
//   padding: 6px;
//   border: transparent;
//   border-bottom: 1px solid black;
//   font-size: 20px;
//   outline: none;
// `
