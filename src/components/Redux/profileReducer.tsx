import {profileAPI} from "../../API/api";
import {Dispatch} from "redux";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD-LIKE';
const SET_PROFILE = 'SET-PROFILE';
const SET_STATUS = 'SET-STATUS'
const UPDATE_STATUS = 'UPDATE-STATUS'


type PostsData = {
    id: number
    news: string
    likeCount: number
}
export type ProfileType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        github: null | string
        instagram: null | string
        mainLink: null | string
        twitter: null | string
        vk: null | string
        website: null | string
        youtube: null | string
    }
    fullName: string
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    photos: { small: null | string, large: null | string }
    userId: number
}
export type ProfileStateType = {
    postsData: Array<PostsData>
    newPostText: string
    profile: ProfileType | null
    status: string | undefined
}


let initialState: ProfileStateType = {
    postsData:
        [
            {id: 1, news: "the weather in St. Petersburg is suitable for studying", likeCount: 99},
            {id: 2, news: 'tear and sword c:', likeCount: 2},
            {id: 3, news: 'this is my first project on a react!', likeCount: 8},
        ],
    newPostText: '',
    profile: null,
    status: ''
}
type ActionType =
    NewPostAddAC |
    NewPostTextACType |
    AddLikeAC |
    SetProfileUserACType |
    SetStatusACType


const profileReducer = (state: ProfileStateType = initialState, action: ActionType): ProfileStateType => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData,
                    {
                        id: state.postsData.length + 1,
                        news: state.newPostText,
                        likeCount: 0
                    }],
                newPostText: ''
            }
        case UPDATE_POST_TEXT:
            return {
                ...state,
                newPostText: action.postText
            }

        case ADD_LIKE:
            let newArray = state.postsData.map(elem => elem.id === action.id ? {
                ...elem,
                likeCount: elem.likeCount + 1
            } : elem)
            return {
                ...state,
                postsData: newArray
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.textStatus
            }
        default:
            return state
    }
}

export default profileReducer;


export const setProfileTC = (usersID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getProfile(usersID)
            .then((response) => {
                dispatch(setProfileUserAC(response.data))
            })
    }
}
export const setStatusTC = (usersID: number) => {
    return (dispatch: Dispatch) => {
        profileAPI.getStatus(usersID)
            .then((response) => {
                dispatch(setStatusAC(response))
            })
    }
}
export const updateStatusTC = (status: string) => {
    return (dispatch: Dispatch) => {
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0){
                    dispatch(setStatusAC(status))
                }
            })
    }
}



type SetStatusACType = {
    type: typeof SET_STATUS
    textStatus: string
}
const setStatusAC = (textStatus: string): SetStatusACType => {
    return {
        type: SET_STATUS,
        textStatus
    }
}


type SetProfileUserACType = { type: typeof SET_PROFILE, profile: ProfileType }
export const setProfileUserAC = (objProfile: ProfileType): SetProfileUserACType => {
    return {
        type: SET_PROFILE,
        profile: objProfile
    }
}


type NewPostTextACType = { type: typeof UPDATE_POST_TEXT, postText: string }
export const newPostTextActionCreator = (text: string): NewPostTextACType => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}


type NewPostAddAC = { type: typeof ADD_POST }
export const newPostAddActionCreator = (): NewPostAddAC => {
    return {
        type: ADD_POST
    }
}


type AddLikeAC = { type: typeof ADD_LIKE, id: number }
export const addLikeActionCreator = (id: number): AddLikeAC => {
    return {
        type: ADD_LIKE,
        id: id
    }
}