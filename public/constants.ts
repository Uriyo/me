//NAV ICONS
import {
  Earth,
  Camera,
  FolderGit2,
  FileText,
  Lightbulb,
  Mail,
} from "lucide-react";

// PROJECT THUMBNAIL
// import NatoursImg from "@/public/images/Natours.png";
// import EatsyImg from "@/public/images/Eatsy.png";
// import notesplayImg from "@/public/images/NotesPlay.png";
// import cointrackerImg from "@/public/images/cointTracker.png";
// import spendwiseImg from "@/public/images/spendwise hero (1).png";
// import CookingImg from "@/public/images/Cooking.png";
// import utech from "@/public/images/utech.png";

// BLOG THUMBNAIL
import mongo from "@/public/images/mongoDB.webp";
import kube from "@/public/images/kube.webp";
import aws from "@/public/images/aws (1).png";
import reactjs from "@/public/images/reactJS.webp";
import thread from "@/public/images/thread.webp";
import Cors from "@/public/images/CORS.webp";
import fiber from "@/public/images/fiber.webp";

//MUSE THUMBNAIL
import devopcentrum from "@/public/images/devopscentrum.png";
import abm from "@/public/images/abm.png";

import img1 from "./images/img1.jpg"
import img2 from "./images/img2.jpg"
import img3 from "./images/img3.jpg"
import img4 from "./images/img4.jpg"

// export const img1 = Img1;
// export const img2 = Img2;
// export const img3 = Img3;
// export const img4 = Img4;
// export const img5 = Img5;
// export const img6 = Img6;
// export const img7 = Img7;

