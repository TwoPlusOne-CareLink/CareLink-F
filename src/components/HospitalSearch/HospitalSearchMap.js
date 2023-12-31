import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
} from "react-kakao-maps-sdk"
import useKakaoLoader from "./useKakaoLoader"
import { useEffect, useState } from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"
import { useDispatch } from "react-redux"
import { __getHospitalInfo } from "../../redux/modules/hospitalSlice"

export default function HospitalSearchMap({ hospital }) {
  useKakaoLoader()
  const dispatch = useDispatch()
  const [isOpen, setIsOpen] = useState(false)

  const [state, setState] = useState({
    center: {
      lat: 37.480187,
      lng: 126.883065,
    },
    errMsg: null,
    isLoading: true,
  })
  const [data, setData] = useState()
  const isOpenToggle = (latlng) => {
    setIsOpen(isOpen === latlng ? !isOpen : latlng)
  }

  useEffect(() => {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            },
            isLoading: false,
          }))
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }))
        }
      )
    } else {
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할 수 없어요...",
        isLoading: false,
      }))
    }
  }, [])

  return (
    <Map
      center={state.center}
      style={{
        width: "600px",
        height: "600px",
        borderRadius: "16px",
        zIndex: "0",
      }}
      level={6}
    >
      <MapTypeControl position={"TOPRIGHT"} />
      <ZoomControl position={"RIGHT"} />
      {hospital &&
        hospital.map((item) =>
          item && item.latlng ? (
            <MapMarker
              key={`${item.name}-${item.latlng.lat}-${item.latlng.lng}`}
              position={item.latlng}
              onClick={() => isOpenToggle(item.latlng)}
            >
              {isOpen === item.latlng && (
                <MapInfo>
                  <MapTextTel>
                    <MapText>{item.hospitalName}</MapText>
                    <MapTel>{item.tel}</MapTel>
                  </MapTextTel>
                  <MapImg alt="close" onClick={isOpenToggle} />
                </MapInfo>
              )}
            </MapMarker>
          ) : null
        )}
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
