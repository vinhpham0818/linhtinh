import React from 'react'
import './header-component.scss'
import {Link} from 'react-router-dom'
import logo from '../../asstes/images/logo.svg'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import Breadcrumb from 'react-bootstrap/Breadcrumb'


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

            </div>
            
            </React.Fragment>
        )
    }
}

export default HeaderComp