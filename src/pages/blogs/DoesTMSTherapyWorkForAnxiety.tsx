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

const DoesTMSTherapyWorkForAnxiety = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-anxiety', label: 'Understanding Anxiety' },
  { id: 'what-is-tms', label: 'What Is TMS Therapy for Anxiety?' },
  { id: 'how-tms-works', label: 'How Does TMS Work for Anxiety?' },
  { id: 'benefits', label: 'Benefits of TMS for Anxiety' },
  { id: 'does-it-help', label: 'Does TMS Help Anxiety Directly?' },
  { id: 'what-to-expect', label: 'What to Expect During TMS' },
  { id: 'effectiveness', label: 'How Effective Is TMS?' },
  { id: 'who-benefits', label: 'Who Can Benefit?' },
  { id: 'karma-experience', label: 'TMS at Karma TMS' },
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
    question: 'Does TMS therapy work for anxiety disorders?',
    answer: 'Yes, TMS therapy has shown effectiveness in treating anxiety disorders, particularly when anxiety co-occurs with depression. Studies demonstrate 50-70% response rates for generalized anxiety disorder, with many patients experiencing substantial reduction in anxiety symptoms. The FDA has approved TMS for anxious depression, validating its effectiveness for anxiety symptoms.'
  },
  {
    question: 'How long does it take for TMS to help with anxiety?',
    answer: 'Most patients begin noticing improvements in anxiety symptoms within 2-4 weeks of starting TMS treatment. The full benefits typically become apparent after 4-6 weeks of daily sessions. Some patients report feeling calmer and less anxious even earlier in treatment, while others may take the full course to experience significant relief.'
  },
  {
    question: 'Is TMS better than medication for anxiety?',
    answer: 'TMS offers several advantages over anxiety medications: no systemic side effects, no risk of dependency, and direct targeting of brain regions involved in anxiety. While medications work for many people, TMS is particularly valuable for those who haven\'t responded to medications or experience intolerable side effects. TMS can also be used alongside medications for enhanced benefits.'
  },
  {
    question: 'Can TMS make anxiety worse?',
    answer: 'TMS rarely makes anxiety worse. In clinical studies, less than 2% of patients report temporary increases in anxiety, which typically resolve within a few days. Most patients experience progressive reduction in anxiety symptoms throughout treatment. Your treatment team will monitor your symptoms closely and adjust the protocol if needed.'
  },
  {
    question: 'What types of anxiety does TMS treat?',
    answer: 'TMS has shown effectiveness for various anxiety conditions including generalized anxiety disorder (GAD), panic disorder, social anxiety, and anxiety associated with depression or PTSD. Research is ongoing for other anxiety-related conditions. The most robust evidence exists for GAD and anxious depression.'
  },
  {
    question: 'Is TMS therapy covered by insurance for anxiety?',
    answer: 'Insurance coverage for TMS varies by provider and plan. Most major insurers cover TMS for depression, and many also cover it when anxiety co-occurs with depression. Some plans may cover TMS specifically for anxiety disorders. Our team can help verify your insurance benefits and discuss coverage options.'
  },
  {
    question: 'How long do the anxiety relief benefits of TMS last?',
    answer: 'Many patients maintain significant anxiety reduction for 6-12 months or longer after completing TMS treatment. Studies show that approximately 60-70% of responders maintain their improvements at one-year follow-up. Some patients may benefit from occasional maintenance sessions to sustain long-term results.'
  }];


  const relatedPosts = [
  {
    title: 'TMS for Anxiety in Veterans',
    excerpt: 'Discover how TMS helps veterans manage anxiety beyond medication.',
    link: '/blogs/tms-anxiety-veterans',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png'
  },
  {
    title: 'Managing Anxiety Triggers in Everyday Life',
    excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively.',
    link: '/blog/managing-anxiety-triggers',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png'
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
    headline: 'Does TMS Therapy Work for Anxiety? Complete Guide',
    description: 'Comprehensive guide to TMS therapy for anxiety disorders. Learn how TMS works for anxiety, effectiveness rates, benefits, and what to expect during treatment.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp',
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
    datePublished: '2025-11-28',
    dateModified: '2025-11-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/DoesTMSTherapyWorkForAnxiety'
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
        title="Does TMS Therapy Work for Anxiety? Evidence-Based Guide 2025"
        description="Discover how TMS therapy effectively treats anxiety disorders. Learn about success rates, benefits, treatment process, and what to expect from TMS for anxiety relief."
        keywords="TMS therapy for anxiety, TMS anxiety treatment, does TMS work for anxiety, TMS for GAD, anxiety TMS therapy, non-medication anxiety treatment"
        canonical="/blogs/DoesTMSTherapyWorkForAnxiety"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Does TMS Therapy Work for Anxiety?', url: '/blogs/DoesTMSTherapyWorkForAnxiety' }]
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
                <BreadcrumbPage>Does TMS Therapy Work for Anxiety?</BreadcrumbPage>
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
                November 28, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Does TMS Therapy Work for Anxiety?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how TMS therapy offers new hope for anxiety relief through targeted brain stimulation
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/tms-therapy">Learn About TMS</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1764569002/34_g1u7jn.png"
                alt="TMS therapy for anxiety treatment"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                Anxiety can feel overwhelming, affecting every aspect of your life—from work performance to personal relationships. If you've been struggling with anxiety and traditional treatments haven't provided adequate relief, you might be wondering: does <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> work for anxiety? The answer is increasingly promising, with growing evidence supporting TMS as an effective treatment for various anxiety disorders.
              </p>
            </div>

            {/* Section 1: Understanding Anxiety */}
            <section ref={(el) => sectionsRef.current['understanding-anxiety'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Anxiety</h2>
              
              <p className="mb-4">
                <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">Anxiety disorders</Link> are among the most common mental health conditions, affecting millions of people worldwide. While some level of anxiety is a normal part of life, anxiety disorders involve persistent, excessive worry that interferes with daily activities.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Common Anxiety Disorders Include:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Generalized Anxiety Disorder (GAD)</li>
                    <li>• Panic Disorder</li>
                    <li>• Social Anxiety Disorder</li>
                    <li>• Post-Traumatic Stress Disorder (PTSD)</li>
                    <li>• Obsessive-Compulsive Disorder (OCD)</li>
                  </ul>
                </CardContent>
              </Card>

              <p className="mb-4">
                Traditional treatments for anxiety include medications (such as SSRIs, benzodiazepines) and psychotherapy (like cognitive-behavioral therapy). While these approaches help many people, approximately 30-40% of individuals don't achieve adequate relief or experience intolerable side effects from medications.
              </p>
            </section>

            {/* Section 2: What Is TMS Therapy for Anxiety? */}
            <section ref={(el) => sectionsRef.current['what-is-tms'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What Is TMS Therapy for Anxiety?</h2>
              
              <p className="mb-4">
                Transcranial Magnetic Stimulation (TMS) is a non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain associated with mood and anxiety regulation. Originally FDA-approved for depression, TMS has shown remarkable effectiveness in treating anxiety disorders as well.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">How TMS Differs from Traditional Anxiety Treatments</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>No Systemic Side Effects:</strong> Unlike medications, TMS doesn't cause weight gain, sexual dysfunction, or cognitive impairment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Non-Invasive:</strong> No surgery, anesthesia, or recovery time required</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Targeted Treatment:</strong> Directly stimulates brain regions involved in anxiety regulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>No Dependency Risk:</strong> Unlike benzodiazepines, TMS has no potential for addiction</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: How Does TMS Work for Anxiety? */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Does TMS Therapy Work for Anxiety?</h2>
              
              <p className="mb-6">
                TMS therapy works by targeting specific brain regions that are overactive or underactive in people with anxiety disorders. The most commonly targeted areas include the dorsolateral prefrontal cortex (DLPFC) and the right prefrontal cortex.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">The Science Behind TMS for Anxiety</h3>
                  <p className="text-gray-700 mb-4">
                    Research shows that anxiety disorders are associated with hyperactivity in certain brain regions and poor regulation between different brain networks. TMS uses focused magnetic pulses to:
                  </p>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>• Calm overactive brain circuits responsible for excessive worry</li>
                    <li>• Strengthen connections between the prefrontal cortex and emotional centers</li>
                    <li>• Restore balance in neurotransmitter systems (like GABA and glutamate)</li>
                    <li>• Promote neuroplasticity—the brain's ability to form new, healthier patterns</li>
                  </ul>
                  <p className="text-gray-700">
                    Over the course of treatment, these targeted stimulations create lasting changes in brain function, helping to reduce anxiety symptoms naturally and sustainably.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Benefits of TMS for Anxiety */}
            <section ref={(el) => sectionsRef.current['benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Benefits of TMS Therapy for Anxiety</h2>
              
              <div className="space-y-4 mb-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Effective for Treatment-Resistant Anxiety</h4>
                        <p className="text-gray-700">
                          TMS has shown 50-70% response rates for patients with anxiety disorders who haven't responded adequately to medications or therapy alone.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Minimal Side Effects</h4>
                        <p className="text-gray-700">
                          The most common side effect is mild scalp discomfort during treatment. Unlike anxiety medications, TMS doesn't cause drowsiness, weight gain, or sexual side effects.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Complementary to Other Treatments</h4>
                        <p className="text-gray-700">
                          TMS can be used alongside medications and therapy, or as a standalone treatment. Many patients find that combining TMS with therapy enhances both treatments' effectiveness.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Outpatient Treatment with No Downtime</h4>
                        <p className="text-gray-700">
                          Each TMS session lasts 20-40 minutes, and you can return to your normal activities immediately afterward. There's no sedation or recovery period required.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Long-Lasting Results</h4>
                        <p className="text-gray-700">
                          Many patients maintain significant anxiety reduction for months or even years after completing TMS treatment. Maintenance sessions can help sustain benefits long-term.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Does TMS Help Anxiety Directly? */}
            <section ref={(el) => sectionsRef.current['does-it-help'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Does TMS Therapy Help Anxiety Directly?</h2>
              
              <p className="mb-6">
                Yes, TMS can help anxiety directly, though the mechanisms are still being fully understood. Research indicates that TMS helps anxiety through multiple pathways:
              </p>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Clinical Evidence</p>
                  <p className="text-gray-700">
                    Studies specifically examining TMS for anxiety disorders have found response rates of 50-70% for generalized anxiety disorder, with many patients experiencing 50% or greater reduction in anxiety symptoms. The FDA's approval of TMS for "anxious depression" further validates its effectiveness for anxiety.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                Patient-reported improvements include:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Reduced excessive worry and rumination</li>
                <li>Decreased physical anxiety symptoms (heart racing, muscle tension)</li>
                <li>Improved sleep quality</li>
                <li>Better stress management and emotional regulation</li>
                <li>Increased ability to engage in previously avoided situations</li>
                <li>Greater overall sense of calm and well-being</li>
              </ul>
            </section>

            {/* Section 6: What to Expect During a TMS Session */}
            <section ref={(el) => sectionsRef.current['what-to-expect'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What to Expect During a TMS Session</h2>
              
              <p className="mb-6">
                Understanding the TMS treatment process can help ease any concerns you might have:
              </p>

              <div className="space-y-4">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Before Treatment</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Comprehensive psychiatric evaluation</li>
                      <li>• Brain mapping session to identify optimal treatment location</li>
                      <li>• Discussion of treatment goals and expectations</li>
                      <li>• Insurance verification and treatment plan development</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">During Treatment</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• You sit comfortably in a reclining chair</li>
                      <li>• A magnetic coil is positioned on your head</li>
                      <li>• You'll hear clicking sounds and feel tapping sensations on your scalp</li>
                      <li>• You remain awake and alert throughout the 20-40 minute session</li>
                      <li>• You can read, listen to music, or relax during treatment</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">Treatment Schedule</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Initial phase: 5 sessions per week for 4-6 weeks</li>
                      <li>• Most patients complete 20-36 sessions total</li>
                      <li>• Symptom improvement typically begins after 2-4 weeks</li>
                      <li>• Optional maintenance sessions to sustain benefits</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 7: How Effective Is TMS? */}
            <section ref={(el) => sectionsRef.current['effectiveness'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Effective Is TMS Therapy for Anxiety?</h2>
              
              <p className="mb-6">
                Multiple studies have demonstrated TMS effectiveness for anxiety disorders:
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Card className="border-[#572670]/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#572670] mb-2">50-70%</div>
                    <p className="text-sm text-gray-700">Response rate for generalized anxiety disorder</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#572670] mb-2">55%</div>
                    <p className="text-sm text-gray-700">Response rate for anxious depression (FDA-approved)</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20 text-center">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-[#572670] mb-2">60-70%</div>
                    <p className="text-sm text-gray-700">Maintain improvements at 1-year follow-up</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                <CardContent className="p-6">
                  <p className="font-medium text-[#572670] mb-2">Important Note</p>
                  <p className="text-gray-700">
                    These success rates are particularly impressive because TMS is typically used after other treatments haven't provided adequate relief. For treatment-resistant anxiety, these response rates represent a significant breakthrough.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 8: Who Can Benefit? */}
            <section ref={(el) => sectionsRef.current['who-benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Who Can Benefit from TMS Therapy?</h2>
              
              <p className="mb-6">
                TMS therapy may be right for you if:
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You've been diagnosed with an anxiety disorder (GAD, panic disorder, social anxiety, etc.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You haven't found adequate relief from anxiety medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You experience intolerable side effects from anxiety medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You have anxiety co-occurring with depression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You prefer a non-medication treatment approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You don't have contraindications (metal implants in head, history of seizures)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 9: TMS Experience at Karma TMS */}
            <section ref={(el) => sectionsRef.current['karma-experience'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">TMS Therapy Experience at Karma TMS</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/d85b7133-76b3-47d9-8904-c6b4ffc09e40.jpeg"
                alt="Karma TMS clinic entrance"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="mb-6">
                At <Link to="/" className="text-[#572670] hover:underline font-medium">Karma TMS</Link>, we specialize in providing compassionate, evidence-based TMS therapy for anxiety and other mental health conditions. Our approach includes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Expert Care Team</h4>
                    <p className="text-sm text-gray-600">Board-certified psychiatrists and trained TMS technicians dedicated to your recovery</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Advanced Technology</h4>
                    <p className="text-sm text-gray-600">State-of-the-art TMS equipment with precise targeting and comfort features</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Personalized Treatment</h4>
                    <p className="text-sm text-gray-600">Customized protocols based on your specific symptoms and response</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Insurance Support</h4>
                    <p className="text-sm text-gray-600">We work with major insurance providers and help navigate coverage</p>
                  </CardContent>
                </Card>
              </div>

              <p className="mb-4">
                Our <Link to="/team" className="text-[#572670] hover:underline">experienced team</Link> understands the challenges of living with anxiety and is committed to helping you achieve lasting relief through evidence-based TMS therapy.
              </p>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for veterans and treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping patients overcome anxiety, depression, and PTSD through evidence-based, compassionate care."
              image="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6e11b9b5-a5e7-4213-8e90-24371919d086.webp" />


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
                  Ready to Find Anxiety Relief?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If anxiety is impacting your quality of life, TMS therapy could be the solution you've been seeking. Schedule a free consultation to learn if TMS is right for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tms-therapy">Learn More About TMS</Link>
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

export default DoesTMSTherapyWorkForAnxiety;