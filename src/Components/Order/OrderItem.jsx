import React from "react";
import styled from "styled-components";
import { DivFlex, Span } from './Order';
import trashSvg from "../../images/trash.svg";
import { localizeCost, calcTotalCost } from "../Supp/SuppFunc/SuppFunctions";
import PropTypes from 'prop-types';


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


const OrderItem = ({ position: { openItem, amount, orderToppings, orderChoice }, index, removeFromOrders }) => {
    return (
    <>
    {<li className="order-item" style={{marginBottom: "15px",}} >
        <DivFlex styles={{flexWrap: "wrap",}}>
            <div className="position-sum" style={{display: "flex", alignItem: "center"}}>
                <span className="position-name" style={{width: "140px", display: "inline-block", textAlign: "left"}}>{openItem.name} {orderChoice}</span>
                
                <Span className="position-count" style={{margin: "auto"}}>{amount}</Span>
            </div>
            <div>
                <Span margin={'15px'} className="position-cost">{localizeCost(calcTotalCost(openItem.price, amount, orderToppings))}</Span>  
                <TrashButton onClick={() => removeFromOrders(index)}/> 
            </div>
        </DivFlex>
            <SmallDiv>{
            orderToppings
            .map( topping => {if(topping.checked === true) {return topping.name}} )
            .filter(name => name)
            .join(", ") 
            }</SmallDiv>
    </li>
    }
    </>
        );
}


OrderItem.propTypes = {
    position: PropTypes.object.isRequired,
    openItem: PropTypes.object,
    index: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    orderToppings: PropTypes.array.isRequired,
    orderChoice: PropTypes.string.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    removeFromOrder: PropTypes.func.isRequired,
}
export default OrderItem;