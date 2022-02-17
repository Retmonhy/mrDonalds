import React from "react";
import styled from "styled-components";
import { ButtonElem } from "../Supp/SuppComp/SuppComp";
import OrderItem from "./OrderItem";
import OrderTotal from "./OrderTotal";
import PropTypes from 'prop-types';
import { projection } from '../Supp/SuppFunc/SuppFunctions'




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
export const DivFlex = styled.div`display: flex; align-items: center; justify-content: space-between; margin-bottom: 5px;`;
export const Span = styled.span`
    display: inline-block; min-width: 40px;
    margin-left: 10px; `;
export const Span140 = styled(Span)`
    width: 140px; text-align: left;  `;





        //создаем новый объект, чтобы передавать более красивые и структурированные данные
        //и зачем-то передаем все эти данные в виде массивов, даже одиночные типа name или price
  const dataRules = {
    name : ["name"],
    price : ["price"],
    amount : ['amount'],
    toppings : ['orderToppings', array => array ? (array.filter(item => item.checked)).map(obj => obj.name) : "No toppings"],
    choices : ['orderChoice', item => item ? item : "No choices"]
  }

export const Order = ({orders, setOrders, removeFromOrders, setOpenItem, authentification, logIn, database}) => {
    //database - объект для управления базой данных

    const sendOrder = () => {
        const newOrder = orders.map(projection(dataRules))
        database.ref('order').push().set({
            nameClient: authentification.displayName,
            email: authentification.email,
            order: newOrder,
        })
        .then(() => setOrders([]))
        .catch(error => console.log(error))

    }
    
    return (
        
        <OrderStyled>
            <OrderHeader>ВАШ ЗАКАЗ</OrderHeader>
            <OrderList className="order-list">
                {
                   orders.length 
                   ? orders.map( (item, index) => <OrderItem 
                       position={item}
                       index={index} 
                       removeFromOrders={removeFromOrders}
                       setOpenItem={setOpenItem}
                       key={index}/> ) 
                   : <p>Вы пока ничего не заказали</p>
                }
            </OrderList>
            <OrderTotal orders={orders} ></OrderTotal>
            <ButtonElem onClick={() => {authentification ? sendOrder(orders) : logIn()}}>Оформить</ButtonElem>
        </OrderStyled>
    );
}

Order.propTypes = {
    orders: PropTypes.array.isRequired,
    setOrders: PropTypes.func,
    removeFromOrders: PropTypes.func.isRequired,
    setOpenItem: PropTypes.func.isRequired,
    authentification: PropTypes.object,
    logIn: PropTypes.func,
    database : PropTypes.object,
}