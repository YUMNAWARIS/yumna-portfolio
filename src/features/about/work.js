import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from "react-icons/fi";
import { EXPERIENCE } from "../../data/work";
import '../../styles/work.css'

export default function ExperienceSection() {
    return (
        <section id="experience" className="experience-section py-5">
            <Container>
                <Row className="g-4">
                    {EXPERIENCE.map((job, i) => (
                        <Col key={i} md={12}>
                            <Card style={{ backgroundColor: "transparent"}}>
                                <Card.Body>
                                    <div className="d-flex flex-wrap align-items-center gap-3 mb-2">
                                        <h3 className="mb-0">{job.company}</h3>
                                        <Badge bg="" className="badge-accent">{job.title}</Badge>
                                    </div>
                                    <div className="exp-meta">
                                        <span><FiCalendar aria-hidden="true" /> {job.period} </span>
                                        {job.location && <span><FiMapPin aria-hidden="true" /> {job.location} </span>}
                                    </div>

                                    {job.summary && <p className="mb-2">{job.summary}</p>}

                                    {job.bullets?.length > 0 && (
                                        <ul className="exp-list">
                                            {job.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                                        </ul>
                                    )}

                                    {job.stack?.length > 0 && (
                                        <div className="exp-stack">
                                            {job.stack.map((t) => <span key={t} className="chip">{t}</span>)}
                                        </div>
                                    )}

                                    {job.links?.length > 0 && (
                                        <div className="exp-links">
                                            {job.links.map((l, idx) => (
                                                <a key={idx} href={l.href} target="_blank" rel="noreferrer" className="exp-link">
                                                    <FiExternalLink aria-hidden="true" /> {l.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
}
