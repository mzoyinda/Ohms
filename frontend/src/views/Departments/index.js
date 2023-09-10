import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import {Outlet} from 'react-router-dom'


const Departments = () => {

    return (
        <div>
            <Sidebar/>
            <Main>
                <Navbar/>
                <Container>
                   <Outlet/>
                </Container>
            </Main>
        </div>
    );
}

const Main = styled.div`
margin-left: 18vw;
height: 100%;
padding-bottom: 10rem;
background-color: #f8f8f8;
@media screen and (max-width: 680px) {
    margin-left: 0;
}
`

const Container = styled.main`
margin-top:2rem;
@media screen and (max-width: 680px) {
    margin-top: 0;
}
`



export default Departments;