import React, { useEffect } from "react";
import styled from "styled-components";
import { ModalButton } from "../Modal/ModalItem";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";
import useTotalAmount from "../Hooks/useTotalAmount"



const OrderStyled = styled.section`
    position: fixed;
    top: 80px; left: 0;
    width:  380px;
    height: calc(100% - 80px);
    padding: 20px;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
    text-align: center;
`;

const OrderHeader = styled.h2` font-size: 39px; line-height: 69px; text-align: center; text-transform: uppercase;`;

const OrderList = styled.ul` margin-top: 60px; min-height: 550px; `;

export const DivFlex = styled.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;`;
export const Span = styled.span`
    display: inline-block; min-width: 50px;
    margin-left: 20px; 
    margin : {({{margin}}) => margin ? margin : "unset" };`;

export const Order = ({order, setOrder}) => {
    const totalAmount = useTotalAmount(); 
    // const totalAmountCalculation = () => {
        // const totalArray = document.querySelectorAll(".order-list .position-count");
        // console.log(totalArray)
        // totalAmount.setTotalAmount(totalArray.reduce((prev, item) => prev += +item.textContent, 0))
        // }
        
        // useEffect(() => {
            //     const totalArray = document.querySelectorAll(".order-list .position-count");
            //     let ret = 0;
            //     if(totalArray.length) totalAmount.setTotalAmount(totalArray.forEach((item) => ret += +(item.textContent)))
            // })
            
    
    return (
        
        <OrderStyled>
            <OrderHeader>ВАШ ЗАКАЗ</OrderHeader>
            <OrderList className="order-list">
                {
                    
                    order.map( item => <OrderItem position={item} key={item.id}/> )
                }
            </OrderList>
            <OrderTotal fullOrder={order} totalAmount={totalAmount.totalAmount}></OrderTotal>
            <ModalButton>Оформить</ModalButton>
        </OrderStyled>
    );
}