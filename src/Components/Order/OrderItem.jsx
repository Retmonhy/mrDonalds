import React, { useState } from "react";
import styled from "styled-components";
import { DivFlex, Span } from './Order';
import trashSvg from "../../images/trash.svg";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions"


const TrashButton = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: none;
    background: transparent url(${trashSvg}) center;
    background-size: cover;
`;

const OrderItem = ({ position, amount }) => {
    const [positionShowed, setPositionShowed] = useState(true);
    return (
    <>
    {positionShowed && <li className="order-item">
        <DivFlex>
            <span className="position-name">{position.name}</span>
            <div className="position-sum">
                <Span className="position-count">1</Span>
                <Span margin={'15px'} className="position-cost">{localizeCost(position.price)}</Span>  
                <TrashButton onClick={() => setPositionShowed(false)}/> 
            </div>
        </DivFlex>
    </li>
    }
    </>
        );
}

export default OrderItem;