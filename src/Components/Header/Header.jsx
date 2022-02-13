import propTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import headLogo from "../../images/logo.svg";
import PropTypes from 'prop-types';
import loginImage from "../../images/sign.svg";

const HeaderTag = styled.header`
position: fixed;
z-index: 100000;
top: 0;
left: 0; rigth: 0;
width: 100%;

display: flex;
justify-content: space-between;
align-items: center;
heigth: 80px;
padding: 5px 30px;
background: #299B01;
`;

const H1 = styled.h1`
  font-sixe: 24px;
  line-heigth: 42px;
  color: #ffffff;
`;
const ButtonLogin = styled.button`
  background: transparent;
  color: #fff;
  border: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  span{
    font-size: 16px;
    line-heigth: 19px;
  }
`;
const ButtonLogout = styled(ButtonLogin)`
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  img{margin-right: 15px;}
`; 

export default function Header({ authentification, logIn, logOut }) {
    return (
        <HeaderTag>
            <Wrapper as="a" href="/" className="wrapper">
                <img src={headLogo} alt="MrDonald's"></img>
                <H1>MrDonald's</H1>
            </Wrapper>
            {authentification 
            ?
              <ButtonLogout onClick={logOut}>
              <img src={loginImage} alt={authentification.displayName}></img>
              <span>{authentification.displayName}</span>
              <span>Выйти</span>
              </ButtonLogout> 
            :
              <ButtonLogin onClick={logIn}>
              <img src={loginImage} alt="login"></img>
              <span>Войти</span>
              </ButtonLogin>
            }
        </HeaderTag>
    );
}

Header.propTypes = {
  authentification: PropTypes.object,
  logIn: PropTypes.func,
  logOut: PropTypes.func,
}