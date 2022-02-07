import React, { useContext } from 'react';
import styled from "styled-components";
import { ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";

import PositionAmount from "./PositionsAmount";
import { localizeCost } from "../Supp/SuppFunc/SuppFunctions";
import useAmount from '../Hooks/useAmount';
import Context from "../../context";

const Overlay = styled.div`
position: fixed;
top: 0; bottom: 0; 
width: 100%;
height: 100%;

background: rgba(0, 0, 0, 0.5); 

`;

const ModalWindow = styled.div`
    position: absolute;
    top: 50%; left: 50%;    

    width: 600px;
    height: 600px;
    border-radius: 10px;
    background: #fff;

    transform: translate(-50%, -50%);
`;

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
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;

const H2 = styled.h2`
font-size: 30px;
line-height: 53px;
`;

export const ModalItem = ( {openItem, setOpenItem, order, setOrder}) => {

    /* const {amount, setAmount, onChange} = amountObj; */
    const amountObj = useAmount();
    const {amount, setAmount, ...other} = amountObj;

    const closeModal = (e) => {
        if(e.target.id === 'overlay') setOpenItem(null);
    }

    const addToOrder = () => {
        setOrder([...order, {openItem, amount: amount}]);
        setOpenItem(null)
    }

    const { changePositionAmount } = useContext(Context);

    return (
        <Overlay  id="overlay" onClick={closeModal}>
            <ModalWindow id="modalWindow" openItem={openItem}>
                <ModalBanner img={openItem.img}/>
                <ModalWrapper>
                    <ElemWrapper>
                    <H2>{ openItem.name }</H2> 
                    <H2>{ localizeCost(openItem.price) }</H2>     
                    </ElemWrapper>
                    <PositionAmount price={openItem.price} {...amountObj}/>
                    <ElemWrapper>
                        <ButtonElem onClick={() => {addToOrder(); changePositionAmount(openItem.id, openItem.name, amount)}}>Добавить</ButtonElem>
                    </ElemWrapper>
                </ModalWrapper>
            </ModalWindow>
        </Overlay>
    );
} 
