
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import TeamMemberCard, { TeamMember } from '@/components/TeamMemberCard';
import TeamFilters from '@/components/TeamFilters';
import { teamMembers } from '@/data/teamData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Users, 
  Heart, 
  Award, 
  Sparkles,
  Stethoscope, 
  GraduationCap, 
  Star,
  Linkedin,
  ExternalLink,
  Building2,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

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

  // Doctor Profile Cards Data
  const doctorProfiles = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      title: "Medical Director & Founder",
      credentials: ["MD", "Board Certified Psychiatrist", "TMS Specialist"],
      specialties: ["Depression", "Anxiety", "PTSD", "TMS Therapy"],
      education: "UCLA Medical School",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Mitchell founded Karma TMS with a vision to bring innovative mental health treatment to Southern California. She completed her residency at UCLA and has been pioneering TMS therapy protocols for over 15 years.",
      achievements: [
        "Over 3,000 successful TMS treatments",
        "Published researcher in TMS efficacy",
        "American Psychiatric Association member"
      ],
      linkedin: "#",
      availability: "Monday - Friday",
      location: "Palm Springs"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      title: "Senior Psychiatrist",
      credentials: ["MD", "PhD", "Board Certified", "Research Fellow"],
      specialties: ["Bipolar Disorder", "Treatment-Resistant Depression", "Research"],
      education: "Stanford Medical School",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face",
      bio: "Dr. Chen specializes in complex psychiatric conditions and leads our research initiatives. His work focuses on optimizing TMS protocols for treatment-resistant cases.",
      achievements: [
        "Lead researcher on 5+ clinical trials",
        "Author of 20+ peer-reviewed publications",
        "FDA consultant for TMS protocols"
      ],
      linkedin: "#",
      availability: "Tuesday - Saturday",
      location: "Palm Springs"
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      title: "Child & Adolescent Psychiatrist",
      credentials: ["MD", "Board Certified", "Child Psychiatry Fellowship"],
      specialties: ["Adolescent Depression", "Anxiety Disorders", "Family Therapy"],
      education: "Johns Hopkins School of Medicine",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1735835138452-60dad7553022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwZmFjZSUyQyUyMGxpa2VseSUyMGElMjBwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdC58ZW58MHx8fHwxNzU2MTI3MjQ1fDA&ixlib=rb-4.1.0&q=80&w=200$w=400",
      bio: "Dr. Rodriguez brings specialized expertise in treating young adults and adolescents. She adapts TMS protocols specifically for younger patients and their unique needs.",
      achievements: [
        "Specialist in adolescent TMS adaptation",
        "Youth mental health advocate",
        "Clinical instructor at local medical schools"
      ],
      linkedin: "#",
      availability: "Monday - Thursday",
      location: "Palm Springs"
    }
  ];

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
            className="text-center mb-12"
          >
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

      {/* Doctor Profile Cards */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our <span className="text-[#572670]">Leading Physicians</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Board-certified doctors with specialized training in TMS therapy and mental health treatment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {doctorProfiles.map((doctor, index) => (
              <motion.div
                key={doctor.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    {/* Doctor Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* LinkedIn Button */}
                      <div className="absolute top-4 right-4">
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700 text-white p-2"
                          onClick={() => window.open(doctor.linkedin, '_blank')}
                        >
                          <Linkedin className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Name and Title Overlay */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-xl font-bold">{doctor.name}</h3>
                        <p className="text-blue-200">{doctor.title}</p>
                      </div>
                    </div>

                    <div className="p-6 space-y-6">
                      {/* Credentials Badges */}
                      <div className="flex flex-wrap gap-2">
                        {doctor.credentials.map((credential, idx) => (
                          <Badge
                            key={idx}
                            className="bg-[#572670]/10 text-[#572670] border-[#572670]/20"
                          >
                            {credential}
                          </Badge>
                        ))}
                      </div>

                      {/* Bio */}
                      <p className="text-gray-600 text-sm leading-relaxed">{doctor.bio}</p>

                      {/* Key Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <GraduationCap className="h-5 w-5 text-[#572670] mx-auto mb-1" />
                          <div className="text-sm font-semibold text-gray-900">{doctor.education}</div>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <Star className="h-5 w-5 text-[#572670] mx-auto mb-1" />
                          <div className="text-sm font-semibold text-gray-900">{doctor.experience}</div>
                        </div>
                      </div>

                      {/* Specialties */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Specialties</h4>
                        <div className="flex flex-wrap gap-1">
                          {doctor.specialties.map((specialty, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Achievements</h4>
                        <ul className="space-y-1">
                          {doctor.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <Award className="h-3 w-3 text-[#572670] flex-shrink-0 mt-0.5" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Contact Actions */}
                      <div className="flex gap-2 pt-4 border-t">
                        <Button
                          className="flex-1 bg-[#572670] hover:bg-[#572670]/90 text-sm"
                          onClick={() => window.open('/book', '_self')}
                        >
                          <Building2 className="h-4 w-4 mr-2" />
                          Book Appointment
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-[#572670] text-[#572670]"
                          onClick={() => window.open(doctor.linkedin, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Availability Info */}
                      <div className="text-center p-3 bg-[#572670]/5 rounded-lg">
                        <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
                          <MapPin className="h-4 w-4 text-[#572670]" />
                          <span>{doctor.location} • {doctor.availability}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinical Team Stats */}
      <section className="py-16 bg-gradient-to-r from-[#572670] to-purple-600">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center text-white">
            {[
              { icon: Stethoscope, stat: "40+", label: "Years Combined Experience" },
              { icon: Award, stat: "100%", label: "Board Certified" },
              { icon: Users, stat: "5000+", label: "Patients Successfully Treated" },
              { icon: Heart, stat: "95%", label: "Patient Satisfaction Rate" }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold">{item.stat}</div>
                  <div className="text-purple-100">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Support Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Complete <span className="text-[#572670]">Care Team</span>
            </h2>
            <p className="text-lg text-gray-600">
              Supporting staff and specialists who ensure your complete care experience.
            </p>
          </motion.div>

          {/* Team Section Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: Users, label: 'Team Members', value: memberCounts.all, color: 'from-blue-500 to-purple-600' },
              { icon: Heart, label: 'Medical Professionals', value: memberCounts.medical, color: 'from-red-500 to-pink-600' },
              { icon: Award, label: 'Support Staff', value: memberCounts.administrative, color: 'from-green-500 to-teal-600' },
              { icon: Sparkles, label: 'Years Combined Experience', value: '120+', color: 'from-yellow-500 to-orange-600' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}>
                    <Icon className="text-white" size={24} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Filters */}
          <TeamFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
            memberCounts={memberCounts}
          />

          {/* Team Grid */}
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center"
          >
            {filteredMembers.map((member, index) => (
              <TeamMemberCard
                key={member.id}
                member={member}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Team CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
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
                onClick={() => window.open('/book', '_self')}
              >
                <Building2 className="mr-2 h-5 w-5" />
                Book Consultation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TeamPage;
