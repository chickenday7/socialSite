import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddle from "redux-thunk";





let bigReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth:authReducer
});

export type StateType = ReturnType<typeof bigReducer>


export let store:any = createStore(bigReducer,applyMiddleware(thunkMiddle))



