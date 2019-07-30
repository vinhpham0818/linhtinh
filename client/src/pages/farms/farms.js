import React from 'react'
import './farms.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import Banner from '../../asstes/images/ca-chua.jpg'
import FarmImg from '../../asstes/images/nong-trai.jpg'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DanhMuc from '../products/danh-muc/danh-muc'
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../../asstes/images/ot-chuong.jpg'
import DanhGia from '../products/danh-gia/danh-gia'


class FarmsPage extends React.Component {
    constructor () {
        super()
        this.state = {
            data: [
                {
                    name: 'Nông trại A'
                },
                {
                    name: 'Nông Trại B'
                },
                {
                    name: 'Nông trại C'
                }
            ]
        }
        console.log(this.state.data)
    }
  
      render () {
        const els = this.state.data.map((item, index) => {
          return (
              <div>
                <ul>
                <li key={index}>
                <Card border="light" >
                  <Link to={'/product/' + item.name} className="link-to">
                    <Card.Body >
                      <Card.Img src={FarmImg} className="img-farm"/>
                      <div className="text-img">
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                        <Button variant="primary">View Detail</Button>
                      </div>
                    </Card.Body>
                    </Link>
                  <div>
                    <h3 className="header-sanpham">Sản phẩm</h3>
                    <Carousel className="aaff">
                          <Carousel.Item >
                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                              
                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                          </Carousel.Item>

                          <Carousel.Item>
                          <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                              
                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                          </Carousel.Item>

                          <Carousel.Item>
                          <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>

                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                              
                              <Card className="aa">
                                  <Card.Img variant="top" src={Banner1} className="image"/>
                                  <Card.Body>
                                      <Card.Title>Card Title</Card.Title>
                                      <Card.Text>
                                          <DanhGia></DanhGia>
                                      </Card.Text>
                                      <div className="middle">
                                          <Button className="text">Xem</Button>
                                      </div>
                                  </Card.Body>
                              </Card>
                          </Carousel.Item>
                    </Carousel>
                  </div>
                </Card>
                </li>
                </ul>
              
              <div className="border-farm"></div>
              </div>  
          )
      })
      
      return(
        <React.Fragment>
          <div className="main-farm">
           <Row>
            <Col xs={6} md={2}><DanhMuc></DanhMuc></Col>
            <Col xs={12} md={10}>
              {els}
              </Col>
          </Row>
           </div>
        </React.Fragment>
      )
    }
  }

export default FarmsPage