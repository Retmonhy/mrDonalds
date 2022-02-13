import React from "react";
import styled from "styled-components";
import { SmthWrapper, SmthWrap, SmthLabel } from '../Supp/SuppComp/SuppComp'
import PropTypes from 'prop-types';

const ToppingCheckbox = styled.input`
    cursor: pointer;
`;

const Toppings = ({ toppingsObj, checkToppings }) => {
    return (
        <>
        <h3>Добавки:</h3><br/>
        <SmthWrapper>
            {
                toppingsObj.map((item, index) => (
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
Toppings.propTypes = {
    toppingsObj: PropTypes.array,
    checkToppings: PropTypes.func.isRequired
}
export default Toppings;