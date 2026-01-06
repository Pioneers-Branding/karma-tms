import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Shield, Clock, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#572670] to-[#572670]/90 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                FDA-Approved Treatment
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Advanced TMS Therapy in Palm Springs
                <span className="block text-white/90 text-2xl lg:text-3xl xl:text-4xl font-normal mt-2">
                  Empowering Minds, Enhancing Lives
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                FDA-approved transcranial magnetic stimulation therapy for treatment-resistant depression, anxiety, and mental health conditions. <strong>75% of patients show clinically meaningful improvement.</strong>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-[#572670] hover:bg-white/90 font-semibold px-8">
                Take Our Quiz to See if TMS is Right for You
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#572670] px-8">
                Schedule Your Consultation
              </Button>
            </div>

            {/* Key Stats */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold">75%</div>
                    <div className="text-sm text-white/80">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold">20min</div>
                    <div className="text-sm text-white/80">Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl lg:text-3xl font-bold">✓</div>
                    <div className="text-sm text-white/80">Insurance Covered</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Benefits Cards */}
          <div className="space-y-4">
            <div className="grid gap-4">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <Shield className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="font-semibold text-lg">FDA-Approved Treatment</h3>
                    <p className="text-white/80">Non-invasive, scientifically proven therapy</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="font-semibold text-lg">No Medication Side Effects</h3>
                    <p className="text-white/80">Drive yourself to and from appointments</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <Clock className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="font-semibold text-lg">Quick & Convenient</h3>
                    <p className="text-white/80">20-minute sessions, 6-8 week course</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300">
                <CardContent className="p-6 flex items-center gap-4">
                  <Users className="h-8 w-8 text-white" />
                  <div>
                    <h3 className="font-semibold text-lg">Insurance Coverage</h3>
                    <p className="text-white/80">Major providers cover TMS therapy</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;