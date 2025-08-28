import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../components/ui/Particle";
import IntroSection from "../features/about/intro";
import ProfileBodyNavButtons from "../features/about/profile";
import ResumeNew from "./Resume";
import EducationSection from "../features/about/education";
import ExperienceSection from "../features/about/work";

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

          {tab === 'education' && (
            <div>
              <EducationSection />
            </div>
          )}

          {tab === 'experience' && (
            <div>
              <ExperienceSection />
            </div>
          )}


        </Row>

        
      </Container>
    </Container>
  );
}

export default About;
