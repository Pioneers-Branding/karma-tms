
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import {
  GraduationCap,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Award,
  FileText,
  Send,
  CheckCircle,
  Stethoscope,
  Brain,
  Target,
  Star } from
'lucide-react';

const InternsPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    university: '',
    program: '',
    yearOfStudy: '',
    gpa: '',
    preferredRotation: '',
    startDate: '',
    coverLetter: '',
    references: '',
    hasTranscript: false,
    hasReferences: false,
    agreeToTerms: false
  });

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

  // Program Overview Data
  const programHighlights = [
  {
    icon: Stethoscope,
    title: "Clinical Experience",
    description: "Hands-on experience with TMS therapy, patient assessments, and treatment planning under expert supervision."
  },
  {
    icon: Brain,
    title: "Research Opportunities",
    description: "Participate in ongoing research projects and contribute to publications in peer-reviewed journals."
  },
  {
    icon: BookOpen,
    title: "Educational Seminars",
    description: "Weekly seminars covering advanced topics in psychiatry, neurostimulation, and mental health treatment."
  },
  {
    icon: Users,
    title: "Mentorship Program",
    description: "One-on-one mentorship with board-certified psychiatrists and experienced clinical staff."
  }];


  // Rotation Calendar Data
  const rotationCalendar = [
  {
    month: "January 2024",
    rotation: "TMS Therapy Rotation",
    duration: "4 weeks",
    focus: "Basic TMS principles, patient selection, and treatment protocols",
    supervisor: "Dr. Sarah Mitchell",
    spots: 3,
    available: true
  },
  {
    month: "February 2024",
    rotation: "Brain Mapping & Assessment",
    duration: "4 weeks",
    focus: "Neuroimaging, brain mapping techniques, and personalized treatment planning",
    supervisor: "Dr. Michael Chen",
    spots: 2,
    available: true
  },
  {
    month: "March 2024",
    rotation: "Research & Data Analysis",
    duration: "4 weeks",
    focus: "Clinical research methods, data collection, and statistical analysis",
    supervisor: "Dr. Emily Rodriguez",
    spots: 2,
    available: false
  },
  {
    month: "April 2024",
    rotation: "Patient Care & Follow-up",
    duration: "4 weeks",
    focus: "Long-term patient management, outcome tracking, and care coordination",
    supervisor: "Dr. Sarah Mitchell",
    spots: 3,
    available: true
  },
  {
    month: "May 2024",
    rotation: "Advanced TMS Techniques",
    duration: "4 weeks",
    focus: "Specialized protocols, combination therapies, and treatment optimization",
    supervisor: "Dr. Michael Chen",
    spots: 2,
    available: true
  },
  {
    month: "June 2024",
    rotation: "Quality Improvement",
    duration: "4 weeks",
    focus: "Clinical quality metrics, process improvement, and best practices",
    supervisor: "Dr. Emily Rodriguez",
    spots: 2,
    available: true
  }];


  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Application submitted successfully! We will review your application and get back to you within 5-7 business days.');
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
              Internship Program
            </Badge>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Launch Your Career in
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#572670] to-purple-500">
                Mental Health
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto mb-8">
              Join our comprehensive internship program and gain hands-on experience in 
              cutting-edge TMS therapy, clinical research, and innovative mental health treatment 
              under the guidance of leading professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#572670] hover:bg-[#572670]/90 px-8 py-3 text-lg" asChild>
                <Link to="/contact">
                  <FileText className="mr-2 h-5 w-5" />
                  Apply Now
                </Link>
              </Button>
              {/* Removed non-functional 'Download Program Guide' button as requested */}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
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
                Program Overview
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Comprehensive <span className="text-[#572670]">Clinical Experience</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our internship program provides unparalleled exposure to innovative mental health 
                treatments, research opportunities, and professional development in a supportive learning environment.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6">
              
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">Program Benefits</h3>
                <div className="space-y-4">
                  {programHighlights.map((highlight, index) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={highlight.title} className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#572670] to-purple-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h4>
                          <p className="text-gray-600">{highlight.description}</p>
                        </div>
                      </div>);

                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8">
              
              <Card className="p-8 bg-gradient-to-br from-[#572670]/5 to-purple-100/30">
                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Statistics</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                    { label: "Program Length", value: "12 weeks", icon: Clock },
                    { label: "Weekly Hours", value: "20-30", icon: Calendar },
                    { label: "Acceptance Rate", value: "15%", icon: Target },
                    { label: "Job Placement", value: "95%", icon: Award }].
                    map((stat, index) => {
                      const IconComponent = stat.icon;
                      return (
                        <div key={stat.label} className="text-center">
                          <div className="w-12 h-12 bg-[#572670] rounded-full flex items-center justify-center mx-auto mb-3">
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                          <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>);

                    })}
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Program Requirements</h4>
                <ul className="space-y-2">
                  {[
                  "Currently enrolled in psychology, psychiatry, or related graduate program",
                  "Minimum 3.5 GPA",
                  "Completed prerequisite courses in abnormal psychology and research methods",
                  "Strong interest in mental health and neurostimulation therapies",
                  "Professional references from academic advisors or supervisors"].
                  map((requirement, index) =>
                  <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-[#572670] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{requirement}</span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rotation Calendar */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 mb-4">
              Rotation Calendar
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              2024 <span className="text-[#572670]">Rotation Schedule</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Plan your internship experience with our structured rotation calendar. 
              Each rotation provides focused learning in different aspects of mental health treatment.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {rotationCalendar.map((rotation, index) =>
            <motion.div
              key={rotation.month}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}>

                <Card className={`hover:shadow-xl transition-all duration-300 ${
              rotation.available ? 'border-l-4 border-l-[#572670]' : 'border-l-4 border-l-gray-400'}`
              }>
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-6 items-center">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <Calendar className="h-5 w-5 text-[#572670]" />
                          <span className="font-bold text-lg text-gray-900">{rotation.month}</span>
                        </div>
                        <Badge className={`${rotation.available ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'}`}>
                          {rotation.available ? 'Available' : 'Full'}
                        </Badge>
                      </div>

                      <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-1">{rotation.rotation}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{rotation.duration}</span>
                        </div>
                      </div>

                      <div>
                        <p className="text-gray-600 mb-2">{rotation.focus}</p>
                        <div className="text-sm text-[#572670] font-semibold">
                          Supervisor: {rotation.supervisor}
                        </div>
                      </div>

                      <div className="text-center">
                        <div className="text-2xl font-bold text-gray-900 mb-1">{rotation.spots}</div>
                        <div className="text-sm text-gray-600 mb-3">Spots Available</div>
                        {rotation.available ? (
                          <Button className="bg-[#572670] hover:bg-[#572670]/90" asChild>
                            <Link to="/contact">Apply</Link>
                          </Button>
                        ) : (
                          <Button className="bg-gray-400 cursor-not-allowed" disabled>
                            Full
                          </Button>
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

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16">
            
            <Badge className="bg-purple-100 text-[#572670] border-purple-200 mb-4">
              Apply Now
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Submit Your <span className="text-[#572670]">Application</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Take the first step toward an exciting career in mental health. 
              Complete our application form to join our next internship cohort.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={(e) => handleInputChange('firstName', e.target.value)}
                          required />

                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          value={formData.lastName}
                          onChange={(e) => handleInputChange('lastName', e.target.value)}
                          required />

                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required />

                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          required />

                      </div>
                    </div>
                  </div>

                  {/* Academic Information */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Academic Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="university">University/Institution *</Label>
                        <Input
                          id="university"
                          value={formData.university}
                          onChange={(e) => handleInputChange('university', e.target.value)}
                          required />

                      </div>
                      <div>
                        <Label htmlFor="program">Program of Study *</Label>
                        <Select value={formData.program} onValueChange={(value) => handleInputChange('program', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your program" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="psychology">Psychology</SelectItem>
                            <SelectItem value="psychiatry">Psychiatry</SelectItem>
                            <SelectItem value="neuroscience">Neuroscience</SelectItem>
                            <SelectItem value="mental-health">Mental Health Counseling</SelectItem>
                            <SelectItem value="social-work">Social Work</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="yearOfStudy">Year of Study *</Label>
                        <Select value={formData.yearOfStudy} onValueChange={(value) => handleInputChange('yearOfStudy', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1st-year">1st Year Graduate</SelectItem>
                            <SelectItem value="2nd-year">2nd Year Graduate</SelectItem>
                            <SelectItem value="3rd-year">3rd Year Graduate</SelectItem>
                            <SelectItem value="doctoral">Doctoral Candidate</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="gpa">Current GPA *</Label>
                        <Input
                          id="gpa"
                          type="number"
                          step="0.01"
                          min="0"
                          max="4"
                          value={formData.gpa}
                          onChange={(e) => handleInputChange('gpa', e.target.value)}
                          required />

                      </div>
                    </div>
                  </div>

                  {/* Internship Preferences */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">Internship Preferences</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="preferredRotation">Preferred Rotation *</Label>
                        <Select value={formData.preferredRotation} onValueChange={(value) => handleInputChange('preferredRotation', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select preferred rotation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="tms-therapy">TMS Therapy Rotation</SelectItem>
                            <SelectItem value="brain-mapping">Brain Mapping & Assessment</SelectItem>
                            <SelectItem value="research">Research & Data Analysis</SelectItem>
                            <SelectItem value="patient-care">Patient Care & Follow-up</SelectItem>
                            <SelectItem value="advanced-tms">Advanced TMS Techniques</SelectItem>
                            <SelectItem value="quality-improvement">Quality Improvement</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="startDate">Preferred Start Date *</Label>
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => handleInputChange('startDate', e.target.value)}
                          required />

                      </div>
                    </div>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <Label htmlFor="coverLetter">Cover Letter *</Label>
                    <Textarea
                      id="coverLetter"
                      placeholder="Please describe your interest in our internship program, relevant experience, and career goals..."
                      value={formData.coverLetter}
                      onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                      rows={6}
                      required />

                  </div>

                  {/* References */}
                  <div>
                    <Label htmlFor="references">References</Label>
                    <Textarea
                      id="references"
                      placeholder="Please provide contact information for 2-3 professional or academic references..."
                      value={formData.references}
                      onChange={(e) => handleInputChange('references', e.target.value)}
                      rows={4} />

                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="transcript"
                        checked={formData.hasTranscript}
                        onCheckedChange={(checked) => handleInputChange('hasTranscript', checked as boolean)} />

                      <Label htmlFor="transcript">I have my official transcript ready to submit</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="references-ready"
                        checked={formData.hasReferences}
                        onCheckedChange={(checked) => handleInputChange('hasReferences', checked as boolean)} />

                      <Label htmlFor="references-ready">I have contacted my references about this application</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.agreeToTerms}
                        onCheckedChange={(checked) => handleInputChange('agreeToTerms', checked as boolean)}
                        required />

                      <Label htmlFor="terms">I agree to the internship program terms and conditions *</Label>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      className="bg-[#572670] hover:bg-[#572670]/90 px-12 py-4 text-lg"
                      disabled={!formData.agreeToTerms}>

                      <Send className="mr-2 h-5 w-5" />
                      Submit Application
                    </Button>
                    <p className="text-sm text-gray-600 mt-4">
                      Applications are reviewed on a rolling basis. You will receive a confirmation email 
                      within 24 hours and a response within 5-7 business days.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default InternsPage;