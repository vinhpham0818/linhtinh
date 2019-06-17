import React from 'react'
import './footer-component.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Bai1 from '../../asstes/images/bai1.jpg'
import Bai2 from '../../asstes/images/bai2.jpg'
import Bai3 from '../../asstes/images/bai3.jpg'
import Face from '../../asstes/images/facebook.svg'
import Gmail from '../../asstes/images/gmail.svg'
import Youtube from '../../asstes/images/youtube.svg'
import Zalo from '../../asstes/images/zalo.svg'
import Twitter from '../../asstes/images/twitter.svg'
import Pinterest from '../../asstes/images/pinterest.svg'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class FooterCom extends React.Component {
    render () {
        return (
            <React.Fragment>
                <InputGroup className="mb-3">
                    <FormControl
                    placeholder="you email: a@gmail.com"
                    aria-label="you email: a@gmail.com"
                    aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                    <Button variant="outline-danger">Theo dõi</Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="main-footer">
                    <Container>
                        <Row>
                            <Col >
                                <h3>Hỗ trợ khách hàng</h3>
                                <p>Hotline: 0906xxxxx</p>
                                <p>Email: hotro@gmail.com</p>

                                <h3>Địa chỉ</h3>
                                <p>Số x, đường n, khu z, thành phố A</p>
                                <iframe src="https://www.google.com/maps/embed?pb=" width="350" height="200" frameborder="0" allowfullscreen></iframe>
                            </Col>
                            <Col xs={5}>
                                <h3>Bài viết mới nhất</h3>
                                <div className="img-file">
                                    <img src={Bai1}></img>
                                    <h2>Where does it come from?</h2>
                                    <p>Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC</p>
                                </div>

                                <div className="img-file">
                                    <img src={Bai2}></img>
                                    <h2>Where does it come from?</h2>
                                    <p>Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC</p>
                                </div>

                                <div className="img-file">
                                    <img src={Bai3}></img>
                                    <h2>Where does it come from?</h2>
                                    <p>Contrary to popular belief, 
                                    Lorem Ipsum is not simply random text. 
                                    It has roots in a piece of classical 
                                    Latin literature from 45 BC</p>
                                </div>
                            </Col>
                            <Col>
                                <h3>Tư vấn khách hàng</h3>
                                <p>Những câu hỏi thường gặp</p>
                                <p>Help</p>

                                <h3>Kết nối với chúng tôi</h3>
                                <ul>
                                    <li>
                                        <img src={Face} className="socail"></img>
                                        <img src={Youtube} className="socail"></img>
                                        <img src={Gmail} className="socail"></img>
                                    </li>
                                    <li>
                                        <img src={Zalo} className="socail"></img>
                                        <img src={Pinterest} className="socail"></img>
                                        <img src={Twitter} className="socail"></img>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </React.Fragment>
        )
    }
}

export default FooterCom