import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Context from './Context/context';
import Layout from './Layout';
import Menu from './Menu/Menu';
import Profile from './Profile/Profile';
import ProfileUserData from './Profile/ProfileUserData';
import ProfileOrders from './Profile/ProfileOrders';
import AuthPage from './Auth/AuthPage';
import RegistrationPage from './Auth/RegistrationPage';
import LoginPage from './Auth/LoginPage';

const AppRoutes = () => {
    const { database } = useContext(Context)
    return (
        <Routes>
            <Route path='/*' element={<Layout />}>
                <Route index element={<Menu />} />
                <Route path='menu/*' element={<Menu />} />
                <Route path='profile/*' element={<Profile />}>
                    <Route path='account' element={<ProfileUserData />} />
                    <Route path='account/:edit' element={<ProfileUserData />} />
                    <Route path='orders' element={<ProfileOrders />} />
                    <Route path='' element={<Navigate to='account' />} />
                    {/* Делает редирект при совпадении пути path на то что указано в to у Navigate  */}
                </Route>
                <Route path='auth/*' element={<AuthPage dataBase={database} />}>
                    <Route path='registration' element={<RegistrationPage />} />
                    <Route path='logIn' element={<LoginPage />} />
                    <Route path='' element={<Navigate to='registration' />} />
                    {/* Делает редирект при совпадении пути path на то что указано в to у Navigate  */}
                </Route>
            </Route>
        </Routes>
    );
};

export default AppRoutes;
