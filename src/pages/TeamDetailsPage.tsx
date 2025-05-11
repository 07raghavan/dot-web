import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image?: string;
  skills: string[];
  social: {
    github?: string;
    linkedin?: string;
  };
}

// Sample team members data - you should replace this with your actual data
const teamMembers: Record<string, TeamMember[]> = {
  'organizer-team-lead': [
    { id: 1, name: 'Chinmayi P', role: '', skills: [], social: {} },
    { id: 2, name: 'Keerthana R', role: '', skills: [], social: {} },
    { id: 3, name: 'Lipika BV', role: '', skills: [], social: {} },
    { id: 4, name: 'Poorna Prajay', role: '', skills: [], social: {} },
    { id: 5, name: 'Sudhindra Shenoy', role: '', skills: [], social: {} },
    { id: 6, name: 'Sameeksha', role: '', skills: [], social: {} }
  ],
  'graphics-design-team-lead': [
    { id: 1, name: 'Kushi J Ramu', role: '', skills: [], social: {} },
    { id: 2, name: 'Sanjana R', role: '', skills: [], social: {} },
    { id: 3, name: 'Keerthana K', role: '', skills: [], social: {} },
    { id: 4, name: 'Shreya M S', role: '', skills: [], social: {} },
    { id: 5, name: 'Shashank', role: '', skills: [], social: {} },
    { id: 6, name: 'Yashaa K N', role: '', skills: [], social: {} }
  ],
  'technical-team-lead': [
    { id: 1, name: 'Harsha g', role: '', skills: [], social: {} },
    { id: 2, name: 'Saurabh kumar', role: '', skills: [], social: {} },
    { id: 3, name: 'Abhilash kr', role: '', skills: [], social: {} },
    { id: 4, name: 'MOHIT', role: '', skills: [], social: {} },
    { id: 5, name: 'Shruti Kumari', role: '', skills: [], social: {} },
    { id: 6, name: 'Prajwal MR', role: '', skills: [], social: {} }
  ],
  'outreach-team-lead': [
    { id: 1, name: 'Rashmi Singh', role: '', skills: [], social: {} },
    { id: 2, name: 'Anusha CM', role: '', skills: [], social: {} },
    { id: 3, name: 'Arbaz khan', role: '', skills: [], social: {} },
    { id: 4, name: 'Maytri nagashree', role: '', skills: [], social: {} },
    { id: 5, name: 'Bhavana', role: '', skills: [], social: {} },
    { id: 6, name: 'Yashashwini', role: '', skills: [], social: {} }
  ],
  'social-media-marketing-lead': [
    { id: 1, name: 'Spandana N', role: '', skills: [], social: {} },
    { id: 2, name: 'Hitaishi', role: '', skills: [], social: {} },
    { id: 3, name: 'Apoorva C', role: '', skills: [], social: {} },
    { id: 4, name: 'Vaibhav Ghogale', role: '', skills: [], social: {} },
    { id: 5, name: 'Prakruthi', role: '', skills: [], social: {} },
    { id: 6, name: 'Chanchal', role: '', skills: [], social: {} }
  ],
  'treasurer': [
    {
      id: 1,
      name: 'Chris Lee',
      role: 'Financial Analyst',
      skills: ['Budgeting', 'Financial Planning', 'Record Keeping'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 2,
      name: 'Amanda Chen',
      role: 'Budget Coordinator',
      skills: ['Budget Management', 'Expense Tracking', 'Financial Analysis'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 3,
      name: 'Robert Kim',
      role: 'Account Manager',
      skills: ['Account Reconciliation', 'Financial Reporting', 'Compliance'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 4,
      name: 'Jessica Wong',
      role: 'Financial Operations',
      skills: ['Operations Management', 'Process Improvement', 'Risk Management'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 5,
      name: 'Mark Thompson',
      role: 'Fundraising Coordinator',
      skills: ['Fundraising', 'Donor Relations', 'Grant Writing'],
      social: {
        linkedin: '#'
      }
    },
    {
      id: 6,
      name: 'Laura Garcia',
      role: 'Financial Secretary',
      skills: ['Documentation', 'Data Entry', 'Administrative Support'],
      social: {
        linkedin: '#'
      }
    }
  ]
};

const TeamDetailsPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const members = teamId ? teamMembers[teamId] : [];
  const teamName = teamId
    ?.split('-')
    .filter(word => word !== 'lead')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const displayTeamName = teamName && teamName.trim().endsWith('Team') ? teamName : `${teamName} Team`;

  if (!teamId || !members) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 text-center">
          <h2 className="text-3xl font-bold mb-8">Team not found</h2>
          <Link 
            to="/" 
            className="text-dot-cyan hover:text-dot transition-colors"
          >
            Return to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ParticleBackground />
      <Navbar />
      <div className="container mx-auto px-4 pt-32">
        <div className="text-center mb-16">
          <Link 
            to="/team" 
            className="inline-block mb-8 text-dot-cyan hover:text-dot transition-colors"
          >
            ← Back to Teams
          </Link>
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-dot-cyan to-dot text-transparent bg-clip-text">
              {displayTeamName}
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((member) => (
            <div 
              key={member.id}
              className="bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-xl rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center space-x-4 mb-4">
                {member.image ? (
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-dot-cyan/20 to-dot/20 flex items-center justify-center">
                    <span className="text-2xl text-foreground/50">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-foreground/70">{member.role}</p>
                </div>
              </div>

              <div className="flex space-x-4">
                {member.social.github && (
                  <a 
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                )}
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/70 hover:text-foreground transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeamDetailsPage; 