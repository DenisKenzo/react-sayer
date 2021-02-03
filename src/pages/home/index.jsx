import {Route, Switch} from "react-router-dom";
import MainPage from "./main-page";
import NewPost from "./main-page/create-post-page";
import EditPost from "./main-page/edit-post-page";

let Home = () => {
    return (
            <Switch>
                <Route exact path='/' component={MainPage}/>
                <Route path='/new_post' component={NewPost}/>
                <Route path='/post/:id' component={EditPost}/>
            </Switch>
        )
}

export default Home