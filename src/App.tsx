import React,{FC, PropsWithChildren} from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Profile from "./components/Content/profile/Profile";
import {typeObjectsMessagesData} from "./index";


type Props = {
    dataMessages:Array<typeObjectsMessagesData>,
}


const App:FC<Props> = (props) => {
    return (
        <BrowserRouter>

            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        <Route path={"/*"} element={<Profile/>}/>
                        <Route path={"/profile/*"} element={<Profile/>}/>
                        <Route path={"/messages/*"} element={<Messages dataMessages={props.dataMessages}/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
