import React,{FC, PropsWithChildren} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {IState} from "./components/Redux/state";




ReactDOM.render(

   <App state = {state}  />,
  document.getElementById('root')
);


reportWebVitals();









