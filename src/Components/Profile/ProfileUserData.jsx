import React, { useContext } from "react";
import s from "./Profile.module.css"
import styled from "styled-components";
import Context from "../Context/context";
import { ProfileInput } from "./ProfileInput";

const UserDataWrapper = styled.div`
    width: 100%;
    max-width: 800px;   
    padding: 20px;

`;

const ProfileUserData = () => {
    const { auth: {authentification} } = useContext(Context);

    return (
        <UserDataWrapper className={s.greenRound}>
            <h2>Личные данные: </h2>
            <ProfileInput type="text" label="Фамилия" placeholder="Иванов" />
            <ProfileInput type="text" label="Имя" placeholder="Иван" />
            <ProfileInput type="email" label="Эл. почта" placeholder="ivanov@mrdonalds.ru" />
            <ProfileInput type="phone" label="Телефон" placeholder="8 (800) 555 35 35" />
        </UserDataWrapper>
    );
}

export default ProfileUserData;