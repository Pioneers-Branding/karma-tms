import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Brain, Heart, Shield, Users, Zap, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const ConditionsSection = () => {
  const conditions = [
  {
    icon: Brain,
    title: 'Depression',
    subtitle: 'Treatment-Resistant',
    description: 'FDA-cleared for major depressive disorder when multiple antidepressants haven\'t worked effectively.',
    stats: '85% improvement rate'
  },
  {
    icon: Heart,
    title: 'Anxiety Disorders',
    subtitle: 'Generalized & Specific',
    description: 'Effective treatment for various anxiety disorders including GAD, social anxiety, and panic disorder.',
    stats: 'Significant relief in 6-8 weeks'
  },
  {
    icon: Shield,
    title: 'PTSD & Trauma',
    subtitle: 'Post-Traumatic Stress',
    description: 'Targeted therapy for trauma-related disorders and complex PTSD symptoms.',
    stats: 'Clinically proven results'
  },
  {
    icon: Zap,
    title: 'OCD',
    subtitle: 'Obsessive-Compulsive',
    description: 'Specialized TMS protocols for obsessive-compulsive disorder and related conditions.',
    stats: 'FDA-cleared protocol'
  },
  {
    icon: Users,
    title: 'Women\'s Mood Disorders',
    subtitle: 'Perinatal & Hormonal',
    description: 'Safe treatment for postpartum depression, perinatal mood disorders, and hormone-related conditions.',
    stats: 'Safe during pregnancy',
    link: '/conditions/womens-mood'
  },
  {
    icon: Clock,
    title: 'Stress & Adjustment',
    subtitle: 'Life Transitions',
    description: 'Treatment for chronic stress, adjustment disorders, and major life transition challenges.',
    stats: 'Rapid symptom relief'
  }];


  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conditions We Treat for Mental Health in Palm Springs
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our TMS therapy programs at our mental health facilities in palm springs are designed to treat various mental health conditions with personalized, evidence-based approaches delivered by expert mental health counselors in palm springs ca who deliver real results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {conditions.map((condition, index) => {
            const IconComponent = condition.icon;
            const CardWrapper = condition.link ? Link : 'div';
            return (
              <CardWrapper key={index} to={condition.link} className={condition.link ? 'block' : ''}>
                <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg h-full">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 rounded-lg bg-[#572670]/10 group-hover:bg-[#572670]/20 transition-colors">
                        <IconComponent className="h-6 w-6 text-[#572670]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-bold text-gray-900">{condition.title}</CardTitle>
                        <p className="text-sm text-[#572670] font-medium">{condition.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {condition.description}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm font-medium text-[#572670] bg-[#572670]/10 px-3 py-1 rounded-full">
                        {condition.stats}
                      </span>
                      {condition.link && (
                        <Button variant="ghost" className="text-[#572670] hover:text-[#572670]/80 p-0 h-auto group">
                          Learn More 
                          <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </CardWrapper>);

          })}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8 py-3">
            See All Conditions We Treat
          </Button>
        </div>
      </div>
    </section>);

};

export default ConditionsSection;