// TYPE DEFINITIONS
export interface Project {
  title: string;
  description: string;
  detailedDescription?: string[];
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Blog {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  demo: string;
}

export interface Muse {
  imageURL: string;
  blurDataURL: string;
  space: string;
  des: string;
}

export interface NavItem {
  path: string;
  name: string;
  icon: any;
}

//PROJECTS DATA
export const projects = [
  {
    title: "Prepzo AI",
    description:
      "Prepzo AI is a platform that helps you prepare for your interviews or anythin related to career be it resume building, linkedin profile building, etc.",
    detailedDescription: [
      "Built and deployed an AI Career Coach platform offering resume review, mock interviews, and career tools — acquired 160+ early user signups via organic outreach.",
      "Designed and integrated five modular LLM-based flows, reducing average query resolution time by 40%.",
      "Deployed infrastructure with CI/CD pipelines on AWS, cutting manual release time by 80%.",
      "Integrated Pinecone for vector semantic search and Livekit for real-time interview simulations, enhancing user experience and retention.",
      "Achieved 97/100 Lighthouse Performance Score with First Contentful Paint at 0.3s and Total Blocking Time of 40ms through aggressive SSR, asset optimization, and caching."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1749316466/Screenshot_2025-06-07_224133_dyeun6.png',
    tags: ["Next.js", "TypeScript", "PostgreSQL", "AWS SDK", "OpenAI", "LLM"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.prepzo.ai/",
  },
  {
    title: "ABM Technologies",
    description:
      "Developed the ABM Technologies website, showcasing the company's expertise in product development, LMS building, tech consulting, and generative AI solutions.",
    detailedDescription: [
      "Built a comprehensive corporate website showcasing ABM Technologies' expertise across multiple domains.",
      "Implemented responsive design ensuring optimal viewing experience across all devices and screen sizes.",
      "Created interactive sections highlighting product development, LMS solutions, and AI consulting services.",
      "Optimized for SEO and performance with fast loading times and smooth navigation.",
      "Integrated modern UI components with clean, professional aesthetics matching corporate branding."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768823/folioassets/abm_cf0akv.png',
    tags: ["Next.js", "TypeScript", "TailwindCSS"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.abmtechnologies.us/",
  },
  {
    title: "Tagtaste",
    description:
      "Tagtaste is a platform that allows users to get various insurance policies.",
    detailedDescription: [
      "Developed a modern insurance platform providing comprehensive policy comparison and purchase options.",
      "Implemented intuitive user interface for easy navigation through various insurance products.",
      "Integrated Google Analytics for detailed user behavior tracking and conversion optimization.",
      "Built responsive design ensuring seamless experience across desktop and mobile devices.",
      "Created streamlined application process reducing user drop-off rates by 35%."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1753376176/folioassets/tagtaste_dim0kv.png',
    tags: ["React", "TailwindCSS", "TypeScript", "Google Analytics"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.tagtaste.com/",
  },
  {
    title: "Ombrellainsure",
    description:
      "Ombrella Insure is a platform that allows users to get various insurance policies.",
    detailedDescription: [
      "Built a full-stack insurance platform with comprehensive backend infrastructure on AWS.",
      "Developed secure user authentication and policy management system using PostgreSQL.",
      "Implemented real-time quote generation and policy comparison features.",
      "Created admin dashboard for policy management and user analytics.",
      "Deployed scalable architecture handling high traffic loads with 99.9% uptime."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1753375697/folioassets/Screenshot_2025-07-24_112242_h4k0fg.png',
    tags: ["React", "TailwindCSS", "NodeJS", "TypeScript", "PostgreSQL", "AWS"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.ombrellainsure.com/",
  },
  {
    title: "OpenElephant",
    description:
      "Open Elephant LMS is a cloud-based employee training platform built with Open edX, Docker, and hosted on AWS. It enables efficient training and progress tracking, helping organizations optimize workforce development.",
    detailedDescription: [
      "Architected and deployed a scalable Learning Management System using Open edX framework.",
      "Containerized application with Docker for consistent deployment across environments.",
      "Implemented comprehensive course management, user tracking, and progress analytics.",
      "Deployed on AWS with auto-scaling capabilities to handle variable user loads.",
      "Created custom integrations for seamless workforce development and training optimization."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737028695/folioassets/openelephant_ulf9im.png',
    tags: ["OpenEdx", "Django", "Docker"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://openelephant.com/",
  },
  {
    title: "SpendWise",
    description:
      "Developed a user-friendly expense tracker app that enables individuals to monitor spending, manage budgets, and handle group expenses effortlessly.",
    detailedDescription: [
      "Built comprehensive expense tracking application with intuitive user interface and smooth user experience.",
      "Integrated OpenAI for intelligent expense categorization and financial insights generation.",
      "Implemented Clerk authentication for secure user management and data protection.",
      "Created group expense management features for shared budgets and bill splitting.",
      "Developed real-time budget tracking with visual charts and spending pattern analysis."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768822/folioassets/spendwise_hero_1_l2njym.png',
    tags: ["Next.js","Tailwind CSS", "OpenAI", "Clerk"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://spend-wise-henna.vercel.app/",
  },
  // {
  //   title: "uTeach",
  //   description:
  //     "Developed a highly responsive landing page, showcasing the company's various features.",
  //   image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768823/folioassets/utech_w4k1r0.png',
  //   tags: ["Next.js","Tailwind CSS"],
  //   github: "https://github.com/Uriyo/spendWise",
  //   demo: "https://utech-orcin.vercel.app/",
  // },
  {
    title: "CoinTracker",
    description:
      "Developed an application that provides users with the latest cryptocurrency news, real-time price updates, and trend analysis through interactive charts, enabling informed decision-making in the dynamic crypto market.",
    detailedDescription: [
      "Created comprehensive cryptocurrency tracking platform with real-time market data integration.",
      "Implemented Redux for efficient state management and React Query for optimized data fetching.",
      "Built interactive charts using ChartJS for detailed price analysis and trend visualization.",
      "Integrated cryptocurrency news API for latest market updates and sentiment analysis.",
      "Developed responsive design with TailwindCSS ensuring optimal user experience across devices."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768820/folioassets/cointTracker_afpptl.png',
    tags: ["React", "Redux", "React Querry", "ChartJS", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://cointracker-44f16.web.app/",
  },
  // {
  //   title: "Eatsy",
  //   description:
  //     "Developed a food ordering website UI that streamlines online meal purchases and user experience.",
  //   image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768821/folioassets/Eatsy_r9w8yk.png',
  //   tags: ["NodeJS", "React", "TailwindCSS", "TypeScript", "Stripe", "MongoDB"],
  //   github: "https://github.com/yourusername/project1",
  //   demo: "https://eatsy-frontend.onrender.com/",
  // },
  {
    title: "NotesPlay",
    description:
      "A web application that allow user to take notes from youtube video and download them.",
    detailedDescription: [
      "Developed innovative note-taking platform extracting content from YouTube videos using advanced AI.",
      "Implemented TypeScript for type-safe development and improved code maintainability.",
      "Integrated Generative AI for intelligent content summarization and note organization.",
      "Created seamless user workflow from video input to downloadable, formatted notes.",
      "Built responsive interface with TailwindCSS ensuring optimal user experience across devices."
    ],
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737055034/folioassets/notesplay2_sl0hij.png',
    tags: ["Next.js", "TypeScript", "GenAI", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://notesplay-cve5.vercel.app/",
  }
  // Add more projects here
];

//BLOG DATA
export const blogs = [
  {
    title: "Vercel Ship 2025",
    description:
      "Vercel Ship is a new way to deploy your website. It is a platform that allows you to deploy your website without the need for a server.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*0PuSsGqzIbXRtXKwl69R-g.avif",
    tags: ["Vercel", "AI", "Cloud"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://medium.com/@kgang6434/vercel-ship-2025-vercel-is-now-turned-into-the-ai-cloud-eeb716eb02df",
  },
  {
    title: "CI/CD with goCD",
    description:
      "CI/CD is a crucial part of modern software development. It helps to automate the build, test, and deployment of software.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*wnbpbKLxEmBHwBFYnQJLpg.png",
    tags: ["CI/CD", "goCD", "Automation"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://medium.com/@kgang6434/ci-cd-with-gocd-4710d5bb75d1",
  },
  {
    title: "Database Replication and Partitioning",
    description:
      "Database Replication and Partitioning are two important concepts in database management.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*Jh8xgI49k8FKTepTIcYjGA.avif",
    tags: ["Database", "Replication", "Partitioning"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://medium.com/@kgang6434/database-replication-and-partitioning-4710d5bb75d1",
  },
  {
    title: "Hyperthreading worth it?",
    description:
      "Hyperthreading is a feature that allows a single CPU core to simulate multiple threads, effectively doubling the number of available threads. This can lead to improved performance in certain applications, particularly those that are CPU-bound.",
    image:
      "https://miro.medium.com/v2/resize:fit:1100/format:webp/1*BBrlBnWl0xWSOnS9IZHxlA.png",
    tags: ["Threads", "NodeJS", "Multithreading"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://medium.com/@kgang6434/hyperthreading-worth-it-11271f255176",
  },
  {
    title: "Thread in NodeJs",
    description:
      "JavaScript is an “asynchronous single-threaded” programming language.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*e6RD9x4ycH5m8_IYSv3Y6Q.png",
    tags: ["Threads", "NodeJS", "Multithreading"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.kushagragangwar.tech/blog/thread-nodejs",
  },
  {
    title: "React 19 ",
    description:
      "Greetings, fellow developers! Today, we embark on an exciting journey into the realm of React 19.",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YePVzjkjsadOqzQ03wl5kA.png",
    tags: ["React", "Frontend Dev"],
    github: "https://github.com/yourusername/project1",
    demo: "https://www.kushagragangwar.tech/blog/react19",
  },
  {
    title: "AWS cloud and its benefits",
    description:
      " Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon.",
    image: aws,
    tags: ["AWS", "Cloud"],
    github: "https://github.com/yourusername/project1",
    demo: "https://www.kushagragangwar.tech/blog/leveraging-aws",
  },
  {
    title: "Fiber Dynamics",
    description:
      "React Fiber, a cornerstone of React's evolution, introduces a groundbreaking approach to handling rendering tasks efficiently. ",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Tdv-AyrlsM0eE8ikanQK5Q.jpeg",
    tags: ["Fiber", "React", "Re-Rendering"],
    github: "https://github.com/yourusername/project1",
    demo: "https://www.kushagragangwar.tech/blog/fiber-dynamics",
  },
  {
    title: "CORS Unchanined",
    description:
      "Cross-Origin Resource Sharing (CORS) is a browser security feature that permits servers to specify which domains can access their resources. ",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*5c_emW3v-j5Hhrajb-pxlw.png",
    tags: ["CORS", "Preflight Request", "CSRF"],
    github: "https://github.com/yourusername/project1",
    demo: "https://www.kushagragangwar.tech/blog/cors-unchained",
  },
];

//MUSES IMAGES


export const muses = [
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img11_k6yaas.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307493/folioassets/img11_k6yaas.jpg',
    space: 'col-span-2',
    des: 'Shimla',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307513/folioassets/image5_bh7ub6.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307513/folioassets/image5_bh7ub6.jpg',
    space: 'col-span-1',
    des: 'BLR',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307494/folioassets/image6_nidc3p.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307494/folioassets/image6_nidc3p.jpg',
    space: 'col-span-1',
    des: 'IN',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307535/folioassets/image3_cqzb8p.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307535/folioassets/image3_cqzb8p.jpg',
    space: 'col-span-2',
    des: 'Sikkim',
  },
  
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307535/folioassets/image1_p3dob9.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307535/folioassets/image1_p3dob9.jpg',
    space: 'col-span-2',
    des: 'Lachung',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307514/folioassets/image7_nhtfs9.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307514/folioassets/image7_nhtfs9.jpg',
    space: 'col-span-1',
    des: 'IN',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307497/folioassets/img9_jvn59s.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307497/folioassets/img9_jvn59s.jpg',
    space: 'col-span-2',
    des: 'Sikkim',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307492/folioassets/image4_ioidqv.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307492/folioassets/image4_ioidqv.jpg',
    space: 'col-span-1',
    des: 'TN',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307495/folioassets/img8_tfzvup.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307495/folioassets/img8_tfzvup.jpg',
    space: 'col-span-1',
    des: 'Tiger Hills',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img11_k6yaas.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307493/folioassets/img11_k6yaas.jpg',
    space: 'col-span-2',
    des: 'Lachung',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307499/folioassets/img10_iibu3s.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307499/folioassets/img10_iibu3s.jpg',
    space: 'col-span-2',
    des: 'Gangtok',
  },
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img12_sxrtx7.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307493/folioassets/img12_sxrtx7.jpg',
    space: 'col-span-1',
    des: 'Shimla',
  },
];



//NAV Items
export const navItems = [
  {
    path: "/",
    name: "Home",
    icon: Earth,
  },
  {
    path: "/projects",
    name: "Projects",
    icon: FolderGit2,
  },
  {
    path: "/resume",
    name: "Resume",
    icon: FileText,
  },
  {
    path: "/blog",
    name: "TechToks",
    icon:  Lightbulb,
  },
  {
    path: "/muse",
    name: "Photory",
    icon: Camera,
  },
  {
    path: "/contact",
    name: "Contact",
    icon: Mail,
  },
];
