import {subscribeAPI, usersAPI, UserType} from "../../API/api";
import {Dispatch} from "redux";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'


let initialState = {
    users: [],
    totalUsers: 0,
    pageSize: 20,
    currentPage: 1,
    isPreloader: false,
    isFollowing: []
}


export type FriendsStateType = {
    users: Array<UserType>
    totalUsers: number
    pageSize: number
    currentPage: number
    isPreloader: boolean
    isFollowing: Array<number>
}


const friendsReducer = (state: FriendsStateType = initialState, action: actionType): FriendsStateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((elem: any) => {
                    if (elem.id === action.id) {
                        return {
                            ...elem,
                            followed: true
                        }
                    } else {
                        return {
                            ...elem
                        }
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((elem: any) => {
                    if (elem.id === action.id) {
                        return {...elem, followed: false}
                    } else {
                        return {
                            ...elem
                        }
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.array]
            }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.newCurrent
            }
        }
        case SET_TOTAL_USERS: {
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        }
        case TOGGLE_PRELOADER: {
            return {
                ...state,
                isPreloader: action.isPreloader
            }
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                isFollowing: state.isPreloader
                    ? [...state.isFollowing, action.id]
                    : [...state.isFollowing.filter((id) => id != action.id)]
            }
        }
        default:
            return state;

    }
}

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togglePreloaderAC(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then((response) => {

                dispatch(setUsersAC(response.items));
                dispatch(totalUsersAC(response.totalCount));
                dispatch(togglePreloaderAC(false));
            });
    }
}
export const changePageThunkCreator = (newCurrentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(newPageAC(newCurrentPage));
        dispatch(togglePreloaderAC(true));
        usersAPI.getUsers(newCurrentPage, pageSize)
            .then((response) => {

                dispatch(setUsersAC(response.items));
                dispatch(togglePreloaderAC(false));
            });
    }
}

export const followThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togglePreloaderAC(true));
        dispatch(toggleFollowingAC(id))
        subscribeAPI.follow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(followAC(id))
                }
                dispatch(togglePreloaderAC(false))
                dispatch(toggleFollowingAC(id))
            })


    }
}
export const unfollowThunkCreator = (id: number) => {
    return (dispatch: Dispatch) => {
        dispatch(togglePreloaderAC(true));
        dispatch(toggleFollowingAC(id))
        subscribeAPI.unfollow(id)
            .then((data) => {
                if (data.resultCode === 0) {
                    dispatch(unFollowAC(id))
                }
                dispatch(togglePreloaderAC(false))
                dispatch(toggleFollowingAC(id))
            })
    }
}

type actionType =
    ToggleFollowinACType |
    TogglePreloaderType |
    TotalUserACType |
    NewPageACType |
    FollowACType |
    UnFollowACType |
    SetUsersACType


type ToggleFollowinACType = { type: typeof TOGGLE_FOLLOWING, id: number }
export const toggleFollowingAC = (id: number): ToggleFollowinACType => {
    return {
        type: TOGGLE_FOLLOWING,
        id: id
    }
}

type TogglePreloaderType = { type: typeof TOGGLE_PRELOADER, isPreloader: boolean }
export const togglePreloaderAC = (actionPreloader: boolean): TogglePreloaderType => {
    return {
        type: TOGGLE_PRELOADER,
        isPreloader: actionPreloader
    }
}

type TotalUserACType = { type: typeof SET_TOTAL_USERS, totalUsers: number }
export const totalUsersAC = (totalUsers: number): TotalUserACType => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers: totalUsers
    }
}

type NewPageACType = { type: typeof SET_CURRENT_PAGE, newCurrent: number }
export const newPageAC = (newCurrent: number): NewPageACType => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrent: newCurrent
    }
}

type FollowACType = { type: typeof FOLLOW, id: number }
export const followAC = (userID: number): FollowACType => {
    return {
        type: FOLLOW,
        id: userID
    }
}

type UnFollowACType = { type: typeof UNFOLLOW, id: number }
export const unFollowAC = (userID: number): UnFollowACType => {
    return {
        type: UNFOLLOW,
        id: userID
    }
}

type SetUsersACType = { type: typeof SET_USERS, array: Array<UserType> }
export const setUsersAC = (newArrayUsers: Array<UserType>): SetUsersACType => {
    return {
        type: SET_USERS,
        array: newArrayUsers
    }
}

export default friendsReducer;