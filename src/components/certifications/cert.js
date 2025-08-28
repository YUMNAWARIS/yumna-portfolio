import { useMemo, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { SiCoursera, SiUdemy } from "react-icons/si";
import { FiAward, FiExternalLink, FiCopy, FiCheck, FiCalendar } from "react-icons/fi";
import { CERTS } from "./cert-data";
import './cert.css'

const ACCENT = "#c95bf5";   // brand purple

function ProviderIcon({ type, size = 18 }) {
    if (type === "coursera") return <SiCoursera size={size} aria-hidden="true" />;
    if (type === "udemy") return <SiUdemy size={size} aria-hidden="true" />;
    return <FiAward size={size} aria-hidden="true" />; // awards/hackathons
}

export default function CertificationsSection() {
    const [filter, setFilter] = useState("all"); // all | coursera | udemy | award

    const filtered = useMemo(
        () => CERTS.filter(c => filter === "all" || c.provider === filter),
        [filter]
    );

    const counts = useMemo(() => ({
        all: CERTS.length,
        coursera: CERTS.filter(c => c.provider === "coursera").length,
        udemy: CERTS.filter(c => c.provider === "udemy").length,
        award: CERTS.filter(c => c.provider === "award").length
    }), []);

    return (
        <Card style={{ backgroundColor: "transparent"}}>
            <Card.Body style={{ backgroundColor: "transparent"}} >
                <section id="certifications" className="certs-section py-5">
                    <Container>
                        <Row className="mb-3">
                            <Col lg={8}>
                                <h2>Certifications</h2>
                                <p className="certs-sub">
                                    Selected certificates and awards relevant to data-intensive systems and ML.
                                </p>
                            </Col>
                        </Row>

                        {/* Filters */}
                        <div className="certs-filter" role="tablist" aria-label="Filter certifications">
                            {[
                                { id: "all", label: `All (${counts.all})` },
                                { id: "coursera", label: `Coursera (${counts.coursera})` },
                                { id: "udemy", label: `Udemy (${counts.udemy})` },
                                { id: "award", label: `Awards (${counts.award})` },
                            ].map(t => (
                                <button
                                    key={t.id}
                                    role="tab"
                                    aria-selected={filter === t.id}
                                    className={`cf-pill ${filter === t.id ? "active" : ""}`}
                                    onClick={() => setFilter(t.id)}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>

                        {/* Grid */}
                        <div className="certs-grid">
                            {filtered.map((c, idx) => (
                                <CertCard key={idx} cert={c} />
                            ))}
                        </div>
                    </Container>
                </section>
            </Card.Body>
        </Card>
    );
}

function CertCard({ cert }) {
    const [copied, setCopied] = useState(false);

    const copyId = async () => {
        if (!cert.credentialId) return;
        try {
            await navigator.clipboard.writeText(cert.credentialId);
            setCopied(true);
            setTimeout(() => setCopied(false), 1200);
        } catch { }
    };

    return (
        <Card className="cert-card">
            <Card.Body>
                <div className="cert-header">
                    <div className="cert-icon"><ProviderIcon type={cert.provider} /></div>
                    <div className="cert-title">{cert.title}</div>
                </div>

                <div className="cert-meta">
                    <span><FiCalendar aria-hidden="true" /> {cert.date}</span>
                    <span>{cert.issuer}</span>
                </div>

                {cert.skills?.length > 0 && (
                    <ul className="cert-skills">
                        {cert.skills.map((s, i) => <li key={i} className="chip">{s}</li>)}
                    </ul>
                )}

                <div className="cert-actions">
                    {cert.url && (
                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-btn"
                            aria-label="Open credential"
                            title="Open credential"
                        >
                            <FiExternalLink size={18} aria-hidden="true" />
                        </a>
                    )}

                    {cert.credentialId && (
                        <button
                            type="button"
                            className="icon-btn"
                            onClick={copyId}
                            aria-label={copied ? "Copied!" : "Copy credential ID"}
                            title={copied ? "Copied!" : "Copy credential ID"}
                        >
                            {copied ? <FiCheck size={18} /> : <FiCopy size={18} />}
                        </button>
                    )}
                </div>
            </Card.Body>
        </Card>
    );
}
