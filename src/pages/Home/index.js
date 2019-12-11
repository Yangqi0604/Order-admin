import React from 'react'
import { connect} from 'dva'
import style from "./index.scss"
function index(props) {
    console.log(props)
    return (
        <div className={style.home}>
            <div className={style.background}>
                <h1>欢迎大家来到小杨pizza</h1>
                <h2>这里有各种好吃的pizza！</h2>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

//关联home.js（model）和当前的组件index.js（home组件）
export default connect(({ home }) => ({...home}))(index)