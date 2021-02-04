import {
    ADD_NEW_COMMENT,
    ADD_NEW_POST,
    DELETE_POST,
} from "./constants";


type AddPostType = {
    type: typeof ADD_NEW_POST
    payload: string
}

type AddCommentType = {
    type: typeof ADD_NEW_COMMENT
    payload: string
    id: number
}

type DeletePostType = {
    type: typeof DELETE_POST
    payload: number
}

export type ActionsTypes = AddPostType | AddCommentType | DeletePostType

export const addNewPostAC = (text: string):AddPostType => ({type: ADD_NEW_POST, payload: text})
export const addNewCommentAC = (id: number, text: string):AddCommentType => ({type: ADD_NEW_COMMENT, id: id, payload: text})
export const deletePostAC = (id: number):DeletePostType => ({type: DELETE_POST, payload: id})
