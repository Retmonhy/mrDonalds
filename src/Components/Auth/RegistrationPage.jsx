import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { CheckboxInput, SubmitInput } from '../Supp/SuppComp/SuppComp';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { FormInput } from './FormInput';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setInfoAboutUser } from '../Supp/SuppFunc/SuppFunctions';
import useCheckbox from '../Hooks/useCheckbox';
import PhoneInput from '../FormComponents/PhoneInput';
import Context from '../Context/context';

export const RegForm = styled.form`
    width: 100%;
    min-width: 340px;
    /* margin: 0 auto; */
    padding: 20px;
    border: 1px solid green;
    border-radius: 0 0  10px 10px ;
    border-top: 0;
    background: #f4f4f4;
    label {
        font-size: 16px;
        color: #333;
    }
    input:not([type='submit']):not([type='checkbox']) {
        display: block;
        border: 1px solid #333;
        height: 40px;
        width: 100%;
        border-radius: 5px;
        padding-left: 10px;
    }
`;
const ConditionalForm = styled.div``;

export const FieldsWrapper = styled.div``;
export const Small = styled.small`
    font-size: 12px;
    color: red;
    margin-bottom: 10px;
    display: block;
`;

const RegistrationPage = () => {
    const [ regError, setRegError ] = useState('')
    const { database } = useContext(Context)
    const { checkboxState, onCheckboxChange } = useCheckbox();
    const navigate = useNavigate();
    const auth = getAuth();
    const {
        register,
        reset,
        control,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm({ mode: 'onSubmit', reValidateMode: 'onBlur', shouldFocusError: true });

    const createUser = (data) => {
        console.log('data = ', data);
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                const userUid = userCredential.user.uid;
                setInfoAboutUser(userUid, data, database);
                //сбрасываем все поля
                reset();
                navigate('/profile/account', { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode)
                setRegError(errorCode)
            });
    };

    return (
        <FormProvider register={register} errors={errors}>
            <RegForm onSubmit={handleSubmit(createUser)}>
                <h2>Регистрация:</h2>
                <FieldsWrapper>
                    <>
                    <FormInput
                        label='Email:'
                        name='email'
                        options={{
                            required: 'Почта не соответствует требованиям!',
                            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        }}
                        />
                        <Small style={{marginTop: "-10px"}}>
                            {
                                regError === "auth/email-already-in-use" ? "Почта уже зарегестрирована" : ''
                            }
                        </Small>
                    </>
                    <FormInput
                        type='password'
                        label='Password:'
                        name='password'
                        options={{
                            required: 'Поле обязательно к заполнению!',
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8}/g,
                                message: 'Пароль должен содержать буквы разных регистров, спецсиволы (!@#$%^&*), цифры',
                            },
                        }}
                    />
                    <FormInput
                        type='password'
                        label='Password confirm:'
                        name='passwordConfirm'
                        options={{
                            required: 'Поле обязательно к заполнению!',
                            pattern: {
                                value: /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8}/g,
                                message: 'Пароль должен содержать буквы разных регистров, спецсиволы (!@#$%^&*), цифры',
                            },
                            validate: {
                                matchPasswords: (pass) =>
                                    pass === getValues('password') ? true : 'Пароли не совпадают!',
                            },
                        }}
                    />
                    <CheckboxInput
                        checkboxState={checkboxState}
                        onCheckboxChange={onCheckboxChange}
                        type='checkbox'
                        label='Ввести доп. информацию'
                        name='additionalInfo'
                    />
                    {checkboxState ? (
                        <ConditionalForm>
                            <FormInput
                                label='First Name:'
                                name='firstName'
                                options={{
                                    maxLength: {
                                        value: 20,
                                        message: 'Максимум 20 символов',
                                    },
                                }}
                            />
                            <FormInput
                                label='Second Name:'
                                name='secondName'
                                options={{
                                    maxLength: {
                                        value: 20,
                                        message: 'Максимум 20 символов',
                                    },
                                }}
                            />
                            <PhoneInput type='phone' label='Phone number:' name='phone' />
                        </ConditionalForm>
                    ) : (
                        ''
                    )}
                </FieldsWrapper>
                <SubmitInput className='submit-btn' type='submit' />
            </RegForm>
        </FormProvider>
    );
};

export default RegistrationPage;
