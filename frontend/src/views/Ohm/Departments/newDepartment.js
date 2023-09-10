import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const NewDepartment = () => {
  return (
    <Form>
      <ArrowContainer to="/ohm/departments">
        <ArrowIcon />
      </ArrowContainer>
      <Header>
        <h2>Create New Department</h2>
      </Header>
      <div>
        <p>Name</p>
        <input type="text" />
      </div>
      <div>
        <p>Description</p>
        <textarea name="description" cols="30" rows="8"></textarea>
      </div>
      <ButtonContainer>
        <button>Add</button>
      </ButtonContainer>
    </Form>
  );
};

const Header = styled.div`
  font-weight: 700;
  font-size: 0.7rem;
  margin-bottom: 3rem;
  margin-top: 1rem;
  h2 {
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
  }
`;

const ArrowContainer = styled(Link)`
  color: black;
`;

const ArrowIcon = styled(BsArrowLeft)`
  background-color: white;
  padding: 10px;
`;

const Form = styled.div`
  margin: auto;
  width: 50%;
  p {
    color: var(--fontColor);
    margin-bottom: 0.3rem;
  }
  input {
    outline: none;
    width: 95%;
    padding: 1rem;
    border: 1px solid #f8f8f8;
    background-color: #f8f8f8;
    margin-bottom: 3rem;
  }

  input:focus,
  textarea:focus {
    outline: none;
    box-shadow: 0px 0px 4px 0px #b5b5b5;
  }

  textarea {
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
  margin-top: 1rem;
  button {
    background-color: var(--mainBlue);
    padding: 1rem 5.5rem;
    cursor: pointer;
    border: none;
    color: white;
  }
`;

export default NewDepartment;
