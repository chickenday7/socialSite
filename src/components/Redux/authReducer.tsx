import {authAPI} from "../../API/api";
import {Dispatch} from "redux";

const SET_USER_DATA = "SET_USER_DATA"


let initialState = {
    id:null,
    email:null,
    login:null,
    isAuth:false,
    isFetching:false
}
type AuthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
}

const authReducer = (state: AuthReducerType  = initialState, action: ActionType):AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: action.data.id !== undefined
            }
        default:
            return state
    }
}

export default authReducer;


export const authMeThunkCreator = () => {
    return (dispatch:Dispatch) => {
        authAPI.authMe()
            .then((response) => {
                let {id,email,login} = response.data
                dispatch(setUserDataAC(id,email,login))
            })
    }
}


type ActionType =
    SetUserDataACType



type SetUserDataACType = {type: typeof SET_USER_DATA, data:{id:number,email:string,login:string}}
export const setUserDataAC = (id:number, email:string, login:string):SetUserDataACType => {
    return {
        type:SET_USER_DATA,
        data: {id:id,email:email,login:login}
    }
}


