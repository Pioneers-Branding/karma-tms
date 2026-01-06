import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator } from
'@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
'@/components/ui/accordion';
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Smartphone, AlertTriangle } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const TechMentalHealthBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'digital-age', label: 'The Digital Age and Mental Health' },
  { id: 'positive-impacts', label: 'Positive Impacts of Technology' },
  { id: 'negative-impacts', label: 'Negative Impacts of Technology' },
  { id: 'social-media-effects', label: 'Social Media and Mental Health' },
  { id: 'healthy-balance', label: 'Creating a Healthy Balance' },
  { id: 'faqs', label: 'Frequently Asked Questions' }];


  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of tocItems) {
        const section = sectionsRef.current[item.id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionsRef.current[id];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const faqs = [
  {
    question: 'How much technology use is too much for mental health?',
    answer: 'While there\'s no universal threshold, research suggests that more than 2 hours of recreational screen time daily (excluding work/school) is associated with increased mental health risks. Quality matters as much as quantity—passive social media scrolling is more harmful than active, purposeful technology use. Monitor your emotional state: if technology leaves you feeling anxious, depressed, or disconnected, it\'s time to reduce usage.'
  },
  {
    question: 'Can technology help with mental health treatment?',
    answer: 'Absolutely! Digital mental health tools include therapy apps, meditation platforms, mood trackers, and teletherapy services that increase access to care. However, these should complement—not replace—professional treatment for serious conditions. Technology works best when integrated into a comprehensive mental health plan.'
  },
  {
    question: 'Why does social media make me feel worse about myself?',
    answer: 'Social media platforms often showcase curated highlights of others\' lives, triggering social comparison and feelings of inadequacy. The "like" culture can tie self-worth to external validation. Additionally, cyberbullying, FOMO (fear of missing out), and the addictive design of platforms can negatively impact mental health.'
  },
  {
    question: 'What are signs that technology is affecting my mental health?',
    answer: 'Warning signs include: feeling anxious when separated from devices, checking phones compulsively, experiencing FOMO, comparing yourself negatively to others online, sleep disruptions, decreased in-person social connections, reduced productivity, feelings of depression after social media use, and physical symptoms like eye strain or headaches.'
  },
  {
    question: 'How can I reduce technology\'s negative impact without giving it up entirely?',
    answer: 'Start with boundaries: set specific times for checking devices, remove social media apps from phones, use website blockers during focus time, implement phone-free zones (bedroom, dining table), practice digital sabbaths (one day per week), curate your online content to be positive and educational, and regularly audit which platforms truly add value to your life.'
  },
  {
    question: 'Can virtual reality and AI help mental health treatment?',
    answer: 'Yes! VR is being used successfully for exposure therapy (treating phobias and PTSD), pain management, and meditation experiences. AI-powered chatbots provide 24/7 emotional support, though they can\'t replace human therapists. These emerging technologies show promise but should be used under professional guidance for serious mental health conditions.'
  }];


  const relatedPosts = [
  {
    title: 'The Impact of Screen Time on Mental Health',
    excerpt: 'Explore research on how screen time affects depression, anxiety, and overall wellbeing.',
    link: '/blog/screen-time-mental-health',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp'
  },
  {
    title: 'Mindfulness Practices for Stress Management',
    excerpt: 'Learn evidence-based mindfulness techniques to reduce stress in our digital world.',
    link: '/blog/mindfulness-stress-management',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp'
  },
  {
    title: 'Understanding Anxiety Disorders',
    excerpt: 'Comprehensive guide to anxiety symptoms and modern treatment options.',
    link: '/anxiety',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Tech And Mental Health: The Impact Of Technology On Mental Health',
    description: 'Comprehensive analysis of how technology affects mental health. Explore both positive and negative impacts of digital devices, social media, and emerging tech on wellbeing.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp',
    author: {
      '@type': 'Person',
      name: 'karmatms',
      affiliation: {
        '@type': 'Organization',
        name: 'KarmaTMS'
      }
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2025-01-22',
    dateModified: '2025-01-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/tech-mental-health-impact'
    }
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Tech And Mental Health: The Impact Of Technology On Mental Health"
        description="Discover how technology affects mental health—both positively and negatively. Learn about social media impacts, digital wellbeing strategies, and finding balance in the digital age."
        keywords="technology and mental health, digital wellbeing, social media mental health, tech addiction, digital wellness, screen time effects"
        canonical="/blog/tech-mental-health-impact"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Tech and Mental Health', url: '/blog/tech-mental-health-impact' }]
        } />


      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>

      <Navigation />

      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Tech and Mental Health</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                January 22, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Tech And Mental Health: The Impact Of Technology On Mental Health
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding the complex relationship between technology and mental wellbeing in our digital world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Get Mental Health Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/blog">More Mental Health Insights</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sticky Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Card className="border-[#572670]/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-[#572670]">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tocItems.map((item) =>
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                      activeSection === item.id ?
                      'bg-[#572670] text-white font-medium' :
                      'text-gray-700 hover:bg-[#572670]/10'}`
                      }>

                        {item.label}
                      </button>
                    )}
                  </nav>
                  <div className="mt-6 pt-6 border-t">
                    <Button asChild className="w-full bg-[#572670] hover:bg-[#7B3FA0]">
                      <Link to="/contact">Get Support</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-3 prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/18_jkbrlx.png"
                alt="Technology and mental health connection"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                Technology has fundamentally transformed how we live, work, connect, and experience the world. From smartphones that keep us perpetually connected to AI assistants that manage our lives, digital technology offers unprecedented convenience and opportunity. But this revolution comes with a hidden cost: profound impacts on our mental health that we're only beginning to understand.
              </p>
            </div>

            {/* Section 1: Digital Age */}
            <section ref={(el) => sectionsRef.current['digital-age'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Digital Age and Mental Health</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Smartphone className="w-12 h-12 text-[#572670] flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-[#572670] mb-2">Digital Life by the Numbers</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Average person spends <strong>6 hours 58 minutes</strong> daily on screens</li>
                        <li>• <strong>4.9 billion</strong> people use social media worldwide</li>
                        <li>• Adults check phones an average of <strong>96 times per day</strong></li>
                        <li>• <strong>71%</strong> sleep with or next to their smartphones</li>
                        <li>• Digital technology use increased <strong>60%</strong> since 2019</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="mb-6">
                We're living through the largest uncontrolled psychological experiment in human history. Never before has humanity been so connected yet so isolated, so informed yet so anxious, so entertained yet so depressed. The mental health implications of this digital transformation are complex, multifaceted, and deeply personal.
              </p>
            </section>

            {/* Section 2: Positive Impacts */}
            <section ref={(el) => sectionsRef.current['positive-impacts'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Positive Impacts of Technology on Mental Health</h2>
              
              <p className="mb-6">
                Despite valid concerns, technology offers significant mental health benefits when used thoughtfully:
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Increased Access to Mental Health Care</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Teletherapy breaks down geographic and mobility barriers</li>
                      <li>• Mental health apps provide 24/7 support and resources</li>
                      <li>• Online support communities connect people with shared experiences</li>
                      <li>• Digital therapy tools make treatment more affordable</li>
                      <li>• Crisis hotlines and text services offer immediate help</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Mental Health Education and Awareness</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Information about mental health conditions is readily accessible</li>
                      <li>• Online platforms reduce stigma through shared stories</li>
                      <li>• Educational content helps people recognize symptoms early</li>
                      <li>• Self-assessment tools guide people toward appropriate help</li>
                      <li>• Research findings reach wider audiences faster</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Connection and Community</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Video calls maintain long-distance relationships</li>
                      <li>• Online communities provide belonging for isolated individuals</li>
                      <li>• Social media enables connection for those with mobility limitations</li>
                      <li>• Digital platforms facilitate support groups and recovery communities</li>
                      <li>• Technology helps people with social anxiety practice social skills</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Mental Health Tools and Tracking</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Mood tracking apps identify patterns and triggers</li>
                      <li>• Meditation and mindfulness apps guide stress reduction</li>
                      <li>• Sleep tracking helps optimize rest</li>
                      <li>• Journaling apps facilitate emotional processing</li>
                      <li>• Habit-building apps support positive behavioral changes</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: Negative Impacts */}
            <section ref={(el) => sectionsRef.current['negative-impacts'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Negative Impacts of Technology on Mental Health</h2>
              
              <p className="mb-6">
                The dark side of our digital lives manifests in several concerning ways:
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Digital Addiction and Compulsive Use</h3>
                    <p className="text-gray-700 mb-3">
                      Technology platforms are deliberately designed to be addictive, using psychological principles to maximize engagement:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Dopamine-driven feedback loops from likes and notifications</li>
                      <li>• Infinite scroll and autoplay features eliminate natural stopping points</li>
                      <li>• Variable reward schedules keep users checking compulsively</li>
                      <li>• <strong>23%</strong> of users report feeling addicted to their smartphones</li>
                      <li>• Withdrawal symptoms include anxiety, irritability, and restlessness</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Increased Anxiety and Depression</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Heavy digital media use correlates with <strong>2.7x higher</strong> depression risk</li>
                      <li>• Constant connectivity creates persistent low-level stress</li>
                      <li>• Information overload leads to decision fatigue and anxiety</li>
                      <li>• News consumption amplifies worry about world events</li>
                      <li>• Fear of missing out (FOMO) drives anxiety in <strong>60%</strong> of young adults</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Sleep Disruption</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Blue light suppresses melatonin production by up to <strong>55%</strong></li>
                      <li>• Evening screen use delays sleep onset by 30-45 minutes</li>
                      <li>• Stimulating content before bed increases nighttime wakefulness</li>
                      <li>• Poor sleep exacerbates mental health conditions</li>
                      <li>• <strong>68%</strong> keep devices in bedrooms, disrupting sleep quality</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Reduced Attention Span and Focus</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Average attention span decreased from 12 to <strong>8 seconds</strong></li>
                      <li>• Constant task-switching impairs deep work and concentration</li>
                      <li>• Digital distractions fragment focus throughout the day</li>
                      <li>• Reduced capacity for delayed gratification and patience</li>
                      <li>• Negative impact on memory formation and learning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Loneliness Despite Connection</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Digital interactions provide shallow substitute for face-to-face connection</li>
                      <li>• Time on devices replaces in-person social activities</li>
                      <li>• Paradox: more "friends" online but fewer meaningful relationships</li>
                      <li>• Loneliness rates have <strong>doubled</strong> since 1980s despite connectivity</li>
                      <li>• Missing non-verbal communication and physical presence</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Social Media Effects */}
            <section ref={(el) => sectionsRef.current['social-media-effects'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Social Media's Unique Impact</h2>
              
              <p className="mb-6">
                Social media deserves special attention as the most psychologically impactful technology:
              </p>

              <Card className="bg-orange-50 border-orange-200 mb-6">
                <CardContent className="p-6">
                  <AlertTriangle className="w-10 h-10 text-orange-600 mb-3" />
                  <p className="font-medium text-orange-900 mb-3">The Social Media Paradox</p>
                  <p className="text-gray-700">
                    Research consistently shows that passive social media use (scrolling, viewing) is associated with negative mental health outcomes, while active use (posting, commenting, connecting) shows neutral or slightly positive effects. Yet most usage is passive.
                  </p>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Social Comparison and Self-Esteem</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>87%</strong> of women compare themselves to images on social media</li>
                      <li>• Instagram use linked to increased body dissatisfaction</li>
                      <li>• Filtered reality creates unrealistic standards</li>
                      <li>• Self-worth becomes tied to likes and engagement metrics</li>
                      <li>• Constant comparison triggers depression and anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Cyberbullying and Online Harassment</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• <strong>59%</strong> of teens have experienced online bullying</li>
                      <li>• Anonymity and distance enable cruel behavior</li>
                      <li>• Viral negativity amplifies harm</li>
                      <li>• Higher suicide risk among cyberbullying victims</li>
                      <li>• 24/7 nature means no escape from harassment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Validation-Seeking Behavior</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Dopamine release from likes creates addictive cycle</li>
                      <li>• Self-worth becomes externally validated</li>
                      <li>• Performance of perfect life causes stress</li>
                      <li>• Reduced authentic self-expression</li>
                      <li>• Constant need for approval undermines confidence</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Healthy Balance */}
            <section ref={(el) => sectionsRef.current['healthy-balance'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Creating a Healthy Balance with Technology</h2>
              
              <p className="mb-6">
                The goal isn't to abandon technology but to use it intentionally and mindfully:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Digital Boundaries</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Designate phone-free times and zones</li>
                      <li>✓ Turn off non-essential notifications</li>
                      <li>✓ No screens 1 hour before bed</li>
                      <li>✓ Use "Do Not Disturb" liberally</li>
                      <li>✓ Delete social media apps; use browser instead</li>
                      <li>✓ Set app time limits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Intentional Use</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Define purpose before opening apps</li>
                      <li>✓ Curate feeds to be positive and educational</li>
                      <li>✓ Unfollow accounts that trigger negative feelings</li>
                      <li>✓ Engage actively, not just passively consume</li>
                      <li>✓ Use technology for creation, not just consumption</li>
                      <li>✓ Schedule specific times for social media</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Tech-Free Activities</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Regular outdoor time in nature</li>
                      <li>✓ Face-to-face social interactions</li>
                      <li>✓ Physical exercise and movement</li>
                      <li>✓ Reading physical books</li>
                      <li>✓ Hobbies that use your hands</li>
                      <li>✓ Meditation and mindfulness practices</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Digital Detox Strategies</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Weekly screen-free day</li>
                      <li>✓ Weekend getaways without devices</li>
                      <li>✓ 30-day social media breaks</li>
                      <li>✓ Replace scrolling with reading or walking</li>
                      <li>✓ Use analog tools (paper calendar, alarm clock)</li>
                      <li>✓ "Phone stack" during meals with friends</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-blue-50 to-transparent border-blue-200">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">The 3-3-3 Rule for Digital Wellness</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>3 hours</strong> maximum recreational screen time daily</li>
                    <li>• <strong>3 tech-free hours</strong> each day (ideally morning, mealtime, evening)</li>
                    <li>• <strong>3-minute pause</strong> before checking devices—ask "why am I reaching for this?"</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for veterans and treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping veterans overcome PTSD, depression, and anxiety through evidence-based, compassionate care."
              image="https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg" />


            {/* FAQ Section */}
            <section ref={(el) => sectionsRef.current['faqs'] = el} className="mb-12 mt-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) =>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-4 data-[state=open]:border-[#572670]">

                    <AccordionTrigger className="text-left font-semibold hover:text-[#572670] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Struggling with Technology-Related Mental Health Issues?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If technology use is impacting your mental health, professional support can help. Learn about evidence-based treatments including TMS therapy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tms-therapy">Learn About TMS</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) =>
                <Card key={index} className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover" />

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 hover:text-[#572670] transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <Button asChild variant="ghost" className="text-[#572670] p-0 h-auto hover:bg-transparent">
                        <Link to={post.link} className="inline-flex items-center gap-2">
                          Read More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                )}
              </div>
            </section>
          </article>
        </div>
      </div>

      <FooterSection />
    </>);

};

export default TechMentalHealthBlogPostPage;