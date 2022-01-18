const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


type messagesData = {
    id:number
    message:string
}
type dialogsData = {
    id:number
    name:string
}
export type messagesStateType = {
    messagesData: Array<messagesData>
    newMessageText:string
    dialogsData:Array<dialogsData>
}

let initialState:messagesStateType = {
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


const messagesReducer = (state: messagesStateType = initialState, action: actionsType):messagesStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                messagesData: [...state.messagesData,
                    {
                        id: state.messagesData.length + 1,
                        message: state.newMessageText
                    }],
                newMessageText: ''
            }
        case UPDATE_MESSAGE_TEXT:
            return  {
                ...state,
                newMessageText: action.messageText
            }
        default:
            return state
    }
}

export default messagesReducer;

type actionsType =
    NewMessageAddACType |
    NewMessageTextACType


type NewMessageTextACType = {type:typeof UPDATE_MESSAGE_TEXT,messageText:string}
export const newMessageTextActionCreator = (text:string):NewMessageTextACType => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: text
    }
}



type NewMessageAddACType = {type:typeof ADD_MESSAGE}
export const newMessageAddActionCreator = ():NewMessageAddACType => {
    return {
        type: ADD_MESSAGE
    }
}

