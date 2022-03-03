import React from "react";
import styled from "styled-components";
import { ButtonElem } from "../Supp/SuppComp/SuppComp";
import { useForm } from "react-hook-form";
import { RegInput } from "./RegInput"

const RegForm = styled.form`
width: 50%; min-width: 340px;
margin: 0 auto;
    padding: 20px;
    border: 1px solid green;
    border-radius: 10px;
    background: #ccc;
`;
const SubmitBtn = styled(ButtonElem)``;
const FieldsWrapper = styled.div``;
  
const RegistrationPage = () => {
    const { register,
        formState: { errors },
        handleSubmit } = useForm();
    console.log(handleSubmit)
    const onSubmit = (data) => { console.log(data)}

        return (
           <RegForm onSubmit={handleSubmit(onSubmit)}>
               <h2>Регистрация:</h2>
                <FieldsWrapper>
                    <label>
                        First Name:
                        <input {...register("firstName", { required: true, maxLength: 20 })}/>
                        <div style={{height: 40}}>
                            { errors?.firstname && <p>{errors?.firstname?.message || "Error"} </p> } 
                        </div>
                    </label>
                    <input {...register("secondName", { required: true, maxLength: 20 })}/>
                    <input {...register("email")}/>
                    <input type="password" {...register("password")}/>
                </FieldsWrapper>
                    <input type="submit"/>
           </RegForm>
        );
}

export default RegistrationPage