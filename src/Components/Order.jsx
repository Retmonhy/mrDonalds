import React from "react";
import styled from "styled-components";
import { ModalButton } from "./ModalItem";
import trashSvg from "../images/trash.svg";

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

const OrderHeader = styled.h2`
    font-size: 39px;
    line-height: 69px;
    text-align: center;
`;

const OrderList = styled.ul`
    margin-top: 60px;
    min-height: 550px;
`;

const TrashButton = styled.button`
width: 20px;
height: 20px;
margin-left: 10px;
border: none;
background: transparent url(${trashSvg}) center;
background-size: cover;
`;
const DivFlex = styled.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 15px;`;
const Span = styled.span`
    display: inline-block; min-width: 50px;
    margin-left: 20px; 
    margin : {({{margin}}) => margin ? margin : "unset" };`;

const OrderItem = () => {
    return (
    <>
    <li className="order-item">
        <DivFlex>
            <span className="position-name">Burger</span>
            <div className="position-sum">
                <Span className="position-count">1</Span>
                <Span margin={'15px'} className="position-cost">{'11250'.toLocaleString("ru-RU", {style: 'currency', currency: "RUS"})}</Span>  
                <TrashButton/> 
            </div>
        </DivFlex>
    </li>
    </>
        );
}


const Total = () => {
    return(
        <>
        <DivFlex className="total-wrapper">
            <span className="total-header">ИТОГО</span>
            <div className="total-sum">
                <Span className="total-amount">5</Span>
                <Span className="total-cost">{'12421'.toLocaleString("ru-RU", {style: 'currency', currency: "RUS"})}</Span>   
            </div>
        </DivFlex>
        </>
    );
}



export const Order = () => {
    return (
        <OrderStyled>
            <OrderHeader>ВАШ ЗАКАЗ</OrderHeader>
            <OrderList>
                <OrderItem/>
                <OrderItem/>
                <OrderItem/>
            </OrderList>
            <Total></Total>
            <ModalButton>Оформить</ModalButton>
        </OrderStyled>
    );
}