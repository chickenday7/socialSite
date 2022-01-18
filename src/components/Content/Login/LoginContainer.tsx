import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {LoginDataRequestType, loginMeTC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";

type LoginContainerWithContext = MapDispatchToPropsType & MapStateToProps
const LoginContainerWithContext = (props:LoginContainerWithContext) => {

    return <Login {...props}  />
}



type MapDispatchToPropsType = {
    login:(loginData:LoginDataRequestType) => void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>):MapDispatchToPropsType => {
  return {
      login(loginData:LoginDataRequestType){
            dispatch(loginMeTC(loginData))
      }
  }
}
type MapStateToProps = {
    id:number | null
    isFetching:boolean
    isAuth:boolean
}
const mapStateToProps = (state:StateType):MapStateToProps => {
  return{
      id:state.auth.id,
      isFetching: state.auth.isFetching,
      isAuth: state.auth.isAuth
  }
}

export const LoginContainer = connect<MapStateToProps,MapDispatchToPropsType,{},StateType>(mapStateToProps,mapDispatchToProps)(LoginContainerWithContext)