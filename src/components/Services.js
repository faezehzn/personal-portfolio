import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useEffect, useRef, useState} from 'react';


const Services = (props) => {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3,
        // slidesToSlide: 3 // optional, default to 1.
        partialVisibilityGutter: 40
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
        // slidesToSlide: 2 // optional, default to 1.
        partialVisibilityGutter: 30
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
        // slidesToSlide: 1 // optional, default to 1.
        partialVisibilityGutter: 30
      }
    };
    const vidRef = useRef(null);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if (window.scrollY > 900) {
          setScrolled(true)
        } else {
          setScrolled(false)
        }
      }
  
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
      <section className='service' id='services'>
        <Container>
          <Row className="align-items-center">
            <Col>
              <div className="service-bx">
                <h2>Services</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text.</p>
                <Carousel responsive={responsive}  ref={vidRef} autoPlay={scrolled? "": "autoplay"}  autoPlaySpeed={2000}  infinite={true} className="service-slider">
                  <div className="item">
                    <CircularProgressbar className="progressbar-item" 
                    value={60}  
                    text={"60%"}
                    styles={buildStyles({
                      textSize: "20px",
                    })} />
                    <h5>Web Development</h5>
                  </div>
                  <div className="item">
                    <CircularProgressbar className="progressbar-item" value={70} text={"70%"} />
                    <h5>Brand Identity</h5>
                  </div>
                  <div className="item">
                    <CircularProgressbar className="progressbar-item" value={80} text={"80%"} />
                    <h5>Logo Design</h5>
                  </div>
                  <div className="item">
                    <CircularProgressbar className="progressbar-item" value={90} text={"90%"} />
                    <h5>Web Development</h5>
                  </div>
                </Carousel>
              </div>
            </Col>
            <Col>
              <div className='background-services'></div>
            </Col>
          </Row>
        </Container> 
      </section>
    )
}

export default Services;