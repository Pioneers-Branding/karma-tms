
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
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
  Zap
} from 'lucide-react';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('mission');
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

  const values = [
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
    }
  ];

  const treatmentPhilosophy = [
    {
      phase: "Assessment",
      icon: Target,
      title: "Comprehensive Evaluation",
      description: "Detailed assessment of mental health history, current symptoms, and treatment goals using advanced diagnostic tools."
    },
    {
      phase: "Planning",
      icon: Lightbulb,
      title: "Personalized Strategy",
      description: "Custom treatment plans tailored to individual needs, incorporating TMS therapy and complementary approaches."
    },
    {
      phase: "Treatment",
      icon: Zap,
      title: "Innovative Therapy",
      description: "State-of-the-art TMS treatments delivered by experienced professionals in a comfortable, supportive environment."
    },
    {
      phase: "Support",
      icon: Heart,
      title: "Ongoing Care",
      description: "Continuous monitoring, support, and adjustment of treatment plans to ensure lasting recovery and wellbeing."
    }
  ];

  const stats = [
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "95%", label: "Success Rate", icon: Award },
    { number: "15+", label: "Years Experience", icon: Clock },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

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
              className="space-y-8"
            >
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
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                  alt="Karma TMS Clinic Entrance"
                  className="w-full h-96 object-cover"
                />
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

      {/* Interactive Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp}>
              <Badge className="bg-purple-100 text-[#572670] border-purple-200 mb-4">
                Our Philosophy
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Healing Through <span className="text-[#572670]">Innovation</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in the power of personalized, evidence-based treatment combined 
                with genuine human connection to create lasting positive change.
              </p>
            </motion.div>
          </motion.div>

          {/* Interactive Tabs */}
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {['mission', 'vision', 'values'].map((tab) => (
                <Button
                  key={tab}
                  variant={activeTab === tab ? "default" : "outline"}
                  className={`px-8 py-3 text-lg transition-all duration-300 ${
                    activeTab === tab 
                      ? "bg-[#572670] hover:bg-[#572670]/90" 
                      : "border-[#572670]/30 text-[#572670] hover:bg-[#572670]/10"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </Button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-3xl p-8 lg:p-12"
            >
              {activeTab === 'mission' && (
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      To provide accessible, innovative, and compassionate mental health care 
                      that empowers individuals to overcome depression, anxiety, and other 
                      mental health challenges through evidence-based TMS therapy and 
                      comprehensive treatment approaches.
                    </p>
                    <div className="flex items-center gap-3">
                      <Sparkles className="h-6 w-6 text-[#572670]" />
                      <span className="text-[#572670] font-semibold">Transforming lives through innovative care</span>
                    </div>
                  </div>
                  <div className="relative">
                    <img
                      src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png"
                      alt="TMS Treatment Chair"
                      className="w-full h-64 object-contain rounded-2xl"
                    />
                  </div>
                </div>
              )}

              {activeTab === 'vision' && (
                <div className="text-center space-y-6">
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                  <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    To be the leading provider of innovative mental health treatments, 
                    creating a world where mental health challenges are met with 
                    cutting-edge solutions, compassionate care, and hope for recovery.
                  </p>
                  <div className="grid md:grid-cols-3 gap-6 mt-8">
                    {['Innovation', 'Accessibility', 'Excellence'].map((item, index) => (
                      <div key={item} className="bg-white rounded-2xl p-6 shadow-lg">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <span className="text-white font-bold">{index + 1}</span>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{item}</h4>
                        <p className="text-gray-600">
                          {item === 'Innovation' && "Leading-edge treatments and technologies"}
                          {item === 'Accessibility' && "Mental health care available to all"}
                          {item === 'Excellence' && "Highest standards in patient care"}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'values' && (
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Core Values</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => {
                      const IconComponent = value.icon;
                      return (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mb-4">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                          <p className="text-gray-600 text-sm">{value.description}</p>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Treatment Philosophy
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Our Four-Phase <span className="text-[#572670]">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every patient journey follows our proven methodology designed to maximize treatment effectiveness and ensure lasting recovery.
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-6">
              {treatmentPhilosophy.map((phase, index) => {
                const IconComponent = phase.icon;
                return (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="relative"
                    onMouseEnter={() => setHoveredCard(phase.phase)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <Card className={`h-full transition-all duration-500 hover:shadow-2xl ${
                      hoveredCard === phase.phase ? 'scale-105 bg-gradient-to-br from-[#572670]/5 to-purple-100/30' : ''
                    }`}>
                      <CardContent className="p-8">
                        <div className="text-center space-y-4">
                          <div className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center transition-all duration-300 ${
                            hoveredCard === phase.phase 
                              ? 'bg-gradient-to-br from-[#572670] to-purple-500 scale-110' 
                              : 'bg-[#572670]/10'
                          }`}>
                            <IconComponent className={`h-8 w-8 transition-colors ${
                              hoveredCard === phase.phase ? 'text-white' : 'text-[#572670]'
                            }`} />
                          </div>
                          <div>
                            <Badge className={`mb-2 transition-all ${
                              hoveredCard === phase.phase ? 'bg-[#572670] text-white' : 'bg-purple-100 text-[#572670]'
                            }`}>
                              Phase {index + 1}
                            </Badge>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                          </div>
                          <p className="text-gray-600">{phase.description}</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Connection Line */}
                    {index < treatmentPhilosophy.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-[#572670] to-purple-500 z-10">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#572670] rounded-full"></div>
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <Badge className="bg-purple-100 text-[#572670] border-purple-200 mb-4">
              Our Facilities
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              State-of-the-Art <span className="text-[#572670]">Treatment Center</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located in beautiful Palm Springs, our modern facility provides a serene, 
              healing environment with the latest TMS technology and amenities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="space-y-8"
            >
              <div className="space-y-6">
                {[
                  { icon: Stethoscope, title: "Advanced TMS Equipment", desc: "Latest generation TMS devices for optimal treatment precision" },
                  { icon: Shield, title: "Comfortable Treatment Rooms", desc: "Private, relaxing spaces designed for patient comfort" },
                  { icon: Users, title: "Accessible Location", desc: "Convenient Palm Springs location with ample parking" },
                  { icon: Heart, title: "Welcoming Environment", desc: "Warm, professional atmosphere focused on healing" }
                ].map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={feature.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{feature.title}</h3>
                        <p className="text-gray-600">{feature.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b65c46ad-dd56-4c76-bfc8-9fbe25e9b7af.jpg"
                    alt="Palm Springs Location"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                    alt="Clinic Entrance"
                    className="w-full h-32 object-cover rounded-2xl shadow-lg"
                  />
                </div>
                <div className="space-y-4">
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/031012db-9570-41de-bb30-96c6fa482330.png"
                    alt="TMS Treatment Room"
                    className="w-full h-32 object-contain bg-gray-50 rounded-2xl shadow-lg p-4"
                  />
                  <img
                    src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ab4091f6-2a9f-4462-909c-148d587ba88f.jpg"
                    alt="Palm Springs Sunset"
                    className="w-full h-48 object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#572670] to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="text-center text-white"
                >
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-purple-100">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Patient Commitment Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-6">
                Our Commitment
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
                Your Journey to <span className="text-[#572670]">Wellness</span> Starts Here
              </h2>
              <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                At Karma TMS, we're not just treating symptoms – we're partnering with you 
                to reclaim your life, restore your hope, and rediscover your potential. 
                Every step of your journey is supported by our experienced team and 
                innovative treatments.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { icon: CheckCircle, title: "Personalized Care", desc: "Tailored treatment plans for your unique needs" },
                  { icon: Star, title: "Expert Team", desc: "Board-certified professionals with extensive TMS experience" },
                  { icon: Heart, title: "Ongoing Support", desc: "Comprehensive care throughout your recovery journey" }
                ].map((commitment, index) => {
                  const IconComponent = commitment.icon;
                  return (
                    <motion.div
                      key={commitment.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{commitment.title}</h3>
                      <p className="text-gray-600">{commitment.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 760-760-5675
                </Button>
                <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default AboutPage;
