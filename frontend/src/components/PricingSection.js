import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
import { getPricing } from '../api/api';
import { ThemeContext } from '../context/ThemeContext';

const PricingSection = () => {
    const { darkMode } = useContext(ThemeContext);

  const [plans, setPlans] = useState([]);

  useEffect(() => {
    const fetchPricing = async () => {
      try {
        const response = await getPricing();
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching pricing:', error);
      }
    };

    fetchPricing();
  }, []);

  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="pricing">
        {/* "py-5 bg-dark text-white" */}
      <Container>
        <h2 className="text-center mb-5 fw-bold text-success">Pricing Plans</h2>
        <Row>
          {plans.map((plan, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100 shadow border-success">
                <Card.Header className="fw-bold text-success">
                  {plan.tier}
                </Card.Header>
                <Card.Body className="bg-light text-dark">
                  <h3 className="fw-bold">{plan.price}</h3>

                  <ListGroup variant="flush" className="my-3">
                    {plan.features.map((feature, idx) => (
                      <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
                    ))}
                  </ListGroup>

                  <Button variant="success">Get Started</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default PricingSection;


// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Card, ListGroup, Button } from 'react-bootstrap';
// import { getPricing } from '../api/api';
// import Skeleton from 'react-loading-skeleton';
// import { ThemeContext } from '../context/ThemeContext';

// const PricingSection = () => {
//   const [plans, setPlans] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     getPricing()
//       .then((res) => {
//         setPlans(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Failed to fetch pricing:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className={`py-5 ${darkMode ? 'bg-dark text-white' : 'bg-white text-dark'}`} id="pricing">
//       <Container>
//         <h2 className="text-center mb-5 fw-bold text-success">Pricing</h2>
//         <Row>
//           {loading
//             ? Array.from({ length: 3 }).map((_, i) => (
//                 <Col md={4} className="mb-4" key={i}>
//                   <Card className="h-100 p-3">
//                     <Skeleton height={30} width={100} />
//                     <Skeleton height={25} className="my-2" />
//                     <Skeleton count={4} />
//                     <Skeleton height={35} width={120} className="mt-3" />
//                   </Card>
//                 </Col>
//               ))
//             : plans.map((plan, i) => (
//                 <Col md={4} className="mb-4" key={i}>
//                   <Card className="h-100 text-center p-3 "> 
//                     {/* data-aos="zoom-in" */}
//   {/* data-aos-delay={i * 150} */}
//                     <Card.Title className="fw-bold">{plan.tier}</Card.Title>
//                     <h2>{plan.price}</h2>
//                     <ListGroup variant="flush" className="my-3">
//                       {plan.features.map((feature, idx) => (
//                         <ListGroup.Item key={idx}>{feature}</ListGroup.Item>
//                       ))}
//                     </ListGroup>
//                     <Button variant="outline-success">Choose Plan</Button>
//                   </Card>
//                 </Col>
//               ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default PricingSection;
