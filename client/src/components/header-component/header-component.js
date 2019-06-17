import React from 'react'
import './header-component.scss'
import {Link} from 'react-router-dom'
import logo from '../../asstes/images/logo.svg'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'
import Search from '../../asstes/images/search.svg'
import Call from '../../asstes/images/call.svg'
import Email from '../../asstes/images/email.svg'
import Shopping from '../../asstes/images/shopping.svg'
import Carousel from 'react-bootstrap/Carousel'
import Banner1 from '../../asstes/images/banner1.jpg'
import Banner2 from '../../asstes/images/banner2.jpg'
import Banner3 from '../../asstes/images/banner3.jpg'

class HeaderComp extends React.Component {
    render () {
        return (
            <React.Fragment>
                
            <div className="a"></div>
            <Container className="d">
                <Row>
                    <Col className="b">
                        <img src={Call} className="ac"></img>
                        0906xxxxx
                    </Col>
                    <Col className="b">
                        <img src={Email} className="ac"></img>
                        nsx@gmail.com
                        </Col>
                    <Col className="b">
                        <a href="/">
                        <div className="App">
                            <div className="App-header">
                            <img src={logo} className="App-logo" alt="logo"></img>
                            </div>
                        </div>
                        </a>
                    </Col>
                    <Col className="b">
                            <a href="/login">
                                <Button variant="outline-success">Đăng nhập</Button>
                            </a>
                            <Button variant="outline-success">Đăng Kí</Button>
                    </Col>
                    <Col className="b">
                        <Form>
                        <InputGroup>
                            <FormControl type="text" placeholder="Search" />
                            <InputGroup.Append>
                                <Button variant="outline-dark">
                                    <img src={Search} className="ab"></img>
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                        </Form>
                    </Col>
                </Row>
            </Container>
            
            <div>
            <Navbar collapseOnSelect expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center" >
                    <Nav>
                        <Nav.Item >
                            <Nav.Link className="mr-5 af" href="/"><div className="afg">Trang chủ</div></Nav.Link>
                        </Nav.Item>

                        <Nav.Item >
                            <Nav.Link className="mr-5 af" href="/gioi-thieu"><div className="afg">Giới Thiệu</div></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>        
                            <Nav.Link className="mr-5 af" href="/products"><div className="afg">Sản phẩm</div></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="mr-5 af" href="/farms"><div className="afg">Trang Trại</div></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="mr-5 af" href="/blog"><div className="afg">Tin Tức</div></Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link className="mr-5 af" href="/contact"><div className="afg">Liên Hệ</div></Nav.Link>
                        </Nav.Item>
                    </Nav> 
                </Navbar.Collapse>
                <img src={Shopping} className="ad"></img>
            </Navbar>
            <Carousel >
                <Carousel.Item className="c">
                    <img
                    className="d-block w-100"
                    src={Banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="c">
                    <img
                    className="d-block w-100"
                    src={Banner2}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="c">
                    <img
                    className="d-block w-100"
                    src={Banner3}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </div>
            
            </React.Fragment>
        )
    }
}

export default HeaderComp