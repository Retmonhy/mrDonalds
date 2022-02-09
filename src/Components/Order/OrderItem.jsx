import React, { useContext } from "react";
import styled from "styled-components";
import { DivFlex, Span } from './Order';
import trashSvg from "../../images/trash.svg";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions";
import Context from "../../context";


const TrashButton = styled.button`
    width: 20px;
    height: 20px;
    margin-left: 5px;
    border: none;
    background: transparent url(${trashSvg}) center;
    background-size: cover;
`;

const OrderItem = ({ position, amount }) => {
    const { removeFromOrder } = useContext(Context);

    return (
    <>
    {<li className="order-item">
        <DivFlex>
            <div className="position-sum">
                <span className="position-name" style={{width: "140px", display: "inline-block", textAlign: "left"}}>{position.name}</span>
                <Span className="position-count">{amount}</Span>
            </div>
            <div>
                <Span margin={'15px'} className="position-cost">{localizeCost(position.price * amount)}</Span>  
                <TrashButton onClick={() => removeFromOrder(position.id, position.name)}/> 
            </div>
        </DivFlex>
    </li>
    }
    </>
        );
}

export default OrderItem;