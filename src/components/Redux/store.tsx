import React, {ReactNode} from "react";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";


// export type propsApp = {
//     state: IState
// }
//
//
//
// export type IState = {
//     messagesData?: Array<ObjectsMessageData>,
//     postsData?: Array<ObjectsPostsData>,
//     dialogsData?: Array<ObjectsDialogsData>,
// }


let store: any = {
    _state: {
        profilePage: {
            postsData:
                [
                    {id: 1, news: "the weather in St. Petersburg is suitable for studying", likeCount: 99},
                    {id: 2, news: 'tear and sword c:', likeCount: 2},
                    {id: 3, news: 'this is my first project on a react!', likeCount: 8},
                ],
            newPostText: '',


        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'Blabla'},
                {id: 2, message: 'Lala'},
                {id: 3, message: 'Bruh...'},
                {id: 4, message: 'JINGO'},
                {id: 5, message: 'JANGO'},

            ],
            newMessageText: '',
            dialogsData: [
                {id: 1, name: 'Ilgiz'},
                {id: 2, name: 'Pavel'},
                {id: 3, name: 'Alena'},
                {id: 4, name: 'Olga'},
                {id: 5, name: 'Alexander'}
            ]
        }


    },
    _callSubcriber() {
    },
    subcribe(observe: any) {
        this._callSubcriber = observe;
    },
    getState() {
        return this._state;
    },

    dispatch(action: any) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._callSubcriber();
    }
}


// export type ObjectsDialogsData = {
//     id: number,
//     name: string
// }
//
// export type ObjectsMessageData = {
//     id:number,
//     message:string
// }
// export type ObjectsPostsData = {
//     id: number,
//     news: string,
//     likeCount: number
// }
export default store;
