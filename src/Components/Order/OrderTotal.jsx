import React from "react";
import { DivFlex, Span } from './Order';

const OrderTotal = ({ fullOrder, totalAmount }) => {
    return(
        <>
        <DivFlex className="total-wrapper">
            <span className="total-header">ИТОГО</span>
            <div className="total-sum">
                <Span className="total-amount">{}</Span>
                <Span className="total-cost">{
                    // fullOrder.reduce((prev, item) => prev += item.position.price/*тут нужно еще добавить умножение на количство данной позиции*/ , 0)
                }</Span>   
            </div>
        </DivFlex>
        </>
    );
}

export default OrderTotal;