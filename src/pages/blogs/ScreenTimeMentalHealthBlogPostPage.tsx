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

const ScreenTimeMentalHealthBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'the-problem', label: 'The Screen Time Problem' },
  { id: 'mental-health-effects', label: 'Effects on Mental Health' },
  { id: 'biological-mechanisms', label: 'How Screen Time Affects the Brain' },
  { id: 'healthy-limits', label: 'Establishing Healthy Limits' },
  { id: 'digital-wellness', label: 'Digital Wellness Strategies' },
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
    question: 'How much screen time is too much for mental health?',
    answer: 'Research suggests that more than 2 hours of recreational screen time per day is associated with increased risk of depression and anxiety, especially in adolescents. For adults, excessive screen time (5+ hours daily) correlates with poorer mental health outcomes. However, quality matters as much as quantity—social media use tends to be more harmful than educational or creative screen activities.'
  },
  {
    question: 'Can excessive screen time cause depression?',
    answer: 'While screen time alone doesn\'t directly cause depression, research shows a strong correlation between excessive use (particularly social media) and depressive symptoms. The relationship is bidirectional: excessive screen time can worsen mood, and people experiencing depression may turn to screens as a coping mechanism, creating a harmful cycle.'
  },
  {
    question: 'Does screen time before bed affect mental health?',
    answer: 'Yes, significantly. Blue light from screens suppresses melatonin production, disrupting sleep patterns. Poor sleep is a major risk factor for depression, anxiety, and other mental health conditions. Using screens within 1-2 hours of bedtime can reduce sleep quality and duration, negatively impacting mental health.'
  },
  {
    question: 'Is social media worse for mental health than other screen activities?',
    answer: 'Yes, research consistently shows that social media use has stronger negative associations with mental health than other screen activities. Social comparison, cyberbullying, FOMO (fear of missing out), and the addictive nature of social platforms contribute to increased anxiety and depression, particularly in young people.'
  },
  {
    question: 'Can reducing screen time improve mental health?',
    answer: 'Absolutely. Studies show that reducing screen time, especially social media use, can lead to significant improvements in mood, anxiety levels, sleep quality, and overall well-being. Even a one-week break from social media has been shown to reduce depression and anxiety symptoms.'
  },
  {
    question: 'What are signs that screen time is affecting my mental health?',
    answer: 'Warning signs include: feeling anxious or depressed after using social media, difficulty sleeping, reduced in-person social interactions, neglecting responsibilities or hobbies, feeling unable to reduce screen time despite wanting to, physical symptoms like eye strain or headaches, and worsening mood or irritability.'
  }];


  const relatedPosts = [
  {
    title: 'How TMS Therapy Helps with Depression',
    excerpt: 'Learn how TMS therapy can help treat depression that may be exacerbated by modern lifestyle factors.',
    link: '/depression',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp'
  },
  {
    title: 'Understanding Anxiety Disorders',
    excerpt: 'Explore how anxiety develops and effective treatment options including TMS therapy.',
    link: '/anxiety',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp'
  },
  {
    title: 'Stress Management: The Four A\'s Approach',
    excerpt: 'Learn practical strategies for managing stress in our digital age.',
    link: '/blog/four-as-stress-management',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Impact of Screen Time on Mental Health: Research, Effects & Solutions',
    description: 'Comprehensive analysis of how screen time affects mental health, including depression, anxiety, and sleep. Learn evidence-based strategies for healthy digital habits.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200',
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
    datePublished: '2025-02-04',
    dateModified: '2025-02-04',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/screen-time-mental-health'
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
        title="The Impact of Screen Time on Mental Health: Research & Solutions"
        description="Discover how excessive screen time affects depression, anxiety, and overall mental health. Evidence-based strategies for establishing healthy digital habits and improving wellbeing."
        keywords="screen time mental health, social media depression, screen time anxiety, digital wellness, phone addiction, screen time effects"
        canonical="/blog/screen-time-mental-health"
        ogImage="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200"
        ogType="article" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Screen Time and Mental Health', url: '/blog/screen-time-mental-health' }]
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
                <BreadcrumbPage>Screen Time and Mental Health</BreadcrumbPage>
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
                February 4, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Impact of Screen Time on Mental Health: What You Need to Know
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding the relationship between digital device use and mental wellbeing in our always-connected world
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Get Mental Health Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/16_ekice5.png"
                alt="Person using smartphone with mental health concerns"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                We live in an era of unprecedented digital connectivity. The average American spends over 7 hours daily on screens—more time than we spend sleeping. While technology brings countless benefits, mounting research reveals a troubling connection between excessive screen time and declining mental health. Understanding this relationship is crucial for protecting our psychological wellbeing in the digital age.
              </p>
            </div>

            {/* Section 1: The Problem */}
            <section ref={(el) => sectionsRef.current['the-problem'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Growing Screen Time Problem</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Smartphone className="w-12 h-12 text-[#572670] flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-[#572670] mb-2">Screen Time Statistics</p>
                      <ul className="space-y-2 text-gray-700">
                        <li>• Average daily screen time: <strong>7 hours 4 minutes</strong> (adults)</li>
                        <li>• Teens average: <strong>7 hours 22 minutes</strong> (excluding school work)</li>
                        <li>• Adults check phones: <strong>96 times per day</strong> (every 10 minutes)</li>
                        <li>• 71% of people sleep with phone within reach</li>
                        <li>• 89% check phone within first hour of waking</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <p className="mb-6">
                These numbers have skyrocketed in recent years. Between 2019 and 2024, average screen time increased by 38%. The pandemic accelerated this trend, as work, school, socializing, and entertainment moved online. But quantity is only part of the story—the type of screen use matters enormously.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not All Screen Time Is Created Equal</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-orange-600">
                  <CardContent className="p-6">
                    <AlertTriangle className="w-8 h-8 text-orange-600 mb-3" />
                    <h4 className="font-bold text-lg mb-3">Higher Risk Activities</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Passive social media scrolling</li>
                      <li>• Comparison-based platforms (Instagram, TikTok)</li>
                      <li>• News consumption and doomscrolling</li>
                      <li>• Late-night screen use</li>
                      <li>• Gaming with toxic communities</li>
                      <li>• Binge-watching content</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-600">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold text-lg mb-3">Lower Risk Activities</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Video calls with loved ones</li>
                      <li>• Educational content and learning</li>
                      <li>• Creative digital work</li>
                      <li>• Purposeful research</li>
                      <li>• Meditation and wellness apps</li>
                      <li>• Collaborative online activities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2: Mental Health Effects */}
            <section ref={(el) => sectionsRef.current['mental-health-effects'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Screen Time Affects Mental Health</h2>
              
              <p className="mb-6">
                Research consistently links excessive screen time, particularly social media use, with numerous mental health concerns:
              </p>

              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200"
                alt="Mental health and technology impact"
                className="w-full h-64 object-cover rounded-lg mb-6" />

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Depression</h3>
                    <p className="text-gray-700 mb-3">
                      Multiple studies demonstrate a strong correlation between heavy screen use and <Link to="/depression" className="text-[#572670] hover:underline">depression</Link>:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Teens with 5+ hours daily social media use are <strong>71% more likely</strong> to have depression risk factors</li>
                      <li>• Heavy social media users show <strong>2.7x higher risk</strong> of depression compared to light users</li>
                      <li>• Each additional hour of screen time correlates with increased depressive symptoms</li>
                      <li>• Social comparison and curated reality on platforms fuel negative self-perception</li>
                      <li>• Reduced face-to-face interaction decreases emotional support</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Anxiety</h3>
                    <p className="text-gray-700 mb-3">
                      Screen time, especially social media, significantly impacts <Link to="/anxiety" className="text-[#572670] hover:underline">anxiety levels</Link>:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• FOMO (fear of missing out) increases anxiety by <strong>33%</strong></li>
                      <li>• Constant notifications trigger stress response and cortisol release</li>
                      <li>• Information overload overwhelms cognitive processing</li>
                      <li>• Cyberbullying and online conflict elevate anxiety symptoms</li>
                      <li>• Performance anxiety from likes, comments, and engagement metrics</li>
                      <li>• News consumption linked to heightened worry and generalized anxiety</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Sleep Disruption</h3>
                    <p className="text-gray-700 mb-3">
                      Screen time, particularly before bed, severely impacts sleep quality:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Blue light suppresses melatonin by up to <strong>55%</strong></li>
                      <li>• Evening screen use delays sleep onset by average of <strong>45 minutes</strong></li>
                      <li>• 68% of teens report screen-related sleep problems</li>
                      <li>• Poor sleep exacerbates depression and anxiety symptoms</li>
                      <li>• Sleep deprivation impairs emotional regulation</li>
                      <li>• Creates vicious cycle: screens → poor sleep → worse mental health → more screen seeking</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Attention and Focus</h3>
                    <p className="text-gray-700 mb-3">
                      Constant digital stimulation rewires our attention systems:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Average attention span decreased from 12 seconds (2000) to <strong>8 seconds</strong> (2024)</li>
                      <li>• Reduced capacity for sustained concentration and deep work</li>
                      <li>• Increased distractibility and task-switching</li>
                      <li>• Difficulty with delayed gratification</li>
                      <li>• ADHD-like symptoms in heavy screen users</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Self-Esteem and Body Image</h3>
                    <p className="text-gray-700 mb-3">
                      Social media significantly impacts how we see ourselves:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• 87% of women compare their bodies to images on social media</li>
                      <li>• Instagram use linked to increased body dissatisfaction</li>
                      <li>• Filtered and edited images create unrealistic standards</li>
                      <li>• Validation-seeking through likes and comments undermines self-worth</li>
                      <li>• Appearance-focused platforms correlate with eating disorder risk</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Addiction Patterns</h3>
                    <p className="text-gray-700 mb-3">
                      Digital platforms are designed to be addictive:
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Dopamine hits from notifications create reward-seeking behavior</li>
                      <li>• Infinite scroll and autoplay exploit psychological vulnerabilities</li>
                      <li>• Withdrawal symptoms when separated from devices</li>
                      <li>• Neglect of real-world relationships and responsibilities</li>
                      <li>• Failed attempts to reduce usage despite negative consequences</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: Biological Mechanisms */}
            <section ref={(el) => sectionsRef.current['biological-mechanisms'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Screen Time Affects Your Brain</h2>
              
              <p className="mb-6">
                Understanding the biological mechanisms helps explain why screen time impacts mental health so profoundly:
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Dopamine Dysregulation</h4>
                    <p className="text-gray-700 text-sm">
                      Social media platforms trigger dopamine release similar to addictive substances. The unpredictable rewards (likes, comments, new content) create a variable reward schedule—the most addictive pattern. Over time, the brain requires more stimulation to feel satisfied, making normal activities less enjoyable.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Cortisol and Stress Response</h4>
                    <p className="text-gray-700 text-sm">
                      Constant notifications and digital demands keep the body in a state of heightened stress. Elevated cortisol levels over time can damage the hippocampus (memory center), reduce serotonin production, and increase vulnerability to depression and anxiety.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Prefrontal Cortex Impairment</h4>
                    <p className="text-gray-700 text-sm">
                      Excessive screen time, particularly in adolescence, may impair development of the prefrontal cortex—the brain region responsible for impulse control, decision-making, and emotional regulation. This can have long-term effects on mental health and behavior.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Circadian Rhythm Disruption</h4>
                    <p className="text-gray-700 text-sm">
                      Blue light exposure, especially at night, tricks the brain into thinking it's daytime. This suppresses melatonin production and shifts circadian rhythms, leading to sleep problems that cascade into mental health issues. The brain-sleep-mental health connection is profound and bidirectional.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Social Connection Neuroscience</h4>
                    <p className="text-gray-700 text-sm">
                      Humans evolved for face-to-face interaction. In-person connection activates mirror neurons and releases oxytocin, creating deep bonds. Digital interaction provides a pale substitute—we may feel "connected" online but miss the neurochemical benefits of physical presence, increasing loneliness despite constant digital contact.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Healthy Limits */}
            <section ref={(el) => sectionsRef.current['healthy-limits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Establishing Healthy Screen Time Limits</h2>
              
              <p className="mb-6">
                The good news? Small changes can make a significant difference. Here are evidence-based recommendations:
              </p>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Research-Based Guidelines</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Recreational screen time:</strong> Limit to 2 hours or less daily</li>
                    <li>• <strong>Social media:</strong> Maximum 30 minutes per day for optimal mental health</li>
                    <li>• <strong>Before bed:</strong> No screens 1-2 hours before sleep</li>
                    <li>• <strong>Morning routine:</strong> Delay phone checking for at least 30 minutes after waking</li>
                    <li>• <strong>Meals:</strong> Keep all screens away during eating</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Age-Specific Recommendations</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Children (5-12 years)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Maximum 1-2 hours recreational screen time</li>
                      <li>• No screens during meals or before bed</li>
                      <li>• Prioritize educational content</li>
                      <li>• Co-viewing with parents when possible</li>
                      <li>• Establish screen-free zones in home</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Teens (13-18 years)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Limit recreational use to 2 hours daily</li>
                      <li>• Social media maximum 30-60 minutes</li>
                      <li>• Mandatory screen breaks during homework</li>
                      <li>• Phone-free bedroom at night</li>
                      <li>• One screen-free day per week</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Adults (18+ years)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Aim for under 4 hours recreational daily</li>
                      <li>• Limit social media to 30 minutes</li>
                      <li>• No screens 1 hour before bed</li>
                      <li>• Use "Do Not Disturb" liberally</li>
                      <li>• Schedule regular digital detox periods</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Seniors (65+ years)</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Focus on meaningful connections via video calls</li>
                      <li>• Avoid doom-scrolling news</li>
                      <li>• Use technology for cognitive stimulation</li>
                      <li>• Prioritize in-person social activities</li>
                      <li>• Be cautious of vision strain</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Digital Wellness Strategies */}
            <section ref={(el) => sectionsRef.current['digital-wellness'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Practical Digital Wellness Strategies</h2>
              
              <p className="mb-6">
                Implementing these strategies can help you maintain a healthier relationship with technology:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Environmental Controls</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Remove social media apps from phone</li>
                      <li>✓ Use website blockers during focus time</li>
                      <li>✓ Turn off all non-essential notifications</li>
                      <li>✓ Create phone-free zones (bedroom, dining room)</li>
                      <li>✓ Use grayscale mode to reduce appeal</li>
                      <li>✓ Charge phone outside bedroom</li>
                      <li>✓ Use analog alarm clock</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Behavioral Changes</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Set specific screen time windows</li>
                      <li>✓ Replace scrolling with reading or hobbies</li>
                      <li>✓ Practice "phone stacking" during social gatherings</li>
                      <li>✓ Take hourly movement breaks</li>
                      <li>✓ Implement "one device at a time" rule</li>
                      <li>✓ Schedule weekly digital detox</li>
                      <li>✓ Join screen-free activities or groups</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Mindful Usage</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Ask "why" before picking up phone</li>
                      <li>✓ Set intentions before opening social media</li>
                      <li>✓ Use timer to limit session duration</li>
                      <li>✓ Practice pause-and-breathe before scrolling</li>
                      <li>✓ Notice emotional response to content</li>
                      <li>✓ Unfollow accounts that trigger negative feelings</li>
                      <li>✓ Curate feed intentionally</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Technology Tools</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Use built-in screen time tracking</li>
                      <li>✓ Set app limits and downtime</li>
                      <li>✓ Enable blue light filters after sunset</li>
                      <li>✓ Try apps like Freedom, Forest, or Flipd</li>
                      <li>✓ Use Focus modes during important activities</li>
                      <li>✓ Schedule "send later" for emails</li>
                      <li>✓ Use browser extensions to block distracting sites</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">30-Day Digital Wellness Challenge</p>
                  <p className="text-gray-700 mb-3">
                    Try this progressive challenge to reset your relationship with technology:
                  </p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Week 1: Track your baseline screen time without judgment</li>
                    <li>• Week 2: Implement phone-free bedroom and mealtimes</li>
                    <li>• Week 3: Reduce social media to 30 minutes daily</li>
                    <li>• Week 4: Add one screen-free morning per week and evaluate improvements</li>
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
                  Struggling with Depression or Anxiety?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If screen time has impacted your mental health, we're here to help. Learn about evidence-based treatments including TMS therapy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    
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

export default ScreenTimeMentalHealthBlogPostPage;