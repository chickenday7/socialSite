import React,{FC, PropsWithChildren} from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Profile from "./components/Content/profile/Profile";
import {propsApp} from "./components/Redux/state";






const App:FC<propsApp> = (props) => {
    return (
        <BrowserRouter>

            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        <Route path={"/*"} element={<Profile postsData={props.state.postsData}  />}/>
                        <Route path={"/profile/*"} element={<Profile postsData={props.state.postsData} />}/>
                        <Route path={"/messages/*"} element={
                            <Messages
                            messagesData={props.state.messagesData}
                            dialogsData={props.state.dialogsData} />}
                        />
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
