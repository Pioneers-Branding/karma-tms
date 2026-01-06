import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Mail, Phone, GraduationCap, Award, Briefcase, Heart } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { teamMembers } from '@/data/teamData';
import { Button } from '@/components/ui/button';

export default function TeamMemberPage() {
  const { slug } = useParams<{slug: string;}>();

  if (!slug) {
    return <Navigate to="/team" replace />;
  }

  const member = teamMembers.find((member) => member.slug === slug);

  if (!member) {
    return <Navigate to="/team" replace />;
  }

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
                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-teal-500 to-purple-500 rounded-xl p-4 shadow-lg">
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
                  {member.credentials}
                </p>
                <p className="text-xl text-gray-600 mb-6">
                  {member.title}
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  {member.role}
                </p>

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

                    <a href="tel:+17607705000">
                      <Phone className="w-4 h-4 mr-2" />
                      (760) 770-5000
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
              <Award className="w-8 h-8 mr-3 text-teal-600" />
              Areas of Expertise
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {member.specialties.map((specialty, index) =>
              <div
                key={index}
                className="flex items-center p-4 bg-gradient-to-r from-teal-50 to-purple-50 rounded-lg">

                  <div className="w-2 h-2 bg-teal-600 rounded-full mr-3"></div>
                  <span className="text-gray-800 font-medium">{specialty}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Biography Section */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About {member.name.split(' ')[1]}</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              {member.bio}
            </p>

            {member.approach &&
            <div className="bg-gradient-to-r from-teal-50 to-purple-50 rounded-xl p-6 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-teal-600" />
                  Treatment Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {member.approach}
                </p>
              </div>
            }

            {member.experience &&
            <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                  <Briefcase className="w-5 h-5 mr-2 text-teal-600" />
                  Experience
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {member.experience}
                </p>
              </div>
            }
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      {(member.education || member.certifications) &&
      <div className="container mx-auto px-4 pb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Education */}
              {member.education &&
            <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <GraduationCap className="w-7 h-7 mr-3 text-teal-600" />
                    Education
                  </h2>
                  <ul className="space-y-4">
                    {member.education.map((edu, index) =>
                <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{edu}</span>
                      </li>
                )}
                  </ul>
                </div>
            }

              {/* Certifications */}
              {member.certifications &&
            <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-7 h-7 mr-3 text-purple-600" />
                    Certifications
                  </h2>
                  <ul className="space-y-4">
                    {member.certifications.map((cert, index) =>
                <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{cert}</span>
                      </li>
                )}
                  </ul>
                </div>
            }
            </div>
          </div>
        </div>
      }

      {/* Call to Action */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 to-purple-600 rounded-2xl shadow-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Journey to Wellness?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule a consultation with {member.name.split(' ')[1]} today
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

                <a href="tel:+17607705000">
                  Call (760) 770-5000
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

}