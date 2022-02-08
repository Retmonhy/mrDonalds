import React from "react";
import styled from "styled-components";

const ToppingWrapper = styled.div`
    column-count: 2;
    column-width: 200px;
    text-align: left;
`;
const ToppingWrap =  styled.div`
margin-bottom: 15px;

`;
const ToppingLabel = styled.label`
cursor: pointer;
`;

const ToppingCheckbox = styled.input`
cursor: pointer;
`;

const Toppings = ({toppings, checkToppings}) => {
    return (
        <>
        <h3>Добавки:</h3><br/>
        <ToppingWrapper>
            {
                toppings.map((item, index) => (
                    <ToppingWrap key={index} >
                        <ToppingCheckbox type='checkbox' onChange={() => checkToppings(index)} checked={item.checked}/>
                            <ToppingLabel onClick={() => checkToppings(index)}>
                                {item.name}
                            </ToppingLabel>
                    </ToppingWrap>
                ))
            }
        </ToppingWrapper>
        </>
    );
}

export default Toppings;