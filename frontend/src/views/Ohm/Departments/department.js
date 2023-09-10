import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlinePlus, AiOutlineDelete } from 'react-icons/ai';


const Customers = [
    {
        id:1,
        name: "Mr Andy",
        phone: "08134343434",
    },
    {
        id:2,
        name: "Mr John",
         phone:"09090909090",
    },
    {
        id:3,
        name: "Mrs Lebron James",
         phone: "07987870098",
    },
      
    {
        id:4,
        name: "Adelaide Newton",
         phone: "08788899900",
    },
    {
        id:5,
        name: "Kilanko Shun",
         phone: "09097889809",
    }
]

const Department = () => {

    let {id} = useParams();

    const[department, setDepartment] = useState('');

    let AvatarStack = Customers.slice(0,5)

    useEffect(() => {
    setDepartment(id.slice(1));
    }, [department])
    

    return (
    <Section>
        <ArrowContainer to="/ohm/departments"><ArrowIcon/></ArrowContainer>
        <FlexBox>
            <DepartmentSummary>
                <h3>{department}</h3>
                <p>This dummy text is supposed to include a little description about the team name above</p>
            </DepartmentSummary>
            <Users>
                <ButtonContainer>
                    <ImageStack>
                    {AvatarStack.map((avatar)=>(
                    <p >
                        {avatar.name[0].toUpperCase()}
                    </p>
                    ))}
                </ImageStack>
                <PlusIcon/>
                </ButtonContainer>
            </Users>
        </FlexBox>

        <NewCustomer>
            <StyledLink to={`/ohm/departments/:${department}/add-customer`}>Add New Customer</StyledLink>
        </NewCustomer>

        <CustomersTable>
            <TableHead>
                <tr>
                    <th></th>
                    <th>Customer Name</th>
                    <th>Phone number</th>
                    <th>Email address</th>
                    <th>Logged By</th>
                    <th>Date</th>
                    <th></th>

                </tr>
            </TableHead>
            <TableBody>
                {Customers.map((customer)=>(
                <tr key={customer.id}>
                    <td className='avatar'> 
                        <p>{customer.name[0].toUpperCase()}</p>
                    </td>
                    <td>{customer.name}</td>
                    <td>{customer.phone}</td>
                    <td>bolajiolayinka980@gmail.com</td>
                    <td>Olasanmi Ezekiel</td>
                    <td>24.03.2022</td>
                    <td className='delete'><DeleteIcon/></td>
                </tr>
                ))}
            
            </TableBody>
        </CustomersTable>
        
    </Section>
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

const ArrowContainer = styled(Link)`
color:black;
`

const ArrowIcon = styled(BsArrowLeft)`
background-color: white;
padding: 10px;
`;

const FlexBox = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
@media screen and (max-width: 500px) {
    display: block;
}
`;

const DepartmentSummary = styled.div`
width:42vmin;

h3{
    font-weight: 700;
color:#1E1C1C;
margin-top: 1.2rem;
}

p{
    margin:1rem 0 2rem 0;
font-size:0.8rem;
color:#949494;
font-weight: 400;  
}

`;

const Users = styled.div`
`;

const ButtonContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 2rem;
background-color: white;
min-width: 300px;
min-height: 86px;
@media screen and (max-width: 680px) {
    min-width: 150px;
}

`

const ImageStack= styled.div`
display: flex;
width:100%;
p{
    margin-left: -15px;
    background-color: var(--mainOrange);
    border-radius: 50%;
    border: 1px solid #f8f8f8;
    padding:0.9rem;
    color:white;
}
`;

const PlusIcon = styled(AiOutlinePlus)`
background-color: var(--mainBlue);
color: white;
padding: 10px;
border-radius: 50%;
`;

const NewCustomer = styled.div`
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
`;

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
@media 
only screen and (max-width: 680px),
(min-device-width: 688px) and (max-device-width: 700px)  {

	/* Force table to not be like tables anymore */
	table, thead, tbody, th, td, tr { 
		display: block; 
	}
	
	/* Hide table headers (but not display: none;, for accessibility) */
	thead tr { 
		position: absolute;
		top: -9999px;
		left: -9999px;
	}
	
	tr { border: 1px solid #ccc; }
    tr+tr{
        margin-top: 1rem;
    }
	
	td { 
		/* Behave  like a "row" */
		border: none;
		border-bottom: 1px solid #eee; 
		position: relative;
		padding-left: 50%; 
	}
	
	td:before { 
		/* Now like a table header */
		position: absolute;
		/* Top/left values mimic padding */
		top: 6px;
		left: 6px;
		width: 45%; 
		padding-right: 10px; 
		white-space: nowrap;
	}

    .avatar, .delete{
        display:none;
    } 
	
	/*
	Label the data
	*/
	td:nth-of-type(2):before { content: "Customer Name"; }
	td:nth-of-type(3):before { content: "Phone number"; }
	td:nth-of-type(4):before { content: "Email address"; }
	td:nth-of-type(5):before { content: "Logged By"; }
	td:nth-of-type(6):before { content: "Date"; }
}
`
const TableHead = styled.thead`
tr {
    background-color: #f8f8f8;
    color: var(--fontColor);
    font-size: 0.9rem;
    text-align: left;
    border:1px solid white;
  
}
`
const TableBody = styled.tbody`
tr{
    border-bottom: 5px solid #f8f8f8;
    background-color: white;
}
td{
    color:#1E1C1C;
    font-weight: 700;
    p{
        border-radius: 50%;
        padding:1rem;
        color:white;
        background-color: var(--mainOrange);
    }
}
.delete{
    background-color: #f2f2f2;
    padding: 0 2rem;
}
`;

const DeleteIcon = styled(AiOutlineDelete)`
font-size: 1.3rem;
`;



export default Department;