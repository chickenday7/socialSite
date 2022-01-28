import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import friendsReducer from "./friendsReducer";
import authReducer from "./authReducer";
import thunkMiddle from "redux-thunk";
import {appReducer} from "./appReducer";





let bigReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    friendsPage: friendsReducer,
    auth:authReducer,
    app:appReducer
});

export type StateType = ReturnType<typeof bigReducer>


export let store = createStore(bigReducer,applyMiddleware(thunkMiddle))



