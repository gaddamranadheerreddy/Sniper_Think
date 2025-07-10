import React, {useContext} from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const AboutSection = () => {
    const { darkMode } = useContext(ThemeContext);
  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="about">  
    {/* "py-5 bg-white text-dark"  */}
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2 className="fw-bold mb-4 text-success">About SniperThink</h2>
            <p className="lead">
              SniperThink is a modern analytics dashboard platform built to simplify growth tracking and empower
              decision-makers with real-time insights.
            </p>
            <p>
              Our goal is to offer intuitive, powerful tools that scale with your business — helping teams move faster
              with clarity and confidence.
            </p>
          </Col>
          <Col md={6} >
            <div style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Image
                src="https://via.placeholder.com/600x400"
                alt="SniperThink Dashboard"
                fluid
                rounded
                style={{
                  maxHeight: '100%',
                  maxWidth: '100%',
                  objectFit: 'cover',
                  boxShadow: '0 0 15px rgba(0,0,0,0.15)'
                }}
              />
            </div>
            {/* <Image
              src="https://via.placeholder.com/600x400"
              alt="About SniperThink"
              fluid
              rounded
              style={{ border: '2px solid red', maxHeight: '400px', objectFit: 'cover' }}
            /> */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
