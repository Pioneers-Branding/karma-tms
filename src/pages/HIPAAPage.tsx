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
  Download,
  Shield,
  Eye,
  Lock,
  Users,
  AlertCircle,
  Clock,
  Phone,
  Mail,
  CheckCircle,
  Info,
  Scale,
  BookOpen,
  UserCheck
} from 'lucide-react';

const HIPAAPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const handlePDFDownload = () => {
    // Create a downloadable PDF link - in real implementation, this would link to an actual PDF
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,HIPAA Notice of Privacy Practices - Full PDF document would be available here';
    link.download = 'Karma_TMS_HIPAA_Notice.pdf';
    link.click();
  };

  const hipaaRights = [
    {
      title: "Access Your Health Information",
      icon: Eye,
      description: "You have the right to inspect and obtain copies of your health records, with some limited exceptions.",
      details: [
        "Request copies of medical records, billing records, and other health information",
        "We may charge a reasonable fee for copying and mailing costs",
        "We will respond to your request within 30 days",
        "In certain circumstances, we may deny access but will provide written explanation"
      ]
    },
    {
      title: "Request Amendments",
      icon: FileText,
      description: "You can ask us to amend health information that you believe is incorrect or incomplete.",
      details: [
        "Submit amendment requests in writing with supporting documentation",
        "We will respond within 60 days of receiving your request",
        "If denied, you have the right to file a statement of disagreement",
        "Approved amendments will be shared with relevant parties"
      ]
    },
    {
      title: "Request Restrictions",
      icon: Lock,
      description: "You may request limits on how we use or disclose your health information.",
      details: [
        "Request restrictions on disclosures to family members or friends",
        "Limit information shared for treatment, payment, or operations",
        "We are not required to agree to all restrictions",
        "Any agreed restrictions will be documented and followed"
      ]
    },
    {
      title: "Alternative Communications",
      icon: Mail,
      description: "You can request that we contact you in a specific way or at a certain location.",
      details: [
        "Request communications at alternative addresses or phone numbers",
        "Specify preferred method of contact (phone, email, mail)",
        "We will accommodate reasonable requests",
        "May require information about how payment will be handled"
      ]
    },
    {
      title: "Accounting of Disclosures",
      icon: BookOpen,
      description: "You can receive a list of certain disclosures we have made of your health information.",
      details: [
        "Covers disclosures made for purposes other than treatment, payment, or operations",
        "Includes dates, recipients, and purposes of disclosures",
        "First accounting in any 12-month period is free",
        "Additional requests may incur reasonable fees"
      ]
    },
    {
      title: "File Complaints",
      icon: AlertCircle,
      description: "You have the right to file complaints about our privacy practices.",
      details: [
        "File complaints with us or with the Secretary of Health and Human Services",
        "We will not retaliate against you for filing a complaint",
        "Complaints should be submitted in writing when possible",
        "We will investigate and respond to all complaints promptly"
      ]
    }
  ];

  const howWeUseInfo = [
    {
      category: "Treatment",
      icon: Users,
      examples: [
        "Coordinating your care among healthcare providers",
        "Consulting with specialists about your condition",
        "Sharing information with healthcare team members",
        "Emergency treatment situations"
      ]
    },
    {
      category: "Payment",
      icon: Scale,
      examples: [
        "Processing insurance claims and authorizations",
        "Billing and collection activities",
        "Determining coverage and benefits",
        "Utilization review and quality assurance"
      ]
    },
    {
      category: "Healthcare Operations",
      icon: Shield,
      examples: [
        "Quality assessment and improvement activities",
        "Staff training and competency evaluation",
        "Business planning and development",
        "Compliance and regulatory oversight"
      ]
    }
  ];

  const specialSituations = [
    {
      title: "Required by Law",
      description: "We may disclose health information when required by federal, state, or local law."
    },
    {
      title: "Public Health Activities",
      description: "Reporting communicable diseases, adverse drug reactions, or product recalls to public health authorities."
    },
    {
      title: "Abuse or Neglect",
      description: "Reporting suspected abuse, neglect, or domestic violence to appropriate authorities as required by law."
    },
    {
      title: "Legal Proceedings",
      description: "Responding to court orders, subpoenas, or administrative requests in legal proceedings."
    },
    {
      title: "Law Enforcement",
      description: "Limited disclosures to law enforcement for specific purposes as permitted by law."
    },
    {
      title: "Serious Threats",
      description: "Preventing or lessening a serious and imminent threat to health or safety."
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
              HIPAA Privacy Notice
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Notice of
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Privacy Practices
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              This notice describes how medical information about you may be used and disclosed 
              and how you can access this information. Please review it carefully and keep a copy for your records.
            </p>
            <div className="flex items-center justify-center gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Effective: March 1, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>HIPAA Compliant</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={handlePDFDownload}
                className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                <Download className="mr-2 h-5 w-5" />
                Download PDF
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Questions: 760-760-5675
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#572670]">Privacy Commitment</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are committed to protecting the privacy of your health information and 
              using it only as necessary to provide quality healthcare services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Protected Health Information (PHI)</h3>
                    <p className="text-gray-600 mb-6">
                      This notice applies to all records of your care generated by Karma TMS, whether created by our staff, 
                      physicians, or business associates. Your health information may include:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Medical history and records</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Treatment plans and progress notes</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Laboratory and test results</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Billing and insurance information</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Demographic and contact information</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">Communication preferences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Use Information */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How We <span className="text-[#572670]">Use Your Information</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We use and disclose your health information for the following primary purposes:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {howWeUseInfo.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>

                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {category.examples.map((example, idx) =>
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{example}</span>
                          </li>
                        )}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Special Situations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="max-w-4xl mx-auto">
            
            <Card>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <AlertCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Special Situations</h3>
                </div>
                <p className="text-gray-600 mb-6">
                  We may also use or disclose your health information in the following special situations:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  {specialSituations.map((situation, index) => (
                    <div key={index} className="p-4 border-l-4 border-l-[#572670] bg-gray-50 rounded-r-lg">
                      <h4 className="font-bold text-gray-900 mb-2">{situation.title}</h4>
                      <p className="text-gray-600 text-sm">{situation.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Your Rights Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Your <span className="text-[#572670]">Privacy Rights</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Under HIPAA, you have specific rights regarding your health information. 
              These rights are designed to give you control over your personal health data.
            </p>
          </motion.div>

          <div className="space-y-8">
            {hipaaRights.map((right, index) => {
              const IconComponent = right.icon;
              return (
                <motion.div
                  key={right.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>

                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-gray-900 mb-3">{right.title}</h3>
                          <p className="text-gray-600 mb-6">{right.description}</p>
                          <div className="grid md:grid-cols-2 gap-4">
                            {right.details.map((detail, idx) => (
                              <div key={idx} className="flex items-start gap-3">
                                <Info className="h-4 w-4 text-[#572670] flex-shrink-0 mt-1" />
                                <span className="text-gray-600 text-sm">{detail}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12">
              
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                <span className="text-[#572670]">Contact</span> Information
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-l-4 border-l-[#572670]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <UserCheck className="h-8 w-8 text-[#572670]" />
                    <h3 className="text-xl font-bold text-gray-900">Privacy Officer</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>Dr. Sarah Mitchell, Medical Director</strong></p>
                    <p>Karma TMS</p>
                    <p>123 Medical Plaza<br />Palm Springs, CA 92262</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Phone className="h-4 w-4" />
                      <span>760-760-5675</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>privacy@karmatms.com</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <Shield className="h-8 w-8 text-purple-500" />
                    <h3 className="text-xl font-bold text-gray-900">Federal Complaint Option</h3>
                  </div>
                  <div className="space-y-3 text-gray-600">
                    <p><strong>U.S. Department of Health & Human Services</strong></p>
                    <p>Office for Civil Rights</p>
                    <p>Region IX Office<br />90 7th Street, Suite 4-100<br />San Francisco, CA 94103</p>
                    <div className="flex items-center gap-2 pt-2">
                      <Phone className="h-4 w-4" />
                      <span>(415) 437-8310</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>OCRComplaint@hhs.gov</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center p-8 bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-2xl">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Your Privacy Rights?</h3>
              <p className="text-gray-600 mb-6">
                If you have questions about this notice or your privacy rights, or if you believe 
                your privacy rights have been violated, please contact us immediately.
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
                <Button 
                  onClick={handlePDFDownload}
                  variant="outline" 
                  className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-6 py-3">
                  <Download className="mr-2 h-4 w-4" />
                  Download Full Notice
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
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Privacy Documents</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/privacy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Privacy Policy
                  </Button>
                </Link>
                <Link to="/terms">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Terms of Service
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Contact Us
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
                <strong>Acknowledgment:</strong> This Notice of Privacy Practices describes how we may use 
                and disclose your protected health information and how you can access this information. 
                We are required by law to maintain the privacy of your health information and to provide 
                you with notice of our legal duties and privacy practices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default HIPAAPage;