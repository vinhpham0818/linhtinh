import React from 'react'
import './danh-muc.scss'
import DanhGia from '../danh-gia/danh-gia';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import BannerKhuyenmai from '../../../asstes/images/banner-khuyen-mai.jpg'

class DanhMuc extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="main-danhmuc">
                <div className="border-danhmuc">
                <h3>Danh mục sản phẩm</h3>
                <ul className="ul-danhmuc">
                    <li>Rau</li>
                    <li>Củ</li>
                    <li>Quả</li>
                </ul>
                <h3>Đánh giá</h3>
                <ul className="ul-danhmuc">
                    <li><DanhGia></DanhGia> (1 sao)</li> 
                    <li><DanhGia></DanhGia> (2 sao)</li>
                    <li><DanhGia></DanhGia> (3 sao)</li>
                    <li><DanhGia></DanhGia> (4 sao)</li>
                    <li><DanhGia></DanhGia> (5 sao)</li>
                </ul>
                <h3>Giá</h3>
                <p>Chọn khoảng giá</p>
                <Form>
                    <Form.Row>
                        <Col>
                            <Form.Group controlId="formGridState">
                                <Form.Control as="select">
                                    <option>1 - 5 ngàn</option>
                                    <option>5 - 10 ngàn</option>
                                    <option>10 - 20 ngàn</option>
                                    <option>20 - 50 ngàn</option>
                                    <option>50 - 100 ngàn</option>
                                    <option>100 - 200 ngàn</option>
                                    <option>200 - 500 ngàn</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        
                        <Col xs lg="1">
                            <p>to</p>
                        </Col>

                        <Col>
                            <Form.Group controlId="formGridState">
                                <Form.Control as="select">
                                    <option>1 - 5 ngàn</option>
                                    <option>5 - 10 ngàn</option>
                                    <option>10 - 20 ngàn</option>
                                    <option>20 - 50 ngàn</option>
                                    <option>50 - 100 ngàn</option>
                                    <option>100 - 200 ngàn</option>
                                    <option>200 - 500 ngàn</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Button variant="primary" type="submit">
                            Ok
                        </Button>
                        </Col>
                    </Form.Row>
                </Form>

                <h3>Nông trại cung cấp</h3>
                <ListGroup as="ul" className="ten-nong-trai">
                    <ListGroup.Item as="li">
                        Nông trại D
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Nông trại A</ListGroup.Item>
                    <ListGroup.Item as="li">
                        Nông trại B
                    </ListGroup.Item>
                    <ListGroup.Item as="li">Nông trại C</ListGroup.Item>
                </ListGroup>
                </div>
                <img src={BannerKhuyenmai} className="khuyen-mai"></img>
            </div>
            </React.Fragment>
        )
    }
}

export default DanhMuc