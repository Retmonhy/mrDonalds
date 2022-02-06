import React, { useState } from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./Components/Header";
import Menu from './Components/Menu';
import dbMenu from "./DBMenu";
import { ModalItem }  from "./Components/ModalItem";
import { Order }  from "./Components/Order";

const GlobalStyles = createGlobalStyle`
html, body{ box-sizing: border-box; margin: 0; padding: 0;}
body{font-size: 20px; font-family: Roboto, sans-serif; }
*, *:before, *:after { box-sizing: inherit;}
h1, h2, h3{ font-family: Pacifico, sans-serif; font-weight: 400; margin: 0; padding: 0; }
a { text-decoration: none; color: inherit;}
p, ul { padding: 0; margin: 0;}
ul { list-style: none;}
button{ cursor: pointer;}

`; 


function App() {

  const [openItem, setOpenItem] = useState(null);
  console.log(openItem)
  return (
    <React.Fragment>
        <GlobalStyles/>
        <Header></Header>
        <Order></Order>
        <Menu ListItem={dbMenu} setOpenItem={setOpenItem}/>
        <ModalItem openItem={openItem} setOpenItem={setOpenItem}/>
    </React.Fragment>
  );
}

export default App;
