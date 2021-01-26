import {connect} from "react-redux";
import Header from "./header";
import {resetInputsAC} from "../../redux/mainReducer";

let mapStateToProps = state => {
    let store = state.main_page
    return {
        posts: store.posts
    }
}

let mapDispatchToProps = dispatch => {
    return {
        resetInputs: () => dispatch(resetInputsAC())
    }
}
let HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer