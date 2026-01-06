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

const TMSTherapyForTreatmentResistantDepression = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-trd', label: 'Understanding Treatment-Resistant Depression' },
  { id: 'how-tms-works', label: 'How TMS Works' },
  { id: 'benefits', label: 'Benefits of TMS' },
  { id: 'success-rates', label: 'Success Rates' },
  { id: 'treatment-process', label: 'Treatment Process' },
  { id: 'good-candidate', label: 'Who is a Good Candidate' },
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
    question: 'What is treatment-resistant depression?',
    answer: 'Treatment-resistant depression (TRD) is diagnosed when symptoms persist despite trying at least two different antidepressant medications at adequate doses and durations. It affects approximately 30-40% of people with major depressive disorder and requires alternative treatment approaches like TMS therapy.'
  },
  {
    question: 'How effective is TMS therapy for treatment-resistant depression?',
    answer: 'Clinical studies show that 50-60% of patients with treatment-resistant depression experience significant symptom improvement with TMS therapy, and about 30-40% achieve complete remission. These results are particularly impressive given that these patients haven\'t responded to traditional treatments.'
  },
  {
    question: 'Does TMS therapy hurt?',
    answer: 'Most patients describe TMS as a tapping sensation on the scalp. Some people experience mild discomfort or headache during the first few sessions, but this typically subsides quickly. TMS is non-invasive and doesn\'t require anesthesia or sedation.'
  },
  {
    question: 'How long do TMS results last?',
    answer: 'Many patients maintain improvements for a year or longer after completing TMS treatment. Studies show that approximately 70% of patients maintain their improvement at one-year follow-up. Some patients may benefit from occasional maintenance sessions to sustain results.'
  },
  {
    question: 'Can I continue my medications during TMS treatment?',
    answer: 'Yes, most patients continue their current medications during TMS therapy. Your psychiatrist will review your medication regimen and make any necessary adjustments. TMS can be used alongside medications or as a standalone treatment depending on your individual needs.'
  },
  {
    question: 'Is TMS therapy covered by insurance?',
    answer: 'Most major insurance providers cover TMS therapy for treatment-resistant depression when specific criteria are met. Coverage typically requires documentation of prior antidepressant trials. Our team can help verify your insurance benefits and navigate the approval process.'
  }];


  const relatedPosts = [
  {
    title: 'Managing Anxiety Triggers in Everyday Life',
    excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively.',
    link: '/blog/managing-anxiety-triggers',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png'
  },
  {
    title: 'The Role of Family Dynamics in Mental Health Recovery',
    excerpt: 'Discover how family relationships influence mental health outcomes and recovery.',
    link: '/blog/family-dynamics-mental-health',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/21_tyzclt.png'
  },
  {
    title: 'Mental Health First Aid: How to Help Someone in Crisis',
    excerpt: 'Essential skills to recognize crisis signs and provide immediate support.',
    link: '/blog/mental-health-first-aid',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/19_luad51.png'
  }];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TMS Therapy for Treatment Resistant Depression',
    description: 'Comprehensive guide to TMS therapy as an effective treatment for treatment-resistant depression, including success rates, benefits, and what to expect.',
    image: 'https://images.unsplash.com/photo-1704650334658-11e83f293ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBbiUyMGltYWdlJTIwZGVwaWN0aW5nJTIwVE1TJTIwdGhlcmFweSUyMGZvciUyMHRyZWF0bWVudC1yZXNpc3RhbnQlMjBkZXByZXNzaW9uJTJDJTIwc2hvd2Nhc2luZyUyMGElMjBzZXJlbmUlMjBhbmQlMjBwcm9mZXNzaW9uYWwlMjBzZXR0aW5nLnxlbnwwfHx8fDE3NjQxMzc5ODh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800',
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
    datePublished: '2024-05-28',
    dateModified: '2024-05-28',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/TMSTherapyForTreatmentResistantDepression'
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
        title="TMS Therapy for Treatment Resistant Depression - Complete Guide"
        description="Comprehensive guide to TMS therapy as an effective treatment for treatment-resistant depression, including success rates, benefits, and what to expect."
        keywords="TMS therapy, treatment resistant depression, TRD, depression treatment, TMS success rates, non-invasive depression treatment"
        canonical="/blogs/TMSTherapyForTreatmentResistantDepression"
        ogImage="https://images.unsplash.com/photo-1704650334658-11e83f293ff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBbiUyMGltYWdlJTIwZGVwaWN0aW5nJTIwVE1TJTIwdGhlcmFweSUyMGZvciUyMHRyZWF0bWVudC1yZXNpc3RhbnQlMjBkZXByZXNzaW9uJTJDJTIwc2hvd2Nhc2luZyUyMGElMjBzZXJlbmUlMjBhbmQlMjBwcm9mZXNzaW9uYWwlMjBzZXR0aW5nLnxlbnwwfHx8fDE3NjQxMzc5ODh8MA&ixlib=rb-4.1.0&q=80&w=200$w=800"
        ogType="article" />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'TMS for Treatment Resistant Depression', url: '/blogs/TMSTherapyForTreatmentResistantDepression' }]
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
                <BreadcrumbPage>TMS for Treatment Resistant Depression</BreadcrumbPage>
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
                May 28, 2024
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
              TMS Therapy for Treatment Resistant Depression
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how TMS offers new hope for those who haven't found relief with traditional depression treatments
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/tms-therapy">Learn More About TMS</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138579/32_og3ayd.png"
                alt="TMS therapy for treatment resistant depression"
                className="w-full object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                For millions of people living with depression, traditional treatments like medication and therapy provide significant relief. However, approximately 30-40% of individuals with major depressive disorder experience treatment-resistant depression (TRD), meaning they haven't found adequate relief after trying multiple antidepressants. For these individuals, Transcranial Magnetic Stimulation (TMS) therapy offers a scientifically proven, FDA-approved alternative that's transforming lives.
              </p>
            </div>

            {/* Section 1: Understanding TRD */}
            <section ref={(el) => sectionsRef.current['understanding-trd'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Treatment-Resistant Depression</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">What is Treatment-Resistant Depression?</p>
                  <p className="text-gray-700">
                    Treatment-resistant depression is diagnosed when symptoms persist despite trying at least two different antidepressant medications at adequate doses and durations.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                Living with <Link to="/depression" className="text-[#572670] hover:underline font-medium">treatment-resistant depression</Link> can feel hopeless, but it's important to understand that this is a medical condition, not a personal failure. Several factors can contribute to TRD:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Genetic factors affecting medication metabolism</li>
                <li>Co-occurring mental health conditions</li>
                <li>Underlying medical conditions</li>
                <li>Unique brain chemistry and structure</li>
                <li>Previous trauma or chronic stress</li>
              </ul>
            </section>

            {/* Section 2: How TMS Works */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Therapy Works for Treatment-Resistant Depression</h2>
              
            

              <p className="mb-4">
                <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> uses magnetic pulses to stimulate specific areas of the brain that are underactive in people with depression. Unlike medications that affect your entire body, TMS directly targets the brain regions responsible for mood regulation.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">The Science Behind TMS</h3>
                  <p className="text-gray-700 mb-4">
                    Research shows that people with depression often have reduced activity in the left dorsolateral prefrontal cortex (DLPFC), a brain region crucial for mood regulation. TMS therapy delivers focused magnetic pulses to this area, stimulating neural activity and promoting the release of neurotransmitters like serotonin and dopamine.
                  </p>
                  <p className="text-gray-700">
                    Over the course of treatment, these repeated stimulations create lasting changes in brain circuitry, a process called neuroplasticity, which helps restore normal mood function.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Benefits */}
            <section ref={(el) => sectionsRef.current['benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Benefits of TMS for Treatment-Resistant Depression</h2>
              
              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Non-Invasive</h4>
                    <p className="text-sm text-gray-600">No surgery, anesthesia, or hospitalization required</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Minimal Side Effects</h4>
                    <p className="text-sm text-gray-600">No weight gain, sexual dysfunction, or cognitive impairment</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">FDA-Approved</h4>
                    <p className="text-sm text-gray-600">Cleared for treatment-resistant depression since 2008</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Outpatient Treatment</h4>
                    <p className="text-sm text-gray-600">Return to normal activities immediately after sessions</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">High Success Rates</h4>
                    <p className="text-sm text-gray-600">50-60% of patients achieve significant symptom improvement</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Lasting Results</h4>
                    <p className="text-sm text-gray-600">Benefits often continue long after treatment completion</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Success Rates */}
            <section ref={(el) => sectionsRef.current['success-rates'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">TMS Success Rates for Treatment-Resistant Depression</h2>
              
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Clinical Evidence</p>
                  <p className="text-gray-700">
                    Large-scale clinical studies demonstrate impressive success rates for TMS therapy in treating treatment-resistant depression:
                  </p>
                </CardContent>
              </Card>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>50-60%</strong> of patients experience significant symptom improvement</li>
                <li><strong>30-40%</strong> achieve complete remission</li>
                <li><strong>70%</strong> maintain improvements at one-year follow-up</li>
                <li><strong>Minimal side effects</strong> compared to medications</li>
              </ul>
            </section>

            {/* Section 5: Treatment Process */}
            <section ref={(el) => sectionsRef.current['treatment-process'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What to Expect During TMS Treatment</h2>
              
              <div className="space-y-4">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Initial Consultation</h4>
                        <p className="text-gray-700">
                          Meet with a psychiatrist to review your treatment history, symptoms, and determine if TMS is right for you.
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
                        <h4 className="font-bold text-lg mb-2">Brain Mapping</h4>
                        <p className="text-gray-700">
                          Precise mapping to identify the optimal treatment location and determine the right magnetic pulse intensity for your brain.
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
                        <h4 className="font-bold text-lg mb-2">Treatment Sessions</h4>
                        <p className="text-gray-700">
                          Attend sessions 5 days per week for 4-6 weeks. Each session lasts 20-40 minutes, and you can read, listen to music, or relax during treatment.
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
                        <h4 className="font-bold text-lg mb-2">Progress Monitoring</h4>
                        <p className="text-gray-700">
                          Regular assessments to track symptom improvement. Many patients notice changes within 2-3 weeks.
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
                        <h4 className="font-bold text-lg mb-2">Follow-Up Care</h4>
                        <p className="text-gray-700">
                          Continued support and maintenance planning to ensure lasting results. Some patients benefit from occasional maintenance sessions.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6: Good Candidate */}
            <section ref={(el) => sectionsRef.current['good-candidate'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Who is a Good Candidate for TMS?</h2>
              
              <p className="mb-6">
                TMS therapy may be right for you if:
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You've been diagnosed with major depressive disorder</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You haven't found adequate relief from at least two antidepressant medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You experience intolerable side effects from medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You're looking for a non-medication option</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>You don't have contraindications like metal implants in your head</span>
                    </li>
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
                  Don't Give Up Hope
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  If traditional depression treatments haven't worked for you, TMS therapy could be the breakthrough you've been looking for. Schedule a free consultation to learn more.
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

export default TMSTherapyForTreatmentResistantDepression;