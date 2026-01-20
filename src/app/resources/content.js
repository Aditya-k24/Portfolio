import { InlineCode } from "@/once-ui/components";


const person = {
  firstName: "Aditya",
  lastName: "Kulkarni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graduate Research Assistant & Software Developer",
  avatar: "/images/avatar.jpg",
  location: "America/New_York", 
  languages: ["English", "Hindi", "Kannada", "Marathi", "Gujarati"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about artificial intelligence, software engineering, and share insights
      on innovative tech projects.
    </>
  ),
};

const social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Aditya-k24",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aditya-kulkarni-355b81217/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:adityakulkarnius@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Graduate Research Assistant & Software Developer</>,
  subline: (
    <>
      I'm Aditya, a Graduate Research Assistant at North Carolina State University, passionate about 
      building AI-driven solutions and genomic data platforms. With experience in ML workflows, 
      cloud deployments, and full-stack development, I'm dedicated to solving complex problems 
      through innovative technology.

    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, // Assuming you don't need a calendar link, change to true and update link if needed
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aditya is a Graduate Research Assistant at North Carolina State University, passionate about 
        building AI-driven solutions and genomic data platforms. With extensive experience in ML workflows, 
        cloud deployments, and full-stack development, he has successfully delivered projects that cut costs 
        by 50% and improved processing times by up to 60%. Driven by innovation and technical excellence, 
        he constantly seeks to solve complex problems through cutting-edge technology.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        "company": "NC State University",
        "timeframe": "Apr 2025 – Present",
        "role": "Graduate Research Assistant",
        "achievements": [
          <>
            Designed a cloud-based genomic data platform with JBrowse 2, enabling interactive exploration of large-scale strawberry and grape datasets for over 10 researchers.
          </>,
          <>
            Collaborated on ML architecture design, applying hyperparameter tuning and time-series analysis, improving model accuracy by 12%.
          </>,
        ],
        "images": [
          {
            "src": "/images/experience/company1.jpg",
            "alt": "NC State University",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        "company": "9Root AI",
        "timeframe": "May 2025 – Jan 2026",
        "role": "Product Engineer Intern",
        "achievements": [
          <>
            Orchestrated end-to-end AI workflows with Temporal to automate intake, enrichment, and resolution for top U.S. insurers, cutting costs by 50% and claim-cycle time by 60% across three high-volume lines.
          </>,
          <>
            Deployed ML workflows with CI/CD pipelines, and containerized services on Docker + Kubernetes, improving release speed by 40%.
          </>,
        ],
        "images": [
          {
            "src": "/images/experience/company2.jpeg",
            "alt": "9Root AI",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        "company": "Mphasis (HP Company)",
        "timeframe": "Jun 2024 – Aug 2024",
        "role": "Software Developer Intern",
        "achievements": [
          <>
            Built 5+ AI-driven workflows including a health claim automation tool using OCR, NLP, and ML; improved claim accuracy by 25%.
          </>,
          <>
            Automated deployments on AWS & GCP, integrated monitoring dashboards with Grafana, and supported model validation/red-teaming to enhance reliability.
          </>,
        ],
        "images": [
          {
            "src": "/images/experience/company1.jpg",
            "alt": "Mphasis",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        "company": "Capgemini",
        "timeframe": "Jun 2023 – Aug 2023",
        "role": "AI/ML Intern",
        "achievements": [
          <>
            Led end-to-end SDLC for an ML-based solution automating support ticket analysis, reducing processing time by 15%.
          </>,
          <>
            Built ML pipelines with Hadoop + Spark and integrated Kafka streaming, reducing ticket-processing latency by 20% for real-time support workflows.
          </>,
        ],
        "images": [
          {
            "src": "/images/experience/company2.jpeg",
            "alt": "Capgemini",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        company: "Digital Ipsum and Vidyarthi Mitra",
        timeframe: "Apr 2022 – Sept 2022",
        role: "Software Developer Intern",
        achievements: [
          <>Overhauled website using the MERN stack and mobile-first design, improving load speeds by 30% and usability on 12+ device types.</>,
          <>
            Launched a React+Node.js site via Vercel for a Microsoft-funded NGO; served 500+ users, boosting engagement by 40% in 3 months.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "North Carolina State University",
        description: (
          <>
            - <b>Master of Science in Computer Science</b> (Aug 2024 – May 2026).  <br/>
            - Courses: <b>Artificial Intelligence</b>, <b>Operating Systems</b>, <b>Data Science</b>, <b>Object Oriented Development</b>, <b>Software Engineering</b>, <b>Algorithms</b>.  <br/>
          </>
        ),
      },
      {
        name: "Mumbai University",
        description: (
          <>
            - <b>Bachelor of Technology in Computer Science</b>; <b>CGPA: 9.32/10</b> (Oct 2020 – Jul 2024).  <br/>
            - Courses: <b>Data Warehousing</b>, <b>Big Data Infra</b>, <b>DS & Algorithm</b>, <b>OS</b>, <b>Machine Learning</b>, <b>Software Engineering</b>, <b>Blockchain</b>.  <br/>
          </>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "AI/ML & Data Science",
        description: (
          <>
            - Proficient in <b>GPT-4</b>, <b>Claude</b>, <b>Gemini</b>, <b>OpenAI API</b>, <b>LangChain</b>, <b>MCP</b>, <b>Hugging Face</b>.  <br/>
            - Expertise in <b>TensorFlow</b>, <b>PyTorch</b>, <b>Scikit-learn</b>, <b>Pandas</b>, <b>NumPy</b> for ML model development.   <br/>
            - Experience with <b>Vector DB</b>, <b>Prompt Engineering</b>, and <b>Distributed Systems</b>.  
          </>
        ),
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            - Skilled in <b>MERN stack</b>, <b>Node.js</b>, <b>Express.js</b>, <b>React</b>, <b>Tailwind</b>.   <br/>
            - Database expertise: <b>MongoDB</b>, <b>MySQL</b>, <b>SQL</b>.   <br/>
            - Languages: <b>Python</b>, <b>TypeScript</b>, <b>Java</b>, <b>JavaScript</b>, <b>R</b>, <b>C</b>, <b>HTML/CSS</b>, <b>Ruby</b>.  
          </>
        ),
      },
      {
        title: "Systems & DevOps",
        description: (
          <>
            - Strong knowledge of <b>Temporal</b>, <b>Fly.io</b>, <b>Docker</b>, <b>Kubernetes</b>.   <br/>
            - Experience with <b>CI/CD pipelines</b>, <b>Git</b>, <b>Agile</b> methodologies.   <br/>
            - Cloud platforms: <b>AWS</b>, <b>GCP</b> with monitoring tools like <b>Grafana</b>.  
          </>
        ),
      },
    ],
    
    
  },
};


const blog = {
  label: "Projects",
  title: "Unlocking innovation...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/team_capgemini.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/be_proj.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/competition.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/nc_state.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/user_needs.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/gdsce.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/work.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/indo_american.jpg",
      alt: "image",
      orientation: "vertical",
    },
   
    {
      src: "/images/gallery/hackathon.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    
    {
      src: "/images/gallery/fav.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/capgemini.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/music.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/careerplusai.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

const additionalExperience = {
  display: true,
  title: "Additional Experience and Awards",
  experiences: [
    {
      title: "Google Developer Student Club Leadership",
      description: (
        <>
          <b>Lead at Google Developers Student Club:</b> Led 4+ tech events (hackathons, conferences) reaching 500+ students.  <br/>
          Organized workshops and events focused on spreading awareness about the latest technologies, providing hands-on experiences to participants and fostering a community passionate about innovation and growth.
        </>
      ),
    },
    {
      title: "Hackathon Achievements",
      description: (
        <>
          <b>Winner of National Hackathons:</b> Won or ranked in Top 10 in 6+ national hackathons, developing 3 complete MVPs within 48-hour builds, showcasing rapid prototyping and collaboration.  <br/>
          Demonstrated ability to deliver high-quality solutions under time pressure while collaborating effectively with diverse teams.
        </>
      ),
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, additionalExperience };
