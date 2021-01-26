import PostsContainer from "../posts/postsContainer";
import HeaderContainer from "../../header/headerContainer";

let MainPage = () => {
    let textInHeader = 'World\'s most used time waster'
    return <div>
        <HeaderContainer showHeading text={textInHeader} mainPage/>
        <PostsContainer/>
    </div>

}

export default MainPage