import nextId from "react-id-generator";

const ADD_ELEMENT_TOGGLE = 'ADD_ELEMENT_TOGGLE'
const CHANGE_INPUT_NEW_POST = 'CHANGE_INPUT_NEW_POST'
const CHANGE_INPUT_NEW_COMMENT = 'CHANGE_INPUT_NEW_COMMENT'
const ADD_NEW_POST = 'ADD_NEW_POST'
const ADD_NEW_COMMENT = 'ADD_NEW_COMMENT'
const DELETE_POST = 'DELETE_POST'
const SET_CURRENT_POST = 'SET_CURRENT_POST'
const RESET_INPUTS = 'RESET_INPUTS'


    let initialState = {
        posts: [
            {id: 1, name: 'First item first time played csgo ime p', comments: [{comment_title: 'Cyberpunk 2077 is an open-world, action-adventure story set in Night City, a megalopolis obsessed with power, glamour and body modification. Assume the role of V, a mercenary outlaw going after a one-of-a-kind implant that is the key to immortality. You can customize your character’s cyberware'}, {comment_title: 'My 11 comment'}]},
            {id: 2, name: 'Second item', comments: []},
            {id: 3, name: 'Third item', comments: [{comment_title: 'My 3 comment'}]},
            {id: 4, name: 'First item first time played csgo ime p', comments: [{comment_title: 'My 1 comment'}, {comment_title: 'My 11 comment'}]},
            {id: 5, name: 'Second item', comments: [{comment_title: 'My 2 comment'}]},
            {id: 6, name: 'First item first time played csgo ime p', comments: [{comment_title: 'My 1 comment'}, {comment_title: 'My 11 comment'}]},
            {id: 7, name: 'Second item', comments: [{comment_title: 'My 2 comment'}]},
            {id: 8, name: 'Third item', comments: [{comment_title: 'My 3 comment'}]},
        ],
        isAddPost: false,
        isEditPost: false,
        inputValueNewPost: '',
        inputValueNewComment: '',
        postID: null
    }

    let mainReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_ELEMENT_TOGGLE:
                return {...state, isAddPost: !state.isAddPost}
            case CHANGE_INPUT_NEW_POST:
                return {...state, inputValueNewPost: action.text}
            case CHANGE_INPUT_NEW_COMMENT:
                return {...state, inputValueNewComment: action.text}
            case ADD_NEW_COMMENT:
                let newComment = {comment_title: state.inputValueNewComment}
                return {
                    ...state,
                    posts: state.posts.map(p => {
                        if (p.id === action.id) {
                            return {
                                ...p,
                                comments: [...p.comments, newComment]
                            }
                        }
                        return p
                    }),
                    inputValueNewComment: ''
                }
            case ADD_NEW_POST:
                let newPost = {id: nextId(), name: state.inputValueNewPost, comments: []}
                return {...state, posts: [...state.posts, newPost], inputValueNewPost: ''}
            case DELETE_POST:
                return {...state, posts: state.posts.filter(i => i.id !== action.id)}
            case SET_CURRENT_POST:
                return {...state, postID: action.id}
            case RESET_INPUTS:
                return {...state, inputValueNewComment: '', inputValueNewPost: ''}
            default: {
                    return state
            }
        }
    }

    export const addPostToggleAC = () => ({type: ADD_ELEMENT_TOGGLE})
    export const changeInputNewPostAC = text => ({type: CHANGE_INPUT_NEW_POST, text})
    export const changeInputNewCommentAC = text => ({type: CHANGE_INPUT_NEW_COMMENT, text})
    export const addNewPostAC = () => ({type: ADD_NEW_POST})
    export const addNewCommentAC = (id) => ({type: ADD_NEW_COMMENT, id})
    export const deletePostAC = id => ({type: DELETE_POST, id})
    export const setCurrentPostAC = id => ({type: SET_CURRENT_POST, id})
    export const resetInputsAC = () => ({type: RESET_INPUTS})

    export default mainReducer