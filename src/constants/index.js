import { meta } from "../assets/images";
import {
    car,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    blender,
    devrev,
    python,
    c,
    cpp,
    pl,
    iiot
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: blender,
        name: "Blender",
        type: "3D",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: devrev,
        name: "DevRev",
        type: "CRM",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Coding",
    },
    {
        imageUrl: c,
        name: "C",
        type: "Coding",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Coding",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const awards = [
    {
        title: "Industrial IOT Hackathon Winner",
        company_name: "IIT Varnasi",
        icon: iiot,
        iconBg: "#a70e0e",
        date: "Completed",
        points: [
            "Developed an innovative IoT solution using Raspberry pi 4.",
            "Worked closely with a team to tackle real-world problems.",
            "Focused on user-friendly design and seamless functionality.",
            "Delivered a project that impressed the judges and showcased my skills."
        ],
    },
    {
        title: "Digital Twin Workshop",
        company_name: "Praya Labs",
        icon: pl,
        iconBg: "#fbb652",
        date: "Completed",
        points: [
            "Developed a digital twin of a product using Unity.",
            "Created the product using esp-8266 and servos.",
            "Learned how a digital twin can be used in real-time projects.",
        ],
    },
    {
        title: "DevRev Hackathon",
        company_name: "DevRev",
        icon: devrev,
        iconBg: "#5e5b5b",
        date: "Completed",
        points: [
            "Developed a snap-in for the DevRev CRM.",
            "It was a good oppurtunity where I learned TypeScript.",
            "Learned how API's work and deeper understanding of CRM",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Smart Traffic Management',
        description: 'An AI-powered traffic management system utilizing OpenCV, Python, and TensorFlow to dynamically adjust traffic light timings based on real-time traffic data, optimizing traffic flow and reducing congestion.',
        link: 'https://github.com/YourGitHubUsername/project_ai_summarizer',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'AI Voice Assistant with ESP-8266',
        description: 'A voice-controlled assistant built with the ESP8266 microcontroller, designed to perform various tasks hands-free, responding intelligently to voice commands.',
        link: 'https://github.com/YourGitHubUsername/social_media_app',
    },
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'ATM Simulator',
        description: 'A Java and SQL-based ATM simulation that enables users to conduct secure transactions, with features ensuring data integrity and user authentication.',
        link: 'https://github.com/YourGitHubUsername/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Hospital Management System',
        description: 'A comprehensive hospital management system developed with Java and SQL, focusing on efficient patient data management, operational ease, and a user-friendly interface.',
        link: 'https://github.com/YourGitHubUsername/threads',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-blue',
        name: 'To Do App',
        description: 'A Java Swing-based to-do list application integrated with MySQL, featuring user login for personalized task management and a simple interface for efficient task tracking.',
        link: 'https://github.com/YourGitHubUsername/project_car_showcase',
    },
];
