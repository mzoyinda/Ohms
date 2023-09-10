import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';



const NewCustomer = () => {
    let {id} = useParams();

    const[department, setDepartment] = useState('');

    useEffect(() => {
    setDepartment(id.slice(1));
    }, [department])

    return (
        <Form>
            <ArrowContainer to={`/company/depts/:${department}`}>
                <ArrowIcon/></ArrowContainer>
            <Header>
            <h2>Add New {department} Customer</h2>
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
    );
}
const Form = styled.div`
width:50%;
height: 100vh;
margin-left: 5rem;
p{
    color: var(--fontColor);
    margin-bottom: 0.3rem;
}
input{
    outline: none;
    width: 95%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #fff;
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



export default NewCustomer;