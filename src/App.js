import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header";
import Menu from './Components/Menu/Menu';
import { ModalItem }  from "./Components/Modal/ModalItem";
import { Order }  from "./Components/Order/Order";
import useOrder from "./Components/Hooks/useOrder";
import useOpenItem from "./Components/Hooks/useOpenItem";
import useTitle from "./Components/Hooks/useTitle";
import { useAuth } from "./Components/Hooks/useAuth";


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


function App() {

  const auth = useAuth(firebase.auth)


  const openItemObj = useOpenItem();
  const ordersObj = useOrder();
  const { orders, setOrders } = ordersObj; 
  
  useTitle(openItemObj.openItem)
  const removeFromOrders = (index) => {
    setOrders(orders.filter((order, i) => i !== index))
} 

  return (
    <React.Fragment>
      <Header {...auth}/> {/* передаем auth, а точнее функцию login в кнопку войти*/}
      <Order 
        orders={orders} 
        setOrders={setOrders}
        removeFromOrders={removeFromOrders} 
        {...openItemObj} 
        {...auth}
        firebaseDatabase = {firebase.database}
      ></Order>
      <Menu setOpenItem={openItemObj.setOpenItem} />
      {openItemObj.openItem && <ModalItem {...openItemObj} {...ordersObj} />}
    </React.Fragment>
  );
}

export default App;
