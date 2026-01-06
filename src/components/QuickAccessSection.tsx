import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, Brain, ExternalLink } from 'lucide-react';

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
  }];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quick Access Resources
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Everything you need to support your mental health journey, from research and guides 
            to expert insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
      </div>
    </section>);

};

export default QuickAccessSection;