import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import styled from "styled-components";
import LandingPage from "./LandingPage";

const Wrapper = () => {
  
  return (
    <Wrap>
      <HomeContainer>
        <Navbar />
        <LandingPage/>
        <Footer />
      </HomeContainer>
    </Wrap>
  );
};

const HomeContainer = styled.main`
  max-width: 1700px;
  position: relative;
`;

const Wrap = styled.div`
  @media (min-width: 1700px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }
`;

export default Wrapper;
