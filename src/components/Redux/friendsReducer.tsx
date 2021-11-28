const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = "SET_USERS"

let initialState = {
    users: [],
    totalUsers: 0,
    pageSize:0,
    currentPage: 1
}


const friendsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map((elem:any) => {
                    if (elem.id === action.id) {
                        return {
                            ...elem,
                            followed:true}
                    }else{
                        return {
                            ...elem
                        }
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map((elem:any) =>{
                    if (elem.id === action.id){
                        return {...elem, followed:false}
                    }else {
                        return {
                            ...elem
                        }
                    }
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users].concat(...action.array)
            }
        default:
            return state;

    }
}

export const followAC = (userID: any) => {
    return{
        type:FOLLOW,
        id:userID
    }
}

export const unFollowAC = (userID:any) => {
    return{
        type:UNFOLLOW,
        id:userID
    }
}

export const setUsersAC = (newArrayUsers:any) =>{
    return {
        type:SET_USERS,
        array:newArrayUsers
    }
}

export default friendsReducer;