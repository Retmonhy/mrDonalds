import React from "react";
import styled from "styled-components";


const InputWrapper = styled.div`
margin-bottom: 15px;
`;
const InputLabel = styled.label`
  display: block;
  color: #555;
  margin-bottom: 5px;
`;
const InputField = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 10px;
  font-size: 14px;
  border-radius: 5px;
  border: none;
`;
const Small = styled.small`
    color: red;
    margin-top: 5px;
    font-size: 14px;
`;

export const RegInput = ( { 
    label, 
    name, 
    type, 
    inputClass = '', 
    placeholder = '',
    valueState = '', 
    changeFunc,
    isRequire=false } ) => {
  return(
    <InputWrapper> 
      <InputLabel> { label  + ": " } </InputLabel>
      <InputField 
        name={name} 
        type={type} 
        className={inputClass}
        placeholder={ placeholder } 
        value={valueState} 
        required={isRequire}
        onChange={ evt => { changeFunc(evt)}}
        />
        <Small>error message</Small>
    </InputWrapper>
  );

} 