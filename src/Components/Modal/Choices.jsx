import React from "react";
import styled from "styled-components";
import { SmthWrapper, SmthWrap, SmthLabel } from '../Supp/SuppComp/SuppComp';
import PropTypes from 'prop-types'

const ChoicesRadioInput = styled.input`
    cursor: pointer;
`;

const Choices = ({ openItem, choice, doChoice }) => {
    return(
        <>
            <h3>Сделайте выбор:</h3><br/>
            <SmthWrapper>
                {
                    openItem.choices.map((item, index) => (
                        <SmthWrap key={index}>
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


Choices.propTypes = {
    openItem: PropTypes.object.isRequired,
    choice: PropTypes.string.isRequired,
    doChoice: PropTypes.func.isRequired,
}

export default Choices; 