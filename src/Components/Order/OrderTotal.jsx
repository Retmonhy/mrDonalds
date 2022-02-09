import React from "react";
import { DivFlex, Span, Span140 } from './Order';
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions"

const OrderTotal = ({ order }) => {
    return(
        <DivFlex className="total-wrapper">
            <div className="total-sum">
                <Span140 className="total-header">ИТОГО</Span140>
                <Span className="total-amount">
                    {
                    order.reduce((amountsSum, position) => amountsSum += position.amount ,0) 
                    }
                </Span>
            </div>
                <Span className="total-cost">
                    {
                    localizeCost(order.reduce((totalSum, position) => totalSum += position.amount * position.openItem.price ,0)) 
                    }
                </Span>   
        </DivFlex>
    );
}

export default OrderTotal;