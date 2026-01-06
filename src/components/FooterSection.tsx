import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, ExternalLink, Calendar, Clock } from 'lucide-react';

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
    { name: "Women's Mood", href: '/conditions/womens-mood' }
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

  const locations = [
    {
      label: 'Location 1',
      addressLines: ['560 S. Paseo Dorotea #4B', 'Palm Springs, CA 92264']
    },
    {
      label: 'Location 2',
      addressLines: ['560 S. Paseo Dorotea, Suite 4A', 'Palm Springs, CA 92264']
    },
    {
      label: 'Location 3',
      addressLines: ['72724 29 Palms Hwy Ste 107', 'Twentynine Palms, CA 92277']
    }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#572670]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info with Added Locations */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png"
                alt="Karma TMS"
                className="h-12 w-auto brightness-0 invert"
              />
            </div>

            <p className="text-gray-300 leading-relaxed">
              Leading TMS therapy provider in Palm Springs, transforming lives through 
              advanced transcranial magnetic stimulation treatment.
            </p>

            {/* Locations */}
            <div className="space-y-6">
              {locations.map((loc, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#572670] mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-white">{loc.label}</div>
                    <div className="text-sm text-gray-300 whitespace-pre-line">
                      {loc.addressLines.join('\n')}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mt-6">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#572670]" />
                <div>
                  <div className="text-sm font-medium text-white">Call Us</div>
                  <a href="tel:760-760-5675" className="text-sm text-gray-300 hover:text-[#572670] transition-colors">
                    760-760-5675
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#572670]" />
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <a href="mailto:info@karmatms.com" className="text-sm text-gray-300 hover:text-[#572670] transition-colors">
                    info@karmatms.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-[#572670]" />
                <div>
                  <div className="text-sm font-medium text-white">Hours</div>
                  <div className="text-sm text-gray-300">Mon-Fri: 8AM-6PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links & Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-[#572670] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4 text-gray-200">Our Services</h4>
              <ul className="space-y-2">
                {services.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-[#572670] transition-colors">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Conditions & Resources */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Conditions We Treat</h3>
              <ul className="space-y-3">
                {conditions.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-[#572670] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4 text-gray-200">Resources</h4>
              <ul className="space-y-2">
                {resources.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-[#572670] transition-colors">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Patient Care & Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Patient Care</h3>
              <ul className="space-y-3">
                {businessLinks.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-gray-300 hover:text-[#572670] transition-colors text-sm">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-4 text-gray-200">Legal & Privacy</h4>
              <ul className="space-y-2">
                {legalLinks.map((link, index) =>
                  <li key={index}>
                    <a href={link.href} className="text-sm text-gray-400 hover:text-[#572670] transition-colors">
                      {link.name}
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 bg-gray-950/50 backdrop-blur-sm relative z-10">
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
                className="text-xs text-gray-400 hover:text-[#572670] transition-colors flex items-center gap-1">
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
