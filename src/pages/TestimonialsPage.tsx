
import { useState } from 'react';
import { Search, Star, Play, Filter, Users, Quote, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

const TestimonialsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCondition, setSelectedCondition] = useState('All');
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const testimonials = [
  {
    id: 1,
    name: 'Patricia D.',
    location: 'Palm Springs, CA',
    condition: 'Treatment-Resistant Depression',
    rating: 5,
    quote: 'Depression is a miserable way to deal with life on a daily basis. When the med dont seem to do the trick, TMS therapy is a sensible addition to treatment that has helped me in the battle.',
    hasVideo: false,
    videoId: '',
    avatar: 'https://images.unsplash.com/photo-1738980420952-56cc02acd17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmlsZSUyMGF2YXRhciUyMGltYWdlJTIwb2YlMjBhJTIwcGVyc29uJTJDJTIwbGlrZWx5JTIwdXNlZCUyMGZvciUyMHRlc3RpbW9uaWFscyUyMG9yJTIwdXNlciUyMHJlcHJlc2VudGF0aW9uLnxlbnwwfHx8fDE3NTkyMzY3MDd8MA&ixlib=rb-4.1.0&q=80&w=200$w=512',
    date: '2024-01-15'
  },
  {
    id: 2,
    name: 'Thomas M.',
    location: 'Desert Hot Springs, CA',
    condition: 'Postpartum Depression',
    rating: 5,
    quote: 'TMS has helped me incredibly. It took more than half way throughout the sessions to see results but it definitely started to kick in. I highly recommend anyone suffering with depression etc to try TMS.',
    hasVideo: true,
    videoId: 'xewffol4oOQ',
    avatar: 'https://images.unsplash.com/photo-1739296408127-b6cc9c5c094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmlsZSUyMGF2YXRhciUyMGltYWdlJTIwbGlrZWx5JTIwdXNlZCUyMGZvciUyMHRlc3RpbW9uaWFscyUyMG9yJTIwdXNlciUyMHJlcHJlc2VudGF0aW9uLnxlbnwwfHx8fDE3NTkyMzY3MDh8MA&ixlib=rb-4.1.0&q=80&w=200$w=512',
    date: '2024-02-03'
  },
  {
    id: 3,
    name: 'Benjamin A.',
    location: 'Cathedral City, CA',
    condition: 'Anxiety & Depression',
    rating: 5,
    quote: 'My TMS experience was life changing. I went from being in bed for weeks and months to rejoining life again. The science behind this technology is the hope so many of us need. If you\'re thinking about TMS therapy I highly recommend it.',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ',
    avatar: 'https://images.unsplash.com/photo-1739296408127-b6cc9c5c094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmlsZSUyMGF2YXRhciUyMGltYWdlJTIwbGlrZWx5JTIwdXNlZCUyMGZvciUyMHRlc3RpbW9uaWFscyUyMG9yJTIwdXNlciUyMHJlcHJlc2VudGF0aW9uLnxlbnwwfHx8fDE3NTkyMzY3MDh8MA&ixlib=rb-4.1.0&q=80&w=200$w=512',
    date: '2024-01-28'
  },
  {
    id: 4,
    name: 'Nicole J.',
    location: 'Rancho Mirage, CA',
    condition: 'Major Depression',
    rating: 5,
    quote: 'TMS therapy changed my life! This was a leap of faith and it worked out for me, TMS saved my life!',
    hasVideo: false,
    videoId: '',
    avatar: 'https://images.unsplash.com/photo-1739296408127-b6cc9c5c094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmlsZSUyMGF2YXRhciUyMGltYWdlJTIwbGlrZWx5JTIwdXNlZCUyMGZvciUyMHRlc3RpbW9uaWFscyUyMG9yJTIwdXNlciUyMHJlcHJlc2VudGF0aW9uLnxlbnwwfHx8fDE3NTkyMzY3MDh8MA&ixlib=rb-4.1.0&q=80&w=200$w=512',
    date: '2024-02-12'
  },
  {
    id: 5,
    name: 'Lynette I.',
    location: 'Palm Desert, CA',
    condition: 'Anxiety Disorder',
    rating: 5,
    quote: 'I have had treatment-resistant clinical depression since childhood. TMS proved to be a life-changing decision, since after completing the recommended number of treatments, I experienced, for the first time, life without the dark cycles of depression.',
    hasVideo: true,
    videoId: 'dQw4w9WgXcQ',
    avatar: 'https://images.unsplash.com/photo-1739296408127-b6cc9c5c094b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwcHJvZmlsZSUyMGF2YXRhciUyMGltYWdlJTIwbGlrZWx5JTIwdXNlZCUyMGZvciUyMHRlc3RpbW9uaWFscyUyMG9yJTIwdXNlciUyMHJlcHJlc2VudGF0aW9uLnxlbnwwfHx8fDE3NTkyMzY3MDh8MA&ixlib=rb-4.1.0&q=80&w=200$w=512',
    date: '2024-01-20'
  }];


  const videoTestimonials = testimonials.filter((t) => t.hasVideo);
  const conditions = ['All', ...Array.from(new Set(testimonials.map((t) => t.condition)))];

  const filteredTestimonials = testimonials.filter((testimonial) => {
    const matchesSearch = testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.quote.toLowerCase().includes(searchTerm.toLowerCase()) ||
    testimonial.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCondition = selectedCondition === 'All' || testimonial.condition === selectedCondition;
    return matchesSearch && matchesCondition;
  });

  const StarRating = ({ rating }: {rating: number;}) =>
  <div className="flex gap-1">
      {[...Array(5)].map((_, i) =>
    <Star key={i} className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
    )}
    </div>;


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-[#572670] to-[#572670]/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Patient Testimonials
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Real stories from real patients who have transformed their lives with TMS therapy at Karma TMS
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-white/80">
            <Users className="h-5 w-5" />
            <span>Over 500+ Success Stories</span>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search testimonials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10" />

            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <span className="text-sm text-gray-600">Filter by condition:</span>
              <div className="flex gap-2 flex-wrap">
                {conditions.map((condition) =>
                <Badge
                  key={condition}
                  variant={selectedCondition === condition ? 'default' : 'outline'}
                  className={`cursor-pointer ${selectedCondition === condition ? 'bg-[#572670] hover:bg-[#572670]/90' : 'hover:bg-[#572670]/10'}`}
                  onClick={() => setSelectedCondition(condition)}>

                    {condition}
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filteredTestimonials.map((testimonial) =>
            <Card key={testimonial.id} className="group hover:shadow-lg transition-shadow border-0 shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    {testimonial.hasVideo &&
                  <div className="bg-[#572670] text-white p-2 rounded-full">
                        <Play className="h-4 w-4" />
                      </div>
                  }
                  </div>
                  
                  <StarRating rating={testimonial.rating} />
                  
                  <Quote className="h-6 w-6 text-[#572670]/30 my-3" />
                  <blockquote className="text-gray-700 leading-relaxed line-clamp-4">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="mt-4 pt-4 border-t">
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.condition}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>

      {/* Video Wall Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Video Testimonials
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch our patients share their personal TMS therapy journeys
            </p>
          </div>

          {videoTestimonials.length > 0 &&
          <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Main Video */}
              <div className="order-2 lg:order-1">
                <Card className="overflow-hidden shadow-lg">
                  <div className="aspect-video bg-black">
                    <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoTestimonials[currentVideoIndex]?.videoId}?controls=1&modestbranding=1`}
                    title={`${videoTestimonials[currentVideoIndex]?.name} Testimonial`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />

                  </div>
                </Card>
              </div>

              {/* Video List */}
              <div className="order-1 lg:order-2 space-y-4">
                {videoTestimonials.map((video, index) =>
              <Card
                key={video.id}
                className={`cursor-pointer transition-all hover:shadow-md ${
                currentVideoIndex === index ? 'ring-2 ring-[#572670] bg-[#572670]/5' : ''}`
                }
                onClick={() => setCurrentVideoIndex(index)}>

                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={video.avatar} alt={video.name} />
                          <AvatarFallback>{video.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{video.name}</h4>
                          <p className="text-sm text-gray-600">{video.condition}</p>
                        </div>
                        <Play className="h-5 w-5 text-[#572670]" />
                      </div>
                    </CardContent>
                  </Card>
              )}
              </div>
            </div>
          }
        </div>
      </section>

      {/* Schema Rating Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="bg-gradient-to-r from-[#572670] to-[#572670]/80 text-white">
            <CardContent className="p-8 text-center">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">
                  Trusted by Patients Across the Coachella Valley
                </h3>
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center gap-2">
                    {[...Array(5)].map((_, i) =>
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                    )}
                  </div>
                  <span className="text-2xl font-bold">4.9/5</span>
                </div>
                <p className="text-white/90 mb-6">
                  Based on {testimonials.length}+ verified patient reviews
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-[#572670] hover:bg-gray-100">

                  Schedule Your Free Consultation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default TestimonialsPage;