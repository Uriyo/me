"use client";
import Image from "next/image";
import { formatDate, getYouTubeEmbedUrl } from "@/utils/blogUtils";
import CodeSnippet from "@/components/codesnippet";
import { Subscribe } from "@/components/subscribe";
import { useEffect, useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";

// Mock data for the blog post
const blogPost = {
  title: "“CORS Unchained: Strengthening Web Security with Preflight Requests”",
  author: "Kushagra Gangwar",
  date: "2023-05-15",
  content: [
    {
      type: "text",
      content:
        "Introduction: In the ever-changing landscape of web development, Cross-Origin Resource Sharing (CORS) plays a vital role in enabling secure communication between different domains. However, there’s a lesser-known yet crucial aspect called “Preflight Requests” that complements CORS. In this article, we’ll explore the significance of CORS and Preflight Requests, unveiling how they work together to ensure seamless and protected interactions in modern web applications.",
    },
    {
      type:"text",
      content:
            "**Understanding CORS**: Cross-Origin Resource Sharing (CORS) is a browser security feature that permits servers to specify which domains can access their resources. By controlling cross-origin requests, CORS safeguards sensitive data and mitigates potential security risks."
    },
    {
      type:"text",
      content:
            "**The Role of Preflight Requests**: When a web app initiates a cross-origin request, the browser first sends a “Preflight Request” with an HTTP OPTIONS method. This preliminary request includes headers describing the actual request to follow. The server responds with CORS headers, such as Access-Control-Allow-Origin and Access-Control-Allow-Methods, confirming whether the actual request is allowed."
    },
    {
      type:"text",
      content:
            "**Importance of CORS and Preflight Requests**: CORS, in tandem with Preflight Requests, fortifies web applications against unauthorized access. Preflight Requests act as a safety checkpoint, ensuring that the server is aware of the client’s intent and grants permission for subsequent requests. This layered approach enhances security while enabling feature-rich web apps."
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*5c_emW3v-j5Hhrajb-pxlw.png",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type:"text",
      content:
            "To understand let us take a Scenario:"
    },
    {
      type:"text",
      content:
            "You are building a web application that fetches data from an API hosted on a different domain (api.example.com). Your web application (app.example.com) needs to access this API to display information to the users. However, due to browser security restrictions, direct cross-origin requests from app.example.com to api.example.com are blocked by default."
    },
    {
      type:"text",
      content:
            "Solution using CORS and Preflight Requests: To enable secure communication between your web application and the API, you implement CORS and Preflight Requests on the server-side (api.example.com)."
    },
    {
        type:"text",
        content:
              "CORS Configuration on Server (api.example.com):"
      },
      {
        type:"text",
        content:
              "On the server hosting the API, you configure CORS headers in the response to allow cross-origin requests from your web application’s domain (app.example.com)."
      },
      {
        type:"text",
        content:
              "Example Response Headers on api.example.com:"
      },
    {
      type: "code",
      language: "js",
      content: `
Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization    `,
    },
    {
      type:"text",
      content:
            "Preflight Request:"
    },
    {
        type:"text",
        content:
              "When your web application (app.example.com) wants to make a cross-origin request to the API (api.example.com), the browser sends a Preflight Request to api.example.com with the HTTP OPTIONS method."
      },
    {
      type: "text",
      content: "Example Preflight Request Headers:",
    },
    {
        type: "code",
        language: "js",
        content: `OPTIONS /api/data HTTP/1.1
Origin: https://app.example.com
Access-Control-Request-Method: GET
Access-Control-Request-Headers: Authorization`,
      },
    {
      type: "text",
      content: "Preflight Response (api.example.com):",
    },
    {
      type: "text",
      content: "The server (api.example.com) receives the Preflight Request, checks its CORS configuration, and responds with the appropriate CORS headers, allowing or denying access to the API.",
    },
    {
      type: "text",
      content: "Example Preflight Response Headers:",
    },
    {
        type: "code",
        language: "js",
        content: `Access-Control-Allow-Origin: https://app.example.com
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type, Authorization`,
      },
    {
      type: "text",
      content: "Actual Request (GET Request to api.example.com):",
    },
    {
      type: "text",
      content: "After receiving a successful Preflight Response, the browser proceeds with the actual GET request to the API (api.example.com).",
    },
    {
      type: "text",
      content: "Example Actual Request Headers:",
    },
    {
      type: "code",
      language: "js",
      content: `GET /api/data HTTP/1.1
Host: api.example.com
Authorization: Bearer <token>`
    },    
    {
      type: "text",
      content: "By allowing the specified domain (app.example.com) in the CORS headers and handling the Preflight Request, the API (api.example.com) ensures that only trusted origins can access its resources securely. This setup prevents unauthorized access from other domains and safeguards sensitive data, maintaining a robust security layer for your web application.",
    },
    {
      type: "subheading",
      level:3,
      content: "Countering Malicious Attacks:",
    },
    {
      type: "text",
      content: "**Unauthorized Access**: CORS restricts access to resources, ensuring only trusted origins can make cross-origin requests. This prevents malicious websites from stealing sensitive information from unsuspecting users.",
    },
    {
      type: "text",
      content: "**CSRF (Cross-Site Request Forgery)**: Preflight Requests act as an essential defense against CSRF attacks. Malicious sites cannot forge requests without receiving proper authorization from the server during the Preflight phase.",
    },
    {
      type: "text",
      content:
        "**Information Disclosure**: CORS prevents information leakage by blocking cross-origin requests that try to access restricted data.",
    },
    {
      type: "text",
      content: "**Cookie Theft**: By disallowing unauthorized origins from accessing cookies, CORS mitigates the risk of cookie theft and session hijacking.",
    },
    {
      type: "text",
      content: "Conclusion",
    },
    {
      type: "text",
      content: "In the ever-evolving landscape of web development, CORS and Preflight Requests stand as stalwart defenders against malicious attacks. Their combined strength ensures secure communication, protects sensitive data, and maintains user trust. By leveraging these security mechanisms effectively, developers can create web applications that thrive on integrity, privacy, and resilience against potential threats. Embrace the power of CORS and Preflight Requests to fortify your web applications and foster a safer digital ecosystem for users worldwide.",
    },
  ],
};






export default function Cors() {
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
     
      <div className="container mx-auto px-4 py-8">
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
              case "code":
                return (
                  <div key={index} className="mb-6">
                    <CodeSnippet code={item.content} language={item.language} />
                  </div>
                );
              //   case "link":
              //     return (
              //       <a
              //         key={index}
              //         href={(item.href) || ""}
              //         target="_blank"
              //         rel="noopener noreferrer"
              //         className="text-blue-400 hover:underline"
              //       >
              //         {item.content}
              //       </a>
              //     );
              case "video":
                return (
                  <div key={index} className="mb-6 aspect-w-16 aspect-h-9">
                    {/* <iframe
                      src={ getYouTubeEmbedUrl(item.url)|| ""}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-64 md:h-96 rounded-lg"
                    ></iframe> */}
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
      </div>

      {/* Footer */}
      <footer className="bg-black py-6 mt-12 border-t-2">
        <div className="container mx-auto px-4 text-xs text-center text-gray-600">
          © 2025 All rights reserved.
        </div>
      </footer>
    </div>
  );
}
