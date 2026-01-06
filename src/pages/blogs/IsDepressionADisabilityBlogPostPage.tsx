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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Shield } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const IsDepressionADisabilityBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-disability', label: 'Understanding Depression as a Disability' },
  { id: 'ada-coverage', label: 'ADA and Legal Protections' },
  { id: 'ssa-disability', label: 'Social Security Disability Benefits' },
  { id: 'workplace-rights', label: 'Workplace Rights and Accommodations' },
  { id: 'treatment-options', label: 'Treatment Options' },
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
    question: 'Does depression qualify as a disability under the ADA?',
    answer: 'Yes, depression can qualify as a disability under the Americans with Disabilities Act (ADA) if it substantially limits one or more major life activities such as working, concentrating, sleeping, or interacting with others. The severity and duration of symptoms determine whether depression meets the ADA definition of disability.'
  },
  {
    question: 'Can I get Social Security Disability for depression?',
    answer: 'Yes, you can receive Social Security Disability Insurance (SSDI) or Supplemental Security Income (SSI) for severe depression. You must demonstrate that your depression prevents you from performing substantial gainful activity and is expected to last at least 12 months. Medical documentation, treatment history, and functional limitations are critical for approval.'
  },
  {
    question: 'What workplace accommodations can I request for depression?',
    answer: 'Common accommodations include flexible work schedules, periodic rest breaks, quiet workspace, modified job duties, telecommuting options, and time off for medical appointments. Under the ADA, employers must provide reasonable accommodations unless they cause undue hardship to the business.'
  },
  {
    question: 'Do I have to disclose my depression to my employer?',
    answer: 'No, you are not required to disclose your depression diagnosis. However, if you need workplace accommodations or protections under the ADA, you will need to disclose that you have a medical condition requiring accommodation. You don\'t need to provide specific diagnosis details—just enough information for your employer to understand your needs.'
  },
  {
    question: 'Can my employer fire me because of depression?',
    answer: 'No, if your depression qualifies as a disability under the ADA, your employer cannot legally terminate you solely because of your condition. You are protected from discrimination based on disability. However, you must still be able to perform essential job functions with or without reasonable accommodations.'
  },
  {
    question: 'How does TMS therapy help people with depression return to work?',
    answer: 'TMS therapy can significantly improve depression symptoms, helping many people regain the ability to work effectively. Unlike medications, TMS has minimal side effects and doesn\'t cause cognitive impairment. Many patients report improved concentration, energy, and productivity after TMS treatment, enabling them to return to work or maintain employment.'
  }];


  const relatedPosts = [
  {
    title: 'How Successful is TMS Treatment?',
    excerpt: 'Discover TMS therapy success rates and real-world outcomes for depression treatment.',
    link: '/blog/how-successful-tms-treatment',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/15_ym6n6b.png'
  },
  {
    title: 'Understanding Depression and Erectile Dysfunction',
    excerpt: 'Learn about the connection between depression and sexual health, and treatment options.',
    link: '/blog/depression-erectile-dysfunction',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138577/24_guuewg.png'
  },
  {
    title: 'TMS vs Medication for Depression',
    excerpt: 'Compare TMS therapy and medication for depression treatment effectiveness.',
    link: '/blog/tms-vs-medication-veterans-depression',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033665/3_zl830g.png'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Is Depression a Disability? Understanding Rights, Treatment, and Support Options',
    description: 'Learn if depression and anxiety qualify as disabilities under ADA & SSA laws. Discover treatments like TMS that restore wellness and independence.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015452/37_kghe3l.png',
    author: {
      '@type': 'Person',
      name: 'KarmaTMS Medical Team'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2025-12-01',
    dateModified: '2025-12-01',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/is-depression-a-disability'
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
        title="Is Depression a Disability? | KarmaTMS Palm Springs"
        description="Learn if depression and anxiety qualify as disabilities under ADA & SSA laws. Discover treatments like TMS that restore wellness and independence."
        keywords="depression disability, ADA depression, social security disability depression, workplace rights depression, depression accommodations, TMS therapy Palm Springs"
        canonical="/blog/is-depression-a-disability"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Is Depression a Disability?', url: '/blog/is-depression-a-disability' }]
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
                <BreadcrumbPage>Is Depression a Disability?</BreadcrumbPage>
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
                December 1, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                14 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                KarmaTMS Medical Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Is Depression a Disability? Understanding Rights, Treatment, and Support Options
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Comprehensive guide to disability rights, legal protections, and effective treatments for depression
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015452/37_kghe3l.png"
                alt="Depression disability rights and treatment"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                If you're living with <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, you may wonder: "Is depression a disability?" The answer is yes—depression can qualify as a disability under federal laws like the Americans with Disabilities Act (ADA) and Social Security Administration (SSA) guidelines. Understanding your rights and available support is crucial for protecting yourself at work, accessing benefits, and finding effective treatment. This comprehensive guide explains when depression qualifies as a disability, what protections you're entitled to, and how innovative treatments like <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> can help restore your independence and wellness.
              </p>
            </div>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current['understanding-disability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Depression as a Disability</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-12 h-12 text-[#572670] flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-[#572670] mb-2">Legal Definition of Disability</p>
                      <p className="text-gray-700">
                        Under the ADA, a disability is defined as a physical or mental impairment that substantially limits one or more major life activities. Depression qualifies when it significantly impacts activities such as working, concentrating, sleeping, caring for oneself, or interacting with others.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">When Does Depression Qualify as a Disability?</h3>
              <p className="mb-4">
                Not all depression automatically qualifies as a disability. Several factors determine whether your depression meets legal disability standards:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Severity of Symptoms</h4>
                    <p className="text-gray-700 mb-3">
                      Your depression must be more than occasional sadness or temporary mood changes. Qualifying depression involves persistent, severe symptoms that interfere with daily functioning. This includes:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Persistent depressed mood lasting most of the day, nearly every day</li>
                      <li>• Markedly diminished interest or pleasure in activities</li>
                      <li>• Significant changes in appetite or weight</li>
                      <li>• Insomnia or hypersomnia</li>
                      <li>• Psychomotor agitation or retardation</li>
                      <li>• Fatigue or loss of energy</li>
                      <li>• Feelings of worthlessness or excessive guilt</li>
                      <li>• Diminished ability to think or concentrate</li>
                      <li>• Recurrent thoughts of death or suicide</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Duration and Persistence</h4>
                    <p className="text-gray-700">
                      For ADA protection, depression typically must be long-term or expected to last a significant period. For Social Security Disability, symptoms must have lasted or be expected to last at least 12 consecutive months, or result in death.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Functional Limitations</h4>
                    <p className="text-gray-700 mb-3">
                      The key factor is how depression limits your ability to perform major life activities. This includes:
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Difficulty maintaining employment or attending work regularly</li>
                      <li>• Impaired concentration affecting job performance</li>
                      <li>• Inability to maintain social relationships</li>
                      <li>• Challenges with self-care and daily hygiene</li>
                      <li>• Difficulty managing household responsibilities</li>
                      <li>• Problems making decisions or planning activities</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Depression Coexisting with Anxiety</p>
                  <p className="text-gray-700">
                    Many people with depression also experience <Link to="/anxiety" className="text-[#572670] hover:underline">anxiety disorders</Link>. When both conditions are present, they can compound functional limitations. Anxiety disorders can also qualify as disabilities under the same legal frameworks, providing additional protection and support options.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current['ada-coverage'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Americans with Disabilities Act (ADA) and Depression</h2>

              <p className="mb-6">
                The ADA, enacted in 1990, prohibits discrimination against individuals with disabilities in employment, public services, and public accommodations. Understanding how the ADA applies to depression is essential for protecting your rights.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">ADA Coverage for Mental Health Conditions</h3>
              
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Who is Protected?</h4>
                  <p className="text-gray-700 mb-3">
                    The ADA protects individuals who:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span>Have a current diagnosis of depression that substantially limits major life activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span>Have a history or record of depression (even if currently in remission)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span>Are regarded by others as having a substantially limiting impairment</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What the ADA Prohibits</h3>
              <p className="mb-4">
                Under the ADA, employers with 15 or more employees cannot:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Discriminate in hiring:</strong> Refuse to hire you because of depression</li>
                <li><strong>Discriminate in employment:</strong> Fire, demote, or deny promotions due to your condition</li>
                <li><strong>Harass employees:</strong> Create a hostile work environment based on mental health status</li>
                <li><strong>Retaliate:</strong> Punish employees for requesting accommodations or filing complaints</li>
                <li><strong>Ask prohibited questions:</strong> Inquire about mental health conditions before making a job offer</li>
              </ul>

              <Card className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500 mb-6">
                <p className="font-medium mb-2">Important Note on Disclosure</p>
                <p className="text-gray-700">
                  You are not required to disclose your depression diagnosis during job interviews. Employers can only ask about your ability to perform specific job functions. However, to receive ADA protections and accommodations, you will need to disclose that you have a condition requiring accommodation at some point.
                </p>
              </Card>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current['ssa-disability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Social Security Disability Benefits for Depression</h2>

              <p className="mb-6">
                The Social Security Administration (SSA) provides disability benefits to individuals who cannot work due to severe medical conditions, including depression. There are two primary programs:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Social Security Disability Insurance (SSDI)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      SSDI is for individuals who have worked and paid Social Security taxes. Benefits are based on your work history and earnings record.
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• Requires sufficient work credits</li>
                      <li>• Monthly benefit amount varies</li>
                      <li>• Medicare eligibility after 24 months</li>
                      <li>• No income or asset limits</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Supplemental Security Income (SSI)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      SSI is a needs-based program for individuals with limited income and resources, regardless of work history.
                    </p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>• No work credits required</li>
                      <li>• Fixed monthly payment amount</li>
                      <li>• Medicaid eligibility in most states</li>
                      <li>• Strict income and asset limits</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">SSA Criteria for Depression Disability</h3>
              <p className="mb-4">
                The SSA evaluates depression under its listing for "Depressive, bipolar and related disorders." To qualify, you must demonstrate:
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Medical Documentation Required:</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Five or more of the following symptoms:</li>
                    <li className="ml-6">- Depressed mood</li>
                    <li className="ml-6">- Diminished interest in almost all activities</li>
                    <li className="ml-6">- Appetite disturbance with weight change</li>
                    <li className="ml-6">- Sleep disturbance</li>
                    <li className="ml-6">- Observable psychomotor agitation or retardation</li>
                    <li className="ml-6">- Decreased energy</li>
                    <li className="ml-6">- Feelings of guilt or worthlessness</li>
                    <li className="ml-6">- Difficulty concentrating or thinking</li>
                    <li className="ml-6">- Thoughts of death or suicide</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Functional Limitations Required (at least one of the following):</h4>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• <strong>Extreme limitation</strong> in one area of mental functioning, OR</li>
                    <li>• <strong>Marked limitation</strong> in two areas of mental functioning</li>
                  </ul>
                  <p className="text-gray-700 text-sm mt-4">Areas of mental functioning include:</p>
                  <ul className="space-y-1 text-gray-700 text-sm mt-2">
                    <li>- Understanding, remembering, or applying information</li>
                    <li>- Interacting with others</li>
                    <li>- Concentrating, persisting, or maintaining pace</li>
                    <li>- Adapting or managing oneself</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Applying for Social Security Disability</h3>
              <div className="space-y-4 mb-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Gather Medical Evidence</h4>
                        <p className="text-gray-700 text-sm">
                          Collect comprehensive medical records, treatment history, diagnostic evaluations, and documentation of how depression limits your functioning. Include notes from mental health professionals, hospitalization records, and medication history.
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
                        <h4 className="font-bold text-lg mb-2">Complete the Application</h4>
                        <p className="text-gray-700 text-sm">
                          Apply online at ssa.gov, by phone at 1-800-772-1213, or at your local Social Security office. Be thorough and honest about how depression affects your daily life and ability to work.
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
                        <h4 className="font-bold text-lg mb-2">Provide Detailed Functional Reports</h4>
                        <p className="text-gray-700 text-sm">
                          Describe specifically how depression affects your daily activities, work capacity, social functioning, and self-care. Be specific with examples of limitations.
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
                        <h4 className="font-bold text-lg mb-2">Consider Professional Assistance</h4>
                        <p className="text-gray-700 text-sm">
                          Many people find it helpful to work with a disability attorney or advocate, especially if initially denied. They can help strengthen your application and navigate appeals if necessary.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Approval Rates and Timeframes</p>
                  <p className="text-gray-700">
                    Initial approval rates for depression-based disability claims are approximately 35-40%. Many successful claims are approved on appeal. The process typically takes 3-6 months for initial decisions, longer if appeals are necessary. Continue treatment and document your condition throughout the process.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4 */}
            <section ref={(el) => sectionsRef.current['workplace-rights'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Workplace Rights and Reasonable Accommodations</h2>

              <p className="mb-6">
                If your depression qualifies as a disability under the ADA, you have the right to request reasonable accommodations that enable you to perform your job effectively.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Workplace Accommodations for Depression</h3>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Schedule Flexibility</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Modified work schedule (later start times)</li>
                      <li>• Flexible leave for medical appointments</li>
                      <li>• Intermittent FMLA leave</li>
                      <li>• Part-time or reduced hours temporarily</li>
                      <li>• Telecommuting options</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Workplace Environment</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Quiet or private workspace</li>
                      <li>• Noise-canceling headphones</li>
                      <li>• Natural lighting access</li>
                      <li>• Designated rest area access</li>
                      <li>• Workspace away from distractions</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Job Modifications</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Restructuring marginal job functions</li>
                      <li>• Modified productivity standards</li>
                      <li>• Additional training or mentoring</li>
                      <li>• Written instructions for complex tasks</li>
                      <li>• Reduced multitasking requirements</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3">Support and Communication</h4>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li>• Regular feedback and communication</li>
                      <li>• Designated point of contact</li>
                      <li>• Employee assistance program access</li>
                      <li>• Sensitivity training for supervisors</li>
                      <li>• Periodic check-ins</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">How to Request Accommodations</h3>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <ol className="space-y-3">
                    <li className="text-gray-700">
                      <strong>1. Make a formal request:</strong> Submit a written request to your supervisor or HR department stating that you have a medical condition requiring workplace accommodation.
                    </li>
                    <li className="text-gray-700">
                      <strong>2. Provide medical documentation:</strong> Your healthcare provider may need to complete accommodation request forms or provide a letter confirming your condition and recommended accommodations.
                    </li>
                    <li className="text-gray-700">
                      <strong>3. Engage in interactive process:</strong> Work with your employer to identify effective accommodations that don't cause undue hardship.
                    </li>
                    <li className="text-gray-700">
                      <strong>4. Document everything:</strong> Keep copies of all requests, responses, and communications regarding accommodations.
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500">
                <p className="font-medium mb-2">Know Your Rights</p>
                <p className="text-gray-700">
                  Employers must provide reasonable accommodations unless doing so would cause "undue hardship"—significant difficulty or expense relative to the employer's size and resources. If your employer denies reasonable accommodations, you may file a complaint with the Equal Employment Opportunity Commission (EEOC).
                </p>
              </Card>
            </section>

            {/* Section 5 */}
            <section ref={(el) => sectionsRef.current['treatment-options'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Treatment Options to Restore Independence and Wellness</h2>

              <p className="mb-6">
                While legal protections and accommodations are important, effective treatment is essential for managing depression and potentially restoring your ability to work and function independently. Many treatments are available, including innovative approaches like <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy in Palm Springs</Link>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">TMS Therapy: A Game-Changer for Treatment-Resistant Depression</h3>
              
              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">Why TMS Works When Other Treatments Fail</p>
                  <p className="text-gray-700 mb-4">
                    Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate underactive brain regions associated with depression. Unlike medications, TMS directly targets the neurological basis of depression without systemic side effects.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• 50-60% response rate for treatment-resistant depression</li>
                    <li>• 30-40% achieve complete remission</li>
                    <li>• No cognitive impairment or sedation</li>
                    <li>• Can continue working during treatment</li>
                    <li>• Long-lasting results with maintenance options</li>
                    <li>• Covered by most insurance plans, including Medicare</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Treatment Approaches</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Psychotherapy</h4>
                    <p className="text-gray-700">
                      Cognitive-behavioral therapy (CBT), interpersonal therapy, and other evidence-based approaches help address thought patterns, coping skills, and relationship dynamics contributing to depression.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Medication Management</h4>
                    <p className="text-gray-700">
                      <Link to="/medication-management" className="text-[#572670] hover:underline">Antidepressant medications in palm springs</Link>  can be effective for many people. Working with a psychiatrist ensures proper medication selection, dosing, and monitoring for side effects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Lifestyle Modifications</h4>
                    <p className="text-gray-700">
                      Regular exercise, healthy nutrition, adequate sleep, stress management, and social connection all support mental health recovery and complement professional treatment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Support Groups</h4>
                    <p className="text-gray-700">
                      Connecting with others who understand depression reduces isolation and provides practical coping strategies. Many communities offer in-person and online support groups.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Special Considerations for Veterans</p>
                  <p className="text-gray-700">
                    <Link to="/veterans" className="text-[#572670] hover:underline">Veterans</Link> experiencing depression related to service, including <Link to="/ptsd" className="text-[#572670] hover:underline">PTSD</Link>, may be eligible for VA disability benefits and specialized treatment programs. TMS therapy is increasingly available through VA medical centers and community care providers serving veterans.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">TMS Therapy at KarmaTMS Palm Springs</h3>
              <p className="mb-4">
                At KarmaTMS, we specialize in helping individuals with treatment-resistant depression regain their independence and quality of life through advanced TMS therapy. Our comprehensive approach includes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Personalized Treatment Plans</h4>
                    <p className="text-gray-700 text-sm">
                      Every patient receives a customized treatment protocol based on their specific symptoms, history, and goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Insurance Coordination</h4>
                    <p className="text-gray-700 text-sm">
                      We work with most major insurance plans and help navigate coverage and benefits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Convenient Scheduling</h4>
                    <p className="text-gray-700 text-sm">
                      Treatment sessions fit into your work schedule, with no downtime or recovery period needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Compassionate Care Team</h4>
                    <p className="text-gray-700 text-sm">
                      Our experienced staff provides support throughout your treatment journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for veterans and treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping individuals overcome depression, anxiety, and PTSD through evidence-based, compassionate care."
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
                  Ready to Reclaim Your Independence?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Learn how TMS therapy can help you overcome treatment-resistant depression and restore your quality of life. Schedule a free consultation today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tms-therapy">Learn About TMS Therapy</Link>
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

export default IsDepressionADisabilityBlogPostPage;