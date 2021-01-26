import {Route} from "react-router-dom";
import MainPage from "./main_page/main_page";
import NewPostContainer from "./posts/new_post/newPostContainer";
import EditPostContainer from "./posts/edit_post/editPostContainer";

let Content = () => {
    return <div>
        <Route exact path='/' render={() => <MainPage/>}/>
        <Route path='/new_post' render={() => <NewPostContainer/>}/>
        <Route path='/post/:id' render={() => <EditPostContainer/>}/>
    </div>

}

export default Content