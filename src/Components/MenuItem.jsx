import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
position: relative;
min-width: 400px;
flex-basis: 400px;
margin-bottom: 30px;

.wrapper{
    position: relative;
    width: 400px;
    height: 155px;
    img {
        width: 100%;
        height: 100%;
        filter: brightness(50%);
    }
    .descWrapper{position: absolute; top: 0; left: 0; padding-left: 15px; padding-top: 5px;}
    p{ color: #fff; font-size: 30px; line-height: 35px; z-index: 2;}
    
}
`;
    const ruble = '\u20BD';


const MenuItem = (props) => {
    return(
        <ListItem key={props.id} imgUrl={props.img}>
            <div className="wrapper">
                <img src={props.img} alt="Картинка Меню"/>
                <div className="descWrapper">
                    <p className='item-name'>{props.name}</p>
                    <p className="item-cost">{props.price.toLocaleString("ru-RU",
                    {style: "currency", currency: "RUB"})}</p>
                </div>
            </div>
        </ListItem>
    );
}

export default MenuItem