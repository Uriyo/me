'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabase";
import Link from 'next/link';

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsValidating(true);

    // Add a small delay to show validation state
    await new Promise(resolve => setTimeout(resolve, 500));
    setIsValidating(false);

    try {
      const { data, error } = await supabase
        .from('contacts')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message
          }
        ]);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      toast({
        title: "Message sent successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        action: (
          <div className="flex items-center space-x-2">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span className="text-sm text-green-500">Success</span>
          </div>
        ),
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message 😔",
        description: "Something went wrong. Please try again or contact me directly via email.",
        variant: "destructive",
        action: (
          <div className="flex items-center space-x-2">
            <AlertCircle className="h-4 w-4 text-red-500" />
            <span className="text-sm text-red-500">Error</span>
          </div>
        ),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mx-auto max-w-6xl px-5 py-16 mt-10 sm:mt-20 font-futuraBook">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center sm:text-left">Let&apos;s Build something!</h1>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-6 bg-black/20 backdrop-blur-sm border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <a href="mailto:kushagra6434@gmail.com" className="hover:text-gray-300 transition-colors">
                    kushagra6434@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400" />
                  <span>Delhi, India</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <Link href="https://github.com/Uriyo" target="_blank" rel="noopener noreferrer" 
                     className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </Link>
                  <Link href="https://www.linkedin.com/in/kushagra6434/" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    LinkedIn
                  </Link>
                  {/* <a href="https://x.com/Kushagra_Gojo" target="_blank" rel="noopener noreferrer"
                     className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a> */}
                </div>
              </div>
            </Card>

            {/* Availability Card */}
            <Card className="p-6 bg-black/20 backdrop-blur-sm border-white/10">
              <h2 className="text-2xl font-semibold mb-4">Availability</h2>
                              <p className="text-gray-300">
                I&apos;m currently available for freelance work and interesting projects.
                Response time: Usually within 24 hours.
              </p>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-6 bg-black/20 backdrop-blur-sm border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="bg-black/20 border-white/10"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="bg-black/20 border-white/10"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  required
                  className="bg-black/20 border-white/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  className="min-h-[150px] bg-black/20 border-white/10"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full relative overflow-hidden"
                disabled={isLoading}
              >
                {isValidating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Validating...
                  </>
                ) : isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </>
                )}
                
                {/* Loading bar animation */}
                {isLoading && (
                  <div className="absolute bottom-0 left-0 h-1 bg-blue-500 animate-pulse" 
                       style={{ width: '100%', animation: 'loading 2s ease-in-out infinite' }} />
                )}
              </Button>
            </form>
          </Card>
        </div>
      </motion.div>
    </div>
  );
} 