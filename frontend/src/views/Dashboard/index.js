import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import { BsThreeDots } from 'react-icons/bs';

import Chart from "react-apexcharts";
import ReactApexChart from 'react-apexcharts';


const DonutState = {
    series: [70, 20],
    options: {
        chart: {
            width: 380,
            type: 'donut',
        },
        labels: ["Admin", "User"],
        responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }],
        colors: ['#FF3A29','#FFE5D3'],
    markers: {
        colors: ['#FF3A29','#FFE5D3']
     },
      fill: {
        colors: ['#FF3A29','#FFE5D3']
      }
    }
  };


  const PieChartState = {       
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Laptops', 'Suzuki Every', 'Phone', 'Hiace', 'Kaminomoto'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  };

  const BarState ={
    series: [{
        data: [100, 230, 348, 470, 540]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['Laptops', 'Suzuki Every', 'Phone', 'Hiace', 'Kaminomoto'
          ],
        }
      },
  }

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
                        <Chart
                            options={DonutState.options}
                            series={DonutState.series}
                            type="donut" 
                            width="380"
                            
                        />
                    </Card>
                    <Card>
                        <CardHeader>
                            <p>All Customers</p> 
                            <BsThreeDots className='three-dots'/>
                        </CardHeader>
                        <ReactApexChart
                        options={PieChartState.options} 
                        series={PieChartState.series} 
                        type="pie" width={380} 
                        
                        />
                    </Card>
                    <Card>
                        <CardHeader>
                            <p>All Departments</p> 
                            <BsThreeDots className='three-dots'/>
                        </CardHeader>
                        <div id="id">
                            <ReactApexChart 
                            options={BarState.options} 
                            series={BarState.series} 
                            type="bar" 
                            height={350} 
                            />
                        </div>
                    </Card>
                    <Card>
                        <CardHeader>
                            <p>Text</p> 
                            <BsThreeDots className='three-dots'/>
                        </CardHeader>
                        <ReactApexChart
                        options={PieChartState.options} 
                        series={PieChartState.series} 
                        type="pie" width={380} 
                        
                        />
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
margin:2rem auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
box-sizing: border-box;
padding: 2rem;
@media screen and (max-width: 680px) {
    margin-top: 0;
}
`;

const Card = styled.div`
background-color: white;
/* width: 55vw;
height: 50vh; */
padding: 1rem;
margin-left: 1rem;
margin-top: 1rem;


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


export default Dashboard;