import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ExternalLink, Clock } from 'lucide-react';

const FooterSection = () => {
  const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Team', href: '/team' },
  { name: 'Contact', href: '/contact' }];


  const services = [
  { name: 'TMS Therapy', href: '/tms-therapy' },
  { name: 'PrTMS', href: '/prtms' },
  { name: 'Brain Mapping', href: '/brain-mapping' },
  { name: 'Medication Management', href: '/medication-management' }];


  const conditions = [
  { name: 'Depression', href: '/conditions/depression' },
  { name: 'Anxiety', href: '/conditions/anxiety' },
  { name: 'OCD', href: '/conditions/ocd' },
  { name: 'PTSD', href: '/conditions/ptsd' },
  { name: "Women's Mood", href: '/conditions/womens-mood' }];


  const resources = [
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Research', href: '/research' },
  { name: 'Blog', href: '/blog' },
  { name: 'FAQs', href: '/faqs' },
  { name: 'Take Quiz', href: '/quiz' }];


  const legalLinks = [
  { name: 'HIPAA', href: '/hipaa' },
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Refund Policy', href: '/refund-policy' }];


  const businessLinks = [
  { name: 'Affiliations', href: '/affiliations' },
  { name: 'Internships', href: '/interns' },
  { name: 'Insurance & Pricing', href: '/insurance-pricing' }];


  const locations = [
  {
    label: 'Location 1',
    addressLines: ['560 S. Paseo Dorotea, Suite 4-B Palm Springs, CA 92264']
  },
  {
    label: 'Location 2',
    addressLines: ["35400 Bob Hope Dr. Suite 206 Rancho Mirage, CA 92270"]
  },
  {
    label: 'Location 3',
    addressLines: ['72724 29 Palms Hwy. Suite 107 Twentynine Palms, CA 92277']
  }];


  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#572670]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl"></div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1759944699/karmatms_rp4lkn.png"
                alt="Karma TMS"
                className="h-14 w-auto brightness-0 invert" />
            </div>

            <p className="text-gray-300 leading-relaxed text-base max-w-sm">
              Transforming lives through advanced TMS therapy and personalized mental health care in Southern California.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#572670]/20 border border-[#572670]/30">
                <div className="h-2 w-2 bg-[#572670] rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-300">FDA-Approved Treatment</span>
              </div>
            </div>
                        {/* Contact Details */}
            <div className="space-y-1 pt-3 border-t border-gray-700/50">
              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <Phone className="h-5 w-5 text-[#572670] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Call Us</div>
                    <a href="tel:760-760-5675" className="text-sm font-medium text-white hover:text-[#572670] transition-colors">
                      760-760-5675
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <Mail className="h-5 w-5 text-[#572670] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Email</div>
                    <a href="mailto:contact@karmatms.com" className="text-sm font-medium text-white hover:text-[#572670] transition-colors break-all">
                      contact@karmatms.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                  <Clock className="h-5 w-5 text-[#572670] flex-shrink-0" />
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">Hours</div>
                    <div className="text-sm font-medium text-white">Mon-Fri: 8AM-6PM</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info - Separate Column */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Contact Information</h3>

            {/* Locations - Card Style */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-lg bg-white/5 border border-[#572670]/20 hover:border-[#572670]/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" size={24} strokeWidth={2} stroke="currentColor" />
                  <div>
                    <div className="text-sm font-bold text-white mb-1">Palm Springs</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      560 S. Paseo Dorotea, Suite 4-B<br />Palm Springs, CA 92264
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-[#572670]/20 hover:border-[#572670]/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#572670] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white mb-1">Rancho Mirage</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      35400 Bob Hope Dr. Suite 206<br />Rancho Mirage, CA 92270
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-[#572670]/20 hover:border-[#572670]/40 transition-all duration-300">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" size={24} strokeWidth={2} stroke="currentColor" />
                  <div>
                    <div className="text-sm font-bold text-white mb-1">Twentynine Palms</div>
                    <div className="text-xs text-gray-300 leading-relaxed">
                      72724 29 Palms Hwy. Suite 107<br />Twentynine Palms, CA 92277
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>

          {/* Quick Links & Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-gray-300 hover:text-[#572670] hover:pl-1 transition-all duration-200 text-sm inline-block">
                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Our Services</h4>
              <ul className="space-y-2.5">
                {services.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-[#572670] hover:pl-1 transition-all duration-200 inline-block">
                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Conditions & Resources */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Conditions We Treat</h3>
              <ul className="space-y-3">
                {conditions.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-gray-300 hover:text-[#572670] hover:pl-1 transition-all duration-200 text-sm inline-block">
                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Resources</h4>
              <ul className="space-y-2.5">
                {resources.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-[#572670] hover:pl-1 transition-all duration-200 inline-block">
                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Patient Care & Legal */}
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-6 text-white tracking-tight">Patient Care</h3>
              <ul className="space-y-3">
                {businessLinks.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-gray-300 hover:text-[#572670] hover:pl-1 transition-all duration-200 text-sm inline-block">
                      {link.name}
                    </Link>
                  </li>
                )}
              </ul>
            </div>

            <div className="pt-2">
              <h4 className="text-md font-semibold mb-4 text-gray-200">Legal & Privacy</h4>
              <ul className="space-y-2.5">
                {legalLinks.map((link, index) =>
                <li key={index}>
                    <Link to={link.href} className="text-sm text-gray-400 hover:text-[#572670] hover:pl-1 transition-all duration-200 inline-block">
                      {link.name}
                    </Link>
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
            <div className="text-sm text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Karma TMS. All rights reserved. Licensed medical facility providing TMS therapy in California.
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <span className="text-xs text-gray-500 text-center">
                Board-Certified Psychiatrists
              </span>
              <Link
                to="/conditions"
                className="text-xs text-gray-400 hover:text-[#572670] transition-colors flex items-center gap-1">
                Site Map <ExternalLink className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};

export default FooterSection;