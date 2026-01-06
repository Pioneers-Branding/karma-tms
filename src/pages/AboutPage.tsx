
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Link } from 'react-router-dom';
import {
  Heart,
  Brain,
  Users,
  Award,
  Shield,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Clock,
  Stethoscope,
  Target,
  Lightbulb,
  Zap,
  Building2,
  Briefcase,
  Mail } from
'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('story');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

  const coreValues = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Every patient receives personalized attention with empathy and understanding at the core of our treatment philosophy."
  },
  {
    icon: Brain,
    title: "Scientific Excellence",
    description: "We utilize the latest research and evidence-based treatments to ensure optimal outcomes for our patients."
  },
  {
    icon: Shield,
    title: "Safe Environment",
    description: "Our clinic provides a secure, welcoming space where patients feel comfortable throughout their healing journey."
  },
  {
    icon: Users,
    title: "Collaborative Approach",
    description: "We work closely with patients, families, and healthcare providers to create comprehensive treatment plans."
  }];


  const technologies = [
  {
    icon: Zap,
    title: "NeuroStar TMS",
    description: "FDA-approved advanced TMS technology for precise, effective treatment of depression and anxiety disorders.",
    features: ["Precise targeting", "Proven efficacy", "Non-invasive"]
  },
  {
    icon: Brain,
    title: "Brain Mapping",
    description: "Advanced neuroimaging techniques to personalize treatment protocols and optimize outcomes.",
    features: ["Personalized protocols", "Real-time monitoring", "Treatment optimization"]
  },
  {
    icon: Target,
    title: "Precision Medicine",
    description: "Individualized treatment plans based on genetic markers, neuroimaging, and clinical assessments.",
    features: ["Genetic testing", "Biomarker analysis", "Customized protocols"]
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#572670]/5 to-purple-100/30" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="space-y-8">

              <div>
                <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
                  About Karma TMS
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Transforming
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                    Mental Health
                  </span>
                  Through Innovation
                </h1>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                At Karma TMS, we're pioneering the future of mental health treatment through 
                cutting-edge TMS therapy, compassionate care, and a commitment to helping 
                patients reclaim their lives from depression, anxiety, and other mental health challenges.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/tms-therapy">
                  <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                    Our Services <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/book">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                    Schedule Consultation
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative">

              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1761733382/patient-in-tms_erqhyf.webp"
                  alt="Karma TMS Clinic Entrance"
                  className="w-full h-96 object-cover" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#572670]/20 to-transparent" />
              </div>
              
              {/* Floating Stats Cards */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-l-4 border-[#572670]">
                <div className="flex items-center gap-3">
                  <Award className="h-8 w-8 text-[#572670]" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">95%</p>
                    <p className="text-sm text-gray-600">Success Rate</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border-l-4 border-purple-500">
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-purple-500" />
                  <div>
                    <p className="text-2xl font-bold text-gray-900">5000+</p>
                    <p className="text-sm text-gray-600">Patients Treated</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Story / Core Values / Technology Showcase */}
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
                Our Journey
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Innovation Through <span className="text-[#572670]">Experience</span>
              </h2>
            </motion.div>
          </motion.div>

          {/* Interactive Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['story', 'values', 'technology'].map((tab) =>
              <Button
                key={tab}
                variant={activeTab === tab ? "default" : "outline"}
                className={`px-8 py-3 text-lg transition-all duration-300 ${
                activeTab === tab ?
                "bg-[#572670] hover:bg-[#572670]/90" :
                "border-[#572670]/30 text-[#572670] hover:bg-[#572670]/10"}`
                }
                onClick={() => setActiveTab(tab)}>
                    {tab === 'story' ? 'Practice Story' :
                tab === 'values' ? 'Core Values' : 'Technology Showcase'}
                </Button>
              )}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-3xl p-8 lg:p-12">

              {activeTab === 'story' &&
              <div className="space-y-8">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
                      <div className="space-y-6">
                        <p className="text-lg text-gray-700 leading-relaxed">
                          Founded in 2015 in the heart of Palm Springs, Karma TMS emerged from a vision to 
                          bring cutting-edge mental health treatment to Southern California. Our founder, 
                          Dr. Keerthy Sunder.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed">
                          What started as a small clinic has grown into a leading center for innovative 
                          mental health care, treating over 5,000 patients and maintaining a 95% success 
                          rate. We've expanded our services to include <Link to="/brain-mapping" className="text-[#572670] hover:underline">brain mapping</Link>, 
                          <Link to="/neurofeedback" className="text-[#572670] hover:underline ml-1">neurofeedback</Link>, and comprehensive 
                          <Link to="/medication-management" className="text-[#572670] hover:underline ml-1">medication management</Link>.
                        </p>
                        <div className="flex items-start gap-3">
                          <Sparkles className="h-6 w-6 text-[#572670] flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-[#572670] font-semibold mb-1">Our Mission Today</p>
                            <p className="text-gray-600">
                              To provide accessible, personalized mental health care that combines the latest 
                              technology with compassionate, human-centered treatment approaches.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="relative">
                      <img
                      src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1761742451/IMG_9537_VSCO_uw6qok.jpg"
                      alt="TMS Treatment Chair"
                      className="w-full h-80 object-contain rounded-2xl bg-gray-50 p-6" />
                    </div>
                  </div>
                </div>
              }

              {activeTab === 'values' &&
              <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {coreValues.map((value, index) => {
                    const IconComponent = value.icon;
                    return (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">

                          <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.description}</p>
                        </motion.div>);

                  })}
                  </div>
                </div>
              }

              {activeTab === 'technology' &&
              <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technology Showcase</h3>
                  <div className="grid lg:grid-cols-3 gap-8">
                    {technologies.map((tech, index) => {
                    const IconComponent = tech.icon;
                    return (
                      <motion.div
                        key={tech.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                          
                          <div className="w-16 h-16 bg-gradient-to-br from-[#572670] to-purple-500 rounded-2xl flex items-center justify-center mb-6">
                            <IconComponent className="h-8 w-8 text-white" />
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 mb-3">{tech.title}</h4>
                          <p className="text-gray-600 mb-4">{tech.description}</p>
                          <div className="space-y-2">
                            {tech.features.map((feature, idx) =>
                          <div key={idx} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-[#572670]" />
                                <span className="text-sm text-gray-700">{feature}</span>
                              </div>
                          )}
                          </div>
                        </motion.div>);

                  })}
                  </div>
                  <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">
                      Learn more about our specific treatment options and how our technology can help you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Link to="/tms-therapy">
                        <Button className="bg-[#572670] hover:bg-[#572670]/90">
                          Explore TMS Therapy
                        </Button>
                      </Link>
                      <Link to="/brain-mapping">
                        <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                          Brain Mapping Info
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              }
            </motion.div>
          </div>
        </div>
      </section>

      {/* Careers CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}>

              <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-6">
                Join Our Team
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Build Your Career in <span className="text-[#572670]">Mental Health</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                Join a dynamic team of mental health professionals dedicated to innovative patient care. 
                We offer competitive benefits, continuing education opportunities, and a supportive 
                work environment where you can make a real difference in patients' lives.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                { icon: Building2, title: "Modern Facility", desc: "State-of-the-art clinic with latest technology" },
                { icon: Users, title: "Collaborative Team", desc: "Work alongside experienced professionals" },
                { icon: Briefcase, title: "Growth Opportunities", desc: "Professional development and advancement paths" }].
                map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">

                      <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </motion.div>);

                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  View Open Positions
                </Button>
                <Link to="/interns">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                    Internship Program
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#572670] to-purple-600">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-white">
            
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Healing Journey?</h3>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Contact us today to learn more about our innovative TMS treatments and how we can help you reclaim your life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[#572670] hover:bg-gray-100 px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 760-760-5675
              </Button>
              <Link to="/book">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 px-8 py-3 text-lg bg-black text-white">
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default AboutPage;