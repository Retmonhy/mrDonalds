import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./Components/Header/Header";
import Menu from './Components/Menu/Menu';
import dbMenu from "./DBMenu";
import { ModalItem }  from "./Components/Modal/ModalItem";
import { Order }  from "./Components/Order/Order";
import useOpenItem from "./Components/Hooks/useOpenItem";
import useOrder from "./Components/Hooks/useOrder";



const GlobalStyles = createGlobalStyle`
html, body{ box-sizing: border-box; margin: 0; padding: 0;}
body{font-size: 20px; font-family: Roboto, sans-serif; }
*, *:before, *:after { box-sizing: inherit; user-select: none;}
h1, h2, h3{ font-family: Pacifico, sans-serif; font-weight: 400; margin: 0; padding: 0; }
a { text-decoration: none; color: inherit;}
p, ul { padding: 0; margin: 0;}
ul { list-style: none;}
button{ cursor: pointer;}
button:disabled{ cursor: no-drop; opacity: 0.6;}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}
`; 


function App() {

  const openItemObj = useOpenItem();
  const ordersObj = useOrder();
  const { orders, setOrders } = ordersObj; 


  const removeFromOrders = (index) => {
    setOrders(orders.filter((order, i) => i !== index))
} 
  return (
    <React.Fragment>
      <GlobalStyles/>
      <Header/>
      <Order orders={orders} removeFromOrders={removeFromOrders} {...openItemObj}></Order>
      <Menu listItem={dbMenu} {...openItemObj} />
      {openItemObj.openItem && <ModalItem {...openItemObj} {...ordersObj} />}
    </React.Fragment>
  );
}

export default App;
