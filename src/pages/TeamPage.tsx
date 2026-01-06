import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import TeamMemberCard from '@/components/TeamMemberCard';
import TeamFilters from '@/components/TeamFilters';
import { teamMembers } from '@/data/teamData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Building2 } from 'lucide-react';

const TeamPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  // Filter team members based on active filter
  const filteredMembers = activeFilter === 'all' ?
  teamMembers :
  teamMembers.filter((member) => member.category === activeFilter);

  // Calculate member counts for filters
  const memberCounts = {
    all: teamMembers.length,
    medical: teamMembers.filter((m) => m.category === 'medical').length,
    administrative: teamMembers.filter((m) => m.category === 'administrative').length
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section
        className="pt-24 pb-16 bg-cover bg-center bg-no-repeat relative"
        style={{ backgroundImage: "url('https://res.cloudinary.com/de4kw1t2i/image/upload/v1765537416/-7261_itcxch.png')" }}>

        <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-purple-50/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12">
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Our Medical Team
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Expert
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Clinical Professionals
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Our board-certified physicians and mental health professionals bring decades of combined 
              experience in TMS therapy, psychiatry, and innovative mental health treatments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Team Image Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-8">
              Our Team
            </h2>
            <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765537415/-7333_i1ejb8.png"
                alt="Our Team"
                className="w-full h-auto object-cover" />

            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/50">
        <div className="container mx-auto px-4">
          <TeamFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            memberCounts={memberCounts} />

        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) =>
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index} />

            )}
          </motion.div>

          {/* No results message */}
          {filteredMembers.length === 0 &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12">
              <p className="text-xl text-gray-600">
                No team members found in this category.
              </p>
            </motion.div>
          }
        </div>
      </section>

      {/* Contact Team CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Meet Your Care Team?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to discuss your treatment options with our experienced medical professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:760-760-5675">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 760-760-5675
                </Button>
              </a>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                  <Building2 className="mr-2 h-5 w-5" />
                  Book Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default TeamPage;