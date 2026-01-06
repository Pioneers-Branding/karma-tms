import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, GraduationCap, Award, Briefcase, Heart, Languages } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { teamMembers } from '@/data/teamData';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TeamMemberPage() {
  const { id } = useParams<{id: string;}>();

  if (!id) {
    return <Navigate to="/team" replace />;
  }

  const member = teamMembers.find((member) => member.id === id);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

  const categoryColors = {
    medical: 'from-[#572670] to-purple-600',
    administrative: 'from-teal-500 to-cyan-600'
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 via-white to-purple-50">
      <Navigation />
      
      {/* Breadcrumb Navigation */}
      <div className="container mx-auto px-4 pt-24 pb-8">
        <Link
          to="/team"
          className="inline-flex items-center text-teal-600 hover:text-teal-700 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Team
        </Link>
      </div>

      {/* Hero Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Profile Image */}
              <div className="flex justify-center items-start">
                <div className="relative">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover" />
                  </div>
                  <div className={`absolute -bottom-4 -right-4 bg-gradient-to-r ${categoryColors[member.category]} rounded-xl p-4 shadow-lg`}>
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Profile Info */}
              <div className="flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h1>
                <p className="text-2xl text-teal-600 font-semibold mb-1">
                  {member.title}
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  {member.specialization}
                </p>

                {/* Category Badge */}
                <Badge className={`w-fit mb-6 bg-gradient-to-r ${categoryColors[member.category]} text-white`}>
                  {member.category === 'medical' ? 'Medical Staff' : 'Administrative Staff'}
                </Badge>

                {/* Contact Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700">
                    <Link to="/contact">
                      <Mail className="w-4 h-4 mr-2" />
                      Request Appointment
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-teal-600 text-teal-600 hover:bg-teal-50">
                    <a href={`mailto:${member.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              About {member.name.split(' ')[0]}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {member.bio}
            </p>

            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-teal-600" />
                Experience
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {member.experience}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Education & Credentials Grid */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <GraduationCap className="w-7 h-7 mr-3 text-teal-600" />
                Education
              </h2>
              <p className="text-gray-700">{member.education}</p>
            </div>

            {/* Credentials */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-7 h-7 mr-3 text-purple-600" />
                Credentials
              </h2>
              <div className="space-y-2">
                {member.credentials.map((cred, index) =>
                <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                    <span className="text-gray-700">{cred}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Languages Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Languages className="w-7 h-7 mr-3 text-teal-600" />
              Languages Spoken
            </h2>
            <div className="flex flex-wrap gap-3">
              {member.languages.map((language, index) =>
              <Badge
                key={index}
                variant="outline"
                className="text-base px-4 py-2 border-teal-600 text-teal-600">
                  {language}
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey to Wellness?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with {member.name.split(' ')[0]} today
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-white text-teal-600 hover:bg-gray-100">
                <Link to="/contact">
                  Request Appointment
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10">
                <a href={`mailto:${member.email}`}>
                  <Mail className="w-4 h-4 mr-2" />
                  Email {member.name.split(' ')[0]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

}