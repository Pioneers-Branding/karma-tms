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

const ConnectingTeensMentalWellnessBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'communication-barriers', label: 'Understanding Communication Barriers' },
  { id: 'building-trust', label: 'Building Trust and Safety' },
  { id: 'warning-signs', label: 'Recognizing Warning Signs' },
  { id: 'conversation-strategies', label: 'Effective Conversation Strategies' },
  { id: 'professional-help', label: 'When to Seek Professional Help' },
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
    question: 'How do I start a mental health conversation with my teen?',
    answer: 'Choose a relaxed, private setting and start with open-ended questions like "How have you been feeling lately?" Avoid judgmental language and be prepared to listen more than you talk. Share your own experiences with stress or difficult emotions to normalize the conversation.'
  },
  {
    question: 'What if my teen refuses to talk about their feelings?',
    answer: 'Respect their boundaries while maintaining availability. Let them know you\'re there when they\'re ready. Consider alternative communication methods like texting or writing notes. Sometimes teens open up more during shared activities rather than formal sit-down conversations.'
  },
  {
    question: 'How can I tell if my teen needs professional help?',
    answer: 'Warning signs include persistent sadness lasting more than two weeks, withdrawal from activities and friends, significant changes in eating or sleeping patterns, declining grades, risky behaviors, or any mention of self-harm or suicide. When in doubt, consult a mental health professional.'
  },
  {
    question: 'What should I avoid saying to my struggling teen?',
    answer: 'Avoid dismissive phrases like "It\'s just a phase," "Other people have it worse," or "Just think positive." Don\'t minimize their feelings or offer quick fixes. Instead, validate their emotions and show you take their concerns seriously.'
  },
  {
    question: 'How do I balance giving space with staying involved?',
    answer: 'Respect their growing independence while maintaining consistent check-ins. Set clear boundaries about safety and communication. Stay involved in their lives by attending events, meeting friends, and showing interest in their activities without being intrusive.'
  },
  {
    question: 'Can social media really affect my teen\'s mental health?',
    answer: 'Yes, research shows excessive social media use is linked to increased anxiety, depression, and poor sleep in teenagers. It can create unrealistic comparisons, cyberbullying, and fear of missing out (FOMO). Set healthy limits and discuss social media literacy.'
  }];


  const relatedPosts = [
  {
    title: 'Empowering Youth: Strategies for Building Emotional Resilience',
    excerpt: 'Discover proven strategies for building emotional resilience in young people.',
    link: '/blog/empowering-youth-emotional-resilience',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/20_xdad6g.png'
  },
  {
    title: 'Managing Anxiety Triggers in Everyday Life',
    excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively.',
    link: '/blog/managing-anxiety-triggers',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png'
  },
  {
    title: 'Mental Health First Aid: How to Help Someone in Crisis',
    excerpt: 'Learn essential mental health first aid skills for crisis situations.',
    link: '/blog/mental-health-first-aid',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/19_luad51.png'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Connecting with Teens & Nurturing Open Communication on Mental Wellness',
    description: 'Comprehensive guide for parents and caregivers on building trust, recognizing warning signs, and fostering open communication about mental health with teenagers.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/62abea2f-775f-47a7-ad22-2bfc58d01038.webp',
    author: {
      '@type': 'Person',
      name: 'karmatmsdev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2024-10-17',
    dateModified: '2024-10-17',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/connecting-teens-mental-wellness'
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
        title="Connecting with Teens & Nurturing Open Communication on Mental Wellness"
        description="Learn effective strategies for building trust and fostering open communication about mental health with teenagers. Recognize warning signs, start meaningful conversations, and create a supportive environment."
        keywords="teen mental health, parent teen communication, adolescent mental wellness, teenage depression, teen anxiety, parenting strategies, mental health conversations, warning signs teens"
        canonical="/blogs/connecting-teens-mental-wellness"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/62abea2f-775f-47a7-ad22-2bfc58d01038.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Connecting with Teens', url: '/blogs/connecting-teens-mental-wellness' }]
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
                <BreadcrumbPage>Connecting with Teens</BreadcrumbPage>
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
                October 17, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatmsdev
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Connecting with Teens & Nurturing Open Communication on Mental Wellness
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Building trust, recognizing warning signs, and fostering meaningful conversations about mental health
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Get Professional Support</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/conditions">Mental Health Resources</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents */}
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
                      <Link to="/contact">Get Help for Your Teen</Link>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/62abea2f-775f-47a7-ad22-2bfc58d01038.webp"
                alt="Parent connecting with teenager about mental health"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                Navigating the teenage years can be challenging for both adolescents and their parents. As teens face unprecedented pressures from academics, social media, peer relationships, and identity formation, mental health concerns are rising at alarming rates. Creating an environment where teens feel safe discussing their mental wellness is crucial—and often more difficult than it seems. This comprehensive guide will help you build bridges of communication, recognize when your teen is struggling, and provide the support they need.
              </p>
            </div>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current['communication-barriers'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Communication Barriers</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">The Teen Experience</p>
                  <p className="text-gray-700">
                    Adolescence is a period of rapid brain development, hormonal changes, and identity formation. Teens naturally seek independence while simultaneously needing guidance and support. This paradox creates unique communication challenges.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Barriers to Overcome</h3>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Developmental Factors</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Natural push for independence</li>
                      <li>• Developing abstract thinking</li>
                      <li>• Peer influence over family</li>
                      <li>• Emotional intensity and mood swings</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Social Pressures</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fear of being judged or misunderstood</li>
                      <li>• Stigma around mental health</li>
                      <li>• Social media comparison</li>
                      <li>• Academic and future anxieties</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <p className="mb-4">
                Statistics show that 1 in 5 adolescents will experience a mental health disorder, yet only about half receive treatment. One major barrier? Communication breakdown between teens and the adults who can help them.
              </p>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current['building-trust'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Building Trust and Creating Safety</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Foundation of Connection</h3>
              <p className="mb-6">
                Before teens will open up about mental health struggles, they need to trust that you'll listen without judgment, take them seriously, and respect their privacy (within appropriate safety boundaries).
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Be Consistently Present</h4>
                        <p className="text-gray-700">
                          Regular, low-stakes interactions build trust over time. Share meals together, attend their events, or engage in activities they enjoy. Quality time creates opportunities for organic conversations.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Practice Active Listening</h4>
                        <p className="text-gray-700">
                          Put away devices, make eye contact, and give them your full attention. Reflect back what you hear: "It sounds like you're feeling overwhelmed by..." This validates their experience and shows you're truly listening.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Validate Their Emotions</h4>
                        <p className="text-gray-700">
                          Even if their concerns seem trivial to you, they're very real to them. Say "That sounds really difficult" instead of "You'll get over it." Validation doesn't mean agreement—it means acknowledging their feelings.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Respect Privacy (Within Bounds)</h4>
                        <p className="text-gray-700">
                          Give them space to develop independence while maintaining safety parameters. Be clear about what you need to know (safety concerns) versus what you're willing to let them keep private.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Normalize Mental Health Conversations</p>
                  <p className="text-gray-700">
                    Share your own experiences with stress, <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">anxiety</Link>, or difficult emotions. When teens see adults talking openly about mental health, it reduces stigma and shows that seeking help is a sign of strength, not weakness.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current['warning-signs'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Recognizing Warning Signs of Mental Health Struggles</h2>

              <div className="bg-gradient-to-r from-red-50 to-transparent p-6 rounded-lg border-l-4 border-red-500 mb-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium mb-2 text-red-900">Important: Trust Your Instincts</p>
                    <p className="text-gray-700">
                      If something feels off with your teen, don't dismiss your concerns. Early intervention can prevent more serious mental health crises.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Behavioral Changes to Watch For</h3>
              
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Signs of <Link to="/depression" className="text-[#572670] hover:underline">Depression</Link>:</h4>
                  <ul className="space-y-2 mb-4">
                    <li>• Persistent sadness or hopelessness lasting more than two weeks</li>
                    <li>• Loss of interest in previously enjoyed activities</li>
                    <li>• Significant changes in sleep (too much or too little)</li>
                    <li>• Changes in appetite or weight</li>
                    <li>• Fatigue and loss of energy</li>
                    <li>• Difficulty concentrating or making decisions</li>
                    <li>• Expressions of worthlessness or excessive guilt</li>
                  </ul>

                  <h4 className="font-bold mb-3 mt-6">Signs of Anxiety:</h4>
                  <ul className="space-y-2 mb-4">
                    <li>• Excessive worry that interferes with daily life</li>
                    <li>• Physical symptoms like stomachaches or headaches</li>
                    <li>• Avoiding school, social situations, or activities</li>
                    <li>• Perfectionism or fear of making mistakes</li>
                    <li>• Restlessness or feeling "on edge"</li>
                    <li>• Panic attacks or intense fear episodes</li>
                  </ul>

                  <h4 className="font-bold mb-3 mt-6">Social and Academic Red Flags:</h4>
                  <ul className="space-y-2">
                    <li>• Sudden changes in friend groups or social withdrawal</li>
                    <li>• Declining grades or increased school absences</li>
                    <li>• Loss of interest in extracurricular activities</li>
                    <li>• Increased conflict with family or friends</li>
                    <li>• Risky behaviors (substance use, reckless driving, etc.)</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500 mb-6">
                <p className="font-medium mb-2 text-amber-900">Crisis Warning Signs—Immediate Action Needed</p>
                <ul className="text-gray-700 space-y-1">
                  <li>• Talk of suicide, death, or self-harm</li>
                  <li>• Giving away possessions or saying goodbye</li>
                  <li>• Dramatic personality changes</li>
                  <li>• Self-harm behaviors (cutting, burning, etc.)</li>
                  <li>• Substance abuse escalation</li>
                </ul>
                <p className="mt-3 text-sm font-medium">If you observe these signs, seek immediate professional help or call 988 (Suicide & Crisis Lifeline).</p>
              </div>
            </section>

            {/* Section 4 */}
            <section ref={(el) => sectionsRef.current['conversation-strategies'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Effective Conversation Strategies</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Starting the Conversation</h3>
              <p className="mb-6">
                Timing and approach matter. Don't ambush your teen with serious conversations when they're stressed or distracted. Instead, create natural openings:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>During car rides (side-by-side conversations feel less intense)</li>
                <li>While doing an activity together (cooking, walking, gaming)</li>
                <li>After watching a show or movie that touches on mental health</li>
                <li>During quiet evening moments before bed</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conversation Do's and Don'ts</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-green-900 mb-3">DO:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✓ Ask open-ended questions</li>
                      <li>✓ Use "I" statements ("I've noticed...")</li>
                      <li>✓ Show empathy and understanding</li>
                      <li>✓ Give them time to respond</li>
                      <li>✓ Focus on their feelings, not solutions</li>
                      <li>✓ Thank them for opening up</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-red-900 mb-3">DON'T:</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>✗ Minimize their feelings</li>
                      <li>✗ Jump to quick fixes or advice</li>
                      <li>✗ Compare to your own teen years</li>
                      <li>✗ Interrupt or argue</li>
                      <li>✗ Betray their confidence (unless safety risk)</li>
                      <li>✗ React with anger or disappointment</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sample Opening Lines</h3>
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="italic">"I've noticed you seem more stressed lately. Want to talk about it?"</li>
                    <li className="italic">"How are you really doing? And I mean really—not just 'fine.'"</li>
                    <li className="italic">"I know junior year is tough. What's been the hardest part for you?"</li>
                    <li className="italic">"I'm here if you need to vent or just want someone to listen."</li>
                    <li className="italic">"Is there anything on your mind that you'd like to talk about?"</li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 5 */}
            <section ref={(el) => sectionsRef.current['professional-help'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">When and How to Seek Professional Help</h2>

              <p className="mb-6">
                As much as you want to support your teen, some situations require professional intervention. Recognizing when to seek help—and following through—can be life-changing.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Professional Support</h3>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">School Counselors</h4>
                    <p className="text-gray-700">
                      First line of support for academic stress and peer issues. Free and accessible, though they may have limited mental health training.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Licensed Therapists</h4>
                    <p className="text-gray-700">
                      Psychologists, licensed professional counselors, and clinical social workers who specialize in adolescent mental health. They provide talk therapy using evidence-based approaches.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Psychiatrists</h4>
                    <p className="text-gray-700">
                      Medical doctors who can diagnose mental health conditions and prescribe medication when necessary. Often work in conjunction with therapists.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Alternative Treatments</h4>
                    <p className="text-gray-700">
                      For treatment-resistant <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link> or severe conditions, options like <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> offer effective, medication-free alternatives for adolescents and young adults.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Overcoming Treatment Resistance</h3>
              <p className="mb-4">
                Many teens resist therapy initially. Strategies to help them engage:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Let them choose their therapist (within reason)</li>
                <li>Start with a trial period: "Let's try 3-4 sessions and see"</li>
                <li>Normalize therapy: "Lots of people see therapists, even successful adults"</li>
                <li>Address confidentiality concerns: explain therapist-client privilege</li>
                <li>Consider individual, group, or family therapy based on their preference</li>
              </ul>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">The KarmaTMS Approach for Teens</p>
                  <p className="text-gray-700">
                    At <Link to="/" className="text-[#572670] hover:underline font-medium">KarmaTMS</Link>, we understand the unique challenges teens face. Our comprehensive approach includes family involvement, evidence-based treatments like TMS for treatment-resistant conditions, and compassionate care that respects adolescent autonomy while ensuring safety. <Link to="/contact" className="text-[#572670] hover:underline font-medium">Contact us</Link> to learn how we can support your teen's mental wellness journey.
                  </p>
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
                  Need Professional Support for Your Teen?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our team specializes in adolescent mental health with compassionate, evidence-based care. Let us help your family navigate these challenges.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/conditions">View Mental Health Resources</Link>
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

export default ConnectingTeensMentalWellnessBlogPostPage;