import React from 'react';
import styled from 'styled-components';
import ohm from '../../assets/pillow-sofa-decoration.jpg';

const LandingPage = () => {
    return (
        <Container>
            <div className='text-box'>
                <h1>One stop home for all customers and their inventory</h1>
                <p>
                    Are you ready to revolutionize the way your company manages
                    customer data? Look no further – OHMs is here to empower
                    you! OHMs is the cutting-edge solution that streamlines and
                    simplifies customer database creation for businesses like
                    yours.
                </p>
                <button>Sign Up Today!</button>
            </div>

            <div className='image-box'>
                <img src={ohm} alt='' />
            </div>
        </Container>
    );
};

const Container = styled.main`
    height: 60vh;
    /* padding: 100px; */
    width: 100%;
    text-align: center;
    margin: 170px auto;
    display: flex;
    justify-content: between;
    align-items: center;

    .text-box,
    .image-box {
        width: 45%;
    }

    .text-box {
        text-align: left;
    }

    .image-box img {
        display: block;
        width: 100%;
    }
`;

export default LandingPage;
