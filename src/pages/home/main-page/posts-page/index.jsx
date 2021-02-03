import {NavLink} from "react-router-dom";
import Circle from "../../../../components/circle";
import {
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import ComplexSwipeContent from "./ComplexSwipeContent";
import {useDispatch, useSelector} from "react-redux";


//style
import style from './style.module.scss'
import {deletePostAC} from "../../../../redux/action-creators";

    const selector = (state, props) => {
        let store = state.posts
        return {
            posts: store.posts,
        }
    }

const Posts = props => {

    //hooks
    const data = useSelector(selector)
    const dispatch = useDispatch()

    const swipeLeftOptions = id => ({
        content: (
            <ComplexSwipeContent
                label="Delete"
                position="right"
            />
        ),
        action: () => dispatch(deletePostAC(id))
    });
        return (
            <div>
                <div className={style.posts}>
                    <SwipeableList threshold={0.3}>
                    {data.posts.map(p =>(
                            <SwipeableListItem
                                key={p.id}
                                swipeLeft={swipeLeftOptions(p.id)}
                            >
                                <div className={style.single_post}>
                                    <NavLink to={`/post/${p.id}`}>
                                        <div className={style.post_name}>{p.name}</div>
                                    </NavLink>
                                    <div className={style.count_wrap}>{p.comments.length > 0 && <Circle item={p.comments.length}/>}</div>
                                </div>
                            </SwipeableListItem>
                        ))
                    }
                    </SwipeableList>
                </div>
            <div className={style.button_wrap}>
                <NavLink to='/new_post'>
                    <button className={style.add_post_button}>&#43;</button>
                </NavLink>
            </div>
        </div>
        )
}

    export default Posts
