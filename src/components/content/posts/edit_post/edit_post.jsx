import HeaderContainer from "../../../header/headerContainer";
import Circle from "../../../circle/circle";

//style
import style from './edit_post.module.scss'

let EditPost = props => {

    let newPost = []
    let textInHeader = ''

    props.posts.map(post => {
        if (props.postID === post.id) {
            textInHeader = post.name
            newPost = post
        }
    })

    let handleAddComment = id => {
        if (props.inputValueNewComment !== '') {
            props.addNewComment(id)
        }
    }

        return <div>
            <HeaderContainer showButton text={textInHeader} editPost/>
            <div className={style.comments_block}>
                {newPost.comments && newPost.comments.map(com => <div className={style.comments_list}>
                    <div className={style.avatar}></div>
                    <div>{com.comment_title}</div>
                </div>)}
            </div>
            <div className={style.input_wrap}>
                <input type="text" placeholder='Add comment..' value={props.inputValueNewComment} onChange={e => props.handleChangeInputText(e.target.value)}/>
                <Circle handleFunc={() => handleAddComment(newPost.id)} item={'>'}/>
            </div>
    </div>
    }

export default EditPost