import aboutImg from "../assets/img/about-img.jpeg";
import grid from "../assets/img/grid.png"
import { Container, Row, Col, Button} from "react-bootstrap";
import CV from '../assets/cv.txt'
import TrackVisibility from 'react-on-screen';
import 'animate.css'


const About = () => {
  return ( 
    <>
      <section className="about-me" id="about">
        <div className="about-large-title d-none d-md-block">
        About
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <TrackVisibility>
              {({isVisible}) => 
                <div className={isVisible ? "about-details animate__animated animate__bounceInLeft": "about-details"}>
                  <h3>About me</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus com odo viverra maecenas.</p>
                  <Button as="a" href={CV} className="btn-more" download>Download CV
                  </Button>
                </div>}
            </TrackVisibility>
            </Col>
            <Col md={6}>
              <TrackVisibility>
              {({isVisible}) => 
                <div className="about-img">
                  <div className={isVisible ? "color-pattern d-none d-sm-block animate__animated animate__bounceInRight": "color-pattern d-none d-sm-block"}>
                    <img src={aboutImg} alt="aboutImg" />
                  </div>
                  <div className="my-Pic d-none d-md-block">
                    <img src={grid} alt="" />
                  </div>
                </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default About;