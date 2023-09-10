import React from 'react';
import styled from 'styled-components';
import {Outlet} from 'react-router-dom'


const Departments = () => {

    return (
        <Container>
            <Outlet/>
        </Container>
    );
}

const Container = styled.main`
margin-top:2rem;
@media screen and (max-width: 680px) {
    margin-top: 0;
}
`



export default Departments;