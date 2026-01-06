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
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const TMSAnxietyVeteransBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'understanding', label: 'Understanding Anxiety in Veterans' },
    { id: 'standalone', label: 'Anxiety as Standalone Disorder' },
    { id: 'va-support', label: 'VA Anxiety Support' },
    { id: 'how-tms-works', label: 'How TMS Works for Anxiety' },
    { id: 'benefits', label: 'Benefits of TMS' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
  ];

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
      question: 'How effective is TMS for anxiety in veterans?',
      answer: 'Studies show that 60-70% of patients experience significant anxiety reduction with TMS therapy. Many veterans achieve remission of anxiety symptoms. TMS is particularly effective for treatment-resistant anxiety that hasn\'t responded to traditional medications.'
    },
    {
      question: 'Does the VA cover TMS for anxiety disorders?',
      answer: 'Some VA facilities offer TMS therapy for eligible veterans with anxiety disorders. Coverage varies by location. Many veterans choose private providers like KarmaTMS for faster access and more flexible scheduling.'
    },
    {
      question: 'How long does TMS treatment take for anxiety?',
      answer: 'A typical TMS treatment course lasts 4-6 weeks with sessions 5 days per week. Each session takes 20-40 minutes. Most veterans begin noticing improvements within 3-4 weeks of starting treatment.'
    },
    {
      question: 'Can TMS help with panic attacks?',
      answer: 'Yes! TMS has shown effectiveness in reducing panic attacks by regulating the brain\'s fear response centers. Many veterans experience significant reduction in both frequency and intensity of panic attacks with TMS therapy.'
    },
    {
      question: 'What are the side effects of TMS for anxiety?',
      answer: 'TMS is well-tolerated with minimal side effects. The most common is mild scalp discomfort during treatment. Unlike anxiety medications, TMS doesn\'t cause weight gain, sexual dysfunction, or cognitive impairment.'
    },
    {
      question: 'Can I continue my anxiety medication during TMS?',
      answer: 'Yes, TMS can be combined with existing medications. Many veterans are able to reduce or eliminate medications after successful TMS treatment, but this should always be done under medical supervision.'
    }
  ];

  const relatedPosts = [
    {
      title: 'How TMS Therapy Helps Veterans Heal: A New Hope for PTSD',
      excerpt: 'Comprehensive guide on TMS therapy for veterans with PTSD, depression, and anxiety.',
      link: '/blog/veterans-tms-therapy',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp'
    },
    {
      title: 'Understanding PTSD in Veterans',
      excerpt: 'Complete guide to PTSD signs, symptoms, and treatment paths for veterans.',
      link: '/blog/understanding-ptsd-veterans',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp'
    },
    {
      title: 'VA & Veterans Mental Health Programs',
      excerpt: 'Learn about VA mental health programs and how to access TMS therapy.',
      link: '/blog/va-veterans-ptsd-tms-treatment',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TMS for Anxiety in Veterans: A Promising Path Beyond Medication',
    description: 'Discover how TMS therapy helps veterans with anxiety beyond traditional medication. Learn about VA anxiety support and brain regulation through TMS.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_6_z1bbda.png',
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
    datePublished: '2025-10-27',
    dateModified: '2025-10-27',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/tms-anxiety-veterans'
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
        title="TMS for Anxiety in Veterans: Beyond Medication Treatment | KarmaTMS"
        description="Learn how TMS therapy helps veterans with anxiety disorders. Discover how brain stimulation regulates anxiety centers beyond traditional medication. VA anxiety support available."
        keywords="va anxiety, veteran anxiety, veterans with anxiety, anxiety for veterans, TMS for anxiety, veteran anxiety treatment, anxiety disorder veterans"
        canonical="/blog/tms-anxiety-veterans"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_6_z1bbda.png"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'TMS for Anxiety in Veterans', url: '/blog/tms-anxiety-veterans' }
        ]}
      />

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
                <BreadcrumbPage>TMS for Anxiety in Veterans</BreadcrumbPage>
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
                October 27, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TMS for Anxiety in Veterans: A Promising Path Beyond Medication
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how TMS therapy offers veterans breakthrough treatment for anxiety without the side effects of medication
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/veterans">Learn About Our Veterans Program</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/contact">Schedule Consultation</Link>
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
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                          activeSection === item.id
                            ? 'bg-[#572670] text-white font-medium'
                            : 'text-gray-700 hover:bg-[#572670]/10'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png"
                alt="TMS for Anxiety in Veterans"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              <p className="text-xl text-gray-700 leading-relaxed">
                Anxiety disorders affect millions of veterans, often as a standalone condition separate from PTSD. While many associate veteran mental health primarily with combat-related PTSD, <strong>veteran anxiety</strong> can manifest independently and requires specialized attention and treatment. For veterans with anxiety who haven't found relief through traditional treatments, Transcranial Magnetic Stimulation (TMS) offers a promising alternative path—one that works by directly regulating the brain's anxiety centers without the side effects of medication.
              </p>
            </div>

            {/* Section 1: Understanding Anxiety */}
            <section ref={(el) => sectionsRef.current['understanding'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Anxiety in Veterans</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Recognizing Anxiety in Veterans</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold mb-3 text-[#572670]">Physical Symptoms</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Rapid heartbeat or palpitations</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Sweating and trembling</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Shortness of breath</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Muscle tension and headaches</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3 text-[#572670]">Psychological Symptoms</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Excessive worry or fear</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Difficulty concentrating</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Restlessness or feeling on edge</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Irritability</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/66e6e1ae-8cc3-4469-bfaf-b1f3f3d07006.webp"
                alt="Understanding anxiety in veterans"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </section>

            {/* Section 2: Standalone Disorder */}
            <section ref={(el) => sectionsRef.current['standalone'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Anxiety as a Standalone Disorder in Veterans</h2>
              
              <p className="mb-6">
                While often discussed alongside PTSD, anxiety disorders can occur independently in veterans. The stress of military service, transitions to civilian life, and ongoing life challenges can trigger various anxiety conditions.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Generalized Anxiety Disorder (GAD)</h4>
                    <p className="text-sm text-gray-600">Persistent, excessive worry about various aspects of life including health, finances, work, and family</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Panic Disorder</h4>
                    <p className="text-sm text-gray-600">Recurrent, unexpected panic attacks with intense physical symptoms and fear of future attacks</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Social Anxiety Disorder</h4>
                    <p className="text-sm text-gray-600">Intense fear of social situations, particularly common during transition from military to civilian life</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Specific Phobias</h4>
                    <p className="text-sm text-gray-600">Intense fear of specific objects or situations, which may develop or worsen during service</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: VA Support */}
            <section ref={(el) => sectionsRef.current['va-support'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">VA Anxiety Support and Resources</h2>
              
              <Card className="bg-green-50 border-green-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">VA Benefits for Anxiety</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Disability Compensation:</strong> Veterans can receive disability ratings for anxiety disorders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Mental Health Services:</strong> Access to psychiatrists, psychologists, and therapists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Evidence-Based Treatments:</strong> Cognitive Behavioral Therapy (CBT) and other proven interventions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Crisis Support:</strong> 24/7 Veterans Crisis Line (988, then press 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>TMS Therapy:</strong> Growing availability at select VA facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: How TMS Works */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Works for Anxiety</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
                alt="TMS therapy for anxiety"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="mb-6">
                Transcranial Magnetic Stimulation (TMS) is a non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain involved in mood regulation and anxiety processing.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">The Science Behind TMS for Anxiety</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#572670] pl-6">
                      <h4 className="font-bold mb-2">Targeting Anxiety Centers</h4>
                      <p className="text-gray-700">TMS targets the dorsolateral prefrontal cortex (DLPFC) and other brain regions involved in emotional regulation, fear response modulation, and stress response management</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-bold mb-2">Neuroplasticity and Healing</h4>
                      <p className="text-gray-700">By repeatedly stimulating these areas, TMS promotes neuroplasticity—the brain's ability to form new neural connections and pathways</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-bold mb-2">The Treatment Process</h4>
                      <ul className="list-disc pl-6 text-gray-700 space-y-1">
                        <li>Sessions last 20-40 minutes</li>
                        <li>Typically 5 days per week for 4-6 weeks</li>
                        <li>No anesthesia or sedation required</li>
                        <li>Return to normal activities immediately after</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Benefits */}
            <section ref={(el) => sectionsRef.current['benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Benefits of TMS for Veterans with Anxiety</h2>
              
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Treatment Outcomes</h3>
                  <div className="grid md:grid-cols-3 gap-6 mb-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#572670] mb-2">60-70%</div>
                      <p className="text-gray-700">of patients show significant anxiety reduction</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">50%+</div>
                      <p className="text-gray-700">achieve remission of anxiety symptoms</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-green-600 mb-2">3-4 weeks</div>
                      <p className="text-gray-700">typical timeframe to notice improvements</p>
                    </div>
                  </div>
                  <h4 className="font-bold mb-3">What Veterans Report:</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Reduced frequency and intensity of anxiety attacks</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Improved ability to manage stressful situations</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Better sleep quality</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Enhanced concentration and focus</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Greater engagement in daily activities</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Reduced reliance on anti-anxiety medications</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for veterans and treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping veterans overcome PTSD, depression, and anxiety through evidence-based, compassionate care."
              image="https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg"
            />

            {/* FAQ Section */}
            <section ref={(el) => sectionsRef.current['faqs'] = el} className="mb-12 mt-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Frequently Asked Questions</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-gray-200 rounded-lg px-4 data-[state=open]:border-[#572670]"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:text-[#572670] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 pt-2 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Break Free from Anxiety?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Discover how TMS can help you overcome anxiety without the side effects of medication. Specialized care for veterans at KarmaTMS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/veterans">Learn About Veterans Program</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <Card key={index} className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
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
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>

      <FooterSection />
    </>
  );
};

export default TMSAnxietyVeteransBlogPostPage;
