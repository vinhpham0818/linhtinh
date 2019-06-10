import React from 'react'
import './header-component.scss'
import {Link} from 'react-router-dom'
import logo from '../../asstes/images/logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Carousel from 'react-bootstrap/Carousel'
import Xalach from '../../asstes/images/xalach.jpg'
import Ot from '../../asstes/images/ot.jpg'
import Dua from '../../asstes/images/dua.jpg'


class HeaderComp extends React.Component {
    render () {
        return (
            <React.Fragment>
            <div className="one"></div>

            <div className="main-header">
            <Navbar bg="light" variant="light">
            <Navbar.Brand href="#home">
            <div className="App">
                <div className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
            </Navbar.Brand>
            <Nav className="mr-auto ">
            
                    <Nav.Link href="/">Trang Chủ</Nav.Link>
                    
                    <Nav.Link href="/products">Sản Phẩm</Nav.Link>

                    <Nav.Link href="/farms">Trang Trại</Nav.Link>

                    <Nav.Link href="/blog">Tin Tức</Nav.Link>

                    <Nav.Link href="/contact">Liên Hệ</Nav.Link>
                
            </Nav> 
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
            </Navbar>

            <Carousel className="two">
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Xalach}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Ot}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Dua}
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