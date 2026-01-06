
import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageSquare, Calendar, ChevronRight, Send } from 'lucide-react';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'phone',
    urgency: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours."
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'phone',
        urgency: 'normal'
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const businessHours = [
  { day: 'Monday - Friday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Saturday', hours: '9:00 AM - 2:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
  { day: 'Emergency Line', hours: '24/7 Available' }];


  const quickActions = [
  {
    icon: Phone,
    title: 'Call Now',
    subtitle: '(760) 832-4090',
    action: () => window.location.href = 'tel:+17608324090',
    color: 'bg-green-600 hover:bg-green-700'
  },
  {
    icon: MessageSquare,
    title: 'Text Us',
    subtitle: 'Quick Response',
    action: () => window.location.href = 'sms:+17608324090',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    icon: Calendar,
    title: 'Book Online',
    subtitle: 'Schedule Now',
    action: () => window.open('#', '_blank'),
    color: 'bg-[#572670] hover:bg-[#572670]/90'
  },
  {
    icon: Mail,
    title: 'Email Us',
    subtitle: 'info@karmatms.com',
    action: () => window.location.href = 'mailto:info@karmatms.com',
    color: 'bg-purple-600 hover:bg-purple-700'
  }];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-[#572670] to-[#572670]/80">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Contact Karma TMS
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Get in touch with our team of mental health professionals
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-white/80">
            <Phone className="h-5 w-5" />
            <span>Ready to Help You Today</span>
          </div>
        </div>
      </section>

      {/* Quick Contact Actions */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {quickActions.map((action, index) =>
            <Button
              key={index}
              onClick={action.action}
              className={`${action.color} text-white p-6 h-auto flex flex-col items-center gap-3 transition-transform hover:scale-105`}>

                <action.icon className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-bold text-sm">{action.title}</div>
                  <div className="text-xs opacity-90">{action.subtitle}</div>
                </div>
              </Button>
            )}
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardHeader className="bg-[#572670] text-white">
                <CardTitle className="flex items-center gap-2">
                  <Send className="h-5 w-5" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your full name"
                        className="mt-1" />

                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="your@email.com"
                        className="mt-1" />

                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(760) 123-4567"
                        className="mt-1" />

                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">

                        <option value="">Select a subject</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="appointment">Schedule Appointment</option>
                        <option value="insurance">Insurance Questions</option>
                        <option value="treatment">Treatment Information</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      placeholder="Please tell us how we can help you..."
                      rows={5}
                      className="mt-1" />

                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredContact">Preferred Contact Method</Label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">

                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                        <option value="text">Text Message</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="urgency">Urgency Level</Label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">

                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#572670] hover:bg-[#572670]/90 text-white py-3">

                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Location & Hours */}
            <Card className="shadow-lg">
              <CardHeader className="bg-[#572670] text-white">
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Location & Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                <div>
                  <h3 className="font-bold text-lg text-gray-900 mb-2">Karma TMS</h3>
                  <p className="text-gray-700 leading-relaxed">
                    123 Palm Canyon Drive<br />
                    Suite 200<br />
                    Palm Springs, CA 92262
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Business Hours
                  </h4>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) =>
                    <div key={index} className="flex justify-between items-center py-1">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-medium text-[#572670]">{schedule.hours}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => window.open('https://maps.google.com', '_blank')}>

                    Get Directions
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg">
              <CardHeader className="bg-[#572670] text-white">
                <CardTitle>Connect With Us</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-blue-50 hover:border-blue-300"
                    onClick={() => window.open('https://facebook.com', '_blank')}>

                    <Facebook className="h-5 w-5 text-blue-600" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-pink-50 hover:border-pink-300"
                    onClick={() => window.open('https://instagram.com', '_blank')}>

                    <Instagram className="h-5 w-5 text-pink-600" />
                  </Button>
                </div>
                <p className="text-center text-gray-600 mt-4">
                  Follow us for mental health tips and updates
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">Conveniently located in the heart of Palm Springs</p>
          </div>

          <Card className="overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.123456789012!2d-116.5453!3d33.8303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDQ5JzQ5LjEiTiAxMTbCsDMyJzQzLjEiVw!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karma TMS Location Map" />

            </div>
          </Card>
        </div>
      </section>

      <FooterSection />
    </div>);

};

export default ContactPage;