import React, { useContext } from "react";
import styled from "styled-components"
import  { Overlay, ModalWindow, ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";
import OrderTotal from "../Order/OrderTotal";
import { projection } from '../Supp/SuppFunc/SuppFunctions';
import Context from "../../context";

const Text = styled.h3``;
const ModalHeader = styled.h2``;
const ModalWrap = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
     
        //создаем новый объект, чтобы передавать более красивые и структурированные данные
        //и зачем-то передаем все эти данные в виде массивов, даже одиночные типа name или price
const dataRules = {
    name : ["name"],
    price : ["price"],
    amount : ['amount'],
    toppings : ['orderToppings', array => array ? (array.filter(item => item.checked)).map(obj => obj.name) : "No toppings"],
    choices : ['orderChoice', item => item ? item : "No choices"]
}


const sendOrder = (dataBase, authentification, orders) => {
    const newOrder = orders.map(projection(dataRules))
    dataBase.ref('order').push().set({
        nameClient: authentification.displayName,
        email: authentification.email,
        order: newOrder,
    })
    // .then()
    .catch(error => console.log(error))
}
const OrderConfirm = ({  dataBase }) => {
    const { auth: {authentification}} = useContext(Context);
    const { ordersObj: { orders, setOrders }} = useContext(Context);
    const { orderConfirmObj: { setOpenOrderConfirm }} = useContext(Context);
    return(
        <Overlay>
            <ModalWindow>
                <ModalWrap>
                    <ModalHeader>{ authentification.displayName }</ModalHeader>
                    <Text>осталось только подтвердить Ваш заказ</Text>
                    <OrderTotal orders={orders}/>
                    <ElemWrapper>
                        <ButtonElem 
                        onClick={() => 
                            {sendOrder(dataBase, authentification, orders); 
                            setOrders([]); 
                            setOpenOrderConfirm(false)}}>
                            Подтвердить
                        </ButtonElem>
                    </ElemWrapper>
                </ModalWrap>
            </ModalWindow>
        </Overlay>
    );
}

export default OrderConfirm;