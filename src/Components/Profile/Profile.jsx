import React, { useContext } from "react";
import styled from "styled-components";
import Context from "../Context/context";

const ProfileWrapper = styled.div``;
const UserData = styled.div``;

const Profile = () => {
    const { auth : { authentification } } = useContext(Context)
    console.log(authentification);
    return (
        <>
        <ProfileWrapper className="profile-wrapper">
            <UserData className="users-data">
                <span>Имя пользователя: </span><span>{authentification.displayName}</span>
                <span>Email: </span><span>{authentification.email}</span>
            </UserData>
        </ProfileWrapper>
        </>
    );
}

export default Profile;