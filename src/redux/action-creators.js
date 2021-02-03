import {
    ADD_NEW_COMMENT,
    ADD_NEW_POST,
    DELETE_POST,
} from "./constants";

export const addNewPostAC = (text) => ({type: ADD_NEW_POST, payload: text})
export const addNewCommentAC = (id, text) => ({type: ADD_NEW_COMMENT, id: id, payload: text})
export const deletePostAC = id => ({type: DELETE_POST, payload: id})
