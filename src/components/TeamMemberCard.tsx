import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Stethoscope, User } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  specialization: string;
  category: 'medical' | 'administrative';
  image: string;
  bio: string;
  credentials: string[];
  experience: string;
  education: string;
  languages: string[];
  location: string;
  email: string;
  phone?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
  slug?: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryColors = {
    medical: 'from-[#572670] to-purple-600',
    administrative: 'from-[#572670] to-purple-600'
  } as const;

  const categoryIcons = {
    medical: Stethoscope,
    administrative: User
  } as const;

  const Icon = categoryIcons[member.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
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
            {/* Specialization Badge */}
            <Badge className={`w-full justify-center bg-gradient-to-r ${categoryColors[member.category]} 
                              text-white hover:opacity-90 transition-opacity text-center`}>
              {member.specialization}
            </Badge>

            {/* Bio Preview */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
                {member.bio}
              </p>
              {member.bio && member.bio.length > 150 && (
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-sm text-[#572670] hover:text-purple-600 font-medium transition-colors duration-200 hover:underline"
                >
                  Read more →
                </button>
              )}
            </div>

            {/* Key Info */}
            <div className="space-y-2 pt-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar size={14} />
                <span>{member.experience}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <MapPin size={14} />
                <span>{member.location}</span>
              </div>
            </div>

            {/* Credentials Preview */}
            <div className="flex flex-wrap gap-1 pt-2">
              {member.credentials && member.credentials.length > 0 ?
              <>
                  {member.credentials.slice(0, 2).map((credential, idx) =>
                <Badge key={idx} variant="outline" className="text-xs border-[#572670]/30 text-[#572670]">
                      {credential}
                    </Badge>
                )}
                  {member.credentials.length > 2 &&
                <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                      +{member.credentials.length - 2} more
                    </Badge>
                }
                </> :
              null}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bio Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <div className="flex items-start gap-4 mb-4">
              <div className="flex-shrink-0">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-[#572670]/20"
                />
              </div>
              <div className="flex-1">
                <DialogTitle className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </DialogTitle>
                <div className="space-y-1">
                  <p className="text-sm font-medium text-[#572670]">{member.title}</p>
                  <Badge className={`bg-gradient-to-r ${categoryColors[member.category]} text-white text-xs`}>
                    {member.specialization}
                  </Badge>
                </div>
              </div>
            </div>
          </DialogHeader>
          
          <DialogDescription asChild>
            <div className="space-y-6">
              {/* Full Bio */}
              <div className="prose prose-sm max-w-none">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                  {member.bio}
                </p>
              </div>

              {/* Additional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                {/* Experience */}
                {member.experience && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Calendar size={16} className="text-[#572670]" />
                      Experience
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{member.experience}</p>
                  </div>
                )}

                {/* Location */}
                {member.location && (
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <MapPin size={16} className="text-[#572670]" />
                      Location
                    </div>
                    <p className="text-sm text-gray-600 ml-6">{member.location}</p>
                  </div>
                )}

                {/* Education */}
                {member.education && (
                  <div className="space-y-2 md:col-span-2">
                    <div className="text-sm font-semibold text-gray-900">Education</div>
                    <p className="text-sm text-gray-600">{member.education}</p>
                  </div>
                )}

                {/* Credentials */}
                {member.credentials && member.credentials.length > 0 && (
                  <div className="space-y-2 md:col-span-2">
                    <div className="text-sm font-semibold text-gray-900">Credentials</div>
                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((credential, idx) => (
                        <Badge 
                          key={idx} 
                          variant="outline" 
                          className="text-xs border-[#572670]/30 text-[#572670]"
                        >
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Languages */}
                {member.languages && member.languages.length > 0 && (
                  <div className="space-y-2 md:col-span-2">
                    <div className="text-sm font-semibold text-gray-900">Languages</div>
                    <p className="text-sm text-gray-600">{member.languages.join(', ')}</p>
                  </div>
                )}
              </div>
            </div>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </motion.div>
  );

};

export default TeamMemberCard;