import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Admin from '../assets/admin.png';

const Navbar = () => {
  return (
   <StyledNav>
    
        <User>
            <div>
                <Name>Satoshi Nagamoto</Name>
                <Role>Admin</Role>
            </div>
            <Avatar src={Admin} />
        </User>
        <button>Logout</button>
   </StyledNav>
  )
}

const StyledNav = styled.nav`
width: 100%;
display: flex;
gap: 20px;
height: 96px;
box-sizing: border-box;
border-bottom: 2px solid var(--mainOrange);
justify-content: flex-end;
align-items: center;
/* background-color: var(--mainOrange); */
padding: 1rem;
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