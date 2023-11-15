import React from "react"
import styled, { css } from "styled-components"
import useDetectClose from "../../hooks/useDetectClose"
import { useNavigate } from "react-router-dom"

function MainNav() {
  const navigate = useNavigate()

  const [ConsultingIsOpen, ConsultingRef, ConsultingHandler] =
    useDetectClose(false)
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false)
  const [healthIsOpen, healthRef, healthHandler] = useDetectClose(false)

  const GoToMain = () => {
    navigate("/")
  }

  const GoToLogout = () => {
    navigate("/")
  }

  const GoToHospitalSearch = () => {
    navigate("/hospitalsearch")
  }

  const GoToConsulting = () => {
    navigate("/consulting")
  }

  const GoToConsultingHistory = () => {
    navigate("/consultinghistory")
  }

  const GoToHealthCheck = () => {
    navigate("/healthcheck")
  }

  const GoToUserInfo = () => {
    navigate("/userinfoupdate")
  }

  return (
    <Wrap>
      <NavWrapper>
        <NavBarHeader>
          <NavBarTitle onClick={GoToMain}>CareLink</NavBarTitle>
        </NavBarHeader>
        <NavBody>
          <NavMenu>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToHospitalSearch}>
                병원 찾기
              </NavMenuItemTitle>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={ConsultingHandler} ref={ConsultingRef}>
                비대면 상담
              </NavMenuItemTitle>
              <NavMenuItemContents isDropped={ConsultingIsOpen}>
                <Ul>
                  <Li>
                    <Link onClick={GoToConsulting}>비대면 상담</Link>
                  </Li>
                  <Li>
                    <Link onClick={GoToConsultingHistory}>나의 상담내역</Link>
                  </Li>
                </Ul>
              </NavMenuItemContents>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={GoToHealthCheck}>
                헬스케어
              </NavMenuItemTitle>
            </NavMenuItem>
            {/* <NavMenuItem>
              <NavMenuItemTitle>질병백과</NavMenuItemTitle>
            </NavMenuItem> */}
            <NavMenuItem>
              <NavMenuItemTitle onClick={myPageHandler} ref={myPageRef}>
                마이페이지
              </NavMenuItemTitle>
              <NavMenuItemContents isDropped={myPageIsOpen}>
                <Ul>
                  <Li>
                    <Link onClick={GoToUserInfo}>회원정보수정</Link>
                  </Li>
                  <Li>
                    <Link>회원탈퇴</Link>
                  </Li>
                </Ul>
              </NavMenuItemContents>
            </NavMenuItem>
          </NavMenu>
        </NavBody>
        <NavFooter>
          <NavLogout onClick={GoToLogout}>로그아웃</NavLogout>
        </NavFooter>
      </NavWrapper>
    </Wrap>
  )
}

export default MainNav

const Wrap = styled.div`
  width: 15vw;
  height: 100vh;
`
const NavWrapper = styled.div`
  width: 250px;
  height: 100%;
  background-color: #223359;
  color: white;
  z-index: 1;
  position: absolute;
`

const NavBarHeader = styled.div`
  width: 250px;
  /* height: 142px; */
  height: 15%;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
`
const NavBarTitle = styled.div`
  font-size: 40px;
  cursor: pointer;
`

const NavBody = styled.div`
  width: 100%;
  /* height: 675px; */
  height: 75%;

  margin-bottom: auto;
`

const NavMenu = styled.div``

const NavMenuItem = styled.div`
  width: 220px;
  height: 50px;
  padding: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  position: relative;
`

const NavMenuItemTitle = styled.button`
  font-size: 30px;
  border: transparent;
  background-color: #223359;
  color: white;
  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
const NavMenuItemContents = styled.div`
  position: absolute;
  left: 100%;
  border: 1px solid #dcdcdc;
  box-shadow: 8px 4px 62px 2px rgba(0, 0, 0, 0.1);
  background-color: white;
  width: 200px;
  border-radius: 12px;
  opacity: 0;
  visibility: hidden;
  transform: translate(5%, 0);
  transition: opacity 0.4 ease, transform 0.4s ease, visibility 0.4s;
  z-index: 9;

  ${({ isDropped }) =>
    isDropped &&
    css`
      opacity: 1;
      visibility: visible;
      transform: translate(50%, 0);
      left: 70%;
    `};
`
const Ul = styled.ul`
  & > li {
    margin-bottom: 20px;
  }

  & > li:first-of-type {
    margin-top: 20px;
  }

  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`
const Li = styled.li`
  text-align: center;
`

const Link = styled.span`
  font-size: 20px;
  padding: 10px;
  text-decoration: none;
  color: black;

  &:hover {
    cursor: pointer;
    font-weight: 600;
  }
`

const NavFooter = styled.div`
  width: 250px;
  /* height: 93px; */
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const NavLogout = styled.span`
  font-size: 30px;
  user-select: none;

  &:hover {
    font-weight: 600;
    cursor: pointer;
  }
`
