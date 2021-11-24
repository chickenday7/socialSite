import React,{FC, PropsWithChildren} from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route, Link, Routes} from "react-router-dom";
import Profile from "./components/Content/profile/Profile";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import News from "./News";
import Friends from "./components/Content/Friends/Friends";






const App:any = (props:any) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        {/*<Route path={"/*"} element={<Profile/>}/>*/}


                        <Route path={"/profile"} element={<Profile
                            profilePage = {props.state.profilePage}
                            dispatch = {props.dispatch}
                        />}
                        />


                        <Route path={"/messages/*"} element={
                            <MessagesContainer

                            />}
                        />
                        <Route path = {"/friends/*"} element = {<Friends />} />
                        <Route path={"/news/*"} element={<News />}/>
                    </Routes>
                </div>
            </div>
    );
}

export default App;
