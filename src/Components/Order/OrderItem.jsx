import React from "react";
import styled from "styled-components";
import { DivFlex, Order, Span } from './Order';
import trashSvg from "../../images/trash.svg";
import { localizeCost, calcTotalCost } from "../Supp/SuppFunc/SuppFunctions";


const TrashButton = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border: none;
    background: transparent url(${trashSvg}) center;
    background-size: cover;
`;


const SmallDiv = styled.div`
    text-align: left;
    color: gray;
    font-size: 14px;
    width: 100%;
`;


const OrderItem = ({ openItem, amount, index, choice, toppings, removeFromOrder }) => {
    return (
    <>
    {<li className="order-item" style={{marginBottom: "15px",}} >
        <DivFlex styles={{flexWrap: "wrap",}}>
            <div className="position-sum" style={{display: "flex", alignItem: "center"}}>
                <span className="position-name" style={{width: "140px", display: "inline-block", textAlign: "left"}}>{openItem.name} {choice}</span>
                
                <Span className="position-count" style={{margin: "auto"}}>{amount}</Span>
            </div>
            <div>
                <Span margin={'15px'} className="position-cost">{localizeCost(calcTotalCost(openItem.price, amount, toppings))}</Span>  
                <TrashButton onClick={() => removeFromOrder(index)}/> 
            </div>
        </DivFlex>
            <SmallDiv>{
            toppings
            .map( topping => {if(topping.checked === true) {return topping.name}} )
            .filter(name => name)
            .join(", ") 
            }</SmallDiv>
    </li>
    }
    </>
        );
}

export default OrderItem;