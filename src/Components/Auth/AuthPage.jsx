import React from "react";
import styled from "styled-components";
import { Link, Outlet, useMatch, useResolvedPath } from "react-router-dom";


import s from './auth.module.css'

const AuthPageWrapper = styled.div`
    max-width: 700px;
    padding: 20px;
    margin: 0 auto;
    background-color: #fff;
    border: 2px solid #299B01;
    border-radius: 10px;
    transform: translateY(100px);

`;
const FormWrapper = styled.div``;
const TabButtonsWrapper = styled.div`
/* padding-bottom: 20px; */
    display: flex;
    align-items: center; 
    justify-content: space-around;
    border-bottom: 1px solid #299B01;
`;

const TabLink = ({ children ,to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <Link to={to} className={match ? s.tabLink+" " + s.active : s.tabLink}>
            {children} 
        </Link>
    );
}


const AuthPage = () => {
    return (
        <AuthPageWrapper>
            <TabButtonsWrapper>
                <TabLink children="Регистрация" to="registration" />
                <TabLink children="Вход" to="login" />
            </TabButtonsWrapper>
            <FormWrapper>
                <Outlet/>
            </FormWrapper>
        </AuthPageWrapper>
    );
}

export default AuthPage;