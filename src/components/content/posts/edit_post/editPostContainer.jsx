import {connect} from "react-redux";
import React from "react";
import {addNewCommentAC, changeInputNewCommentAC} from "../../../../redux/mainReducer";
import EditPost from "./edit_post";


    let mapStateToProps = state => {
        let store = state.main_page
        return {
            currentPost: store.currentPost,
            posts: store.posts,
            inputValueNewComment: store.inputValueNewComment,
            postID: store.postID
        }
    }


    let mapDispatchToProps = dispatch => {
        return {
            handleChangeInputText: text => dispatch(changeInputNewCommentAC(text)),
            addNewComment: id => dispatch(addNewCommentAC(id))
        }
    }

    let EditPostContainer = connect(mapStateToProps, mapDispatchToProps)(EditPost)

export default EditPostContainer