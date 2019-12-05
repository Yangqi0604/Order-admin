import React from 'react'
import style from "./index.scss"
export default function index() {
    return (
        <div className={style.home}>
            <div className={style.background}>
                <h1>欢迎大家来到小杨pizza</h1>
                <h2>这里有各种好吃的pizza！</h2>
            </div>
        </div>
    )
}
