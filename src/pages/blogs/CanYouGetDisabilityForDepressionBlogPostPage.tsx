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

const CanYouGetDisabilityForDepressionBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-disability', label: 'Understanding Disability for Depression' },
  { id: 'ssdi-vs-ssi', label: 'SSDI vs SSI Benefits' },
  { id: 'eligibility-criteria', label: 'Eligibility Criteria' },
  { id: 'application-process', label: 'Application Process' },
  { id: 'short-vs-long-term', label: 'Short-Term vs Long-Term Disability' },
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
    question: 'Can you get disability for depression?',
    answer: 'Yes, you can get disability benefits for depression if it severely impacts your ability to work and perform daily activities. The Social Security Administration recognizes major depressive disorder as a qualifying condition for SSDI and SSI benefits if it meets specific medical and functional criteria.'
  },
  {
    question: 'How long do you have to be depressed to get disability?',
    answer: 'To qualify for Social Security Disability benefits, your depression must have lasted or be expected to last at least 12 consecutive months, or result in death. The condition must prevent you from performing substantial gainful activity during this period.'
  },
  {
    question: 'What is the approval rate for depression disability claims?',
    answer: 'Initial approval rates for depression-based disability claims range from 35-40%. However, many successful claims are approved on appeal. Working with healthcare providers to thoroughly document your condition and functional limitations significantly improves approval chances.'
  },
  {
    question: 'How much disability can you get for depression?',
    answer: 'SSDI benefit amounts vary based on your work history and earnings record, with average monthly payments around $1,500-$1,900. SSI provides a fixed monthly payment (approximately $914 in 2024) for individuals with limited income and resources. Actual amounts may vary.'
  },
  {
    question: 'What documentation do I need for a depression disability claim?',
    answer: 'Essential documentation includes comprehensive medical records, psychiatric evaluations, treatment history, medication records, therapy notes, hospitalization records, and detailed statements about how depression limits your daily activities and work capacity from both you and your healthcare providers.'
  },
  {
    question: 'Can I work while receiving disability for depression?',
    answer: 'Limited work is possible under trial work period provisions. For SSDI, you can earn up to $1,550/month (2024) during a trial work period without losing benefits. For SSI, earnings above certain thresholds reduce benefits. Returning to full-time substantial gainful activity may result in termination of benefits.'
  },
  {
    question: 'Does treatment-resistant depression qualify for disability?',
    answer: 'Yes, treatment-resistant depression often strengthens disability claims. If you\'ve tried multiple treatments (medications, therapy) without success, this demonstrates the severity and persistence of your condition. Innovative treatments like TMS therapy may provide relief and potentially restore work capacity.'
  },
  {
    question: 'Can TMS therapy help me return to work?',
    answer: 'TMS therapy has helped many people with treatment-resistant depression significantly improve their symptoms, with 50-60% response rates. Many patients report improved concentration, energy, and productivity after TMS treatment, enabling them to return to work or maintain employment. Unlike medications, TMS has minimal side effects.'
  }];


  const relatedPosts = [
  {
    title: 'Is Depression a Disability? Understanding Rights and Support',
    excerpt: 'Learn about legal protections, workplace accommodations, and disability rights for depression.',
    link: '/blog/is-depression-a-disability',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015452/37_kghe3l.png'
  },
  {
    title: 'TMS Therapy for Treatment-Resistant Depression',
    excerpt: 'Discover how TMS therapy offers hope for depression that hasn\'t responded to other treatments.',
    link: '/blog/tms-therapy-treatment-resistant-depression',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764138579/32_og3ayd.png'
  },
  {
    title: 'Does TMS Therapy Work for Anxiety?',
    excerpt: 'Learn about TMS therapy effectiveness for anxiety disorders and co-occurring conditions.',
    link: '/blog/does-tms-therapy-work-for-anxiety',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1764569002/34_g1u7jn.png'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Can You Get Disability for Depression? Understanding Your Rights, Benefits, and Treatment Options',
    description: 'Learn if you can get disability for depression. Comprehensive guide covering SSA eligibility, application process, documentation, and treatment options including TMS therapy.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015453/38_lkmqxw.png',
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
    datePublished: '2025-12-02',
    dateModified: '2025-12-02',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/can-you-get-disability-for-depression'
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
        title="Can You Get Disability for Depression? Rights & Benefits Guide"
        description="Learn if you can get disability for depression. Comprehensive guide covering SSA eligibility, application process, documentation, and treatment options including TMS therapy."
        keywords="disability for depression, SSDI depression, SSI benefits depression, depression disability benefits, how to get disability for depression, treatment resistant depression, TMS therapy Palm Springs"
        canonical="/blog/can-you-get-disability-for-depression"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015453/38_lkmqxw.png"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Can You Get Disability for Depression?', url: '/blog/can-you-get-disability-for-depression' }]
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
                <BreadcrumbPage>Can You Get Disability for Depression?</BreadcrumbPage>
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
                December 2, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                16 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                KarmaTMS Medical Team
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Can You Get Disability for Depression? Understanding Your Rights, Benefits, and Treatment Options
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Complete guide to disability benefits for depression, including eligibility requirements, application process, and treatment options
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Consultation</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1765015453/38_lkmqxw.png"
                alt="Can you get disability for depression"
                className="w-full object-cover rounded-lg mb-6" />


              <p className="text-xl text-gray-700 leading-relaxed">
                If you're struggling with severe <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, you may be wondering: "Can you get disability for depression?" The answer is yes—depression can qualify you for disability benefits through Social Security Disability Insurance (SSDI) or Supplemental Security Income (SSI) if it significantly impairs your ability to work and maintain daily functioning. This comprehensive guide explains eligibility requirements, the application process, necessary documentation, and how innovative treatments like <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> can help you manage symptoms and potentially return to work.
              </p>
            </div>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current['understanding-disability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Disability Benefits for Depression</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Shield className="w-12 h-12 text-[#572670] flex-shrink-0" />
                    <div>
                      <p className="text-lg font-medium text-[#572670] mb-2">What Qualifies Depression as a Disability?</p>
                      <p className="text-gray-700">
                        The Social Security Administration (SSA) recognizes major depressive disorder as a qualifying disability when it substantially limits your ability to perform basic work activities and is expected to last at least 12 months or result in death. The severity of symptoms, duration, treatment history, and functional limitations all factor into disability determinations.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Depression May Qualify for Disability</h3>
              <p className="mb-4">
                Depression isn't just feeling sad—it's a serious mental health condition that can profoundly impact every aspect of life. When depression is severe and persistent, it can create significant functional impairments that prevent you from:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Maintaining employment:</strong> Difficulty concentrating, reduced productivity, frequent absences, inability to complete tasks</li>
                <li><strong>Following instructions:</strong> Impaired cognitive function affecting understanding and memory</li>
                <li><strong>Interacting with others:</strong> Social withdrawal, difficulty communicating with coworkers or supervisors</li>
                <li><strong>Managing stress:</strong> Inability to handle workplace pressure or adapt to changes</li>
                <li><strong>Self-care activities:</strong> Neglecting personal hygiene, nutrition, or medical care</li>
                <li><strong>Maintaining regular schedules:</strong> Sleep disturbances affecting attendance and punctuality</li>
              </ul>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Depression and Anxiety Often Co-Occur</p>
                  <p className="text-gray-700">
                    Many people with depression also experience <Link to="/anxiety" className="text-[#572670] hover:underline">anxiety disorders</Link>, which can compound functional limitations. Co-occurring conditions strengthen disability claims by demonstrating multiple impairments affecting work capacity and daily functioning.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current['ssdi-vs-ssi'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">SSDI vs SSI: Understanding Your Benefit Options</h2>

              <p className="mb-6">
                The Social Security Administration offers two primary disability benefit programs. Understanding the differences helps you determine which program(s) you may qualify for.
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Social Security Disability Insurance (SSDI)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      SSDI is for individuals who have worked and paid Social Security taxes. Benefits are based on your work history and earnings record.
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Requires sufficient work credits (typically 20 credits earned in last 10 years)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Monthly benefit amount varies based on earnings history</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Medicare eligibility after 24 months of benefits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>No income or asset limits</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Family members may qualify for auxiliary benefits</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Supplemental Security Income (SSI)</h4>
                    <p className="text-gray-700 text-sm mb-3">
                      SSI is a needs-based program for individuals with limited income and resources, regardless of work history.
                    </p>
                    <ul className="space-y-2 text-gray-700 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>No work credits required</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Fixed monthly payment amount (approximately $914 in 2024)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Immediate Medicaid eligibility in most states</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Strict income limits ($1,971/month individual, $2,915/month couple in 2024)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                        <span>Resource limits ($2,000 individual, $3,000 couple)</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500">
                <p className="font-medium mb-2">Can You Receive Both SSDI and SSI?</p>
                <p className="text-gray-700">
                  Yes, it's possible to receive concurrent benefits if you qualify for SSDI but your benefit amount is low. SSI can supplement your SSDI to bring your total income up to the SSI federal benefit rate. This is called "concurrent benefits."
                </p>
              </Card>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current['eligibility-criteria'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Eligibility Criteria for Depression Disability Benefits</h2>

              <p className="mb-6">
                To qualify for disability benefits for depression, you must meet both medical and non-medical requirements established by the SSA.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Medical Criteria</h3>
              
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">SSA Listing 12.04: Depressive, Bipolar and Related Disorders</h4>
                  <p className="text-gray-700 mb-3">
                    Your depression must be documented by medical evidence showing five or more of the following symptoms:
                  </p>
                  <ul className="space-y-2 text-gray-700 text-sm">
                    <li>• Depressed mood</li>
                    <li>• Diminished interest in almost all activities</li>
                    <li>• Appetite disturbance with significant weight change</li>
                    <li>• Sleep disturbance (insomnia or hypersomnia)</li>
                    <li>• Observable psychomotor agitation or retardation</li>
                    <li>• Decreased energy or chronic fatigue</li>
                    <li>• Feelings of guilt or worthlessness</li>
                    <li>• Difficulty concentrating or thinking</li>
                    <li>• Recurrent thoughts of death or suicide</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Functional Limitations Required</h4>
                  <p className="text-gray-700 mb-3">
                    You must also demonstrate extreme limitation in one or marked limitation in two of these mental functioning areas:
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li>
                      <strong>Understanding, remembering, or applying information:</strong> Difficulty learning, recalling, or using information for work
                    </li>
                    <li>
                      <strong>Interacting with others:</strong> Problems communicating, cooperating, or handling conflicts with supervisors, coworkers, or the public
                    </li>
                    <li>
                      <strong>Concentrating, persisting, or maintaining pace:</strong> Inability to focus, complete tasks, or work at a consistent pace
                    </li>
                    <li>
                      <strong>Adapting or managing oneself:</strong> Difficulty regulating emotions, controlling behavior, maintaining personal hygiene, or being aware of safety
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alternative Criteria: Serious and Persistent Mental Disorder</h3>
              <p className="mb-4">
                If your depression doesn't meet the above criteria exactly, you may still qualify if you have:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>A medically documented history of depression for at least 2 years</li>
                <li>Evidence of ongoing medical treatment, mental health therapy, psychosocial support, or structured living environment</li>
                <li>Minimal capacity to adapt to changes or demands not already part of daily life</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-Medical Criteria</h3>
              <div className="space-y-4">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Work History Requirement (for SSDI)</h4>
                    <p className="text-gray-700 text-sm">
                      You must have worked long enough and recently enough under Social Security. Generally, you need 20 work credits earned in the 10 years immediately before you became disabled. Younger workers may qualify with fewer credits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Inability to Work</h4>
                    <p className="text-gray-700 text-sm">
                      You must be unable to engage in substantial gainful activity (SGA). In 2024, SGA is defined as earning more than $1,550/month ($2,590 for blind individuals). Your depression must prevent you from performing not just your previous job, but any type of work.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Duration Requirement</h4>
                    <p className="text-gray-700 text-sm">
                      Your depression must have lasted or be expected to last at least 12 consecutive months, or result in death. Temporary depression or short-term episodes don't qualify.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4 */}
            <section ref={(el) => sectionsRef.current['application-process'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How to Apply for Disability Benefits for Depression</h2>

              <p className="mb-6">
                Applying for disability benefits requires careful preparation and thorough documentation. Follow these steps to strengthen your application.
              </p>

              <div className="space-y-4 mb-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Gather Comprehensive Medical Documentation</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Collect all medical records related to your depression, including:
                        </p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Psychiatric evaluations and diagnoses</li>
                          <li>• Treatment history (medications tried, dosages, side effects)</li>
                          <li>• Therapy records (types of therapy, frequency, duration)</li>
                          <li>• Hospitalization records for mental health crises</li>
                          <li>• Laboratory tests or brain imaging if applicable</li>
                          <li>• Records from all treating physicians and therapists</li>
                        </ul>
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
                        <h4 className="font-bold text-lg mb-2">Document Functional Limitations in Detail</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Provide specific examples of how depression affects your daily life and work capacity:
                        </p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Describe concentration problems (e.g., "I can't read more than a paragraph before losing focus")</li>
                          <li>• Detail sleep issues and their impact on functioning</li>
                          <li>• Explain social withdrawal and isolation</li>
                          <li>• Document inability to maintain personal hygiene or household tasks</li>
                          <li>• Describe attendance problems or inability to complete work tasks</li>
                          <li>• Include statements from family members or former employers</li>
                        </ul>
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
                        <h4 className="font-bold text-lg mb-2">Get Strong Medical Support</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          Ask your psychiatrist, therapist, or primary care physician to provide:
                        </p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• Detailed medical source statements describing your limitations</li>
                          <li>• RFC (Residual Functional Capacity) assessment</li>
                          <li>• Letters supporting your inability to work</li>
                          <li>• Documentation of treatment compliance and response (or lack thereof)</li>
                        </ul>
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
                        <h4 className="font-bold text-lg mb-2">Complete the Application</h4>
                        <p className="text-gray-700 text-sm mb-3">
                          You can apply online, by phone, or in person:
                        </p>
                        <ul className="text-gray-700 text-sm space-y-1">
                          <li>• <strong>Online:</strong> Apply at www.ssa.gov/applyfordisability</li>
                          <li>• <strong>By phone:</strong> Call 1-800-772-1213 (TTY 1-800-325-0778)</li>
                          <li>• <strong>In person:</strong> Visit your local Social Security office</li>
                        </ul>
                        <p className="text-gray-700 text-sm mt-3">
                          Be thorough, honest, and specific when describing your condition and limitations. Provide complete work history for the past 15 years.
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
                        <h4 className="font-bold text-lg mb-2">Continue Treatment and Document Everything</h4>
                        <p className="text-gray-700 text-sm">
                          Maintain regular treatment throughout the application process. Gaps in treatment can hurt your claim. Keep copies of all submissions, correspondence, and medical records. The SSA will review your application and may request additional information or schedule a consultative examination.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        6
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Consider Professional Representation</h4>
                        <p className="text-gray-700 text-sm">
                          Disability attorneys or advocates can significantly improve your chances of approval, especially if initially denied. They work on contingency (typically 25% of back pay, capped at $7,200) and can help with applications, appeals, and hearings.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Application Timeline and Approval Rates</p>
                  <p className="text-gray-700">
                    Initial decisions typically take 3-6 months. Approximately 35-40% of initial applications for depression are approved. If denied, don't give up—many successful claims are approved during the appeals process (reconsideration, ALJ hearing, Appeals Council, or federal court). Having strong medical evidence and professional representation significantly improves success rates at all levels.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 5 - Short Term vs Long Term */}
            <section ref={(el) => sectionsRef.current['short-vs-long-term'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Short-Term vs Long-Term Disability for Depression</h2>

              <p className="mb-6">
                While Social Security provides long-term disability benefits, you may also have access to short-term disability through your employer or private insurance. Understanding the differences helps you plan financially during your recovery.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-[#572670] text-white">
                      <th className="border border-gray-300 p-3 text-left">Feature</th>
                      <th className="border border-gray-300 p-3 text-left">Short-Term Disability</th>
                      <th className="border border-gray-300 p-3 text-left">Long-Term Disability</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Source</td>
                      <td className="border border-gray-300 p-3">Employer-sponsored or private insurance</td>
                      <td className="border border-gray-300 p-3">Social Security (SSDI/SSI) or private insurance</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Duration</td>
                      <td className="border border-gray-300 p-3">Typically 3-6 months (up to 1 year)</td>
                      <td className="border border-gray-300 p-3">Expected to last 12+ months or be permanent</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Waiting Period</td>
                      <td className="border border-gray-300 p-3">Usually 7-14 days</td>
                      <td className="border border-gray-300 p-3">5-month waiting period for SSDI</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Benefit Amount</td>
                      <td className="border border-gray-300 p-3">50-70% of salary</td>
                      <td className="border border-gray-300 p-3">Varies by earnings history or fixed SSI amount</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium">Application</td>
                      <td className="border border-gray-300 p-3">Through employer or insurance company</td>
                      <td className="border border-gray-300 p-3">Through Social Security Administration</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-3 font-medium">Documentation</td>
                      <td className="border border-gray-300 p-3">Medical certification from doctor</td>
                      <td className="border border-gray-300 p-3">Extensive medical records and functional assessments</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <Card className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500">
                <p className="font-medium mb-2">Bridge Strategy</p>
                <p className="text-gray-700">
                  Many people use short-term disability as a "bridge" while applying for long-term disability through Social Security. If you have employer-sponsored short-term disability, apply immediately when you stop working. Simultaneously begin the SSDI/SSI application process, as approval can take several months.
                </p>
              </Card>
            </section>

            {/* Section 6 - Treatment Options */}
            <section ref={(el) => sectionsRef.current['treatment-options'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Treatment Options: Path to Recovery and Potential Return to Work</h2>

              <p className="mb-6">
                While securing disability benefits provides financial support, effective treatment is essential for managing depression and potentially restoring your ability to work. Many innovative treatments are available, including <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy at KarmaTMS Palm Springs</Link>.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">TMS Therapy: Breakthrough Treatment for Depression</h3>
              
              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">Why TMS Succeeds When Other Treatments Fail</p>
                  <p className="text-gray-700 mb-4">
                    Transcranial Magnetic Stimulation (TMS) is an FDA-approved, non-invasive treatment that uses magnetic pulses to stimulate underactive brain regions associated with depression. Unlike medications that work throughout the body, TMS directly targets the neurological basis of depression with minimal side effects.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>50-60% response rate</strong> for treatment-resistant depression</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>30-40% achieve complete remission</strong> of symptoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>No cognitive impairment or sedation</strong>—you can drive and work the same day</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Minimal side effects</strong> compared to medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Long-lasting results</strong> with maintenance options available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span><strong>Covered by most insurance plans</strong>, including Medicare</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Treatment Approaches</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Psychotherapy</h4>
                    <p className="text-gray-700">
                      Evidence-based therapies like Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), and interpersonal therapy help address negative thought patterns, develop coping skills, and improve relationship dynamics that contribute to depression.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Medication Management</h4>
                    <p className="text-gray-700">
                      <Link to="/medication-management" className="text-[#572670] hover:underline">Psychiatric medication management in Palm Springs</Link> ensures proper antidepressant selection, dosing optimization, and monitoring for effectiveness and side effects. Many people benefit from medication as part of a comprehensive treatment plan.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Lifestyle Modifications</h4>
                    <p className="text-gray-700">
                      Regular exercise, balanced nutrition, consistent sleep schedules, stress management techniques, and social connection all support mental health recovery and complement professional treatment.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Support Systems</h4>
                    <p className="text-gray-700">
                      Depression support groups, family therapy, and peer support networks reduce isolation and provide practical strategies for managing symptoms and navigating daily challenges.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Special Considerations for Veterans</p>
                  <p className="text-gray-700">
                    <Link to="/veterans" className="text-[#572670] hover:underline">Veterans</Link> with service-connected depression or <Link to="/ptsd" className="text-[#572670] hover:underline">PTSD</Link> may be eligible for VA disability benefits in addition to Social Security disability. TMS therapy is increasingly available through VA medical centers and community care programs. Veterans often experience unique mental health challenges that require specialized care.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">TMS Therapy at KarmaTMS Palm Springs</h3>
              <p className="mb-4">
                At KarmaTMS, we specialize in helping individuals with treatment-resistant depression regain their independence and quality of life through advanced TMS therapy. Our approach includes:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Personalized Treatment Plans</h4>
                    <p className="text-gray-700 text-sm">
                      Every patient receives a customized treatment protocol based on their specific symptoms, history, and recovery goals.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Insurance Coordination</h4>
                    <p className="text-gray-700 text-sm">
                      We work with most major insurance plans, including Medicare, and help navigate coverage and benefits.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Flexible Scheduling</h4>
                    <p className="text-gray-700 text-sm">
                      Treatment sessions typically last 20-40 minutes and fit into your schedule, with no downtime or recovery period needed.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Compassionate Care Team</h4>
                    <p className="text-gray-700 text-sm">
                      Our experienced staff provides support, encouragement, and expert care throughout your treatment journey.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping individuals overcome depression, anxiety, and PTSD through evidence-based, compassionate care."
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
                  Ready to Explore Your Treatment Options?
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

export default CanYouGetDisabilityForDepressionBlogPostPage;