
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Stethoscope, Award, Users, Filter } from 'lucide-react';

interface TeamFiltersProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
  memberCounts: {
    all: number;
    medical: number;
    administrative: number;
  };
}

const TeamFilters: React.FC<TeamFiltersProps> = ({ 
  activeFilter, 
  onFilterChange, 
  memberCounts 
}) => {
  const filters = [
    { 
      key: 'all', 
      label: 'All Team', 
      icon: Users, 
      count: memberCounts.all,
      color: 'from-indigo-500 to-purple-600'
    },
    { 
      key: 'medical', 
      label: 'Medical Staff', 
      icon: Stethoscope, 
      count: memberCounts.medical,
      color: 'from-blue-500 to-purple-600'
    },
    { 
      key: 'administrative', 
      label: 'Administrative', 
      icon: Award, 
      count: memberCounts.administrative,
      color: 'from-green-500 to-teal-600'
    }
  ];

  return (
    <div className="flex flex-col items-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-3 mb-6"
      >
        <Filter className="text-gray-600" size={24} />
        <h3 className="text-2xl font-bold text-gray-900">Filter Our Team</h3>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        {filters.map((filter, index) => {
          const Icon = filter.icon;
          const isActive = activeFilter === filter.key;

          return (
            <motion.div
              key={filter.key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Button
                variant={isActive ? "default" : "outline"}
                size="lg"
                onClick={() => onFilterChange(filter.key)}
                className={`relative group px-8 py-4 h-auto transition-all duration-300 ${
                  isActive 
                    ? `bg-gradient-to-r ${filter.color} text-white shadow-lg transform scale-105` 
                    : 'hover:shadow-md hover:scale-105'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} className={isActive ? 'text-white' : 'text-gray-600'} />
                  <div className="text-left">
                    <div className={`font-semibold ${isActive ? 'text-white' : 'text-gray-900'}`}>
                      {filter.label}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-white/80' : 'text-gray-500'}`}>
                      {filter.count} member{filter.count !== 1 ? 's' : ''}
                    </div>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`ml-2 ${
                      isActive 
                        ? 'bg-white/20 text-white' 
                        : 'bg-gray-100'
                    }`}
                  >
                    {filter.count}
                  </Badge>
                </div>
                
                {/* Animated background effect */}
                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${filter.color} 
                               opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
              </Button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamFilters;
