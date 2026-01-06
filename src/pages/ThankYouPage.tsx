import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Button } from '@/components/ui/button';
import { Phone, Mail } from 'lucide-react';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-1 flex items-center justify-center px-4 py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-2xl w-full text-center space-y-8">
          {/* Thank You Message */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Thank You!
            </h1>
            <p className="text-lg text-gray-600">
              We've received your message and will get back to you shortly.
            </p>
          </div>

          {/* Home Button */}
          <div>
            <Button
              onClick={() => navigate('/')}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8"
            >
              Return to Home
            </Button>
          </div>

          {/* Contact Information */}
          <div className="pt-8 space-y-4">
            <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold">
              Contact Us
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-700">
              <a 
                href="tel:+17606999735" 
                className="flex items-center gap-2 hover:text-teal-600 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(760) 699-9735</span>
              </a>
              <a 
                href="mailto:info@karmatms.com" 
                className="flex items-center gap-2 hover:text-teal-600 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>info@karmatms.com</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
