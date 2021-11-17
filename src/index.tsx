import React,{FC, PropsWithChildren} from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';


export type typeObjectsMessagesData = {
    id: number,
    message:string
};

let messagesData:Array<typeObjectsMessagesData> = [{id: 1, message: 'Blabla'},
    {id: 2, message: 'Lala'},
    {id: 3, message: 'Bruh...'},
    {id: 4, message: 'JINGO'},
    {id: 5, message: 'JANGO'}
];



ReactDOM.render(
   <App dataMessages = {messagesData} />,
  document.getElementById('root')
);


reportWebVitals();







let a = 15;

a = 18;

console.log(a);




