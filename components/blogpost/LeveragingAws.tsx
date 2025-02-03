"use client";
import Image from "next/image";
import { formatDate, getYouTubeEmbedUrl } from "@/utils/blogUtils";
import CodeSnippet from "@/components/codesnippet";
import { Subscribe } from "@/components/subscribe";
import { useEffect, useState } from "react";
import AudioPlayer from "../AudioPlayer";

// Mock data for the blog post
const blogPost = {
  title: "Leveraging the Power of AWS Cloud: Companies and Their Benefits",
  author: "Kushagra Gangwar",
  date: "2023-05-25",
  content: [
    {
      type: "text",
      content:
        "In today’s rapidly evolving digital landscape, cloud computing has become a cornerstone of technological innovation. Among the leading players in the cloud services industry, Amazon Web Services (AWS) stands out as a frontrunner, providing a robust and versatile platform that empowers companies to transform their operations and achieve unprecedented scalability. In this blog post, we’ll delve into the realm of AWS Cloud and explore how various companies are utilizing it to reap remarkable benefits",
    },
    {
      type: "subheading",
      level: 3,
      content: "Amazon Web Services: A Brief Overview",
    },
    {
      type: "text",
      content:
        "Amazon Web Services (AWS) is a comprehensive cloud computing platform offered by Amazon. It encompasses a wide range of cloud services, including computing power, storage solutions, databases, machine learning, analytics, and more. AWS enables businesses to offload their IT infrastructure and applications to the cloud, reducing the need for on-premises hardware and maintenance costs.",
    },
    {
      type: "text",
      content: "Companies Harnessing AWS Cloud and Their Benefits:",
    },
    {
      type: "subheading",
      level: 3,
      content: "Netflix",
    },
    {
      type: "text",
      content:
        "Use Case: As one of the pioneers in video streaming, Netflix relies heavily on AWS to deliver seamless streaming experiences to millions of users worldwide. With the massive scale at which Netflix operates, AWS provides the required infrastructure to handle peak loads during major releases or events.",
    },
    {
      type: "text",
      content:
        "Benefits:",
    },
    {
      type: "text",
      content:
        "Scalability: AWS allows Netflix to scale its resources up or down in response to user demand, ensuring uninterrupted streaming even during traffic spikes.",
    },
    {
      type: "text",
      content:
        "Global Reach: AWS offers a vast network of data centers, enabling Netflix to deliver content globally with reduced latency.",
    },
    {
      type: "text",
      level: 3,
      content:
        "Cost Efficiency: By leveraging AWS resources as needed, Netflix avoids overprovisioning and wastage of resources, leading to cost savings.",
    },
    {
      type: "subheading",
      level: 3,
      content: "Airbnb:",
    },
    {
      type: "text",
      content:
        "Use Case: Airbnb, the renowned online marketplace for lodging and travel experiences, utilizes AWS to manage its vast database of listings, user accounts, and booking transactions.",
    },
    {
      type: "text",
      content:
        "By reimplementing the stack with fibers, React gains unprecedented flexibility in managing rendering tasks. Developers can prioritize high-priority updates, pause and resume rendering dynamically, and even abort unnecessary work if superseded by more recent updates. This fine-grained control over rendering tasks enables React to optimize performance, delivering smoother animations and improved responsiveness.",
    },
    {
      type: "text",
      content: "Reliability: AWS ensures high availability and data redundancy, reducing the risk of downtime or data loss.",
    },
    {
        type: "text",
        content: "Security: AWS provides robust security features, allowing Airbnb to implement encryption and access controls to protect user data.",
      },
      {
        type: "text",
        content: "Innovation: Airbnb can focus on developing new features and improving user experience instead of managing infrastructure.",
      },
      {
        type: "subheading",
        level:3,
        content: "Slack:",
      },
      {
        type: "text",
        content: "Use Case: Slack, a leading collaboration and messaging platform, relies on AWS to deliver real-time messaging and file sharing to millions of users.",
      },
      {
        type: "text",
        content: "Benefits:",
      },
      {
        type: "text",
        content: "Elasticity: AWS enables Slack to dynamically allocate resources based on usage patterns, preventing performance bottlenecks.",
      },
      {
        type: "text",
        content: "Global Presence: With AWS, Slack can deploy servers in various regions, reducing latency and improving communication speed for users worldwide.",
      },
      {
        type: "text",
        content: "Focus on Core Competencies: By offloading infrastructure management to AWS, Slack can channel resources into enhancing its core messaging features.",
      },
      {
        type: "text",
        content: "Conclusion: Embracing AWS Cloud for Unparalleled Advantages",
      },
      {
        type: "text",
        content: "The success stories of Netflix, Airbnb, Slack, and numerous other companies illustrate the immense benefits of migrating to the AWS Cloud. From scalability and reliability to cost efficiency and global reach, AWS offers a comprehensive suite of services that cater to diverse business needs. As technology continues to evolve, companies that harness the power of AWS are positioned to innovate rapidly, provide superior user experiences, and thrive in an increasingly competitive landscape. Whether you’re a startup or an enterprise, AWS provides the tools to unlock new possibilities and drive your business forward.",
      },
  ],
};






export default function LeveragingAws() {
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
            //   case "image":
            //     return (
            //       <div key={index} className="mb-6">
            //         <Image
            //           src={item.src || ""}
            //           alt={item.alt|| ""}
            //           width={item.width}
            //           height={item.height}
            //           className="rounded-lg"
            //         />
            //       </div>
            //     );
                // case "link":
                //     return (
                //       <a
                //         key={index}
                //         href={item.href}
                //         target="_blank"
                //         rel="noopener noreferrer"
                //         className="text-blue-400 hover:underline"
                //       >
                //         {item.content}
                //       </a>
                //     );
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
