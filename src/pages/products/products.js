import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import dog from '../../asstes/images/123.jpg'
import {Link} from 'react-router-dom'
import Cookies from 'universal-cookie';

class ProductsPage extends React.Component {

  constructor () {
    const cookies = new Cookies();
 
cookies.set('myCat', 'Pacman', { path: '/' });
console.log(cookies.get('myCat')); // Pacman

      super()
      this.state = {
          data: [
              {
                  name: 'Vinh'
              },
              {
                  name: 'Phuong'
              },
              {
                  name: 'quyen'
              }
          ]
      }
      console.log(this.state.data)
  }

    render () {
      const els = this.state.data.map((item, index) => {
        return (
            <Link to={'/product/' + item.name}>
              <li key={index}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={dog} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                      Some quick example text to build on the card title and make up the bulk of
                      the card's content.
                    </Card.Text>
                    <Button variant="primary">View Detail</Button>
                  </Card.Body>
                </Card>
              </li>
            </Link>     
        )
    })
    return(
      <React.Fragment>
        {els}
      </React.Fragment>
    )
  }
}
export default ProductsPage