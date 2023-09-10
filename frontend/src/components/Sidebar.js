import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { CgMenuGridO, CgFileDocument } from 'react-icons/cg';
import {BsGrid} from 'react-icons/bs';
import {TbUsers} from 'react-icons/tb';
import icon4 from '../assets/logout-icon.png';
import { NavLink, Link } from 'react-router-dom';

const Sidebar = () => {

    const[display, setDisplay] = useState(true);
    const displayElement = useRef();

    return (
        <Container>
           <div>
                <Menu>
                    <StandageLogo >
                        <h1>Ohms</h1>
                        </StandageLogo>
                    <MobileMenu onClick={()=> setDisplay(!display)}/>
                </Menu>
                <Links>
                    <StyledLink  to="/company" ><BsGrid class="link-icon"/> Dashboard </StyledLink >
                    <StyledLink  to="/company/depts"> <TbUsers class="link-icon"/> Departments </StyledLink >
                    <StyledLink  to="/company/audit-trial"> <CgFileDocument class="link-icon"/> Audit Trial </StyledLink >
                </Links>
                <MobileLinks show={display} >
                    <StyledLink  to="/company/"><BsGrid class="link-icon"/>  Dashboard </StyledLink >
                    <StyledLink  to="/company/depts"> <TbUsers class="link-icon"/>  Departments </StyledLink >
                    <StyledLink  to="/company/audit-trial"> <CgFileDocument class="link-icon"/> Audit Trial </StyledLink >
                </MobileLinks>
           </div>
           <Logout to="/login" show={display}>
           <img src={icon4} alt="dashboard icon" /> 
           <p>Logout</p>
           </Logout>
        </Container>
    );
}

const Container = styled.section`
position: fixed;
display: flex;
flex-direction: column;
box-sizing: border-box;
justify-content: space-between;
font-weight:700;
text-align:center;
padding: 2rem 0;
width:18vw;
height:100vh;
/* background-color:#219ebc; */
background-color:var(--mainGreen);

@media screen and (max-width: 680px) {
    position:relative;
    width: 100%;
    height: max-content !important;
    justify-content: center;
  }
`;

const Menu = styled.div`
 margin-bottom: 30px;
@media screen and (max-width: 680px) {
    display :flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem 2rem;
    margin-bottom: ${(props) => props.show ? "4rem" : 0};
}
`

const MobileMenu = styled(CgMenuGridO)`
display:none;
font-size: 2rem;
color:var(--lightOrange);
@media screen and (max-width: 680px) {
    display: block;
}
`

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
display:flex;
flex-direction: column;
margin: 0 auto;

/* .active{
    width: 10vw;
    margin-right: 5px;
    color: var(--mainOrange);
    justify-self: flex-end;
    align-self: flex-end;
    background-color: var(--lightOrange) !important;
    font-weight: 600;
    padding: 10px 0;
} */

@media screen and (max-width: 680px) {
    margin: 0 auto;  
    display: none;
}
`;

const MobileLinks = styled(Links)`
display: ${(props) => props.show ? "none" : "flex"};
flex-direction: column;
transition: all 0.5s ease-out;
@media screen and (min-width: 681px) { 
    display: none;
}
`

const StyledLink = styled(NavLink)`
font-size: 0.8rem;
text-decoration: none;
color:var(--lightOrange);
margin-top: 3rem;
width: 100%;

.link-icon{
    margin-right: 1rem;
}

:last-child{
margin-left: -0.5rem;
}
`

const Logout = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
background-color: var(--lightOrange);
width: 10vw;
padding: 10px;
/* color:var(--lightOrange); */
font-size: 0.9rem;

img{
    object-fit: contain;
    margin-right: 1rem;
}

@media screen and (max-width: 680px) {
    margin-top: 4rem;
    display: ${(props) => props.show ? "none" : "flex"};
}
`


export default Sidebar;