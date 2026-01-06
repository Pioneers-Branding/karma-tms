import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "Patricia D.",
    location: "Palm Springs, CA",
    condition: "Treatment-Resistant Depression",
    rating: 5,
    quote: "Depression is a miserable way to deal with life on a daily basis. When the med dont seem to do the trick ,TMS therapy is a sensible addition to treatment that has helped me in the battle."
  },
  {
    name: "Luis",
    location: "Coachella Valley, CA",
    condition: "Depression Treatment",
    rating: 5,
    quote: "Testimonio en español sobre mi experiencia transformadora con la terapia TMS en Karma TMS."
  },
  {
    name: "Lucia",
    location: "Coachella Valley, CA",
    condition: "Mental Health Treatment",
    rating: 5,
    quote: "La terapia TMS ha cambiado mi vida. Recomiendo este tratamiento a cualquier persona que busque una solución efectiva."
  },
  {
    name: "Thomas M.",
    location: "Desert Hot Springs, CA",
    condition: "Major Depression",
    rating: 5,
    quote: "TMS has helped me incredibly.It took more then half way throughout the sessions to see results but it definitely started to kick in. I highly recommend anyone sufferings with depression etc to try TMS."
  },
  {
    name: "Benjamin A.",
    location: "Cathedral City, CA",
    condition: "Anxiety & Depression",
    rating: 5,
    quote: "My TMS experience was life changing. I went from being in bed for weeks and months to rejoining life again. The science behind this technology is the hope so many of us need.If you're thinking about TMS therapy I highly recommend it."
  },
  {
    name: "Nicole J.",
    location: "Rancho Mirage, CA",
    condition: "Major Depression",
    rating: 5,
    quote: "TMS therapy changed my life! This was a leap of faith and it worked out for me, TMS saved my life!"
  },
  {
    name: "Lynette I.",
    location: "Palm Desert, CA",
    condition: "Anxiety Disorder",
    rating: 5,
    quote: "I have had treatment-resistant clinical depression since childhood. [TMS] proved to be a life-changing decision, since after completing the recommended number of treatments, I experienced, for the first time, life without the dark cycles of depression"
  }];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Real Patient Stories from Our Mental Health Facilities in Palm Springs
          </h2>
          <p className="text-base text-gray-600">
            Hear from actual patients who have transformed their mental health in Palm Springs with TMS therapy from our mental health counselors in Palm Springs, CA at Karma TMS.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mx-auto mb-6">
          <Card className="bg-white shadow-lg border-0">
            <CardContent className="p-6 lg:p-8">
              <div className="flex items-start gap-2 mb-3">
                {[...Array(currentData.rating)].map((_, i) =>
                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                )}
              </div>

              <Quote className="h-6 w-6 text-[#572670]/30 mb-2" />
              
              <blockquote className="text-base lg:text-lg text-gray-700 leading-relaxed mb-4">
                "{currentData.quote}"
              </blockquote>

              <div className="space-y-1 pt-3 border-t">
                <div className="font-bold text-lg text-gray-900">{currentData.name}</div>
                <div className="text-[#572670] font-medium text-sm">{currentData.location}</div>
                <div className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full inline-block">
                  {currentData.condition}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <Button
            variant="outline"
            size="icon"
            onClick={prevTestimonial}
            className="rounded-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

            <ChevronLeft className="h-4 w-4" />
          </Button>

          <div className="flex gap-2">
            {testimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all ${
              index === currentTestimonial ? 'bg-[#572670]' : 'bg-gray-300'}`
              } />

            )}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextTestimonial}
            className="rounded-full border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">

            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Thumbnail Grid - Content Only */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-2 mx-auto mb-6">
          {testimonials.map((testimonial, index) =>
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`p-2 rounded-lg transition-all text-center ${
            index === currentTestimonial ?
            'bg-[#572670] text-white' :
            'bg-white hover:bg-gray-50 shadow-md'}`
            }>

              <div className="text-xs font-medium">{testimonial.name}</div>
            </button>
          )}
        </div>

        <div className="text-center">
          <Link to="/testimonials" aria-label="Read more success stories">
            <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8">
              Read More Success Stories
            </Button>
          </Link>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;