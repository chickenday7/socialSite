import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {ProfilePage} from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddle from "redux-thunk";


type state = {
    profilePage: ProfilePage
}


let reducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth:authReducer
});



export let store:any = createStore(reducer,applyMiddleware(thunkMiddle))



