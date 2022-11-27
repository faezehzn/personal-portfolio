import { useState, useEffect, useRef } from "react";
import { Col, Row, Alert } from "react-bootstrap";


const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');
  const refAlert= useRef(null);

  useEffect(() => {
    if (status === 'success'|| status === 'error') {
      clearFields();
      setTimeout(()=>{
        refAlert.current.className += " d-none"
      }, 3000)
    }
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

  return ( 
    <Col lg={12}>
        <div className="newsletter-bx wow slideInUp">
          <Row>
            <Col lg={12} md={6} xl={5}>
              <h3>Subscribe to our Newsletter & Never miss latest updates</h3>
              {status === 'sending' && <Alert className="mx-auto" id="alert-news-1">Sending...</Alert>}
              {status === 'error' && <Alert ref={refAlert} className="mx-auto" variant="danger">{message}</Alert>}
              {status === 'success' && <Alert ref={refAlert} className="mx-auto" variant="success">{message}</Alert>}
            </Col>
            <Col md={6} xl={7}>
              <form onSubmit={(e) => handleSubmit(e)}>
                <div className="new-email-bx">
                  <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                  <button type="submit">Submit</button>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </Col>
  );
}

export default Newsletter;