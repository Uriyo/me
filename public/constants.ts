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


//PROJECTS DATA
export const projects = [
  {
    title: "ABM Technologies",
    description:
      "Developed the ABM Technologies website, showcasing the company's expertise in product development, LMS building, tech consulting, and generative AI solutions.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768823/folioassets/abm_cf0akv.png',
    tags: ["Next.js", "TypeScript", "Sass"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.abmtechnologies.us/",
  },
  {
    title: "DevOpsCentrum",
    description:
      "An end-to-end DevOps and infrastructure management platform tailored for startups and SME businesses, enabling them to focus solely on coding without the concerns of managing infrastructure, development, and production support for their products.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768819/folioassets/devopscentrum_abcwtd.png',
    tags: ["NodeJS", "TypeScript", "PostgreSQL", "AWS SDK", "FusionAuth"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://devopscentrum.com/",
  },
  // {
  //   title: "OpenElephant",
  //   description:
  //     "Open Elephant LMS is a cloud-based employee training platform built with Open edX, Docker, and hosted on AWS. It enables efficient training and progress tracking, helping organizations optimize workforce development.",
  //   image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737028695/folioassets/openelephant_ulf9im.png',
  //   tags: ["OpenEdx", "Django", "Docker"],
  //   github: "https://github.com/Uriyo/spendWise",
  //   demo: "https://openelephant.com/",
  // },
  {
    title: "SpendWise",
    description:
      "Developed a user-friendly expense tracker app that enables individuals to monitor spending, manage budgets, and handle group expenses effortlessly.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768822/folioassets/spendwise_hero_1_l2njym.png',
    tags: ["Next.js","Tailwind CSS", "OpenAI", "Clerk"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://spend-wise-henna.vercel.app/",
  },
  {
    title: "uTeach",
    description:
      "Developed a highly responsive landing page, showcasing the company's various features.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768823/folioassets/utech_w4k1r0.png',
    tags: ["Next.js","Tailwind CSS"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://utech-orcin.vercel.app/",
  },
  {
    title: "CoinTracker",
    description:
      "Developed an application that provides users with the latest cryptocurrency news, real-time price updates, and trend analysis through interactive charts, enabling informed decision-making in the dynamic crypto market.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768820/folioassets/cointTracker_afpptl.png',
    tags: ["React", "Redux", "React Querry", "ChartJS", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://cointracker-44f16.web.app/",
  },
  {
    title: "Eatsy",
    description:
      "Developed a food ordering website UI that streamlines online meal purchases and user experience.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768821/folioassets/Eatsy_r9w8yk.png',
    tags: ["NodeJS", "React", "TailwindCSS", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://eatsy-frontend.onrender.com/",
  },
  {
    title: "NotesPlay",
    description:
      "A web application that allow user to take notes from youtube video and download them.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737055034/folioassets/notesplay2_sl0hij.png',
    tags: ["Next.js", "TypeScript", "GenAI", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://notesplay-cve5.vercel.app/",
  },
  {
    title: "CookingBlog",
    description:
      "A web application for sharing receipes and cuisiens.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768975/folioassets/Cooking_ds8hok.png',
    tags: ["Express", "EJS", "Javascript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://cookingblog-9nxj.onrender.com/",
  },
  {
    title: "Natours",
    description:
      "A full-stack web application for sharing tours and booking tours.",
    image: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1736768820/folioassets/Natours_zhoj4o.png',
    tags: ["NodeJS", "Express", "MongoDB", "Stripe", "PUG"],
    github: "https://github.com/yourusername/project1",
    demo: "https://natours-dnph.onrender.com/",
  },
  // Add more projects here
];

//BLOG DATA
export const blogs = [
  {
    title: "Thread in NodeJs",
    description:
      "JavaScript is an “asynchronous single-threaded” programming language.",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*e6RD9x4ycH5m8_IYSv3Y6Q.png",
    tags: ["Threads", "NodeJS", "Multithreading"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://medium.com/@kgang6434/threads-in-nodejs-29fad10bee3a",
  },
  {
    title: "Kubernetes Architecture",
    description:
      "A full-stack web application built with Next.js and PostgreSQL",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*d4Ff4GxOh_ElNcTinQ_7tw.png",
    tags: ["Kubernetes", "DevOps"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/kubernetes-s-architecture-5538b141f4c7",
  },
  {
    title: "React 19 ",
    description:
      "Greetings, fellow developers! Today, we embark on an exciting journey into the realm of React 19.",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YePVzjkjsadOqzQ03wl5kA.png",
    tags: ["React", "Frontend Dev"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/react-19-everything-you-need-to-know-48c3c5c38ec3",
  },
  {
    title: "AWS cloud and its benefits",
    description:
      " Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon.",
    image: aws,
    tags: ["AWS", "Cloud"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/leveraging-the-power-of-aws-cloud-companies-and-their-benefits-bb8d29fd5e86",
  },
  {
    title: "Fiber Dynamics",
    description:
      "React Fiber, a cornerstone of React's evolution, introduces a groundbreaking approach to handling rendering tasks efficiently. ",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Tdv-AyrlsM0eE8ikanQK5Q.jpeg",
    tags: ["Fiber", "React", "Re-Rendering"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/react-fiber-7be9e8fdebf5",
  },
  {
    title: "Aggregating MongoDB Collections",
    description:
      "Aggregation in MongoDB is a powerful tool for processing large volumes of documents in a collection.",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*ty8m8Y3dzgD6P5Xc17gbYw.jpeg",
    tags: ["MongoDB", "Database", "NoSQL"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/aggregating-mongodb-collections-d4a78fefa21b",
  },
  {
    title: "CORS Unchanined",
    description:
      "Cross-Origin Resource Sharing (CORS) is a browser security feature that permits servers to specify which domains can access their resources. ",
    image:
      "https://miro.medium.com/v2/resize:fit:828/format:webp/1*5c_emW3v-j5Hhrajb-pxlw.png",
    tags: ["CORS", "Preflight Request", "CSRF"],
    github: "https://github.com/yourusername/project1",
    demo: "https://medium.com/@kgang6434/cors-unchained-strengthening-web-security-with-preflight-requests-52e89caa0ac3",
  },
];

//MUSES IMAGES


export const muses = [
  {
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307535/folioassets/image1_p3dob9.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307535/folioassets/image1_p3dob9.jpg',
    space: 'col-span-2',
    des: 'Lachung',
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
    imageURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/v1737307493/folioassets/img11_k6yaas.jpg',
    blurDataURL: 'https://res.cloudinary.com/doyqpfgiq/image/upload/e_blur:2000,q_1/v1737307493/folioassets/img11_k6yaas.jpg',
    space: 'col-span-2',
    des: 'Shimla',
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
];
