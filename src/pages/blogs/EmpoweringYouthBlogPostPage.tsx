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
import { Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const EmpoweringYouthBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'what-is-resilience', label: 'What is Emotional Resilience?' },
  { id: 'why-important', label: 'Why It Matters for Youth' },
  { id: 'key-strategies', label: 'Key Building Strategies' },
  { id: 'practical-tools', label: 'Practical Tools' },
  { id: 'role-of-adults', label: 'Supporting Young People' },
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
    question: 'At what age should we start building emotional resilience?',
    answer: 'Emotional resilience can be nurtured from early childhood. Even toddlers benefit from age-appropriate emotional coaching. However, it\'s never too late—adolescents and young adults can still develop strong resilience skills with proper guidance and practice.'
  },
  {
    question: 'How long does it take to build emotional resilience?',
    answer: 'Building emotional resilience is an ongoing process, not a destination. Young people can begin seeing improvements in their coping skills within a few weeks of consistent practice, but developing deep resilience typically takes months to years of continued effort and support.'
  },
  {
    question: 'Can technology help or hinder youth resilience?',
    answer: 'Technology is a double-edged sword. When used mindfully, apps for meditation, mental health support, and learning can enhance resilience. However, excessive screen time, social media comparison, and cyberbullying can undermine it. The key is balanced, intentional use.'
  },
  {
    question: 'What role does physical health play in emotional resilience?',
    answer: 'Physical and emotional health are deeply interconnected. Regular exercise, adequate sleep, and proper nutrition significantly impact mood regulation, stress management, and overall resilience. Youth who maintain good physical health typically demonstrate stronger emotional coping skills.'
  },
  {
    question: 'How can schools support youth resilience?',
    answer: 'Schools can integrate social-emotional learning into curricula, provide access to mental health professionals, create safe spaces for expression, train teachers in trauma-informed practices, and foster inclusive environments where all students feel valued and supported.'
  },
  {
    question: 'When should parents seek professional help for their child?',
    answer: 'Seek professional help if your child shows persistent sadness or anxiety, withdrawal from activities, significant changes in eating or sleeping patterns, declining academic performance, self-harm behaviors, or if stress significantly impacts their daily functioning despite supportive interventions.'
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
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_2_ahwkma.png'
  }];



  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Empowering Youth: Strategies for Building Emotional Resilience',
    description: 'Comprehensive guide on building emotional resilience in young people. Learn proven strategies, practical tools, and how to support youth mental health development.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp',
    author: {
      '@type': 'Organization',
      name: 'karmatms'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2024-12-28',
    dateModified: '2024-12-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/empowering-youth-emotional-resilience'
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
        title="Empowering Youth: Strategies for Building Emotional Resilience"
        description="Discover proven strategies for building emotional resilience in young people. Learn practical tools, supporting techniques, and how to foster mental health wellness in youth."
        keywords="youth mental health, emotional resilience, building resilience in youth, adolescent mental health, youth empowerment, teen mental wellness, emotional intelligence youth"
        canonical="/blog/empowering-youth-emotional-resilience"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Empowering Youth', url: '/blog/empowering-youth-emotional-resilience' }]
        } />


      <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

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
                <BreadcrumbPage>Empowering Youth: Building Emotional Resilience</BreadcrumbPage>
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
                December 28, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Empowering Youth: Strategies for Building Emotional Resilience
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Essential tools and strategies to help young people develop the emotional strength to navigate life's challenges
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Consultation</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376734/20_xdad6g.png"
                alt="Young people building emotional resilience"
                className="w-full  md:h-96 object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                In an era marked by unprecedented challenges—from academic pressures to social media comparison, climate anxiety to economic uncertainty—today's youth face unique stressors that can impact their mental health. Building <strong>emotional resilience</strong> is no longer optional; it's essential for helping young people not just survive, but thrive in an increasingly complex world.
              </p>
            </div>

            {/* Section 1: What is Emotional Resilience */}
            <section ref={(el) => sectionsRef.current['what-is-resilience'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What is Emotional Resilience?</h2>
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Core Definition</p>
                  <p className="text-gray-700">
                    Emotional resilience is the ability to adapt to stressful situations, bounce back from adversity, and maintain psychological well-being despite challenges. It's not about avoiding difficulties but developing the inner strength to navigate them effectively.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                Resilience isn't a trait people are simply born with—it's a set of skills, behaviors, and thought patterns that can be learned and strengthened over time. For young people, developing resilience early creates a foundation for lifelong mental health and success.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Emotional Awareness</h4>
                    <p className="text-sm text-gray-600">Understanding and naming emotions as they arise</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Adaptive Coping</h4>
                    <p className="text-sm text-gray-600">Using healthy strategies to manage stress</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Growth Mindset</h4>
                    <p className="text-sm text-gray-600">Viewing challenges as opportunities to learn</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Social Connection</h4>
                    <p className="text-sm text-gray-600">Building supportive relationships</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2: Why Important */}
            <section ref={(el) => sectionsRef.current['why-important'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Why Emotional Resilience Matters for Youth</h2>

              <p className="mb-6">
                The adolescent years are a critical period for brain development, identity formation, and establishing lifelong patterns of thinking and behavior. Youth who develop strong emotional resilience are better equipped to:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Navigate academic pressures and performance anxiety</li>
                <li>Build and maintain healthy relationships</li>
                <li>Manage conflicts constructively</li>
                <li>Resist negative peer pressure and risky behaviors</li>
                <li>Develop a positive self-image despite setbacks</li>
                <li>Make thoughtful decisions under stress</li>
                <li>Recover from disappointments and failures</li>
              </ul>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Research Insight</p>
                  <p className="text-gray-700">
                    Studies show that youth with higher emotional resilience experience lower rates of <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">anxiety</Link>, and substance abuse. They also demonstrate better academic performance, stronger social skills, and improved overall life satisfaction.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Key Strategies */}
            <section ref={(el) => sectionsRef.current['key-strategies'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Key Strategies for Building Resilience</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. Foster Emotional Intelligence</h3>
              <p className="mb-4">
                Help young people identify, understand, and express their emotions appropriately. Teach them that all feelings are valid, while not all behaviors are acceptable. Practice emotional vocabulary and create safe spaces for expression.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. Encourage Problem-Solving Skills</h3>
              <p className="mb-4">
                Rather than solving problems for youth, guide them through the process. Ask questions like "What do you think you could do?" or "What might happen if you tried that?" This builds confidence in their ability to handle challenges independently.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Promote Healthy Risk-Taking</h3>
              <p className="mb-4">
                Encourage youth to step outside their comfort zones in safe, supportive environments. Whether it's trying a new activity, speaking up in class, or making new friends, calculated risks build confidence and resilience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Model Resilient Behavior</h3>
              <p className="mb-6">
                Adults should demonstrate healthy coping strategies, openly discuss their own challenges (age-appropriately), and show how they manage stress and setbacks. Young people learn more from what we do than what we say.
              </p>
            </section>

            {/* Section 4: Practical Tools */}
            <section ref={(el) => sectionsRef.current['practical-tools'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Practical Tools and Activities</h2>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Daily Mindfulness Practice</h4>
                    <p className="text-gray-700">
                      Even 5-10 minutes of daily meditation, deep breathing, or mindful awareness can significantly improve emotional regulation. Apps like Headspace, Calm, or Insight Timer offer youth-specific programs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Gratitude Journaling</h4>
                    <p className="text-gray-700">
                      Writing down three things they're grateful for each day shifts focus from problems to positives, rewiring the brain toward optimism and resilience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Physical Activity</h4>
                    <p className="text-gray-700">
                      Regular exercise releases endorphins, reduces stress hormones, and improves mood. Find activities youth enjoy—sports, dance, hiking, or even walking—to make it sustainable.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Creative Expression</h4>
                    <p className="text-gray-700">
                      Art, music, writing, or other creative outlets provide healthy ways to process emotions and build self-esteem through accomplishment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Social Connection Activities</h4>
                    <p className="text-gray-700">
                      Regular face-to-face time with supportive friends and family members builds the social support network essential for resilience. Prioritize quality over quantity in relationships.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Role of Adults */}
            <section ref={(el) => sectionsRef.current['role-of-adults'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Adults Can Support Youth Resilience</h2>

              <p className="mb-6">
                Parents, teachers, coaches, and other influential adults play a crucial role in helping young people develop resilience:
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Essential Support Strategies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Provide unconditional positive regard:</strong> Let youth know they're valued for who they are, not just what they achieve</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Listen actively:</strong> Give full attention, validate feelings, and resist the urge to immediately fix or minimize problems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Set appropriate boundaries:</strong> Balance freedom with structure; consistent, fair limits actually increase feelings of safety</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Normalize struggle:</strong> Help youth understand that challenges and difficult emotions are normal parts of growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Celebrate effort, not just outcomes:</strong> Praise persistence, creativity, and learning from mistakes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-[#572670]/10 to-transparent p-6 rounded-lg border-l-4 border-[#572670] mb-6">
                <p className="font-medium mb-2">Professional Support</p>
                <p className="text-gray-700">
                  If a young person is struggling significantly with mental health challenges, seeking professional help is important. Therapies like cognitive-behavioral therapy (CBT), and innovative treatments like <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> can provide additional support for building resilience and managing mental health conditions.
                </p>
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
                    <AccordionContent className="text-gray-700 pt-2 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Support Your Young Person's Mental Health Journey
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If you're concerned about a young person's emotional well-being, our team can help. We offer comprehensive mental health support for youth and families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10">

                    
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) =>
                <Card
                  key={index}
                  className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow">

                    <img src={post.image} alt={post.title} className="w-full object-cover" />
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 hover:text-[#572670] transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <Button
                      asChild
                      variant="ghost"
                      className="text-[#572670] p-0 h-auto hover:bg-transparent">

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

export default EmpoweringYouthBlogPostPage;