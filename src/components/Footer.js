import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css';
import instagram from './images/instagramlogo.jpeg';

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">&copy; StudioKart 2024</Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <a href="mailto:saumojyoti5838@gmail.com" target="_blank" rel="noopener noreferrer">
              <span role="img" aria-label="gmail">📧</span> saumojyoti5838@gmail.com
            </a>
            <span>&nbsp;&nbsp;</span>
            <a href="https://www.instagram.com/.rijuuu/" target="_blank" rel="noopener noreferrer">
  <img src={instagram} alt="Instagram Logo" style={{ width: '20px', height: '20px' }} />
  @.rijuuu
</a>

           
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
