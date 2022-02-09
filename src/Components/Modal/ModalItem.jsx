import React, { useContext } from 'react';
import styled from "styled-components";
import { ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";
import { localizeCost, calcTotalCost } from "../Supp/SuppFunc/SuppFunctions";
import useAmount from '../Hooks/useAmount';
import Context from "../../context";
import useToppings from "../Hooks/useToppings";
import Toppings from "./Toppings";

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
    min-height: 600px;
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
    font-size 16px;
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

export const ModalItem = ( {openItem, setOpenItem, order, setOrder}) => {
    const {amount, setAmount, onChange} = useAmount();
    const { changePositionAmount } = useContext(Context);
    const { toppings, checkToppings } = useToppings(openItem);

    const closeModal = (e) => {
        if(e.target.id === 'overlay') setOpenItem(null);
    }

    const addToOrder = () => {
        setOrder([...order, {openItem, amount: amount}]);
        setOpenItem(null)
    }   

    return (
        <Overlay  id="overlay" onClick={closeModal}>
            <ModalWindow id="modalWindow" openItem={openItem}>
                <ModalBanner img={openItem.img}/>
                <ModalWrapper>
                    <ElemWrapper>
                        <H2>{ openItem.name }</H2> 
                        <H2>{ localizeCost(openItem.price) }</H2>     
                    </ElemWrapper>


                    <div style={{width: "100%",}}>
                        <ElemWrapper>
                            <span>Количество</span>
                            <div>
                                <ButtonCount disabled={amount <= 1} onClick={() => {setAmount( amount - 1)}}>-</ButtonCount>
                                <InputCount type="number" value={amount >= 2 ? amount : 1} onChange={onChange}/>
                                <ButtonCount onClick={() => {setAmount(amount + 1)}}>+</ButtonCount>
                            </div>
                        </ElemWrapper>
                        <br/>{openItem.toppings && <Toppings toppings={toppings} checkToppings={checkToppings}/>}
                        <br/>
                        <ElemWrapper>
                            <span>ИТОГ</span>
                            <span>{localizeCost(calcTotalCost(openItem.price, amount, toppings))}</span>
                        </ElemWrapper>
                    </div>

                    <ElemWrapper>
                        <ButtonElem onClick={() => {addToOrder(); changePositionAmount(openItem.id, openItem.name, amount)}}>Добавить</ButtonElem>
                    </ElemWrapper>
                </ModalWrapper>
            </ModalWindow>
        </Overlay>
    );
} 
