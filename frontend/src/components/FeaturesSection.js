import React, { useEffect, useState, useContext } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getFeatures } from '../api/api';
import { ThemeContext } from '../context/ThemeContext';

const FeaturesSection = () => {
    const { darkMode } = useContext(ThemeContext);

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const fetchFeatures = async () => {
      try {
        const response = await getFeatures();
        setFeatures(response.data);
      } catch (error) {
        console.error('Error fetching features:', error);
      }
    };

    fetchFeatures();
  }, []);

  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="features">
        {/* "py-5 bg-light text-dark" */}
      <Container>
        <h2 className="text-center mb-5 fw-bold text-success">Key Features</h2>
        <Row>
          {features.map((feature, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="text-center h-100 border-0 shadow">
                <Card.Body>
                  <div className="display-4">{feature.icon}</div>
                  <Card.Title className="fw-bold mt-3">{feature.title}</Card.Title>
                  <Card.Text>{feature.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default FeaturesSection;


// import React, { useState, useEffect, useContext } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { ThemeContext } from '../context/ThemeContext';
// import { getFeatures } from '../api/api';
// import Skeleton from 'react-loading-skeleton';

// const FeaturesSection = () => {
//   const [features, setFeatures] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { darkMode } = useContext(ThemeContext);

//   useEffect(() => {
//     getFeatures()
//       .then(res => {
//         setFeatures(res.data);
//         setLoading(false);
//       })
//       .catch(err => {
//         console.error('Failed to fetch features:', err);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-light text-dark'}`} id="features">
//       <Container>
//         <h2 className="text-center mb-5 fw-bold text-success">Features</h2>
//         <Row>
//           {loading
//             ? Array.from({ length: 3 }).map((_, idx) => (
//                 <Col md={4} className="mb-4" key={idx}>
//                   <Card className="h-100 p-3" data-aos="fade-up"
//   data-aos-delay={idx * 100}>
//                     <Skeleton height={30} width={50} />
//                     <Skeleton height={25} className="my-2" />
//                     <Skeleton count={2} />
//                   </Card>
//                 </Col>
//               ))
//             : features.map((feature, idx) => (
//                 <Col md={4} className="mb-4" key={idx}>
//                   <Card className="h-100 p-3">
//                     <h1>{feature.icon}</h1>
//                     <h5 className="fw-bold">{feature.title}</h5>
//                     <p>{feature.description}</p>
//                   </Card>
//                 </Col>
//               ))}
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default FeaturesSection;
