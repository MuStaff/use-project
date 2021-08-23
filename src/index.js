import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createGlobalStyle } from "styled-components";
import Theme from "./Theme";
import "./index.css";

import { store } from "./utils/Toolkit/store";
import { Provider } from "react-redux";

const BasicsStyled = createGlobalStyle`
  body, p, button, a, span, nav, main {
    margin: 0;
    padding: 0;
    text-decoration: none;
  }

  body {
    background-color: ${(props) => props.theme.colors.blue};
    border: 6px ridge ${(props) => props.theme.colors.gray};
    /* box-shadow: 6px 0px 18px -2px rgba(0, 0, 0, 0.8) inset; */
    /* padding: 1rem; */
    color: ${(props) => props.theme.colors.black};
    font-family: 'Test', serif;
    font-size: ${(props) => props.theme.fontSizes.small};
    box-sizing: border-box;
    width: 100vw;
    min-height: 100vh;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <BasicsStyled />
        <App />
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
