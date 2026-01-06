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
  MapPin } from
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

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const servicesLinks = [
  { name: 'TMS Therapy', href: '/tms-therapy', icon: Brain },
  { name: 'PrTMS', href: '/prtms', icon: Stethoscope },
  { name: 'Brain Mapping', href: '/brain-mapping', icon: Brain },
  { name: 'Medication Management', href: '/medication-management', icon: Shield }];


  const conditionsLinks = [
  { name: 'Depression', href: '/conditions/depression', icon: Heart },
  { name: 'Anxiety Disorders', href: '/conditions/anxiety', icon: Shield },
  { name: 'OCD', href: '/conditions/ocd', icon: Brain },
  { name: 'PTSD', href: '/conditions/ptsd', icon: Heart },
  { name: 'Bipolar Depression', href: '/conditions/bipolar', icon: Brain },
  { name: 'Addiction Recovery', href: '/conditions/addiction', icon: Heart },
  { name: "Women's Mood", href: '/conditions/womens-mood', icon: Heart }];


  const locationsLinks = [
  { name: 'Palm Springs', href: '/palm-springs', icon: MapPin },
  { name: 'Twenty-Nine Palms', href: '/29-palms', icon: MapPin },
  { name: 'Rancho Mirage', href: '/rancho-mirage', icon: MapPin }];


  const resourcesLinks = [
  { name: 'Testimonials', href: '/testimonials', icon: Users },
  { name: 'Research', href: '/research', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'FAQs', href: '/faqs', icon: HelpCircle },
  { name: 'Take Quiz', href: '/quiz', icon: Award }];


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ?
    'bg-[#572670]/95 backdrop-blur-sm shadow-lg border-b border-white/20' :
    'bg-[#572670]/90 backdrop-blur-xs shadow-sm border-b border-white/10'}`
    }>
      <div className="w-full max-w-full overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-2 sm:px-3 md:px-4 lg:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18 gap-2 sm:gap-3">
            
            <Link to="/" className="flex items-center flex-shrink-0 min-w-0">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1759944699/karmatms_rp4lkn.png"
                alt="Karma TMS"
                className="h-7 w-auto sm:h-9 md:h-10 lg:h-12 transition-all duration-200" />
            </Link>

            <nav className="hidden xl:flex items-center space-x-2 xl:space-x-4 flex-shrink min-w-0">
              <Link to="/">
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                  <Home className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-1.5 xl:mr-2" />
                  Home
                </Button>
              </Link>
              
              <Link to="/about">
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                  <User className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-1.5 xl:mr-2" />
                  About
                </Button>
              </Link>
              
              <Link to="/team">
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                  <UserCheck className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-1.5 xl:mr-2" />
                  Our Team
                </Button>
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                    Services <ChevronDown className="h-4 w-4" />
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                    Conditions <ChevronDown className="h-4 w-4" />
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                    Locations <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                  {locationsLinks.map((link) => {
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

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                    Resources <ChevronDown className="h-4 w-4" />
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

              <Link to="/contact">
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors text-xs xl:text-sm px-2 xl:px-3">
                  <Mail className="h-3.5 w-3.5 xl:h-4 xl:w-4 mr-1.5 xl:mr-2" />
                  Contact
                </Button>
              </Link>
            </nav>

            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Mobile/Tablet Phone Button - shows icon only on small screens */}
              <a href="tel:760-760-5675" className="md:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#572670] hover:border-white transition-all duration-300 px-2 py-1 h-8 min-w-[2rem]">
                  <Phone className="h-4 w-4" />
                </Button>
              </a>
              
              {/* Tablet+ Phone Button - shows phone number */}
              <a href="tel:760-760-5675" className="hidden md:flex lg:hidden">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#572670] hover:border-white transition-all duration-300 px-2.5 py-1 h-9 text-xs whitespace-nowrap bg-black text-white">
                  <Phone className="h-3.5 w-3.5 mr-1.5" />
                  <span>760-760-5675</span>
                </Button>
              </a>
              
              {/* Desktop Phone Button - full size */}
              <a href="tel:760-760-5675" className="hidden lg:flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white/30 text-white bg-white/5 hover:bg-white hover:text-[#572670] hover:border-white transition-all duration-300 px-4 xl:px-6 py-2 h-10 text-sm whitespace-nowrap">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>760-760-5675</span>
                </Button>
              </a>
            </div>

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

                    <div className="space-y-3">
                      <h3 className="font-semibold text-[#572670] text-sm uppercase tracking-wide">Locations</h3>
                      <div className="space-y-1">
                        {locationsLinks.map((link) => {
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
      </div>
    </header>);

};

export default Navigation;