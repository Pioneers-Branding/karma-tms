import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageSquare,
  Calendar,
  ChevronRight,
  Send,
} from "lucide-react";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  const businessHours = [
    { day: "Monday - Friday", hours: "9:00 A.M - 5:00 P.M" },
    { day: "Saturday - Sunday", hours: "Closed" },
  ];

  const quickActions = [
    {
      icon: Phone,
      title: "Call Now",
      subtitle: "760-760-5675",
      action: () => (window.location.href = "tel:760-760-5675"),
      color: "bg-brand-purple hover:bg-brand-purple/80",
    },
    {
      icon: MessageSquare,
      title: "Text Us",
      subtitle: "Quick Response",
      action: () => (window.location.href = "sms:760-760-5675"),
      color: "bg-brand-purple hover:bg-brand-purple/80",
    },

    {
      icon: Mail,
      title: "Email Us",
      subtitle: "info@karmatms.com",
      action: () => (window.location.href = "mailto:info@karmatms.com"),
      color: "bg-brand-purple hover:bg-brand-purple/80",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Contact KarmaTMS | TMS Therapy in Palm Springs | 760-760-5675"
        description="Contact KarmaTMS for depression treatment & mental health services in Palm Springs. Call 760-760-5675. Multiple locations serving Southern California."
        keywords="contact KarmaTMS, TMS therapy Palm Springs, mental health consultation, KarmaTMS locations, depression treatment contact"
        canonical="/contact"
      />

      <StructuredData
        type="localBusiness"
        locations={[
          {
            name: "Palm Springs",
            address: {
              streetAddress: "560 S. Paseo Dorotea Suite 4-B",
              addressLocality: "Palm Springs",
              addressRegion: "CA",
              postalCode: "92264",
            },
            telephone: "760-760-5675",
          },
          {
            name: "Rancho Mirage",
            address: {
              streetAddress: "35400 Bob Hope Dr. Suite 206",
              addressLocality: "Rancho Mirage",
              addressRegion: "CA",
              postalCode: "92270",
            },
            telephone: "760-760-5675",
          },
          {
            name: "Twentynine Palms",
            address: {
              streetAddress: "72724 29 Palms Hwy. Suite 107",
              addressLocality: "Twentynine Palms",
              addressRegion: "CA",
              postalCode: "92277",
            },
            telephone: "760-760-5675",
          },
        ]}
      />

      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-[#572670] to-[#572670]/80 bg-center bg-cover bg-no-repeat">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Contact KarmaTMS Mental Health Center
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                onClick={action.action}
                className={`${action.color} text-white p-6 h-auto flex flex-col items-center gap-3 transition-transform hover:scale-105`}
              >
                <action.icon className="h-8 w-8" />
                <div className="text-center">
                  <div className="font-bold text-sm">{action.title}</div>
                  <div className="text-xs opacity-90">{action.subtitle}</div>
                </div>
              </Button>
            ))}
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
                <form
                  acceptCharset="UTF-8"
                  action="https://app.formester.com/forms/3KjFtZ7yT/submissions"
                  autoComplete="on"
                  className="space-y-6"
                  method="POST"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your@email.com"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="760-760-5675"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="">Select a subject</option>
                        <option value="consultation">Free Consultation</option>
                        <option value="appointment">
                          Schedule Appointment
                        </option>
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
                      required
                      placeholder="Please tell us how we can help you..."
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="preferredContact">
                        Preferred Contact Method
                      </Label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
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
                        className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="normal">Normal</option>
                        <option value="urgent">Urgent</option>
                        <option value="emergency">Emergency</option>
                      </select>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#572670] hover:bg-[#572670]/90 text-white py-3"
                  >
                    Send Message
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
                  Our Locations
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6">
                {/* Location 1 - Palm Springs */}
                <div className="pb-4 border-b">
                  <h3 className="font-bold text-base text-[#572670] mb-2">
                    Palm Springs Office
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    560 S. Paseo Dorotea, Suite 4-B
                    <br />
                    Palm Springs, CA 92264
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                    onClick={() =>
                      window.open(
                        "https://share.google/5d1EU2i2b6WbjZLQc",
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                    <ChevronRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>

                {/* Location 2 - Rancho Mirage */}
                <div className="pb-4 border-b">
                  <h3 className="font-bold text-base text-[#572670] mb-2">
                    Rancho Mirage Office
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    35400 Bob Hope Dr. Suite 206
                    <br />
                    Rancho Mirage, CA 92270
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/6wyxkwnGZ5g2ua1a7",
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                    <ChevronRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>

                {/* Location 3 - Twentynine Palms */}
                <div className="pb-4 border-b">
                  <h3 className="font-bold text-base text-[#572670] mb-2">
                    Twentynine Palms Office
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    72724 29 Palms Hwy. Suite 107
                    <br />
                    Twentynine Palms, CA 92277
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full mt-3"
                    onClick={() =>
                      window.open(
                        "https://share.google/e8yhlNFFaLaN8z1d1",
                        "_blank"
                      )
                    }
                  >
                    Get Directions
                    <ChevronRight className="ml-2 h-3 w-3" />
                  </Button>
                </div>

                {/* Business Hours */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Business Hours (All Locations)
                  </h4>
                  <div className="space-y-2">
                    {businessHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-1"
                      >
                        <span className="text-gray-700 text-sm">
                          {schedule.day}
                        </span>
                        <span className="font-medium text-[#572670] text-sm">
                          {schedule.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg"></Card>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">
            Learn More About KarmaTMS
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              to="/depression"
              className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                Depression Treatment
              </h3>
              <p className="text-sm text-gray-600">
                Learn about our TMS therapy for depression
              </p>
            </Link>
            <Link
              to="/locations"
              className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                All Locations
              </h3>
              <p className="text-sm text-gray-600">
                Find the KarmaTMS center nearest you
              </p>
            </Link>
            <Link
              to="/tms-quiz"
              className="p-6 bg-gray-50 rounded-lg text-center hover:shadow-lg transition-shadow"
            >
              <h3 className="font-bold text-lg text-blue-600 mb-2">
                TMS Assessment
              </h3>
              <p className="text-sm text-gray-600">
                See if TMS therapy is right for you
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Find KarmaTMS in Palm Springs
            </h2>
            <p className="text-gray-600">
              Conveniently located in the heart of Palm Springs
            </p>
          </div>

          <Card className="overflow-hidden shadow-lg max-w-4xl mx-auto">
            <div className="aspect-video bg-gray-200 relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d579.0997077594358!2d-116.50032412577016!3d33.814262642884565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db1d8e55ea98e3%3A0x807c8a665e925f92!2sKarma%20TMS%20PC%20-%20Palm%20Springs!5e0!3m2!1sen!2sin!4v1762498292990!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Karma TMS Location Map"
              />
            </div>
          </Card>
        </div>
      </section>

      <FooterSection />
    </div>
  );
};

export default ContactPage;
