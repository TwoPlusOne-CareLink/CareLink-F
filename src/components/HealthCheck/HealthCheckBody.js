// import React, { useEffect, useState } from "react"
// import { useDispatch } from "react-redux"
// import { styled } from "styled-components"
// import {
//   __addHealthCheck,
//   __getHealthCheckInfo,
// } from "../../redux/modules/healthCheckSlice"

// function HealthCheckBody() {

//   return (
//     // <HealthCheckFormBody>
//     //   <HealthCheckForm>
//     //     <HealthCheckFormContents>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>이름</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="memberName"
//     //           type="text"
//     //           maxLength="6"
//     //           value={memberData?.memberName}
//     //           placeholder="이름 입력"
//     //           onChange={onChangeMemberName}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>성별</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="gender"
//     //           type="text"
//     //           maxLength="2"
//     //           placeholder="성별 입력"
//     //           value={memberData?.gender}
//     //           onChange={onChangeGender}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>나이</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="age"
//     //           type="number"
//     //           maxLength="3"
//     //           value={memberData?.age}
//     //           placeholder="나이 입력"
//     //           onChange={onChangeAge}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>신장</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="height"
//     //           type="number"
//     //           maxlength="6"
//     //           placeholder="키 입력"
//     //           onChange={onChangeHeight}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>체중</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="weight"
//     //           type="number"
//     //           maxlength="3"
//     //           placeholder="몸무게 입력"
//     //           onChange={onChangeWeight}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>심박수</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="heartRate"
//     //           type="number"
//     //           maxlength="3"
//     //           placeholder="심박수 입력"
//     //           onChange={onChangeHeartRate}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>혈당</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="bloodSugar"
//     //           type="number"
//     //           maxlength="3"
//     //           placeholder="혈당수치 입력"
//     //           onChange={onChangeBloodSugar}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>수축혈압</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="systolicBloodPressure"
//     //           type="number"
//     //           maxlength="3"
//     //           placeholder="수축혈압수치 입력"
//     //           onChange={onChangeSystolicBloodPressure}
//     //         />
//     //       </HealthCheckFormContent>
//     //       <HealthCheckFormContent>
//     //         <HealthCheckContentTitle>이완혈압</HealthCheckContentTitle>
//     //         <HealthCheckContentInput
//     //           id="relaxationBloodPressure"
//     //           type="number"
//     //           maxlength="3"
//     //           placeholder="이완혈압수치 입력"
//     //           onChange={onChangeRelaxationBloodPressure}
//     //         />
//     //       </HealthCheckFormContent>
//     //     </HealthCheckFormContents>
//     //     <HealthCheckFormTexts>
//     //       <HealthCheckFormTextTitle>작성내용</HealthCheckFormTextTitle>
//     //       <HealthCheckFormText
//     //         id="healthMemo"
//     //         onChange={onChangeHealthMemo}
//     //         placeholder="상세 내역을 입력해주세요"
//     //       />
//     //     </HealthCheckFormTexts>
//     //   </HealthCheckForm>

//     //   <HealthCheckFormBtns>
//     //     <HealthCheckFormBtn onClick={checkListSubmit}>
//     //       작성하기
//     //     </HealthCheckFormBtn>
//     //   </HealthCheckFormBtns>
//     // </HealthCheckFormBody>
//   )
// }

// export default HealthCheckBody
