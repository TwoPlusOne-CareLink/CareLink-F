import React from "react"
import { useState } from "react"
import { Map, MapMarker } from "react-kakao-maps-sdk"
import { styled } from "styled-components"

function HospitalMap({ lat, lng, name, tel }) {
  const [hospitalMapOpen, setHospitalMapOpen] = useState(false)

  const hospitalMapOpenToggle = () => {
    setHospitalMapOpen(!hospitalMapOpen)
  }

  return (
    <Map
      center={{
        lat: lat,
        lng: lng,
      }}
      style={{
        width: "400px",
        height: "450px",
        borderRadius: "16px",
      }}
      level={3}
    >
      <MapMarker
        position={{
          lat: lat,
          lng: lng,
        }}
        clickable={true}
        onMouseOver={() => setHospitalMapOpen(true)}
        onMouseOut={() => setHospitalMapOpen(false)}
      >
        {hospitalMapOpen && (
          <MapInfo>
            <MapTextTel>
              <MapText>{name}</MapText>
              <MapTel>{tel}</MapTel>
            </MapTextTel>
          </MapInfo>
        )}
      </MapMarker>
    </Map>
  )
}

export default HospitalMap
const MapInfo = styled.div`
  min-width: 180px;
  min-height: 40px;
  padding: 10px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.2);
  background-color: white;
  top: -30%;
  left: 0;
  transform: translate(-11%, -54%);
  position: absolute;
  z-index: 1;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const MapImg = styled.div`
  width: 11px;
  height: 11px;

  cursor: pointer;
`
const MapTextTel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
`

const MapText = styled.div`
  padding: 3px;
`
const MapTel = styled.div`
  padding: 3px;
`
