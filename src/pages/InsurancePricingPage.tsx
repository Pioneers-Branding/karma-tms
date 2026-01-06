
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Shield,
  DollarSign,
  CreditCard,
  CheckCircle,
  AlertCircle,
  Phone,
  Calculator,
  Building,
  FileText,
  Clock,
  Users,
  Star } from
'lucide-react';

const InsurancePricingPage = () => {
  const [insuranceForm, setInsuranceForm] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    insuranceProvider: '',
    policyNumber: '',
    groupNumber: '',
    phone: ''
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const acceptedInsurance = [
  { name: "Aetna", coverage: "Most TMS treatments", copay: "$20-50", logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=40&fit=crop" },
  { name: "Anthem Blue Cross", coverage: "Comprehensive TMS coverage", copay: "$25-75", logo: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=80&h=40&fit=crop" },
  { name: "Cigna", coverage: "TMS with pre-authorization", copay: "$30-60", logo: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=80&h=40&fit=crop" },
  { name: "UnitedHealthcare", coverage: "Full TMS treatment series", copay: "$15-50", logo: "https://images.unsplash.com/photo-1752080193173-25f318f9cafb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwZnJvbSUyMFVuc3BsYXNoJTIwd2l0aCUyMGElMjB3aWR0aCUyMG9mJTIwODAlMjBwaXhlbHMlMjBhbmQlMjBhJTIwaGVpZ2h0JTIwb2YlMjA0MCUyMHBpeGVscy58ZW58MHx8fHwxNzU2MTI3MjUzfDA&ixlib=rb-4.1.0&q=80&w=200$w=80" },
  { name: "Kaiser Permanente", coverage: "Limited TMS coverage", copay: "$40-80", logo: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=80&h=40&fit=crop" },
  { name: "Medicare", coverage: "TMS for qualifying conditions", copay: "20% coinsurance", logo: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=80&h=40&fit=crop" }];


  const cashPayPricing = [
  {
    service: "Initial Consultation",
    description: "Comprehensive psychiatric evaluation and treatment planning",
    price: "$350",
    duration: "90 minutes",
    includes: ["Psychiatric evaluation", "Treatment plan", "Insurance verification", "Next steps planning"]
  },
  {
    service: "Brain Mapping Session",
    description: "Advanced neuroimaging and personalized TMS targeting",
    price: "$500",
    duration: "60 minutes",
    includes: ["Brain mapping scan", "Target identification", "Protocol customization", "Detailed report"]
  },
  {
    service: "TMS Treatment Session",
    description: "Individual TMS therapy treatment",
    price: "$200",
    duration: "45 minutes",
    includes: ["TMS treatment", "Vital monitoring", "Progress tracking", "Side effect monitoring"]
  },
  {
    service: "Complete TMS Series",
    description: "Full course of TMS therapy (36 sessions)",
    price: "$6,500",
    duration: "6-9 weeks",
    includes: ["All 36 TMS sessions", "Progress evaluations", "Outcome assessments", "Follow-up care"]
  },
  {
    service: "Maintenance Sessions",
    description: "Ongoing TMS maintenance treatments",
    price: "$180",
    duration: "30 minutes",
    includes: ["Maintenance TMS", "Progress monitoring", "Adjustment protocols", "Continued care"]
  },
  {
    service: "Follow-up Consultation",
    description: "Post-treatment evaluation and planning",
    price: "$200",
    duration: "45 minutes",
    includes: ["Outcome assessment", "Future planning", "Referrals if needed", "Progress review"]
  }];


  const financingOptions = [
  {
    provider: "CareCredit",
    terms: "0% APR for 6-24 months",
    benefits: ["No upfront costs", "Flexible payment plans", "Quick approval process"],
    icon: CreditCard
  },
  {
    provider: "Patient Payment Plans",
    terms: "Interest-free monthly plans",
    benefits: ["Customized to your budget", "No credit check required", "Start treatment immediately"],
    icon: Calculator
  },
  {
    provider: "HSA/FSA Eligible",
    terms: "Use pre-tax dollars",
    benefits: ["Tax savings", "Employer contributions", "Immediate access to funds"],
    icon: Shield
  }];


  const handleInsuranceVerification = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle insurance verification
    alert('Insurance verification request submitted! We will contact you within 24 hours with your coverage details.');
  };

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
              Insurance & Pricing
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Affordable Mental Health
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Treatment for Everyone
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              We believe mental health treatment should be accessible. We work with most major 
              insurance plans and offer flexible payment options to make TMS therapy affordable for everyone.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg" asChild>
                <Link to="/contact">
                  <Shield className="mr-2 h-5 w-5" />
                  Verify Insurance
                </Link>
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670]/10 px-8 py-3 text-lg" asChild>
                <Link to="/contact">
                  <Phone className="mr-2 h-5 w-5" />
                  Call for Pricing: 760-760-5675
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Insurance Verification Widget - removed as requested */}
      {/*
      <section className="py-20 bg-white"> ... </section>
      */}

      {/* Accepted Insurance */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Accepted <span className="text-[#572670]">Insurance Plans</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with most major insurance providers to ensure TMS therapy is covered 
              and affordable for our patients.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptedInsurance.map((insurance, index) =>
            <motion.div
              key={insurance.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>

                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                      src={insurance.logo}
                      alt={insurance.name}
                      className="w-16 h-8 object-cover rounded" />

                      <h3 className="text-xl font-bold text-gray-900">{insurance.name}</h3>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600">{insurance.coverage}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-[#572670]" />
                        <span className="text-sm text-gray-600">Typical copay: {insurance.copay}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Self-Pay Pricing - removed as requested */}
      {/*
      <section className="py-20 bg-white"> ... </section>
      */}

      {/* Financing Options Banner */}
      <section className="py-20 bg-gradient-to-r from-[#572670] to-purple-600">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">
            
            <h2 className="text-4xl font-bold text-white mb-6">
              Flexible Financing Options
            </h2>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Don't let cost prevent you from getting the mental health treatment you need. 
              We offer several financing options to make TMS therapy affordable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {financingOptions.map((option, index) => {
              const IconComponent = option.icon;
              return (
                <motion.div
                  key={option.provider}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center">

                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{option.provider}</h3>
                  <p className="text-lg text-purple-100 mb-6">{option.terms}</p>
                  <ul className="space-y-2">
                    {option.benefits.map((benefit, idx) =>
                    <li key={idx} className="flex items-center justify-center gap-2 text-white">
                        <CheckCircle className="h-4 w-4 text-purple-200" />
                        <span className="text-sm">{benefit}</span>
                      </li>
                    )}
                  </ul>
                </motion.div>);

            })}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-white text-[#572670] hover:bg-gray-100 px-8 py-3 text-lg" asChild>
              <Link to="/contact">
                <Calculator className="mr-2 h-5 w-5" />
                Learn About Financing Options
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Insurance & Payment <span className="text-[#572670]">FAQs</span>
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {[
            {
              q: "How do I know if my insurance covers TMS?",
              a: "Most major insurance plans cover TMS therapy when medically necessary. We'll verify your coverage and explain your benefits before treatment begins."
            },
            {
              q: "What if my insurance doesn't cover TMS?",
              a: "We offer competitive self-pay rates and flexible financing options including CareCredit and in-house payment plans to make treatment affordable."
            },
            {
              q: "Do you offer payment plans?",
              a: "Yes! We offer interest-free payment plans that can be customized to fit your budget. No credit check is required for our in-house plans."
            },
            {
              q: "Can I use my HSA or FSA?",
              a: "Absolutely! TMS therapy is an eligible expense for both Health Savings Accounts (HSA) and Flexible Spending Accounts (FSA)."
            }].
            map((faq, index) =>
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>

                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default InsurancePricingPage;