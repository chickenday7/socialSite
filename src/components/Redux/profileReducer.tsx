import {profileAPI} from "../../API/api";

const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const ADD_POST = 'ADD-POST';
const ADD_LIKE = 'ADD_LIKE';
const SET_PROFILE = 'SET_PROFILE';

type PostsData = {
    id:number
    news:string
    likeCount:number
}
export type ProfilePage = {
    postsData:Array<PostsData>
    newPostText: string
    profile:Object
}


let initialState:ProfilePage = {
    postsData:
        [
            {id: 1, news: "the weather in St. Petersburg is suitable for studying", likeCount: 99},
            {id: 2, news: 'tear and sword c:', likeCount: 2},
            {id: 3, news: 'this is my first project on a react!', likeCount: 8},
        ],
    newPostText: '',
    profile: {}


}


const profileReducer = (state: ProfilePage = initialState, action: any) => {
    debugger
    switch (action.type) {
        case ADD_POST:
            return  {
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
            return  {
                ...state,
                newPostText: action.postText
            }

        case ADD_LIKE:
            let newArray = state.postsData.map(elem => elem.id === action.id ? {...elem,likeCount:elem.likeCount +1}: elem)
            return  {
                ...state,
                postsData: newArray
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }


}

export default profileReducer;

export const getProfileThunkCreator = (usersID:any) => {
    return (dispatch:any) => {
        profileAPI.getProfile(usersID)
            .then((response:any) => {
                dispatch(setProfileUserAC(response.data))
            })
    }
}


type setProfileUserAC = (objProfile:object) => {type:string,profile:object} //УТОЧНИТЬ!!!!!!!!!!!!!!!
export const setProfileUserAC:setProfileUserAC = (objProfile) => {
    return {
        type: SET_PROFILE,
        profile: objProfile
    }
}

type NewPostTextAC=(text:string)=>{type:string,postText:string}
export const newPostTextActionCreator: NewPostTextAC = (text) => {
    return {
        type: UPDATE_POST_TEXT,
        postText: text
    }
}

type NewPostAddAC = () => {type:string}
export const newPostAddActionCreator: NewPostAddAC = () => {
    return {
        type: ADD_POST
    }
}

type AddLikeAC = (id:number) => {type:string, id:number}
export const addLikeActionCreator:AddLikeAC = (id) => {
    return {
        type: ADD_LIKE,
        id: id
    }
}