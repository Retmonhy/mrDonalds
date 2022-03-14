import React from 'react';
import './App.css';
/* Components */
import Header from './Components/Header/Header';
import ModalItem from './Components/Modal/ModalItem';
import Order from './Components/Order/Order';
import OrderConfirm from './Components/Order/OrderConfirm';
import OrderThanks from './Components/Order/OrderThanks';
import Context from './Components/Context/context';
import AppRoutes from './Components/AppRoutes';

/* Hooks */
import useOrder from './Components/Hooks/useOrder';
import useOpenItem from './Components/Hooks/useOpenItem';
import useTitle from './Components/Hooks/useTitle';
import useAuth from './Components/Hooks/useAuth';
import useOrderConfirm from './Components/Hooks/useOrderConfirm';
import useOrderThanks from './Components/Hooks/useOrderTranks';
import useCartShowed from './Components/Hooks/useCartShowed';
import useCurrentUser from './Components/Hooks/useCurrentUser';
/* Firebase */
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database'; //вернет объект для управления базой данных

const firebaseConfig = {
    apiKey: 'AIzaSyBaiWc8gas0fdroCnbZG0u6WvtvF_xgwtU',
    authDomain: 'mrdonalds-560f0.firebaseapp.com',
    databaseURL: 'https://mrdonalds-560f0-default-rtdb.europe-west1.firebasedatabase.app',
    projectId: 'mrdonalds-560f0',
    storageBucket: 'mrdonalds-560f0.appspot.com',
    messagingSenderId: '1015313828353',
    appId: '1:1015313828353:web:dd7af22c0fdf753f5d8e00',
};

firebase.initializeApp(firebaseConfig);

const App = () => {
    const auth = useAuth(firebase.auth);
    const database = firebase.database();
    const openItemObj = useOpenItem();
    const ordersObj = useOrder();
    const orderConfirmObj = useOrderConfirm();
    const orderThanksObj = useOrderThanks();
    const cartShowedObj = useCartShowed();
    const { currentUser, setCurrentUser } = useCurrentUser(auth);
    const currentUid = firebase.auth()?.currentUser?.uid;
    useTitle(openItemObj.openItem);

    const removeFromOrders = (index) => {
        ordersObj.setOrders(ordersObj.orders.filter((order, i) => i !== index));
    };

    return (
        <Context.Provider
            value={{
                auth,
                database,
                currentUser,
                currentUid,
                openItemObj,
                ordersObj,
                orderConfirmObj,
                cartShowedObj,
            }}>
            <div className='background-wrapper'></div>
            <Header {...cartShowedObj} orders={ordersObj.orders} setCurrentUser={setCurrentUser} />
            <Order removeFromOrders={removeFromOrders} />
            <AppRoutes />

            {openItemObj.openItem && <ModalItem />}
            {orderConfirmObj.openOrderConfirm && <OrderConfirm setOrderThanks={orderThanksObj.setOrderThanks} /> }
            {orderThanksObj.orderThanks && <OrderThanks setOrderThanks={orderThanksObj.setOrderThanks} />}
        </Context.Provider>
    );
};

export default App;
