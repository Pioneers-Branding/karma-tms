
import React from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Award,
  Building2,
  Users,
  ExternalLink,
  Quote,
  Star,
  Calendar,
  BookOpen,
  Microscope,
  GraduationCap } from
'lucide-react';

const AffiliationsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // Research Partners Data
  const researchPartners = [
  {
    name: "Stanford University Medical Center",
    type: "Research Institution",
    logo: "https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwZnJvbSUyMFVuc3BsYXNoJTIwd2l0aCUyMGElMjB3aWR0aCUyMG9mJTIwMjAwJTIwcGl4ZWxzJTIwYW5kJTIwYSUyMGhlaWdodCUyMG9mJTIwMTAwJTIwcGl4ZWxzLnxlbnwwfHx8fDE3NTYxMjcyNTB8MA&ixlib=rb-4.1.0&q=80&w=200$w=200",
    description: "Collaborative TMS research on treatment-resistant depression and innovative protocols.",
    partnership: "Active Research Collaboration",
    projects: ["TMS Protocol Optimization", "Neuroplasticity Studies", "Patient Outcome Research"]
  },
  {
    name: "UCLA Neuropsychiatric Institute",
    type: "Academic Medical Center",
    logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=200&h=100&fit=crop",
    description: "Joint clinical trials and training programs for advancing TMS therapy techniques.",
    partnership: "Clinical Trial Partnership",
    projects: ["Multi-site Clinical Trials", "Resident Training", "Protocol Development"]
  },
  {
    name: "Mayo Clinic",
    type: "Medical Institution",
    logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=200&h=100&fit=crop",
    description: "Collaborative research on brain mapping technologies and personalized treatment approaches.",
    partnership: "Technology Partnership",
    projects: ["Brain Mapping Research", "Personalized Medicine", "Technology Innovation"]
  },
  {
    name: "National Institute of Mental Health",
    type: "Federal Research Agency",
    logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=200&h=100&fit=crop",
    description: "Federal research grants supporting innovative TMS applications and outcome studies.",
    partnership: "Grant Recipient",
    projects: ["NIMH Research Grants", "Population Health Studies", "Treatment Efficacy Research"]
  },
  {
    name: "Johns Hopkins School of Medicine",
    type: "Medical School",
    logo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=100&fit=crop",
    description: "Academic partnership for medical education and advanced psychiatric research.",
    partnership: "Educational Collaboration",
    projects: ["Medical Student Rotations", "Research Publications", "Continuing Education"]
  },
  {
    name: "American Psychiatric Association",
    type: "Professional Organization",
    logo: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=100&fit=crop",
    description: "Professional development and standards setting for TMS therapy practice.",
    partnership: "Professional Membership",
    projects: ["Practice Guidelines", "Professional Development", "Standards Setting"]
  }];


  // Conference Logos Data
  const conferences = [
  {
    name: "American Psychiatric Association Annual Meeting",
    year: "2024",
    role: "Keynote Speaker",
    logo: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=120&h=80&fit=crop",
    presentation: "Innovations in TMS Therapy"
  },
  {
    name: "International Society for TMS and TES",
    year: "2024",
    role: "Research Presenter",
    logo: "https://images.unsplash.com/photo-1560472355-536de3962603?w=120&h=80&fit=crop",
    presentation: "Patient Outcome Studies"
  },
  {
    name: "World Congress of Psychiatry",
    year: "2023",
    role: "Panel Discussant",
    logo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=120&h=80&fit=crop",
    presentation: "Global Mental Health Treatment"
  },
  {
    name: "Society of Biological Psychiatry",
    year: "2023",
    role: "Research Poster",
    logo: "https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwZnJvbSUyMFVuc3BsYXNoJTIwd2l0aCUyMGElMjB3aWR0aCUyMG9mJTIwMTIwJTIwcGl4ZWxzJTIwYW5kJTIwYSUyMGhlaWdodCUyMG9mJTIwODAlMjBwaXhlbHMufGVufDB8fHx8MTc1NjEyNzI0N3ww&ixlib=rb-4.1.0&q=80&w=200$w=120",
    presentation: "Brain Stimulation Advances"
  },
  {
    name: "Clinical TMS Society Annual Conference",
    year: "2024",
    role: "Workshop Leader",
    logo: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=120&h=80&fit=crop",
    presentation: "Advanced TMS Techniques"
  },
  {
    name: "American College of Neuropsychopharmacology",
    year: "2023",
    role: "Symposium Speaker",
    logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=120&h=80&fit=crop",
    presentation: "Neuropharmacology of TMS"
  }];


  // Press Quotes Data
  const pressQuotes = [
  {
    quote: "Karma TMS has established itself as a leader in innovative mental health treatment, setting new standards for patient care and clinical excellence.",
    source: "Psychology Today",
    author: "Dr. Jennifer Williams",
    title: "Senior Medical Editor",
    date: "March 2024",
    publication: "Psychology Today Magazine"
  },
  {
    quote: "The groundbreaking research coming from Karma TMS is reshaping our understanding of treatment-resistant depression and the potential of brain stimulation therapies.",
    source: "Medical News Today",
    author: "Sarah Johnson, MD",
    title: "Contributing Medical Writer",
    date: "February 2024",
    publication: "Medical News Today"
  },
  {
    quote: "Dr. Mitchell and her team at Karma TMS represent the future of psychiatry—combining cutting-edge technology with compassionate, personalized patient care.",
    source: "Psychiatric Times",
    author: "Michael Roberts, PhD",
    title: "Clinical Research Director",
    date: "January 2024",
    publication: "Psychiatric Times"
  },
  {
    quote: "Karma TMS's innovative approach to TMS therapy has achieved remarkable success rates, offering hope to patients who haven't responded to traditional treatments.",
    source: "HealthLine",
    author: "Lisa Chen, MSW",
    title: "Mental Health Specialist",
    date: "December 2023",
    publication: "HealthLine"
  },
  {
    quote: "The clinical outcomes at Karma TMS speak for themselves—this is precision medicine at its finest, delivered with exceptional care and expertise.",
    source: "Harvard Health Review",
    author: "Dr. Robert Thompson",
    title: "Professor of Psychiatry",
    date: "November 2023",
    publication: "Harvard Health Review"
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#572670]/5 to-purple-100/30" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center">
            
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Professional Affiliations
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Our Professional
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Network & Recognition
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Karma TMS maintains strong partnerships with leading research institutions, 
              participates in major conferences, and receives recognition from respected 
              medical publications for our innovative approach to mental health treatment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                <BookOpen className="mr-2 h-5 w-5" />
                View Publications
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                <Building2 className="mr-2 h-5 w-5" />
                Research Partnerships
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Research Partners Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16">
            
            <motion.div variants={fadeInUp}>
              <Badge className="bg-purple-100 text-[#572670] border-purple-200 mb-4">
                Research Partnerships
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Leading <span className="text-[#572670]">Research Collaborations</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We partner with top-tier institutions to advance the field of mental health 
                treatment through innovative research and clinical trials.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {researchPartners.map((partner, index) =>
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>

                <Card className="h-full hover:shadow-2xl transition-all duration-500 group">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      {/* Logo */}
                      <div className="relative overflow-hidden rounded-lg">
                        <img
                        src={partner.logo}
                        alt={partner.name}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-500" />

                      </div>

                      {/* Institution Info */}
                      <div>
                        <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-2">
                          {partner.type}
                        </Badge>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{partner.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{partner.description}</p>
                      </div>

                      {/* Partnership Type */}
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Microscope className="h-4 w-4 text-[#572670]" />
                          <span className="font-semibold text-gray-900 text-sm">{partner.partnership}</span>
                        </div>
                      </div>

                      {/* Projects */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Active Projects</h4>
                        <ul className="space-y-1">
                          {partner.projects.map((project, idx) =>
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                              <Award className="h-3 w-3 text-[#572670] flex-shrink-0 mt-0.5" />
                              {project}
                            </li>
                        )}
                        </ul>
                      </div>

                      {/* Link */}
                      <Button
                      variant="outline"
                      className="w-full border-[#572670] text-[#572670] hover:bg-[#572670]/10"
                      onClick={() => window.open('#', '_blank')}>

                        <ExternalLink className="h-4 w-4 mr-2" />
                        Learn More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Conference Logos */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Conference Presentations
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Speaking at <span className="text-[#572670]">Major Conferences</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team regularly presents research findings and shares expertise at 
              prestigious medical conferences worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conferences.map((conference, index) =>
            <motion.div
              key={conference.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group">

                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <img
                      src={conference.logo}
                      alt={conference.name}
                      className="w-16 h-12 object-cover rounded-lg flex-shrink-0" />

                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg mb-1">{conference.name}</h3>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-4 w-4 text-[#572670]" />
                          <span className="text-sm text-gray-600">{conference.year}</span>
                        </div>
                        <Badge className="bg-[#572670]/10 text-[#572670] text-xs mb-2">
                          {conference.role}
                        </Badge>
                        <p className="text-sm text-gray-600">{conference.presentation}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Press Quotes */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <Badge className="bg-purple-100 text-[#572670] border-purple-200 mb-4">
              Press Recognition
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What the <span className="text-[#572670]">Media Says</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from leading medical publications and healthcare journalists 
              for our innovative approach and clinical excellence.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {pressQuotes.map((press, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}>

                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <Quote className="h-8 w-8 text-[#572670] opacity-50" />
                      
                      <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                        "{press.quote}"
                      </blockquote>

                      <div className="flex items-start justify-between pt-6 border-t">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{press.author}</div>
                          <div className="text-sm text-gray-600">{press.title}</div>
                          <div className="text-sm text-[#572670] font-medium mt-1">{press.publication}</div>
                        </div>
                        <div className="text-sm text-gray-500 ml-4">{press.date}</div>
                      </div>

                      <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map((star) =>
                      <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                      )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Join Our Network CTA */}
      <section className="py-20 bg-gradient-to-r from-[#572670] to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white">
            
            <h3 className="text-4xl font-bold mb-6">Interested in Collaboration?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're always open to new research partnerships, speaking opportunities, 
              and collaborations that advance mental health treatment.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#572670] hover:bg-gray-100 px-8 py-3 text-lg">
                <Users className="mr-2 h-5 w-5" />
                Partnership Inquiries
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg">
                <GraduationCap className="mr-2 h-5 w-5" />
                Speaking Requests
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default AffiliationsPage;