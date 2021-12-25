import React from 'react';
import './index.scss';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./components/Redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App state={store.getState()}
                     dispatch={store.dispatch.bind(store)}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
    reportWebVitals();













