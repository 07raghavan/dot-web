import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, MapPin, Clock, Users } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  image: string;
  capacity: number;
  fullDescription: string;
  registrationLink?: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Python for Data Science Workshop",
    description: "Learn Python fundamentals and data analysis libraries",
    date: "March 15, 2024",
    time: "10:00 AM - 2:00 PM",
    location: "Room 301, CSE Department",
    image: "/events/python-workshop.jpg",
    capacity: 30,
    fullDescription: "Join us for an intensive workshop on Python programming for data science. This hands-on session will cover:\n\n• Python basics and data structures\n• NumPy and Pandas for data manipulation\n• Data visualization with Matplotlib and Seaborn\n• Basic statistical analysis\n\nBring your laptop with Python installed. No prior experience required!",
    registrationLink: "https://forms.google.com/..."
  },
  {
    id: 2,
    title: "AI & Machine Learning Symposium",
    description: "Explore the latest trends in AI and ML",
    date: "March 20, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Main Auditorium",
    image: "/events/ai-symposium.jpg",
    capacity: 100,
    fullDescription: "A comprehensive symposium featuring:\n\n• Keynote speeches from industry experts\n• Panel discussion on AI ethics\n• Latest research presentations\n• Networking session\n\nOpen to all students interested in AI and machine learning.",
    registrationLink: "https://forms.google.com/..."
  },
  {
    id: 3,
    title: "Web Development Bootcamp",
    description: "Master modern web development technologies",
    date: "March 25, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Computer Lab 2",
    image: "/events/web-dev.jpg",
    capacity: 25,
    fullDescription: "A full-day bootcamp covering:\n\n• HTML5 and CSS3 fundamentals\n• JavaScript ES6+ features\n• React.js basics\n• Building responsive layouts\n• Deployment strategies\n\nPrerequisites: Basic programming knowledge",
    registrationLink: "https://forms.google.com/..."
  }
];

const EventCard: React.FC<{ event: Event; onClick: () => void }> = ({ event, onClick }) => {
  return (
    <div 
      className="glass rounded-xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <div className="aspect-video relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gradient">{event.title}</h3>
        <p className="text-white/70 mb-4">{event.description}</p>
        
        <div className="space-y-2">
          <div className="flex items-center text-white/60">
            <Calendar size={16} className="mr-2" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center text-white/60">
            <Clock size={16} className="mr-2" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center text-white/60">
            <MapPin size={16} className="mr-2" />
            <span>{event.location}</span>
          </div>
          <div className="flex items-center text-white/60">
            <Users size={16} className="mr-2" />
            <span>Capacity: {event.capacity} participants</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const EventModal: React.FC<{ event: Event | null; onClose: () => void }> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <Dialog open={!!event} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl bg-background/95 backdrop-blur-xl border border-white/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gradient">{event.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="aspect-video relative rounded-lg overflow-hidden mb-6">
            <img 
              src={event.image} 
              alt={event.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center text-white/70">
              <Calendar size={18} className="mr-2" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center text-white/70">
              <Clock size={18} className="mr-2" />
              <span>{event.time}</span>
            </div>
            <div className="flex items-center text-white/70">
              <MapPin size={18} className="mr-2" />
              <span>{event.location}</span>
            </div>
            <div className="flex items-center text-white/70">
              <Users size={18} className="mr-2" />
              <span>Capacity: {event.capacity} participants</span>
            </div>
          </div>
          
          <div className="prose prose-invert max-w-none">
            <p className="whitespace-pre-line text-white/80">{event.fullDescription}</p>
          </div>
          
          {event.registrationLink && (
            <div className="mt-6">
              <a 
                href={event.registrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-dot-cyan to-dot text-white hover:opacity-90 transition-opacity"
              >
                Register Now
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  return (
    <section id="events" className="py-20 sm:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Upcoming Events</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Join us for workshops, hackathons, and tech talks designed to enhance your skills
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {events.map((event) => (
            <EventCard 
              key={event.id} 
              event={event} 
              onClick={() => setSelectedEvent(event)} 
            />
          ))}
        </div>
      </div>
      
      <EventModal 
        event={selectedEvent} 
        onClose={() => setSelectedEvent(null)} 
      />
      
      {/* Background element */}
      <div className="absolute bottom-0 left-0 w-full max-w-4xl h-full max-h-96 bg-gradient-to-t from-dot-cyan/20 to-dot/10 rounded-full blur-3xl opacity-30 -z-10"></div>
    </section>
  );
};

export default Events;
