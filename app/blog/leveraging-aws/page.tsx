// app/blog/thread-nodejs/page.tsx
import LeveragingAws from '@/components/blogpost/LeveragingAws'
import React from '@/components/blogpost/React'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Leveraging the Power of AWS Cloud:",
  description: 'Explore how companies like Netflix, Airbnb, and Slack leverage AWS Cloud to enhance scalability, reliability, and cost efficiency. Learn how AWS powers their operations, driving innovation and global reach.',
  keywords:'AWS Cloud, Amazon Web Services, AWS benefits, AWS scalability, cloud computing, Netflix on AWS, Airbnb on AWS, Slack on AWS, AWS case studies, AWS global reach, AWS reliability, AWS security, AWS innovation, cloud services, cloud infrastructure, AWS cost efficiency, AWS elasticity, AWS data centers, cloud storage, AWS databases, AWS machine learning, cloud analytics, real-time messaging, cloud migration, AWS startups, AWS enterprise solutions, cloud computing advantages, AWS use cases, AWS for businesses, cloud computing benefits, global content delivery, reducing latency, AWS for startups'
}

export default function Page() {
  return <LeveragingAws/>
}