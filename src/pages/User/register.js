import React, { Component } from 'react'
import Logo from 'Assets/icon.png'
import style from './account.scss'

export default class index extends Component {
    render() {
        return (
            <div className={style.account}>
                <img src={Logo} alt="my logo" className={style.logo}/>
            </div>
            
        )
    }
}
