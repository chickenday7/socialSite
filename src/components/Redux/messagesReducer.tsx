const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
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


const messagesReducer = (state: any = initialState, action: any) => {
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


export const newMessageTextActionCreator = (text: any) => {
    return {
        type: UPDATE_MESSAGE_TEXT,
        messageText: text
    }
}
export const newMessageAddActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}

