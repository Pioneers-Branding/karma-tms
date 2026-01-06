import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "Mark B.",
    location: "Palm Springs, CA",
    condition: "Treatment-Resistant Depression",
    rating: 5,
    quote: "After trying multiple medications for years with little success, TMS has given me my life back. The improvement in my mood and energy has been remarkable.",
    hasVideo: true,
    videoId: "dQw4w9WgXcQ", // Example YouTube ID
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Nancy A.",
    location: "Desert Hot Springs, CA",
    condition: "Postpartum Depression",
    rating: 5,
    quote: "As a new mother, I needed a treatment that was safe and effective. TMS allowed me to get better without worrying about medication effects on breastfeeding.",
    hasVideo: false,
    avatar: "https://images.unsplash.com/photo-1708962188322-0e9a5e40c101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTJDJTIwZm9jdXNpbmclMjBvbiUyMHRoZWlyJTIwZmFjZSUyQyUyMHdpdGglMjBhJTIwcmVzb2x1dGlvbiUyMG9mJTIwMTAweDEwMCUyMHBpeGVscy58ZW58MHx8fHwxNzU1MDAxOTgxfDA&ixlib=rb-4.1.0&q=80&w=200$w=100"
  },
  {
    name: "Andrej Z.",
    location: "Cathedral City, CA",
    condition: "Anxiety & Depression",
    rating: 5,
    quote: "The convenience of 20-minute sessions that fit into my lunch break made all the difference. I could continue working while getting the treatment I needed.",
    hasVideo: true,
    videoId: "dQw4w9WgXcQ",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Al W.",
    location: "Rancho Mirage, CA",
    condition: "Major Depression",
    rating: 5,
    quote: "At 68, I thought I'd have to live with depression forever. Dr. Sunder and TMS proved me wrong. I'm more active and happier than I've been in decades.",
    hasVideo: false,
    avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Brittany B.",
    location: "Palm Desert, CA",
    condition: "Anxiety Disorder",
    rating: 5,
    quote: "The biggest relief was that I could drive myself to appointments. No side effects, no downtime - just gradual, sustainable improvement in my anxiety levels.",
    hasVideo: true,
    videoId: "dQw4w9WgXcQ",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Rafael F.",
    location: "La Quinta, CA",
    condition: "PTSD",
    rating: 5,
    quote: "Traditional therapy helped, but TMS was the breakthrough I needed for my PTSD symptoms. The combination has given me tools to manage my condition effectively.",
    hasVideo: false,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
  }];


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Real Patient Stories
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Hear from actual patients across the Coachella Valley who have transformed their lives with TMS therapy at Karma TMS.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="mx-auto mb-12">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Video/Image Side */}
                <div className="relative bg-gradient-to-br from-[#572670] to-[#572670]/80 p-8 lg:p-12 flex items-center justify-center">
                  {currentData.hasVideo ?
                  <div className="relative w-full max-w-md">
                      {/* YouTube Embed */}
                      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${currentData.videoId}?controls=1&modestbranding=1`}
                          title={`${currentData.name} Testimonial`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="rounded-lg"
                        ></iframe>
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white text-[#572670] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Video Testimonial
                        </div>
                      </div>
                    </div> :

                  <Avatar className="w-48 h-48 lg:w-64 lg:h-64 border-4 border-white/30">
                      <AvatarImage src={currentData.avatar} alt={currentData.name} />
                      <AvatarFallback className="text-4xl bg-white/20 text-white">
                        {currentData.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                  }
                </div>

                {/* Content Side */}
                <div className="p-8 lg:p-12 space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    {[...Array(currentData.rating)].map((_, i) =>
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>

                  <Quote className="h-8 w-8 text-[#572670]/30" />
                  
                  <blockquote className="text-lg lg:text-xl text-gray-700 leading-relaxed font-medium">
                    "{currentData.quote}"
                  </blockquote>

                  <div className="space-y-2 pt-4 border-t">
                    <div className="font-bold text-xl text-gray-900">{currentData.name}</div>
                    <div className="text-[#572670] font-medium">{currentData.location}</div>
                    <div className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full inline-block">
                      {currentData.condition}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mb-8">
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
              className={`w-3 h-3 rounded-full transition-all ${
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

        {/* Thumbnail Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mx-auto mb-8">
          {testimonials.map((testimonial, index) =>
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`relative p-3 rounded-lg transition-all ${
            index === currentTestimonial ?
            'bg-[#572670] text-white' :
            'bg-white hover:bg-gray-50 shadow-md'}`
            }>

              <Avatar className="w-12 h-12 mx-auto mb-2">
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-xs font-medium">{testimonial.name}</div>
              {testimonial.hasVideo &&
            <Play className="h-3 w-3 absolute top-2 right-2 opacity-70" />
            }
            </button>
          )}
        </div>

        <div className="text-center">
          <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8">
            Read More Success Stories
          </Button>
        </div>
      </div>
    </section>);

};

export default TestimonialsSection;