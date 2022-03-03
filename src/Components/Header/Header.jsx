import propTypes from "prop-types";
import React, { useContext } from "react";
import styled from "styled-components";
import headLogo from "../../images/logo.svg";
import CartSvg from "../../images/cart.svg";
import BurgerSvg from "../../images/burger.svg";
import ColaSvg from "../../images/cola.svg";

import PropTypes from 'prop-types';
import loginImage from "../../images/sign.svg";
import Context from "../Context/context";
import { Link } from "react-router-dom"
 
const HeaderTag = styled.header`
position: fixed;
z-index: 100;
top: 0;
left: 0; right: 0;
width: 100%;


height: 80px;
padding: 5px 30px;
background: #299B01;
`;
const HeaderInner = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  line-height: 42px;
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
    line-height: 19px;
  }
`;
const ButtonCart = styled(ButtonLogin)`
	position: relative;
	width: 40px;	
	img{ width: 100%;}
	
	span{
		position: absolute;
		display: block;
		width: 20px; height: 20px;
		border-radius: 50%;
		background-color: #c07f07;
		top: -40%;
		left: 60%;
		transform: translateX(-50%);
		pointer-events: none;

	}
`;
const ButtonLogout = styled(ButtonLogin)`
`;
const ButtonProfile = styled(ButtonLogin)``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
`; 
const LogoWrapper = styled(Wrapper)`
	img{ margin-right: 15px;}
`;
const NavBarUl = styled.ul`
	display: flex; 
	align-items: center;
	justify-content: start;
	li {margin-right: 20px; color: #fff; display: flex; 
		img {width: 30px;}
	}
	
`;

export default function Header({ cartShowed, setCartShowed, orders}) {
  const {auth: { authentification, logIn, logOut } } = useContext(Context);
    return (
        <HeaderTag>
          <HeaderInner>
            <LogoWrapper as="a" href="/" className="wrapper">
                <img src={headLogo} alt="MrDonald's"></img>
                <H1>MrDonald's</H1>
            </LogoWrapper>
			<Wrapper>
				<nav>
					<NavBarUl>
						<li>
							<img src={BurgerSvg} alt="burger"/>
							<Link to="menu/burgers">Бургеры</Link>
						</li>
						<li>
							<img src={ColaSvg} alt="cola"/>
							<Link to="menu/other">Напитки и прочее</Link>
						</li>
					</NavBarUl>
				</nav>
			</Wrapper>
			<Wrapper>
				{authentification 
				?<Wrapper>
					<ButtonProfile>
						<Link to="/profile">Профиль</Link>
					</ButtonProfile>
					<ButtonLogout onClick={logOut}>
					<img src={loginImage} alt={authentification.displayName}></img>
					<span>{authentification.displayName}</span>
					<span>Выйти</span>
					</ButtonLogout> 
				</Wrapper>
				:
				<Link to="/registration">
					<ButtonLogin onClick={()=>{}}>
						<img src={loginImage} alt="login"></img>
						<span>Войти</span>
					</ButtonLogin>
				</Link>
				}
				<ButtonCart className="cart">
					<img src={CartSvg} alt="Cart" onClick={(evt) => setCartShowed(!cartShowed)}></img>
					
					<span>{orders.reduce((amountsSum, item) => amountsSum += item.amount ,0)}</span>
				</ButtonCart>
			</Wrapper>
            </HeaderInner>
        </HeaderTag>
    );
}

Header.propTypes = {
	cartShowed: PropTypes.bool,
	setCartShowed: PropTypes.func,
}