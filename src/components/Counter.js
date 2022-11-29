import { Container, Row, Col } from "react-bootstrap";
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';


const Counter = () => {
  return ( 
      <Container>
        <Row className="counter-box">
          <Col md={4}>
            <div className="single-counter text-center">
              <TrackVisibility>
              {({isVisible}) => isVisible &&
                <CountUp className="counter" separator="," end={5200} suffix=" +" />}
              </TrackVisibility>
              <p>Total Projects</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-counter text-center">
              <TrackVisibility>
                {({isVisible}) => isVisible &&
                <CountUp className="counter" end={230} />}
              </TrackVisibility>
              <p>On Going Projects</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="single-counter text-center">
              <TrackVisibility>
                {({isVisible}) => isVisible &&
                <CountUp className="counter" end={90} suffix=" %" />}
              </TrackVisibility>
              <p>Job Success</p>
            </div>
          </Col>
        </Row>
      </Container>

  );
}

export default Counter;