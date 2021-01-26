import {connect} from "react-redux";
import Content from "./content";
import {addPostToggleAC} from "../../redux/mainReducer";

let mapStateToProps = state => {
    let store = state.main_page
    return {
        main_page: store
    }
}

let ContentContainer = connect(mapStateToProps, {addPostToggleAC})(Content)

export default ContentContainer