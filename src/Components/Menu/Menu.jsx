import React from 'react';
import styled from 'styled-components';
import MenuChapter from './MenuChapter';
import BannerPicture from "../../images/banner.png"


const MenuStyled = styled.section`
    width: 100%;
    background: #E5E5E5;
    max-width: calc(100% - 380px);
    margin-top: 80px;
    margin-left: 380px;
    `;
const BannerMenu = styled.div`
    background: url('../images/banner.png');
    background-size: cover;
    width: 100%;
    height: 210px;
    img { width: 100%; height: 100%;}


`;


const Menu = ({ ListItem, openItem, setOpenItem }) => {
    
    return (
        <MenuStyled>
          <BannerMenu> <img src={BannerPicture} alt='BannerPicture'/></BannerMenu> 
            <MenuChapter chapterName='Бургеры' menuItems={ListItem.burger} setOpenItem={setOpenItem}/>
            <MenuChapter chapterName='Напитки и прочее' menuItems={ListItem.other} setOpenItem={setOpenItem}/>
        </MenuStyled>
    );
}
export default  Menu