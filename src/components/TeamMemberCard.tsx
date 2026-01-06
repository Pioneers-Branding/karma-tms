import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, Stethoscope, User } from 'lucide-react';

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
            <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed">
              {member.bio}
            </p>

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
              {member.credentials && member.credentials.length > 0 ? (
                <>
                  {member.credentials.slice(0, 2).map((credential, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs border-[#572670]/30 text-[#572670]">
                      {credential}
                    </Badge>
                  ))}
                  {member.credentials.length > 2 && (
                    <Badge variant="outline" className="text-xs border-gray-300 text-gray-500">
                      +{member.credentials.length - 2} more
                    </Badge>
                  )}
                </>
              ) : null}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default TeamMemberCard;