import React from "react"
import DaumPostcode from "react-daum-postcode"
import styled from "styled-components"

function SearchAddress(props) {
  const handleComplete = (data) => {
    let fullAddress = data.address
    let extraAddress = ""
    // console.log(data);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname
      }
      if (data.buildingName !== "") {
        extraAddress +=
          extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : ""
    }

    console.log(fullAddress) // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  }

  const handleSearch = (data) => {
    // console.log(data);
  }

  return (
    <DaumPostcode
      onComplete={handleComplete}
      onSearch={handleSearch}
      {...props}
    />
  )
}

export default SearchAddress

SearchAddress.defaultProps = {
  style: {
    width: "700px",
    height: "450px",
  },
}

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`
const Search = styled.div`
  width: 800px;
  height: 800px;
  border: 1px solid black;
  margin: auto;
`
