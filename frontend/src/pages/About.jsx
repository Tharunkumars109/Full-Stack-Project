import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import '../styles/about.css'

import aboutImg from '../assets/images/about.jpg'

const About = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className='m-auto'>
            <div className="about__container d-flex justify-content-between">
              <div className="about__img">
                <img src={aboutImg} alt="About Us" />
              </div>
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Welcome to our platform! We are committed to providing you with the best experience possible. Our team is
                  dedicated to ensuring that you have access to a range of resources and tools designed to help you achieve
                  your goals. With a user-friendly interface and a wealth of features, our platform is built to empower you.
                </p>
                <p>
                  Whether you're here to learn, connect, or grow, we strive to be your trusted partner along the way. Our
                  mission is to create a supportive environment that fosters growth, learning, and collaboration.
                </p>
                <p>
                  Thank you for choosing us, and we look forward to being part of your journey!
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
