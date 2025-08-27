import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import IntroSection from "./components/intro";
import ProfileBodyNavButtons from "./components/profile";
import ResumeNew from "../Resume/ResumeNew";

function About() {
  const [tab, setTab] = useState('education')
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", }}>
          <IntroSection />
        </Row>

        <Row>
          <ProfileBodyNavButtons onChange={setTab} active={tab}/>
        </Row>

        <Row>
          {tab === 'resume' && (
            <div>
              <ResumeNew />
            </div>
          )}




        </Row>

        
      </Container>
    </Container>
  );
}

export default About;
