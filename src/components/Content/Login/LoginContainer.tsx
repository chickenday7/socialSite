import React from "react";
import Login from "./Login";
import {connect} from "react-redux";
import {ThunkDispatch} from "redux-thunk";
import {LoginDataRequestType, loginMeTC, ToggleErrorAC, toggleErrorAC} from "../../Redux/authReducer";
import {StateType} from "../../Redux/redux-store";
import {compose} from "redux";

type LoginContainerType = MapDispatchToPropsType & MapStateToProps
const LoginContainer = (props:LoginContainerType) => {

    return <Login {...props}  />
}


type MapDispatchToPropsType = {
    login:(loginData:LoginDataRequestType) => void
    toggleError:(stateError:boolean)=>void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<StateType, {},ToggleErrorAC >):MapDispatchToPropsType => {
  return {
      login(loginData:LoginDataRequestType){
            dispatch(loginMeTC(loginData))
      },
      toggleError(stateError:boolean){
            dispatch(toggleErrorAC(stateError))
      }
  }
}
type MapStateToProps = {
    id:number | null
    isFetching:boolean
    isAuth:boolean
    authError:boolean
}
const mapStateToProps = (state:StateType):MapStateToProps => {
  return{
      authError: state.auth.authError,
      id:state.auth.id,
      isFetching: state.auth.isFetching,
      isAuth: state.auth.isAuth
  }
}



export default compose(
    connect<MapStateToProps,MapDispatchToPropsType,{},StateType>(mapStateToProps,mapDispatchToProps),
)(LoginContainer)


