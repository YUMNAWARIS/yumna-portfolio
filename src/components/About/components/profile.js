import { useState } from "react";
import { Row, Col, Button } from "react-bootstrap";
import './profile.css'
/* tiny inline icons (no deps) */
const Ico = {
    Cap: (p) => <svg viewBox="0 0 24 24" className={`profile-ico ${p.className || ""}`}><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10l9-5 9 5-9 5-9-5z" /><path d="M7 12v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-5" /></g></svg>,
    Brief: (p) => <svg viewBox="0 0 24 24" className={`profile-ico ${p.className || ""}`}><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" /><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" /><path d="M3 13h18" /></g></svg>,
    Trophy: (p) => <svg viewBox="0 0 24 24" className={`profile-ico ${p.className || ""}`}><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17a5 5 0 0 0 5-5V4H7v8a5 5 0 0 0 5 5z" /><path d="M18 6h2a2 2 0 0 1 2 2 5 5 0 0 1-5 5M6 6H4a2 2 0 0 0-2 2 5 5 0 0 0 5 5" /></g></svg>,
    File: (p) => <svg viewBox="0 0 24 24" className={`profile-ico ${p.className || ""}`}><g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /></g></svg>,
    Ellipsis: (p) => (
        <svg viewBox="0 0 24 24" className={`profile-ico ${p.className || ""}`}>
            <circle cx="5" cy="12" r="2" fill="currentColor" /><circle cx="12" cy="12" r="2" fill="currentColor" /><circle cx="19" cy="12" r="2" fill="currentColor" />
        </svg>
    ),
};

export default function ProfileBodyNavButtons({
    active = "education",
    onChange = () => { },
}) {
    const [open, setOpen] = useState(false);

    const items = [
        { key: "experience", label: "Work Experience", Icon: Ico.Brief },
        { key: "education", label: "Education", Icon: Ico.Cap },
        { key: "achievements", label: "Achievements", Icon: Ico.Trophy },
        { key: "resume", label: "Resume", Icon: Ico.File },
    ];

    const current = items.find(i => i.key === active) || items[0];

    const clickItem = (key) => {
        onChange(key);
        setOpen(false);
    };

    return (
        <section className="profile-nav">
            {/* DESKTOP: full button row */}
            <Row className="g-2 justify-content-center profile-navbar profile-desktop">
                {items.map(({ key, label, Icon }) => (
                    <Col xs="auto" key={key} className="px-0">
                        <Button
                            type="button"
                            variant="outline-light"
                            className={`profile-btn ${active === key ? "is-active" : ""}`}
                            aria-pressed={active === key}
                            onClick={() => clickItem(key)}
                        >
                            <Icon />
                            <span className="profile-label">{label}</span>
                        </Button>
                    </Col>
                ))}
            </Row>

        </section>
    );
}
