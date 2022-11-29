import projImg1 from "../assets/img/portfolio.png";
import projImg2 from "../assets/img/travel.jpg";
import projImg3 from "../assets/img/startup.png";
import { Container, Row, Col, Tab, Nav, Button } from "react-bootstrap";
import Work from './Work';
import TrackVisibility from 'react-on-screen';
import 'animate.css'


const Works = () => {
  const works = [
    {
      title: "Portfolio Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Travel Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Startup Project",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Portfolio Project",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Travel Project",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];
  return ( 
    <section className="work" id="works">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
            {({isVisible}) => 
              <div className={isVisible ? "animate__animated animate__slideInUp": ""}>
                <h2>Latest Works</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
              </div>}
            </TrackVisibility>
            <Tab.Container id="works-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row className="justify-content-center">
                    <Col xs={12} sm={5} md={5}>
                      <Work imgUrl={works[0].imgUrl} title= {works[0].title} description={works[0].description}/>
                    </Col>
                    <Col xs={12} sm={7} md={{ span: 7, offset: 0 }}>
                      <Work imgUrl={works[1].imgUrl} title= {works[1].title} description={works[1].description}/>
                    </Col>
                  </Row>
                  <Row className="justify-content-center">
                  {
                    works.slice(2).map((work, index) => {
                      return (
                          <Col key={index} xs={12} md={4} >
                          <Work
                            {...work}
                            />
                        </Col>
                      )
                    })
                    }
                  </Row>
                  <Row className="justify-content-center">
                    <Col md={4} className="text-center">
                      <Button as="a" href="#a" className="btn btn-lg btn-more">More Project</Button>
                    </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane className="tab-p mb-custom" eventKey="second">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis</p>
                </Tab.Pane>
                <Tab.Pane className="tab-p mb-custom" eventKey="third">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <div className='background-works'></div>
    </section>
  );
}

export default Works;