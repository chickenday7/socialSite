import React from 'react';
import './scss/App.scss';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import Friends from "./components/Content/Friends/Friends";
import ProfileContainer from "./components/Content/profile/ProfileContainer";




const App:any = (props:any) => {
    return (
            <div className={'app-wrapper'}>
                <Header/>
                <Navigation/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        {/*<Route path={"/*"} element={<Profile/>}/>*/}
                        <Route path={"/profile"} element={<ProfileContainer/>} />
                        <Route path={"/messages/*"} element={<MessagesContainer/>} />
                        <Route path = {"/friends/*"} element = {<Friends />} />
                        {/*<Route path={"/news/*"} element={<News />}/>*/}
                    </Routes>
                </div>
            </div>
    );
}

export default App;
