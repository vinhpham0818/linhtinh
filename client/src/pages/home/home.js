import React from 'react'
import './home.scss'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cay from '../../asstes/images/456.jpg'
import Cookies from 'universal-cookie'
import Xalach from '../../asstes/images/xalach.jpg';
 
class HomePage extends React.Component {
    constructor () {
        super()
    }
    render() {
        return (

            <React.Fragment>
                <div>
                   <div>
                       <img src={Cay}></img>
                   </div>
                   <div>
                        <img src={Xalach}></img>
                   </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default HomePage