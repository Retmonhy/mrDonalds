import React from "react";
import styled from "styled-components";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions"
import PropTypes from 'prop-types';

const ListItem = styled.li`
position: relative;
min-width: 400px;
flex-basis: 400px;
margin-bottom: 30px;

.wrapper{
    position: relative;
    width: 400px;
    height: 155px;
    cursor: pointer;
    transition: 0.3s;
    img {
        width: 100%;
        height: 100%;
        filter: brightness(50%);
    }
    .descWrapper{position: absolute; top: 0; left: 0; padding-left: 15px; padding-top: 5px;}
    p{ color: #fff; font-size: 30px; line-height: 35px; z-index: 2;}
    
    &:hover{
        img{filter: brightness(35%);};
        transform: scale(1.05);
    }
}
`;
const MenuItem = ({ menuPosition, setOpenItem }) => {
    const openModal = () => {
        setOpenItem({
            id : menuPosition.id,
            name : menuPosition.name,
            img : menuPosition.img,
            price : menuPosition.price,
            toppings : menuPosition.toppings ? menuPosition.toppings : [],
            choices : menuPosition.choices ? menuPosition.choices : [],
        })
};
    return(
        <ListItem 
        key={menuPosition.id} 
        imgUrl={menuPosition.img} 
        onClick={openModal} >
            <div className="wrapper">
                <img src={menuPosition.img} alt="Картинка Меню"/>
                <div className="descWrapper">
                    <p className='item-name'>{menuPosition.name}</p>
                    <p className="item-cost">{localizeCost(menuPosition.price)}</p>
                </div>
            </div>
        </ListItem>
    );
}

MenuItem.propTypes = {
    menuPosition: PropTypes.object.isRequired,
    setOpenItem: PropTypes.func.isRequired,
}
export default MenuItem