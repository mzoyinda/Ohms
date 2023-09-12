import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import brand from "../../assets/brand.png";
import { FiMenu } from "react-icons/fi";
import { AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState("");

  const toggle = () => setIsOpen(!isOpen);

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  const Navigate = useNavigate();

  useEffect(() => {
    setIsActive(splitLocation[1]);
    // console.log(isActive);
  }, [isActive, splitLocation]);

  return (
    <Container>
      <div className="desktop">
        <a href="/" className="brand">
          {/* <h1>Ohms</h1> */}
          <img src={brand} alt="ohms" />
        </a>
        <div>
          <nav className="nav__links">
            <a href="/login">Login</a>
            <a className="ohm" href="/create-ohm">
              Create Ohm
            </a>
          </nav>
          <div className="menu__icon">
            {isOpen ? (
              <AiOutlineCloseCircle className="close" onClick={toggle} />
            ) : (
              <FiMenu onClick={toggle} />
            )}
          </div>
        </div>
      </div>
      {isOpen ? (
        <div className="mobile">
          <nav className="navlinks">
            <a href="/login">Login</a>
            <button className="ohm" onClick={()=> Navigate("/create-ohm")} >
              Create Ohm
            </button>
          </nav>
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  padding: 17px 30px;
  background: var(--white-black-white, #fff);
  box-shadow: 0px 5px 15px rgba(153, 153, 153, 0.05);
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;

  a {
    color: #000;
    font-size: 14px;
    line-height: 20px;
    :hover {
      font-weight: 600;
      color: #808080;
    }
  }
  
  .active,
  :focus {
    color: #202020;
    font-weight: 600;
  }

  /* large screen */
  .desktop {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .ohm {
      /* width: 156px; */
      background-color: var(--mainGreen);
      color: white;
      font-size: 14px;
      padding: 15px 20px;
      border-radius: 10px;
      &:hover {
        box-shadow: 0px 2px 10px 5px white;
        cursor: pointer;
      }
    }
    a + a, a + button {
      margin-left: 25px;
    }

    .brand {
      color: #ed8850;
      h1 {
        font-size: 20px !important;
        font-weight: 700;
        line-height: 28px;
        text-align: center;
      }
      :hover {
        cursor: pointer;
        color: #ed8850 !important;
      }
      img {
        width: 105px;
        object-fit: cover;
      }
    }
    .menu__icon {
      display: none;
      @media (max-width: 768px) {
        display: block;
        svg {
          width: 28px;
          height: 28px;
          :hover {
            cursor: pointer;
          }
        }
        svg.close {
          width: 32px;
          height: 32px;
        }
      }
    }

    @media (max-width: 768px) {
      .nav__links {
        display: none;
        height: 80%;
      }
      img {
        width: 109px;
      }
    }
  }

  @media (min-width: 768px) {
    padding: 32px 63px 13px 63px;
  }
  a {
    font-size: 16px;
  }

  //maximum screen size
  @media (min-width: 1500px) {
    padding: 32px 73px 13px 73px;
    display: flex;
    align-items: center;
    justify-content: center;

    .desktop {
      width: 1500px;
    }
  }

  /* small screen */
  .mobile {
    padding-bottom: 20px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);

    a {
      color: #000;
      font-size: 16px;
      line-height: 28px;
    }
    .navlinks {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 37px;
      a + a, a + button {
        margin-top: 25px;
      }
    }
  }
`;

export default Navbar;
