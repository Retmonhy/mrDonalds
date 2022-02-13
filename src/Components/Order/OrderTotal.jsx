import React from "react";
import { DivFlex, Span, Span140 } from './Order';
import { localizeCost, calcTotalCost } from "../Supp/SuppFunc/SuppFunctions"
import PropTypes from 'prop-types';

const OrderTotal = ({ orders }) => {
    return(
        <DivFlex className="total-wrapper" style={{marginBottom:"15px"}}>
            <div className="total-sum">
                <Span140 className="total-header">ИТОГО</Span140>
                <Span className="total-amount">
                    {
                    orders.reduce((amountsSum, item) => amountsSum += item.amount ,0) 
                    }
                </Span>
            </div>
                <Span className="total-cost">
                    {
                    localizeCost(orders.reduce((totalSum, item) => totalSum += calcTotalCost(item.openItem.price, item.amount, item.orderToppings) ,0)) 
                    }
                </Span>   
        </DivFlex>
    );
}

OrderTotal.propTypes = {
    orders: PropTypes.array.isRequired,
}

export default OrderTotal;