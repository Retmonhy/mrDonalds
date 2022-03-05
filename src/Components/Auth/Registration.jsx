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
    label {
        font-size: 16px;
        color: #333;
    }
    input:not([type="submit"]) { 
        display: block;
        border: 1px solid #333;
        height: 30px;
        width: 100%;
        border-radius : 5px;    
        padding-left: 10px;

    }
`;
const FieldsWrapper = styled.div``;
const Small = styled.small`
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
    display: block;
`;
//Разобраться как передать register и options в компонент через пропсы
//Настроить вход.
//Войти сразу после регистрации. Нажал зарегестрироваться -> вошел в свой аккаунт

const RegistrationPage = ({ dataBase }) => {
    const { 
        register,
        reset,
        handleSubmit, 
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const createUser = ( data ) => {
        //передаем данные о пользователе в БД
        dataBase.ref('users').push().set({
            firstName: data.firstName,
            secondName: data.secondName, 
            email: data.email,
            password: data.password,
        })
        //сбрасываем все поля
        reset();
    }

        return (
           <RegForm onSubmit={handleSubmit(createUser)}>
               <h2>Регистрация:</h2>
                <FieldsWrapper>

                    <label>
                        First Name:
                        <input className="registration-field" {...register("firstName", { 
                            required: "Поле обязательно к заполнению!", 
                            maxLength: {
                                value: 20,
                                message: "Максимум 20 символов",
                            }
                        })}/>
                        <Small className="error">
                            { errors?.firstName && <p>{errors?.firstName?.message || "Error"} </p> } 
                        </Small>
                    </label>

                    <label>
                        Second Name:
                        <input className="registration-field" {...register("secondName", { 
                            required: 'Поле обязательно к заполнению!', 
                            maxLength: {
                                value: 20,
                                message: 'Максимум 20 символов'
                            },
                        })}/>
                        <Small className="error">
                            { errors?.secondName && <p>{errors?.secondName?.message || "Error"} </p> } 
                        </Small>
                    </label>

                    <label>
                        Email: 
                        <input classname="registration-field" {...register("email", { 
                            required: 'Почта не соответствует требованиям!', 
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/, 
                            })}/>
                        <Small className="error">
                            { errors?.email && <p>{errors?.email?.message || "Error"} </p> } 
                        </Small>
                    </label>

                    <label>
                        Password:
                        <input classname="registration-field" type="password" {...register("password", {
                            required: "Поле обязательно к заполнению",
                            pattern: {
                             value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8}/g, 
                             message : 'Пароль должен содержать буквы разных регистров, спецсиволы (!@#$%^&*), цифры',
                            }
                            })}/>
                        <Small className="error">
                            { errors?.password && <p>{errors?.password?.message || "Error"} </p> } 
                        </Small>
                    </label>

                </FieldsWrapper>
                    <input className="submit-btn" type="submit" />
           </RegForm>
        );
}

export default RegistrationPage