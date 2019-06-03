import React from 'react'
import './header-component.css'

class HeaderComp extends React.Component {
    render () {
        return (
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
        )
    }
}

export default HeaderComp