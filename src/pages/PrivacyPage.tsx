
import React from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  Database,
  Cookie,
  Settings,
  Phone,
  Mail,
  FileText,
  Clock,
  AlertCircle,
  CheckCircle } from
'lucide-react';

const PrivacyPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const privacySections = [
  {
    title: "Information We Collect",
    icon: Database,
    content: [
    "Personal Information: Name, address, phone number, email address, date of birth, and insurance information",
    "Medical Information: Medical history, current medications, treatment records, and health assessments",
    "Billing Information: Payment details, insurance claims, and billing records",
    "Website Usage: IP address, browser type, pages visited, and interaction data when using our website"]

  },
  {
    title: "How We Use Your Information",
    icon: Settings,
    content: [
    "Providing medical care and TMS treatments as prescribed by your physician",
    "Scheduling appointments and managing your treatment plan",
    "Processing insurance claims and handling billing matters",
    "Communicating with you about your care, appointments, and health information"]

  },
  {
    title: "Information Sharing & Disclosure",
    icon: Eye,
    content: [
    "Healthcare Operations: Sharing with healthcare providers involved in your care",
    "Legal Requirements: Disclosure when required by law or court order",
    "Insurance Processing: Sharing with insurance companies for claims processing",
    "Business Associates: Limited sharing with vendors who support our operations under strict agreements"]

  },
  {
    title: "Data Security Measures",
    icon: Shield,
    content: [
    "Encryption of all electronic health records and payment information",
    "Secure, HIPAA-compliant data storage systems and backup procedures",
    "Regular security audits and staff training on privacy protection",
    "Physical safeguards including locked filing systems and restricted access areas"]

  },
  {
    title: "Your Privacy Rights",
    icon: Lock,
    content: [
    "Right to request access to your personal and medical information",
    "Right to request corrections to inaccurate information in your records",
    "Right to request restrictions on how your information is used or disclosed",
    "Right to request alternative communication methods or locations"]

  },
  {
    title: "Website Privacy & Cookies",
    icon: Cookie,
    content: [
    "We use essential cookies to improve website functionality and user experience",
    "Analytics cookies help us understand how visitors use our website",
    "You can control cookie preferences through your browser settings",
    "No personal health information is collected through website cookies"]

  }];


  const cookieTypes = [
  {
    name: "Essential Cookies",
    purpose: "Required for basic website functionality",
    duration: "Session only",
    canDisable: false
  },
  {
    name: "Analytics Cookies",
    purpose: "Help us understand website usage",
    duration: "Up to 2 years",
    canDisable: true
  },
  {
    name: "Preference Cookies",
    purpose: "Remember your settings and preferences",
    duration: "Up to 1 year",
    canDisable: true
  },
  {
    name: "Marketing Cookies",
    purpose: "Deliver relevant content and ads",
    duration: "Up to 1 year",
    canDisable: true
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
            className="text-center max-w-4xl mx-auto">
            
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Privacy Policy
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Your Privacy is
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Our Priority
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are committed to protecting your personal and medical information. This policy 
              explains how we collect, use, and safeguard your data in compliance with HIPAA 
              and other applicable privacy regulations.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated: March 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/hipaa">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  <FileText className="mr-2 h-5 w-5" />
                  HIPAA Notice
                </Button>
              </Link>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Privacy Questions: 760-760-5675
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-[#572670]">Privacy Protection</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Understanding how we protect your information is essential to building trust. 
              Here's our complete approach to privacy and data protection.
            </p>
          </motion.div>

          <div className="space-y-8">
            {privacySections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>

                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {section.content.map((item, idx) =>
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>);

            })}
          </div>
        </div>
      </section>

      {/* Cookie Policy */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Cookie Policy
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Website <span className="text-[#572670]">Cookie Usage</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about how we use cookies to improve your website experience 
              and how you can control your preferences.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {cookieTypes.map((cookie, index) =>
              <motion.div
                key={cookie.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}>

                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{cookie.name}</h3>
                        <Badge className={`${
                      cookie.canDisable ?
                      'bg-green-100 text-green-800' :
                      'bg-orange-100 text-orange-800'}`
                      }>
                          {cookie.canDisable ? 'Optional' : 'Required'}
                        </Badge>
                      </div>
                      <p className="text-gray-600 mb-3">{cookie.purpose}</p>
                      <div className="space-y-2 text-sm text-gray-500">
                        <div><strong>Duration:</strong> {cookie.duration}</div>
                        <div><strong>Can Disable:</strong> {cookie.canDisable ? 'Yes' : 'No'}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>

            {/* Cookie Banner Link */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center p-8 bg-white rounded-2xl shadow-lg">
              
              <Cookie className="h-12 w-12 text-[#572670] mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Manage Your Cookie Preferences</h3>
              <p className="text-gray-600 mb-6">
                You can update your cookie preferences at any time through our cookie banner 
                or by adjusting your browser settings.
              </p>
              <Button className="bg-[#572670] hover:bg-[#572670]/90">
                <Settings className="mr-2 h-4 w-4" />
                Cookie Settings
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Your Rights & Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-16">
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Your <span className="text-[#572670]">Privacy Rights</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-[#572670]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Patient Rights Under HIPAA</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Access your medical records and request copies</li>
                    <li>• Request amendments to incorrect information</li>
                    <li>• Request restrictions on information disclosure</li>
                    <li>• Request alternative communication methods</li>
                    <li>• File complaints about privacy practices</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">California Privacy Rights</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Right to know what personal information is collected</li>
                    <li>• Right to delete personal information</li>
                    <li>• Right to opt-out of sale of personal information</li>
                    <li>• Right to non-discrimination for exercising rights</li>
                    <li>• Right to correct inaccurate personal information</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Data Breach Notification */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-12 p-6 bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-l-orange-500 rounded-r-xl">
              
              <div className="flex items-start gap-4">
                <AlertCircle className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Data Breach Notification</h3>
                  <p className="text-gray-600">
                    In the unlikely event of a data breach involving your personal or medical information, 
                    we will notify you within 60 days as required by law. We maintain comprehensive 
                    incident response procedures and work with cybersecurity experts to prevent breaches.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-2xl">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Questions or Concerns?</h3>
              <p className="text-gray-600 mb-6">
                Our Privacy Officer is available to address any questions about our privacy 
                practices or help you exercise your privacy rights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-6 py-3">
                  <Phone className="mr-2 h-4 w-4" />
                  Call: 760-760-5675
                </Button>
                <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-6 py-3">
                  <Mail className="mr-2 h-4 w-4" />
                  privacy@karmatms.com
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Privacy Officer: Dr. Sarah Mitchell, Medical Director<br />
                Mailing Address: 123 Medical Plaza, Palm Springs, CA 92262
              </p>
            </motion.div>

            {/* Related Documents */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center">
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Privacy Documents</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/hipaa">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    HIPAA Notice
                  </Button>
                </Link>
                <Link to="/terms">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Terms of Service
                  </Button>
                </Link>
                <Link to="/refund-policy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Refund Policy
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default PrivacyPage;