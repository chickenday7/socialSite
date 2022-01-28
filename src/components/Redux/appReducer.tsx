import {authMeTC} from "./authReducer";
import {ThunkDispatch} from "redux-thunk";
import {StateType} from "./redux-store";

const SET_INITIALIZED = 'SET_INITIALIZED'


type AppReducerType = {
    isInitialized:boolean
}
const initialState:AppReducerType = {
    isInitialized:false
}
type ActionType = SetInitializedACType

export const appReducer = (state = initialState,action:ActionType):AppReducerType => {
    switch (action.type){
        case SET_INITIALIZED:
            return {
                ...state,
                isInitialized:true
            }
        default:
            return state
    }
}

type SetInitializedACType = {type:typeof SET_INITIALIZED}
const setInitilaizeAC = ():SetInitializedACType => {
  return{
      type:SET_INITIALIZED
  }
}

export const setInitializeTC = () => {
  return (dispatch:ThunkDispatch<StateType, unknown , SetInitializedACType>) => {
      let promise =  dispatch(authMeTC())
      Promise.all([promise])
          .then(()=>{
              dispatch(setInitilaizeAC())
          })
  }
}

