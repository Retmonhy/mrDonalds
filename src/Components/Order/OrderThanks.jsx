import React, { useContext } from 'react';
import styled from "styled-components";
import  { Overlay, ModalWindow, ElemWrapper, ButtonElem } from "../Supp/SuppComp/SuppComp";
import Context from "../Context/context";

const ThanksModal = styled(ModalWindow)`
    min-height: 200px;
`;

const OrderThanks = ({ setOrderThanks }) => {
    const { auth: {authentification} } = useContext(Context);


    return (    
        <Overlay>
            <ThanksModal>
                <h3>Спасибо за заказ, {authentification.displayName}!</h3>
                <span>Ждем Вас снова =)</span>
                <ElemWrapper>
                    <ButtonElem onClick={() => setOrderThanks(false)}>Спасибо!</ButtonElem>
                </ElemWrapper>
            </ThanksModal>
        </Overlay>
    )
}

export default OrderThanks;