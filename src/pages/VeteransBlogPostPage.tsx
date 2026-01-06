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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

const VeteransBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'what-is-tms', label: 'What is TMS Therapy?' },
  { id: 'how-tms-helps', label: 'How TMS Helps Veterans' },
  { id: 'va-availability', label: 'VA Hospital Availability' },
  { id: 'success-stories', label: 'Success Stories' },
  { id: 'treatment-process', label: 'Treatment Process' },
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
    question: 'Does the VA cover TMS therapy for veterans?',
    answer: 'Many VA hospitals now offer TMS therapy for eligible veterans with treatment-resistant depression and PTSD. Coverage varies by location and individual eligibility. Contact your local VA medical center or Veterans Affairs TMS program to inquire about availability and coverage in your area.'
  },
  {
    question: 'How long does TMS treatment take for veterans with PTSD?',
    answer: 'A typical TMS treatment course for PTSD and depression lasts 4-6 weeks, with sessions occurring 5 days per week. Each session takes about 20-40 minutes. Many veterans begin noticing improvements within 2-3 weeks of starting treatment.'
  },
  {
    question: 'Is TMS therapy safe for veterans with traumatic brain injury (TBI)?',
    answer: 'TMS therapy is generally considered safe for veterans with mild to moderate TBI. However, each case must be evaluated individually by a qualified physician. TMS has shown promise in treating both TBI-related symptoms and concurrent mental health conditions common in veterans.'
  },
  {
    question: 'What is the success rate of TMS for veterans with depression?',
    answer: 'Clinical studies show that 50-60% of veterans with treatment-resistant depression experience significant symptom improvement with TMS therapy, and about one-third achieve complete remission. Success rates are particularly encouraging for veterans who haven\'t responded to traditional antidepressant medications.'
  },
  {
    question: 'Can TMS help with service-related anxiety disorders?',
    answer: 'Yes, TMS therapy has shown effectiveness in treating various anxiety disorders common among veterans, including generalized anxiety disorder, panic disorder, and anxiety symptoms associated with PTSD. The FDA has approved TMS for anxiety disorders, and research specific to veteran populations continues to show promising results.'
  },
  {
    question: 'Are there any side effects of TMS therapy for veterans?',
    answer: 'TMS therapy is well-tolerated with minimal side effects. The most common side effect is mild scalp discomfort or headache during or after treatment, which typically subsides within a week. Unlike medications, TMS doesn\'t cause weight gain, sexual dysfunction, or cognitive impairment, making it an attractive option for veterans.'
  }];


  const relatedPosts = [
  {
    title: 'Understanding PTSD Treatment Options',
    excerpt: 'Comprehensive guide to PTSD treatment approaches including therapy, medication, and innovative treatments.',
    link: '/ptsd',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp'
  },
  {
    title: 'Depression Treatment That Works',
    excerpt: 'Explore effective depression treatment options including TMS therapy, medication, and therapy approaches.',
    link: '/depression',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp'
  },
  {
    title: 'TMS Therapy: A Complete Guide',
    excerpt: 'Everything you need to know about Transcranial Magnetic Stimulation therapy and how it works.',
    link: '/tms-therapy',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How TMS Therapy Helps Veterans Heal: A New Hope for PTSD, Depression & Anxiety',
    description: 'Comprehensive guide on how TMS therapy helps veterans overcome PTSD, depression, and anxiety. Learn about VA hospital availability, success stories, and treatment options for veterans.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp',
    author: {
      '@type': 'Person',
      name: 'Dr. Apollo Thomas',
      jobTitle: 'Medical Director, Board-Certified Psychiatrist',
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
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/veterans-tms-therapy'
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
        title="How TMS Therapy Helps Veterans Heal: PTSD, Depression & Anxiety Treatment"
        description="Discover how TMS therapy offers veterans new hope for PTSD, depression, and anxiety. Learn about VA hospital availability, success stories, and treatment options for veterans with service-related mental health conditions."
        keywords="tms veterans, tms for veterans, veteran affairs tms, va hospital tms, veterans administration tms, depression treatment for veterans, va anxiety, ptsd treatment veterans, tms therapy veterans"
        canonical="/blog/veterans-tms-therapy"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'TMS Therapy for Veterans', url: '/blog/veterans-tms-therapy' }]
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
                <BreadcrumbPage>TMS Therapy for Veterans</BreadcrumbPage>
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
                January 15, 2024
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
              How TMS Therapy Helps Veterans Heal: A New Hope for PTSD, Depression & Anxiety
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how Transcranial Magnetic Stimulation offers veterans a breakthrough treatment for service-related mental health conditions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/veterans">Learn About Our Veterans Program</Link>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/157c49b6-b322-4aa5-b8d6-8ee41dc03a43.webp"
                alt="Veteran receiving TMS therapy for PTSD treatment"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                For too long, veterans returning from service have faced limited options when dealing with combat-related PTSD, depression, and anxiety. Traditional treatments don't work for everyone, and many veterans experience debilitating side effects from medications. But there's new hope: <strong>TMS therapy for veterans</strong> is emerging as a game-changing treatment that's helping thousands of service members reclaim their lives.
              </p>
            </div>

            {/* Section 1: What is TMS Therapy */}
            <section ref={(el) => sectionsRef.current['what-is-tms'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What is TMS Therapy?</h2>
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Quick Definition</p>
                  <p className="text-gray-700">
                    Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain associated with mood regulation and trauma processing.
                  </p>
                </CardContent>
              </Card>
              
              <p className="mb-4">
                Unlike traditional treatments that rely on medications affecting your entire body, <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> directly targets the brain regions responsible for depression, anxiety, and PTSD symptoms. This precision approach makes it particularly effective for veterans whose mental health conditions stem from specific traumatic experiences.
              </p>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
                alt="TMS therapy equipment and treatment process"
                className="w-full h-64 object-cover rounded-lg mb-6" />


              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Non-Invasive</h4>
                    <p className="text-sm text-gray-600">No surgery, no anesthesia, no systemic side effects</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Drug-Free</h4>
                    <p className="text-sm text-gray-600">No medications, no chemical dependencies</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">FDA-Approved</h4>
                    <p className="text-sm text-gray-600">Cleared for depression, anxiety, and OCD</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Outpatient</h4>
                    <p className="text-sm text-gray-600">Return to daily activities immediately</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2: How TMS Helps Veterans */}
            <section ref={(el) => sectionsRef.current['how-tms-helps'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Helps Veterans with PTSD, Depression & Anxiety</h2>
              
              <p className="mb-6">
                Military service often involves exposure to traumatic events that can fundamentally alter brain function. <strong>TMS for veterans</strong> addresses these changes at the neurological level, helping restore normal brain activity patterns.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">PTSD Treatment for Veterans</h3>
              <p className="mb-4">
                <Link to="/ptsd" className="text-[#572670] hover:underline font-medium">Post-Traumatic Stress Disorder (PTSD)</Link> affects up to 30% of veterans who served in combat zones. Traditional therapy and medication help some, but many veterans continue to struggle with:
              </p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Intrusive memories and flashbacks</li>
                <li>Hypervigilance and exaggerated startle response</li>
                <li>Emotional numbness and detachment</li>
                <li>Sleep disturbances and nightmares</li>
                <li>Difficulty concentrating</li>
              </ul>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Clinical Evidence</p>
                  <p className="text-gray-700">
                    Studies show that TMS therapy can reduce PTSD symptoms by up to 50% in veterans who haven't responded to traditional treatments. The therapy specifically targets the prefrontal cortex, helping regulate the overactive fear response common in PTSD.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Depression Treatment for Veterans</h3>
              <p className="mb-4">
                <Link to="/depression" className="text-[#572670] hover:underline font-medium">Depression</Link> is the most common mental health condition affecting veterans, often co-occurring with PTSD. <strong>Veterans Administration TMS</strong> programs have shown remarkable success in treating treatment-resistant depression.
              </p>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp"
                alt="Depression treatment for veterans using TMS therapy"
                className="w-full h-64 object-cover rounded-lg mb-6" />


              <p className="mb-6">
                TMS therapy helps veterans by:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Activating dormant neural pathways in the prefrontal cortex</li>
                <li>Increasing production of mood-regulating neurotransmitters</li>
                <li>Reducing symptoms without the side effects of antidepressants</li>
                <li>Providing lasting relief that continues after treatment ends</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">VA Anxiety Treatment</h3>
              <p className="mb-4">
                <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">Anxiety disorders</Link> affect nearly 20% of veterans. Whether generalized anxiety, panic disorder, or service-related anxiety, TMS therapy offers relief by calming overactive brain regions responsible for the constant state of alarm many veterans experience.
              </p>
            </section>

            {/* Section 3: VA Hospital Availability */}
            <section ref={(el) => sectionsRef.current['va-availability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">VA Hospital TMS Availability</h2>
              
              <p className="mb-6">
                The Department of Veterans Affairs recognizes the potential of TMS therapy and has been expanding access to this treatment across the country. Many <strong>VA hospital TMS</strong> programs now offer this service to eligible veterans.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">VA TMS Program Eligibility</h3>
                  <p className="mb-4">Veterans may qualify for VA-covered TMS therapy if they:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Have been diagnosed with treatment-resistant depression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Have tried at least 2 different antidepressant medications without adequate response</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Are enrolled in VA healthcare</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Receive approval from their VA psychiatrist or mental health provider</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="bg-gradient-to-r from-[#572670]/10 to-transparent p-6 rounded-lg border-l-4 border-[#572670] mb-6">
                <p className="font-medium mb-2">Important Note:</p>
                <p className="text-gray-700">
                  While VA facilities are expanding TMS services, wait times can be significant. Many veterans choose to pursue treatment at private facilities like <Link to="/veterans" className="text-[#572670] hover:underline font-medium">KarmaTMS</Link>, where we offer specialized programs for veterans with flexible scheduling and often faster access to care.
                </p>
              </div>
            </section>

            {/* Section 4: Success Stories */}
            <section ref={(el) => sectionsRef.current['success-stories'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Success Stories: Veterans Who Found Hope</h2>
              
              <p className="mb-8">
                Real veterans are experiencing life-changing results with TMS therapy. While individual results vary, these stories illustrate the potential of this treatment.
              </p>

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-xl">
                        M
                      </div>
                      <div>
                        <p className="font-bold">Marine Corps Veteran, Age 34</p>
                        <p className="text-sm text-gray-600">Two combat deployments, 6 years of PTSD symptoms</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "After trying multiple medications and years of therapy, I was losing hope. TMS therapy changed everything. Three weeks into treatment, I started sleeping through the night for the first time in years. By week six, my hypervigilance had decreased dramatically, and I could actually enjoy time with my family again."
                    </p>
                    <div className="flex gap-2 text-sm text-[#572670] font-medium">
                      <span>✓ 60% reduction in PTSD symptoms</span>
                      <span>✓ Medication-free after treatment</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-xl">
                        S
                      </div>
                      <div>
                        <p className="font-bold">Army Veteran, Age 41</p>
                        <p className="text-sm text-gray-600">Treatment-resistant depression for 8 years</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "Depression had taken everything from me—my career, my relationships, my will to live. The VA tried different medications, but the side effects were unbearable. TMS gave me my life back without any of the side effects. I'm working again, reconnecting with my kids, and actually feel like myself for the first time since I left the service."
                    </p>
                    <div className="flex gap-2 text-sm text-[#572670] font-medium">
                      <span>✓ Complete remission achieved</span>
                      <span>✓ Returned to full-time work</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-xl">
                        J
                      </div>
                      <div>
                        <p className="font-bold">Navy Veteran, Age 29</p>
                        <p className="text-sm text-gray-600">Anxiety and panic attacks post-service</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3">
                      "My anxiety was so severe I couldn't leave my house. Every sound sent me into panic mode. TMS therapy helped calm the constant state of alarm my brain was in. Now I can drive, shop, and even attend my daughter's school events—things I hadn't done in three years."
                    </p>
                    <div className="flex gap-2 text-sm text-[#572670] font-medium">
                      <span>✓ 70% reduction in anxiety symptoms</span>
                      <span>✓ Zero panic attacks in 6 months</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Treatment Process */}
            <section ref={(el) => sectionsRef.current['treatment-process'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The TMS Treatment Process for Veterans</h2>
              
              <p className="mb-6">
                Understanding what to expect can help veterans feel more comfortable pursuing TMS therapy. Here's a step-by-step overview:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Initial Consultation</h4>
                        <p className="text-gray-700">
                          Meet with a psychiatrist to review your medical history, current symptoms, and treatment goals. We'll assess whether you're a good candidate for TMS and answer all your questions.
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
                          Using advanced technology, we'll map your brain to identify the precise treatment location and determine the optimal magnetic pulse intensity for your unique neurological profile.
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
                          Attend 5 sessions per week for 4-6 weeks. Each session lasts 20-40 minutes. You'll sit comfortably while the TMS device delivers magnetic pulses to your brain. Most veterans describe a tapping sensation on the scalp.
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
                          Regular check-ins with your treatment team to assess symptom improvement and adjust the protocol if needed. Many veterans notice improvements within 2-3 weeks.
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
                        <h4 className="font-bold text-lg mb-2">Completion & Follow-Up</h4>
                        <p className="text-gray-700">
                          After completing the treatment course, we'll develop a maintenance plan. Some veterans benefit from periodic booster sessions, while others maintain their improvements without additional treatment.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">What Makes Treatment Veteran-Friendly?</p>
                  <p className="text-gray-700">
                    At KarmaTMS, we understand the unique needs of veterans. Our staff is trained in trauma-informed care, we offer flexible scheduling to accommodate work and family commitments, and we work with VA benefits and military insurance to make treatment accessible.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Author Box */}
            <Card className="bg-gradient-to-r from-[#572670]/5 to-transparent border-[#572670]/30 mb-12">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <img
                    src="https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg"
                    alt="Dr. Apollo Thomas, Medical Director"
                    className="w-32 h-32 rounded-full object-cover border-4 border-[#572670]/20" />

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#572670] mb-2">About the Author</h3>
                    <p className="text-xl font-semibold mb-2">Dr. Keerthy , MD</p>
                    <p className="text-gray-600 mb-4">
                      Board-Certified Psychiatrist | Medical Director at KarmaTMS
                    </p>
                    <p className="text-gray-700 mb-4">
                      Dr. Thomas is a board-certified psychiatrist specializing in treatment-resistant mood disorders and TMS therapy. With over 15 years of experience treating veterans and military personnel, he has helped hundreds of service members overcome PTSD, depression, and anxiety using innovative neurostimulation techniques. Dr. Thomas is passionate about providing veterans with evidence-based, medication-free treatment options.
                    </p>
                    <Button asChild variant="outline" className="border-[#572670] text-[#572670]">
                      <Link to="/team">View Full Bio</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <section ref={(el) => sectionsRef.current['faqs'] = el} className="mb-12">
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
                  Ready to Start Your Healing Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Join the thousands of veterans who have found relief with TMS therapy. Our team is ready to help you reclaim your life.
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

export default VeteransBlogPostPage;