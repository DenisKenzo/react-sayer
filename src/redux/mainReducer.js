import {
    ADD_NEW_COMMENT,
    ADD_NEW_POST,
    DELETE_POST,
} from "./constants";

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
        ]
    }


    let mainReducer = (state = initialState, action) => {
        switch (action.type) {
            case ADD_NEW_COMMENT:
                let newComment = {comment_title: action.payload}
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
                let newID = Date.now()
                let newPost = {id: newID, name: action.payload, comments: []}
                return {...state, posts: [...state.posts, newPost], inputValueNewPost: ''}
            case DELETE_POST:
                return {...state, posts: state.posts.filter(i => i.id !== action.payload)}
            default: {
                    return state
            }
        }
    }


    export default mainReducer