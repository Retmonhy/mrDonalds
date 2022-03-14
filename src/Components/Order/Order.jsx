import React, { useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ButtonElem } from '../Supp/SuppComp/SuppComp';
import OrderItem from './OrderItem';
import OrderTotal from './OrderTotal';
import PropTypes from 'prop-types';
import Context from '../Context/context';
import styles from './Order.module.css';

const OrderStyled = styled.section`
    position: fixed;
    top: 80px;
    left: 0;
    width: 380px;
    height: calc(100% - 80px);
    padding: 20px;
    background: #fff;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.25);
    text-align: center;
    transition: 0.7s;
    z-index: 10;
`;
const OrderHeader = styled.h2`
    font-size: 39px;
    line-height: 69px;
    text-align: center;
    text-transform: uppercase;
`;
const OrderList = styled.ul`
    margin-top: 60px;
    min-height: 550px;
`;
export const DivFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;
`;
export const Span = styled.span`
    display: inline-block;
    min-width: 40px;
    margin-left: 10px;
`;
export const Span140 = styled(Span)`
    width: 140px;
    text-align: left;
`;

const Order = ({ removeFromOrders }) => {
    //database - объект для управления базой данных
    const { auth: { authentification, logIn }, } = useContext(Context);
    const { ordersObj: { orders }, } = useContext(Context);
    const { orderConfirmObj: { setOpenOrderConfirm }, } = useContext(Context);
    const { openItemObj: { setOpenItem }, } = useContext(Context);
    const { cartShowedObj: { cartShowed, setCartShowed }, } = useContext(Context);
    const navigate = useNavigate();

    return (
        <OrderStyled className={cartShowed ? styles.cartShowed : styles.cartHidden}>
            <OrderHeader>ВАШ ЗАКАЗ</OrderHeader>
            <OrderList className='order-list'>
                {orders.length ? (
                    orders.map((item, index) => (
                        <OrderItem
                            position={item}
                            index={index}
                            removeFromOrders={removeFromOrders}
                            setOpenItem={setOpenItem}
                            key={index}
                        />
                    ))
                ) : (
                    <p>Вы пока ничего не заказали</p>
                )}
            </OrderList>
            {orders.length > 0 && <OrderTotal orders={orders}></OrderTotal>}
            {orders.length > 0 && (
                <ButtonElem
                    onClick={() => {
                        setCartShowed(false)
                        authentification ? setOpenOrderConfirm(true) : navigate('/auth/login', { replace: true });
                    }}>
                    Оформить
                </ButtonElem>
            )}
        </OrderStyled>
    );
};
export default Order;
Order.propTypes = {
    orders: PropTypes.array,
    setOrders: PropTypes.func,
    removeFromOrders: PropTypes.func,
    setOpenItem: PropTypes.func,
    authentification: PropTypes.object,
    logIn: PropTypes.func,
    firebaseDatabase: PropTypes.func,
};
