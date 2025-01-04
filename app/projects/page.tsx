'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { projects } from '@/public/constants';
import Image from 'next/image';


export default function ProjectsPage() {
  return (
    <div className="container mx-auto max-w-6xl px-5 py-16 mt-10 sm:mt-20 font-futuraBook">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden">
            <Image
              width={80}
              height={40}
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-4">
                <Button asChild variant="outline" size="sm">
                  {/* <Link href={project.github} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Link> */}
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demo} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}