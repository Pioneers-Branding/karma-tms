import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

const FooterSection = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Our Team', href: '/team' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'TMS Therapy', href: '/tms-therapy' },
    { name: 'PrTMS', href: '/prtms' },
    { name: 'Brain Mapping', href: '/brain-mapping' },
    { name: 'Neurofeedback', href: '/neurofeedback' },
    { name: 'Medication Management', href: '/medication-management' }
  ];

  const conditions = [
    { name: 'Depression', href: '/conditions/depression' },
    { name: 'Anxiety', href: '/conditions/anxiety' },
    { name: 'OCD', href: '/conditions/ocd' },
    { name: 'PTSD', href: '/conditions/ptsd' },
    { name: 'Women\'s Mood', href: '/conditions/womens-mood' }
  ];

  const resources = [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Research', href: '/research' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' },
    { name: 'Take Quiz', href: '/quiz' }
  ];

  const legalLinks = [
    { name: 'HIPAA', href: '/hipaa' },
    { name: 'Terms', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Refund Policy', href: '/refund-policy' }
  ];

  const businessLinks = [
    { name: 'Affiliations', href: '/affiliations' },
    { name: 'Internships', href: '/interns' },
    { name: 'Insurance & Pricing', href: '/insurance-pricing' },
    { name: 'Book Appointment', href: '/book' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png"
                alt="Karma TMS"
                className="h-10 w-auto brightness-0 invert"
              />
              <span className="text-2xl font-bold">Karma TMS</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading TMS therapy provider in Palm Springs, transforming lives through 
              advanced transcranial magnetic stimulation treatment.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-[#572670]" />
                <span className="text-sm">560 S. Paseo Dorotea #4B, Palm Springs, CA 92264</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#572670]" />
                <a href="tel:760-760-5675" className="text-sm hover:text-[#572670] transition-colors">
                  760-760-5675
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#572670]" />
                <a href="mailto:info@karmatms.com" className="text-sm hover:text-[#572670] transition-colors">
                  info@karmatms.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mt-8 mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Conditions & Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6">Conditions</h3>
            <ul className="space-y-3">
              {conditions.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mt-8 mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business & Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Patient Care</h3>
            <ul className="space-y-3">
              {businessLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            
            <h4 className="text-md font-semibold mt-8 mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-gray-700" />

        {/* Bottom CTA Section */}
        <div className="text-center py-8 bg-gradient-to-r from-[#572670]/20 to-[#572670]/10 rounded-lg mb-12">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your TMS Journey?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Take the first step toward mental wellness. Our team is here to help you determine 
            if TMS therapy is right for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8">
              Take Our Quiz
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 bg-gray-950">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} Karma TMS. All rights reserved. Licensed medical facility providing TMS therapy in California.
            </div>
            <div className="flex items-center gap-6">
              <span className="text-xs text-gray-500">
                FDA-Approved Treatment | Board-Certified Psychiatrist
              </span>
              <a 
                href="#" 
                className="text-xs text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                Site Map <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;