import React from "react";
import styled from "styled-components";
import TotalCost from "./TotalCost";
import { useAmount } from "../Hooks/useAmount";


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

const PositionsAmount = ({price}) => {
    const {amount, setAmount, onChange} = useAmount();
    return (
        <div style={{width: "100%",}}>
            <ElemWrapper>
                <span>Количество</span>
                <div>
                    <ButtonCount disabled={amount <= 1} onClick={() => {setAmount(amount - 1)}}>-</ButtonCount>
                    <InputCount type="number" value={amount <= 1 ? 1 : amount} onChange={onChange}/>
                    <ButtonCount onClick={() => {setAmount(amount + 1)}}>+</ButtonCount>
                </div>
            </ElemWrapper> 
                <br/>
            <TotalCost price={price} amount={amount}/>
        </div>
    );
}

export default PositionsAmount;