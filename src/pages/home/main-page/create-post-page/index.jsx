import {useState} from 'react'
import {NavLink} from "react-router-dom";
import Circle from "../../../../components/circle";
import {useDispatch} from "react-redux";
import Header from "../../../../components/header";
import {addNewPostAC} from "../../../../redux/action-creators";

//style
import style from './style.module.scss'

const CreatePost = props => {

    //hooks
    const [inputValue, setValue] = useState('')
    const dispatch = useDispatch()

    const textInHeader = 'Create new item'
    const handleAddPost = () => {
        if (inputValue !== '') {
            dispatch(addNewPostAC(inputValue))
            setValue('')
        }
    }

        return <div>
            <Header showButton text={textInHeader} newPost/>
            <div className={style.main_wrapper}>
                <div>
                    <input placeholder='What on your mind..?' type='text' value={inputValue} onChange={e => setValue(e.target.value)}/>
                </div>
                <div className={style.button_wrap}>
                    <NavLink to='/'>
                        <Circle item={'>'} handleFunc={handleAddPost} nav/>
                    </NavLink>
                </div>
            </div>
        </div>
}

export default CreatePost