import React from 'react'
import './home.scss'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cay from '../../asstes/images/456.jpg'
 
class HomePage extends React.Component {
    constructor () {
        super()
        this.state = {
            data: [
                {
                    name: 'Vinh'
                },
                {
                    name: 'Phuong'
                },
                {
                    name: 'quyen'
                }
            ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="home-page">
                   <ul>
                       {
                           this.state.data.map((item, index) => {
                               return (
                                
                                    <li>
                                        <span className="item-title">Name:</span>
                                        <span className="item-name">{item.name}</span>
                                    </li>
                               )
                               
                    })
                }
                           
                   </ul>
                   <div>
                       <img src={Cay} width="900px" height="500px"></img>
                   </div>
                </div>
            </React.Fragment>
            
        )
    }
}

export default HomePage