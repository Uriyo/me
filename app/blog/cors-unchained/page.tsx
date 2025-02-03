// app/blog/thread-nodejs/page.tsx
import Cors from '@/components/blogpost/Cors'
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: "CORS Unchained",
    description: 'Secure your web applications with CORS and Preflight Requests. Learn how these mechanisms enable safe cross-origin communication, counter CSRF attacks, and protect sensitive data with practical examples and insights.',
    keywords:'CORS, Preflight Requests, Cross-Origin Resource Sharing, browser security, CORS configuration, CORS headers, Access-Control-Allow-Origin, Access-Control-Allow-Methods, Access-Control-Allow-Headers, cross-origin requests,unauthorized access prevention, secure API communication, cookie theft prevention, session hijacking,  modern web applications, HTTP OPTIONS method, cross-origin API calls, secure web apps'
}

export default function Page() {
  return <Cors/>
}