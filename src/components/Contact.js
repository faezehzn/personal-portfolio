import { useState, useRef } from 'react';
import { Container, Row, Col, Alert, OverlayTrigger, Tooltip, Overlay } from 'react-bootstrap';
import contactImg from '../assets/img/programmer.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Tippy from '@tippyjs/react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const refAlert = useRef(null);
  const form = useRef();

  yup.setLocale({
    string: {
      required: 'Required',
      min: ({ min }) => ({ key: 'Field Too Short', values: { min } }),
      max: ({ max }) => ({ key: 'Field Too Big', values: { max } }),
    },
  });
  const RegExp =
    /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/g;

  const schema = yup.object().shape({
    firstName: yup.string('Please Enter Correct First Name').required('Required'),
    lastName: yup.string('Please Enter Correct Last Name').required('Required'),
    email: yup.string('Please Enter valid Email').email().required('Required'),
    phone: yup.string('Invalid Phone No.').matches(RegExp, `Use the pattern: 0912 345 6789`),
    message: yup.string().max(500).required('Required'),
  });

  const formFormik = useFormik ({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      message: '',
    },
    onSubmit: values => {
      handleSubmit(values)
    },
    validationSchema: schema,
  });


  const handleSubmit = async (values) => {
    setButtonText('Sending...');

    await emailjs.sendForm( process.env.REACT_APP_YOUR_SERVICE_ID, process.env.REACT_APP_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_YOUR_PUBLIC_KEY)
    .then((result) => {
      formFormik.resetForm();
      if (result.status === 200 || result.text === "OK") {
        setStatus({ succes: true, message: 'Message sent successfully'})}
        setTimeout(()=>{
          refAlert.current.className += " d-none"
        }, 5000)
      }, (error) => {
        setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
        setTimeout(()=>{
          refAlert.current.className += " d-none"
        }, 5000);
        console.log(error.text);
      });
    setButtonText('Send');
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <Row className="align-items-center">
          <h2>Let’s discuss for a project</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Col xs={{ order: 2 }} md={{ span: 6, order: 1 }}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? 'animate__animated animate__tada' : ''
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col xs={{ order: 1 }} md={{ span: 6, order: 2 }}>
            <form onSubmit={formFormik.handleSubmit} ref={form}method="POST">
              {Object.keys(formFormik.errors).length === 0 && status.message && (
                <Alert
                  ref={refAlert}
                  variant={status.success === false ? 'danger' : 'success'}
                >
                  {status.message}
                </Alert>
              )}
              <Row>
                <Col
                  size={12}
                  sm={6}
                  className={formFormik.touched.firstName && formFormik.errors.firstName ? 'input-error px-1' : 'px-1'}
                >
                  <input
                    type="text"
                    className={formFormik.touched.firstName && formFormik.errors.firstName && 'd-none'}
                    placeholder="First Name"
                    {...formFormik.getFieldProps("firstName")}
                  />
                  {formFormik.touched.firstName && formFormik.errors.firstName && (
                  <Tippy placement="bottom"  render={attrs => (
                    <div className="contact-tooltip" {...attrs}>
                      <div data-popper-arrow />
                      {formFormik.errors.firstName}
                    </div>
                  )}>
                    <input
                      type="text"
                      placeholder="First Name"
                      {...formFormik.getFieldProps("firstName")}
                    />
                  </Tippy>)}
                </Col>
                <Col
                  size={12}
                  sm={6}
                  className={formFormik.touched.lastName && formFormik.errors.lastName ? 'input-error px-1' : 'px-1'}
                >
                  <input
                    type="text"
                    className={formFormik.touched.lastName && formFormik.errors.lastName && 'd-none'}
                    placeholder="Last Name"
                    {...formFormik.getFieldProps("lastName")}
                  />
                  {formFormik.touched.lastName && formFormik.errors.lastName && (
                    <Tippy placement="bottom"  render={attrs => (
                    <div className="contact-tooltip" {...attrs}>
                      <div data-popper-arrow />
                      {formFormik.errors.lastName}
                    </div>
                  )}>
                    <input
                      type="text"
                      placeholder="Last Name"
                      {...formFormik.getFieldProps("lastName")}
                    />
                  </Tippy>)}
                </Col>
                <Col
                  size={12}
                  sm={6}
                  className={formFormik.touched.email && formFormik.errors.email ? 'input-error px-1' : 'px-1'}
                >
                  <input
                    type="email"
                    className={formFormik.touched.email && formFormik.errors.email && 'd-none'}
                    placeholder="Email Address"
                    {...formFormik.getFieldProps("email")}
                  />
                  {formFormik.touched.email && formFormik.errors.email && (
                    <Tippy placement="bottom"  render={attrs => (
                    <div className="contact-tooltip" {...attrs}>
                      <div data-popper-arrow />
                      {formFormik.errors.email}
                    </div>
                  )}>
                    <input
                      type="email"
                      placeholder="Email Address"
                      {...formFormik.getFieldProps("email")}
                    />
                  </Tippy>)}
                </Col>
                <Col
                  size={12}
                  sm={6}
                  className={formFormik.touched.phone && formFormik.errors.phone ? 'input-error px-1' : 'px-1'}
                >
                  <input
                    type="tel"
                    className={formFormik.touched.phone && formFormik.errors.phone && 'd-none'}
                    placeholder="Phone No."
                    {...formFormik.getFieldProps("phone")}
                  />
                  {formFormik.touched.phone && formFormik.errors.phone && (
                    <Tippy placement="bottom"  render={attrs => (
                    <div className="contact-tooltip" {...attrs}>
                      <div data-popper-arrow />
                      {formFormik.errors.phone}
                    </div>
                  )}>
                    <input
                      type="text"
                      placeholder="Phone"
                      {...formFormik.getFieldProps("phone")}
                    />
                  </Tippy>)}
                </Col>
                <Col
                  size={12} sm={12}
                  className={formFormik.touched.message && formFormik.errors.message ? 'input-error px-1' : 'px-1'}
                >
                  <textarea
                    type='text'
                    rows="6"
                    className={formFormik.touched.message && formFormik.errors.message && 'd-none'}
                    placeholder="Message"
                    {...formFormik.getFieldProps("message")}
                  />
                  {formFormik.touched.message && formFormik.errors.message && (
                    <Tippy placement="bottom"  render={attrs => (
                    <div className="contact-tooltip" {...attrs}>
                      <div data-popper-arrow />
                      {formFormik.errors.message}
                    </div>
                  )}>
                    <textarea
                      type="text"
                      rows="6"
                      placeholder="Message"
                      {...formFormik.getFieldProps("message")}
                    />
                  </Tippy>)}
                </Col>
                <Col size={12} sm={12}>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
