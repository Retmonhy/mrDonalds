import React from 'react';
import "./App.css";
/* Components */
import Header from "./Components/Header/Header";
import Menu from './Components/Menu/Menu';
import ModalItem  from "./Components/Modal/ModalItem";
import Order  from "./Components/Order/Order";
import OrderConfirm from "./Components/Order/OrderConfirm";
import OrderThanks from "./Components/Order/OrderThanks";
import Profile from "./Components/Profile/Profile";
import RegistrationPage from './Components/Auth/Registration';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import LoginPage from './Components/Auth/LoginPage';
import Context from './Components/Context/context';

/* Hooks */
import useOrder from "./Components/Hooks/useOrder";
import useOpenItem from "./Components/Hooks/useOpenItem";
import useTitle from "./Components/Hooks/useTitle";
import useAuth from "./Components/Hooks/useAuth";
import useOrderConfirm from "./Components/Hooks/useOrderConfirm";
import useOrderThanks from "./Components/Hooks/useOrderTranks";
import useCartShowed from "./Components/Hooks/useCartShowed";
/* Firebase */
import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; //вернет объект для управления базой данных


const firebaseConfig = {
  apiKey: "AIzaSyBaiWc8gas0fdroCnbZG0u6WvtvF_xgwtU",
  authDomain: "mrdonalds-560f0.firebaseapp.com",
  databaseURL: "https://mrdonalds-560f0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrdonalds-560f0",
  storageBucket: "mrdonalds-560f0.appspot.com",
  messagingSenderId: "1015313828353",
  appId: "1:1015313828353:web:dd7af22c0fdf753f5d8e00"
};

firebase.initializeApp(firebaseConfig);


const App = () => {
  const auth =        useAuth(firebase.auth)
  const openItemObj = useOpenItem();
  const ordersObj =   useOrder();
  const orderConfirmObj = useOrderConfirm(); 
  const orderThanksObj = useOrderThanks();
  const cartShowedObj = useCartShowed();
  
  useTitle(openItemObj.openItem)
  const removeFromOrders = (index) => {
    ordersObj.setOrders(ordersObj.orders.filter((order, i) => i !== index))
} 

  return (
    
    <Context.Provider value={{ auth, openItemObj, ordersObj, orderConfirmObj, cartShowedObj }}>
        <div className="background-wrapper"></div>
        <Header {...cartShowedObj} orders={ordersObj.orders}/> {/* передаем auth, а точнее функцию login в кнопку войти*/}
        <Order 
            {...ordersObj}
          removeFromOrders={removeFromOrders} 
            {...openItemObj} 
          dataBase = {(firebase.database)()}
            {...orderConfirmObj}
        />
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Menu/>}/>
            <Route path="menu/*" element={<Menu/>}/>
            <Route path="profile" element={<Profile/>}/>
			<Route path="registration" element={<RegistrationPage dataBase={(firebase.database)()}/>} />
          </Route>
        </Routes>
        {/* <Menu/> */}
        {openItemObj.openItem && <ModalItem/>}
        { orderConfirmObj.openOrderConfirm && <OrderConfirm dataBase={(firebase.database)()} setOrderThanks={orderThanksObj.setOrderThanks} /> } 
        { orderThanksObj.orderThanks && <OrderThanks setOrderThanks={orderThanksObj.setOrderThanks}/>}
      </Context.Provider>
    
  );
}

export default App;
