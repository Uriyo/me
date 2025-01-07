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
import NatoursImg from "@/public/images/Natours.png";
import EatsyImg from "@/public/images/Eatsy.png";
import notesplayImg from "@/public/images/NotesPlay.png";
import cointrackerImg from "@/public/images/cointTracker.png";
import spendwiseImg from "@/public/images/spendwise hero (1).png";
import CookingImg from "@/public/images/Cooking.png";

// BLOG THUMBNAIL
import mongo from "@/public/images/mongoDB.webp";
import kube from "@/public/images/kube.webp";
import aws from "@/public/images/aws (1).png";
import reactjs from "@/public/images/reactJS.webp";
import thread from "@/public/images/thread.webp";
import Cors from "@/public/images/CORS.webp";
import fiber from "@/public/images/fiber.webp";

//MUSE THUMBNAIL
import Img1 from "@/public/images/image1 (2).jpg";
import Img2 from "@/public/images/image2 (2).jpg";
import Img3 from "@/public/images/image3 (2).jpg";
import Img4 from "@/public/images/image7.jpg";
import Img5 from "@/public/images/image5.jpg";
import Img6 from "@/public/images/image4.jpg";
import Img7 from "@/public/images/image6.jpg";
import Img8 from "@/public/images/img10.jpg"
import Img9 from "@/public/images/img11.jpg"
import Img10 from "@/public/images/img12.jpg"
import Img11 from "@/public/images/img8.jpg"
import Img12 from "@/public/images/img9.jpg"
import devopcentrum from "@/public/images/devopscentrum.png";
import abm from "@/public/images/abm.png";


// export const img1 = Img1;
// export const img2 = Img2;
// export const img3 = Img3;
// export const img4 = Img4;
// export const img5 = Img5;
// export const img6 = Img6;
// export const img7 = Img7;

export const Natours: any = NatoursImg;
export const Eatsy: any = EatsyImg;
export const notesplay: any = notesplayImg;
export const cointracker: any = cointrackerImg;
export const spendwise: any = spendwiseImg;
export const Cooking: any = CookingImg;

//PROJECTS DATA
export const projects = [
  {
    title: "ABM Technologies",
    description:
      "Developed the ABM Technologies website, showcasing the company's expertise in product development, LMS building, tech consulting, and generative AI solutions.",
    image: abm,
    tags: ["Next.js", "TypeScript", "Sass"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://www.abmtechnologies.us/",
  },
  {
    title: "DevOpsCentrum",
    description:
      "An end-to-end DevOps and infrastructure management platform tailored for startups and SME businesses, enabling them to focus solely on coding without the concerns of managing infrastructure, development, and production support for their products.",
    image: devopcentrum,
    tags: ["NodeJS", "TypeScript", "PostgreSQL", "AWS SDK", "FusionAuth"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://devopscentrum.com/",
  },
  {
    title: "SpendWise",
    description:
      "Developed a user-friendly expense tracker app that enables individuals to monitor spending, manage budgets, and handle group expenses effortlessly.",
    image: spendwise,
    tags: ["Next.js","Tailwind CSS", "OpenAI", "Clerk"],
    github: "https://github.com/Uriyo/spendWise",
    demo: "https://spend-wise-henna.vercel.app/",
  },
  {
    title: "CoinTracker",
    description:
      "Developed an application that provides users with the latest cryptocurrency news, real-time price updates, and trend analysis through interactive charts, enabling informed decision-making in the dynamic crypto market.",
    image: cointracker,
    tags: ["React", "Redux", "React Querry", "ChartJS", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://cointracker-44f16.web.app/",
  },
  {
    title: "Eatsy",
    description:
      "Developed a food ordering website UI that streamlines online meal purchases and user experience",
    image: Eatsy,
    tags: ["NodeJS", "React", "TailwindCSS", "TypeScript", "Stripe", "MongoDB"],
    github: "https://github.com/yourusername/project1",
    demo: "https://eatsy-frontend.onrender.com/",
  },
  {
    title: "NotesPlay",
    description:
      "A full-stack web application built with Next.js and PostgreSQL",
    image: notesplay,
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://project1.com",
  },
  {
    title: "CookingBlog",
    description:
      "A full-stack web application built with Next.js and PostgreSQL",
    image: Cooking,
    tags: ["Express", "EJS", "Javascript", "MongoDB", "TailwindCSS"],
    github: "https://github.com/yourusername/project1",
    demo: "https://cookingblog-9nxj.onrender.com/",
  },
  {
    title: "Natours",
    description:
      "A full-stack web application built with Next.js and PostgreSQL",
    image: Natours,
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
    imageURL:Img1,
    space:'col-span-2',
    des:'Lachung'
  },
  {
    imageURL:Img5,
    space:'col-span-1',
    des:'IN'
  },
  {
    imageURL:Img6,
    space:'col-span-1',
    des:'IN'
  },
  {
    imageURL:Img3,
    space:'col-span-2',
    des:'Sikkim'
  },
  {
    imageURL:Img7,
    space:'col-span-2',
    des:'IN'
  },
  {
    imageURL:Img6,
    space:'col-span-1',
    des:'IN'
  },
  {
    imageURL:Img8,
    space:'col-span-2',
    des:'Sikkim'
  },
  {
    imageURL:Img3,
    space:'col-span-1',
    des:'Sikkim'
  },
  {
    imageURL:Img10,
    space:'col-span-1',
    des:'Shimla'
  },
  {
    imageURL:Img9,
    space:'col-span-2',
    des:'Shimla'
  },
  {
    imageURL:Img12,
    space:'col-span-2',
    des:'Darjling'
  },
  {
    imageURL:Img8,
    space:'col-span-1',
    des:'Gangtok'
  },
  {
    imageURL:Img11,
    space:'col-span-2',
    des:'Tiger Hill'
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
