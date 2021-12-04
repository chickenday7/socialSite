import React from 'react';
import './scss/App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import Friends from "./components/Content/Friends/Friends";
import ProfileContainer from "./components/Content/profile/ProfileContainer";
import Login from "./components/Content/Login/Login";





const App:any = (props:any) => {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        {/*<Route path={"/*"} element={<Profile/>}/>*/}
                        <Route path={"/profile/:userId"} element={<ProfileContainer/>} />
                        <Route path={"/messages/*"} element={<MessagesContainer/>} />
                        <Route path = {"/friends/*"} element = {<Friends />} />
                        {/*<Route path={"/news/*"} element={<News />}/>*/}
                        <Route path = {"/login/*"} element={<Login />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
