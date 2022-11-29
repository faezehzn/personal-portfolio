import { Col, Container, Row } from "react-bootstrap";
import { FiArrowRightCircle } from "react-icons/fi";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Typewriter } from 'react-simple-typewriter'

function Banner() {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({isVisible}) => 
                <div className={isVisible ? "banner-txt animate__animated animate__fadeIn": "banner-txt "}>
                  <span className="tagline">Welcome To My Portfolio</span>
                  <h1>
                    {`Hi! I'm Faezeh `} 
                    <Typewriter
                    words={["Web Developer", "Web Designer", "UI/UX Designer"]}
                    loop={false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={100}
                    deleteSpeed={300}
                    delaySpeed={500}
                    />
                  </h1>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
                    praesentium sint, totam repellat qui a maiores asperiores
                    temporibus, explicabo labore consectetur accusantium similique
                    maxime ratione doloribus ducimus officia ab beatae officiis
                  </p>
                  <button>
                  <a href='#contact'>Let’s Discuss</a><FiArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
