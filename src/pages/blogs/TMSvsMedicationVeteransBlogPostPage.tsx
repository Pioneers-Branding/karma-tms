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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, XCircle, Shield } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const TMSvsMedicationVeteransBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'introduction', label: 'Why Veterans Are Choosing TMS' },
  { id: 'medication-challenges', label: 'Medication Challenges' },
  { id: 'what-is-tms', label: 'What is TMS?' },
  { id: 'comparison', label: 'TMS vs Medication' },
  { id: 'success-stories', label: 'Veteran Success Stories' },
  { id: 'va-coverage', label: 'VA Coverage for TMS' },
  { id: 'why-prefer-tms', label: 'Why Veterans Prefer TMS' },
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
    question: 'Is TMS therapy effective for veterans with depression?',
    answer: 'Yes, clinical studies show that TMS therapy is highly effective for depression treatment for veterans. Approximately 60-70% of veterans with treatment-resistant depression experience significant symptom improvement, and about one-third achieve complete remission. TMS veterans often report better outcomes than with medication alone, especially when traditional antidepressants haven\'t worked.'
  },
  {
    question: 'Do veterans get free mental health care including TMS?',
    answer: 'The answer to "do veterans get free mental health care" depends on your eligibility and enrollment status. Veterans enrolled in VA healthcare may receive mental health services at no cost, including TMS therapy at select VA facilities. However, availability is limited and wait times can be long. Many veterans choose to use their VA benefits or private insurance at facilities like KarmaTMS for faster access to care.'
  },
  {
    question: 'Do veterans get free therapy outside the VA?',
    answer: 'Do veterans get free therapy? Veterans enrolled in VA healthcare receive free mental health services through the VA system. For care outside the VA, coverage depends on your specific benefits and insurance. The VA Community Care program may cover treatment at private facilities if VA services aren\'t available or accessible. Many veterans use a combination of VA benefits and private insurance to access TMS therapy at specialized clinics.'
  },
  {
    question: 'How does TMS compare to antidepressant medication?',
    answer: 'TMS offers several advantages over medication: no systemic side effects (no weight gain, sexual dysfunction, or cognitive fog), directly targets brain regions involved in depression, effective when medications have failed, no chemical dependency or withdrawal issues, and lasting results that continue after treatment ends. However, TMS requires a time commitment (daily sessions for 4-6 weeks) while medication is taken daily at home.'
  },
  {
    question: 'Can I do TMS therapy while still taking my medications?',
    answer: 'Yes, many veterans continue their psychiatric medications during TMS therapy. In fact, combining TMS with medication can sometimes enhance outcomes. Your treatment team will work with you to determine the best approach. Some veterans are able to reduce or discontinue medications after successful TMS treatment, but this should only be done under medical supervision.'
  },
  {
    question: 'How quickly does TMS work compared to medication changes?',
    answer: 'Many TMS veterans notice improvements within 2-3 weeks of starting treatment, compared to 4-8 weeks for medication changes to take full effect. Because TMS doesn\'t require the trial-and-error approach common with medications, veterans often reach relief faster. Additionally, there\'s no adjustment period or side effects to manage while waiting for TMS to work.'
  }];


  const relatedPosts = [
  {
    title: 'How TMS Therapy Helps Veterans Heal',
    excerpt: 'Comprehensive guide on TMS therapy for veterans with PTSD, depression, and anxiety.',
    link: '/blog/veterans-tms-therapy',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp'
  },
  {
    title: 'VA Disability Benefits for Mental Health',
    excerpt: 'Learn how to get VA disability for depression, anxiety, and PTSD.',
    link: '/blog/va-disability-benefits-depression-anxiety-ptsd',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp'
  },
  {
    title: 'Inside the VA & Veterans\' Mental Health',
    excerpt: 'Understanding VA programs and accessing TMS therapy through VA or private options.',
    link: '/blog/va-veterans-ptsd-tms-treatment',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TMS vs Medication: Why Veterans Are Turning to Magnetic Stimulation for Depression Relief',
    description: 'Comprehensive comparison of TMS therapy and medication for veterans with depression. Learn why tms veterans are choosing magnetic stimulation over traditional antidepressants, including VA coverage information.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_5_jt2nzt.png',
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
    datePublished: '2025-10-06',
    dateModified: '2025-10-06',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/tms-vs-medication-veterans-depression'
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
        title="TMS vs Medication for Veterans: Why Magnetic Stimulation Is Winning the Battle Against Depression"
        description="Discover why tms veterans are choosing magnetic stimulation over traditional medication for depression treatment. Learn about effectiveness, side effects, VA coverage, and whether veterans get free mental health care including TMS therapy."
        keywords="tms veterans, depression treatment for veterans, do veterans get free mental health care, do veterans get free therapy, tms vs medication, veteran mental health treatment, va tms therapy"
        canonical="/blog/tms-vs-medication-veterans-depression"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_5_jt2nzt.png"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'TMS vs Medication for Veterans', url: '/blog/tms-vs-medication-veterans-depression' }]
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
                <BreadcrumbPage>TMS vs Medication for Veterans</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      {/* Hero Section - Mobile Optimized */}
      <section className="relative bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white py-12 md:py-16 lg:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-4 md:mb-6 text-xs md:text-sm">
              <span className="flex items-center gap-1 bg-white/10 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                October 6, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                16 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2 md:px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-3 h-3 md:w-4 md:h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
              TMS vs Medication: Why Veterans Are Turning to Magnetic Stimulation for Depression Relief
            </h1>
            <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-6 md:mb-8 px-4">
              A comprehensive comparison of treatment options helping veterans overcome depression without medication side effects
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100 w-full sm:w-auto">
                <Link to="/contact">Start TMS Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Mobile Optimized */}
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-4 gap-6 md:gap-8">
          {/* Table of Contents - Mobile Optimized */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="lg:sticky lg:top-24">
              <Card className="border-[#572670]/20">
                <CardContent className="p-4 md:p-6">
                  <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 text-[#572670]">Table of Contents</h3>
                  <nav className="space-y-1 md:space-y-2">
                    {tocItems.map((item) =>
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`block w-full text-left px-2 md:px-3 py-2 rounded-md text-xs md:text-sm transition-all ${
                      activeSection === item.id ?
                      'bg-[#572670] text-white font-medium' :
                      'text-gray-700 hover:bg-[#572670]/10'}`
                      }>

                        {item.label}
                      </button>
                    )}
                  </nav>
                  <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t">
                    <Button asChild className="w-full bg-[#572670] hover:bg-[#7B3FA0] text-sm md:text-base">
                      <Link to="/contact">Try TMS Therapy</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          {/* Article Content - Mobile Optimized */}
          <article className="lg:col-span-3 order-1 lg:order-2 prose prose-sm md:prose-lg max-w-none">
            {/* Introduction */}
            <section ref={(el) => sectionsRef.current['introduction'] = el} className="mb-8 md:mb-12">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033665/3_zl830g.png"
                alt="TMS therapy for veterans as alternative to medication"
                className="w-full  lg:h-96 object-cover rounded-lg mb-4 md:mb-6" />


              <p className="text-base md:text-xl text-gray-700 leading-relaxed">
                For decades, antidepressant medication has been the frontline treatment for veterans struggling with depression. But a growing number of <strong>TMS veterans</strong> are discovering a powerful alternative that offers relief without pills, without side effects, and often without the frustration of failed medication trials. <strong>Depression treatment for veterans</strong> is evolving, and Transcranial Magnetic Stimulation (TMS) is leading the revolution.
              </p>
            </section>

            {/* Medication Challenges Section - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['medication-challenges'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">The Challenge with Traditional Antidepressant Medications</h2>

              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Antidepressant medications have helped millions of people, including veterans. But they're far from perfect, especially for those who served in combat zones and face complex, treatment-resistant depression.
              </p>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Common Medication Challenges Veterans Face</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-base md:text-lg">Debilitating Side Effects</h4>
                    </div>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li>• Weight gain (15-30 pounds common)</li>
                      <li>• Sexual dysfunction and decreased libido</li>
                      <li>• Emotional numbness or "flatness"</li>
                      <li>• Cognitive fog and memory issues</li>
                      <li>• Fatigue and sleep disturbances</li>
                      <li>• Nausea and digestive problems</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-base md:text-lg">Trial-and-Error Frustration</h4>
                    </div>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li>• Average of 2-4 medications tried before finding one that works</li>
                      <li>• 4-8 weeks wait time for each medication trial</li>
                      <li>• Months or years of symptom persistence</li>
                      <li>• Difficult withdrawal periods when switching</li>
                      <li>• No guarantee any medication will work</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-base md:text-lg">Limited Effectiveness</h4>
                    </div>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li>• Only 50-60% response rate to first medication</li>
                      <li>• 30-40% of veterans have treatment-resistant depression</li>
                      <li>• Medications may work initially then lose effectiveness</li>
                      <li>• Symptoms often only partially improve</li>
                      <li>• Higher failure rates with combat-related depression</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-red-200 bg-red-50">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-2 md:gap-3 mb-2 md:mb-3">
                      <XCircle className="w-5 h-5 md:w-6 md:h-6 text-red-600 flex-shrink-0 mt-1" />
                      <h4 className="font-bold text-base md:text-lg">Long-Term Concerns</h4>
                    </div>
                    <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                      <li>• Dependence on daily medication</li>
                      <li>• Difficult withdrawal symptoms if stopped</li>
                      <li>• Concerns about long-term health impacts</li>
                      <li>• Interactions with other medications</li>
                      <li>• Cost and insurance coverage issues</li>
                      <li>• Stigma associated with psychiatric drugs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/7ace98a6-9efe-4403-aacf-892346fb07a8.webp"
                alt="Veteran struggling with depression medication side effects"
                className="w-full  lg:h-auto object-cover rounded-lg mb-4 md:mb-6" />


              <Card className="bg-blue-50 border-blue-200 mb-4 md:mb-6">
                <CardContent className="p-4 md:p-6">
                  <p className="font-medium text-blue-900 mb-2 text-sm md:text-base">A Veteran's Perspective</p>
                  <p className="text-gray-700 italic text-xs md:text-sm">
                    "I tried five different antidepressants over three years. The first made me gain 35 pounds. The second killed my sex drive completely. The third gave me brain fog so bad I couldn't work. By the time I found TMS, I was ready to give up. I wish I'd known about it years earlier." — Marine Corps Veteran, Age 38
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* What is TMS Section - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['what-is-tms'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">What is TMS Therapy?</h2>

              <p className="mb-4 md:mb-6 text-sm md:text-base">
                <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">
                  Transcranial Magnetic Stimulation (TMS)
                </Link>{' '}
                represents a fundamentally different approach to treating depression. Instead of chemically altering your entire body's neurotransmitter system, TMS uses targeted magnetic pulses to stimulate specific brain regions involved in mood regulation.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-4 md:mb-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">How TMS Works</h3>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Targeted Brain Stimulation:</strong> Magnetic pulses stimulate the prefrontal cortex, the area responsible for mood and emotions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Neuroplasticity Activation:</strong> Encourages the brain to form new, healthier neural pathways
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Natural Neurotransmitter Production:</strong> Stimulates your brain's own production of serotonin, dopamine, and norepinephrine
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>No Systemic Effects:</strong> Treatment is localized to the brain—no impact on other body systems
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Comparison Section - Mobile Optimized Table */}
            <section ref={(el) => sectionsRef.current['comparison'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">TMS vs Medication: A Direct Comparison</h2>

              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Let's look at how TMS stacks up against traditional antidepressant medication across key factors that matter most to veterans.
              </p>

              <div className="overflow-x-auto mb-6 md:mb-8 -mx-4 px-4 md:mx-0 md:px-0">
                <div className="inline-block min-w-full align-middle">
                  <div className="overflow-hidden shadow-sm ring-1 ring-black ring-opacity-5 rounded-lg">
                    <table className="min-w-full divide-y divide-gray-300">
                      <thead className="bg-[#572670]">
                        <tr>
                          <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Factor</th>
                          <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-white">TMS Therapy</th>
                          <th className="px-2 md:px-3 py-2 md:py-3 text-left text-xs md:text-sm font-semibold text-white">Medication</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Effectiveness</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">60-70% improvement; 33% remission</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">50-60% respond; 30-40% resistant</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Side Effects</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">Minimal scalp discomfort</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Weight gain, sexual issues, numbness</td>
                        </tr>
                        <tr>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Time to Effect</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">2-3 weeks typical</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">4-8 weeks per trial</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Duration</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">4-6 weeks daily sessions</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Daily indefinitely</td>
                        </tr>
                        <tr>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Drug Interactions</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">None</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Can interact with many meds</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Cognitive Impact</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">Often improves function</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Can cause brain fog</td>
                        </tr>
                        <tr>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Physical Effects</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">No weight/sexual issues</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Weight gain, dysfunction common</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm font-medium text-gray-900">Withdrawal</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700 bg-green-50">None</td>
                          <td className="px-2 md:px-3 py-2 md:py-3 text-xs md:text-sm text-gray-700">Often difficult</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Success Stories Section - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['success-stories'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">Veteran Success Stories: From Medication Struggles to TMS Breakthroughs</h2>

              <p className="mb-6 md:mb-8 text-sm md:text-base">
                Real stories from <strong>TMS veterans</strong> who found relief after years of medication failures:
              </p>

              <div className="space-y-4 md:space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                        R
                      </div>
                      <div>
                        <p className="font-bold text-sm md:text-base">Army Veteran, Age 45</p>
                        <p className="text-xs md:text-sm text-gray-600">Combat Engineer, 3 deployments to Afghanistan</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3 text-xs md:text-sm">
                      "I spent seven years trying different antidepressants. Prozac, Zoloft, Effexor, Wellbutrin, Cymbalta—you name it. Each one either didn't work or gave me side effects I couldn't tolerate. The weight gain destroyed my self-esteem. The sexual dysfunction ruined my marriage. When my psychiatrist suggested TMS, I was skeptical. But after three weeks, I started feeling like myself again. No pills, no side effects, just...better. Six months later, I'm still medication-free and managing my depression better than I ever did on drugs."
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-[#572670] font-medium">
                      <span>✓ Medication-free after 7 years</span>
                      <span>✓ Lost 40 pounds</span>
                      <span>✓ Marriage improved</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                        T
                      </div>
                      <div>
                        <p className="font-bold text-sm md:text-base">Navy Veteran, Age 36</p>
                        <p className="text-xs md:text-sm text-gray-600">Hospital Corpsman, served with Marines in Iraq</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3 text-xs md:text-sm">
                      "The medications made me feel like a zombie. I couldn't feel sad, but I couldn't feel happy either. I couldn't feel anything. I was going through the motions of life but not actually living. TMS gave me back my emotions without the depression. I can laugh with my kids again. I can cry at movies. I can feel angry when it's appropriate and handle it. I'm not numb anymore, and I'm not depressed. That's what medication could never give me."
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-[#572670] font-medium">
                      <span>✓ Emotional range restored</span>
                      <span>✓ Better parent and partner</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <div className="flex items-start gap-3 md:gap-4 mb-3 md:mb-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold text-lg md:text-xl flex-shrink-0">
                        M
                      </div>
                      <div>
                        <p className="font-bold text-sm md:text-base">Marine Corps Veteran, Age 31</p>
                        <p className="text-xs md:text-sm text-gray-600">Infantry, 2 combat deployments</p>
                      </div>
                    </div>
                    <p className="text-gray-700 italic mb-3 text-xs md:text-sm">
                      "I was on a cocktail of three different psychiatric meds—an antidepressant, an anti-anxiety medication, and something to help me sleep. I felt like a walking pharmacy. The side effects were brutal: constant fatigue, brain fog so bad I couldn't remember conversations, and I'd gained 50 pounds. TMS let me get off all of it. It took time, and I did it gradually under my doctor's supervision, but now I'm medication-free. My mind is clear, I've lost the weight, and I'm finally living the life I fought for overseas."
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs md:text-sm text-[#572670] font-medium">
                      <span>✓ Off 3 medications</span>
                      <span>✓ Lost 50 pounds</span>
                      <span>✓ Cognitive clarity</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* VA Coverage Section - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['va-coverage'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">Do Veterans Get Free Mental Health Care? Understanding VA Coverage for TMS</h2>

              <p className="mb-4 md:mb-6 text-sm md:text-base">
                One of the most common questions we hear is: <strong>Do veterans get free mental health care?</strong> and <strong>Do veterans get free therapy?</strong> The answer depends on your VA eligibility and enrollment status.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-4 md:mb-6">
                <CardContent className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-3 md:mb-4">VA Mental Health Care Coverage</h3>
                  <div className="space-y-3 md:space-y-4">
                    <div>
                      <p className="font-medium mb-2 text-sm md:text-base">For Veterans Enrolled in VA Healthcare:</p>
                      <ul className="space-y-2 text-gray-700 text-xs md:text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Most mental health services are provided at no cost</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>TMS therapy is available at select VA medical centers</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Individual and group therapy covered</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-green-600 mt-1 flex-shrink-0" />
                          <span>Medication management included</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium mb-2 text-[#572670] text-sm md:text-base">Important Considerations:</p>
                      <ul className="space-y-1 md:space-y-2 text-gray-700 text-xs md:text-sm">
                        <li>• Wait times for VA TMS can be several months</li>
                        <li>• Limited availability at many VA facilities</li>
                        <li>• Eligibility requirements must be met</li>
                        <li>• Geographic limitations—not all areas have access</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Private TMS Options for Veterans</h3>

              <Card className="border-[#572670]/20 mb-4 md:mb-6">
                <CardContent className="p-4 md:p-6">
                  <p className="mb-3 md:mb-4 text-xs md:text-sm">
                    Many veterans choose to pursue TMS therapy at private facilities like{' '}
                    <Link to="/veterans" className="text-[#572670] hover:underline font-medium">
                      KarmaTMS
                    </Link>{' '}
                    for several reasons:
                  </p>
                  <ul className="space-y-2 md:space-y-3">
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Immediate Access:</strong> Appointments available within days, not months
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Insurance Coverage:</strong> Most private insurance plans cover TMS, including TRICARE
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>VA Community Care:</strong> Some veterans qualify for VA-funded care at private facilities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Flexible Scheduling:</strong> Appointments that work around your job and family
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Cutting-Edge Equipment:</strong> Latest TMS technology and protocols
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Shield className="w-4 h-4 md:w-5 md:h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span className="text-xs md:text-sm">
                        <strong>Veteran-Focused Care:</strong> Staff trained in trauma-informed treatment
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Why Veterans Prefer TMS - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['why-prefer-tms'] = el} className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">Why More Veterans Are Choosing TMS Over Medication</h2>

              <p className="mb-4 md:mb-6 text-sm md:text-base">
                Beyond the clinical advantages, there are practical and emotional reasons why <strong>TMS veterans</strong> prefer magnetic stimulation over traditional antidepressant medication:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">Reclaim Your Identity</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Many veterans report that medications made them feel like a different person—emotionally numb, cognitively dulled, physically changed. TMS allows you to feel like yourself again without depression holding you back.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">No Daily Medication Routine</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      After completing TMS treatment, many veterans maintain their improvement without any daily intervention. No more pill bottles, pharmacy visits, or worrying about running out of medication.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">Better Physical Health</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      Without medication-induced weight gain, sexual dysfunction, or metabolic changes, veterans can focus on physical fitness and overall wellness—crucial for many who value the discipline and strength developed during service.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">Reduced Stigma</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      While attitudes are changing, some veterans still struggle with the perception of taking "psych meds." TMS offers a high-tech, brain-based treatment that feels more aligned with veteran values of strength and resilience.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">Works When Medication Fails</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      For the 30-40% of veterans with treatment-resistant depression, TMS offers hope when medications haven't worked. It uses a completely different mechanism, so past medication failures don't predict TMS outcomes.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-4 md:p-6">
                    <h4 className="font-bold text-base md:text-lg mb-2 md:mb-3 text-[#572670]">Faster Results</h4>
                    <p className="text-gray-700 text-xs md:text-sm">
                      TMS veterans often notice improvements within 2-3 weeks, compared to the 4-8 weeks (or longer with multiple trials) required for medications. Time matters when you're suffering.
                    </p>
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


            {/* FAQ Section - Mobile Optimized */}
            <section ref={(el) => sectionsRef.current['faqs'] = el} className="mb-8 md:mb-12 mt-8 md:mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">Frequently Asked Questions</h2>

              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) =>
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-200 rounded-lg px-3 md:px-4 data-[state=open]:border-[#572670]">

                    <AccordionTrigger className="text-left text-sm md:text-base font-semibold hover:text-[#572670] hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700 text-xs md:text-sm pt-2 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </section>

            {/* CTA Section - Mobile Optimized */}
            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-8 md:mb-12">
              <CardContent className="p-6 md:p-8 text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">Ready to Try Depression Treatment Without Medication?</h3>
                <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 text-white/90">
                  Join the growing number of TMS veterans who've found relief without pills. Schedule a free consultation to learn if TMS is right for you.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100 w-full sm:w-auto text-sm md:text-base">
                    <Link to="/contact">Schedule Free TMS Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts - Mobile Optimized */}
            <section className="mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-[#572670] mb-4 md:mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {relatedPosts.map((post, index) =>
                <Card key={index} className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow">
                    <img src={post.image} alt={post.title} className="w-full h-40 md:h-48 object-cover" />

                    <CardContent className="p-4 md:p-6">
                      <h3 className="font-bold text-base md:text-lg mb-2 hover:text-[#572670] transition-colors line-clamp-2">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-2">{post.excerpt}</p>
                      <Button asChild variant="ghost" className="text-[#572670] p-0 h-auto hover:bg-transparent text-sm md:text-base">
                        <Link to={post.link} className="inline-flex items-center gap-2">
                          Read More <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
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

export default TMSvsMedicationVeteransBlogPostPage;