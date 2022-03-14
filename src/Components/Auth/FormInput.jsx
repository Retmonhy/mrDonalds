import React from 'react';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import s from './auth.module.css';

export const InputWrapper = styled.div`
    margin-bottom: 20px;
`;
export const InputLabel = styled.label`
    display: block;
    color: #555;
    margin-bottom: 5px;
`;
const InputField = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 10px;
    font-size: 14px;
    border-radius: 5px;
    border: none;
    background-color: #fff;
    &::placeholder {
        opacity: 0.3;
    }
`;

export const Small = styled.small`
    color: red;
    margin-top: 5px;
    font-size: 12px;
`;

export const FormInput = ({ label, name, options, ...props }) => {
    const { register, errors } = useFormContext();
    return (
        <InputWrapper>
            <InputLabel>
                {label}
                <InputField
                    {...props}
                    {...register(name, options ?? {})}
                    className={errors?.[name] ? s.error : '' ? s.success : ''}
                />
                <Small>{errors?.[name] && <span>{errors?.[name]?.message || 'Error'}</span>}</Small>
            </InputLabel>
        </InputWrapper>
    );
};
