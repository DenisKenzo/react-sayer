import Circle from "../../../../components/circle";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useState} from 'react'
import {addNewCommentAC} from '../../../../redux/action-creators'
import Header from "../../../../components/header";

//style
import style from './style.module.scss'


    const selector = (state, props) => {
        const store = state.posts
        return {
            currentPost: store.currentPost,
            posts: store.posts,
            inputValueNewComment: store.inputValueNewComment,
        }
    }

    const EditPost = props => {

        //hooks
        const [inputValue, setValue] = useState('')
        const dispatch = useDispatch()
        let { id } = useParams();
        const data = useSelector(selector)

        let currentPost = data.posts.find(post => post.id === parseInt(id))
        let textInHeader = currentPost.name

        const handleAddComment = id => {
            if (inputValue !== '') {
                dispatch(addNewCommentAC(id, inputValue))
                setValue('')
            }
        }

        return <div>
            <Header showButton text={textInHeader} editPost/>
            <div className={style.comments_block}>
                {currentPost.comments && currentPost.comments.map((com, index) => <div key={index} className={style.comments_list}>
                    <div className={style.avatar}/>
                    <div>{com.comment_title}</div>
                </div>)}
            </div>
            <div className={style.input_wrap}>
                <input type="text" placeholder='Add comment..' value={inputValue} onChange={e => setValue(e.target.value)}/>
                <Circle handleFunc={() => handleAddComment(currentPost.id)} item={'>'}/>
            </div>
    </div>
    }

export default EditPost