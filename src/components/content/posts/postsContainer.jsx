import {connect} from "react-redux";
import Posts from "./posts";
import {deletePostAC, setCurrentPostAC} from '../../../redux/mainReducer';

    let mapStateToProps = state => {
        let store = state.main_page
        return {
            isAddPost: store.isAddPost,
            posts: store.posts,
            currentPost: store.currentPost
        }
    }

    let mapDispatchToProps = dispatch => {
        return {
            deletePostAC: id => dispatch(deletePostAC(id)),
            setCurrentPostAC: post => dispatch(setCurrentPostAC(post))
        }
    }
    let PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer