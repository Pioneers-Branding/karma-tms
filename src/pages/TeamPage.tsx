import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import TeamMemberCard from '@/components/TeamMemberCard';
import { teamMembers } from '@/data/teamData';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Phone, Building2 } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
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

      {/* Team Members Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) =>
            <TeamMemberCard
              key={member.id}
              member={member}
              index={index} />

            )}
          </motion.div>
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
              <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 760-760-5675
              </Button>
              <Button
                variant="outline"
                className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg"
                onClick={() => window.open('/book', '_self')}>
                <Building2 className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default TeamPage;