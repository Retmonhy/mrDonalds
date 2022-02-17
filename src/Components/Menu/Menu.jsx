import React from 'react';
import styled from 'styled-components';
import MenuChapter from './MenuChapter';
import BannerPicture from "../../images/banner.png";
import PropTypes from 'prop-types';
import useDB from  "../Hooks/useDB";
import Loading from "../../Loading"


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


const Menu = ({ setOpenItem }) => {
    // const result = useDB();
    const DBmenu = useDB();
    // console.log("useFetch(): ", useFetch())
    return (
                <MenuStyled>
                <BannerMenu> <img src={BannerPicture} alt='BannerPicture`'/></BannerMenu> 
                    {//если данные пришли result.response, то отображаем меню, иначе загрузку
                        DBmenu ? 
                        <>
                            <MenuChapter chapterName='Бургеры' menuItems={DBmenu.burger} setOpenItem={setOpenItem}/>
                            <MenuChapter chapterName='Напитки и прочее' menuItems={DBmenu.other} setOpenItem={setOpenItem}/>
                        </>
                        : <Loading/>
                        // : result.error ? <div>Sorry, we already start fix the problem...</div>
                        // : <Loading/>
                    }
                </MenuStyled>
                
        
    );
}

Menu.propTypes = {
    listItem: PropTypes.object,
    setOpenItem: PropTypes.func.isRequired,

}
export default  Menu;
