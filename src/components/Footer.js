import { Container, Row, Col } from "react-bootstrap";
import MailchimpForm from "./MailchimpForm";
import logo from "../assets/img/logo.png";
import { GrFacebookOption, GrInstagram, GrLinkedinOption } from "react-icons/gr"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col xs={12} md={6} className="text-center">
            <img className="logo-footer" src={logo} alt="Logo" />
          </Col>
          <Col xs={12}  md={6} className="text-center">
            <div className="social-icon-footer justify-content-center">
            <a href="#a"><GrInstagram className='social-i' size={28} /></a>
            <a href="#a"><GrFacebookOption className='social-i' size={28} /></a>
            <a href="#a"><GrLinkedinOption className='social-i' size={28} /></a>
            </div>
          </Col>
        </Row>
        <Row className="align-items-center text-center">
          <p>Copyright 2022. All Rights Reserved</p>
        </Row>
      </Container>
    </footer>
  )
}

export default  Footer;