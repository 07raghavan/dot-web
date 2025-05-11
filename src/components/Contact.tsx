
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Clock, Globe, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Get in Touch</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Questions? Ideas? Want to mentor? Reach out—we'd love to hear from you!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass rounded-xl p-6 md:p-8 animate-fade-in">
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-1">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-1">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-background text-white border-white/20 focus:border-dot-cyan focus:ring-1 focus:ring-dot-cyan resize-none"
                    required
                  />
                </div>
                
                <div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-dot-cyan to-dot hover:opacity-90 transition-opacity"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </div>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="glass rounded-xl p-6 md:p-8 mb-6 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <MessageSquare className="w-5 h-5 text-dot mt-0.5" />
                  <div>
                    <h4 className="font-medium">Email Us</h4>
                    <p className="text-white/70">dot.club@university.edu</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-dot-cyan mt-0.5" />
                  <div>
                    <h4 className="font-medium">Discord</h4>
                    <p className="text-white/70">discord.gg/DOT-Community</p>
                  </div>
                </li>
                
                <li className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-dot mt-0.5" />
                  <div>
                    <h4 className="font-medium">Office Hours</h4>
                    <p className="text-white/70">Tuesdays & Thursdays<br />4:00 PM - 5:00 PM<br />Lab 3B, Data Science Wing</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-white/70 text-sm">
                  Follow us on LinkedIn & Instagram for behind-the-scenes and event recaps!
                </p>
              </div>
            </div>
            
            <div className="glass rounded-xl p-6 animate-fade-in" style={{ animationDelay: '300ms' }}>
              <h3 className="text-xl font-bold mb-4">Join Our Community</h3>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z" />
                  </svg>
                  Discord
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </Button>
                
                <Button 
                  variant="outline" 
                  className="neon-border hover:bg-white/5"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-t from-dot/20 to-dot-cyan/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Contact;
