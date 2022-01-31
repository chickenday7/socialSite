import React from 'react';
import {connect} from "react-redux";
import {AuthReducerType, logoutMeTC, setOwnerPhotoTC} from "../Redux/authReducer";
import Header from "./Header";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "../Redux/redux-store";
import {compose} from "redux";

type HeaderAPIType = MapStateToPropsType & MapDispatchToPropsType
class HeaderAPI extends React.Component<HeaderAPIType> {

    componentDidMount() {
        if(this.props.ownerID){
            this.props.setOwnerPhoto(this.props.ownerID)
        }
    }
    componentDidUpdate(prevProps: Readonly<HeaderAPIType>, prevState: Readonly<{}>, snapshot?: any) {
        if(this.props.auth.isAuth && this.props.auth.isAuth !== prevProps.auth.isAuth){
            this.props.setOwnerPhoto(this.props.ownerID!)
        }
    }

    render() {
        return (<Header {...this.props} />);
    }
}
type MapStateToPropsType = {
    auth:AuthReducerType
    ownerPhoto:string | null | undefined
    ownerID:number | null
}
const mapStateToProps = (state: StateType):MapStateToPropsType => {
    return {
        auth: state.auth,
        ownerPhoto:state.auth.ownerPhoto,
        ownerID:state.auth.id
    }
}

type MapDispatchToPropsType = {
    logout:()=>void
    setOwnerPhoto:(ownerID:number)=>void
}
const mapDispatchToProps = (dispatch:ThunkDispatch<any, any, any>):MapDispatchToPropsType => {
    return {
        logout: () => {
            dispatch(logoutMeTC())
        },
        setOwnerPhoto:(ownerID:number)=>{
            dispatch(setOwnerPhotoTC(ownerID))
        },

    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    React.memo
)(HeaderAPI)





