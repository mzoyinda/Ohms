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
        padding: 0 50px;
        text-align: left;
    }

    h1 {
        margin-bottom: 0.5em;
    }

    p {
        margin-bottom: 1em;
        line-height: 1.5;
    }

    button {
        outline: 0;
        background-color: #ed8850;
        border: 1px solid #ed8850;
        color: #fff;
        font-family: 'Noto Sans', sans-serif;
        padding: 15px 20px;
        border-radius: 10px;
    }

    .image-box img {
        display: block;
        width: 100%;
    }

    @media (max-width: 991px) {
        flex-direction: column-reverse;
        margin-top: 450px;

        .text-box,
        .image-box {
            width: 100%;
        }

        .text-box {
            padding: 0px;
        }
    }
`;

export default LandingPage;
