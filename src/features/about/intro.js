import '../../styles/intro.css'
import laptopImg from "../../assets/about.png";


// IntroSection.jsx
export default function IntroSection() {
    return (
        <section className="intro-hero" id="profile-intro" aria-label="Profile & Journey — intro">
            <div className="intro-wrap">
                <div className="intro-copy">
                    <p className="eyebrow">Behind the Code</p>
                    <h1 className="purple">
                        Yumna Waris
                        <span className="intro-kicker">Software Engineer II @ PayEngine • ML-in-progress</span>
                    </h1>

                    <p className="purple">
                        I help build payments tooling that lets vertical SaaS onboard merchants, select processors,
                        and keep money movement reliable. I care about clean APIs, observability, and reducing operational toil.
                    </p>
                    <p className="intro-body">
                        Outside work, I’m deepening my ML/AI toolkit—replicating papers, shipping small experiments,
                        and applying them to fraud/risk, recommendations, and data-intensive systems.
                        I’m currently exploring Master’s opportunities in AI/ML & data-intensive systems.
                    </p>

                    <div className="intro-chips" aria-label="quick facts">
                        <span className="chip">2+ yrs experience</span>
                        <span className="chip">Karachi, PK</span>
                    </div>
                </div>

                <div className="img-fluid intro-art">
                    {/* keep your existing illustration/image here */}
                    <img 
                        src={laptopImg} 
                        alt="Developer at desk with code screens" 
                        loading="lazy" />
                </div>
            </div>
        </section>
    );
}
