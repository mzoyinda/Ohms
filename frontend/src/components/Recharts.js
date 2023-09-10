import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';

import { PieChart, Pie, Cell} from 'recharts';

const data = [
  { name: 'Group A', value: 200 },
  { name: 'Group B', value: 700 }
];
const COLORS = ['#FFE5D3', '#FF3A29' ];

const Dashboard = () => {
    return (
        <div>
            <Sidebar/>
            <Main>
                <Navbar/>
                <Container>
                    <Card>
                        <CardHeader>
                            <p>Users Count</p> 
                            <BsThreeDots className='three-dots'/>
                        </CardHeader>
                        <PieChart className='pie-chart' width={250} height={300}>
                            <Pie
                            data={data}
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                        </PieChart>
                        <Label>
                            <div>
                                <p className='dot'></p>
                                <p>Admin</p>
                            </div>
                            <div>
                                <p className='member'></p>
                                <p >Member</p>
                            </div>
                        </Label>
                    </Card>
                </Container>
            </Main>
        </div>
    );
}

const Main = styled.div`
margin-left: 18vw;
background-color: #f8f8f8;
@media screen and (max-width: 680px) {
    margin-left: 0;
}
`

const Container = styled.main`
margin-top:2rem;
display: flex;
box-sizing: border-box;
padding: 2rem;
@media screen and (max-width: 680px) {
    margin-top: 0;
}
`;

const Card = styled.div`
background-color: white;
height: max-content;
padding: 1rem;

p{
    font-weight: 700;
}
`;

const CardHeader = styled.div`
display: flex;
justify-content: space-between;

.three-dots{
    color: gray;
}
`;

const Label = styled.div`
display: flex;
p{
    font-weight: 700;
    font-size: 0.7rem;
}
div{
    display: flex;
    align-items :center ;
}
div+div{
    margin-left:3rem;
}
.dot, .member{
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 0.3rem;
    background-color: #FF3A29;
}
.member{
    background-color: #FFE5D3;
}

`;

export default Dashboard;