import React,{FC, PropsWithChildren} from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Messages from "./components/Content/Messages/Messages";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Profile from "./components/Content/profile/Profile";







const App:any = (props:any) => {

    return (
        <BrowserRouter>

            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        {/*<Route path={"/*"} element={<Profile/>}/>*/}


                        <Route path={"/profile/*"} element={<Profile
                            profilePage = {props.state.profilePage}
                            addPost = {props.addPost}
                            updatePostText = {props.updatePostText}
                        />}
                        />


                        <Route path={"/messages/*"} element={
                            <Messages
                            messagesPage = {props.state.messagesPage}
                            addMessage = {props.addMessage}
                            updateMessageText = {props.updateMessageText}

                            />}
                        />
                    </Routes>
                </div>
            </div>

        </BrowserRouter>
    );
}

export default App;
