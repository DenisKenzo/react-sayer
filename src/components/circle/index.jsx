//style
import style from './style.module.scss'

let Circle = props => {

    return <div>
        <button className={style.circle} onClick={props.handleFunc}>{props.item}</button>
    </div>
}

export default Circle