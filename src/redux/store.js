import mainReducer from "./mainReducer";
import {combineReducers, createStore} from "redux";


let reducers = combineReducers({
    main_page: mainReducer
})

let store = createStore(reducers)

window.store = store;

export default store