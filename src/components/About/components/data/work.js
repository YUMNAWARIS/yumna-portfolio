// src/data/experience.js
export const EXPERIENCE = [
    {
        company: "PayEngine",
        title: "Software Engineer II",
        location: "USA Remote",
        period: "2023 — Present",
        summary:
            "Build partner-specific payment solutions for vertical SaaS platforms: merchant onboarding, processor integrations, and reliable payment flows.",
        bullets: [
            "Design and maintain microservices for payments using event-driven architecture and asynchronous processing (idempotency, retries, DLQs, backoff).",
            "Implement partner integrations and APIs (auth, webhooks, rate limiting), focusing on reliability and observability (structured logs, dashboards, alerts).",
            "Work with data-intensive systems: PostgreSQL for source-of-truth, Redis for caching/queues, background workers for long-running jobs.",
            "Collaborate with product/partners to scope features, write RFCs, and ship incremental changes safely (feature flags, canary releases)."
        ],
        stack: ["Node.js", "Express", "PostgreSQL", "Redis", "Kafka.js", "Docker", "React"],
        links: [
            // Example: { label: "Case Study: FraudShield", href: "/projects/fraudshield" }
        ]
    }
    // Add past roles here as needed
];
