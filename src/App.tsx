import React from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Content from "./components/Content/profile/Content";
import Messages from "./components/Messages/Messages";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>

            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        <Route path={"/"} element={<Content/>}/>
                        <Route path={"/profile"} element={<Content/>}/>
                        <Route path={"/messages"} element={<Messages/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
