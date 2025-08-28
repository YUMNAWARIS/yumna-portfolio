import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/home-main.png";
import Particle from "../components/ui/Particle";
import Type from "../components/ui/Type";
import myImg from "../assets/profile.png";
import ContactSection from "../pages/Contact";
import "../styles/home.css";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading-name">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Yumna Waris </strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
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

              <p className="home-about-body">
                I’m <strong>Yumna Waris</strong>, a <strong>Software Engineer II</strong> at
                <strong className="purple"> PayEngine</strong>, where we build tools that help
                <i><strong className="purple"> vertical SaaS companies </strong></i> manage their
                merchants and processor relationships more effectively.
                <br /> <br />

                Alongside my role, I’m studying <i><strong className="purple">machine learning</strong></i> and
                <i><strong className="purple"> AI</strong></i>, building personal projects and
                replicating published papers to deepen my understanding.
                <br />
                I’m exploring <i><strong className="purple">Master’s opportunities in AI/ML Data-intensive systems </strong></i>
              </p>
            </Col>
          </Row>

          <ContactSection />
        </Container>
      </Container>
    </section>
  );
}

export default Home;
