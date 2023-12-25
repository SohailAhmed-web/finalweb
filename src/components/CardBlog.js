import React from 'react';
import Card from 'react-bootstrap/Card';
import card1 from '../assets/imgs/card1.png';
import card2 from '../assets/imgs/card2.png';
import card3 from '../assets/imgs/card3.png';
import card4 from '../assets/imgs/card4.png';
import './CardBlog.css'

function CardBlog() {
  return (
    <div className="blogback" style={{ display: 'flex', overflowX: 'auto', padding: '5px' }}>
      <div className="row justify-content-between align-items-center">
        <Card style={{ width: '18rem', padding: '50px', margin: '0 5px' }}>
          <img src={card1} alt="card image" />
          <Card.Body>
            <Card.Title>6 Creative Ways to Use Repeat Grids in Adobe XD</Card.Title>
            <Card.Text>Create screens directly in Method or add your images from Sketch or Figma.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', padding: '50px', margin: '0 5px' }}>
          <img src={card2} alt="card image" />
          <Card.Body>
            <Card.Title>Analytics Features to Improve User Experience</Card.Title>
            <Card.Text>Create screens directly in Method or add your images from Sketch or Figma.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', padding: '50px', margin: '0 5px' }}>
          <img src={card3} alt="card image" />
          <Card.Body>
            <Card.Title>The Design Side Of Conversion Rate Optimization</Card.Title>
            <Card.Text>Create screens directly in Method or add your images from Sketch or Figma.</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '18rem', padding: '50px', margin: '0 5px' }}>
          <img src={card4} alt="card image" />
          <Card.Body>
            <Card.Title>The Design Side Of Conversion Rate Optimization</Card.Title>
            <Card.Text>Create screens directly in Method or add your images from Sketch or Figma.</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default CardBlog;
