import styled, {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
 html {
      height: 100%;
  }

  body {
      background-image: url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4146&q=80);
      background-size: cover;
      margin: 0;
      padding: 0 20px;
      display: flex;
      justify-content: center;
  }

  * {
      box-sizing: border-box;
      font-family: 'Catamaran', sans-serif;
  }
  `