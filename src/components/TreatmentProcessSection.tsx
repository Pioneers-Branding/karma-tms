import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, CreditCard, FileText, Clock, BarChart3 } from 'lucide-react';

const TreatmentProcessSection = () => {
  const steps = [
    {
      step: 1,
      icon: ClipboardList,
      title: "Initial Consultation & Evaluation",
      description: "Comprehensive psychiatric evaluation to determine if TMS is right for you",
      duration: "60-90 minutes",
      details: ["Medical history review", "Mental health assessment", "Treatment goals discussion"]
    },
    {
      step: 2,
      icon: CreditCard,
      title: "Insurance Verification",
      description: "We handle all insurance paperwork and pre-authorization processes",
      duration: "1-3 business days",
      details: ["Benefit verification", "Prior authorization", "Coverage confirmation"]
    },
    {
      step: 3,
      icon: FileText,
      title: "Personalized Treatment Plan",
      description: "Custom protocol developed specifically for your condition and needs",
      duration: "30 minutes",
      details: ["Brain mapping session", "Treatment parameters set", "Schedule coordination"]
    },
    {
      step: 4,
      icon: Clock,
      title: "Daily 20-Minute Sessions",
      description: "Convenient treatments over 6-8 weeks with no downtime",
      duration: "6-8 weeks",
      details: ["36 total sessions", "Monday-Friday schedule", "No anesthesia needed"]
    },
    {
      step: 5,
      icon: BarChart3,
      title: "Progress Monitoring & Follow-up",
      description: "Regular assessments to track improvement and adjust as needed",
      duration: "Ongoing",
      details: ["Weekly progress reviews", "Symptom tracking", "Long-term follow-up care"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Treatment Journey
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our streamlined 5-step process ensures you receive the most effective TMS treatment 
            with minimal disruption to your daily life.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 1;
            
            return (
              <div key={index} className={`mb-12 ${isEven ? 'lg:ml-auto lg:text-right' : ''}`}>
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${isEven ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Content */}
                  <div className={`space-y-4 ${isEven ? 'lg:col-start-2 lg:text-left' : ''}`}>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge className="bg-[#572670] text-white text-lg px-3 py-1">
                        Step {step.step}
                      </Badge>
                      <Badge variant="outline" className="border-[#572670] text-[#572670]">
                        {step.duration}
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center gap-2 text-gray-600">
                          <div className="w-2 h-2 rounded-full bg-[#572670]"></div>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card */}
                  <Card className={`shadow-xl border-0 ${isEven ? 'lg:col-start-1' : ''}`}>
                    <CardContent className="p-8 text-center">
                      <div className="w-20 h-20 bg-[#572670]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="h-10 w-10 text-[#572670]" />
                      </div>
                      <div className="text-6xl font-bold text-[#572670] mb-2">
                        {step.step}
                      </div>
                      <div className="text-sm text-gray-500 uppercase tracking-wide">
                        {step.duration}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Connector line (except for last step) */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-12 bg-gradient-to-b from-[#572670] to-[#572670]/30"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8 py-3 text-lg">
            Start Your Journey Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TreatmentProcessSection;