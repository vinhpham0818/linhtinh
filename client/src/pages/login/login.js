import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const axios = require('axios')

class LoginPage extends React.Component {

    constructor() {
        super()
        this.state = {
            response: ''
        }
    }

    componentDidMount() {
        let self = this
        axios.get('/api/products')
            .then(function (response) {
                // handle success
                console.log(response);
                let els = response.data.member.map((key, index) => {
                    return (
                        <li key={index}>{key.name}</li>
                    )
                })
                self.setState({
                    response: els
                })
            }).catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
        }

    render() {
        return (
            <React.Fragment>
                <Form className="main-contact">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address{this.state.response}</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicChecbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </React.Fragment>
        )
    }
}

export default LoginPage