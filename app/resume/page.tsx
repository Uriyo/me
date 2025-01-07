'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';


const handleClick = () => {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'Kushagra_Resume.pdf'; 
  link.click();
};
export default function ResumePage() {
  return (
    <>
      <div className="container mx-auto max-w-6xl px-4 py-16 mt-20 font-futuraBook">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Resume</h1>

          <Button onClick={handleClick}>
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Experience</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-md">Software Engineer </h3>
                <p className="text-sm text-muted-foreground">
                  SYMB Technologies | June 2024 - Present
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li>
                    Contributed in development of multiple full-stack
                    applications
                  </li>
                  <li>
                    Integrated the Open Elephant (SaaS) a portal for employee
                    training and monitoring.
                  </li>
                  <li>
                    Refined the training management process, leading to a 25%
                    reduction in administrative overhead and improved training
                    completion rates.
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold">Full Stack Developer </h3>
                <p className="text-sm text-muted-foreground">
                  DevopSpatial | April 2024 - June 2024
                </p>
                <ul className="list-disc list-inside mt-2 text-sm">
                  <li className="list-item">
                    Devised and executed user registration and authentication
                    frameworks using Fusion AUTH, which empowered 500+ users
                    with secure access.
                  </li>
                  <li>
                    Seamlessly integrated critical tools, including goCD, Nexus
                    and EKS, assigning SuperAdmin roles to ensure comprehensive
                    access and control.
                  </li>
                  <li>
                    Developed a secure user management framework incorporating
                    HTML, CSS, and NodeJS, now adopted by 15 team members &
                    streamlined user onboarding processes.
                  </li>
                </ul>
              </div>

              {/* Add more experience items */}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  Bachelor of Technology in Computer Science
                </h3>
                <p className="text-sm text-muted-foreground">
                  Dr. APJ Abdul Kalam Technical University Name | 2020 - 2024
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Achievements & Certificates</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">
                  SIH 2022 ( SMART INDIA HACKATHON )
                </h3>
                <p className="text-sm text-muted-foreground">Finalist</p>
              </div>
              <div>
                <h3 className="font-semibold">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-sm text-muted-foreground">2023-2026</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Frontend</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>React.js</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                    <li>Tailwind CSS</li>
                    <li>ShadCN UI</li>
                    <li>Redux toolkit</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Backend</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>Supabase</li>
                    <li>MongoDB</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Tools & Others</h3>
                  <ul className="text-sm list-disc list-inside space-y-1">
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS & GCP</li>
                    <li>Postman</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}