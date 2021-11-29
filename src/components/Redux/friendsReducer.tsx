const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_PRELOADER = 'TOGGLE_PRELOADER'

let initialState = {
    users: [],
    totalUsers: 0,
    pageSize: 20,
    currentPage: 1,
    isPreloader: false
}


const friendsReducer = (state: any = initialState, action: any) => {

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
        default:
            return state;

    }
}
export const togglePreloaderAC = (actionPreloader:any) =>{
    return {
        type: TOGGLE_PRELOADER,
        isPreloader: actionPreloader
    }
}
export const totalUsersAC = (totalUsers:any) => {
    return {
        type: SET_TOTAL_USERS,
        totalUsers:totalUsers
    }
}

export const newPageAC = (newCurrent: any) => {
    return {
        type: SET_CURRENT_PAGE,
        newCurrent: newCurrent
    }
}

export const followAC = (userID: any) => {
    return {
        type: FOLLOW,
        id: userID
    }
}

export const unFollowAC = (userID: any) => {
    return {
        type: UNFOLLOW,
        id: userID
    }
}

export const setUsersAC = (newArrayUsers: any) => {
    return {
        type: SET_USERS,
        array: newArrayUsers
    }
}

export default friendsReducer;