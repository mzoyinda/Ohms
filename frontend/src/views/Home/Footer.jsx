import React from "react";
import brand from "../../assets/logo.png";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiOutlineFacebook,
} from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <div className="flexbox">
      <a href="/" className="brand">
        <h2>Ohms</h2>
        </a>
        <div className="links">
          <div className="section">
            <h4>E-mail address</h4>
            <p>kate@ohms.co.ng</p>
          </div>
          <div className="section">
            <h4>Phone Number</h4>
            <p>+234-703-366-70</p>
          </div>
          <div className="socials">
            <h4>Socials</h4>
            <div className="box">
              <a href="/" target="_blank" rel="noreferrer">
                <AiFillLinkedin />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillTwitterSquare />
              </a>
              <a href="/" target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line__cover">
        <div className="line"></div>
      </div>
      <div className="copyright">
        <p>&copy; 2023 Ohms. All rights reserved.</p>
        {/* <div className="line"></div> */}
      </div>
    </Container>
  );
};

const Container = styled.footer`
  position: relative;
  width: 100%;
  max-width: 1700px;
  margin-top: 140px;
  bottom: 0;
  /* background: #fafbff; */
  background: #FCF4EA;
  /* background: #ED8850; */
  border-top: 1px solid #e6e6e6;
  box-shadow: 0px 5px 15px rgba(204, 204, 204, 0.05);

  .flexbox {
    padding: 65px 24px 5px 24px;
    .brand {
      color: #ED8850;
    h2 {
      font-size: 20px !important;
      font-weight: 700;
      line-height: 28px;
      text-align: center;
    }
    :hover {
      cursor: pointer;
      color: #ED8850 !important;
    }
    }
    h4 {
      font-weight: 500;
      font-size: 16px;
      color: var(--fontColor);
      line-height: 28px;
      margin-bottom: 8px;
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: #1a1a1a;
      line-height: 24px;
    }
    p.address {
      width: 253px;
    }

    p + p {
      margin-top: 12px;
    }
    .section {
      margin-bottom: 32px;
    }
    .socials {
      .box {
        display: flex;
        gap: 5px;
        svg {
          padding: 8px;
          border-radius: 50%;
          font-size: 1.3rem;
          color: #1a1a1a;
          :hover{
            font-size: 1.35rem;
            color:  #0F162C;
          }
        }
      }
    }
  }

  .line__cover {
    margin-top: 90px;
    margin-bottom: 19px;
    width: 100%;
    .line {
      width: 100%;
      height: 1px;
      background: #e6e6e6;
    }
  }

  .copyright {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 50px;
    p {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
  }

  @media (min-width: 900px) {
    .brand {
      margin-top: -25px;
    }
    .flexbox {
      padding-top: 62px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;

      h4 {
        font-size: 14px;
        line-height: 20px;
      }
      p {
        font-size: 16px;
        line-height: 28px;
      }
    }
    .links {
      display: flex;
      /* width: 50%; */
      max-width: 656px;
      gap: 80px;
      justify-content: space-between;
    }
    .copyright {
     padding-bottom: 18px;
      p {
        font-size: 14px;
        line-height: 24px;
        color: #808080;
      }
    }
    .line__cover {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 32px;
      margin-bottom: 32px;
      .line {
        width: 80vw;
      }
    }
  }
`;

export default Footer;