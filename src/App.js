import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./Components/Header"


const GlobalStyles = createGlobalStyle`
html, body{ box-sizing: border-box; margin: 0; padding: 0;}
body{font-size: 20px; font-famiy: Roboto, sans-serif; }
*, *:before, *:after { box-sizing: inherit;}
h1, h2, h3{ font-family: Pacifico, sans-serif; margin: 0; padding: 0;}
a { text-decoration: none; color: inherit;}
p, ul { padding: 0; margin: 0;}
ul { list-style: none;}

`; 


function App() {
  return (
    <React.Fragment>
      <GlobalStyles/>
        <Header></Header>
    </React.Fragment>
  );
}

export default App;
