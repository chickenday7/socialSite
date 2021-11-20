import React,{FC, PropsWithChildren} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {addMessage, updateMessageText} from "./components/Redux/state";
import {addPost, updatePostText} from "./components/Redux/state";


export let rerenderEntireTree = (state:any) => {
    ReactDOM.render(

        <App state = {state}
             addPost = {addPost}
             updatePostText = {updatePostText}
             addMessage = {addMessage}
             updateMessageText = {updateMessageText}
        />,
        document.getElementById('root')
    );


    reportWebVitals();

}











