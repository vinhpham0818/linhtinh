import React from 'react'
import './header-component.scss'
import {Link} from 'react-router-dom'
import logo from '../../asstes/images/logo.svg'

class HeaderComp extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className="one"></div>

            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>

            <div className='main-header'>
                <ul>
                    <li>
                        <a href="/">Trang Chủ</a>
                    </li>
                    
                    <li>
                        <a href="/products">Sản Phẩm</a>
                    </li>

                    <li>
                        <a href="/farms">Trang Trại</a>
                    </li>

                    <li>
                        <a href="/blog">Tin Tức</a>
                    </li>
                    
                    <li>
                        <a href="/contact">Liên Hệ</a>
                    </li>
                </ul>
            </div>
            </React.Fragment>
        )
    }
}

export default HeaderComp