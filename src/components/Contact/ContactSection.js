import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiCheck, FiCopy, FiSend } from "react-icons/fi";
import { SiMedium, SiKaggle, SiInstagram, SiFacebook, SiCoursera, SiUdemy } from "react-icons/si";
import "./contact.css"

export default function ContactSection() {
    const [copied, setCopied] = useState(null);
    const email = "yumnaahwaris@gmail.com";
    const phone = "+92 335 6910909";

    const socials = [
        { name: "GitHub", url: "https://github.com/yourhandle", icon: FiGithub },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/yourhandle/", icon: FiLinkedin },
        { name: "Medium", url: "https://medium.com/@yourhandle", icon: SiMedium },
        { name: "Kaggle", url: "https://kaggle.com/yourhandle", icon: SiKaggle },
        { name: "X (Twitter)", url: "https://twitter.com/yourhandle", icon: FiTwitter },
        { name: "Instagram", url: "https://instagram.com/yourhandle", icon: SiInstagram },
        { name: "Facebook", url: "https://facebook.com/yourhandle", icon: SiFacebook },
        { name: "Coursera", url: "https://coursera.org/user/yourhandle", icon: SiCoursera },
        { name: "Udemy", url: "https://udemy.com/user/yourhandle", icon: SiUdemy },
        { name: "Website", url: "https://your-site.com", icon: FiGlobe },
    ];

    const copy = async (text, key) => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(key);
            setTimeout(() => setCopied(null), 1200);
        } catch { }
    };

    return (
        <section id="contact" className="contact-section py-5 mt-5">
            <Container>
                <Row className="justify-content-center mb-4">
                    <Col md={10} lg={8} className="text-center">
                        <h2 className="mb-2 purple">Contact</h2>
                        <p className="text-muted">Prefer email? Phone? Social? Pick what works best—I'll reply soon.</p>
                    </Col>
                </Row>

                <Row className="g-4">
                    {/* Email + Phone Card */}
                    <Col md={6}>
                        <Card className="contact-card h-100">
                            <Card.Body>
                                <h5 className="contact-heading">
                                    <FiMail aria-hidden="true" /> Email
                                </h5>
                                <div className="contact-actions">
                                    <div className="muted-line">{email}</div>

                                    <a
                                        href={`mailto:${email}?subject=Hello%20Yumna`}
                                        className="icon-btn"
                                        aria-label="Send email"
                                        title="Send email"
                                    >
                                        <FiSend size={18} aria-hidden="true" />
                                    </a>

                                    <button
                                        type="button"
                                        className="icon-btn"
                                        onClick={() => copy(email, "email")}
                                        aria-label={copied === "email" ? "Copied!" : "Copy email"}
                                        title={copied === "email" ? "Copied!" : "Copy email"}
                                    >
                                        {copied === "email" ? (
                                            <FiCheck size={18} aria-hidden="true" />
                                        ) : (
                                            <FiCopy size={18} aria-hidden="true" />
                                        )}
                                    </button>
                                </div>


                                <hr />

                                <h5 className="contact-heading">
                                    <FiPhone aria-hidden="true" /> Phone
                                </h5>
                                <div className="contact-actions">
                                    <div className="muted-line">{phone}</div>

                                    <a
                                        href={`tel:${phone.replace(/\s+/g, "")}`}
                                        className="icon-btn"
                                        aria-label="Call"
                                        title="Call"
                                    >
                                        <FiPhone size={18} aria-hidden="true" />
                                    </a>

                                    <button
                                        type="button"
                                        className="icon-btn"
                                        onClick={() => copy(phone, "phone")}
                                        aria-label={copied === "phone" ? "Copied!" : "Copy phone"}
                                        title={copied === "phone" ? "Copied!" : "Copy phone"}
                                    >
                                        {copied === "phone" ? (
                                            <FiCheck size={18} aria-hidden="true" />
                                        ) : (
                                            <FiCopy size={18} aria-hidden="true" />
                                        )}
                                    </button>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Social Card */}
                    <Col md={6}>
                        <Card className="contact-card h-100">
                            <Card.Body>
                                <h5 className="contact-heading text-center">Social</h5>
                                <ul className="social-grid" role="list">
                                    {socials.map(({ name, url, icon: Icon }) => (
                                        <li key={name} role="listitem">
                                            <a
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="social-tile"
                                                aria-label={name}
                                            >
                                                <Icon size={20} aria-hidden="true" />
                                                <span>{name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
