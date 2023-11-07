import React from "react"
import styled, { css } from "styled-components"
import useDetectClose from "../../hooks/useDetectClose"
import { useNavigate } from "react-router-dom"

function MainNav() {
  const navigate = useNavigate()

  const [cunsultingIsOpen, cunsultingRef, cunsultingHandler] =
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

  const GoToCunsulting = () => {
    navigate("/cunsulting")
  }

  const GoToCunsultingHistory = () => {
    navigate("/cunsultinghistory")
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
              <NavMenuItemTitle onClick={cunsultingHandler} ref={cunsultingRef}>
                비대면 상담
              </NavMenuItemTitle>
              <NavMenuItemContents isDropped={cunsultingIsOpen}>
                <Ul>
                  <Li>
                    <Link onClick={GoToCunsulting}>비대면 상담</Link>
                  </Li>
                  <Li>
                    <Link onClick={GoToCunsultingHistory}>나의 상담내역</Link>
                  </Li>
                </Ul>
              </NavMenuItemContents>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={healthHandler} ref={healthRef}>
                헬스케어
              </NavMenuItemTitle>
              <NavMenuItemContents isDropped={healthIsOpen}>
                <Ul>
                  <Li>
                    <Link>체크리스트 작성</Link>
                  </Li>
                  <Li>
                    <Link>체크리스트 작성내역</Link>
                  </Li>
                </Ul>
              </NavMenuItemContents>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle>질병백과</NavMenuItemTitle>
            </NavMenuItem>
            <NavMenuItem>
              <NavMenuItemTitle onClick={myPageHandler} ref={myPageRef}>
                마이페이지
              </NavMenuItemTitle>
              <NavMenuItemContents isDropped={myPageIsOpen}>
                <Ul>
                  <Li>
                    <Link>회원정보수정</Link>
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
  height: 910px;
  background-color: #223359;
  color: white;
`

const NavBarHeader = styled.div`
  width: 250px;
  height: 142px;
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
  width: 250px;
  height: 675px;
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
// const NavMenuItemContent = styled.li`
//   border: 1px solid black;
// `

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
  height: 93px;
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
