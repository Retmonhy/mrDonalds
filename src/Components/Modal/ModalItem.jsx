import React, { useContext } from 'react';
import styled from "styled-components";
import { ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";
import { localizeCost, calcTotalCost } from "../Supp/SuppFunc/SuppFunctions";
import useAmount from '../Hooks/useAmount';
import useToppings from "../Hooks/useToppings";
import useChoices from "../Hooks/useChoices";
import Toppings from "./Toppings";
import Choices from "./Choices";
import PropTypes from 'prop-types'
import  { Overlay, ModalWindow } from "../Supp/SuppComp/SuppComp";
import Context from "../../context";




const ModalBanner = styled.div`
    width: 100%;
    height: 210px;
    position: relative;
    top: 0; left: 0;
    background: #000 url(${({img}) => (img)}) center center;
    background-size: cover;
    border-radius: 10px 10px 0 0; 
`;

const ModalWrapper = styled.div`
    padding: 30px;
    min-height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;
const InputCount = styled.input`
    width: 40px;
    height: 25px;
    font-size: 16px;
    text-align: center;
`;

const ButtonCount = styled.button`
    height: 25px;
    width: 25px;
    font-size: 16px;
    font-weight: 700;
    background: transparent;
    margin: 0 5px;
    border: 1px solid gray;
    &[disabled] { opacity: 0.6; }
    
`;

const H2 = styled.h2`
font-size: 30px;
line-height: 53px;
`;

const ModalItem = ( ) => {
    const { openItemObj: {openItem, setOpenItem} } = useContext(Context);
    const { ordersObj: {orders, setOrders} } = useContext(Context);

    let { amount, setAmount, onChange} = useAmount(openItem.amount);
    const { toppingsObj, checkToppings } = useToppings(openItem);
    const { choice, doChoice } = useChoices(openItem);
    const isEdit = openItem.index > -1;


    
    
    const closeModal = (e) => {
        if(e.target.id === 'overlay') setOpenItem(null);
    }
    
    const order = {
        ...openItem,
        amount,
        orderToppings: toppingsObj,
        orderChoice: choice,    
    }

    const editOrder = () => {
        const newOrders = [...orders];
        newOrders[openItem.index] = order;
        setOrders(newOrders);
        setAmount(openItem.amount);
    }

    const addToOrders = () => {
        setOrders([...orders, order]);
        setOpenItem(null)
    }   

    return (
        <Overlay  id="overlay" onClick={closeModal}>
            <ModalWindow id="modalWindow" openItem={openItem}>
                <ModalBanner img={openItem.img}/>
                <ModalWrapper>
                    <ElemWrapper>
                        <H2>{ openItem.name }</H2> 
                        <H2>{ localizeCost( openItem.price) }</H2>     
                    </ElemWrapper>


                    <div style={{width: "100%",}}>
                        <ElemWrapper>
                            <span>Количество</span>
                            <div>
                                <ButtonCount disabled={amount <= 1} onClick={() => {setAmount( amount - 1)}}>-</ButtonCount>
                                {/* <InputCount type="number" value={openItem.amount ? openItem.amount : amount >= 2 ? amount : 1} onChange={onChange}/> */}
                                <InputCount type="number" value={amount >= 2 ? amount : 1} onChange={onChange}/> 
                                <ButtonCount onClick={() => {setAmount( amount + 1)}}>+</ButtonCount>
                            </div>
                        </ElemWrapper>
                        <br/>
                        {/* {(isEdit && openItem.orderToppings.length > 0) && <Toppings toppingsObj={openItem.orderToppings} checkToppings={checkToppings}/>} */}
                        {(openItem.toppings && openItem.toppings.length > 0) && <Toppings toppingsObj={toppingsObj} checkToppings={checkToppings}/>}
                        <br/>
                        {(openItem.choices && openItem.choices.length > 0) && <Choices openItem={openItem} choice={choice} doChoice={doChoice}/>}
                        <br/>
                        <ElemWrapper>
                            <span>ИТОГ</span>
                            <span>{localizeCost(calcTotalCost(
                                 openItem.price, 
                                 amount, 
                                 toppingsObj
                                ))}</span>
                        </ElemWrapper>
                    </div>

                    <ElemWrapper>
                        <ButtonElem 
                        onClick={() => {isEdit ? editOrder() : addToOrders(); setOpenItem(null)}}
                        disabled={openItem.choices.length > 0 && !choice}
                        >{isEdit ? "Редактировать" : 'Добавить'}</ButtonElem>
                    </ElemWrapper>
                </ModalWrapper>
            </ModalWindow>
        </Overlay>
    );
} 

export default ModalItem;

ModalItem.propTypes = {
    openItem: PropTypes.object,
    setOpenItem: PropTypes.func,
    orders: PropTypes.array,
    setOpenItem: PropTypes.func,
}
