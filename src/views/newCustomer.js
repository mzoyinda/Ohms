import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';



const NewDepartment = () => {
    return (
        <div>
            <Sidebar/>
            <Main>
               <Form>
            <ArrowContainer to="/departments"><ArrowIcon/></ArrowContainer>
              <Header>
              <h2>Add New Customer</h2>
              </Header>
                <div>
                    <p>Customer Name</p>
                    <input type="text"/>
                </div>
                <div>
                    <p>Email Address</p>
                    <input type="email"/>
                </div>
                <div>
                    <p>Phone Number</p>
                    <input type="tel"  className='phone'/>
                </div>
                <ButtonContainer>
                    <button>Add</button>
                </ButtonContainer>
               </Form>
            </Main>
        </div>
    );
}

const Main = styled.main`
background-color: white;
display:flex;
width:100%;
height: 100vh;
@media screen and (max-width: 680px) {
    margin-left: 0;
}
`

const Header = styled.div`
font-weight: 700;
font-size: 0.7rem;
margin-bottom: 3rem;
margin-top: 1rem;
h2{
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
}
`;

const ArrowContainer = styled(Link)`
color:black;
`

const ArrowIcon = styled(BsArrowLeft)`
background-color: white;
padding: 10px;
`;

const Form = styled.div`
margin: auto;
width: 50%;
p{
    color: var(--fontColor);
    margin-bottom: 0.3rem;
}
input{
    outline: none;
    width: 95%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    margin-bottom:2rem;
}

.phone{
    margin-bottom:0;
}

input:focus, textarea:focus{
    outline: none;
    box-shadow: 0px 0px 4px 0px #B5B5B5;
}


textarea{
    width: 100%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    resize: none;
}
`;

const ButtonContainer = styled.div`
display: block;
text-align: right;
margin-top:1rem;
button{
    background-color: var(--mainBlue);
    padding: 1rem 5.5rem;
    cursor: pointer;
    border:none;
    color: white;
}
`



export default NewDepartment;