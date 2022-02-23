import React from 'react';
import styled from 'styled-components';
import MenuChapter from './MenuChapter';
import BannerPicture from "../../images/banner.png";
import PropTypes from 'prop-types';
import useFetch from  "../Hooks/useFetch";
import Loading from "../../Loading"
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';


const MenuStyled = styled.section`
    width: 100%;
    background: #E5E5E5;
    /* max-width: calc(100% - 380px); */
    max-width: 100%;
    margin-top: 80px;transition: 1.5s;
    /* margin-left: 380px; */
    `;
const BannerMenu = styled.div`
    background: url('../images/banner.png');
    background-size: cover;
    width: 100%;
    height: 210px;
    img { width: 100%; height: 100%;}


`;


const Menu = ( ) => {
    const result = useFetch();
    const DBmenu = result.response;
    return (
            <div className="container">
                <MenuStyled>
                <BannerMenu> <img src={BannerPicture} alt='BannerPicture`'/></BannerMenu> 
                    {//если данные пришли result.response, то отображаем меню, иначе загрузку
                        result.response ? 
                        <Routes>
                            <Route index element={<MenuChapter chapterName='Бургеры' menuItems={DBmenu.burger}/>}/>
                            <Route path="/burgers" element={<MenuChapter chapterName='Бургеры' menuItems={DBmenu.burger}/>} />
                            <Route path="/other" element={<MenuChapter chapterName='Напитки и прочее' menuItems={DBmenu.other}/>} />
                        </Routes>
                        : result.error ? <div>Sorry, we already start fix the problem...</div>
                        : <Loading/>
                    }
                </MenuStyled>    
                <Outlet/>    
            </div>
    );
}

Menu.propTypes = {
    listItem: PropTypes.object,

}
export default  Menu;
