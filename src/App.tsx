import React from 'react';
import './scss/App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavigationContainer from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import Friends from "./components/Content/Friends/Friends";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import {LoginContainer} from "./components/Content/Login/LoginContainer";


const App = () => {
    return (
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <NavigationContainer/>
                <div className={'app-wrapper__content'}>
                    <Routes>
                        {/*<Route path={"/"} element={<ProfileContainer/>}/>*/}
                        <Route path={"/Profile/:userId"} element={<ProfileContainer/>} />
                        <Route path={"/messages"} element={<MessagesContainer/>} />
                        <Route path = {"/friends/"} element = {<Friends />} />
                        {/*<Route path={"/news/*"} element={<News />}/>*/}
                        <Route path = {"/login/*"} element={<LoginContainer />} />
                    </Routes>
                </div>
            </div>
    );
}

export default App;
