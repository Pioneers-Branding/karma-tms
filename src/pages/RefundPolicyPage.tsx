
import React from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import {
  CreditCard,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  FileText,
  Shield } from
'lucide-react';

const RefundPolicyPage = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const refundPolicies = [
  {
    category: "Initial Consultation",
    icon: Clock,
    policies: [
    "Full refund if cancelled 24+ hours before appointment",
    "50% refund if cancelled within 24 hours",
    "No refund for no-shows or same-day cancellations",
    "Refunds processed within 3-5 business days"]

  },
  {
    category: "TMS Treatment Series",
    icon: CreditCard,
    policies: [
    "Refund available before treatment series begins",
    "Prorated refund for unused sessions after treatment starts",
    "Medical necessity cancellations eligible for full refund",
    "Insurance-covered treatments follow insurance refund policies"]

  },
  {
    category: "Brain Mapping Services",
    icon: FileText,
    policies: [
    "Full refund if cancelled 48+ hours before appointment",
    "No refund after mapping session is completed",
    "Technical issues resulting in incomplete mapping eligible for refund",
    "Refunds processed to original payment method"]

  },
  {
    category: "Emergency Situations",
    icon: AlertCircle,
    policies: [
    "Medical emergencies eligible for full refund",
    "Family emergencies considered case-by-case",
    "Documentation may be required for emergency refunds",
    "Emergency refunds processed within 24 hours when approved"]

  }];


  const refundProcess = [
  {
    step: 1,
    title: "Submit Request",
    description: "Contact our billing department via phone or email with your refund request and relevant details."
  },
  {
    step: 2,
    title: "Review Process",
    description: "Our team reviews your request against our policy guidelines within 1-2 business days."
  },
  {
    step: 3,
    title: "Approval Notification",
    description: "You'll receive email confirmation with refund approval and processing timeline."
  },
  {
    step: 4,
    title: "Refund Processing",
    description: "Approved refunds are processed to your original payment method within 3-5 business days."
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
              Refund Policy
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Clear & Fair
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Refund Policies
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We believe in transparent billing practices. Our refund policy is designed to be 
              fair to both patients and our practice while ensuring high-quality mental health care.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg">
                  <Mail className="mr-2 h-5 w-5" />
                  Contact Billing
                </Button>
              </Link>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call: 760-760-5675
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Policy Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Refund Policy <span className="text-[#572670]">by Service Type</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our refund policies vary by service type to ensure fairness and clarity for all patients.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {refundPolicies.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}>

                  <Card className="h-full hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-xl flex items-center justify-center">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                      </div>
                      
                      <ul className="space-y-3">
                        {category.policies.map((policy, idx) =>
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600">{policy}</span>
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

      {/* Refund Process */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              How to <span className="text-[#572670]">Request a Refund</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our refund request process is straightforward and designed to resolve your 
              concerns quickly and fairly.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {refundProcess.map((step, index) =>
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center">

                  <div className="w-16 h-16 bg-gradient-to-br from-[#572670] to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
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
                Important <span className="text-[#572670]">Information</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-l-4 border-l-[#572670]">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="h-6 w-6 text-[#572670]" />
                    <h3 className="text-xl font-bold text-gray-900">Patient Rights</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Right to receive detailed billing information</li>
                    <li>• Right to dispute charges within 30 days</li>
                    <li>• Right to payment plan options for financial hardship</li>
                    <li>• Right to appeal refund decisions</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <AlertCircle className="h-6 w-6 text-purple-500" />
                    <h3 className="text-xl font-bold text-gray-900">Special Circumstances</h3>
                  </div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Insurance claim denials may affect refund eligibility</li>
                    <li>• Third-party payment refunds may take longer to process</li>
                    <li>• Medical emergencies documented by physician eligible for exception</li>
                    <li>• Military deployment eligible for special consideration</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center p-8 bg-gradient-to-br from-[#572670]/5 to-purple-100/30 rounded-2xl">
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with a Refund?</h3>
              <p className="text-gray-600 mb-6">
                Our billing department is here to assist you with any refund questions or requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#572670] hover:bg-[#572670]/90 px-6 py-3">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Billing: 760-760-5675
                </Button>
                <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-6 py-3">
                  <Mail className="mr-2 h-4 w-4" />
                  Email: billing@karmatms.com
                </Button>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                Billing department hours: Monday - Friday, 8:00 AM - 5:00 PM PST
              </p>
            </motion.div>

            {/* Related Links */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mt-12 text-center">
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Policies</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/insurance-pricing">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Insurance & Pricing
                  </Button>
                </Link>
                <Link to="/terms">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Terms of Service
                  </Button>
                </Link>
                <Link to="/privacy">
                  <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10">
                    Privacy Policy
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

export default RefundPolicyPage;