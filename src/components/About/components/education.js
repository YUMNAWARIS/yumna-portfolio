import { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Collapse } from "react-bootstrap";
import { FiCalendar, FiMapPin, FiBookOpen, FiAward, FiExternalLink } from "react-icons/fi";
import { EDUCATION } from "./data/education";
import './education.css'

export default function EducationSection() {
    return (
        <section id="education" className="education-section py-5">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col lg={8} className="text-center">
                        <h2 className="mb-2">Education</h2>
                        <p className="text-muted">
                            Formal education and selected coursework from my bachelor’s.
                        </p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {EDUCATION.map((ed, idx) => (
                        <Col md={12} key={idx}>
                            <EducationCard {...ed} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}


function EducationCard({ school, degree, gpa, year, location, highlights = [], coursework = [], links = [] }) {
    const [showAll, setShowAll] = useState(false);
    const initialCount = 6; // show first N courses, reveal the rest with "Show more"


    return (
        <Card className="edu-card">
            <Card.Body>
                <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                    <h3 className="mb-0">{school}</h3>
                    <Badge bg="" className="badge-accent">{degree}</Badge>
                </div>

                <div className="edu-meta">
                    <span><FiCalendar aria-hidden="true" /> {year} </span>
                    {location && <span><FiMapPin aria-hidden="true" /> {location} </span>}
                    {gpa && <span><FiAward aria-hidden="true" /> GPA {gpa} </span>}
                </div>
                <br />
                {highlights?.length > 0 && (
                    <ul className="edu-meta">
                        {highlights.map((h, i) => <li key={i}>{h}</li>)}
                    </ul>
                )}
                {links?.length > 0 && (
                    <div className="edu-links edu-meta">
                        {links.map((l, i) => (
                            <a key={i} href={l.href} target="_blank" rel="noreferrer" className="ext-link">
                                <FiExternalLink aria-hidden="true" /> {l.label} 
                            </a>
                        ))}
                    </div>
                )}
                <br/>

                <CourseworkCollapse 
                    sections={coursework}
                    defaultOpenKeys={"foundations"}
                />

            </Card.Body>
        </Card>
    );
}


function CourseworkCollapse({
    sections,                 // [{key, title, items: []}]
    defaultOpenKeys = [],     // e.g., ["foundations"]
}) {
    const [open, setOpen] = useState(() => new Set(defaultOpenKeys));

    const toggle = (key) => {
        setOpen(prev => {
            const next = new Set(prev);
            if (next.has(key)) next.delete(key);
            else next.add(key);
            return next;
        });
    };

    return (
        <div className="cw-wrap">
            {sections.map(({ key, title, items }) => {
                const isOpen = open.has(key);
                return (
                    <Card key={key} className="cw-card">
                        <Card.Header className="cw-header">
                            <Button
                                variant="link"
                                className="cw-toggle"
                                aria-expanded={isOpen}
                                aria-controls={`cw-${key}`}
                                onClick={() => toggle(key)}
                            >
                                <span className={`cw-chevron ${isOpen ? "open" : ""}`} aria-hidden />
                                <span className="cw-title">{title}</span>
                                <span className="cw-count">{items.length}</span>
                            </Button>
                        </Card.Header>

                        <Collapse in={isOpen}>
                            <div id={`cw-${key}`}>
                                <Card.Body className="cw-body">
                                    <ul className="">
                                        {items.map((it, i) => <li key={i} style={{ "listStyle" : "none"}}>{it}</li>)}
                                    </ul>
                                </Card.Body>
                            </div>
                        </Collapse>
                    </Card>
                );
            })}
        </div>
    );
}
