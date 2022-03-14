import React, { useState } from 'react';
import styled from 'styled-components';
import { RegForm, FieldsWrapper, Small } from './RegistrationPage';
import { FormInput } from './FormInput';
import { SubmitInput, SmthWrap } from '../Supp/SuppComp/SuppComp';

import { useForm, FormProvider } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useAuth from '../Hooks/useGoogleAuth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const LoginForm = styled(RegForm)``;

const LoginPage = () => {
    const [signInError, setSignInError] = useState('');
    const navigate = useNavigate();
    const auth = getAuth();
    const { logIn } = useAuth(firebase.auth);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onSubmit', reValidateMode: 'onBlur', shouldFocusError: true });

    const checkUser = (data) => {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((userCredential) => {
                const user = userCredential.user;
                navigate('/menu/burgers', { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, '\n', errorCode);
                setSignInError(errorCode);
                // alert(error.code);
            });
    };

    return (
        <FormProvider register={register} errors={errors}>
            <LoginForm onSubmit={handleSubmit(checkUser)}>
                <SmthWrap>
                    <h2>Авторизация: </h2>
                    <button onClick={logIn}>Google</button>
                </SmthWrap>
                <FieldsWrapper>
                    <>
                        <FormInput
                            label={'Email:'}
                            name={'email'}
                            options={{
                                required: 'Почта не соответствует требованиям!',
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Введите почту',
                                },
                            }}
                            authErr={signInError}
                        />
                        <Small style={{ marginTop: '-10px' }}>
                            {signInError === 'auth/user-not-found' ? 'Такого пользователя не существует' : ''}
                        </Small>
                    </>
                    <>
                        <FormInput
                            type='password'
                            label={'Password:'}
                            name={'password'}
                            options={{
                                required: 'Введите пароль',
                            }}
                            authErr={signInError}
                        />
                        <Small style={{ marginTop: '-10px' }}>
                            {signInError === 'auth/wrong-password' ? 'Неверный пароль' : ''}
                        </Small>
                    </>
                </FieldsWrapper>
                <SubmitInput className='submit-btn' type='submit' />
            </LoginForm>
        </FormProvider>
    );
};

export default LoginPage;
