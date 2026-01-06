import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ChevronLeft, ChevronRight, Play, Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
  {
    name: "Patricia D.",
    location: "Palm Springs, CA",
    condition: "Treatment-Resistant Depression",
    rating: 5,
    quote: "Depression is a miserable way to deal with life on a daily basis. When the med dont seem to do the trick ,TMS therapy is a sensible addition to treatment that has helped me in the battle.",
    hasVideo: false,
    videoId: "xewffol4oOQ",
    videoType: "youtube",
    avatar: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Luis",
    location: "Coachella Valley, CA",
    condition: "Depression Treatment",
    rating: 5,
    quote: "Testimonio en español sobre mi experiencia transformadora con la terapia TMS en Karma TMS.",
    hasVideo: true,
    videoId: "1106562016",
    videoType: "vimeo",
    avatar: "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lucia",
    location: "Coachella Valley, CA",
    condition: "Mental Health Treatment",
    rating: 5,
    quote: "La terapia TMS ha cambiado mi vida. Recomiendo este tratamiento a cualquier persona que busque una solución efectiva.",
    hasVideo: true,
    videoId: "1098237681",
    videoType: "vimeo",
    vimeoHash: "b204c02062",
    avatar: "https://images.unsplash.com/photo-1565979612809-d90c6ca38df9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Thomas M.",
    location: "Desert Hot Springs, CA",
    condition: "Major Depression",
    rating: 5,
    quote: "TMS has helped me incredibly.It took more then half way throughout the sessions to see results but it definitely started to kick in. I highly recommend anyone sufferings with depression etc to try TMS.",
    hasVideo: false,
    videoType: "youtube",
    avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?q=80&w=1023&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Benjamin A.",
    location: "Cathedral City, CA",
    condition: "Anxiety & Depression",
    rating: 5,
    quote: "My TMS experience was life changing. I went from being in bed for weeks and months to rejoining life again. The science behind this technology is the hope so many of us need.If you’re thinking about TMS therapy I highly recommend it.",
    hasVideo: false,
    videoId: "dQw4w9WgXcQ",
    videoType: "youtube",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Nicole J.",
    location: "Rancho Mirage, CA",
    condition: "Major Depression",
    rating: 5,
    quote: "TMS therapy changed my life! This was a leap of faith and it worked out for me, TMS saved my life!",
    hasVideo: false,
    videoType: "youtube",
    avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Lynette I.",
    location: "Palm Desert, CA",
    condition: "Anxiety Disorder",
    rating: 5,
    quote: "I have had treatment-resistant clinical depression since childhood. [TMS] proved to be a life-changing decision, since after completing the recommended number of treatments, I experienced, for the first time, life without the dark cycles of depression",
    hasVideo: false,
    videoId: "dQw4w9WgXcQ",
    videoType: "youtube",
    avatar: "https://images.unsplash.com/photo-1561917210-1c5ad65d3ce4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
                      {/* Video Embed */}
                      <div className="aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
                        {currentData.videoType === 'vimeo' ?
                      <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
                            <iframe
                          src={`https://player.vimeo.com/video/${currentData.videoId}${currentData.vimeoHash ? `?h=${currentData.vimeoHash}&` : '?'}badge=0&autopause=0&player_id=0&app_id=58479`}
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                          title={`${currentData.name} Testimonial`}
                          className="rounded-lg" />

                          </div> :

                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${currentData.videoId}?controls=1&modestbranding=1`}
                        title={`${currentData.name} Testimonial`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="rounded-lg" />

                      }
                      </div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2">
                        <div className="bg-white text-[#572670] px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Video Testimonial
                        </div>
                      </div>
                    </div> :

                  <Avatar className="w-48 h-48 lg:w-64 lg:h-64 ">
                      <AvatarImage src={currentData.avatar} alt={currentData.name} />
                      <AvatarFallback className="text-4xl bg-white/20 text-white object-cover">
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