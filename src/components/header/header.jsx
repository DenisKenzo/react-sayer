import {NavLink} from "react-router-dom";
import Circle from "../circle/circle";

//style
import style from './header.module.scss'

    let Header = props => {
        return <div className={style.header}>
            { props.showHeading && <h1>Sayer</h1> }
            <div className={style.header_wrap}>
                { props.showButton
                && <div>
                    <NavLink to='/' onClick={props.resetInputs}>
                        <Circle item={'\u{2190}'}/>
                    </NavLink>
                </div>}
                {props.newPost && <div className={style.text_new_post}>{props.text}</div>}
                {props.editPost && <div className={style.text_edit_post}>{props.text}</div>}
                {props.mainPage && <div>{props.text}</div>}
            </div>
        </div>
    }

export default Header