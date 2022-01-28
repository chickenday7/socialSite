import React from 'react';
import './scss/App.scss';
import HeaderContainer from "./components/Header/HeaderContainer";
import NavigationContainer from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import MessagesContainer from "./components/Content/Messages/MessagesContainer";
import Friends from "./components/Content/Friends/Friends";
import ProfileContainer from "./components/Content/Profile/ProfileContainer";
import LoginContainer from "./components/Content/Login/LoginContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {setInitializeTC} from "./components/Redux/appReducer";
import {StateType} from "./components/Redux/redux-store";
import Preloader from "./components/Preloader/Preloader";

type AppPropsType = MapDispatchToPropsType & MapStateToPropsType

class App extends React.Component<AppPropsType, {}> {
    componentDidMount() {
        this.props.checkInitialize()
    }

    render() {
        return (
            <>
                {!this.props.isInitialized
                    ? <Preloader/>
                    :<div className={'app-wrapper'}>
                        <HeaderContainer/>
                        <NavigationContainer/>
                        <div className={'app-wrapper__content'}>
                            <Routes>
                                <Route path={"/"} element={<ProfileContainer/>}/>
                                <Route path={"/Profile/:userId"} element={<ProfileContainer/>}/>
                                <Route path={"/messages/*"} element={<MessagesContainer/>}/>
                                <Route path={"/friends/"} element={<Friends/>}/>
                                {/*<Route path={"/news/*"} element={<News />}/>*/}
                                <Route path={"/login/*"} element={<LoginContainer/>}/>
                            </Routes>
                        </div>
                    </div>
                }

            </>
        );
    }
}


type MapDispatchToPropsType = {
    checkInitialize: () => void
}
let mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>): MapDispatchToPropsType => {
    return {
        checkInitialize: () => {
            dispatch(setInitializeTC())
        }
    }
}


type MapStateToPropsType = {
    isInitialized: boolean
    isAuth:boolean
}
let mapStateToProps = (state: StateType): MapStateToPropsType => {
    return {
        isInitialized: state.app.isInitialized,
        isAuth: state.auth.isAuth
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(App);
