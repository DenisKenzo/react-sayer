import {connect} from "react-redux";
import NewPost from "./new_post";
import {addNewPostAC, changeInputNewPostAC} from "../../../../redux/mainReducer";

    let mapStateToProps = state => {
        let store = state.main_page
        return {
            inputValueNewPost: store.inputValueNewPost,
            posts: store.posts
        }
    }

    let mapDispatchToProps = dispatch => {
        return {
            handleChangeInputText: text => dispatch(changeInputNewPostAC(text)),
            addNewPost: () => dispatch(addNewPostAC())
        }
    }

    let NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost)

export default NewPostContainer