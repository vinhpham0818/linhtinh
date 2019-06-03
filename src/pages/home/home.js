import React from 'react'
import './home.css'
import Baner from '../../asstes/images/baner.jpg'

class HomePage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div><img src={Baner} alt="Baner"/></div>
                <div className="main-home">
                    Hello
                </div>
                <div>
                    đây là trang chủ
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage