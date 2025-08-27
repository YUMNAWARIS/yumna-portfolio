import { BSCourseWork } from "./courses";

// src/data/education.js
export const EDUCATION = [
    {
        school: "Karachi University — UBIT",
        degree: "BS in Software Engineering",
        gpa: "3.66",
        year: "2023",
        location: "Karachi, Pakistan",
        highlights: [
            "The curriculum heavily emphasizes applying theoretical concepts to real-world problems through individual and group software projects",
            "The degree covers the entire lifecycle of software products, from initial analysis and requirements to design, development, testing, and ongoing maintenance. ",
            "Students learn to collaborate in a team environment and apply project management principles to develop software solutions effectively. "
        ],
        // Start with what you have; you can add more later
        coursework: BSCourseWork,
        links: [
            // Optional: add links if you want
            { label: "University Site", href: "https://uok.edu.pk/faculties/computerscience/bs.php" },
        ],
    },
];
