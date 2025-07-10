import React, {useContext} from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { ThemeContext } from '../context/ThemeContext';

const ServicesSection = () => {
    const { darkMode } = useContext(ThemeContext);

  const services = [
    {
      title: "Web Development",
      text: "Responsive, scalable websites using modern tech stacks tailored to your needs.",
      icon: "💻"
    },
    {
      title: "UI/UX Design",
      text: "Visually appealing interfaces designed to improve user experience and engagement.",
      icon: "🎨"
    },
    {
      title: "SEO Optimization",
      text: "Boost your website visibility on search engines with on-page and technical SEO.",
      icon: "🚀"
    },
  ];

  return (
    <div className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="services">
        {/* "py-5 bg-dark text-white" */}
      <Container>
        <h2 className="text-center mb-5 text-success fw-bold">Our Services</h2>
        <Row>
          {services.map((service, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 text-center bg-secondary text-white border-0 shadow">
                <Card.Body>
                  <div className="display-4">{service.icon}</div>
                  <Card.Title className="mt-3 fw-bold">{service.title}</Card.Title>
                  <Card.Text>{service.text}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ServicesSection;
