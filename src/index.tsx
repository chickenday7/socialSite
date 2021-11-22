import React,{FC, PropsWithChildren} from 'react';
import './index.scss';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {store} from "./components/Redux/redux-store";




let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <App state = {store.getState()}
             dispatch = {store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );
    reportWebVitals();
}
rerenderEntireTree(store.state);


store.subscribe( () => {
  rerenderEntireTree(store.getState())
});












