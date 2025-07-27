'use client';

import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/public/constants';
import Image from 'next/image';
import { useState } from 'react';



export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <div className="container mx-auto max-w-6xl px-5 py-16 mt-10 sm:mt-20 font-futuraBook">
      <h1 className="text-4xl font-bold mb-8 text-center sm:text-left"> Projects</h1>
      <div className="relative">
        {/* Background overlay when a card is hovered */}
        {hoveredProject !== null && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-500" />
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden transition-all duration-500 ease-in-out cursor-pointer ${
                hoveredProject === null 
                  ? 'scale-100 shadow-md hover:shadow-lg' 
                  : hoveredProject === index 
                    ? 'scale-110 shadow-2xl z-30 relative transform-gpu' 
                    : 'scale-95 opacity-40 shadow-sm'
              }`}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <Image
                  width={80}
                  height={40}
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-48 object-cover transition-transform duration-500 ${
                    hoveredProject === index ? 'scale-110' : 'scale-100'
                  }`}
                />
                {hoveredProject === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300" />
                )}
              </div>
              <CardHeader>
                <CardTitle className="transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className={`transition-all duration-500 ${
                  hoveredProject === index ? 'opacity-0 max-h-0 overflow-hidden' : 'opacity-100 max-h-20'
                }`}>
                  {project.description}
                </CardDescription>
                
                {/* Detailed Description - Only shown on hover */}
                {hoveredProject === index && project.detailedDescription && (
                  <div className="transition-all duration-500 ease-in-out opacity-100 max-h-96 overflow-y-auto">
                    <div className="space-y-2 text-sm text-muted-foreground">
                      {project.detailedDescription.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <p className="leading-relaxed">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardHeader>
              <CardContent className={`transition-all duration-300 ${
                hoveredProject === index ? 'pb-6' : 'pb-4'
              }`}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className={`transition-all duration-300 ${
                        hoveredProject === index 
                          ? 'bg-primary text-primary-foreground scale-105' 
                          : ''
                      }`}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                    {/* <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link> */}
                  </Button>
                  <Button 
                    size="sm" 
                    onClick={()=>window.open(project.demo,'_blank')}
                    className={`transition-all duration-300 ${
                      hoveredProject === index 
                        ? 'bg-primary hover:bg-primary/90 scale-105' 
                        : ''
                    }`}
                  >
                    {/* <Link href={project.demo} target="_blank"> */}
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live
                    {/* </Link> */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}