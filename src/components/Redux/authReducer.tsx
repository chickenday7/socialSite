import {authAPI} from "../../API/api";
import {Dispatch} from "redux";


const SET_USER_DATA = "SET_USER_DATA"
const LOG_OUT = 'LOG_OUT'
const IN_PROGRESS = 'IN_PROGRESS'
const RESULT_AUTH = 'RESULT_AUTH'
const TOGGLE_ERROR = 'TOGGLE_ERROR'


let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    authError: false,
}
export type AuthReducerType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    authError: boolean
}
type ActionType =
    SetUserDataACType |
    LogoutMeACType |
    InProgressACType |
    ResultAuthACType |
    ToggleErrorAC

const authReducer = (state: AuthReducerType = initialState, action: ActionType): AuthReducerType => {
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
                authError: false
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


