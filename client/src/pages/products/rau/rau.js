import React from 'react'

import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Banner from '../../../asstes/images/ca-chua.jpg'
import DanhMuc from '../danh-muc/danh-muc'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProductRau extends React.Component {
    // constructor(props) {
    //     super(props)
    //     console.log(this.props)
    //     const {match: { params }} = this.props
    //     console.log(params, params.id)
    // }

    constructor () {
        super()
        this.state = {
            data: [
                {
                    name: 'Rau cải'
                },
                {
                    name: 'Rau muống'
                },
                {
                    name: 'Rau Xà lách'
                }
            ]
        }
        console.log(this.state.data)
    }
    render () {
        const els = this.state.data.map((item, index) => {
            return (
              
              <div className="main-products">
               
                <div>
                <Link to={'/product/' + item.name}>
                  <ul>
                  <li key={index}>
                  <Card border="primary">
                    <Card.Body>
                      <Card.Img src={Banner} />
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                          This is a wider card with supporting text below as a natural lead-in to
                          additional content. This content is a little bit longer.
                      </Card.Text>
                      <Button variant="primary">View Detail</Button>
                    </Card.Body>
                  </Card>
                  </li>
                  </ul>
                </Link>
                </div>    
              </div>    
            )
        })
        return (
            <React.Fragment>
            <div className="main">
              <Row>
                <Col xs={6} md={2}><DanhMuc></DanhMuc></Col>
                <Col xs={12} md={10}>{els}</Col>
              </Row>
            </div>
          </React.Fragment>
        )
    }
}

export default ProductRau