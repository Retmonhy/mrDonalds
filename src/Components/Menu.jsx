import React from 'react';
import styled from 'styled-components';
import MenuChapter from './MenuChapter';
import BannerPicture from "../images/banner.png"


const MenuStyled = styled.section`
    width: 100%;
    max-width: 1060px;
    margin: 0 auto;
    margin-top: 80px;
    `;
const BannerMenu = styled.div`
    background: url('../images/banner.png');
    background-size: cover;
    width: 100%;
    height: 210px;


`;


const Menu = ({ListItem}) => {
    return (
        <MenuStyled>
          <BannerMenu> <img src={BannerPicture} atl='BannerPicture'/></BannerMenu> 
            <MenuChapter chapterName='Бургеры' menuItems={ListItem.burger}/>
            <MenuChapter chapterName='Напитки и прочее' menuItems={ListItem.other}/>
        </MenuStyled>
    );
}
export default  Menu