import React, {ReactNode} from "react";
import {rerenderEntireTree} from "../../render";




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


export let addPost:any = () => {
    let newPost:any = {
        id: state.profilePage.postsData.length + 1,
        news: state.profilePage.newPostText,
        likeCount:0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);


}
export let updatePostText:any = (postText:any) => {
    state.profilePage.newPostText = postText
    rerenderEntireTree(state);
}


export let addMessage:any = () => {
    let newMessage:any = {
        id: state.messagesPage.messagesData.length + 1,
        message: state.messagesPage.newMessageText
    }
    state.messagesPage.messagesData.push(newMessage);
    state.messagesPage.newMessageText = ''
    rerenderEntireTree(state);

}

export let updateMessageText = (messageText:any) => {
    state.messagesPage.newMessageText = messageText
    rerenderEntireTree(state);
}


let state:any =  {
    profilePage:{
        postsData:
            [
            {id:1, news:"the weather in St. Petersburg is suitable for studying",likeCount: 99},
            {id:2,news:'tear and sword c:', likeCount: 2},
            {id:3,news:'this is my first project on a react!', likeCount: 8},
            ],
        newPostText:'',
    },
    messagesPage:{
        messagesData: [
            {id: 1, message: 'Blabla'},
            {id: 2, message: 'Lala'},
            {id: 3, message: 'Bruh...'},
            {id: 4, message: 'JINGO'},
            {id: 5, message: 'JANGO'},

        ],
        newMessageText: '',
        dialogsData: [
            {id:1, name:'Ilgiz'},
            {id:2,name:'Pavel'},
            {id:3,name:'Alena'},
            {id:4,name:'Olga'},
            {id:5,name:'Alexander'}
        ]
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
export default state;
