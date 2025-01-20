"use-client";
import Image from "next/image";
import { formatDate, getYouTubeEmbedUrl } from "@/utils/blogUtils";
import CodeSnippet from "@/components/codesnippet";
import Head from "next/head";
import { Metadata } from "next";

// Mock data for the blog post
const blogPost = {
  title: "Threads in NodeJS",
  author: "Kushagra Gangwar",
  date: "2023-05-15",
  content: [
    {
      type: "text",
      content:
        "Node.js is a popular runtime environment for executing JavaScript code outside the browser, primarily known for its non-blocking, event-driven architecture. While Node.js is single-threaded by nature, it offers various mechanisms to leverage multithreading capabilities for performance optimization.",
    },
    {
      type:"text",
      content:
            "NodeJS itself is multithreaded and provides **hidden threads**, through **libuv** library. It handles I/O operations like reading files from a disk or network requests. Through these hidden threads NodeJS provides asynchronous methods that allow your code to make I/O requests without blocking the main thread."
    },
    {
      type:"text",
      content:
            "Although Nodejs has some hidden threads, you can not use them to offload CPU-intensive tasks, such as complex calculations or image resizing. The only way to speed up a CPU-bound task is to increase the ‘processor speed’."
    },
    {
      type:"text",
      content:
            "In recent years computers are shipping with extra cores (dual core, quadcore, octa core etc.) To leverage these cores NodeJS has introduced worker-threads module, which allows you to create threads and execute multiple JS tasks in parallel. Once a thread finishes a task it sends a message to main thread that contains the result of the operation so that it can be used with other parts of the code."
    },
    {
      type:"text",
      content:
            "Advantage of using worker threads is that CPU-bound tasks do not block the main thread and you can divide and distribute a task to multiple workers to optimize it."
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*e6RD9x4ycH5m8_IYSv3Y6Q.png",
      alt: "Event Loop",
      width: 800,
      height: 400,
    },
    {
      type:"text",
      content:
            "For deeper understanding Let us first know the difference between process and threads."
    },
    {
      type: "subheading",
      level: 3,
      content: "Process ⚙️",
    },
    {
      type:"text",
      content:
            "It is a running program in the operating system. It has its own memory and can not see nor access the memory of other running programs. It also has an instruction pointer, which indicates the instruction currently being executed in a program. Only one task can be executed at a time."
    },
    {
      type:"text",
      content:
            "Example: Using child_process to create a new process"
    },
    {
      type: "code",
      language: "js",
      content: `
const { fork } = require('child_process');

// Fork a new Node.js process
const child = fork('child.js');

// Send a message to the child process
child.send({ hello: 'world' });

// Receive messages from the child process
child.on('message', (message) => {
  console.log('Received message from child:', message);
});
    `,
    },
    {
      type:"text",
      content:
            "child.js"
    },
    {
      type: "code",
      language: "js",
      content: `
process.on('message', (message) => {
  console.log('Received message from parent:', message);
  process.send({ reply: 'hello parent' });
});
    `,
    },
    {
      type: "text",
      content: "In this example:",
    },
    {
      type: "text",
      content: "○ The parent script forks a new process using fork('child.js').",
    },
    {
      type: "text",
      content: "○ The parent and child processes communicate through messages.",
    },
    {
      type: "text",
      content: "○ Each process has its own memory space.",
    },
    {
      type: "subheading",
      level: 3,
      content: " Thread 🧵",
    },
    {
      type: "text",
      content: "Threads are like process: they have their own instruction pointer and execute one JS task at a time. Threads do not have their own memory . They reside within the process’s memory. Process contains multiple threads. Threads can communicate with one another through message passing or sharing the data in the process’s memory.",
    },
    {
      type: "text",
      content: "When it comes to the execution of threads, they have similar behavior to that of processes. If you have multiple threads running on a single core system, the operating system will switch between them in regular intervals, giving each thread a chance to execute directly on the single CPU. On a multi-core system, the OS schedules the threads across all cores and executes the JavaScript code at the same time. If you end up creating more threads than there are cores available, each core will execute multiple threads concurrently.",
    },
    {
      type: "text",
      content: "Example: Using worker_threads to create a new thread",
    },
    {
      "type": "code",
      "language": "js",
      "content": "const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');\nif (isMainThread) {\n  // This is the main thread\n  const worker = new Worker(__filename, {\n    workerData: { start: 1, end: 1e6 }\n  });\n  // Listen for messages from the worker\n  worker.on('message', (result) => {\n    console.log(`Result from worker: ${result}`);\n  });\n  worker.on('error', (error) => {\n    console.error('Worker error:', error);\n  });\n  worker.on('exit', (code) => {\n    if (code !== 0) console.error(`Worker stopped with exit code ${code}`);\n  });\n} else {\n  // This is the worker thread\n  const { start, end } = workerData;\n  let sum = 0;\n  for (let i = start; i <= end; i++) {\n    sum += i;\n  }\n  // Send the result back to the main thread\n  parentPort.postMessage(sum);\n}"
    },    
    {
      type: "text",
      content: "In this example:",
    },
    {
      type: "text",
      content: "○ The main thread creates a worker thread using new Worker(__filename, { workerData: { start: 1, end: 1e6 } }).",
    },
    {
      type: "text",
      content: "○ The worker thread performs a computation and sends the result back to the main thread.",
    },
    {
      type: "text",
      content: "○ Both threads share the same memory space, allowing for efficient data sharing.",
    },
    {
      type: "text",
      content:
        "Now you have the learned about the threads, so we can proceed to the mater of concern.",
    },
    {
      type: "heading",
      level: 1,
      content:
        "Understanding Hidden Threads in NodeJS",
    },
    {
      type: "text",
      content: "NodeJS does provide extra threads, which is why it’s considered to be multithreaded. Nodejs implements the libuv library, which provides four extra threads to a node process. With these threads, the I/O opreations are handled separately and when they are finished, the event loop adds the callback associated with the I/O task in microtask queue. When call stack in the main thread is clear, the callback associated with the given I/o task does not execute in parallel; however the task itself of reading a file or a network request happens with the help of threads. Once the I/O task finishes the callback runs in the main thread. Now look the previous image for more understanding.",
    },
    {
      type: "text",
      content: "In addition to these four threads, the V8 engine, also provides two threads for handling things like automatic garbage collection. This brings the total number of threads in a process to seven : one main thread, four Node.js threads, and two V8 threads.",
    },
    {
      type: "heading",
      level: 1,
      content:
        "Offloading a CPU-Bound Task with the worker-threads Module",
    },
    {
      type: "text",
      content: "In this section, you will offload a CPU-intensive task to another thread using the worker-threads module to avoid blocking the main thread. To do this, you will create a worker.js file that will contain the CPU-intensive task. In the index.js file, you will use the worker-threads module to initialize the thread and start the task in the worker.js file to run in parallel to the main thread. Once the task completes, the worker thread will send a message containing the result back to the main thread.",
    },
    {
      type: "text",
      content: "If it shows two or more cores, you can proceed with this step.",
    },
    {
      type: "text",
      content: "Next, create and open the worker.js file in your text editor:",
    },
    {
      type: "code",
      language: "js",
      content: `
cd worker.js
    `,
    },
    {
      type: "text",
      content: "In your worker.js file, add the following code to import the worker-threads module and do the CPU-intensive task:",
    },
    {
      type: "text",
      content: "multi-threading_demo/worker.js",
    },
    {
      type: "code",
      language: "js",
      content: `
const { parentPort } = require("worker_threads");

let counter = 0;
for (let i = 0; i < 20_000_000_000; i++) {
  counter++;
}
    `,
    },
    {
      type: "text",
      content: "The first line loads the worker_threads module and extracts the parentPort class. The class provides methods you can use to send messages to the main thread. Next, you have the CPU-intensive task that is currenty in the calculateCount() function in the index.js file. Later in this step, you will delete this function from index.js.",
    },
    {
      type: "text",
      content: "Following this, add the highlighted code below:",
    },
    {
      type: "text",
      content: "multi-threading_demo/worker.js",
    },
    {
      type: "code",
      language: "js",
      content: `
const { parentPort } = require("worker_threads");

let counter = 0;
for (let i = 0; i < 20_000_000_000; i++) {
  counter++;
}
parentPort.postMessage(counter);
    `,
    },
    {
      type: "text",
      content: "Here you invoke the postMessage() method of the parentPort class, which sends a message to the main thread containing the result of the CPU-bound task stored in the counter variable.",
    },
    {
      type: "text",
      content: "Save and exit your file. Open index.js in your text editor:",
    },
    {
      type: "code",
      language: "js",
      content: `
cd index.js
    `,
    },
    {
      type: "text",
      content: "Since you already have the CPU-bound task in worker.js, remove the highlighted code from index.js:",
    },
    {
      type: "text",
      content: "multi-threading_demo/index.js",
    },
    {
      "type": "code",
      "language": "js",
      "content": "const express = require(\"express\");\n\nconst app = express();\nconst port = process.env.PORT || 3000;\napp.get(\"/non-blocking/\", (req, res) => {\n  res.status(200).send(\"This page is non-blocking\");\n});\nfunction calculateCount() {\n  return new Promise((resolve, reject) => {\n    let counter = 0;\n    for (let i = 0; i < 20_000_000_000; i++) {\n      counter++;\n    }\n    resolve(counter);\n  });\n}\napp.get(\"/blocking\", async (req, res) => {\n  const counter = await calculateCount();\n  res.status(200).send(`result is ${counter}`);\n});\napp.listen(port, () => {\n  console.log(`App listening on port ${port}`);\n});"
    },    
    {
      type: "text",
      content: "Next, in the app.get('/blocking') callback, add the following code to initialize the thread:",
    },
    {
      type: "text",
      content: "multi-threading_demo/index.js",
    },
    {
      "type": "code",
      "language": "js",
      "content": "const express = require(\"express\");\nconst { Worker } = require(\"worker_threads\");\n...\napp.get(\"/blocking\", async (req, res) => {\n  const worker = new Worker(\"./worker.js\");\n  worker.on(\"message\", (data) => {\n    res.status(200).send(`result is ${data}`);\n  });\n  worker.on(\"error\", (msg) => {\n    res.status(404).send(`An error occurred: ${msg}`);\n  });\n});\n..."
    },
    {
      type: "text",
      content: "First, you import the worker_threads module and unpack the Worker class. Within the app.get('/blocking') callback, you create an instance of the Worker using the new keyword that is followed by a call to Worker with the worker.js file path as its argument. This creates a new thread and the code in the worker.js file starts running in the thread on another core.",
    },
    {
      type: "text",
      content: "Following this, you attach an event to the worker instance using the on('message') method to listen to the message event. When the message is received containing the result from the worker.js file, it is passed as a parameter to the method’s callback, which returns a response to the user containing the result of the CPU-bound task.",
    },
    {
      type: "text",
      content: "Next, you attach another event to the worker instance using the on('error') method to listen to the error event. If an error occurs, the callback returns a 404 response containing the error message back to the user.",
    },
    {
      type: "text",
      content: "Your complete file will now look like the following:",
    },
    {
      type: "text",
      content: "multi-threading_demo/index.js",
    },
    {
      "type": "code",
      "language": "js",
      "content": "const express = require(\"express\");\nconst { Worker } = require(\"worker_threads\");\nconst app = express();\nconst port = process.env.PORT || 3000;\napp.get(\"/non-blocking/\", (req, res) => {\n  res.status(200).send(\"This page is non-blocking\");\n});\napp.get(\"/blocking\", async (req, res) => {\n  const worker = new Worker(\"./worker.js\");\n  worker.on(\"message\", (data) => {\n    res.status(200).send(`result is ${data}`);\n  });\n  worker.on(\"error\", (msg) => {\n    res.status(404).send(`An error occurred: ${msg}`);\n  });\n});\napp.listen(port, () => {\n  console.log(`App listening on port ${port}`);\n});"
    },
    {
      type: "text",
      content: "Save and exit your file, then run the server:",
    },
    {
      "type": "code",
      "language": "js",
      "content": "node index.js"
    },            
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*Ghj0ByencKwfuJAqamy7bw.png",
      alt: "Blocking endpoint",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content: "Look the blocking requests took only 6.93 s to load without blocking the non-blocking endpoint which took only 7ms when both requests were made on same time.",
    },
    {
      type: "image",
      src: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*XHjqik_h8OCGYfDlZhBj8A.png",
      alt: "Non blocking endpoint",
      width: 800,
      height: 400,
    },
    {
      type: "text",
      content: "Visit the http://localhost:3000/blocking tab again in your web browser. Before it finishes loading, refresh all http://localhost:3000/non-blocking tabs. You should now notice that they are loading instantly without waiting for the /blocking route to finish loading. This is because the CPU-bound task is offloaded to another thread, and the main thread handles all the incoming requests.",
    },{
      type: "text",
      content: "Now, stop your server using CTRL+C.",
    },{
      type: "text",
      content: "Now that you can make a CPU-intensive task non-blocking using a worker thread, you can use four worker threads to improve the performance of the CPU-intensive task.",
    },
    {
      type: "subheading",
      level:3,
      content: "Conclusion",
    },{
      type: "text",
      content: "Understanding and utilizing threads in Node.js can significantly enhance the performance and scalability of your applications. While Node.js is inherently single-threaded, it provides mechanisms like hidden threads through the libuv library for efficient I/O operations and the worker-threads module for CPU-bound tasks. By offloading intensive tasks to worker threads, you can keep your.",
    },
    {
      type: "text",
      content: "For more information on worker threads, refer:",
    },
    {
      type: "link",
      content: "official Node.js documentation.",
      href: "https://nodejs.org/api/worker_threads.html",
    },
    
    // {
    //   type: "video",
    //   url: "https://www.youtube.com/watch?v=dpw9EHDh2bM",
    // },
    
  ],
};

export const metadata: Metadata = {
    title: "Threads in Nodejs",
    description: 'Understand Node.js threading: event loop, hidden threads, and worker-threads module. Learn how to handle CPU-intensive tasks efficiently.'
}




export default function BlogPost() {
  return (
    <div className={`font-futuraBook   min-h-screen font- bg-black mt-36 text-gray-100`}>
      {/* Main content */}
      <Head>
        <title>{blogPost.title}</title>
        <meta name="description" content={`Read about ${blogPost.title}`} />
      </Head>
      <main className="container mx-auto px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">{blogPost.title}</h2>
          <div className="text-gray-400 mb-8">
            <span>{blogPost.author}</span> | <span>{formatDate(blogPost.date)}</span>
          </div>

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
              case "code":
                return (
                  <div key={index} className="mb-6">
                    <CodeSnippet code={item.content} language={item.language} />
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
