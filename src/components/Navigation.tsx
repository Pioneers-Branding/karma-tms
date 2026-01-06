
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import {
  Menu,
  ChevronDown,
  Phone,
  Stethoscope,
  Brain,
  FileText,
  Users,
  Home,
  User,
  UserCheck,
  Mail,
  BookOpen,
  Award,
  HelpCircle,
  Heart,
  Shield,
  HandHelping,
  Calendar,
  Wallet,
  BookA,
  X } from
'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const servicesLinks = [
  { name: 'TMS Therapy', href: '/tms-therapy', icon: Brain },
  { name: 'PrTMS', href: '/prtms', icon: Stethoscope },
  { name: 'Brain Mapping', href: '/brain-mapping', icon: Brain },
  { name: 'Neurofeedback', href: '/neurofeedback', icon: FileText },
  { name: 'Medication Management', href: '/medication-management', icon: Shield }];


  const conditionsLinks = [
  { name: 'Depression', href: '/conditions/depression', icon: Heart },
  { name: 'Anxiety Disorders', href: '/conditions/anxiety', icon: Shield },
  { name: 'OCD', href: '/conditions/ocd', icon: Brain },
  { name: 'PTSD', href: '/conditions/ptsd', icon: Heart },
  { name: 'Bipolar Depression', href: '/conditions/bipolar', icon: Brain },
  { name: 'Addiction Recovery', href: '/conditions/addiction', icon: Heart },
  { name: "Women's Mood", href: '/conditions/womens-mood', icon: Heart }];


  const resourcesLinks = [
  { name: 'Testimonials', href: '/testimonials', icon: Users },
  { name: 'Research', href: '/research', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'FAQs', href: '/faqs', icon: HelpCircle },
  { name: 'Take Quiz', href: '/quiz', icon: Award }];


  const patientLinks = [
  { name: 'Affiliations', href: '/affiliations', icon: HandHelping },
  { name: 'Internships', href: '/interns', icon: BookA },
  { name: 'Insurance & Pricing', href: '/insurance-pricing', icon: Wallet },
  { name: 'Book Appointment', href: '/book', icon: Calendar }];


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ?
    'bg-[#572670]/95 backdrop-blur-sm shadow-lg border-b border-white/20' :
    'bg-[#572670]/90 backdrop-blur-xs shadow-sm border-b border-white/10'}`
    }>
      <div className="max-w-[1600px] mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          
          {/* Logo - Responsive sizing */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1759944699/karmatms_rp4lkn.png"
              alt="Karma TMS"
              className="h-8 w-auto sm:h-10 md:h-12 transition-all duration-200" />

          </Link>

          {/* Desktop Navigation - Hidden on mobile/tablet */}
          <nav className="hidden xl:flex items-center gap-2 2xl:gap-4 flex-1 justify-center mx-4">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-sm px-2 2xl:px-3">
                <Home className="h-4 w-4 xl:mr-1.5 2xl:mr-2" />
                <span className="hidden 2xl:inline">Home</span>
              </Button>
            </Link>
            
            <Link to="/about">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-sm px-2 2xl:px-3">
                <User className="h-4 w-4 xl:mr-1.5 2xl:mr-2" />
                <span className="hidden 2xl:inline">About</span>
              </Button>
            </Link>
            
            <Link to="/team">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-sm px-2 2xl:px-3">
                <UserCheck className="h-4 w-4 xl:mr-1.5 2xl:mr-2" />
                <span className="hidden 2xl:inline">Our Team</span>
              </Button>
            </Link>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-sm px-2 2xl:px-3">
                  <span className="hidden 2xl:inline">Services</span>
                  <span className="2xl:hidden">Svcs</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {servicesLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.href} to={link.href}>
                      <DropdownMenuItem className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">
                        <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{link.name}</span>
                      </DropdownMenuItem>
                    </Link>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Conditions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-sm px-2 2xl:px-3">
                  <span className="hidden 2xl:inline">Conditions</span>
                  <span className="2xl:hidden">Cond</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {conditionsLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.href} to={link.href}>
                      <DropdownMenuItem className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">
                        <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{link.name}</span>
                      </DropdownMenuItem>
                    </Link>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-sm px-2 2xl:px-3">
                  <span className="hidden 2xl:inline">Resources</span>
                  <span className="2xl:hidden">Res</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {resourcesLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.href} to={link.href}>
                      <DropdownMenuItem className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">
                        <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{link.name}</span>
                      </DropdownMenuItem>
                    </Link>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Patient Care Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-sm px-2 2xl:px-3">
                  <span className="hidden 2xl:inline">Patient Care</span>
                  <span className="2xl:hidden">Patient</span>
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {patientLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <Link key={link.href} to={link.href}>
                      <DropdownMenuItem className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">
                        <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                        <span className="font-medium">{link.name}</span>
                      </DropdownMenuItem>
                    </Link>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link to="/contact">
              <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-sm px-2 2xl:px-3">
                <Mail className="h-4 w-4 xl:mr-1.5 2xl:mr-2" />
                <span className="hidden 2xl:inline">Contact</span>
              </Button>
            </Link>
          </nav>

          {/* Phone Number - Responsive visibility */}
          <div className="hidden xl:flex items-center flex-shrink-0">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#572670] hover:border-white transition-all duration-300 px-3 xl:px-4 2xl:px-6 text-sm whitespace-nowrap">
              <Phone className="h-4 w-4 mr-2" />
              760-760-5675
            </Button>
          </div>

          {/* Mobile Menu Button - Visible on mobile/tablet */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="xl:hidden">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 transition-colors">
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </SheetTrigger>
            
            <SheetContent side="right" className="w-[85vw] sm:w-80 bg-white/95 backdrop-blur-md border-l border-gray-200/50">
              <SheetHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <SheetTitle className="text-[#572670] text-lg sm:text-xl font-bold">Menu</SheetTitle>
                </div>
              </SheetHeader>
              
              <ScrollArea className="h-[calc(100vh-120px)] -mx-6 px-6">
                <div className="space-y-6">
                  
                  {/* Main Navigation */}
                  <div className="space-y-2">
                    <Link to="/" onClick={handleLinkClick}>
                      <Button variant="ghost" className="w-full justify-start text-base py-3 hover:bg-[#572670]/10">
                        <Home className="h-5 w-5 mr-3 text-[#572670]" />
                        Home
                      </Button>
                    </Link>
                    
                    <Link to="/about" onClick={handleLinkClick}>
                      <Button variant="ghost" className="w-full justify-start text-base py-3 hover:bg-[#572670]/10">
                        <User className="h-5 w-5 mr-3 text-[#572670]" />
                        About
                      </Button>
                    </Link>
                    
                    <Link to="/team" onClick={handleLinkClick}>
                      <Button variant="ghost" className="w-full justify-start text-base py-3 hover:bg-[#572670]/10">
                        <UserCheck className="h-5 w-5 mr-3 text-[#572670]" />
                        Our Team
                      </Button>
                    </Link>
                    
                    <Link to="/contact" onClick={handleLinkClick}>
                      <Button variant="ghost" className="w-full justify-start text-base py-3 hover:bg-[#572670]/10">
                        <Mail className="h-5 w-5 mr-3 text-[#572670]" />
                        Contact
                      </Button>
                    </Link>
                  </div>

                  <Separator />

                  {/* Services Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-[#572670] text-sm uppercase tracking-wide">Services</h3>
                    <div className="space-y-1">
                      {servicesLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <Link key={link.href} to={link.href} onClick={handleLinkClick}>
                            <Button variant="ghost" className="w-full justify-start text-sm py-2.5 pl-4 hover:bg-[#572670]/5">
                              <IconComponent className="h-4 w-4 mr-3 text-[#572670]/70" />
                              {link.name}
                            </Button>
                          </Link>);

                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Conditions Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-[#572670] text-sm uppercase tracking-wide">Conditions</h3>
                    <div className="space-y-1">
                      {conditionsLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <Link key={link.href} to={link.href} onClick={handleLinkClick}>
                            <Button variant="ghost" className="w-full justify-start text-sm py-2.5 pl-4 hover:bg-[#572670]/5">
                              <IconComponent className="h-4 w-4 mr-3 text-[#572670]/70" />
                              {link.name}
                            </Button>
                          </Link>);

                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Resources Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-[#572670] text-sm uppercase tracking-wide">Resources</h3>
                    <div className="space-y-1">
                      {resourcesLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <Link key={link.href} to={link.href} onClick={handleLinkClick}>
                            <Button variant="ghost" className="w-full justify-start text-sm py-2.5 pl-4 hover:bg-[#572670]/5">
                              <IconComponent className="h-4 w-4 mr-3 text-[#572670]/70" />
                              {link.name}
                            </Button>
                          </Link>);

                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Patient Care Section */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-[#572670] text-sm uppercase tracking-wide">Patient Care</h3>
                    <div className="space-y-1">
                      {patientLinks.map((link) => {
                        const IconComponent = link.icon;
                        return (
                          <Link key={link.href} to={link.href} onClick={handleLinkClick}>
                            <Button variant="ghost" className="w-full justify-start text-sm py-2.5 pl-4 hover:bg-[#572670]/5">
                              <IconComponent className="h-4 w-4 mr-3 text-[#572670]/70" />
                              {link.name}
                            </Button>
                          </Link>);

                      })}
                    </div>
                  </div>

                  <Separator />

                  {/* Call to Action */}
                  <div className="pt-4 pb-6">
                    <Button className="w-full bg-[#572670] hover:bg-[#572670]/90 text-white py-3 text-base font-medium">
                      <Phone className="h-5 w-5 mr-2" />
                      Call 760-760-5675
                    </Button>
                  </div>
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>);

};

export default Navigation;