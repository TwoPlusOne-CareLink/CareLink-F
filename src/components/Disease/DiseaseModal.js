import React from "react"
import { styled } from "styled-components"
import CloseBtn from "../../assets/images/XBtn.png"

function DiseaseModal({
  disease,
  searchName,
  diseaseToggle,
  selectedDisease,
  setSelectedDisease,
  diseaseDetail,
}) {
  const filtered =
    disease &&
    disease.filter((itemList) => {
      return itemList.diseaseName
        .toUpperCase()
        .includes(searchName.toUpperCase())
    })

  return (
    <DiseaseSearchLists>
      {filtered &&
        filtered.map((item) => (
          <DiseaseSearchResult
            key={item.diseaseId}
            onClick={() => diseaseToggle(item.diseaseId)}
          >
            <DiseaseSearchResultName>
              {item.diseaseName}
            </DiseaseSearchResultName>
          </DiseaseSearchResult>
        ))}

      {selectedDisease && (
        <DiseaseModalWrap>
          <DiseaseModalOverlay>
            <DiseaseModalContent>
              {diseaseDetail &&
                diseaseDetail.map((item) => (
                  <DiseaseModalContents key={item.diseaseId}>
                    <DiseaseModalHeaders>
                      <DiseaseModalHeader>
                        <DiseaseModalHeaderTitles>
                          <DiseaseModalHeaderTitle>
                            {item.diseaseName}
                          </DiseaseModalHeaderTitle>
                        </DiseaseModalHeaderTitles>
                        <DiseaseModalHeaderCloseBtn
                          onClick={() => setSelectedDisease(!selectedDisease)}
                        />
                      </DiseaseModalHeader>
                      <DiseaseModalIntroduction disabled>
                        {item.definition}
                      </DiseaseModalIntroduction>
                    </DiseaseModalHeaders>
                    <DiseaseModalBody>
                      <DiseaseModalBodyInfos>
                        <DiseaseInfoHeader>질병정보</DiseaseInfoHeader>
                        <DiseaseInfos>
                          <DiseaseInfo>
                            <DiseaseInfoTitle>원인</DiseaseInfoTitle>
                            <DiseaseInfoText disabled>
                              {item.cause}
                            </DiseaseInfoText>
                          </DiseaseInfo>
                          <DiseaseInfo>
                            <DiseaseInfoTitle>증상</DiseaseInfoTitle>
                            <DiseaseInfoText disabled>
                              {item.symptom}
                            </DiseaseInfoText>
                          </DiseaseInfo>
                          <DiseaseInfo>
                            <DiseaseInfoTitle>진단</DiseaseInfoTitle>
                            <DiseaseInfoText disabled>
                              {item.diagnosis}
                            </DiseaseInfoText>
                          </DiseaseInfo>
                          <DiseaseInfo>
                            <DiseaseInfoTitle>치료</DiseaseInfoTitle>
                            <DiseaseInfoText disabled>
                              {item.treatment}
                            </DiseaseInfoText>
                          </DiseaseInfo>
                        </DiseaseInfos>
                      </DiseaseModalBodyInfos>
                    </DiseaseModalBody>
                  </DiseaseModalContents>
                ))}
            </DiseaseModalContent>
          </DiseaseModalOverlay>
        </DiseaseModalWrap>
      )}
    </DiseaseSearchLists>
  )
}

export default DiseaseModal

const DiseaseSearchLists = styled.div`
  width: 850px;
  height: 600px;
  margin-top: 20px;
  padding: 10px;
  border: transparent;
  border-radius: 16px;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: white;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #223359;
    border-radius: 4px;
  }
`

const DiseaseSearchResult = styled.div`
  width: 800px;
  height: 30px;
  padding: 10px;
  margin: 10px auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background-color: #223359;
    color: white;
  }
`
const DiseaseSearchResultName = styled.span`
  font-size: 30px;
`
const DiseaseModalWrap = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
`
const DiseaseModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 49, 49, 0.8);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`
const DiseaseModalContent = styled.div`
  width: 1070px;
  height: 760px;
  border-radius: 16px;
  background-color: white;
  top: 10%;
  left: 10%;
  transform: translate(23%, 0);
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const DiseaseModalContents = styled.div`
  /* background-color: white; */
`

const DiseaseModalHeaders = styled.div`
  width: 1050px;
  height: 190px;
`

const DiseaseModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const DiseaseModalHeaderTitles = styled.div`
  width: 980px;
  padding: 10px;
  margin-left: 10px;
`

const DiseaseModalHeaderTitle = styled.span`
  border-bottom: 1.5px solid black;
  font-size: 25px;
  font-weight: 600;
`
const DiseaseModalHeaderCloseBtn = styled.div`
  width: 20px;
  height: 20px;
  background-image: url(${CloseBtn});
  background-size: cover;
  cursor: pointer;
`

const DiseaseModalIntroduction = styled.textarea`
  width: 1000px;
  height: 100px;
  /* margin-top: 5px; */
  margin: 5px auto 0 13px;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  background-color: #4dc9c2;
  color: white;
  font-size: 16px;
  outline: none;
  resize: none;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }

  &::-webkit-scrollbar-track {
    /* background-color: white; */
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid #4dc9c2;
    background-color: white;
    border-radius: 4px;
  }
`

const DiseaseModalBody = styled.div`
  width: 1050px;
  height: 520px;
`
const DiseaseModalBodyInfos = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
`
const DiseaseInfoHeader = styled.span`
  width: 100px;
  margin-left: 10px;
  border-bottom: 1.5px solid black;
  font-size: 25px;
  font-weight: 600;
  text-align: center;
`
const DiseaseInfos = styled.div`
  height: 470px;
  margin-top: 13px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(48%, auto));
  gap: 12px;
`
const DiseaseInfo = styled.div``
const DiseaseInfoTitle = styled.span`
  margin-left: 12px;
  margin-bottom: 10px;
  border-bottom: 1.5px solid black;
  font-size: 20px;
  font-weight: 600;
`
const DiseaseInfoText = styled.textarea`
  width: 480px;
  height: 180px;
  margin: auto;
  padding: 10px;
  border: transparent;
  border-radius: 12px;
  background-color: #223359;
  font-size: 16px;
  color: white;
  outline: none;
  resize: none;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border: 1px solid #223359;
    background-color: white;
    border-radius: 4px;
  }
`
