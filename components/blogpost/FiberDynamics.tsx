"use client";
import Image from "next/image";
import { formatDate, getYouTubeEmbedUrl } from "@/utils/blogUtils";
import { Subscribe } from "@/components/subscribe";
import { useEffect, useState } from "react";
import AudioPlayer from "../AudioPlayer";

// Mock data for the blog post
const blogPost = {
  title: "Fiber Dynamics: Accelerating the Speed of Rendering",
  author: "Kushagra Gangwar",
  date: "2023-05-15",
  content: [
    {
      type: "text",
      content:
        "React Fiber, a cornerstone of React’s evolution, introduces a groundbreaking approach to handling rendering tasks efficiently. Delving into its technical underpinnings unveils a sophisticated system designed to optimize performance through asynchronous rendering and prioritized scheduling.",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NbXbj-SzKdQ1qtnCKt-Iyg.jpeg",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type: "subheading",
      level: 3,
      content: "Breaking Down Work Units with Fibers:",
    },
    {
      type: "text",
      content:
        "React Fiber revolutionizes rendering at its core by decomposing tasks into manageable units called fibers. Think of fibers as lightweight threads that represent individual units of work within the React application. Each fiber encapsulates the work associated with a specific component, enabling fine-grained control over rendering tasks.",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Tdv-AyrlsM0eE8ikanQK5Q.jpeg",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content:
        "For example, consider a complex UI component hierarchy with multiple nested components. React Fiber breaks down the rendering process into discrete fibers, each responsible for reconciling a component subtree. By segmenting the work into smaller units, React can prioritize, pause, and resume rendering tasks dynamically, ensuring smoother user experiences.",
    },
    {
      type: "subheading",
      level: 3,
      content: "Reimagining Components as Fiber Trees:",
    },
    {
      type: "text",
      content:
        "To grasp the essence of fibers, it’s crucial to reframe the traditional view of React components as functions of data. In the context of React Fiber, components are akin to functions that transform props and states into UI elements. However, React Fiber introduces a paradigm shift by treating components as nodes within a fiber tree, rather than relying solely on the call stack.",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*CfooGt2IJ0_sd-sVoLn_7g.jpeg",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content:
        "Consider a scenario where a React component initiates a state update, triggering a re-rendering of the component subtree. React Fiber constructs a fiber tree representing the component hierarchy, with each fiber-containing metadata about its associated component and rendering state. This hierarchical representation enables React to prioritize rendering tasks efficiently, optimizing performance based on workload demands.",
    },
    {
      type: "subheading",
      level: 3,
      content: "Introducing the Fiber Data Structure:",
    },
    {
      type: "text",
      content:
        "At the heart of React Fiber lies the fiber data structure, a meticulously designed entity that encapsulates essential information about rendering tasks. Let’s examine some key attributes of the fiber data structure and their significance:",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*leA0F-ZTHC1PNxLkcyYy_w.jpeg",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content:
        "**1. Type and Key**: The type field identifies the component type, whether it’s a function or class component. Additionally, the key serves as a unique identifier for reconciliation, enabling React to determine whether a component can be reused or requires re-rendering.",
    },
    {
      type: "text",
      level: 3,
      content:
        "**2. Child and Sibling Pointers**: Child and sibling pointers establish the hierarchical relationships between fibers, forming a tree-like structure. Child fibers represent the output of a component’s render method, while sibling fibers extend the component hierarchy horizontally.",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Rw_cFpuuPVz-lo7s2HXRoQ.jpeg",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content:
        "For instance, imagine a React component rendering a list of items, each represented by a child component. The child pointers within the parent fiber establish connections to the child fibers, forming a hierarchical structure. Similarly, sibling pointers link adjacent components within the same level of the component hierarchy, facilitating traversal and reconciliation.",
    },
    {
      type: "subheading",
      level: 3,
      content: " Customizing the Stack with Fiber Reimplementation:",
    },
    {
      type: "text",
      content:
        "React Fiber’s innovative approach extends beyond traditional call stack management, offering a reimagined stack tailored for asynchronous rendering and prioritized scheduling. Unlike the synchronous nature of the call stack, React Fiber introduces a virtual stack composed of fibers, each representing a unit of work.",
    },
    {
      type: "text",
      content:
        "By reimplementing the stack with fibers, React gains unprecedented flexibility in managing rendering tasks. Developers can prioritize high-priority updates, pause and resume rendering dynamically, and even abort unnecessary work if superseded by more recent updates. This fine-grained control over rendering tasks enables React to optimize performance, delivering smoother animations and improved responsiveness.",
    },
    {
      type: "text",
      content: "Refer the following for more information:",
    },
    
    {
      type: "link",
      content: "YouTube video (React Team) |",
      href: "https://www.youtube.com/watch?si=3vdq7-N68KqIw23b&v=ZCuYPiUIONs&feature=youtu.be",
    },
    {
      type: "link",
      content: " GitHub repo (by acdlite)",
      href: "https://github.com/acdlite/react-fiber-architecture",
    },
  ],
};

export default function FiberDynamics() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
      console.log("Component Mounted");
    }, []);
    return (
    <div className={`font-futuraBook   min-h-screen font- bg-black mt-36 text-gray-100`}>
      {/* Main content */}
     
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{blogPost.title}</h2>
          <div className="text-gray-400 mb-8">
            <span>{blogPost.author}</span> | <span>{formatDate(blogPost.date)}</span>
          </div>
            {isClient && (
                        <AudioPlayer src="https://res.cloudinary.com/doyqpfgiq/video/upload/v1738570612/folioassets/blogs/threads_d1htnj.mp3" />
                      )}
                      <br />
          {blogPost.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return item.content ? (
                  <p key={index} className="mb-6 text-lg leading-loose">
                    {item.content 
                      .split("**")
                      .map((part, i) =>
                        i % 2 === 0 ? (
                          part
                        ) : (
                          <strong key={i} className="font-extrabold">
                            {part}
                          </strong>
                        )
                      )}
                  </p>
                ): null;
              case "heading":
                return (
                  <h1
                    key={index}
                    className={`text-${item.level === 1 ? "3xl" : "2xl"} font-bold mb-4`}
                  >
                    {item.content}
                  </h1>
                );
              case "subheading":
                return (
                  <h3
                    key={index}
                    className={`text-xl font-semibold mb-4`}
                  >
                    {item.content}
                  </h3>
                );
              case "image":
                return (
                  <div key={index} className="mb-6">
                    <Image
                      src={item.src || ""}
                      alt={item.alt|| ""}
                      width={item.width}
                      height={item.height}
                      className="rounded-lg"
                    />
                  </div>
                );
                case "link":
                    return (
                      <a
                        key={index}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {item.content}
                      </a>
                    );
              default:
                return null;
            }
          })}
          <Subscribe/>
        </article>
        <div className="mt-10 mx-auto flex justify-center">****************</div>
      </main>

      {/* Footer */}
      <footer className="bg-black py-6 mt-12 border-t-2">
        <div className="container mx-auto px-4 text-xs text-center text-gray-600">
          © 2025 All rights reserved.
        </div>
      </footer>
    </div>
  );
}
