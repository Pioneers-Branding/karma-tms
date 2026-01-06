
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, Brain, Shield, Clock, Users, Award, CheckCircle, ArrowRight, Star, TrendingUp, HeadphonesIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const TMSTherapyPage = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const fdaIndications = [
  {
    condition: "Major Depressive Disorder",
    year: "2008",
    success: "73%",
    icon: <Brain className="h-6 w-6" />,
    description: "Treatment-resistant depression after 1+ medication failures"
  },
  {
    condition: "Obsessive Compulsive Disorder",
    year: "2018",
    success: "68%",
    icon: <TrendingUp className="h-6 w-6" />,
    description: "For patients who haven't responded to traditional treatments"
  },
  {
    condition: "Migraine Headaches",
    year: "2013",
    success: "65%",
    icon: <HeadphonesIcon className="h-6 w-6" />,
    description: "Acute treatment with or without aura"
  },
  {
    condition: "Smoking Cessation",
    year: "2020",
    success: "61%",
    icon: <Shield className="h-6 w-6" />,
    description: "Short-term treatment for smoking cessation aid"
  }];


  const sessionSteps = [
  {
    step: 1,
    title: "Brain Mapping",
    duration: "45 minutes",
    description: "Precise targeting using advanced qEEG technology to map your unique brain patterns and identify optimal stimulation sites.",
    icon: <Brain className="h-8 w-8" />,
    details: [
    "qEEG brain mapping session",
    "Personalized treatment planning",
    "Motor threshold determination",
    "Coil positioning calibration"]

  },
  {
    step: 2,
    title: "TMS Treatment",
    duration: "20 minutes",
    description: "Non-invasive magnetic pulses delivered to specific brain regions while you relax comfortably in our treatment chair.",
    icon: <Star className="h-8 w-8" />,
    details: [
    "Comfortable reclining position",
    "Magnetic coil positioning",
    "Gentle magnetic pulses",
    "Monitor vitals and comfort"]

  },
  {
    step: 3,
    title: "Progress Tracking",
    duration: "10 minutes",
    description: "Regular assessments to monitor your improvement and adjust treatment protocols for optimal results.",
    icon: <TrendingUp className="h-8 w-8" />,
    details: [
    "Mood assessment scales",
    "Side effect monitoring",
    "Treatment plan adjustments",
    "Progress documentation"]

  }];


  const safetyFAQs = [
  {
    question: "Is TMS therapy safe?",
    answer: "Yes, TMS is FDA-cleared and has been used safely since 2008. The most common side effect is mild scalp discomfort during treatment, which typically diminishes over time. Unlike medications, TMS has no systemic side effects and doesn't affect memory or cognition."
  },
  {
    question: "Who is not eligible for TMS?",
    answer: "Patients with metallic implants near the head (like cochlear implants, deep brain stimulators, or aneurysm clips), those with a history of seizures, or patients taking medications that lower seizure threshold may not be candidates. A thorough screening ensures safety."
  },
  {
    question: "What does TMS feel like?",
    answer: "Most patients describe TMS as a light tapping sensation on the scalp, similar to a woodpecker. The magnetic pulses may initially feel unusual, but patients typically adjust within the first few sessions. You remain fully awake and alert throughout treatment."
  },
  {
    question: "How long do results last?",
    answer: "Clinical studies show that 68% of patients maintain their improvement at 6 months, and 45% remain in remission at 12 months. Many patients benefit from maintenance sessions to sustain their improvement long-term."
  },
  {
    question: "Can I drive after TMS treatment?",
    answer: "Yes, you can drive immediately after TMS treatment. Unlike ECT, TMS doesn't affect memory, cognition, or consciousness. Most patients return to work or daily activities right after their session."
  },
  {
    question: "Does insurance cover TMS?",
    answer: "Most major insurance plans, including Medicare, cover TMS therapy for treatment-resistant depression. Our insurance specialists will verify your coverage and handle pre-authorization to minimize out-of-pocket costs."
  }];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <SEO
        title="TMS Therapy in Palm Springs | Karma TMS PC"
        description="Karma TMS PC offers advanced TMS Therapy in Palm Springs to treat depression and anxiety safely, helping you achieve lasting mental wellness and balance."
        keywords="tms palm springs, karma tms palm springs, TMS"
        canonical="https://www.karmatms.com/tms-therapy" />

      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-12">

            <Badge className="mb-4 bg-gradient-to-r from-blue-magenta to-purple-600 text-white">
              FDA-Cleared Treatment
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-magenta via-purple-600 to-violet-600 bg-clip-text text-transparent">
              TMS Therapy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transcranial Magnetic Stimulation: A breakthrough, non-invasive treatment for depression and other mental health conditions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-blue-magenta to-purple-600 hover:from-purple-700 hover:to-blue-magenta transition-all duration-300">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/tms-quiz">
                <Button variant="outline" size="lg" className="border-2 border-blue-magenta text-blue-magenta hover:bg-blue-magenta hover:text-white">
                  Take TMS Quiz
                </Button>
              </Link>
            </div>
          </motion.div>
          
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="relative mx-auto max-w-4xl">

            <img
              src="https://images.unsplash.com/photo-1692939558183-3da9afd034e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBbiUyMGltYWdlJTIwb2YlMjBhJTIwVE1TJTIwdHJlYXRtZW50JTIwY2hhaXIlMkMlMjBzaG93Y2FzaW5nJTIwYSUyMGNvbWZvcnRhYmxlJTIwYW5kJTIwbW9kZXJuJTIwZGVzaWduJTJDJTIwdXNlZCUyMGZvciUyMHRyYW5zY3JhbmlhbCUyMG1hZ25ldGljJTIwc3RpbXVsYXRpb24lMjB0aGVyYXB5LnxlbnwwfHx8fDE3NTkyMzY3MDR8MA&ixlib=rb-4.1.0&q=80&w=200$w=800"
              alt="TMS Treatment Chair"
              className="w-full h-auto rounded-2xl shadow-2xl" />

            <div className="absolute inset-0 bg-gradient-to-r from-blue-magenta/20 to-purple-600/20 rounded-2xl"></div>
          </motion.div>
        </div>
      </section>

      {/* FDA-Cleared Indications */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="text-center mb-12">

            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-magenta to-purple-600 bg-clip-text text-transparent">
                FDA-Cleared Indications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                TMS therapy has been rigorously tested and approved by the FDA for multiple conditions
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            {fdaIndications.map((indication, index) =>
            <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full border-2 hover:border-blue-magenta/30 transition-all duration-300 group hover:shadow-xl">
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-br from-blue-magenta to-purple-600 rounded-full text-white group-hover:scale-110 transition-transform duration-300">
                      {indication.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold mb-2">
                      {indication.condition}
                    </CardTitle>
                    <div className="flex justify-center items-center gap-4 text-sm">
                      <Badge variant="secondary">FDA {indication.year}</Badge>
                      <Badge className="bg-green-100 text-green-800">{indication.success} Success</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-center">
                      {indication.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* 3-Step Session Flow */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-magenta to-purple-600 bg-clip-text text-transparent">
              Your TMS Treatment Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each session follows a precise, comfortable 3-step process designed for optimal results
            </p>
          </motion.div>

          <div className="space-y-12">
            {sessionSteps.map((step, index) =>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`
              }>

                <div className="lg:w-1/2">
                  <Card className="p-8 border-2 hover:border-blue-magenta/30 transition-all duration-300 shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-magenta to-purple-600 rounded-full text-white font-bold text-xl mr-4">
                        {step.step}
                      </div>
                      <div className="text-blue-magenta mr-4">
                        {step.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                        <Badge className="bg-blue-100 text-blue-800">
                          <Clock className="h-3 w-3 mr-1" />
                          {step.duration}
                        </Badge>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 text-lg">
                      {step.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) =>
                    <div key={detailIndex} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-600 mr-2" />
                          <span className="text-gray-700">{detail}</span>
                        </div>
                    )}
                    </div>
                  </Card>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className={`w-32 h-32 mx-auto bg-gradient-to-br from-blue-magenta to-purple-600 rounded-full flex items-center justify-center text-white text-4xl shadow-2xl ${
                  index === 0 ? 'animate-pulse' : index === 1 ? 'animate-bounce' : 'animate-pulse'}`
                  }>
                      {step.icon}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Safety FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-magenta to-purple-600 bg-clip-text text-transparent">
              Safety & Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to the most common questions about TMS therapy safety and effectiveness
            </p>
          </motion.div>

          <div className="space-y-4">
            {safetyFAQs.map((faq, index) =>
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}>

                <Collapsible
                open={openFAQ === index}
                onOpenChange={() => setOpenFAQ(openFAQ === index ? null : index)}>

                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:shadow-md transition-all duration-300 border-l-4 border-l-blue-magenta">
                      <CardHeader className="flex flex-row items-center justify-between py-4">
                        <h3 className="text-lg font-semibold text-left">
                          {faq.question}
                        </h3>
                        <ChevronDown
                        className={`h-5 w-5 text-blue-magenta transition-transform duration-200 ${
                        openFAQ === index ? 'rotate-180' : ''}`
                        } />

                      </CardHeader>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="mt-2 border-l-4 border-l-purple-600">
                      <CardContent className="pt-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-magenta to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your TMS Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Take the first step towards recovery with our comprehensive TMS therapy program. Schedule your consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-white text-blue-magenta border-white hover:bg-blue-50">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/prtms">
                <Button size="lg" variant="ghost" className="text-white border-white hover:bg-white/10">
                  Learn About prTMS
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default TMSTherapyPage;