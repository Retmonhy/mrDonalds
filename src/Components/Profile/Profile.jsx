import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../Context/context";
import ProfileMenu from "./ProfiliMenu";
import ProfileUserData from "./ProfileUserData";
import s from "./Profile.module.css"




const ProfileOuter = styled.div`
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
const UserData = styled.div``;

const Profile = () => {
    const { auth : { authentification } } = useContext(Context)
    return (
        <>
        <h2>Мой профиль</h2>
        <ProfileWrapper className="profile-wrapper">
            <ProfileMenu/>
            <ProfileUserData/>
        </ProfileWrapper>
        </>
    );
}

export default Profile;