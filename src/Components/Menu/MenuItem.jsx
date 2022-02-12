import React from "react";
import styled from "styled-components";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions"

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
const MenuItem = (props) => {
    
    const openModal = () => props.setOpenItem({
        id : props.id,
        name : props.name,
        img : props.img,
        price : props.price,
        toppings : props.toppings ? props.toppings : [],
        choices : props.choices ? props.choices : [],
    });
    return(
        <ListItem 
        key={props.id} 
        imgUrl={props.img} 
        onClick={openModal} >
            <div className="wrapper">
                <img src={props.img} alt="Картинка Меню"/>
                <div className="descWrapper">
                    <p className='item-name'>{props.name}</p>
                    <p className="item-cost">{localizeCost(props.price)}</p>
                </div>
            </div>
        </ListItem>
    );
}

export default MenuItem