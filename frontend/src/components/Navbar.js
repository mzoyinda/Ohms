import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Admin from '../assets/admin.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const Navigate = useNavigate();

  return (
   <StyledNav>
    
        <User>
            <div>
                <Name>Satoshi Nagamoto</Name>
                <Role>Admin</Role>
            </div>
            <Avatar src={Admin} />
        </User>
        <button onClick={()=> Navigate("/login")}>Logout</button>
   </StyledNav>
  )
}

const StyledNav = styled.nav`
width: 100%;
display: flex;
gap: 40px;
height: 96px;
box-sizing: border-box;
border-bottom: 2px solid var(--mainOrange);
justify-content: flex-end;
align-items: center;
/* background-color: var(--mainOrange); */
padding: 1rem;

button {
      /* width: 156px; */
      background-color: var(--mainGreen);
      color: white;
      font-size: 14px;
      padding: 13px 30px;
      margin-right: 20px;
      border-radius: 10px;
      border: transparent;
      &:hover {
        box-shadow: 0px 2px 10px 5px white;
        cursor: pointer;
      }
    }
@media screen and (max-width: 680px) {
      display: none;
}
`;

const User = styled.div`
text-align:right;
display: flex;
width: max-content;
justify-content: flex-end;
/* box-sizing: border-box; */
align-items: center;
`;
const Name = styled.p`
color:var(--mainBlue);
font-weight: 700;
font-size: 0.8rem;
`
const Role = styled.p`
font-size: 0.7rem;
`
const Avatar = styled.img`
margin-left:10px;
width: 2.5rem;
border: 1px solid var(--mainBlue);
object-fit: cover;
border-radius: 50%;
padding: 2px;
`

export default Navbar