import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { BsCalendar3 } from 'react-icons/bs';
import Avatar1 from '../assets/avatar1.png';
import Avatar2 from '../assets/avatar2.png';
import Avatar3 from '../assets/avatar3.png';
import Avatar4 from '../assets/avatar4.png';
import Avatar5 from '../assets/avatar5.png';


const audits = [
    {
        id:1,
        user: "Mrs Andy",
        deletedItem: "Mr Andy",
        DB: "Kaminomoto",
        avatar:Avatar1
    },
    {
        id:2,
        user: "Mr John",
        deletedItem: "Mr Andy",
        DB: "Korope",
        avatar:Avatar2
    },
    {
        id:3,
        user: "Mr Lebron James",
        deletedItem: "Mr Andy",
        DB: "Laptop",
        avatar:Avatar3
    },
      
    {
        id:4,
        user: "Adelaide Newton",
        deletedItem: "Mr Andy",
        DB: "Buz Unit",
        avatar:Avatar4
    },
    {
        id:5,
        user: "Kilanko Shun",
        deletedItem: "Mr Andy",
        DB: "Korope",
        avatar:Avatar5
    }
]

const Audit = () => {

    return (
        <div>
            <Sidebar/>
            <Container>
                <Navbar/>
                <Section>
                   <FilterByDate>
                        <Date>
                            <p>Start Date</p>
                            <CalendarIcon/>
                        </Date>
                        <Date>
                            <p>End Date</p>
                            <CalendarIcon/>
                        </Date>
                    </FilterByDate>

                   <CustomersTable>
                        <TableHead>
                            <tr>
                                <th className='avatar'>User Involved</th>
                                <th>Action</th>
                                <th>Date and Time</th>

                            </tr>
                        </TableHead>
                        <TableBody>
                            {audits.map((item)=>(
                            <tr key={item.id}>
                                 <td className='avatar'> 
                                    <p>{item.user[0].toUpperCase()}</p>
                                </td>
                                <td>Deleted <span className="highlight">{item.deletedItem}</span> from <span className="highlight">{item.DB}</span> Inventory</td>
                                <td>24.03.2022  <span className="time"> 20:23 PM</span></td>
                            </tr>
                            ))}
                        
                        </TableBody>
                   </CustomersTable>
                    
                </Section>
            </Container>
        </div>
    );
}

const Container = styled.div`
margin-left: 18vw;
padding-bottom: 10rem;
background-color: #f8f8f8;
@media screen and (max-width: 680px) {
    margin-left: 0;
}
`;

const Section = styled.main`
margin-top:2rem;
padding: 2rem;
@media screen and (max-width: 680px) {
    margin-top: 0;
}
`;

const FilterByDate = styled.div`
display:flex;
text-align: right;
margin-bottom: 4rem;
justify-content: flex-end;
div+div{
    margin-left:5rem;
}
@media screen and (max-width: 400px) {
    margin-bottom: 3rem;
    div+div{
    margin-left:2rem;
}
@media screen and (max-width: 310px) {
    display: block;
    div+div{
    margin-left:0;
    margin-top:1rem;
}
}
}
`
const Date = styled.div`
background-color: white;
font-size: 0.8rem;
color: gray;
padding: 1.5rem 1rem;
width:30vmin;
display: flex;
justify-content: space-between;
@media screen and (max-width: 400px) {
    padding: 1rem;
}
@media screen and (max-width: 310px) {
    width:50vmin;
}
`
const CalendarIcon = styled(BsCalendar3)`
color:gray;
font-size: 1rem;
`

const CustomersTable = styled.table`
    border-collapse: collapse;
    display:block;
    overflow: auto;
    width: 100%;
    margin: 25px auto;
    font-size: 0.8rem;
    font-family: sans-serif;
    width: 100%; 
    color:#1E1C1C;
    th, td {
    padding: 1.5rem;
  
}

@media screen and (max-width: 680px) {
 .avatar{
    display: none;
 }
}

`
const TableHead = styled.thead`
tr {
    background-color: #f8f8f8;
    font-size: 0.9rem;
    color: var(--fontColor);
    text-align: left;
    border:1px solid white;
  
}
`
const TableBody = styled.tbody`
tr{
    border-bottom: 5px solid #f8f8f8;
    background-color: white;
}
.user{
    display: flex;
    align-items: center;
    span{
        margin-left: 1rem;
    }
}
td{
    color:#1E1C1C;
    font-weight: 700;

    p{
        border-radius: 50%;
        width: fit-content;
        padding:1rem;
        color:white;
        background-color: var(--mainOrange);
    }

    .highlight{
        color:var(--mainBlue);
    }
    .time{
        color:gray;

    }
}
.delete{
    background-color: #f2f2f2;
    padding: 0 2rem;
}
`;


export default Audit;