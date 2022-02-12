import React from "react";
import styled from "styled-components";
import { SmthWrapper, SmthWrap, SmthLabel } from '../Supp/SuppComp/SuppComp';

const ChoicesRadioInput = styled.input`
    cursor: pointer;
`;

const Choices = ({ openItem, choice, doChoice }) => {
    // console.log('choices = \n', choices)
    return(
        <>
            <h3>Сделайте выбор:</h3><br/>
            <SmthWrapper>
                {
                    openItem.choices.map((item, index) => (
                        <SmthWrap>
                            <SmthLabel  key={index}>
                                <ChoicesRadioInput 
                                type='radio' 
                                name="choices"
                                value={item}
                                checked={choice === item}  
                                onChange={doChoice}/>
                                {item}
                            </SmthLabel>
                        </SmthWrap>
                        
                    ))
                }
            </SmthWrapper>
        </>
    );
} 

export default Choices; 