'use client';
import { Card2, CardContent, CardHeader, CardTitle } from '@/components/ui/card2';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';


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
          <h1 className="text-4xl font-bold ml-7">Resume</h1>
          <Button onClick={handleClick} className='md:mr-5'>
            <Download className=" h-4 w-4" />
          </Button>
        </div>

        <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-[1fr_300px] gap-8">
          {/* Main Timeline */}
          <div className="relative space-y-20 pl-8">
            <div className="timeline-line" />

            {/* Work Experience */}
            <TimelineSection
              title="Work Experience"
              emoji="💼"
              items={[
                {
                  title: "Software Engineer",
                  company: "SYMB Technologies",
                  date: "Jul 2024 - Present",
                  description:`I architected and deployed the company’s client-facing portal using Next.js, TypeScript, and Server-Side Rendering (SSR), achieving a perfect 100 Lighthouse score by implementing optimized Static Site Generation (SSG), asset compression, and critical CSS prioritization. To streamline content management, I integrated Drupal as a headless CMS, reducing content update time by 50% for editors. The portal was hosted on AWS using S3 and CloudFront, ensuring global low-latency access, which significantly improved SEO rankings by 30% and increased organic traffic by 15% within three months.`
                },
                {
                  title: "Full stack Developer",
                  company: "DevopSpatial",
                  date: "Apr2024 - Jun2024",
                  description: "I delivered scalable infrastructure solutions for enterprise clients by designing a cloud-agnostic role-based authentication system using FusionAuth, which secured access for multiple users and reduced unauthorized login attempts by 90%. To enhance deployment efficiency, I automated the process using GoCD and AWS EKS, cutting manual infrastructure setup time from 8 hours to just 45 minutes. Additionally, I built a low-code admin portal using React and Node.js, streamlining client onboarding, reducing support tickets by 30%, and improving user retention by 15%. By implementing infrastructure rightsizing and S3 lifecycle policies, I also optimized cloud costs, reducing monthly AWS expenses by 18%."
                }
              ]}
            />

            {/* Education */}
            <TimelineSection
              title="Education"
              emoji="🎓"
              items={[
                {
                  title: "Bachelor of Technology",
                  company: "Dr. APJ Abdul Kalam Technical University",
                  date: "2020 - 2024",
                  description: ""
                },
                {
                  title: "Senior Secondary Education",
                  company: "Shiv Jyoti International School",
                  date: "2019 - 2020",
                  description: ""
                }
              ]}
            />

            {/* Projects */}
            <TimelineSection
              title="Projects"
              emoji="🚀"
              items={[
                {
                  title: "ABM Technologies",
                  company: "SYMB Technologies",
                  date: "2024",
                  description: "I engineered ABM’s website using Next.js and TypeScript to enhance both user experience and performance. By optimizing assets and implementing Static Site Generation (SSG), I achieved a 30% reduction in page load time. These improvements bolstered SEO performance, resulting in a 25% increase in organic search traffic, while enhanced mobile responsiveness led to a 20% increase in mobile user engagement."
                },
                {
                  title: "DevopsCentrum",
                  company: "DevopSpatial",
                  date: "2024",
                  description: "I developed RESTful APIs using Node.js and Express to facilitate seamless integration between platform components. By integrating a CI/CD pipeline with GoCD, I reduced application deployment time by 45%, accelerating time-to-market for new features. Additionally, my efforts in automating infrastructure provisioning and management contributed to a 25% reduction in operational costs, resulting in significant cost savings."
                },
                {
                  title: "COINTRACKER",
                  company: "Personal Project",
                  date: "2023",
                  description: "I designed interactive charts using Chart.js to display real-time cryptocurrency price trends, thereby enhancing user engagement. Additionally, I built a responsive and intuitive user interface using React and Ant Design UI, ensuring a seamless and engaging user experience."
                }
              ]}
            />

            {/* Certifications */}
            <TimelineSection
              title="Certifications"
              emoji="📜"
              items={[
                {
                  title: "AWS Certified Cloud Practitoner",
                  company: "Amazon Web Services",
                  date: "2023",
                  description: "Advanced certification for designing distributed systems on AWS."
                }
              ]}
            />

            {/* Hackathons */}
            <TimelineSection
              title="Hackathons"
              emoji="🏆"
              items={[
                {
                  title: "Smart India Hackathon",
                  company: "Grand Finalist",
                  date: "2022",
                  description: ""
                },
                {
                  title: "Flipkart Grid",
                  company: "Runner Up",
                  date: "2022",
                  description: ""
                }
              ]}
            />
          </div>

          {/* Skills Portal */}
          <div className="md:sticky md:top-8 h-fit">
            <Card2 className="mystical-card">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 glow-text">Skills</h3>
                <div className="space-y-8">
                  <SkillSection
                    title="Frontend "
                    skills={[
                      "NextJS",
                      "React",
                      "HTML",
                      "CSS",
                      "Tailwind CSS",
                      "shadcn/ui",
                      "TypeScript",
                      "JavaScript"
                    ]}
                  />
                  <SkillSection
                    title="Backend "
                    skills={[
                      "Node.js",
                      "Flask",
                      "Docker",
                      "AWS EKS",
                      "AWS SDK",
                      "goCD",
                      "AWS Lambda" ,
                    ]}
                  />
                  <SkillSection
                    title="Database "
                    skills={[
                      "PostgreSQL",
                      "Prisma",
                      "Supabase",
                      "MySQL",
                      "AWS RDS",
                      "MongoDB",
                    ]}
                  />
                </div>
              </div>
            </Card2>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}


function TimelineSection({
  title,
  emoji,
  items
}: {
  title: string;
  emoji: string;
  items: Array<{
    title: string;
    company: string;
    date: string;
    description: string;
  }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="timeline-branch" />
      <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2 glow-text">
        <span>{emoji}</span>
        {title}
      </h2>
      <div className="space-y-8">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </motion.div>
  );
}

function TimelineItem({
  title,
  company,
  date,
  description
}: {
  title: string;
  company: string;
  date: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Card2 className="mystical-card">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold text-lg text-white">{title}</h3>
              <p className="text-gray-400">{company}</p>
            </div>
            <Badge variant="secondary" className="bg-white/10 text-white border-white/20">
              {date}
            </Badge>
          </div>
          <p className="text-gray-300">{description}</p>
        </div>
      </Card2>
    </motion.div>
  );
}

function SkillSection({ title, skills }: { title: string; skills: string[] }) {
  return (
    <div>
      <h4 className="text-lg font-medium mb-4 text-white">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="secondary"
            className="bg-white/10 text-white border-white/20 hover:bg-white/20"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}