import React from 'react'
import './home.scss'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cay from '../../asstes/images/456.jpg'
import Cookies from 'universal-cookie';
 
class HomePage extends React.Component {
    constructor () {
        super()
    }
    render() {
        return (

            <React.Fragment>
                <div className="home-page">
                   <div>
                       <img src={Cay}></img>
                   </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default HomePage