
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Mail, Phone, Calendar, Award, Stethoscope } from 'lucide-react';

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
  email?: string;
  phone?: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  index: number;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ member, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const categoryColors = {
    medical: 'from-blue-500 to-purple-600',
    administrative: 'from-green-500 to-teal-600'
  };

  const categoryIcons = {
    medical: Stethoscope,
    administrative: Award
  };

  const Icon = categoryIcons[member.category];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Hexagonal shape container */}
        <div className="relative w-72 h-80 mx-auto">
          {/* Background hexagon */}
          <div 
            className={`absolute inset-0 bg-gradient-to-br ${categoryColors[member.category]} 
                       rounded-3xl rotate-6 transform transition-all duration-500 ease-in-out
                       ${isHovered ? 'rotate-12 scale-105' : ''}`}
            style={{
              clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
            }}
          />
          
          {/* Main card */}
          <Card className={`relative w-full h-full bg-white/95 backdrop-blur-sm border-0 
                           rounded-3xl overflow-hidden transition-all duration-500 ease-in-out
                           ${isHovered ? 'shadow-2xl transform scale-105 -rotate-2' : 'shadow-lg'}`}>
            
            {/* Profile image */}
            <div className="relative h-48 overflow-hidden">
              <img 
                src={member.image} 
                alt={member.name}
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out
                           ${isHovered ? 'scale-110 brightness-110' : 'scale-100'}`}
              />
              <div className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent 
                              transition-opacity duration-500 ${isHovered ? 'opacity-60' : 'opacity-30'}`} />
              
              {/* Category icon */}
              <div className={`absolute top-4 right-4 p-2 rounded-full 
                              bg-gradient-to-r ${categoryColors[member.category]} text-white
                              transition-all duration-500 ${isHovered ? 'scale-110 rotate-12' : ''}`}>
                <Icon size={20} />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-3">
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {member.title}
                </p>
                <Badge 
                  variant="secondary" 
                  className={`bg-gradient-to-r ${categoryColors[member.category]} text-white text-xs px-3 py-1`}
                >
                  {member.specialization}
                </Badge>
              </div>

              {/* Expandable content on hover */}
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ 
                  opacity: isHovered ? 1 : 0, 
                  height: isHovered ? 'auto' : 0 
                }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600 line-clamp-2 mb-3">
                    {member.bio}
                  </p>
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        size="sm" 
                        className={`w-full bg-gradient-to-r ${categoryColors[member.category]} 
                                   hover:shadow-lg transition-all duration-300`}
                      >
                        View Full Profile
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-3 text-2xl">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-16 h-16 rounded-full object-cover"
                          />
                          <div>
                            <div>{member.name}</div>
                            <div className="text-base font-normal text-gray-600">{member.title}</div>
                          </div>
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6 mt-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">About</h4>
                          <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Award size={18} />
                              Credentials
                            </h4>
                            <div className="space-y-1">
                              {member.credentials.map((credential, idx) => (
                                <Badge key={idx} variant="outline" className="mr-2 mb-1">
                                  {credential}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                              <Calendar size={18} />
                              Experience
                            </h4>
                            <p className="text-gray-700">{member.experience}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                            <p className="text-gray-700">{member.education}</p>
                          </div>

                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Languages</h4>
                            <div className="flex flex-wrap gap-1">
                              {member.languages.map((language, idx) => (
                                <Badge key={idx} variant="secondary" className="text-xs">
                                  {language}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-2">
                              <MapPin size={16} />
                              {member.location}
                            </div>
                            {member.email && (
                              <div className="flex items-center gap-2">
                                <Mail size={16} />
                                {member.email}
                              </div>
                            )}
                            {member.phone && (
                              <div className="flex items-center gap-2">
                                <Phone size={16} />
                                {member.phone}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </motion.div>
            </div>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMemberCard;
