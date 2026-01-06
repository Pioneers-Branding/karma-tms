import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Shield, Clock, Users, Star, Zap, Play } from 'lucide-react';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const backgroundImages = [
  'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&crop=center',
  'https://images.unsplash.com/photo-1616941424163-e0c65236a7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBmcm9tJTIwVW5zcGxhc2glMkMlMjBsaWtlbHklMjBkZXBpY3RpbmclMjBhJTIwdmlzdWFsbHklMjBhcHBlYWxpbmclMjBzY2VuZSUyMG9yJTIwc3ViamVjdC58ZW58MHx8fHwxNzU1MDAwNzI0fDA&ixlib=rb-4.1.0&q=80&w=200$w=1920',
  'https://images.unsplash.com/photo-1616941424163-e0c65236a7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwaGlnaC1xdWFsaXR5JTIwaW1hZ2UlMjBmcm9tJTIwVW5zcGxhc2glMkMlMjBsaWtlbHklMjBkZXBpY3RpbmclMjBhJTIwdmlzdWFsbHklMjBhcHBlYWxpbmclMjBzY2VuZSUyMG9yJTIwc3ViamVjdC58ZW58MHx8fHwxNzU1MDAwNzI0fDA&ixlib=rb-4.1.0&q=80&w=200$w=1920',
  'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1920&h=1080&fit=crop&crop=center'];


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
        <div className=" mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Main Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm px-4 py-2">
                    <Shield className="h-4 w-4 mr-2" />
                    FDA-Approved Treatment
                  </Badge>
                  <Badge className="bg-green-500/20 text-green-100 border-green-400/30 backdrop-blur-sm px-4 py-2">
                    <Star className="h-4 w-4 mr-2" />
                    75% Success Rate
                  </Badge>
                </div>
                
                <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
                  Transform Your
                  <span className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                    Mental Health
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
                  Revolutionary TMS therapy in Palm Springs. Non-invasive, FDA-approved treatment 
                  that's transforming lives with <strong className="text-white">clinically proven results.</strong>
                </p>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-[#572670] to-[#7c3d90] hover:from-[#7c3d90] hover:to-[#572670] text-white font-semibold px-8 py-4 text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">

                  <Zap className="h-5 w-5 mr-2" />
                  Take Our TMS Quiz
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-[#572670] px-8 py-4 text-lg backdrop-blur-sm bg-white/10 hover:bg-white transition-all duration-300">

                  <Play className="h-5 w-5 mr-2" />
                  Watch How TMS Works
                </Button>
              </div>
            </div>

            {/* Right Column - Interactive Cards */}
            <div className="space-y-6">
              {/* Main Stats Card */}
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-500 transform hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="text-center text-white space-y-4">
                    <h3 className="text-2xl font-bold">Why Choose TMS?</h3>
                    <div className="grid grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-green-400">75%</div>
                        <div className="text-sm text-gray-300">Success Rate</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-blue-400">20min</div>
                        <div className="text-sm text-gray-300">Sessions</div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-4xl font-bold text-purple-400">✓</div>
                        <div className="text-sm text-gray-300">Insurance</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-green-500/20 group-hover:bg-green-500/30 transition-colors">
                        <CheckCircle className="h-6 w-6 text-green-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Non-Invasive</h4>
                        <p className="text-sm text-gray-300">No surgery required</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-blue-500/20 group-hover:bg-blue-500/30 transition-colors">
                        <Clock className="h-6 w-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Quick Sessions</h4>
                        <p className="text-sm text-gray-300">20-minute treatments</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-purple-500/20 group-hover:bg-purple-500/30 transition-colors">
                        <Shield className="h-6 w-6 text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">FDA Approved</h4>
                        <p className="text-sm text-gray-300">Scientifically proven</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 group">
                  <CardContent className="p-6 text-white">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-yellow-500/20 group-hover:bg-yellow-500/30 transition-colors">
                        <Users className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Covered</h4>
                        <p className="text-sm text-gray-300">By most insurance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quiz CTA Card */}
              <Card className="bg-gradient-to-r from-[#572670]/20 to-purple-600/20 backdrop-blur-md border-purple-300/30 hover:from-[#572670]/30 hover:to-purple-600/30 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6 text-white text-center">
                  <h3 className="text-xl font-bold mb-3">Is TMS Right for You?</h3>
                  <p className="text-gray-300 mb-4">Take our quick assessment to find out if you're a candidate</p>
                  <Button className="bg-white text-[#572670] hover:bg-gray-100 font-semibold">
                    Start Assessment
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
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