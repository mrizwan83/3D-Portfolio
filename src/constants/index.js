import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    aalogo,
    logo,
    threejs,
    scaleAIlogo,
    next,
    python,
    postgresql,
    rails,
    awss3,
    scss,
    axios,
    googlemaps,
    heroku,
    facediary,
    rizzyprompts,
    crawl,
    adventurescape

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    {
        title: "Full-Stack Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Next.js",
        icon: next,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "PostgreSQL",
        icon: postgresql,
    },
    {
        name: "Ruby on Rails",
        icon: rails,
    },
    {
        name: "AWS S3",
        icon: awss3,
    },
    {
        name: "SCSS/Sass",
        icon: scss,
    },
    {
        name: "Axios",
        icon: axios,
    },
    {
        name: "Google Maps API",
        icon: googlemaps,
    },
    {
        name: "Heroku",
        icon: heroku,
    },
];

const experiences = [
    {
        title: "Full-Stack Developer Bootcamp",
        company_name: "App Academy",
        icon: aalogo,
        iconBg: "#383E56",
        date: "May 2022 - Sep 2022",
        points: [
            "Immersed myself in a diverse range of technologies, including React, Redux, JavaScript, Ruby on Rails, PostgreSQL, HTML, and CSS.",
            "Explored additional valuable technologies such as jQuery, MongoDB, Node.js, Axios, Express.js, Canvas, AWS S3, Google Maps API, Git/Github, Heroku, Ubuntu, and more.",
            "Developed three standout projects: AdventureScape, FaceDiary, and Crawl, showcasing both technical expertise and creative innovation.",
            "Acquired extensive experience in software development through App Academy, preparing me for future opportunities in the tech industry.",
        ],
    },
    {
        title: "Projects At App Academy",
        company_name: "App Academy",
        icon: aalogo,
        iconBg: "#383E56",
        date: "Oct 2022",
        points: [
            "FaceDiary: A full-stack clone of Facebook using React-Redux frontend and Ruby on Rails for backend.",
            "Implemented Search functionality for efficient filtering of search results.",
            "AdventureScape: A Canvas-based game inspired by Pokemon and Runescape, built with HTML Canvas and JavaScript.",
            "Employed OOP to create dynamic game entity implementation and maintainable code.",
            "Crawl: A MERN stack web app allowing users to signup and create crawls with their favorite venues.",
            "Incorporated Google Maps API for an interactive map view of venue locations for a preferable user-interface (UI) and user-experience (UX) design.",
            "Led the backend development and actively collaborated with the frontend team, resulting in 100% more productivity and successful project completion."
        ],
    },
    {
        title: "RizzyPrompts.com",
        company_name: "Personal Project",
        icon: logo,
        iconBg: "#01030f",
        date: "July 2023",
        points: [
            "Developed RizzyPrompts, a modern Next.js 13 full-stack application that allows users to explore a collection of AI prompts, share their own ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence.",
            "Implemented NextAuth for seamless authentication, MongoDB for data storage, and Tailwind CSS for styling, ensuring an efficient and aesthetically pleasing user experience.",
            "Integrated OAuth with Google and GitHub for easy authentication, making it convenient for users to access the platform.",
            "Deployed RizzyPrompts on Vercel for a reliable and accessible user experience, which can be accessed at https://rizzyprompts.com.",
        ],
    },
    {
        title: "Computer Science Expert AI Training",
        company_name: "Scale AI",
        icon: scaleAIlogo,
        iconBg: "#000000",
        date: "July 2023 - Present",
        points: [
            "Engaging in diverse projects to train generative AI models and deliver innovative solutions.",
            "Evaluating chatbots through thoughtful prompts and ratings to optimize conversational interactions and enhance user experience.",
            "Demonstrating expertise in writing code with reasoning to guide AI models' responses effectively.",
            "Editing and refining code generated by AI models to improve performance and resolve issues.",
            "Contributing proactively to various tasks and projects, supporting the team in delivering impactful AI-powered solutions.",
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];




const projects = [
    {
        name: "RizzyPrompts",
        description:
            "A modern Next.js 13 full-stack application that allows users to explore a collection of AI prompts, share their ideas, collaborate with others, and vote on the most inspiring prompts in the field of artificial intelligence.",
        tags: [
            {
                name: "Next.js",
                color: "blue-text-gradient",
            },
            {
                name: "NextAuth",
                color: "orange-text-gradient",
            },
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Tailwind CSS",
                color: "pink-text-gradient",
            },
        ],
        image: rizzyprompts,
        source_code_link: "https://github.com/mrizwan83/RizzyPrompts",
        live_demo_link: "https://rizzyprompts.com",
    },
    {
        name: "Crawl",
        description:
            "A MERN stack web app that allows users to signup and create crawls with their favorite venues, making it easy to explore new places and share experiences.",
        tags: [
            {
                name: "MongoDB",
                color: "green-text-gradient",
            },
            {
                name: "Express.js",
                color: "orange-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },

            {
                name: "Node.js",
                color: "gold-text-gradient",
            },

            {
                name: "Google Maps API",
                color: "aqua-text-gradient",
            },
            {
                name: "Cloudinary Upload API",
                color: "aqua-text-gradient",
            },
        ],
        image: crawl,
        source_code_link: "https://github.com/mrizwan83/crawl",
        live_demo_link: "https://socialcrawl.herokuapp.com/",
    },
    {
        name: "FaceDiary",
        description:
            "A full-stack clone of Facebook that uses React-Redux frontend and Ruby on Rails for the backend, providing a familiar social media experience for users.",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "green-text-gradient",
            },
            {
                name: "JavaScript",
                color: "gold-text-gradient",
            },
            {
                name: "Ruby on Rails",
                color: "pink-text-gradient",
            },
            {
                name: "AWS S3",
                color: "aqua-text-gradient",
            },
            {
                name: "HTML",
                color: "cyan-text-gradient",
            },
            {
                name: "CSS",
                color: "cyan-text-gradient",
            },
        ],
        image: facediary,
        source_code_link: "https://github.com/mrizwan83/FaceDiary",
        live_demo_link: "http://facediary.herokuapp.com",
    },
    {
        name: "AdventureScape",
        description:
            "A Canvas-based game inspired by Pokemon and Runescape, built with HTML Canvas and JavaScript, offering an immersive gaming experience.",
        tags: [
            {
                name: "JavaScript",
                color: "gold-text-gradient",
            },
            {
                name: "HTML",
                color: "cyan-text-gradient",
            },
            {
                name: "SCSS",
                color: "pink-text-gradient",
            },
            {
                name: "HTML Canvas",
                color: "aqua-text-gradient",
            },
            {
                name: "GSAP (GreenSock)",
                color: "blue-text-gradient",
            },
        ],
        image: adventurescape,
        source_code_link: "https://github.com/mrizwan83/adventurescape",
        live_demo_link: "https://mrizwan83.github.io/adventurescape",
    },

];

export { services, technologies, experiences, testimonials, projects };