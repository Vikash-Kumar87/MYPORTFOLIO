// Skills Section Logos
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logos
import webverseLogo from './assets/company_logo/WEB.png';
import agcLogo from './assets/company_logo/webdev.png';

// Education Section Logos
import bsaLogo from './assets/education_logo/cutm.png';
import bssLogo from './assets/education_logo/bss_logo.png';
import vpsLogo from './assets/education_logo/school_logo.png';

// Project Section Logos
import webverLogo from './assets/work_logo/myportfolio.png';
import githubdetLogo from './assets/work_logo/ai.png';
import csprepLogo from './assets/work_logo/github.png';
import movierecLogo from './assets/work_logo/image.png';
import taskremLogo from './assets/work_logo/todo.png';
import npmLogo from './assets/work_logo/weather.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'MySQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    desc: "Developed dynamic and scalable web applications using React JS and Tailwind CSS, handling both frontend and backend. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize performance in an agile environment.",
    skills: ["HTML", "CSS", "JavaScript", "React JS", "Node JS", "Tailwind CSS"],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Web Developer",
    desc: "Worked on innovative projects involving both frontend and backend development using HTML, CSS, JavaScript, Tailwind CSS, and ReactJS. Contributed to high-performance, responsive web applications and enhanced user experience with seamless integration.",
    skills: ["ReactJS", "JavaScript", "Tailwind CSS", "HTML", "CSS", "SQL"],
  },
];

export const education = [
  {
    id: 1,
    img: bsaLogo,
    school: "CUTM, Paralakhemundi, Odisha",
    date: "Sept 2023 - Aug 2027",
    grade: "7 CGPA",
    desc: "Currently pursuing B.Tech in Computer Science from CUTM, Paralakhemundi, Odisha.",
    degree: "Bachelor of Technology - B.Tech (Computer Science)",
  },
  {
    id: 2,
    img: bssLogo,
    school: "B.S.S. College, Supaul",
    date: "Apr 2021 - Mar 2023",
    grade: "63.8%",
    desc: "Completed Class 12 education from B.S.S. College under BSEB, with Physics, Chemistry, and Mathematics.",
    degree: "BSEB (XII) - PCM",
  },
  {
    id: 3,
    img: vpsLogo,
    school: "S.D.S.K.B. +2 High School, Hardi Chaughara, Supaul",
    date: "Apr 2019 - Mar 2021",
    grade: "75.2%",
    desc: "Completed Class 10 education from S.D.S.K.B. High School under BSEB, with Science and Computer Applications.",
    degree: "BSEB (X) - Science with Computer Application",
  },
];

export const projects = [
  {
    id: 0,
    title: "AI Chatbot App",
    description: "React-AI is an AI-powered chatbot that responds like a human. It helps with writing, coding, learning, and answering questions through natural conversation.",
    image: githubdetLogo,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
    github: "https://github.com/Vikash-Kumar87/React-Ai",
    webapp: "https://react-ai-iota.vercel.app/",
  },
  {
    id: 1,
    title: "GitHub Profile Search",
    description: "A React-based web app that lets users search any GitHub profile using a username. It displays profile details like avatar, bio, repos, followers, and more using the GitHub API. Clean, responsive UI with real-time data fetching.",
    image: csprepLogo,
    tags: ["React JS", "Node.js", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vikash-Kumar87/Github-Profile-Search-APP",
    webapp: "https://github-profile-search-app-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Image Search App",
    description: "A React-based image search app that uses an external API to fetch and display images based on user queries.",
    image: movierecLogo,
    tags: ["React JS", "API", "HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vikash-Kumar87/Image-Search-App-main",
    webapp: "https://image-search-app-main-eta.vercel.app/",
  },
  {
    id: 3,
    title: "Weather App",
    description: "An NPM-based weather app built with React and Node.js that provides accurate weather information using public APIs.",
    image: npmLogo,
    tags: ["React JS", "Node.js", "NPM", "Validation"],
    github: "https://github.com/Vikash-Kumar87/weather-App",
    webapp: "https://weather-app-sgpl.vercel.app/",
  },
  {
    id: 4,
    title: "ToDo App",
    description: "A Chrome extension for managing daily tasks. Built with JavaScript, it allows users to set reminders and stay productive.",
    image: taskremLogo,
    tags: ["JavaScript", "Chrome Extension", "HTML", "CSS"],
    github: "https://github.com/Vikash-Kumar87/Todo-App",
    webapp: "https://todo-app-ten-jet-44.vercel.app/",
  },
  {
    id: 5,
    title: "My Portfolio",
    description: "Personal portfolio website showcasing skills, experience, and projects. Built with HTML, CSS, JavaScript, and Framer Motion for smooth animations.",
    image: webverLogo,
    tags: ["HTML", "CSS", "JavaScript", "Framer Motion"],
    github: "https://github.com/codingmastr/Webverse-Digital",
    webapp: "https://webversedigital.com/",
  },
];
