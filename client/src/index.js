import React from 'react';
import "./assets/styles/index.css"
import ReactDOM from "react-dom";
import App from "./App";
import {ContextProvider} from "./contexts/ContextProvider";
import {registerLicense} from '@syncfusion/ej2-base'


registerLicense("ORg4AjUWIQA/Gnt2VVhjQlFac1ZJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRd0RgWX1ccnJXT2BUUUM=");



ReactDOM.render(
        <ContextProvider>
            <App/>
        </ContextProvider>
    ,
    document.getElementById("root")
)
