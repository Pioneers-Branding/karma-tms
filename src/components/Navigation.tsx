import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
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
  Calendar,
  BookOpen,
  Award,
  HelpCircle,
  Heart,
  Shield } from
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

  const servicesLinks = [
  { name: 'TMS Therapy', href: '/tms-therapy', icon: Brain },
  { name: 'PrTMS', href: '/prtms', icon: Stethoscope },
  { name: 'Brain Mapping', href: '/brain-mapping', icon: Brain },
  { name: 'Neurofeedback', href: '/neurofeedback', icon: FileText },
  { name: 'Medication Management', href: '/medication-management', icon: Shield }];


  const conditionsLinks = [
  { name: 'Depression', href: '/conditions/depression', icon: Heart },
  { name: 'Anxiety', href: '/conditions/anxiety', icon: Shield },
  { name: 'OCD', href: '/conditions/ocd', icon: Brain },
  { name: 'PTSD', href: '/conditions/ptsd', icon: Heart },
  { name: 'Stress', href: '/conditions/stress', icon: Shield },
  { name: "Women's Mood", href: '/conditions/womens-mood', icon: Heart }];


  const resourcesLinks = [
  { name: 'Testimonials', href: '/testimonials', icon: Users },
  { name: 'Research', href: '/research', icon: BookOpen },
  { name: 'Blog', href: '/blog', icon: FileText },
  { name: 'FAQs', href: '/faqs', icon: HelpCircle }];


  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
    scrolled ?
    'bg-[#572670]/95 backdrop-blur-md shadow-lg border-b border-white/20' :
    'bg-[#572670]/90 backdrop-blur-sm shadow-sm border-b border-white/10'}`
    }>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png"
              alt="Karma TMS"
              className="h-10 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors">
              <User className="h-4 w-4 mr-2" />
              About
            </Button>
            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors">
              <UserCheck className="h-4 w-4 mr-2" />
              Our Team
            </Button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {servicesLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <DropdownMenuItem
                      key={link.href}
                      className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">

                      <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </DropdownMenuItem>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Conditions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors">
                  Conditions <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {conditionsLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <DropdownMenuItem
                      key={link.href}
                      className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">

                      <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </DropdownMenuItem>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 flex items-center gap-1 transition-colors">
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-md border-gray-200/50 shadow-xl">
                {resourcesLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <DropdownMenuItem
                      key={link.href}
                      className="cursor-pointer p-3 rounded-md hover:bg-[#572670]/10 transition-all duration-200 group">

                      <IconComponent className="h-4 w-4 mr-3 text-[#572670] group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{link.name}</span>
                    </DropdownMenuItem>);

                })}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-white hover:text-white/80 hover:bg-white/10 transition-colors">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </nav>

          {/* Phone Number */}
          <div className="hidden lg:flex items-center">
            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white hover:text-[#572670] hover:border-white transition-all duration-300 px-6">

              <Phone className="h-4 w-4 mr-2" />
              760-760-5675
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-white/95 backdrop-blur-md">
              <SheetHeader>
                <SheetTitle className="text-[#572670] text-xl">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">
                    <Home className="h-4 w-4 mr-3" />
                    Home
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <User className="h-4 w-4 mr-3" />
                    About
                  </Button>
                  <Button variant="ghost" className="w-full justify-start">
                    <UserCheck className="h-4 w-4 mr-3" />
                    Our Team
                  </Button>
                  
                  <div className="pl-4 space-y-2">
                    <p className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Services</p>
                    {servicesLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Button key={link.href} variant="ghost" className="w-full justify-start text-sm py-2">
                          <IconComponent className="h-4 w-4 mr-3 text-[#572670]" />
                          {link.name}
                        </Button>);

                    })}
                  </div>

                  <div className="pl-4 space-y-2">
                    <p className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Conditions</p>
                    {conditionsLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Button key={link.href} variant="ghost" className="w-full justify-start text-sm py-2">
                          <IconComponent className="h-4 w-4 mr-3 text-[#572670]" />
                          {link.name}
                        </Button>);

                    })}
                  </div>

                  <div className="pl-4 space-y-2">
                    <p className="font-medium text-gray-900 mb-3 text-sm uppercase tracking-wide">Resources</p>
                    {resourcesLinks.map((link) => {
                      const IconComponent = link.icon;
                      return (
                        <Button key={link.href} variant="ghost" className="w-full justify-start text-sm py-2">
                          <IconComponent className="h-4 w-4 mr-3 text-[#572670]" />
                          {link.name}
                        </Button>);

                    })}
                  </div>

                  <Button variant="ghost" className="w-full justify-start">
                    <Mail className="h-4 w-4 mr-3" />
                    Contact
                  </Button>
                </div>

                <div className="border-t pt-6">
                  <Button className="w-full bg-[#572670] hover:bg-[#572670]/90 text-purple-800">
                    <Phone className="h-4 w-4 mr-2" />
                    760-760-5675
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>);

};

export default Navigation;