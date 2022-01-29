import React from 'react';
import './index.scss';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./components/Redux/redux-store";
import {HashRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
        <HashRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </HashRouter>,
        document.getElementById('root')
    );
    reportWebVitals();













