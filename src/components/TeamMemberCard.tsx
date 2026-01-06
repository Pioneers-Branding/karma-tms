import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Mail, Phone, Calendar, Award, Stethoscope, User, ChevronRight } from 'lucide-react';

export interface TeamMember {
  id: string;
  slug: string;
  name: string;
  title: string;
  credentials: string;
  role: string;
  category: 'doctor' | 'staff' | 'provider';
  image: string;
  specialties: string[];
  bio: string;
  education?: string[];
  certifications?: string[];
  experience?: string;
  approach?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    doctor: 'from-[#572670] to-purple-600',
    provider: 'from-purple-500 to-pink-600',
    staff: 'from-teal-500 to-cyan-600'
  };

  const categoryIcons = {
    doctor: Stethoscope,
    provider: Stethoscope,
    staff: User
  };

  const Icon = categoryIcons[member.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>

      <Card className={`h-full bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 
                       ${isHovered ? 'transform -translate-y-2' : ''} overflow-hidden`}>
        <CardContent className="p-0">
          {/* Profile Image */}
          <div className="relative h-72 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <img
              src={member.image}
              alt={member.name}
              className={`w-full h-full object-cover transition-all duration-700 
                         ${isHovered ? 'scale-110' : 'scale-100'}`} />

            <div className={`absolute inset-0 bg-gradient-to-t from-black/40 to-transparent 
                            transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-40'}`} />
            
            {/* Category Badge */}
            <div className={`absolute top-3 right-3 p-2 rounded-full 
                            bg-gradient-to-r ${categoryColors[member.category]} text-white
                            transition-all duration-500 ${isHovered ? 'scale-110' : ''}`}>
              <Icon size={16} />
            </div>

            {/* Name Overlay */}
            <div className="absolute bottom-3 left-3 text-white">
              <h3 className="text-lg font-bold mb-1 line-clamp-1">
                {member.name}
              </h3>
              <p className="text-sm text-gray-200">
                {member.title}
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Role Badge */}
            <Badge className={`w-full justify-center bg-gradient-to-r ${categoryColors[member.category]} 
                              text-white hover:opacity-90 transition-opacity`}>
              {member.role}
            </Badge>

            {/* Bio Preview */}
            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {member.bio}
            </p>

            {/* Key Info */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={14} />
                <span>{member.experience || 'Experienced Professional'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} />
                <span>Palm Springs, CA</span>
              </div>
            </div>

            {/* Specialties Preview */}
            <div className="flex flex-wrap gap-1 pt-2">
              {member.specialties && member.specialties.length > 0 ?
              <>
                  {member.specialties.slice(0, 2).map((specialty, idx) =>
                <Badge key={idx} variant="outline" className="text-xs border-[#572670]/30 text-[#572670]">
                      {specialty}
                    </Badge>
                )}
                  {member.specialties.length > 2 &&
                <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                      +{member.specialties.length - 2} more
                    </Badge>
                }
                </> :

              <Badge variant="outline" className="text-xs border-[#572670]/30 text-[#572670]">
                  {member.credentials}
                </Badge>
              }
            </div>

            {/* View Profile Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button className={`w-full bg-gradient-to-r ${categoryColors[member.category]} 
                                   hover:opacity-90 transition-all duration-300 group`}>
                  View Full Profile
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-4 text-2xl">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-200" />

                    <div>
                      <div className="text-gray-900">{member.name}</div>
                      <div className="text-base font-normal text-gray-600">{member.title}</div>
                    </div>
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6 mt-6">
                  {/* Bio */}
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <User size={18} className="text-[#572670]" />
                      About
                    </h4>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Credentials/Certifications */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Award size={18} className="text-[#572670]" />
                        Credentials
                      </h4>
                      <div className="space-y-2">
                        <Badge variant="outline" className="mr-2 mb-2 border-[#572670]/30 text-[#572670]">
                          {member.credentials}
                        </Badge>
                        {member.certifications && member.certifications.map((cert, idx) =>
                        <Badge key={idx} variant="outline" className="mr-2 mb-2 border-[#572670]/30 text-[#572670]">
                            {cert}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Experience */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Calendar size={18} className="text-[#572670]" />
                        Experience
                      </h4>
                      <p className="text-gray-700">{member.experience || 'Contact for details'}</p>
                    </div>

                    {/* Education */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Education</h4>
                      {member.education && member.education.length > 0 ?
                      <ul className="space-y-1 text-sm text-gray-700">
                          {member.education.map((edu, idx) =>
                        <li key={idx}>• {edu}</li>
                        )}
                        </ul> :

                      <p className="text-gray-700 text-sm">Contact for details</p>
                      }
                    </div>

                    {/* Specialties */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Specialties</h4>
                      <div className="flex flex-wrap gap-1">
                        {member.specialties && member.specialties.map((specialty, idx) =>
                        <Badge key={idx} variant="secondary" className="text-xs bg-gray-100">
                            {specialty}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-3">Contact Information</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <MapPin size={16} className="text-[#572670]" />
                        <span>Palm Springs, CA</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Mail size={16} className="text-[#572670]" />
                        <a href="mailto:info@karmatms.com" className="hover:text-[#572670] transition-colors">
                          info@karmatms.com
                        </a>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Phone size={16} className="text-[#572670]" />
                        <a href="tel:+17603220080" className="hover:text-[#572670] transition-colors">
                          (760) 322-0080
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <Button
                      className="flex-1 bg-[#572670] hover:bg-[#572670]/90"
                      onClick={() => window.open('/book', '_self')}>
                      Book Appointment
                    </Button>
                    <Button
                      variant="outline"
                      className="border-[#572670] text-[#572670] hover:bg-[#572670]/10"
                      onClick={() => window.open('mailto:info@karmatms.com', '_self')}>
                      <Mail className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardContent>
      </Card>
    </motion.div>);

};

export default TeamMemberCard;