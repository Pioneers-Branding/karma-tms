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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const SocialMediaMentalWellbeingBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'impact', label: 'The Impact of Social Media' },
  { id: 'negative-effects', label: 'Negative Effects' },
  { id: 'positive-aspects', label: 'Positive Aspects' },
  { id: 'warning-signs', label: 'Warning Signs' },
  { id: 'healthy-habits', label: 'Healthy Social Media Habits' },
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
    question: 'How much social media use is too much?',
    answer: 'Research suggests that more than 3 hours per day on social media significantly increases the risk of mental health issues. However, quality matters more than quantity—even short periods of negative social media experiences can impact wellbeing. Pay attention to how you feel after using social media rather than just tracking time.'
  },
  {
    question: 'Can social media cause depression and anxiety?',
    answer: 'While social media doesn\'t directly cause mental health conditions, heavy use is strongly associated with increased rates of depression, anxiety, loneliness, and poor self-esteem. Social comparison, cyberbullying, FOMO (fear of missing out), and sleep disruption from screen time all contribute to these effects.'
  },
  {
    question: 'What are the signs that social media is affecting my mental health?',
    answer: 'Warning signs include feeling anxious or depressed after using social media, constant comparison to others, disrupted sleep patterns, neglecting real-life relationships, decreased productivity, and feeling compelled to check platforms constantly. If you experience these symptoms, it may be time to reassess your social media habits.'
  },
  {
    question: 'How can I use social media more mindfully?',
    answer: 'Practice mindful social media use by setting time limits, turning off notifications, curating your feed to follow positive accounts, avoiding doomscrolling, engaging authentically rather than passively scrolling, and taking regular digital detox breaks. Be intentional about when and why you use each platform.'
  },
  {
    question: 'Should I delete social media entirely?',
    answer: 'A complete social media break isn\'t necessary for everyone. Instead, focus on creating a healthier relationship with these platforms. Consider reducing usage, unfollowing accounts that trigger negative feelings, and being more selective about your engagement. Some people benefit from temporary breaks or deleting specific platforms that cause the most stress.'
  }];


  const relatedPosts = [
  {
    title: 'The Impact of Screen Time on Mental Health',
    excerpt: 'Understand how excessive screen time affects mental wellness and strategies to find balance.',
    link: '/blog/screen-time-mental-health',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/16_ekice5.png'
  },
  {
    title: 'Tech And Mental Health: The Impact Of Technology',
    excerpt: 'Explore both positive and negative effects of technology on mental health.',
    link: '/blog/tech-mental-health-impact',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/18_jkbrlx.png'
  },
  {
    title: 'Managing Anxiety Triggers in Everyday Life',
    excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively.',
    link: '/blog/managing-anxiety-triggers',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Discover the Impact of Social Media on Your Mental Well-being',
    description: 'Comprehensive analysis of how social media affects mental health, including negative effects, warning signs, and strategies for healthier social media habits.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0df1c6f4-54ea-43f5-aeab-67608371a640.webp',
    author: {
      '@type': 'Organization',
      name: 'KarmaTMS'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2024-08-16',
    dateModified: '2024-08-16',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/social-media-mental-wellbeing'
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
        title="Impact of Social Media on Mental Health | Social Media and Wellbeing"
        description="Discover how social media affects your mental health. Learn about negative effects, warning signs, and proven strategies for healthier social media habits to protect your wellbeing."
        keywords="social media mental health, social media anxiety, social media depression, digital wellbeing, FOMO, social comparison, healthy social media use"
        canonical="/blog/social-media-mental-wellbeing"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0df1c6f4-54ea-43f5-aeab-67608371a640.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Social Media & Mental Wellbeing', url: '/blog/social-media-mental-wellbeing' }]
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
                <BreadcrumbPage>Social Media & Mental Wellbeing</BreadcrumbPage>
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
                August 16, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                13 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatmsdev
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Discover the Impact of Social Media on Your Mental Well-being
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding the connection between social media use and mental health in the digital age
            </p>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0df1c6f4-54ea-43f5-aeab-67608371a640.webp"
                alt="Social media and mental health concept"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                In today's hyperconnected world, social media has become an integral part of daily life for billions of people. While these platforms offer unprecedented opportunities for connection and self-expression, mounting research reveals a complex relationship between social media use and mental health. Understanding this impact is crucial for developing healthier digital habits and protecting your psychological wellbeing.
              </p>
            </div>

            {/* Section 1: Impact */}
            <section ref={(el) => sectionsRef.current['impact'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Impact of Social Media on Mental Health</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Alarming Statistics</p>
                  <p className="text-gray-700">
                    Studies show that people who spend more than 3 hours daily on social media are twice as likely to experience symptoms of anxiety and depression. For young adults aged 18-25, this risk is even higher, with social media use strongly correlated with increased rates of mental health concerns.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-6">
                Social media's influence on mental health operates through multiple psychological mechanisms. The constant exposure to curated, idealized versions of others' lives triggers social comparison, while the dopamine-driven feedback loops of likes and comments can create addictive patterns of use. Understanding these mechanisms helps us recognize when our social media habits might be affecting our wellbeing.
              </p>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/88d0408f-19ff-48a1-80bd-5553928c7047.webp"
                alt="Digital wellbeing concept"
                className="w-full object-cover rounded-lg mb-6" />

            </section>

            {/* Section 2: Negative Effects */}
            <section ref={(el) => sectionsRef.current['negative-effects'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Negative Effects on Mental Wellbeing</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-red-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">Social Comparison and Low Self-Esteem</h3>
                        <p className="text-gray-700 mb-3">
                          Constant exposure to others' highlight reels creates unrealistic standards and fuels feelings of inadequacy. This "comparison trap" is particularly damaging because we're comparing our behind-the-scenes reality to others' carefully curated public personas.
                        </p>
                        <ul className="list-disc pl-6 space-y-1">
                          <li>Decreased self-worth and confidence</li>
                          <li>Body image issues and eating disorders</li>
                          <li>Feelings of failure or inadequacy</li>
                          <li>Envy and resentment toward others</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-orange-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">FOMO (Fear of Missing Out)</h3>
                        <p className="text-gray-700 mb-3">
                          Social media amplifies the fear that others are having more rewarding experiences. This constant anxiety about missing out drives compulsive checking behaviors and prevents us from being present in our own lives.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-purple-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">Cyberbullying and Online Harassment</h3>
                        <p className="text-gray-700">
                          The anonymity and distance of digital platforms can enable cruel behavior. Cyberbullying has been linked to increased rates of depression, anxiety, and even suicidal ideation, particularly among adolescents and young adults.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">Sleep Disruption</h3>
                        <p className="text-gray-700">
                          Blue light exposure from screens interferes with melatonin production, while the stimulating nature of social media content keeps our minds active when we should be winding down. Poor sleep quality, in turn, significantly impacts mental health.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-xl font-bold mb-3">Reduced Real-Life Social Connections</h3>
                        <p className="text-gray-700">
                          Paradoxically, heavy social media use often leads to decreased face-to-face interactions and feelings of loneliness. Digital connections cannot fully replace the emotional depth and support of in-person relationships.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: Positive Aspects */}
            <section ref={(el) => sectionsRef.current['positive-aspects'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Positive Aspects of Social Media</h2>
              
              <p className="mb-6">
                It's important to note that social media isn't inherently harmful. When used mindfully, these platforms can offer significant mental health benefits:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Community and Support</h4>
                    <p className="text-sm text-gray-600">Finding like-minded individuals and support groups for mental health challenges</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Self-Expression</h4>
                    <p className="text-sm text-gray-600">Creative outlets for sharing thoughts, art, and experiences</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Mental Health Awareness</h4>
                    <p className="text-sm text-gray-600">Platforms for education, reducing stigma, and sharing resources</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Maintaining Connections</h4>
                    <p className="text-sm text-gray-600">Staying in touch with distant friends and family members</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Warning Signs */}
            <section ref={(el) => sectionsRef.current['warning-signs'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Warning Signs: When Social Media Harms Your Mental Health</h2>
              
              <Card className="bg-amber-50 border-amber-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-amber-900 mb-4">Watch for these red flags:</p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>You feel anxious, depressed, or lonely after using social media</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>You constantly compare yourself to others and feel inadequate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>You experience FOMO or panic when you can't check your accounts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>Your sleep quality has declined due to late-night scrolling</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>You neglect real-life relationships and responsibilities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>You feel compelled to check notifications constantly</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-amber-600 mt-1 flex-shrink-0" />
                      <span>Your self-esteem depends on likes, comments, and follower counts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Healthy Habits */}
            <section ref={(el) => sectionsRef.current['healthy-habits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Building Healthy Social Media Habits</h2>
              
              <p className="mb-6">
                Protecting your mental health doesn't necessarily mean quitting social media entirely. Instead, focus on developing a healthier relationship with these platforms:
              </p>

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">1. Set Clear Boundaries</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Establish specific times for checking social media</li>
                      <li>Use app timers to limit daily usage</li>
                      <li>Create phone-free zones (bedroom, dinner table)</li>
                      <li>Turn off non-essential notifications</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">2. Curate Your Feed Mindfully</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Unfollow accounts that trigger negative feelings</li>
                      <li>Follow accounts that inspire and educate</li>
                      <li>Join supportive communities aligned with your values</li>
                      <li>Hide or mute content that consistently upsets you</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">3. Practice Mindful Engagement</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Ask yourself why you're opening an app before doing so</li>
                      <li>Engage authentically rather than passively scrolling</li>
                      <li>Take breaks from doomscrolling</li>
                      <li>Be present in real-life moments instead of documenting everything</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">4. Schedule Digital Detoxes</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Take regular breaks from social media (daily, weekly, or monthly)</li>
                      <li>Plan social media-free activities and vacations</li>
                      <li>Notice how you feel during breaks from platforms</li>
                      <li>Reconnect with offline hobbies and relationships</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                  Need Support With Your Mental Health?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If social media or other factors are affecting your mental wellbeing, we're here to help. Contact us to learn about treatment options.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Reach Out Today</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/anxiety">Learn About Anxiety Treatment</Link>
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
                    className="w-full object-cover" />

                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 hover:text-[#572670] transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <Button asChild variant="ghost" className="text-[#572670] hover:text-[#572670]/80 p-0 h-auto hover:bg-transparent">
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

export default SocialMediaMentalWellbeingBlogPostPage;