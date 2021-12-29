import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

type ResponseType<T> = {
    resultCode: number
    messages:Array<string>
    data: T
}



export type UserType = {
    id: number
    name: string
    status: string
    photos:{
        small:string
        large:string
    }
    followed:boolean
}
type GetUsersType = {
    items:Array<UserType>
    totalCount: number
    error:string
}
export const usersAPI = {
    getUsers(page:number, count:number){
        return instance.get<GetUsersType>(`users?page=${page}&count=${count}`)
            .then((response) => {
                debugger
                return response.data
            })
    },
}

export const subscribeAPI = {
    follow(id:number){
        return instance.post<ResponseType<object>>(`follow/${id}`)
            .then((response) =>{
                return response.data
            })
    },



    unfollow(id:number){
    return instance.delete<ResponseType<object>>(`follow/${id}`)
        .then((response) => {
            return response.data
        })
    }
}




type GetProfileType = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
    photos: {
        small:string
        large:string
    }
}
export const profileAPI = {
    getProfile(userID:number){
        return instance.get<GetProfileType>(`profile/${userID}`)
    }
}


type DataAuthType = {
    id:number
    email:string
    login:string
}
export const authAPI = {
    authMe(){
        return instance.get<ResponseType<DataAuthType>>('auth/me')
            .then((response)=>{
                return response.data
            })
    }
}