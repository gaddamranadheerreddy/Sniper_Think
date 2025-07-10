

import React, { useEffect, useState, useContext } from 'react';
import { Container, Button, Carousel } from 'react-bootstrap';
import { getSlides } from '../api/api';
import { ThemeContext } from '../context/ThemeContext';

const HeroSection = () => {
    const { darkMode } = useContext(ThemeContext);

  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const response = await getSlides();
        setSlides(response.data);
      } catch (error) {
        console.error('Error fetching slides:', error);
      }
    };

    fetchSlides();
  }, []);

  return (
    <section className={`py-5 ${darkMode ? 'bg-dark text-light' : 'bg-white text-dark'}`} id="home">
    {/* / "bg-dark text-white"  */}
      <Container fluid className="px-0">
        <Carousel fade controls indicators>
          {slides.map((slide, index) => (
            // <Carousel.Item key={index}>
            //   <img
            //     className="d-block w-100"
            //     src={slide.image}
            //     alt={`Slide ${index}`}
            //     style={{ maxHeight: '500px', objectFit: 'cover' }}
            //   />
            //   <Carousel.Caption className="bg-dark bg-opacity-50 p-3 rounded">
            //     <h3>{slide.title}</h3>
            //     <p>{slide.subtitle}</p>
            //     <Button variant="success">{slide.cta}</Button>
            //   </Carousel.Caption>
            // </Carousel.Item>

            <Carousel.Item key={index} >
                {/* data-aos="fade-in" data-aos-duration="1500" */}
                <img
                    className="d-block w-100"
                    src={slide.image}
                    alt={`Slide ${index}`}
                    style={{
                    height: '80vh',
                    objectFit: 'cover',
                    objectPosition: 'center'
                    }}
                />
                <Carousel.Caption
                    className="d-flex flex-column align-items-center justify-content-center h-100"
                    style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    position: 'absolute'
                    }}
                    >
                        <h1 className="fw-bold text-white">{slide.title}</h1>
                        <p className="lead text-white">{slide.subtitle}</p>
                        <Button variant="success" size="lg" className="mt-3">
                        {slide.cta}
                        </Button>
                </Carousel.Caption>
           </Carousel.Item>

          ))}
        </Carousel>
      </Container>
    </section>
  );
};

export default HeroSection;

