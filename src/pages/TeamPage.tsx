
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import TeamMemberCard, { TeamMember } from '@/components/TeamMemberCard';
import TeamFilters from '@/components/TeamFilters';
import { teamMembers } from '@/data/teamData';
import { Users, Heart, Award, Sparkles } from 'lucide-react';

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredMembers = useMemo(() => {
    if (activeFilter === 'all') return teamMembers;
    return teamMembers.filter((member) => member.category === activeFilter);
  }, [activeFilter]);

  const memberCounts = useMemo(() => ({
    all: teamMembers.length,
    medical: teamMembers.filter((m) => m.category === 'medical').length,
    administrative: teamMembers.filter((m) => m.category === 'administrative').length
  }), []);

  const stats = [
  { icon: Users, label: 'Team Members', value: memberCounts.all, color: 'from-blue-500 to-purple-600' },
  { icon: Heart, label: 'Medical Professionals', value: memberCounts.medical, color: 'from-red-500 to-pink-600' },
  { icon: Award, label: 'Support Staff', value: memberCounts.administrative, color: 'from-green-500 to-teal-600' },
  { icon: Sparkles, label: 'Years Combined Experience', value: '120+', color: 'from-yellow-500 to-orange-600' }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto">

            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Meet Our Team
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-12">
              Our diverse team of medical professionals and support staff are united in their commitment 
              to providing compassionate, innovative mental health care. Each member brings unique expertise 
              and a shared passion for transforming lives through healing.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm border border-white shadow-lg hover:shadow-xl transition-all duration-300">

                    <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </motion.div>);

              })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Team Section */}
      <div className="pb-20">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <TeamFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            memberCounts={memberCounts} />


          {/* Team Grid */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">

            {filteredMembers.map((member, index) =>
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index} />

            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-20 p-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl text-white">

            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h3>
            <p className="text-xl mb-8 text-blue-100">
              Our experienced team is here to guide you towards better mental health and wellness.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300">

              Schedule a Consultation
            </motion.button>
          </motion.div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default TeamPage;