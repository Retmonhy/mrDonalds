import React from "react";
import styled from "styled-components";
import { SmthWrapper, SmthWrap, SmthLabel } from '../Supp/SuppComp/SuppComp'

const ToppingCheckbox = styled.input`
    cursor: pointer;
`;

const Toppings = ({toppings, checkToppings}) => {
    return (
        <>
        <h3>Добавки:</h3><br/>
        <SmthWrapper>
            {
                toppings.map((item, index) => (
                    <SmthWrap key={index} >
                        <ToppingCheckbox type='checkbox' onChange={() => checkToppings(index)} checked={item.checked}/>
                            <SmthLabel onClick={() => checkToppings(index)}>
                                {item.name}
                            </SmthLabel>
                    </SmthWrap>
                ))
            }
        </SmthWrapper>
        </>
    );
}

export default Toppings;