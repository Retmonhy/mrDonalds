import React from 'react';
import "./App.css";
import  firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database"; //вернет объект для управления базой данных
import Header from "./Components/Header/Header";
import Menu from './Components/Menu/Menu';
import dbMenu from "./DBMenu";
import { ModalItem }  from "./Components/Modal/ModalItem";
import { Order }  from "./Components/Order/Order";
import useOpenItem from "./Components/Hooks/useOpenItem";
import useOrder from "./Components/Hooks/useOrder";
import { useAuth } from "./Components/Hooks/useAuth";


const firebaseConfig = {
  apiKey: "AIzaSyBaiWc8gas0fdroCnbZG0u6WvtvF_xgwtU",
  authDomain: "mrdonalds-560f0.firebaseapp.com",
  projectId: "mrdonalds-560f0",
  storageBucket: "mrdonalds-560f0.appspot.com",
  messagingSenderId: "1015313828353",
  appId: "1:1015313828353:web:dd7af22c0fdf753f5d8e00"
};


firebase.initializeApp(firebaseConfig);


function App() {

  const auth = useAuth(firebase.auth)


  const openItemObj = useOpenItem();
  const ordersObj = useOrder();
  const { orders, setOrders } = ordersObj; 

  const removeFromOrders = (index) => {
    setOrders(orders.filter((order, i) => i !== index))
} 
  return (
    <React.Fragment>
      <Header {...auth}/> {/* передаем auth, а точнее функцию login в кнопку войти*/}
      <Order 
        orders={orders} 
        removeFromOrders={removeFromOrders} 
        {...openItemObj} 
        {...auth}
        firebaseDatabase = {firebase.database}
      ></Order>
      <Menu listItem={dbMenu} {...openItemObj} />
      {openItemObj.openItem && <ModalItem {...openItemObj} {...ordersObj} />}
    </React.Fragment>
  );
}

export default App;
