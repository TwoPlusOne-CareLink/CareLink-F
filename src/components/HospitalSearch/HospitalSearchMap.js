import { Map, MapMarker } from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"

export default function HospitalSearchMap() {
  useKakaoLoader()
  const [isOpen, setIsOpen] = useState(false)

  const isOpenToggle = (latlng) => {
    setIsOpen(isOpen === latlng ? !isOpen : latlng)
  }

  const [hospital, setHospital] = useState([
    {
      hospitalId: 1,
      name: "하늘하늘병원",
      address: "서울특별시 강동구 강동로 하늘하늘병원 111",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      latlng: { lat: "33.450705", lng: "126.570677" },
      tel: "02-4786-7835",
    },
    {
      hospitalId: 2,
      name: "나풀나풀나풀나풀병원",
      address: "서울특별시 강동구 강동로 나풀나풀나풀나풀병원",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      latlng: { lat: "33.450936", lng: "126.569477" },
      tel: "02-489-7898",
    },
    {
      hospitalId: 3,
      name: "하늘병원",
      address: "서울특별시 강동구 강동로 하늘병원 111",
      weekdayOpeningTime: "09:00 ~ 19:00",
      weekendOpeningTime: "09:00 ~ 14:00",
      lunchHour: "13:00 ~ 14:00",
      holidayCheck: "휴무",
      latlng: { lat: "33.450879", lng: "126.56994" },
      tel: "02-1234-7111",
    },
  ])

  return (
    <Map
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        width: "600px",
        height: "600px",
        borderRadius: "16px",
        zIndex: "0",
      }}
      level={3}
    >
      {hospital.map((item) => (
        <MapMarker
          key={`${item.name}-${item.latlng}`}
          position={item.latlng}
          onClick={() => isOpenToggle(item.latlng)}
        >
          {isOpen === item.latlng && (
            <MapInfo>
              <MapTextTel>
                <MapText>{item.name}</MapText>
                <MapTel>{item.tel}</MapTel>
              </MapTextTel>
              <MapImg alt="close" onClick={isOpenToggle} />
            </MapInfo>
          )}
        </MapMarker>
      ))}
    </Map>
  )
}

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
  background-image: url(${CloseBtn});
  background-size: cover;
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
