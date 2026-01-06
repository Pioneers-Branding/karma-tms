import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Phone } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const servicesLinks = [
    { name: 'TMS Therapy', href: '/tms-therapy' },
    { name: 'PrTMS', href: '/prtms' },
    { name: 'Brain Mapping', href: '/brain-mapping' },
    { name: 'Neurofeedback', href: '/neurofeedback' },
    { name: 'Medication Management', href: '/medication-management' }
  ];

  const conditionsLinks = [
    { name: 'Depression', href: '/conditions/depression' },
    { name: 'Anxiety', href: '/conditions/anxiety' },
    { name: 'OCD', href: '/conditions/ocd' },
    { name: 'PTSD', href: '/conditions/ptsd' },
    { name: 'Stress', href: '/conditions/stress' },
    { name: 'Women\'s Mood', href: '/conditions/womens-mood' }
  ];

  const resourcesLinks = [
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Research', href: '/research' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQs', href: '/faqs' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/logo-white.png" 
              alt="Karma TMS" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold text-[#572670]">Karma TMS</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <Button variant="ghost" className="text-gray-700 hover:text-[#572670]">
              Home
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-[#572670]">
              About
            </Button>
            <Button variant="ghost" className="text-gray-700 hover:text-[#572670]">
              Our Team
            </Button>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-[#572670] flex items-center gap-1">
                  Services <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="cursor-pointer">
                    {link.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Conditions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-[#572670] flex items-center gap-1">
                  Conditions <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {conditionsLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="cursor-pointer">
                    {link.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Resources Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="text-gray-700 hover:text-[#572670] flex items-center gap-1">
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                {resourcesLinks.map((link) => (
                  <DropdownMenuItem key={link.href} className="cursor-pointer">
                    {link.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" className="text-gray-700 hover:text-[#572670]">
              Contact
            </Button>
          </nav>

          {/* CTA Buttons and Phone */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:760-760-5675" className="flex items-center gap-2 text-[#572670] hover:text-[#572670]/80">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">760-760-5675</span>
            </a>
            <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white">
              Take Our Quiz
            </Button>
            <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white">
              Schedule Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <SheetHeader>
                <SheetTitle className="text-[#572670]">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start">Home</Button>
                  <Button variant="ghost" className="w-full justify-start">About</Button>
                  <Button variant="ghost" className="w-full justify-start">Our Team</Button>
                  
                  <div className="pl-4 space-y-1">
                    <p className="font-medium text-gray-900 mb-2">Services</p>
                    {servicesLinks.map((link) => (
                      <Button key={link.href} variant="ghost" className="w-full justify-start text-sm">
                        {link.name}
                      </Button>
                    ))}
                  </div>

                  <div className="pl-4 space-y-1">
                    <p className="font-medium text-gray-900 mb-2">Conditions</p>
                    {conditionsLinks.map((link) => (
                      <Button key={link.href} variant="ghost" className="w-full justify-start text-sm">
                        {link.name}
                      </Button>
                    ))}
                  </div>

                  <div className="pl-4 space-y-1">
                    <p className="font-medium text-gray-900 mb-2">Resources</p>
                    {resourcesLinks.map((link) => (
                      <Button key={link.href} variant="ghost" className="w-full justify-start text-sm">
                        {link.name}
                      </Button>
                    ))}
                  </div>

                  <Button variant="ghost" className="w-full justify-start">Contact</Button>
                </div>

                <div className="border-t pt-4 space-y-3">
                  <a href="tel:760-760-5675" className="flex items-center gap-2 text-[#572670] justify-center">
                    <Phone className="h-4 w-4" />
                    <span className="font-semibold">760-760-5675</span>
                  </a>
                  <Button variant="outline" className="w-full border-[#572670] text-[#572670]">
                    Take Our Quiz
                  </Button>
                  <Button className="w-full bg-[#572670] hover:bg-[#572670]/90 text-white">
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation;