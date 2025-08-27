import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/profile.png";
import ContactSection from "../Contact/ContactSection";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={4} className="myAvtar d-flex justify-content-center">
            <img
              src={myImg}
              alt="Yumna Waris headshot"
              className="avatar img-fluid"
              loading="eager"
              decoding="async"
            />
          </Col>
          <Col md={1}></Col>
          <Col md={7} className="home-about-description">
            {/* <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1> */}

            <p className="home-about-body">
              I’m <strong>Yumna Waris</strong>, a <strong>Software Engineer II</strong> at
              <strong className="purple"> PayEngine</strong>, where we build tools that help
              <i><strong className="purple"> vertical SaaS companies </strong></i> manage their
              merchants and processor relationships more effectively.
              <br /> <br/>
              
              Alongside my role, I’m studying <i><strong className="purple">machine learning</strong></i> and
              <i><strong className="purple"> AI</strong></i>, building personal projects and
              replicating published papers to deepen my understanding.
              <br />
              I’m exploring <i><strong className="purple">Master’s opportunities in AI/ML Data-intensive systems </strong></i>
            </p>
          </Col>
        </Row>

        <Row>
          <ContactSection />
        </Row>

      </Container>
    </Container>
  );
}
export default Home2;
