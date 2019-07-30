import React from 'react'
import './blog.scss'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import NongTrai from '../../asstes/images/nong-trai.jpg'

class BlogPage extends React.Component {
    constructor () {
        super()
        this.state = {
            data: [
                {
                    name: 'Tin tức A'
                },
                {
                    name: 'Tin tức B'
                },
                {
                    name: 'Tin tức C'
                }
            ]
        }
        console.log(this.state.data)
    }
    render () {
        const els = this.state.data.map((item, index) => {
        return (
                <div className="main-blog">
                <Card border="light">
                    {/* <Card.Header as="h5">Featured</Card.Header> */}
                    <Card.Body>
                    <Card.Img variant="top" src={NongTrai} className="img-blog"/>
                        <Card.Title>{item.name}</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </div>
        )
    })
        return (
            <React.Fragment>
                {els}
            </React.Fragment>
        )
    }
}

export default BlogPage