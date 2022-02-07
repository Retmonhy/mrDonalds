import React from "react";
import styled from "styled-components";
import { ButtonElem } from "../Supp/SuppComp/SuppComp";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";



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

export const Order = ({order, setOrder, amount}) => {
    console.log('order = ' , order)
    // order = [amount, {openItem}
    return (
        
        <OrderStyled>
            <OrderHeader>ВАШ ЗАКАЗ</OrderHeader>
            <OrderList className="order-list">
                {
                    order.map( item => <OrderItem position={item.openItem} amount={item.amount} key={item.openItem.id}/> )
                }
            </OrderList>
            <OrderTotal fullOrder={order} ></OrderTotal>
            <ButtonElem>Оформить</ButtonElem>
        </OrderStyled>
    );
}