import {NavLink} from "react-router-dom";
import Circle from "../../circle/circle";
import {
    SwipeableList,
    SwipeableListItem
} from '@sandstreamdev/react-swipeable-list';
import '@sandstreamdev/react-swipeable-list/dist/styles.css';
import ComplexSwipeContent from "./ComplexSwipeContent";

//style
import style from './posts.module.scss'

let Posts = props => {
    const swipeLeftOptions = id => ({
        content: (
            <ComplexSwipeContent
                label="Delete"
                position="right"
            />
        ),
        action: () => props.deletePostAC(id)
    });
        return <div>
            <div className={style.posts}>
                <SwipeableList threshold={0.3}>
                {props.posts.map(p =>(
                        <SwipeableListItem
                            key={p.id}
                            swipeLeft={swipeLeftOptions(p.id)}
                        >
                            <div onClick={() => props.setCurrentPostAC(p.id)} className={style.single_post}>
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
                <NavLink to='/new_post' onClick={props.addPostToggleAC}>
                    <button className={style.add_post_button}>&#43;</button>
                </NavLink>
            </div>
        </div>
    }

    export default Posts
