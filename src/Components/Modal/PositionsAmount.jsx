import React from "react";
import styled from "styled-components";
import TotalCost from "./TotalCost";
import Toppings from "./Toppings";
// import useToppings from "../Hooks/useToppings";

const InputCount = styled.input`
    width: 40px;
    height: 25px;
    text-align: center;
`;

const ButtonCount = styled.button`
    height: 25px;
    width: 25px;
    background: transparent;
    margin: 0 5px;
    border: 1px solid gray;
    &[disabled] { opacity: 0.6; }
    
`;
const ElemWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

const PositionsAmount = ({openItem, amount, setAmount, onChange, toppings, checkToppings, children}) => {
    return (
        <div style={{width: "100%",}}>
            <ElemWrapper>
                <span>Количество</span>
                <div>
                    <ButtonCount disabled={amount <= 1} onClick={() => {setAmount( amount - 1)}}>-</ButtonCount>
                    <InputCount type="number" value={amount >= 2 ? amount : 1} onChange={onChange}/>
                    <ButtonCount onClick={() => {setAmount(amount + 1)}}>+</ButtonCount>
                </div>
            </ElemWrapper>
            <br/>
            {openItem.toppings && <Toppings toppings={toppings} checkToppings={checkToppings}/>}
                <br/>
            {children}
            
        </div>
    );
}

export default PositionsAmount;