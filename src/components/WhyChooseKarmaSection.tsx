import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Clock, CheckCircle, Users, Car, Calendar } from 'lucide-react';

const WhyChooseKarmaSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "FDA-Approved Treatment",
      description: "Non-invasive, scientifically proven therapy with rigorous clinical validation"
    },
    {
      icon: Users,
      title: "Insurance Coverage",
      description: "Coverage by major providers when traditional treatments haven't worked"
    },
    {
      icon: Clock,
      title: "Convenient 20-Minute Sessions",
      description: "Quick treatments that fit into your busy schedule"
    },
    {
      icon: CheckCircle,
      title: "No Medication Side Effects",
      description: "Avoid the weight gain, fatigue, and other medication-related issues"
    },
    {
      icon: Car,
      title: "Drive Yourself To/From",
      description: "No sedation or impairment - maintain your independence"
    },
    {
      icon: Calendar,
      title: "6-8 Week Treatment Course",
      description: "Structured program with measurable progress milestones"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Karma TMS?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our comprehensive approach to TMS therapy combines cutting-edge technology with personalized care, 
            delivering exceptional results for patients across the Coachella Valley.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-[#572670]/10 group-hover:bg-[#572670]/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-[#572670]" />
                    </div>
                    <CardTitle className="text-lg font-bold text-gray-900">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseKarmaSection;