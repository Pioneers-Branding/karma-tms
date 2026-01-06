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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Phone, AlertCircle } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const MentalHealthFirstAidBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'what-is-mhfa', label: 'What is Mental Health First Aid?' },
  { id: 'recognizing-crisis', label: 'Recognizing a Mental Health Crisis' },
  { id: 'how-to-help', label: 'How to Help Someone in Crisis' },
  { id: 'specific-situations', label: 'Specific Crisis Situations' },
  { id: 'self-care', label: 'Self-Care for Helpers' },
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
    question: 'What should I do if someone is suicidal?',
    answer: 'Take all mentions of suicide seriously. Ask directly if they\'re thinking about suicide—this doesn\'t increase risk. Stay with them, remove access to lethal means, call 988 (Suicide & Crisis Lifeline), and don\'t leave them alone until professional help arrives. Your presence and willingness to listen can be lifesaving.'
  },
  {
    question: 'How can I tell if someone needs professional help vs. just having a bad day?',
    answer: 'Warning signs that indicate professional help is needed include: symptoms lasting more than 2 weeks, significant changes in behavior or functioning, talk of suicide or self-harm, inability to perform daily activities, substance abuse, withdrawal from relationships, or symptoms that worsen over time despite support.'
  },
  {
    question: 'What if the person refuses help or gets angry with me?',
    answer: 'Respect their autonomy while expressing continued concern. Say something like, "I understand you don\'t want to talk right now. I care about you and I\'m here when you\'re ready." Don\'t take their response personally—crisis reactions vary. If they\'re an immediate danger to themselves or others, you may need to contact emergency services even if they resist.'
  },
  {
    question: 'Can I help someone with a mental health crisis if I\'m not trained?',
    answer: 'Yes! While professional training is valuable, anyone can provide compassionate support. Basic skills include listening without judgment, offering reassurance, helping connect them to professional resources, and staying present. However, recognize your limitations—if the situation feels beyond your capacity, seek professional help immediately.'
  },
  {
    question: 'How do I approach someone I\'m concerned about?',
    answer: 'Choose a private, comfortable setting. Use "I" statements: "I\'ve noticed you seem down lately and I\'m concerned." Be direct but compassionate. Don\'t minimize their feelings or offer quick fixes. Most importantly, listen more than you talk and validate their emotions.'
  },
  {
    question: 'What resources are available for mental health crises?',
    answer: 'Key resources include: 988 Suicide & Crisis Lifeline (call or text), Crisis Text Line (text HOME to 741741), NAMI Helpline (1-800-950-6264), local emergency services (911), hospital emergency departments, community mental health centers, and mobile crisis teams. Many communities also have warm lines for non-emergency support.'
  }];


  const relatedPosts = [
  {
    title: 'TMS for Migraine Relief in Veterans',
    excerpt: 'Learn how TMS helps veterans with migraines and comorbid conditions like PTSD and depression.',
    link: '/blogs/tms-migraine-veterans',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033673/7_lnxkrv.png'
  },
  {
    title: 'TMS for Anxiety in Veterans',
    excerpt: 'Discover how TMS helps veterans manage anxiety beyond medication.',
    link: '/blogs/tms-anxiety-veterans',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png'
  },
  {
    title: 'Understanding PTSD in Veterans',
    excerpt: 'Complete guide to PTSD signs, symptoms, and treatment paths including TMS therapy.',
    link: '/blogs/understanding-ptsd-veterans',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/5_kvtlku.png'
  }];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Mental Health First Aid: How to Help Someone in Crisis',
    description: 'Complete guide to mental health first aid. Learn how to recognize crisis signs, provide immediate support, and connect people to professional help. Essential information for everyone.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp',
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
    datePublished: '2025-01-19',
    dateModified: '2025-01-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/mental-health-first-aid'
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
        title="Mental Health First Aid: How to Help Someone in Crisis"
        description="Learn essential mental health first aid skills. Recognize crisis signs, provide immediate support, and connect people to professional help. Everyone should know these life-saving techniques."
        keywords="mental health first aid, how to help someone in crisis, suicide prevention, mental health crisis, helping someone with depression, mental health support"
        canonical="/blog/mental-health-first-aid"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Mental Health First Aid', url: '/blog/mental-health-first-aid' }]
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
                <BreadcrumbPage>Mental Health First Aid</BreadcrumbPage>
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
                January 19, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Mental Health First Aid: How to Help Someone in Crisis
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Essential skills everyone should know to provide immediate support and potentially save a life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Get Professional Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Crisis Resources Banner */}
     

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
                      <Link to="/contact">Get Help</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/19_luad51.png"
                alt="Supporting someone through mental health crisis"
                className="w-full  md:h-96 object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                You would know what to do if someone collapsed from a heart attack or started choking. But what if a friend confides they're having suicidal thoughts? What if a coworker has a panic attack? What if you notice a loved one spiraling into depression? Mental health crises are just as real and potentially life-threatening as physical emergencies—yet most of us feel unprepared to help. This comprehensive guide provides the essential skills you need to provide Mental Health First Aid and potentially save a life.
              </p>
            </div>

            {/* Section 1: What is MHFA */}
            <section ref={(el) => sectionsRef.current['what-is-mhfa'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What is Mental Health First Aid?</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Definition</p>
                  <p className="text-gray-700">
                    Mental Health First Aid is the help provided to someone developing a mental health problem, experiencing a worsening of an existing mental health problem, or in a mental health crisis. It's the initial support offered until appropriate professional help is received or until the crisis resolves.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-6">
                Just as CPR helps someone experiencing cardiac arrest before medical professionals arrive, Mental Health First Aid helps someone in a mental health crisis before professional treatment can be accessed. The goal is to:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Provide Immediate Support</h4>
                    <p className="text-sm text-gray-600">Offer comfort and reassurance during acute distress</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Prevent Escalation</h4>
                    <p className="text-sm text-gray-600">Stop situations from worsening or becoming dangerous</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Connect to Resources</h4>
                    <p className="text-sm text-gray-600">Help access appropriate professional help</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Save Lives</h4>
                    <p className="text-sm text-gray-600">Intervene in potentially life-threatening situations</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Why Mental Health First Aid Matters</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 1 in 5 adults experiences mental illness each year</li>
                    <li>• Only 47% receive treatment—often due to barriers in accessing care</li>
                    <li>• Early intervention significantly improves outcomes</li>
                    <li>• Suicide is the 12th leading cause of death in the US</li>
                    <li>• Someone trained in Mental Health First Aid can bridge the gap</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 2: Recognizing Crisis */}
            <section ref={(el) => sectionsRef.current['recognizing-crisis'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Recognizing a Mental Health Crisis</h2>
              
              <p className="mb-6">
                A mental health crisis exists when someone's behavior puts them at risk of hurting themselves or others and/or prevents them from being able to care for themselves effectively. Warning signs vary but often include:
              </p>

              <div className="space-y-6">
                <Card className="border-l-4 border-red-600">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                      <AlertCircle className="w-6 h-6 text-red-600" />
                      Immediate Danger Signs (Call 911 or 988)
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Talk of suicide or wanting to die</li>
                      <li>• Looking for ways to kill oneself (researching methods, obtaining means)</li>
                      <li>• Talking about feeling hopeless or having no reason to live</li>
                      <li>• Extreme mood swings</li>
                      <li>• Threatening to hurt others or destroy property</li>
                      <li>• Acting violently or out of control</li>
                      <li>• Seeing or hearing things that aren't there</li>
                      <li>• Inability to perform daily tasks or care for self</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Behavioral Changes</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Withdrawal from friends, family, and activities</li>
                      <li>• Dramatic changes in eating or sleeping patterns</li>
                      <li>• Rapid or dramatic shifts in emotions</li>
                      <li>• Increased use of alcohol or drugs</li>
                      <li>• Giving away prized possessions</li>
                      <li>• Taking unnecessary risks</li>
                      <li>• Neglecting personal hygiene</li>
                      <li>• Increased agitation or inability to stay still</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Emotional/Mental Changes</h3>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Expressing feelings of being trapped or in unbearable pain</li>
                      <li>• Talking about being a burden to others</li>
                      <li>• Saying goodbye to people as if they won't be seen again</li>
                      <li>• Extreme feelings of worthlessness or guilt</li>
                      <li>• Sudden calmness after period of depression or anxiety</li>
                      <li>• Paranoid thoughts or excessive worry</li>
                      <li>• Inability to concentrate or think clearly</li>
                      <li>• Unexplained physical problems</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: How to Help */}
            <section ref={(el) => sectionsRef.current['how-to-help'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How to Help Someone in Crisis</h2>
              
              <p className="mb-6">
                Use the ALGEE action plan, an evidence-based approach for Mental Health First Aid:
              </p>

              <div className="space-y-4">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        A
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Assess for Risk of Suicide or Harm</h4>
                        <p className="text-gray-700 mb-3">
                          If you're concerned someone may be suicidal, ask directly: "Are you thinking about killing yourself?" This doesn't increase risk—it shows you care and gives them permission to talk.
                        </p>
                        <div className="bg-gray-50 p-4 rounded-md">
                          <p className="text-sm font-medium mb-2">If risk is present:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>✓ Call 988 (Suicide & Crisis Lifeline) immediately</li>
                            <li>✓ Don't leave them alone</li>
                            <li>✓ Remove access to lethal means</li>
                            <li>✓ Take all threats seriously</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        L
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Listen Nonjudgmentally</h4>
                        <p className="text-gray-700 mb-3">
                          Sometimes the most powerful help you can offer is simply listening without judgment. This means:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Give your full attention—put away phone, make eye contact</li>
                          <li>• Don't interrupt or offer solutions immediately</li>
                          <li>• Avoid phrases like "just think positive" or "others have it worse"</li>
                          <li>• Use reflective listening: "It sounds like you're feeling..."</li>
                          <li>• Allow silence—don't rush to fill it</li>
                          <li>• Take their feelings seriously, even if you don't understand</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        G
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Give Reassurance and Information</h4>
                        <p className="text-gray-700 mb-3">
                          Provide hope without minimizing their experience:
                        </p>
                        <div className="bg-green-50 p-4 rounded-md mb-3">
                          <p className="text-sm font-medium mb-2 text-green-900">Helpful Statements:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• "I'm here for you"</li>
                            <li>• "You're not alone in this"</li>
                            <li>• "This is treatable and you can feel better"</li>
                            <li>• "Your life matters to me"</li>
                            <li>• "Let's figure this out together"</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-md">
                          <p className="text-sm font-medium mb-2 text-red-900">Avoid Saying:</p>
                          <ul className="space-y-1 text-sm text-gray-700">
                            <li>• "Just snap out of it"</li>
                            <li>• "Everyone feels like this sometimes"</li>
                            <li>• "You have so much to live for"</li>
                            <li>• "This is all in your head"</li>
                            <li>• "Things could be worse"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        E
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Encourage Appropriate Professional Help</h4>
                        <p className="text-gray-700 mb-3">
                          Help them access professional support:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Suggest they talk to a therapist, counselor, or doctor</li>
                          <li>• Offer to help them find resources or make appointments</li>
                          <li>• If they're resistant, respect their autonomy while staying supportive</li>
                          <li>• Provide crisis line numbers: 988 or Crisis Text Line (text HOME to 741741)</li>
                          <li>• If in immediate danger, accompany them to emergency room</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        E
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Encourage Self-Help and Other Support Strategies</h4>
                        <p className="text-gray-700 mb-3">
                          Suggest coping strategies while they wait for professional help:
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                          <li>• Connect with supportive friends and family</li>
                          <li>• Engage in physical activity</li>
                          <li>• Maintain regular sleep and eating schedules</li>
                          <li>• Practice relaxation techniques</li>
                          <li>• Join support groups</li>
                          <li>• Reduce alcohol and drug use</li>
                          <li>• Stay engaged in activities they usually enjoy</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Specific Situations */}
            <section ref={(el) => sectionsRef.current['specific-situations'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Specific Crisis Situations</h2>
              
              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Panic Attack</h3>
                    <p className="text-gray-700 mb-3">
                      Panic attacks are terrifying but not dangerous. Help by:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Staying calm yourself—your calm helps them feel safe</li>
                      <li>• Moving to a quiet, less stimulating environment</li>
                      <li>• Encouraging slow, deep breathing</li>
                      <li>• Reminding them this will pass (usually within 10-20 minutes)</li>
                      <li>• Helping them focus on the present moment</li>
                      <li>• Not leaving them alone until symptoms subside</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Suicidal Thoughts or Behavior</h3>
                    <p className="text-gray-700 mb-3">
                      This is a medical emergency. Take immediate action:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Ask directly: "Are you thinking about suicide?"</li>
                      <li>• If yes: Call 988 or 911 immediately</li>
                      <li>• Remove access to firearms, medications, sharp objects</li>
                      <li>• Don't leave them alone</li>
                      <li>• Listen without judgment</li>
                      <li>• Don't promise to keep suicide plans secret</li>
                      <li>• Take all statements seriously—even if they seem like "attention-seeking"</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Psychosis (Hallucinations/Delusions)</h3>
                    <p className="text-gray-700 mb-3">
                      Someone experiencing psychosis may see or hear things others don't, or have fixed false beliefs:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Stay calm and speak in a clear, concise manner</li>
                      <li>• Don't argue about the reality of their experiences</li>
                      <li>• Validate their feelings without agreeing with delusions</li>
                      <li>• Reduce stimulation (noise, lights, crowds)</li>
                      <li>• Call for professional help—this requires medical attention</li>
                      <li>• Ensure safety for everyone present</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Severe Depression</h3>
                    <p className="text-gray-700 mb-3">
                      When depression becomes debilitating:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Check in regularly—isolation worsens depression</li>
                      <li>• Help with basic tasks if they're overwhelmed</li>
                      <li>• Encourage professional treatment</li>
                      <li>• Be patient—depression isn't weakness or laziness</li>
                      <li>• Watch for suicidal thoughts</li>
                      <li>• Learn about treatment options like <Link to="/tms-therapy" className="text-[#572670] hover:underline">TMS therapy</Link></li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Substance Abuse Emergency</h3>
                    <p className="text-gray-700 mb-3">
                      Overdose or severe intoxication:
                    </p>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Call 911 immediately if person is unconscious, having seizures, or trouble breathing</li>
                      <li>• Administer Narcan if available and you're trained</li>
                      <li>• Place person on their side if unconscious to prevent choking</li>
                      <li>• Stay with them until help arrives</li>
                      <li>• Don't leave them to "sleep it off"</li>
                      <li>• After crisis passes, encourage addiction treatment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Self-Care */}
            <section ref={(el) => sectionsRef.current['self-care'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Self-Care for Helpers</h2>
              
              <p className="mb-6">
                Providing mental health first aid can be emotionally draining. Taking care of yourself enables you to help others effectively:
              </p>

              <Card className="bg-purple-50 border-purple-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-purple-900 mb-3">Recognize Compassion Fatigue</p>
                  <p className="text-gray-700 mb-3">
                    Signs you need to step back and recharge:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Feeling emotionally exhausted</li>
                    <li>• Difficulty sleeping or concentrating</li>
                    <li>• Decreased empathy or numbness</li>
                    <li>• Irritability or mood changes</li>
                    <li>• Physical symptoms (headaches, fatigue)</li>
                    <li>• Withdrawal from others</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid md:grid-cols-2 gap-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Set Boundaries</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Recognize your limitations</li>
                      <li>✓ It's okay to say you need help</li>
                      <li>✓ Don't try to be someone's sole support</li>
                      <li>✓ Set limits on availability</li>
                      <li>✓ Remember: you can't save everyone</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Practice Self-Care</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>✓ Maintain your own mental health routines</li>
                      <li>✓ Talk to someone about the experience</li>
                      <li>✓ Engage in stress-relieving activities</li>
                      <li>✓ Get adequate sleep and nutrition</li>
                      <li>✓ Seek professional support if needed</li>
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
                  Need Professional Mental Health Treatment?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If you or someone you know is struggling with depression, anxiety, or other mental health conditions, professional treatment can help. Learn about evidence-based options including TMS therapy.
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
                    className="w-full object-cover" />

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

export default MentalHealthFirstAidBlogPostPage;