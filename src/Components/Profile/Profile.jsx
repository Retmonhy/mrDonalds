import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../Context/context";
import ProfileMenu from "./ProfiliMenu";
import ProfileUserData from "./ProfileUserData";
import s from "./Profile.module.css"
import { Outlet } from "react-router-dom";

const ProfileLayout = styled.div`
    background: #fff;
    padding: 20px;
`;
const ProfileWrapper = styled.div`
    width: 100%; 
    height: 100%;
    padding: 10px;
    
    background-color: #fff;
    display: flex;
    flex-wrap: nowrap;
    align-items: start;
    justify-content: space-between;
`;

const Profile = () => {
    const { auth : { authentification } } = useContext(Context)
    return (
        <ProfileLayout>
            <h2>Мой профиль</h2>
            <ProfileWrapper className="profile-wrapper">
                <ProfileMenu/>
                <Outlet/>
            </ProfileWrapper>
        </ProfileLayout>
    );
}

export default Profile;