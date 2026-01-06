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

const TMSMultipleSessionsBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-brain-changes', label: 'Understanding Brain Changes' },
  { id: 'how-tms-works', label: 'How TMS Works Over Time' },
  { id: 'session-frequency', label: 'Session Frequency & Duration' },
  { id: 'what-to-expect', label: 'What to Expect' },
  { id: 'treatment-timeline', label: 'Treatment Timeline' },
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
    question: 'Why can\'t I just have one TMS session?',
    answer: 'A single TMS session doesn\'t provide lasting neuroplastic changes. Think of it like physical therapy - one session might feel good, but lasting change requires consistent, repeated stimulation to create new neural pathways and strengthen beneficial brain connections.'
  },
  {
    question: 'How many TMS sessions do I need?',
    answer: 'Most patients require 30-36 sessions over 6 weeks (5 sessions per week). However, some may need fewer or more depending on their condition severity and response. Your treatment team will monitor your progress and adjust accordingly.'
  },
  {
    question: 'Can I skip sessions or spread them out?',
    answer: 'Consistency is critical for TMS effectiveness. Missing sessions can delay results and reduce overall effectiveness. The 5-days-per-week protocol is based on research showing this frequency optimizes neuroplastic changes while allowing the brain to consolidate improvements.'
  },
  {
    question: 'When will I start seeing results?',
    answer: 'Most patients begin noticing improvements around weeks 2-3, though some may see changes earlier or later. Full benefits typically emerge by week 4-6. The gradual improvement reflects the time needed for neuroplastic changes to accumulate and stabilize.'
  },
  {
    question: 'What happens if I stop treatment early?',
    answer: 'Stopping TMS before completing the full course often results in incomplete symptom relief. While some improvement may remain, you likely won\'t experience the full therapeutic benefits. If you\'re considering stopping early, discuss with your provider about maintenance protocols or treatment modifications.'
  },
  {
    question: 'Will I need maintenance sessions after completing treatment?',
    answer: 'Some patients maintain their improvements without additional sessions, while others benefit from periodic maintenance treatments (monthly or quarterly) to sustain results. Your provider will help develop a personalized maintenance plan based on your response to treatment.'
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
    headline: 'Why Does TMS Require Multiple Sessions? Understanding the Science Behind Treatment Duration',
    description: 'Discover why TMS therapy requires multiple sessions for lasting results. Learn about neuroplasticity, treatment protocols, and what to expect during your TMS journey.',
    image: 'https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg',
    author: {
      '@type': 'Person',
      name: 'Dr. Keerthy Sunder',
      jobTitle: 'Board-Certified Psychiatrist | Medical Director at KarmaTMS',
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
    datePublished: '2025-07-22',
    dateModified: '2025-07-22',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/why-tms-requires-multiple-sessions'
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
        title="Why Does TMS Require Multiple Sessions? | Treatment Duration Explained"
        description="Understand why TMS therapy requires multiple sessions for lasting results. Learn about neuroplasticity, treatment protocols, and what to expect during your TMS journey."
        keywords="tms therapy sessions, tms treatment duration, how many tms sessions, tms therapy timeline, neuroplasticity, brain stimulation, depression treatment"
        canonical="/blog/why-tms-requires-multiple-sessions"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Why TMS Requires Multiple Sessions', url: '/blog/why-tms-requires-multiple-sessions' }]
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
                <BreadcrumbPage>Why TMS Requires Multiple Sessions</BreadcrumbPage>
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
                July 22, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Why Does TMS Require Multiple Sessions?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding the Science Behind Treatment Duration and Neuroplasticity
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
                      <Link to="/contact">Schedule Consultation</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/11_itsgyr.png"
                alt="TMS therapy session showing treatment process"
                className="w-full   object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                One of the most common questions we hear from patients considering <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> is: "Why do I need so many sessions?" It's a fair question, especially when you're investing time and resources into treatment. The answer lies in understanding how the brain changes and heals—a process called <strong>neuroplasticity</strong>.
              </p>
            </div>

            {/* Section 1: Understanding Brain Changes */}
            <section ref={(el) => sectionsRef.current['understanding-brain-changes'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Neuroplasticity: How the Brain Changes</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">What is Neuroplasticity?</p>
                  <p className="text-gray-700">
                    Neuroplasticity is the brain's ability to reorganize itself by forming new neural connections throughout life. This remarkable capability allows neurons (brain cells) to adjust their activities in response to new situations or changes in their environment.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                When you have <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">anxiety</Link>, or other mental health conditions, certain brain regions become either underactive or overactive. These patterns didn't develop overnight—they formed over months or years. Similarly, reversing these patterns requires time and consistent intervention.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Strengthening Neural Pathways</h4>
                    <p className="text-sm text-gray-600">Repeated TMS sessions strengthen beneficial neural connections, much like exercise strengthens muscles</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Creating New Pathways</h4>
                    <p className="text-sm text-gray-600">TMS helps create new, healthier neural pathways that support better mood regulation</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Consolidating Changes</h4>
                    <p className="text-sm text-gray-600">Each session builds on the previous one, consolidating brain changes over time</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Lasting Relief</h4>
                    <p className="text-sm text-gray-600">Multiple sessions ensure changes become stable and long-lasting</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2: How TMS Works Over Time */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Works Over Time</h2>
              
              <p className="mb-6">
                TMS therapy uses magnetic pulses to stimulate specific brain regions involved in mood regulation. But unlike medication that you take daily and feel effects relatively quickly, TMS works by gradually reshaping brain activity patterns.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Cumulative Effect</h3>
              <p className="mb-4">
                Each TMS session delivers thousands of magnetic pulses to targeted brain areas. Here's what happens over multiple sessions:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Weeks 1-2: Initial Activation</h4>
                    <p className="text-gray-700">
                      The brain begins responding to magnetic stimulation. Neurons start becoming more active, but changes are still forming. Some patients notice subtle improvements, while others don't feel much yet.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Weeks 3-4: Neuroplastic Changes Emerge</h4>
                    <p className="text-gray-700">
                      This is when most patients begin noticing improvements—better mood, reduced anxiety, improved sleep. Neural pathways are strengthening, and the brain is forming new, healthier patterns.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Weeks 5-6: Consolidation & Optimization</h4>
                    <p className="text-gray-700">
                      Changes become more pronounced and stable. The brain consolidates the new neural patterns, making them more likely to persist after treatment ends.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Think of it Like Physical Therapy</p>
                  <p className="text-gray-700">
                    Just as you wouldn't expect full recovery from one physical therapy session after an injury, the brain needs repeated, consistent stimulation to "relearn" healthy functioning. Each TMS session is like one workout session—necessary but not sufficient on its own.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Session Frequency & Duration */}
            <section ref={(el) => sectionsRef.current['session-frequency'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Session Frequency & Duration: Why 5 Days a Week?</h2>
              
              <p className="mb-6">
                The standard TMS protocol calls for sessions 5 days per week for 4-6 weeks. This isn't arbitrary—it's based on extensive research into optimal neuroplastic changes.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">The Science Behind the Schedule</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Consistency Creates Change:</strong> Daily sessions maintain consistent brain stimulation, preventing the brain from reverting to old patterns between treatments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Optimal Timing:</strong> Research shows that sessions spaced 24 hours apart (weekdays) maximize neuroplastic changes while allowing for weekend rest.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Building Momentum:</strong> Each session builds on the previous one, creating cumulative benefits that wouldn't occur with less frequent treatment.</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

            

            </section>

            {/* Section 4: What to Expect */}
            <section ref={(el) => sectionsRef.current['what-to-expect'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What to Expect During Your TMS Journey</h2>
              
              <p className="mb-6">
                Understanding the typical progression can help set realistic expectations and keep you motivated throughout treatment.
              </p>

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Session Duration</h3>
                    <p className="text-gray-700 mb-3">Each session lasts 20-40 minutes depending on the protocol. You'll sit comfortably in a treatment chair while the TMS device delivers magnetic pulses.</p>
                    <p className="text-sm text-[#572670] font-medium">✓ No anesthesia needed ✓ Return to activities immediately ✓ No cognitive side effects</p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Side Effects</h3>
                    <p className="text-gray-700 mb-3">The most common side effect is mild scalp discomfort during or after treatment, which typically subsides within the first week.</p>
                    <p className="text-sm text-[#572670] font-medium">✓ No systemic effects ✓ No weight changes ✓ No sexual dysfunction</p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Progress Monitoring</h3>
                    <p className="text-gray-700 mb-3">Your treatment team will regularly assess your symptoms using standardized scales to track improvement and adjust treatment if needed.</p>
                    <p className="text-sm text-[#572670] font-medium">✓ Weekly check-ins ✓ Personalized adjustments ✓ Ongoing support</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Treatment Timeline */}
            <section ref={(el) => sectionsRef.current['treatment-timeline'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Your Treatment Timeline</h2>
              
              <div className="bg-gradient-to-r from-[#572670]/10 to-transparent p-6 rounded-lg border-l-4 border-[#572670] mb-6">
                <p className="font-medium mb-2">Standard Treatment Protocol</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Total Sessions:</strong> 30-36 sessions</li>
                  <li>• <strong>Duration:</strong> 6 weeks</li>
                  <li>• <strong>Frequency:</strong> 5 days per week (Monday-Friday)</li>
                  <li>• <strong>Session Length:</strong> 20-40 minutes each</li>
                  <li>• <strong>Total Time Commitment:</strong> Approximately 20-30 hours over 6 weeks</li>
                </ul>
              </div>

              <p className="mb-4">
                While this is the standard protocol, some patients may need additional sessions based on their individual response and condition severity. Your psychiatrist will work with you to determine the optimal treatment duration.
              </p>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy and innovative treatments for depression and anxiety. With extensive training in neuroscience and brain stimulation techniques, Dr. Sunder is dedicated to helping patients achieve lasting mental health through evidence-based, personalized care."
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
                  Ready to Start Your TMS Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our team will guide you through every step of your treatment, providing support and monitoring your progress along the way.
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
                    className="w-full  object-cover" />

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

export default TMSMultipleSessionsBlogPostPage;