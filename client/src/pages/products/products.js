import React from 'react'
import './products.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Banner from '../../asstes/images/ca-chua.jpg'
import DanhMuc from './danh-muc/danh-muc'
import DanhGia from './danh-gia/danh-gia'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class ProductsPage extends React.Component {
  constructor () {
      super()
      this.state = {
          data: [
              {
                  name: 'Rau'
              },
              {
                  name: 'Củ'
              },
              {
                  name: 'Quả'
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
            
              <ul>
              <li key={index}>
              <Card border="light">
                <Card.Body>
                  {/* <Card.Img src={Banner} className="img-card" /> */}
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                      This is a wider card with supporting text below as a natural lead-in to
                      additional content. This content is a little bit longer.
                  </Card.Text>

                  <div>
                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <div><DanhGia></DanhGia></div>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      
                      <div className="middle">
                          <Button className="text">Xem</Button>
                      </div>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>

                  <Card className="img-products">
                    <Card.Img variant="top" src={Banner} className="img-rau-cu-qua"/>
                    <Card.Body>
                      <Card.Title>Card Title</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                  </div>

                  <Link to={'/product/' + item.name}>
                    <Button variant="primary">View Detail</Button>
                  </Link>
                </Card.Body>
              </Card>
              </li>
              </ul>
            
            </div>    
          </div>    
        )
    })
    
    return(
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

export default ProductsPage