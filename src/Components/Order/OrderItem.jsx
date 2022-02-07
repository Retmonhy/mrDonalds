import React, { useContext } from "react";
import styled from "styled-components";
import { DivFlex, Span } from './Order';
import trashSvg from "../../images/trash.svg";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions";
import Context from "../../context";


const TrashButton = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 10px;
    border: none;
    background: transparent url(${trashSvg}) center;
    background-size: cover;
`;

const OrderItem = ({ position, amount }) => {
    
    const { removeOrder } = useContext(Context);

    return (
    <>
    {<li className="order-item">
        <DivFlex>
            <span className="position-name">{position.name}</span>
            <div className="position-sum">
                <Span className="position-count">{amount}</Span>
                <Span margin={'15px'} className="position-cost">{localizeCost(position.price * amount)}</Span>  
                <TrashButton onClick={() => removeOrder(position.id)}/> 
            </div>
        </DivFlex>
    </li>
    }
    </>
        );
}

export default OrderItem;