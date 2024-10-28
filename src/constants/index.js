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
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
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
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
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
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
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
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
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
        icon: meta,
        iconBg: "#a2d2ff",
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
        icon: meta,
        iconBg: "#a2d2ff",
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
        icon: meta,
        iconBg: "#a2d2ff",
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
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'A web app that tracks and notifies users of price changes on Amazon, ensuring users get the best deals.',
        link: 'https://github.com/YourGitHubUsername/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'A full-stack replica of the discussion platform "Threads" with features for posting and engaging in conversations.',
        link: 'https://github.com/YourGitHubUsername/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Mobile app for finding and comparing cars, simplifying the car-buying process with detailed listings.',
        link: 'https://github.com/YourGitHubUsername/project_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a social media clone enabling users to share photos and interact in a familiar environment.',
        link: 'https://github.com/YourGitHubUsername/social_media_app',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'An AI-powered app that creates summaries from lengthy texts, making content easier to digest.',
        link: 'https://github.com/YourGitHubUsername/project_ai_summarizer',
    }
];
