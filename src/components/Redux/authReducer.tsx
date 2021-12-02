import {authAPI} from "../../API/api";

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    isFetching:false
}


const authReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth:true
            }
        default:
            return state
    }
}

export default authReducer;

export const authMeThunkCreator = () => {
    return (dispatch:any) => {
        authAPI.authMe()
            .then((response:any) => {
                let {id,email,login} = response.data.data
                dispatch(setUserDataAC(id,email,login))
            })
    }
}



export const setUserDataAC = (id:any, email:any, login:any) => {
    return {
        type:SET_USER_DATA,
        data: {id:id,email:email,login:login}

    }
}


