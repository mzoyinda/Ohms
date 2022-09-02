import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import {Link} from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai';
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import Avatar3 from '../assets/avatar3.png';
import Avatar4 from '../assets/avatar4.png';
import Avatar5 from '../assets/avatar5.png';


const data = [
    {
        name: "Laptops",
        link:"/"
    },
    {
        name: "Suzuki Every",
        link:"/"
    },
    {
        name: "Phones",
        link:"/"
    },
      
    {
        name: "Hiace Bus",
        link:"/"
    },
    {
        name: "Kaminomoto",
        link:"/"
    },
    {
        name: "Technicians",
        link:"/"
    },
]

const Departments = () => {

    return (
        <div>
            <Sidebar/>
            <Main>
                <Navbar/>
                <Container>
                    <ButtonContainer>
                    <StyledLink to ="/add-department">Add New Department</StyledLink>
                      
                    </ButtonContainer>
                    <CardSection>
                        {data.map((department) => (
                        <Card>
                            <CardHeader>{department.name}</CardHeader>
                            <CardBody>This Dummy text is supposed to include a little description about the team name above</CardBody>
                            <CardFooter> 
                                <ImageStack>
                                <img src={Avatar1} alt="avatar" />
                                <img src={Avatar2} alt="avatar" />
                                <img src={Avatar3} alt="avatar" />
                                <img src={Avatar4} alt="avatar" />
                                <img src={Avatar5} alt="avatar" />
                                </ImageStack>
                                <Link to={`/department/:${department.name}`}><PlusIcon/></Link>
                            </CardFooter>
                        </Card>
                        ))}
                    </CardSection>
                </Container>
            </Main>
        </div>
    );
}

const Main = styled.div`
margin-left: 18vw;
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

const ButtonContainer = styled.div`
text-align: right;
padding: 2rem;
`
const StyledLink = styled(Link)`
text-decoration: none;
background-color: var(--mainBlue);
padding: 1rem 2rem;
font-weight: 500;
font-size: 0.8rem;
color: white;
`
const CardSection = styled.section`
padding: 0 2rem;
display: flex;
flex-wrap: wrap;
justify-content: center;
`
const Card = styled.div`
width:42vmin;
background-color: white;
padding: 1rem;
margin: 1rem;
padding-bottom: 0;
@media screen and (max-width: 680px) {
    width:90%;
}
`
const CardHeader = styled.h3`
/* font-size:1rem; */
font-weight: 700;
color:#1E1C1C;
margin-top: 1.2rem;
`
const CardBody = styled.p`
margin:1rem 0 2rem 0;
font-size:0.8rem;
color:#949494;
font-weight: 400;
`
const CardFooter = styled.div`
display: flex;
justify-content: space-between;
border-top: 1px solid  #E5E5E5;
align-items: baseline;
padding: 1rem 0;
`
const ImageStack= styled.div`
display: flex;
img{
    margin-left: -15px;
}
`
const PlusIcon = styled(AiOutlinePlus)`
background-color: var(--mainBlue);
color: white;
padding: 10px;
border-radius: 50%;
`

export default Departments;