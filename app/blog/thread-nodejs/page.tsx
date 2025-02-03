// app/blog/thread-nodejs/page.tsx
import Threads from '@/components/blogpost/Threads'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "Threads in Nodejs",
    description: 'Understand Node.js threading: event loop, hidden threads, and worker-threads module. Learn how to handle CPU-intensive tasks efficiently.',
    keywords:'Node.js, threads in Node.js, Node.js worker threads, Node.js threading, multithreading in Node.js, libuv Node.js, worker_threads module, Node.js process vs thread, Node.js multithreading tutorial, event loop in Node.js, Node.js performance optimization, CPU-bound tasks in Node.js, non-blocking I/O in Node.js, asynchronous programming in Node.js, Node.js concurrency, Node.js V8 engine, Node.js threading example, parallel programming in Node.js, Node.js child processes, Node.js scalability'
}


export default function Page() {
  return <Threads/>
}