import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";



let reducer:any = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer
});




export let store:any = createStore(reducer)



