import axios from "axios";

const instance:any = axios.create({
    withCredentials:true,
    headers: {
        'API-KEY': '8c93655a-bf70-40c8-9c2a-4929b88b2e49'
    },
    baseURL: 'https://social-network.samuraijs.com/api/1.0/'
})

export const usersAPI = {
    getUsers(currentPage:any, pageSize:any){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response: { data: any; }) => {
                return response.data
            })
    },
}

export const subscribeAPI = {
    follow(id:any){
        return instance.post(`follow/${id}`)
            .then((response:any) =>{
                return response.data
            })
    },


    unfollow(id:any){
    return instance.delete(`follow/${id}`)
        .then((response:any) => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile(userID:any){
        return instance.get(`profile/${userID}`)
    }
}

export const authAPI = {
    authMe(){
        return instance.get('auth/me')
            .then((response:any)=>{
                return response.data
            })
    }
}