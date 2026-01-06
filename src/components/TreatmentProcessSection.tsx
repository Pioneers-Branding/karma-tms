import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ClipboardList, CreditCard, FileText, Clock, BarChart3, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const TreatmentProcessSection = () => {
  const steps = [
  {
    step: 1,
    icon: ClipboardList,
    title: "Initial Consultation & Evaluation",
    description: "Comprehensive psychiatric evaluation to determine if TMS is right for you",
    duration: "60-90 minutes",
    details: ["Medical history review", "Mental health assessment", "Treatment goals discussion"],
    color: "from-blue-500/20 to-blue-600/20"
  },
  {
    step: 2,
    icon: CreditCard,
    title: "Insurance Verification",
    description: "We handle all insurance paperwork and pre-authorization processes",
    duration: "1-3 business days",
    details: ["Benefit verification", "Prior authorization", "Coverage confirmation"],
    color: "from-green-500/20 to-green-600/20"
  },
  {
    step: 3,
    icon: FileText,
    title: "Personalized Treatment Plan",
    description: "Custom protocol developed specifically for your condition and needs",
    duration: "30 minutes",
    details: ["Brain mapping session", "Treatment parameters set", "Schedule coordination"],
    color: "from-purple-500/20 to-purple-600/20"
  },
  {
    step: 4,
    icon: Clock,
    title: "Daily 20-Minute Sessions",
    description: "Convenient treatments over 6-8 weeks with no downtime",
    duration: "6-8 weeks",
    details: ["36 total sessions", "Monday-Friday schedule", "No anesthesia needed"],
    color: "from-orange-500/20 to-orange-600/20"
  },
  {
    step: 5,
    icon: BarChart3,
    title: "Progress Monitoring & Follow-up",
    description: "Regular assessments to track improvement and adjust as needed",
    duration: "Ongoing",
    details: ["Weekly progress reviews", "Symptom tracking", "Long-term follow-up care"],
    color: "from-pink-500/20 to-pink-600/20"
  }];


  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-64 h-64 bg-purple-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-blue-200/20 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-6 bg-[#572670]/10 text-[#572670] border-[#572670]/20 px-6 py-2 text-base">
            Your Treatment Journey
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Your Path to 
            <span className="bg-gradient-to-r from-[#572670] to-purple-600 bg-clip-text text-transparent"> Mental Wellness</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
          Karma TMS provides evidence-based TMS therapy programs in Palm Springs, CA, tailored to each individual’s needs and guided by expert mental health counselors for proven, lasting results.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-500 group">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-12 gap-0">
                      {/* Step Number & Centered Icon */}
                      <div className={`lg:col-span-3 p-8 bg-gradient-to-br ${step.color} flex flex-col items-center justify-center text-center relative`}>
                        <div
                          className="mb-4 flex items-center justify-center w-16 h-16 rounded-full shadow-lg"
                          style={{
                            background: `linear-gradient(to bottom right, var(--tw-gradient-from, #fff), var(--tw-gradient-to, #fff))`
                          }}>

                          <IconComponent className="h-8 w-8 text-[#572670]" />
                        </div>
                        <div className="text-3xl font-bold text-gray-900">{step.step}</div>
                        <Badge variant="outline" className="mt-2 bg-white/80 backdrop-blur-sm">
                          {step.duration}
                        </Badge>
                      </div>
                      {/* Content */}
                      <div className="lg:col-span-9 p-8 space-y-4">
                        <div>
                          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 group-hover:text-[#572670] transition-colors">
                            {step.title}
                          </h3>
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {step.description}
                          </p>
                        </div>
                        <div className="grid sm:grid-cols-3 gap-4">
                          {step.details.map((detail, detailIndex) =>
                          <div
                            key={detailIndex}
                            className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-lg">

                              <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{detail}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {/* Connecting Arrow (except for last step) */}
                {!isLast &&
                <div className="flex justify-center my-6">
                    <div className="flex flex-col items-center">
                      <ArrowRight className="h-8 w-8 text-[#572670] transform rotate-90" />
                      <div className="w-px h-8 bg-gradient-to-b from-[#572670] to-transparent"></div>
                    </div>
                  </div>
                }
              </div>);

          })}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <Card className="mx-auto bg-gradient-to-r from-[#572670] to-purple-600 border-0 shadow-2xl">
            <CardContent className="p-8 text-white text-center">
              <h3 className="text-3xl font-bold mb-4">Ready to Begin Your Journey?</h3>
              <p className="text-xl mb-6 text-white/90">
                Take the first step toward mental wellness with our proven TMS therapy.
              </p>
              <Button asChild className="bg-white text-[#572670] hover:bg-gray-100 px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <Link to="/contact" aria-label="Start your journey today - Contact">
                  <Clock className="h-5 w-5 mr-2" />
                  Start your journey today
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>);

};

export default TreatmentProcessSection;