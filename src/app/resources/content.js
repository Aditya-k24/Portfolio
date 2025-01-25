import { InlineCode } from "@/once-ui/components";


const person = {
  firstName: "Aditya",
  lastName: "Kulkarni",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Developer and AI Enthusiast",
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
    link: "mailto:adityakulkarni244@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software Developer and AI Enthusiast</>,
  subline: (
    <>
      I'm Aditya, a Master's student at North Carolina State University, passionate about solving 
      real-world challenges through software development and AI/ML. After hours, I enjoy pursuing 
      my hobbies and socializing with friends, striking a balance between work and play.

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
        Aditya is a passionate and enthusiastic problem solver based in North Carolina. With hands-on 
        experience across multiple domains, Aditya has found his true calling in software development, 
        data analysis, and AI/ML. Driven by curiosity and a love for learning, he constantly seeks 
        innovative solutions to real-world challenges.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        "company": "Mphasis (HP Subsidiary)",
        "timeframe": "Jun 2024 – Aug 2024",
        "role": "SDE Intern",
        "achievements": [
          <>
            Designed and implemented a health insurance claiming model using OCR, NLP, and ML for eligibility assessment and refund calculation.
          </>,
          <>
            Enhanced expertise in Generative AI by integrating advanced algorithms for document automation and text understanding.
          </>,
          <>
            Was part of the first team at the company dedicated to AI, where we developed and solved case studies that the company could later scale and develop further.
          </>
        ],
        "images": [
          {
            "src": "/images/experience/company1.jpg",
            "alt": "Company 1",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        "company": "Capgemini",
        "timeframe": "Jun 2023 – Aug 2023",
        "role": "Data Analytics Intern",
        "achievements": [
          <>
            Deployed a machine learning solution for ticket data automation, reducing processing time by 15%.
          </>,
          <>
            Developed a user-friendly jQuery interface while maintaining data confidentiality.
          </>,
          <>
            I was responsible for interacting with international clients to deploy the product onto their systems, ensuring smooth integration and addressing their needs.          </>
        ],
        "images": [
          {
            "src": "/images/experience/company2.jpeg",
            "alt": "Description of the image",
            "width": 16,
            "height": 9
          }
        ]
      },
      {
        company: "Digital Ipsum",
        timeframe: "Apr 2022 – Jun 2022",
        role: "SDE Intern",
        achievements: [
          <>Developed the company website for a start-up using the MERN stack with an intuitive, responsive UI.</>,
          <>
            Improved accessibility across 10+ device types, enhancing user experience
            significantly.
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
            - <b>Master's in Computer Science</b> (Aug 2024 – Present).  <br/>
            - Focus areas: <b>AI</b>, <b>Operating Systems</b>, <b>Automation and Data Analysis</b>, <b>Data Structures and Algorithms</b>, and <b>Software Engineering</b>.  <br/>
          </>
        ),
      },
      {
        name: "Dwarkadas J. Sanghvi College Of Engineering",
        description: (
          <>
            - <b>Bachelor of Technology in Computer Science</b>; <b>CGPA: 9.32</b> (Oct 2020 – Jul 2024).  <br/>
            - Published <b>two research papers</b> in <b>IEEE</b> and <b>Springer</b>.  <br/>
            - Key coursework: <b>AI and ML</b>, <b>Big Data</b>, and <b>Data Structures</b>.  
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
        title: "AI and Machine Learning",
        description: (
          <>
            - Proficient in <b>TensorFlow</b>, <b>Scikit-learn</b>, and <b>OpenAI API</b>.  <br/>
            - Developed AI solutions for NLP, generative AI, and document processing.   <br/>
            - Key projects include health monitoring apps and OCR-based systems.  
          </>
        ),
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            - Skilled in <b>MERN stack</b> and <b>Spring Framework</b> for web applications.   <br/>
            - Expertise in responsive UI design and user experience using <b>Figma</b>.   <br/>
            - Built scalable websites and dashboards with seamless interfaces.  
          </>
        ),
      },
      {
        title: "Systems Programming",
        description: (
          <>
            - Strong knowledge of OS concepts like memory management and process scheduling.   <br/>
            - Implemented projects like <b>Demand Paging in Xinu</b> with advanced memory allocation.   <br/>
            - Experienced in x86 assembly and debugging with <b>GDB</b>.  
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

export { person, social, newsletter, home, about, blog, work, gallery };
