import React from 'react'
import './home.scss'
import NongTrai from '../../asstes/images/nong-trai.jpg'
import SanPham from '../../asstes/images/san-pham-4.jpg'
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../../asstes/images/ot-chuong.jpg'
import Banner2 from '../../asstes/images/ca-chua.jpg'
import Banner3 from '../../asstes/images/san-pham.jpg'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Costomer from '../../components/comment-customer/comment-customer'
import DanhGia from '../products/danh-gia/danh-gia'


class HomePage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="main-home">
                    <h3 className="header-one">Bài viết tiêu biểu</h3>
                   
                   <div className="home-two">
                        <img src={SanPham} className="img-two"></img>
                        <div className="img-content-two"></div>
                        <div className="content-two">
                            <h3>What is Lorem Ipsum</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                It has survived not only five centuries, but also the leap into electronic typesetting, 
                                remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                   </div>
                   
                   <div className="home-one">
                        <img src={NongTrai} className="img-one"></img>
                        <div className="img-content-one"></div>
                            <div className='content-one'>
                                <h3>What is Lorem Ipsum</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                                    It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software 
                                    like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                   </div>

                    <h3 className="header-one">Sản phẩm khuyến mãi trong ngày</h3>
                    <div className="bbcc"><h4 className="header-two">Rau</h4></div>
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
                    <button className="xem-them">Xem thêm</button>

                    <div className="bbcc"><h4 className="header-two">Củ</h4></div>
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
                    <button className="xem-them">Xem thêm</button>

                    <div className="bbcc"><h4 className="header-two">Quả</h4></div>
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
                    <button className="xem-them">Xem thêm</button>

                <h3 className="header-one">Cảm nhận khách hàng</h3>
                    {/* <div className="overflowTest"> */}
                        <Costomer></Costomer>
                    {/* </div> */}
                </div>
            </React.Fragment>
        )
    }
}

export default HomePage