import React from 'react'
import './contact.scss'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Logo from '../../asstes/images/broccoli.png'

class ContactPage extends React.Component {
    render () {
        return (
            <React.Fragment>
                <div className="main-contact">
                    <img src={Logo}></img>
                    <h2>Nông sản xanh</h2>
                    <div className="row">
                        <div className="column">
                           
                            <h3>Liên hệ</h3>
                            <p>Hotline: 096000000</p>
                            <p>Địa chỉ: khu x, đường n, thành phố z</p>
                            <iframe src="https://www.google.com/maps/embed?pb=" width="350" height="200" frameborder="0" allowfullscreen></iframe>
                        
                            <h3>Câu hỏi thường gặp</h3>
                            <p>What is Lorem Ipsum?</p>
                            <p>Why do we use it?</p>
                            <p>Where does it come from?</p>
                            <p>Where can I get some?</p>
                        </div>

                        <div className="column">
                            <h3>Ý khiến phẩn hồi của khách hàng</h3>
                            <p>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Họ tên</Form.Label>
                                    <Form.Control type="name" placeholder="Nguyên Văn A" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Số điện thoại</Form.Label>
                                    <Form.Control type="fone" placeholder="0906xxxxx" />
                                </Form.Group>

                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" placeholder="name@example.com" />
                                </Form.Group>

                                <Form.Row>
                                    <Form.Group as={Col} controlId="formGridAddress1">
                                        <Form.Label>Địa chỉ</Form.Label>
                                        <Form.Control placeholder="1234 Main St" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridCity">
                                        <Form.Label>Thành Phố</Form.Label>
                                        <Form.Control />
                                    </Form.Group>
                                </Form.Row>

                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Ý khiến phản hồi của bạn</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>
                            </Form>
                            </p>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ContactPage