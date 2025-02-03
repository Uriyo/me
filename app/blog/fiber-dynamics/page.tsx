// app/blog/thread-nodejs/page.tsx
import FiberDynamics from '@/components/blogpost/FiberDynamics'
import React from '@/components/blogpost/React'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Fiber Dynamics: Accelerating the Speed of Rendering",
  description: 'Discover how React Fiber enhances rendering performance by breaking tasks into manageable fibers, allowing asynchronous rendering and prioritized scheduling. Learn how this approach optimizes UI updates, improves responsiveness, and ensures smoother user experiences in React applications.',
  keywords:'React Fiber, React rendering, asynchronous rendering, prioritized scheduling, fiber data structure, component hierarchy, fiber trees, React performance optimization, React components, rendering tasks, child pointers, fiber tree traversal, dynamic rendering, UI performance, React Fiber architecture, React reconciliation, React updates, component rendering, React evolution'
}

export default function Page() {
  return <FiberDynamics/>
}