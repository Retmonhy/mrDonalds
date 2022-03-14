import React from "react";
import InputMask from "react-input-mask";
import { useFormContext } from "react-hook-form";
import s from "../Auth/auth.module.css"
import { InputLabel, InputWrapper, Small } from "../Auth/FormInput";

const PhoneInput = ({ label, name, options, ...props }) => {
    const { register, errors } = useFormContext();
    return (
        <InputWrapper>
        <InputLabel>
            {label}
            <InputMask
                {...props}
                {...register(name, options ?? {})}
                className={errors?.[name] ? s.error : "" ? s.success : ""}
                mask= "+7\ (999) 999-99-99"
                maskChar="_"
            />
            <Small>
            {errors?.[name]  && <span>{errors?.[name]?.message || "Error"}</span>}
            </Small>
        </InputLabel>
        </InputWrapper>
    );
}


export default PhoneInput