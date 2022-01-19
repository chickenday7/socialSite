const ADD_MESSAGE = 'ADD_MESSAGE';


export type MessageType = {
    id:number
    message:string
}
export type UserType = {
    id:number
    name:string
}
export type MessagesStateType = {
    messageData: Array<MessageType>
    arrayUsers:Array<UserType>
}

let initialState:MessagesStateType = {
    messageData: [
        {id: 1, message: 'Blabla'},
        {id: 2, message: 'Lala'},
        {id: 3, message: 'Bruh...'},
        {id: 4, message: 'JINGO'},
        {id: 5, message: 'JANGO'},

    ],
    arrayUsers: [
        {id: 1, name: 'Ilgiz'},
        {id: 2, name: 'Pavel'},
        {id: 3, name: 'Alena'},
        {id: 4, name: 'Olga'},
        {id: 5, name: 'Alexander'}
    ]
}


const messagesReducer = (state: MessagesStateType = initialState, action: actionsType):MessagesStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return  {
                ...state,
                messageData: [...state.messageData,
                    {
                        id: state.messageData.length + 1,
                        message: action.text
                    }]
            }
        default:
            return state
    }
}

export default messagesReducer;

type actionsType =
    NewMessageAddACType






type NewMessageAddACType = {type:typeof ADD_MESSAGE,text:string}
export const addMessageAC = (text:string):NewMessageAddACType => {
    return {
        type: ADD_MESSAGE,
        text
    }
}

