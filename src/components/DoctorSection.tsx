import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Award,
  GraduationCap,
  Users,
  Brain,
  Calendar,
  MapPin,
  Star,
  Stethoscope,
  Heart,
  Shield } from
'lucide-react';

const DoctorSection = () => {
  const credentials = [
  {
    icon: GraduationCap,
    title: "Double Board-Certified",
    description: "Psychiatry and Addiction Medicine"
  },
  {
    icon: Award,
    title: "University of Pittsburgh",
    description: "Residency Training"
  },
  {
    icon: Users,
    title: "Board Member",
    description: "Society for Brain Mapping & Therapeutics"
  },
  {
    icon: Brain,
    title: "UC Riverside Faculty",
    description: "School of Medicine"
  }];


  const specialties = [
  { name: 'Treatment-Resistant Depression', icon: Heart },
  { name: 'Anxiety Disorders', icon: Shield },
  { name: 'PTSD & Trauma', icon: Brain },
  { name: 'Addiction Medicine', icon: Stethoscope },
  { name: "Women's Mental Health", icon: Heart },
  { name: 'Integrative Psychiatry', icon: Star }];


  return (
    <section className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#572670]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-300/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Doctor Image */}
          <div className="relative">
            <div className="relative">
              {/* Main Image Card */}
              <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
                <CardContent className="p-0">
                  <div className="aspect-[4/5] relative bg-gradient-to-br from-[#572670]/10 to-purple-100/20">
                    <img
                      src="https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg"
                      alt="Dr. Keerthy Sunder - Psychiatrist"
                      className="w-full h-full object-cover" />

                    
                    {/* Glassmorphism overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-white/80 backdrop-blur-md p-8 border-t border-white/20">
                      <h3 className="text-gray-900 text-3xl font-bold mb-2">Dr. Keerthy Sunder</h3>
                      <p className="text-[#572670] font-semibold text-lg">Board-Certified Psychiatrist</p>
                      <div className="flex items-center gap-2 mt-3">
                        <MapPin className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-600 text-sm">Palm Springs, CA</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Stats Cards */}
              <Card className="absolute -top-6 -right-6 bg-gradient-to-r from-[#572670] to-purple-600 text-white shadow-2xl lg:block hidden">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl font-bold mb-2">30+</div>
                  <div className="text-sm text-white/90">Years Experience</div>
                </CardContent>
              </Card>

              <Card className="absolute -bottom-6 -left-6 bg-white shadow-xl border-2 border-[#572670]/20 lg:block hidden">
                <CardContent className="p-4 text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                    <Star className="h-6 w-6 text-yellow-400 fill-current" />
                  </div>
                  <div className="text-xs text-gray-600">500+ Patients Treated</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20 px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Expert Care
                </Badge>
                <Badge className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-white border-purple-200 px-4 py-2">
                  <Brain className="h-4 w-4 mr-2" />
                  Integrative Approach
                </Badge>
              </div>

              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                Meet Dr. Keerthy 
                <span className="block bg-gradient-to-r from-[#572670] to-purple-600 bg-clip-text text-transparent">
                  Sunder
                </span>
              </h2>

              <p className="text-xl text-gray-600 leading-relaxed">
                Dr. Sunder brings a wealth of expertise in integrative psychiatry, leading our team of mental health counselors in Palm Springs, CA, to provide exceptional, patient-centered care. His philosophy focuses on treating the whole person not just the symptoms through compassionate, evidence-based care at our mental health facilities in Palm Springs.
              </p>

              <div className="p-6 bg-gradient-to-r from-[#572670]/5 to-purple-100/20 rounded-2xl border-l-4 border-[#572670]">
                <blockquote className="text-xl text-[#572670] font-medium italic">
                  "Integrative psychiatry combining mind and brain electrophysiology for optimal mental wellness."
                </blockquote>
              </div>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <Card
                    key={index}
                    className="border-0 bg-gradient-to-br from-white to-gray-50/50 shadow-md hover:shadow-lg transition-all duration-300 group">

                    <CardContent className="p-5">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-[#572670]/10 to-purple-100/20 group-hover:from-[#572670]/20 group-hover:to-purple-100/40 transition-all duration-300">
                          <IconComponent className="h-5 w-5 text-[#572670]" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-sm mb-1">{credential.title}</h4>
                          <p className="text-xs text-gray-600 leading-relaxed">{credential.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>);

              })}
            </div>

            {/* Specialties */}
            <div className="space-y-4">
              <h4 className="font-bold text-gray-900 text-lg">Professional Focus Areas:</h4>
              <div className="grid grid-cols-2 gap-3">
                {specialties.map((specialty, index) => {
                  const IconComponent = specialty.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 bg-white/80 backdrop-blur-sm rounded-xl border border-gray-100 hover:border-[#572670]/20 transition-all duration-300 group">

                      <IconComponent className="h-4 w-4 text-[#572670] group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-gray-700">{specialty.name}</span>
                    </div>);

                })}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact" aria-label="Schedule a free consultation" className="contents">
                <Button className="bg-gradient-to-r from-[#572670] to-purple-600 hover:from-purple-600 hover:to-[#572670] text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule a Free Consultation 
                </Button>
              </Link>
              <Link to="/team" aria-label="Learn about our team" className="contents">
                <Button
                  variant="outline"
                  className="border-2 border-[#572670]/30 text-[#572670] hover:bg-[#572670] hover:text-white px-8 py-3 transition-all duration-300">
                  <Users className="h-4 w-4 mr-2" />
                  Learn More About Our Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DoctorSection;