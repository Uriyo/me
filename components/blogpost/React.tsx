"use client";
import Image from "next/image";
import { formatDate, getYouTubeEmbedUrl } from "@/utils/blogUtils";
import CodeSnippet from "@/components/codesnippet";
import { Subscribe } from "@/components/subscribe";
import AudioPlayer from "../AudioPlayer";
import { useEffect, useState } from "react";

// Mock data for the blog post
const blogPost = {
  title: "React 19: Everything You Need to Know",
  author: "Kushagra Gangwar",
  date: "2023-05-15",
  content: [
    {
      type: "text",
      content:
        "Greetings, fellow developers! Today, we embark on an exciting journey into the realm of React 19. Brace yourselves as we explore the latest advancements in web development, promising simplified processes and enhanced performance.",
    },
    {
        type: "image",
        src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*YePVzjkjsadOqzQ03wl5kA.png",
        alt: "Event Loop",
        width: 800,
        height: 400,
      },
    {
      type:"subheading",
      level:3,
      content:
            "Introducing the React Compiler:"
    },
    {
      type:"text",
      content:
            "Imagine your React code racing through the digital landscape, leaving traditional JavaScript in its wake. With React 19’s new React Compiler, your code receives a significant performance boost, ensuring lightning-fast website experiences."
    },
    {
      type:"subheading",
      level:3,
      content:
            "Actions:"
    },
    {
      type:"text",
      content:
            "Tackling form handling complexities is now a breeze with React 19’s introduction of Actions. Updating page information upon form submission becomes effortless, streamlining your development workflow."
    },
    {
      type: "subheading",
      level: 3,
      content: "Server Components:",
    },
    {
      type:"text",
      content:
            "Experience website loading speeds akin to a cheetah on roller skates with Server Components in React 19. By prepping pages on the server, load times are optimized, delivering seamless user experiences and boosting SEO performance."
    },
    {
      type:"subheading",
      level:3,
      content:
            "Asset Loading:"
    },
    {
      type:"text",
      content:
            "Bid farewell to waiting for images to load with React 19’s Asset Loading feature. By loading assets in the background, users can navigate between pages seamlessly, eliminating pesky loading screens."
    },
    {
      type: "subheading",
      level:3,
      content: "Document Metadata:",
    },
    {
      type: "text",
      content: "For SEO enthusiasts, meet your new ally — <DocumentHead>. Easily enhance your page’s SEO attributes like titles and meta tags, simplifying optimization efforts for improved search engine rankings.",
    },
    {
      type: "Web Components:",
      level:3,
      content: "○ The parent and child processes communicate through messages.",
    },
    {
      type: "text",
      content: "Flex your creative muscles effortlessly with React 19’s enhanced compatibility with Web Components. Build and customize your website components with ease, unleashing your creativity without hassle.",
    },
    {
      type: "subheading",
      level: 3,
      content: " Enhanced Hooks:",
    },
    {
      type: "text",
      content: "Hooks receive an upgrade in React 19, offering developers more control over component lifecycle and state management. Seamlessly orchestrate your components for optimal performance and functionality.",
    },
    {
      type: "subheading",
      level:3,
      content: "Concurrent Mode:",
    },
    {
      type: "text",
      content: "Introducing Concurrent Mode in React 19, where components collaborate harmoniously, prioritizing rendering updates for smoother user experiences. Enjoy improved performance even when managing multiple tasks simultaneously.",
    },
    {
      type: "subheading",
      level:3,
      content: "Suspense for Data Fetching:",
    },
    {
      type: "text",
      content: "Bid farewell to loading spinners! React 19 introduces Suspense for data fetching, simplifying asynchronous data handling and UI transitions with elegance and efficiency.",
    },
    {
      type: "subheading",
      level:3,
      content: "Improved Developer Tools:",
    },
    {
      type: "text",
      content: "Gain deeper insights into your application’s performance and structure with React 19’s enhanced Developer Tools. Debugging becomes more intuitive and efficient, empowering developers to build with confidence.",
    },
    {
      type: "subheading",
      level:3,
      content:
        "Upgrading to React 19:",
    },
    {
      type: "text",
      content:
        "Transitioning to React 19 is a straightforward process. Take inventory of your app, upgrade gradually, leverage code mods, embrace Strict Mode, and conduct thorough testing to ensure a seamless transition.",
    },
    {
      type: "text",
      content: "Conclusion: In summary, React 19 revolutionizes web development with its array of enhancements, from performance optimizations to simplified workflows. Dive into React 19 today and witness the magic unfold in your projects!",
    },
    
    // {
    //   type: "video",
    //   url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
    // },
    
  ],
};






export default function React() {
    const [isClient, setIsClient] = useState(false);
    
      useEffect(() => {
        setIsClient(true);
        console.log("Component Mounted");
      }, []);
  return (
    <div
      className={`font-futuraBook   min-h-screen font- bg-black mt-36 text-gray-100`}
    >
      {/* Main content */}
      
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{blogPost.title}</h2>
          <div className="text-gray-400 mb-8">
            <span>{blogPost.author}</span> |{" "}
            <span>{formatDate(blogPost.date)}</span>
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
                    {item.content.split("**").map((part, i) =>
                      i % 2 === 0 ? (
                        part
                      ) : (
                        <strong key={i} className="font-extrabold">
                          {part}
                        </strong>
                      )
                    )}
                  </p>
                ) : null;
              case "heading":
                return (
                  <h1
                    key={index}
                    className={`text-${
                      item.level === 1 ? "3xl" : "2xl"
                    } font-bold mb-4`}
                  >
                    {item.content}
                  </h1>
                );
              case "subheading":
                return (
                  <h3 key={index} className={`text-xl font-semibold mb-4`}>
                    {item.content}
                  </h3>
                );
              case "image":
                return (
                  <div key={index} className="mb-6">
                    <Image
                      src={item.src || ""}
                      alt={item.alt || ""}
                      width={item.width}
                      height={item.height}
                      className="rounded-lg"
                    />
                  </div>
                );
              default:
                return null;
            }
          })}
          <Subscribe />
        </article>
        <div className="mt-10 mx-auto flex justify-center">
          ****************
        </div>
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
