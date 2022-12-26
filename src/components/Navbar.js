import React from 'react';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';
import Admin from '../assets/admin.png';

const Navbar = () => {
  return (
   <StyledNav>
       <SearchContainer>
            <SearchBar>
                <Input type="text" />
                <FiSearch />
            </SearchBar>
       </SearchContainer>
        <User>
            <div>
                <Name>Satoshi Nagamoto</Name>
                <Role>Admin</Role>
            </div>
            <Avatar src={Admin} />
        </User>
   </StyledNav>
  )
}

const StyledNav = styled.nav`
width: 100%;
display: flex;
height: 96px;
box-sizing: border-box;
border-bottom: 1px solid var(--mainPurple);
justify-content: center;
align-items: center;
background-color:  #F8F8F8;
padding: 1rem;
@media screen and (max-width: 680px) {
      display: none;
}
`;

const SearchContainer = styled.div`
display: block;
margin: 0 auto;
`;

const SearchBar = styled.div`
background-color: #F2F2F2;
border: 1px solid lightgray;
padding-right:10px;
display: flex;
box-sizing: border-box;
align-items: center;
padding-left: 15px;
    :hover{
        box-shadow: 0px 0px 4px 0px #B5B5B5;
    }

`;

const Input = styled.input`
background-color: #F2F2F2;
flex-grow: 1;
width:30rem;
height: 30px;
margin-right: 15px;
font-size: 16px;
border: none;

    :focus{
        outline: none;
    }
    @media screen and (max-width: 900px) {
        width:20rem;
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