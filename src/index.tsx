import React,{FC, PropsWithChildren} from 'react';
import './index.scss';
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./components/Redux/state";





let rerenderEntireTree = (state:any) => {
    ReactDOM.render(
        <App state = {store.getState()}
             addPost = {store.addPost.bind(store)}
             updatePostText = {store.updatePostText.bind(store)}
             addMessage = {store.addMessage.bind(store)}
             updateMessageText = {store.updateMessageText.bind(store)}
        />,
        document.getElementById('root')
    );
    reportWebVitals();
}
rerenderEntireTree(store.state);

store.subcribe(rerenderEntireTree);












