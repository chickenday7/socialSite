import {authAPI, profileAPI} from "../../API/api";
import {Dispatch} from "redux";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "./redux-store";

const SET_USER_DATA = "SET_USER_DATA"
const LOG_OUT = 'LOG_OUT'
const IN_PROGRESS = 'IN_PROGRESS'
const RESULT_AUTH = 'RESULT_AUTH'
const TOGGLE_ERROR = 'TOGGLE_ERROR'
const SET_PROFILE_PHOTO = 'SET_PROFILE_PHOTO'


let initialState:AuthReducerType = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    authError: false,
    ownerPhoto: null
}
export type AuthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    authError: boolean
    ownerPhoto: string | null
}
type ActionType =
    SetUserDataACType |
    LogoutMeACType |
    InProgressACType |
    ResultAuthACType |
    ToggleErrorAC |
    SetOwnerPhotoACtype

const authReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case LOG_OUT:
            return {
                id: null,
                email: null,
                login: null,
                isAuth: false,
                isFetching: false,
                authError: false,
                ownerPhoto: null
            }
        case IN_PROGRESS:
            return {
                ...state,
                isFetching: action.stateFetching
            }
        case RESULT_AUTH:
            return {
                ...state,
                isAuth: action.resultAuth
            }
        case TOGGLE_ERROR:
            return {
                ...state,
                authError: action.stateError
            }
        case SET_PROFILE_PHOTO:
            return {
                ...state,
                ownerPhoto:action.ownerPhoto
            }
        default:
            return state
    }
}

export default authReducer;


export const logoutMeTC = () => {
    return (dispatch: Dispatch) => {
        authAPI.logout()
            .then((res) => {
                if (res.resultCode === 0) {
                    dispatch(logoutMeAC())
                }
            })
    }
}
export const setOwnerPhotoTC = (ownerID:number)=>{
    return (dispatch:ThunkDispatch<StateType, unknown, ActionType>) => {
        profileAPI.getProfile(ownerID)
            .then(res => {
                debugger
                if(res.data.photos.small){
                    dispatch(setOwnerPhotoAC(res.data.photos.small))
                }
            })
    }
}

export const authMeTC = () => {
    return (dispatch: Dispatch) => {
        return authAPI.authMe()
            .then((response) => {
                let {id, email, login} = response.data
                dispatch(setUserDataAC(id, email, login, true))
            })
    }
}

export type LoginDataRequestType = {
    email: string
    password: string
    rememberMe: boolean
    captcha?: boolean | undefined
}
export const loginMeTC = (loginData: LoginDataRequestType) => {
    return (dispatch: Dispatch) => {
        dispatch(inProgressAC(true))
        authAPI.login(loginData)
            .then((res) => {
                if (res.resultCode === 0) {
                    authAPI.authMe()
                        .then((response) => {
                            let {id, email, login} = response.data
                            dispatch(setUserDataAC(id, email, login, true))
                            dispatch(resultAuthAC(true))
                            dispatch(inProgressAC(false))
                        })
                } else {
                    dispatch(toggleErrorAC(true))
                    dispatch(inProgressAC(false))
                }
            })
    }
}

type InProgressACType = { type: typeof IN_PROGRESS, stateFetching: boolean }
const inProgressAC = (stateFetching: boolean): InProgressACType => {
    return {
        type: IN_PROGRESS,
        stateFetching
    }
}

type LogoutMeACType = { type: typeof LOG_OUT }
const logoutMeAC = (): LogoutMeACType => {
    return {
        type: LOG_OUT
    }
}

type ResultAuthACType = { type: typeof RESULT_AUTH, resultAuth: boolean }
const resultAuthAC = (resultAuth: boolean): ResultAuthACType => {
    return {
        type: RESULT_AUTH,
        resultAuth
    }
}


type SetUserDataACType = { type: typeof SET_USER_DATA, data: { id: number, email: string, login: string, isAuth: boolean } }
export const setUserDataAC = (id: number, email: string, login: string, isAuth: boolean): SetUserDataACType => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth},

    }
}

export type ToggleErrorAC = { type: typeof TOGGLE_ERROR, stateError: boolean }
export const toggleErrorAC = (stateError: boolean): ToggleErrorAC => {
    return {
        type: TOGGLE_ERROR,
        stateError
    }
}

type SetOwnerPhotoACtype = {type: typeof SET_PROFILE_PHOTO, ownerPhoto:string}
const setOwnerPhotoAC = (ownerPhoto:string):SetOwnerPhotoACtype=>{
    return{
        type: SET_PROFILE_PHOTO,
        ownerPhoto
    }
}


