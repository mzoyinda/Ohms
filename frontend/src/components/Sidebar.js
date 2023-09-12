import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { CgMenuGridO, CgFileDocument } from "react-icons/cg";
import { GrUserManager } from "react-icons/gr";
import { BsGrid } from "react-icons/bs";
import { TbUsers } from "react-icons/tb";
import { NavLink, Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [display, setDisplay] = useState(true);
  const [isActive, setIsActive] = useState("");

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  useEffect(() => {
    setIsActive(splitLocation[2]);
    console.log(isActive);
  }, [isActive, splitLocation]);

  return (
    <Container>
      <Menu>
        <StandageLogo>
          <h1>Ohms</h1>
        </StandageLogo>
        <MobileMenu onClick={() => setDisplay(!display)} />
      </Menu>
      <Links>
        <StyledLink to="/company" end>
          <BsGrid class="link-icon" /> Dashboard{" "}
        </StyledLink>
        <StyledLink to="/company/depts">
          {" "}
          <TbUsers class="link-icon" /> Departments{" "}
        </StyledLink>
        <StyledLink to="/company/audit-trial">
          {" "}
          <CgFileDocument class="link-icon" /> Audit Trial{" "}
        </StyledLink>
        <StyledLink to="/company/manage-admin">
          <GrUserManager class="link-icon" /> Manage Admin
        </StyledLink>
      </Links>
      <MobileLinks show={display}>
        <StyledLink to="/company">
          <BsGrid class="link-icon" /> Dashboard{" "}
        </StyledLink>
        <StyledLink to="/company/depts">
          {" "}
          <TbUsers class="link-icon" /> Departments{" "}
        </StyledLink>
        <StyledLink to="/companyaudit-trial">
          {" "}
          <CgFileDocument class="link-icon" /> Audit Trial{" "}
        </StyledLink>
        <StyledLink to="/company/manage-admin">
          <GrUserManager class="link-icon" /> Manage Admin
        </StyledLink>
      </MobileLinks>
    </Container>
  );
};

const Container = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  gap: 40px;
  font-weight: 700;
  text-align: center;
  padding: 2rem 0;
  width: 18vw;
  height: 100vh;
  /* background-color:#219ebc; */
  background-color: var(--mainGreen);

  @media screen and (max-width: 680px) {
    position: relative;
    width: 100%;
    height: max-content !important;
    justify-content: center;
  }
`;

const Menu = styled.div`
  margin-bottom: 30px;
  @media screen and (max-width: 680px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 2rem;
    margin-bottom: ${(props) => (props.show ? "4rem" : 0)};
  }
`;

const MobileMenu = styled(CgMenuGridO)`
  display: none;
  font-size: 2rem;
  color: var(--lightOrange);
  @media screen and (max-width: 680px) {
    display: block;
  }
`;

const StandageLogo = styled.div`
  color: var(--lightOrange);
  h1 {
    font-size: 20px !important;
    font-weight: 700;
    line-height: 28px;
    text-align: center;
  }
  :hover {
    cursor: pointer;
    color: var(--lightOrange) !important;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  .active {
    color: var(--mainOrange);
    background-color: white;
    padding: 10px 12px;
    font-weight: 600;
  }

  @media screen and (max-width: 680px) {
    margin: 0 auto;
    display: none;
  }
`;

const MobileLinks = styled(Links)`
  display: ${(props) => (props.show ? "none" : "flex")};
  flex-direction: column;
  transition: all 0.5s ease-out;
  @media screen and (min-width: 681px) {
    display: none;
  }
`;

const StyledLink = styled(NavLink)`
  font-size: 0.8rem;
  text-decoration: none;
  color: var(--lightOrange);
  margin-top: 3rem;
  /* width: 100%; */

  .link-icon {
    margin-right: 1rem;
  }

  :last-child {
    margin-left: -0.5rem;
  }
`;

export default Sidebar;
