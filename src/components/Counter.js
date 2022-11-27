import { Container, Row, Col, Button} from "react-bootstrap";
import CountUp from 'react-countup';
import {useEffect, useState} from 'react';


const Counter = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 2220) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  
  return ( 
      <Container>
        <Row className="counter-box">
          <Col md={4}>
              {scrolled ? 
              <div className="single-counter text-center">
                <CountUp className="counter" separator="," end={5200} suffix=" +" />
                <p>Total Projects</p>
              </div>:
              <div className="single-counter text-center">
                <span className="counter">5,200 +</span>
                <p>Total Projects</p>
              </div>}
          </Col>
          <Col md={4}>
          {scrolled ? 
              <div className="single-counter text-center">
                <CountUp onScroll={onscroll} className="counter" end={230} />
                <p>On Going Projects</p>
              </div>:
              <div className="single-counter text-center">
                <span className="counter">230</span>
                <p>On Going Projects</p>
              </div>}
          </Col>
          <Col md={4}>
          {scrolled ? 
              <div className="single-counter text-center">
              <CountUp onScroll={onscroll} className="counter" end={90} suffix=" %" />
                <p>Job Success</p>
              </div>:
              <div className="single-counter text-center">
                <span className="counter">90 %</span>
                <p>Job Success</p>
              </div>}
          </Col>
        </Row>
      </Container>

  );
}

export default Counter;