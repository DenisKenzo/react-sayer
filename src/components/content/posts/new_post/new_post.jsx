import {NavLink} from "react-router-dom";
import HeaderContainer from "../../../header/headerContainer";
import Circle from "../../../circle/circle";

//style
import style from './new_post.module.scss'

    let NewElement = props => {

    let textInHeader = 'Create new item'

    let handleAddPost = () => {
        if (props.inputValueNewPost !== '') {
            props.addNewPost()
        }
    }
        return <div>
            <HeaderContainer showButton text={textInHeader} newPost/>
            <div className={style.main_wrapper}>
                <div className={style.input_wrap}>
                    <input placeholder='What on your mind..?' type='text' value={props.inputValueNewPost} onChange={e => props.handleChangeInputText(e.target.value)}/>
                </div>
                <div className={style.button_wrap}>
                    <NavLink to='/'>
                        <Circle item={'>'} handleFunc={handleAddPost} nav/>
                    </NavLink>
                </div>
            </div>
        </div>
    }

export default NewElement