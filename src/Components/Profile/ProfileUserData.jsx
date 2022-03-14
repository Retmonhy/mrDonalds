import React, { useContext, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import s from './Profile.module.css';
import Context from '../Context/context';
import { FormInput } from '../Auth/FormInput';
import { FormProvider, useForm, useFormState } from 'react-hook-form';
import { FieldsWrapper } from '../Auth/RegistrationPage';
import { ButtonElem, SubmitInput } from '../Supp/SuppComp/SuppComp';
import { setInfoAboutUser } from '../Supp/SuppFunc/SuppFunctions';
import PhoneInput from '../FormComponents/PhoneInput';
import { RegForm } from '../Auth/RegistrationPage';

export const UserDataWrapper = styled.div`
    width: 100%;
    max-width: 800px;
    padding: 20px;
`;
const UserForm = styled(RegForm)`
	border: none; padding: 0;
`;
const ProfileUserData = () => {
    const { currentUser, currentUid } = useContext(Context);
    const navigate = useNavigate();
    const params = useParams();
    const {
        register,
        setValue,
        handleSubmit,
        clearErrors,
        control,
        getFieldState,
        formState: { errors },
    } = useForm({ mode: 'onSubmit', reValidateMode: 'onBlur' });
    // const { dirtyFields } = useFormState(control, "phone");

    //Заполнение всех полей в профиле данными из БД
    function fillFields() {
        Object.keys(currentUser).forEach((key) => setValue(key, currentUser[key]));
    }

    function editInfoAboutUser(data) {
        setInfoAboutUser(currentUid, data);
        navigate(-1);
    }

    useEffect(() => fillFields(), [currentUser]);

    return (
        <UserDataWrapper className={s.greenRound}>
            <h2>Личные данные: </h2>
            <FormProvider register={register} errors={errors}>
                <UserForm onSubmit={handleSubmit(editInfoAboutUser)}>
                    <FieldsWrapper>
                        <FormInput
                            disabled={params.edit ? false : true}
                            label='Имя:'
                            name='firstName'
                            placeholder='Дмитрий'
                        />
                        <FormInput
                            disabled={params.edit ? false : true}
                            label='Фамилия:'
                            name='secondName'
                            placeholder='Кулешов'
                        />
                        <FormInput
                            disabled={params.edit ? false : true}
                            label='Email:'
                            name='email'
                            placeholder='cooleshov.da@gmail.com'
                            options={{
                                pattern: {
                                    value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                                    message: 'Вы ввели некорректную почту!',
                                },
                            }}
                        />
                        <PhoneInput
                            placeholder={currentUser['phone'] || '+7 '}
                            disabled={params.edit ? false : true}
                            label='Телефон:'
                            name='phone'
                            options={{
                                validate: {
                                    checkFullNum: (number) => {
                                        if(!getFieldState('phone').isDirty) {
                                            console.log(getFieldState('phone').isDirty)
                                            return null;
                                        }
                                        if (number.replaceAll(/[^0-9]/g, '').length !== 11)
                                            return 'Введите полный номер';
                                    },
                                },
                            }}
                        />
                    </FieldsWrapper>
                    {params.edit ? (
                        <>
                            <SubmitInput type='submit' value='Сохранить' />
                            <ButtonElem
                                className={s.cancelBtn + " " + s.btn}
                                onClick={(evt) => {
                                    fillFields();
                                    clearErrors('phone');
                                    navigate(-1);
                                    evt.preventDefault();
                                }}>
                                Отменить
                            </ButtonElem>
                        </>
                    ) : (
                        <ButtonElem
                            onClick={(evt) => {
                                evt.preventDefault();
                                navigate('edit');
                            }}>
                            Редактировать
                        </ButtonElem>
                    )}
                </UserForm>
            </FormProvider>
        </UserDataWrapper>
    );
};

export default ProfileUserData;
