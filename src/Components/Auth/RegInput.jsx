import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

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
  font-size: 10px;
`;

export const RegInput = ({ label, register, options }) => {
  const { formState: { errors } } = useForm();
  console.log(...options)
  return (
    <InputWrapper>
      <InputLabel>
      { label }
        <InputField {...register(label, { ...options })}
          />
      <Small>{ errors?.inputName && <span>{errors?.inputName?.message || "Error"}</span> }</Small>
      </InputLabel>
    </InputWrapper>
  );
}