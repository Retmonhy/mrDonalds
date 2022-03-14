import react from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import s from "./Profile.module.css";
const SideNav = styled.div`
    max-width: 300px;
    width: 100%;
    padding: 25px;
    margin-right: 20px;
    ul > li > a{
        color: #FFB632;
        text-decoration: none;
        transition: 0.4s;
        &:active, &:hover {
            color: #299B01;
            text-decoration: underline;
        }
    }
`;

const ProfileMenu = () => {
    return (
        <SideNav className={s.greenRound}>
            <ul>
                <li>
                    <NavLink to="account">Личные данные</NavLink>
                </li>
                <li>
                    <NavLink to="orders">Заказы</NavLink>
                </li>
            </ul>
        </SideNav>
    );

}

export default ProfileMenu;