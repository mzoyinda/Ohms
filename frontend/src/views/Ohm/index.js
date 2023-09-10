import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Main>
                <Navbar/>
                <Outlet/>
            </Main>
        </div>
    );
}

const Main = styled.div`
margin-left: 18vw;
background-color: var(--lightOrange);
@media screen and (max-width: 680px) {
    margin-left: 0;
}
`



export default Dashboard;