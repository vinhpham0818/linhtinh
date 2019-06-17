import React from 'react'
import './home.scss'
import baner from '../../asstes/images/456.jpg'

class HomePage extends React.Component {
    render () {
        return (
            <React.Fragment>
                {/* <div><img src={baner} alt="Baner"/></div> */}
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