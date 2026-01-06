import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Star, Zap, Play, User, Phone as PhoneIcon, Mail, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center',
  'https://karmatms.com/wp-content/uploads/2024/09/64f25e1d7ad0910405ab506b-2.jpeg',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&h=1080&fit=crop&crop=center',
  'https://content.r9cdn.net/rimg/dimg/bb/85/130e54d5-city-35219-16bfbb46ea8.jpg?crop=true&width=1020&height=498'];


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0">
        {backgroundImages.map((image, index) =>
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
          index === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'}`
          }
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }} />

        )}
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#572670]/30" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="text-white space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3 flex-wrap">
                <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  FDA-Approved Treatment
                </Badge>
                <Badge className="bg-green-500/20 text-green-100 border-green-400/30 backdrop-blur-sm px-4 py-2">
                  <Star className="h-4 w-4 mr-2" />
                  75% Success Rate
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-none tracking-tight">
                Advanced TMS Therapy
                <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  in Palm Springs
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl">
                Empowering minds, enhancing lives. FDA-approved treatment for depression, 
                anxiety, and mental health conditions with <strong className="text-white">clinically proven results.</strong>
              </p>
              
              {/* Compact Stats */}
              <div className="flex items-center gap-6 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400">75%</div>
                  <div className="text-gray-300">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">20min</div>
                  <div className="text-gray-300">Sessions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">✓</div>
                  <div className="text-gray-300">Insurance Covered</div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#572670] to-[#7c3d90] hover:from-[#7c3d90] hover:to-[#572670] text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">

                <Zap className="h-5 w-5 mr-2" />
                Take Our TMS Quiz
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">
            {/* Contact Form with Glassmorphism */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 shadow-2xl">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Get Your Free Consultation</h3>
                    <p className="text-gray-200 text-sm">Take the first step toward better mental health</p>
                  </div>
                  
                  <form className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white text-sm font-medium">Full Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" />

                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-white text-sm font-medium">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(760) 123-4567"
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" />

                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white text-sm font-medium">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50" />

                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="condition" className="text-white text-sm font-medium">Primary Condition</Label>
                      <Select>
                        <SelectTrigger className="bg-white/20 border-white/30 text-white focus:bg-white/30 focus:border-white/50">
                          <SelectValue placeholder="Select your primary concern" />
                        </SelectTrigger>
                        <SelectContent className="bg-white/95 backdrop-blur-md">
                          <SelectItem value="depression">Depression</SelectItem>
                          <SelectItem value="anxiety">Anxiety</SelectItem>
                          <SelectItem value="ptsd">PTSD</SelectItem>
                          <SelectItem value="ocd">OCD</SelectItem>
                          <SelectItem value="stress">Stress/Adjustment Disorders</SelectItem>
                          <SelectItem value="womens-mood">Women's Mood Disorders</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-white text-sm font-medium">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about how we can help you..."
                        className="bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30 focus:border-white/50 resize-none"
                        rows={3} />

                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="consent"
                        className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-[#572670]" />

                      <Label htmlFor="consent" className="text-white text-xs leading-4">
                        I consent to be contacted by Karma TMS and authorize the use of this data for clinical evaluation and treatment recommendations.
                      </Label>
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-white text-[#572670] hover:bg-white/90 font-semibold py-3 transition-all duration-300 shadow-lg hover:shadow-xl">
                      Schedule Your Consultation
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>

            {/* Quick Benefits */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 text-white text-center">
                  <CheckCircle className="h-6 w-6 text-green-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Non-Invasive</h4>
                  <p className="text-xs text-gray-300">No surgery required</p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-4 text-white text-center">
                  <Clock className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                  <h4 className="font-semibold text-sm">Quick Sessions</h4>
                  <p className="text-xs text-gray-300">20-minute treatments</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {backgroundImages.map((_, index) =>
        <button
          key={index}
          onClick={() => setCurrentImageIndex(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentImageIndex ?
          'bg-white scale-125' :
          'bg-white/50 hover:bg-white/75'}`
          } />

        )}
      </div>
    </section>);

};

export default HeroSection;