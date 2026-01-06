import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, GraduationCap, Users, Brain } from 'lucide-react';

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
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Doctor Image */}
          <div className="relative">
            <Card className="overflow-hidden shadow-2xl">
              <CardContent className="p-0">
                <div className="aspect-[4/5] bg-gradient-to-br from-[#572670]/10 to-[#572670]/5 relative">
                  <img
                    src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&h=750&fit=crop&crop=face"
                    alt="Dr. Keerthy Sunder - Psychiatrist"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold mb-2">Dr. Keerthy Sunder</h3>
                    <p className="text-white/90">Board-Certified Psychiatrist</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Floating Stats Card */}
            <Card className="absolute -bottom-6 -right-6 bg-[#572670] text-white shadow-2xl lg:block hidden">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20">
                  Expert Care
                </Badge>
                <Badge className="bg-[#572670]/10 text-[#572670] border-[#572670]/20">
                  Integrative Approach
                </Badge>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Meet Dr. Keerthy Sunder
              </h2>

              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Sunder brings a wealth of expertise in integrative psychiatry, combining advanced medical training with a holistic approach to mental wellness. Her philosophy centers on treating the whole person, not just symptoms.
              </p>

              <blockquote className="text-xl text-[#572670] font-medium italic border-l-4 border-[#572670] pl-6">
                "Integrative psychiatry combining mind and brain electrophysiology for optimal mental wellness."
              </blockquote>
            </div>

            {/* Credentials Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {credentials.map((credential, index) => {
                const IconComponent = credential.icon;
                return (
                  <Card key={index} className="border-[#572670]/20 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-[#572670]/10">
                          <IconComponent className="h-5 w-5 text-[#572670]" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{credential.title}</h4>
                          <p className="text-xs text-gray-600 mt-1">{credential.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className="space-y-4 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-bold text-gray-900">Professional Focus Areas:</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Treatment-Resistant Depression',
                  'Anxiety Disorders',
                  'PTSD & Trauma',
                  'Addiction Medicine',
                  'Women\'s Mental Health',
                  'Integrative Psychiatry'
                ].map((area, index) => (
                  <span key={index} className="text-sm bg-white px-3 py-1 rounded-full text-gray-700 border">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8">
                Schedule with Dr. Sunder
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white px-8">
                Learn More About Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;