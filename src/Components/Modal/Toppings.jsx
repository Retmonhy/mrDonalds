import React, { useContext } from "react";
import styled from "styled-components";
import { SmthWrapper, SmthWrap, SmthLabel } from '../Supp/SuppComp/SuppComp'
import PropTypes from 'prop-types';
import ContextItem from "../Context/contextItem";

const ToppingCheckbox = styled.input`
    cursor: pointer;
`;

const Toppings = () => {
    const { toppingsObject: { toppingsObj, checkToppings }} = useContext(ContextItem);
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
    checkToppings: PropTypes.func
}
export default Toppings;