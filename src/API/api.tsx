import axios from "axios";
import {LoginDataRequestType} from "../components/Redux/authReducer";


type ResponseType<T> = {
    resultCode: number
    messages: Array<string>
    data: T
}
const instance = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})


export type UserType = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
type GetUsersType = {
    items: Array<UserType>
    totalCount: number
    error: string
}
export const usersAPI = {
    getUsers(page: number, count: number) {
        return instance.get<GetUsersType>(`users?page=${page}&count=${count}`)
            .then((response) => {
                return response.data
            })
    },
}
export const subscribeAPI = {
    follow(id: number) {
        return instance.post<ResponseType<object>>(`follow/${id}`)
            .then((response) => {
                return response.data
            })
    },
    unfollow(id: number) {
        return instance.delete<ResponseType<object>>(`follow/${id}`)
            .then((response) => {
                return response.data
            })
    }
}


export type EditProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
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
}
type GetProfileType = {
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
export const profileAPI = {
    getProfile(userID: number) {
        return instance.get<GetProfileType>(`profile/${userID}`)
    },
    getStatus(userID: number) {
        return instance.get<string>(`profile/status/${userID}`)
            .then(response => response.data)
    },
    updateStatus(status: string) {
        return instance.put<ResponseType<{status:string}>>(`profile/status`, {status: status})
    },
    editProfile(profile:EditProfileType){
        return instance.put<ResponseType<EditProfileType>>('profile', profile)
            .then((response)=>{
                return response.data
            })
    },
    uploadProfilePhoto(image:object){
        return instance.put('/profile/photo',image)
            .then((response)=>{
                return response.data
            })
    }
}

type DataAuthType = {
    id: number
    email: string
    login: string
}
export const authAPI = {
    authMe() {
        return instance.get<ResponseType<DataAuthType>>('auth/me')
            .then((response) => {
                return response.data
            })
    },
    login({email,password,rememberMe,captcha}:LoginDataRequestType){
        return instance.post<ResponseType<any>>('/auth/login',{email,password,rememberMe,captcha})
            .then((res)=>{
                return res.data
            })
    },
    logout(){
        return instance.delete<ResponseType<{userId:number}>>('/auth/login')
            .then((res)=>{
                return res.data
            })
    }
}