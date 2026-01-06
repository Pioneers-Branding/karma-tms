import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Brain, Phone, ExternalLink, Clock } from 'lucide-react';

const QuickAccessSection = () => {
  const resources = [
  {
    icon: Brain,
    title: "Research & Studies",
    description: "Access published research and clinical studies on TMS therapy effectiveness",
    cta: "View Research",
    highlight: "Peer-reviewed studies",
    color: "bg-blue-500"
  },
  {
    icon: FileText,
    title: "Patient Resources",
    description: "Treatment guides, FAQs, and preparation materials for your TMS journey",
    cta: "Download Guides",
    highlight: "Free resources",
    color: "bg-green-500"
  },
  {
    icon: BookOpen,
    title: "Mental Health Blog",
    description: "Latest insights, tips, and news about mental health and TMS therapy",
    cta: "Read Articles",
    highlight: "Weekly updates",
    color: "bg-purple-500"
  },
  {
    icon: Phone,
    title: "Emergency Resources",
    description: "Crisis hotlines and immediate support resources available 24/7",
    cta: "Get Help Now",
    highlight: "Available 24/7",
    color: "bg-red-500"
  }];


  const emergencyNumbers = [
  { name: "National Suicide Prevention Lifeline", number: "988", available: "24/7" },
  { name: "Crisis Text Line", number: "Text HOME to 741741", available: "24/7" },
  { name: "Karma TMS Emergency", number: "760-760-5675", available: "Business Hours" }];


  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quick Access Resources
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to support your mental health journey, from research and guides 
            to emergency resources and expert insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg h-full">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg ${resource.color} bg-opacity-10`}>
                      <IconComponent className={`h-6 w-6 ${resource.color.replace('bg-', 'text-')}`} />
                    </div>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {resource.highlight}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-gray-900">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {resource.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white group-hover:shadow-md transition-all">

                    {resource.cta}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>);

          })}
        </div>

        {/* Emergency Section */}
        <Card className="bg-red-50 border-red-200 shadow-xl">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Phone className="h-8 w-8 text-red-600" />
                <h3 className="text-2xl font-bold text-red-900">Emergency Mental Health Resources</h3>
              </div>
              <p className="text-red-800">
                If you're experiencing a mental health crisis, don't wait. Help is available immediately.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {emergencyNumbers.map((emergency, index) =>
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-red-200">
                  <h4 className="font-bold text-gray-900 mb-2">{emergency.name}</h4>
                  <div className="text-2xl font-bold text-red-600 mb-2">{emergency.number}</div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span>{emergency.available}</span>
                  </div>
                  <Button
                  className="w-full mt-4 bg-red-600 hover:bg-red-700 text-white"
                  onClick={() => emergency.number.includes('Text') ? null : window.open(`tel:${emergency.number.replace(/\D/g, '')}`, '_self')}>

                    {emergency.number.includes('Text') ? 'Send Text' : 'Call Now'}
                  </Button>
                </div>
              )}
            </div>

            <div className="text-center mt-8 p-6 bg-white rounded-lg border border-red-200">
              <p className="text-gray-700 mb-4">
                <strong>Remember:</strong> You are not alone. Mental health crises are medical emergencies, 
                and seeking help is a sign of strength, not weakness.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white">
                  Find Local Crisis Centers
                </Button>
                <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white">
                  Schedule Non-Emergency Consultation
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>);

};

export default QuickAccessSection;