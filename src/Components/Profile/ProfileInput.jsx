import React from "react";
import styled from "styled-components";
import useProfileInput from "../Hooks/useProfileInput";


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

export const ProfileInput = ( { inputClass='', label, placeholder="", type, name, valueState, changeFunc = null, isRequire=false } ) => {
    const { value, changeValue } = useProfileInput();
  return(
    <InputWrapper> 
      <InputLabel> { label  + ": " } </InputLabel>
      <InputField 
        className={inputClass}
        type={type} 
        placeholder={ placeholder } 
        name={name} value={valueState ? valueState : value} 
        required={isRequire}
        onChange={ evt => { changeFunc ? changeFunc(evt) : changeValue(evt)}}/>
    </InputWrapper>
  );

} 