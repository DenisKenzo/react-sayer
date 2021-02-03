import mainReducer from "./mainReducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    posts: mainReducer
})

let store = createStore(reducers)

window.store = store;

export default store