
import React from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { 
  FileText,
  Scale,
  Shield,
  AlertTriangle,
  Clock,
  Users,
  Lock,
  Phone
} from 'lucide-react';

const TermsPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const termsData = [
    {
      title: "Acceptance of Terms",
      icon: FileText,
      content: [
        "By accessing and using Karma TMS services, you agree to be bound by these Terms of Service and all applicable laws and regulations.",
        "If you do not agree with any of these terms, you are prohibited from using or accessing our services.",
        "These terms constitute a legally binding agreement between you and Karma TMS.",
        "We reserve the right to modify these terms at any time, with changes taking effect immediately upon posting."
      ]
    },
    {
      title: "Medical Services & Treatment",
      icon: Shield,
      content: [
        "All medical services are provided by licensed healthcare professionals under appropriate medical supervision.",
        "TMS therapy is a medical procedure that requires proper evaluation, consent, and ongoing medical oversight.",
        "Patients must provide accurate medical history and follow all treatment protocols and instructions.",
        "Treatment outcomes cannot be guaranteed, and individual results may vary based on medical condition and other factors."
      ]
    },
    {
      title: "Patient Responsibilities",
      icon: Users,
      content: [
        "Arrive on time for scheduled appointments or provide at least 24 hours notice for cancellations.",
        "Provide complete and accurate medical history, including current medications and previous treatments.",
        "Follow all pre-treatment and post-treatment instructions provided by medical staff.",
        "Report any adverse effects, concerns, or changes in condition immediately to medical personnel."
      ]
    },
    {
      title: "Payment & Financial Terms",
      icon: Scale,
      content: [
        "Payment is due at the time services are rendered unless other arrangements have been made in advance.",
        "We accept cash, check, credit cards, and work with most major insurance providers.",
        "Patients are responsible for understanding their insurance coverage and any out-of-pocket expenses.",
        "Unpaid balances may be subject to collection procedures after appropriate notice and opportunity to resolve."
      ]
    },
    {
      title: "Confidentiality & Privacy",
      icon: Lock,
      content: [
        "All medical information is protected under HIPAA and will not be disclosed without proper authorization.",
        "We maintain strict confidentiality standards in accordance with federal and state privacy laws.",
        "Patient information may only be shared as necessary for treatment, payment, or healthcare operations.",
        "Patients have the right to request restrictions on how their health information is used or disclosed."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "Our liability is limited to the cost of services provided and does not extend to indirect or consequential damages.",
        "Patients acknowledge that TMS therapy, like all medical treatments, carries inherent risks and potential side effects.",
        "We are not liable for outcomes that result from patient non-compliance with treatment recommendations.",
        "Any legal disputes will be resolved through binding arbitration in accordance with applicable state laws."
      ]
    }
  ];

  const policies = [
    {
      title: "Appointment Policy",
      items: [
        "24-hour cancellation policy for all appointments",
        "No-show fees may apply after repeated missed appointments", 
        "Emergency appointments available during business hours",
        "Telemedicine consultations available when appropriate"
      ]
    },
    {
      title: "Insurance & Billing",
      items: [
        "Insurance verification completed prior to treatment",
        "Pre-authorization obtained when required by insurance",
        "Payment plans available for qualifying patients",
        "Detailed billing statements provided upon request"
      ]
    },
    {
      title: "Medical Records",
      items: [
        "Comprehensive medical records maintained for all patients",
        "Records available to patients upon written request",
        "Records may be transferred to other providers with proper authorization",
        "Records retained according to legal and professional requirements"
      ]
    },
    {
      title: "Quality Assurance",
      items: [
        "Regular quality audits and improvement initiatives",
        "Patient feedback actively solicited and reviewed",
        "Continuing education required for all clinical staff",
        "Equipment maintenance and calibration performed regularly"
      ]
    }
  ];

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
              Terms of Service
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Terms & Conditions
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                of Service
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Please read these terms carefully before using our services. These terms govern your 
              relationship with Karma TMS and outline your rights and responsibilities as a patient.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Last Updated: March 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                <span>Version 2.1</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Terms Sections */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Complete <span className="text-[#572670]">Terms of Service</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These comprehensive terms ensure clear understanding of our mutual 
              rights and obligations in the provision of mental health care services.
            </p>
          </motion.div>

          <div className="space-y-8">
            {termsData.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                      </div>
                      
                      <div className="space-y-4">
                        {section.content.map((item, idx) => (
                          <p key={idx} className="text-gray-600 leading-relaxed">
                            {item}
                          </p>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Policies */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Additional <span className="text-[#572670]">Policies & Procedures</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Supplementary policies that ensure smooth operations and high-quality patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">{policy.title}</h3>
                    <ul className="space-y-3">
                      {policy.items.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12">
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Legal <span className="text-[#572670]">Information</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-[#572670]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Governing Law</h3>
                  <p className="text-gray-600 mb-4">
                    These terms are governed by the laws of the State of California and 
                    federal regulations applicable to healthcare providers.
                  </p>
                  <p className="text-gray-600">
                    Any legal disputes will be resolved in the courts of Riverside County, 
                    California, or through binding arbitration as specified in these terms.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Modifications</h3>
                  <p className="text-gray-600 mb-4">
                    We may update these terms periodically to reflect changes in our 
                    services, legal requirements, or industry best practices.
                  </p>
                  <p className="text-gray-600">
                    Significant changes will be communicated to patients via email or 
                    posted notices in our facility.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Emergency Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-2xl">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About These Terms?</h3>
              <p className="text-gray-600 mb-6">
                If you have questions about these terms or need clarification on any policies, 
                please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-[#572670] hover:bg-[#572670]/90 px-6 py-3">
                    <Phone className="mr-2 h-4 w-4" />
                    Contact Us
                  </Button>
                </Link>
                <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-6 py-3">
                  Call: 760-760-5675
                </Button>
              </div>
            </motion.div>

            {/* Related Documents */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center">
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Documents</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/privacy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Privacy Policy
                  </Button>
                </Link>
                <Link to="/hipaa">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    HIPAA Notice
                  </Button>
                </Link>
                <Link to="/refund-policy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Refund Policy
                  </Button>
                </Link>
                <Link to="/insurance-pricing">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Insurance & Pricing
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Acknowledgment */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 p-6 bg-gray-50 rounded-xl">
              
              <p className="text-sm text-gray-600 text-center">
                <strong>Acknowledgment:</strong> By using Karma TMS services, you acknowledge that you have 
                read, understood, and agree to be bound by these Terms of Service. If you are under 18 years 
                of age, these terms must also be agreed to by your parent or legal guardian.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default TermsPage;
