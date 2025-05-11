import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ParticleBackground from '@/components/ParticleBackground';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Team from '@/components/Team';
import Mentors from '@/components/Mentors';
import Events from '@/components/Events';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ArrowRight } from 'lucide-react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

interface NavBoxProps {
  title: string;
  description: string;
  href: string;
  color: string;
}

const NavBox: React.FC<NavBoxProps> = ({ title, description, href, color }) => {
  return (
    <Link to={href} className="w-full">
      <div className={`glass ${color} rounded-xl p-6 h-full hover:translate-y-[-8px] transition-transform duration-300 flex flex-col`}>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-foreground/70 mb-4 flex-grow">{description}</p>
        <div className="flex items-center text-foreground/80 hover:text-foreground transition-colors">
          <span>Learn more</span>
          <ArrowRight size={16} className="ml-2" />
        </div>
      </div>
    </Link>
  );
};

const Index = () => {
  useDocumentTitle('Developers Of Tomorrow');

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Team />
        <Mentors />
        <Events />
        <Contact />
      </main>
      
      {/* Navigation Boxes */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Explore More</span>
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Dive deeper into each section to learn more about what we offer
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <NavBox 
              title="About Us" 
              description="Learn about our mission, vision, and how we bridge the gap between academia and industry."
              href="/about"
              color="hover:shadow-dot-cyan/20"
            />
            <NavBox 
              title="Our Team" 
              description="Meet our dedicated team of student innovators who make D.O.T. possible."
              href="/team"
              color="hover:shadow-dot/20"
            />
            <NavBox 
              title="Our Mentors" 
              description="Get to know the industry experts and academics who guide our journey."
              href="/mentors"
              color="hover:shadow-dot-cyan/20"
            />
            <NavBox 
              title="Events" 
              description="Check out our upcoming events and workshops to enhance your skills."
              href="/events"
              color="hover:shadow-dot/20"
            />
            <NavBox 
              title="Contact Us" 
              description="Have questions? Want to join or collaborate? Reach out to us."
              href="/contact"
              color="hover:shadow-dot-cyan/20"
            />
          </div>
        </div>
        
        {/* Background element */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full max-h-96 bg-gradient-to-t from-dot/20 to-dot-cyan/10 rounded-full blur-3xl opacity-30 -z-10"></div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
