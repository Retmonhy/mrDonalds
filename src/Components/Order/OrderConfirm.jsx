import React, { useContext } from "react";
import styled from "styled-components"
import  { Overlay, ModalWindow, ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";
import OrderTotal from "../Order/OrderTotal";
import { projection } from '../Supp/SuppFunc/SuppFunctions';
import Context from "../Context/context";

const Text = styled.h3``;
const ModalHeader = styled.h2``;
const ModalWrap = styled(ModalWindow)`
    min-height: 300px;
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
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


const sendOrder = (dataBase, currentUser, orders) => {
    const newOrder = orders.map(projection(dataRules))
    dataBase.ref('order').push().set({
        nameClient: `${currentUser.secondName} ${currentUser.firstName}` || currentUser.email,
        email: currentUser.email,
        order: newOrder,
    })
    // .then()
    .catch(error => console.log(error))
}
const OrderConfirm = ({ setOrderThanks }) => {
    const { database } = useContext(Context);
    const { ordersObj: { orders, setOrders }} = useContext(Context);
    const { orderConfirmObj: { setOpenOrderConfirm }} = useContext(Context);
    const { currentUser } = useContext(Context);
    return(
        <Overlay>
            <ModalWrap>
                <ModalHeader>{ currentUser.firstName },</ModalHeader>
                <Text>осталось только подтвердить Ваш заказ</Text>
                <OrderTotal orders={orders}/>
                <ElemWrapper>
                    <ButtonElem 
                        onClick={() => 
                            {sendOrder(database, currentUser, orders); 
                            setOrders([]); 
                            setOpenOrderConfirm(false);
                            setOrderThanks(true);
                            }}>
                            Подтвердить
                    </ButtonElem>
                </ElemWrapper>
            </ModalWrap>
        </Overlay>
    );
}

export default OrderConfirm;