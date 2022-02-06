import React from 'react';
import styled from "styled-components";
import { Order } from '../Order/Order';


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
    border-radius: 10px 10px 0 0 
`;

const ModalWrapper = styled.div`
    padding: 30px;
    height: 390px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;

const ElemWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const H2 = styled.h2`
font-size: 30px;
line-height: 53px;
`;

export const ModalButton = styled.button`
width: 250px;
padding: 20px;
margin: 0 auto;
background: #299B01;
border: none;
font-size: 21px;
color: #fff;
`;

export const ModalItem = ({ openItem, setOpenItem, order, setOrder }) => {
    const closeModal = (e) => {
        if(e.target.id === 'overlay') setOpenItem(null);
    }

    const addToOrder = () => {
        setOrder([...order, openItem]);
        setOpenItem(null)
    }

    return (
        <Overlay  id="overlay" onClick={closeModal}>
            <ModalWindow id="modalWindow" openItem={openItem}>
                <ModalBanner img={openItem.img}/>
                <ModalWrapper>
                    <ElemWrapper>
                    <H2>{openItem.name}</H2> 
                    <H2>{openItem.price.toLocaleString("ru-RU",
                        {style: "currency", currency: "RUB"})}</H2>     
                    </ElemWrapper>
                    <ElemWrapper>
                        <ModalButton onClick={() => addToOrder(openItem)}>Добавить</ModalButton>
                    </ElemWrapper>
                </ModalWrapper>
            </ModalWindow>
        </Overlay>
    );
} 
