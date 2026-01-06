import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import AuthorBox from '@/components/AuthorBox';
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

export default function TMSMigraineVeteransBlogPostPage() {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef({});

  const publishDate = '2025-11-10';
  const author = {
    name: 'Dr. Keerthy Sunder',
    credentials: 'MD, Board-Certified Psychiatrist',
    image: 'https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg',
    bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy and treatment-resistant mental health conditions. With extensive experience treating veterans, Dr. Sunder is dedicated to providing innovative, evidence-based care to those who have served our country.'
  };

  const tocItems = [
  { id: 'understanding-migraines', label: 'Understanding Migraines in Veterans' },
  { id: 'burden-of-migraines', label: 'The Burden of Migraines for Veterans' },
  { id: 'va-disability', label: 'VA Disability for Migraines' },
  { id: 'comorbidity', label: 'Migraines, PTSD, and Depression' },
  { id: 'traditional-treatments', label: 'Traditional Treatments vs. TMS' },
  { id: 'how-tms-helps', label: 'How TMS Helps with Migraines' },
  { id: 'clinical-benefits', label: 'Clinical Benefits and Research' },
  { id: 'faqs', label: 'Frequently Asked Questions' }];


  const faqs = [
  {
    question: 'Can TMS therapy help with migraine relief in veterans?',
    answer: 'Yes, TMS therapy has shown significant effectiveness in reducing migraine frequency and severity in veterans. Studies demonstrate a 40-60% reduction in monthly migraine days. TMS is particularly beneficial for veterans because it can simultaneously address comorbid conditions like PTSD and depression that often coexist with migraines.'
  },
  {
    question: 'How does VA disability rating work for migraines?',
    answer: 'The VA rates migraines from 0% to 50% based on frequency and severity. A 50% rating is given for very frequent, completely prostrating attacks. 30% for attacks occurring monthly, 10% for attacks every 2 months, and 0% for less frequent attacks. Veterans should document all episodes and obtain medical evidence linking migraines to service.'
  },
  {
    question: 'Why are migraines more common in veterans with PTSD?',
    answer: 'Veterans with PTSD are 3-5 times more likely to experience migraines due to shared neurobiological mechanisms. The stress and hyperarousal from PTSD can trigger migraine episodes, while chronic migraine pain can worsen PTSD symptoms. Both conditions involve dysfunction in similar brain regions and neurotransmitter systems.'
  },
  {
    question: 'Is TMS better than traditional migraine treatments for veterans?',
    answer: 'TMS offers several advantages over traditional treatments. Unlike medications, it has no systemic side effects, doesn\'t require daily use, and can treat multiple conditions simultaneously. TMS addresses the neurological dysfunction underlying both migraines and comorbid mental health conditions, offering long-lasting relief that medications cannot provide.'
  },
  {
    question: 'How long does TMS treatment take for migraine relief?',
    answer: 'A typical TMS treatment course consists of 20-40 minute sessions, usually 5 days per week for 4-6 weeks. Many veterans begin experiencing relief within 2-3 weeks of starting treatment, with continued improvement throughout the course and beyond.'
  },
  {
    question: 'Can veterans with TBI benefit from TMS for migraines?',
    answer: 'Yes, TMS can be particularly effective for post-traumatic headaches and migraines following TBI. Over 50% of veterans with TBI experience chronic migraines, and these are often resistant to traditional treatments. TMS can help normalize brain activity and reduce both frequency and intensity of TBI-related migraines.'
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


  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives',
    description: 'Learn how TMS therapy helps veterans with migraines and VA disability for migraines. Understand the comorbidity with PTSD and depression, and discover clinical benefits of TMS.',
    author: {
      '@type': 'Person',
      name: author.name,
      jobTitle: author.credentials
    },
    datePublished: publishDate,
    dateModified: publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'Karma TMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863799/blog_4_hzwvvb.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.karmatms.com/blogs/tms-migraine-veterans'
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

  const scrollToSection = (id) => {
    const section = sectionsRef.current[id];
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO
        title="TMS for Migraine Relief in Veterans: Brain Stimulation Treatment | Karma TMS"
        description="Discover how TMS helps veterans with migraines. Learn about VA disability for migraines, comorbidity with PTSD and depression, and clinical benefits of brain stimulation therapy."
        keywords="migraines for veterans, migraines veterans disability, migraines veterans, migraines for va disability, va disability for migraines, TMS for migraines, veteran migraine treatment"
        canonicalUrl="https://www.karmatms.com/blogs/tms-migraine-veterans" />


      <StructuredData data={structuredData} />
      
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
                <BreadcrumbPage>TMS for Migraine Relief in Veterans</BreadcrumbPage>
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
                November 10, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                {author.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how TMS therapy helps veterans with migraines, PTSD, and depression achieve lasting relief
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Free Consultation</Link>
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
                      <Link to="/contact">Get Started Today</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033673/7_lnxkrv.png"
                alt="TMS for Migraine Relief in Veterans"
                className="w-full  md:h-96 object-cover rounded-lg mb-6" />

            </div>

            {/* Section 1: Understanding Migraines */}
            <section ref={(el) => sectionsRef.current['understanding-migraines'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Migraines in Veterans</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Migraines affect a significantly higher percentage of veterans compared to the general population. For many veterans, chronic migraines aren't just debilitating headaches—they're often interconnected with other service-related conditions like PTSD, traumatic brain injury (TBI), and depression.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                While traditional migraine treatments offer limited relief for many veterans, Transcranial Magnetic Stimulation (TMS) is emerging as a game-changing intervention that addresses both migraines and their underlying neurological causes, including comorbid mental health conditions.
              </p>
            </section>

            {/* Section 2: Burden of Migraines */}
            <section ref={(el) => sectionsRef.current['burden-of-migraines'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Burden of Migraines for Veterans</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#572670] mb-6">Migraine Statistics in Veterans:</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-[#572670] mb-2">36%</div>
                      <p className="text-gray-700">of post-9/11 veterans experience migraines, compared to 12% of the general population</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">3x Higher</div>
                      <p className="text-gray-700">Migraine rates in veterans who served in combat zones</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">50%+</div>
                      <p className="text-gray-700">of veterans with TBI also experience chronic migraines</p>
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">Top 5</div>
                      <p className="text-gray-700">Migraines rank in the top 5 conditions for VA disability claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: VA Disability */}
            <section ref={(el) => sectionsRef.current['va-disability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">VA Disability for Migraines</h2>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp"
                alt="VA benefits for veterans with migraines"
                className="w-full  md:h-80 object-cover rounded-lg mb-6" />


              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The VA recognizes migraines as a potentially disabling condition for veterans. Understanding how to navigate VA disability for migraines is crucial for accessing proper care and compensation.
              </p>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">VA Disability Ratings for Migraines:</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#572670]">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">50%</div>
                        <div className="text-gray-700">
                          <strong>Severe:</strong> Very frequent completely prostrating and prolonged attacks productive of severe economic inadaptability
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#572670]">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">30%</div>
                        <div className="text-gray-700">
                          <strong>Moderately Severe:</strong> Characteristic prostrating attacks occurring on average once a month over last several months
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#572670]">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">10%</div>
                        <div className="text-gray-700">
                          <strong>Moderate:</strong> With characteristic prostrating attacks occurring on average once every 2 months
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4 border-l-4 border-[#572670]">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">0%</div>
                        <div className="text-gray-700">
                          <strong>Mild:</strong> With less frequent attacks
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-3">Filing for VA Disability:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Document all migraine episodes, including frequency, duration, and severity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Obtain medical evidence linking migraines to service (service connection)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Get statements from healthcare providers about functional limitations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Note impact on work, daily activities, and quality of life</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Consider secondary service connection (e.g., migraines secondary to PTSD or TBI)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Comorbidity */}
            <section ref={(el) => sectionsRef.current['comorbidity'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Complex Connection: Migraines, PTSD, and Depression</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                One of the most critical aspects of understanding migraines in veterans is recognizing their comorbidity with mental health conditions. These conditions often exist together and can exacerbate each other, creating a challenging cycle.
              </p>

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#572670] mb-3 flex items-center gap-2">
                      <span className="text-2xl">●</span> Migraines and PTSD
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Veterans with PTSD are 3-5 times more likely to experience migraines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Stress and hyperarousal from PTSD can trigger migraine episodes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Migraines can worsen PTSD symptoms through increased stress and pain</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Shared neurobiological mechanisms in brain regions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#572670] mb-3 flex items-center gap-2">
                      <span className="text-2xl">●</span> Migraines and Depression
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Depression is 2-4 times more common in people with migraines</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Chronic pain from migraines can lead to or worsen depression</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Depression can lower pain threshold, intensifying migraine symptoms</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Both conditions involve serotonin and other neurotransmitter imbalances</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#572670] mb-3 flex items-center gap-2">
                      <span className="text-2xl">●</span> Migraines and TBI
                    </h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Post-traumatic headaches are common after TBI</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Can develop into chronic migraine disorder</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>May persist for months or years after injury</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>TBI-related migraines often resistant to traditional treatments</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 5: Traditional Treatments */}
            <section ref={(el) => sectionsRef.current['traditional-treatments'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Traditional Treatments vs. TMS</h2>
             


              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conventional Migraine Treatments:</h3>
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">1. Preventive Medications</h4>
                    <p className="text-gray-700 mb-2">Beta-blockers, antidepressants, anticonvulsants</p>
                    <div className="text-sm text-gray-600">
                      <strong>Limitations:</strong> Side effects, limited effectiveness, require daily use
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">2. Acute/Abortive Medications</h4>
                    <p className="text-gray-700 mb-2">Triptans, NSAIDs, pain relievers</p>
                    <div className="text-sm text-gray-600">
                      <strong>Limitations:</strong> Only address symptoms, rebound headaches, medication overuse risk
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">3. Botox Injections</h4>
                    <p className="text-gray-700 mb-2">Preventive injections every 12 weeks</p>
                    <div className="text-sm text-gray-600">
                      <strong>Limitations:</strong> Invasive, requires repeated treatments, inconsistent results
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">4. CGRP Inhibitors</h4>
                    <p className="text-gray-700 mb-2">Newer preventive medications</p>
                    <div className="text-sm text-gray-600">
                      <strong>Limitations:</strong> Expensive, limited long-term data, doesn't address comorbid conditions
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6: How TMS Helps */}
            <section ref={(el) => sectionsRef.current['how-tms-helps'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Helps with Migraines</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                TMS offers a fundamentally different approach to migraine treatment by addressing the neurological dysfunction that underlies both migraines and comorbid mental health conditions.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#572670] mb-6">TMS Mechanisms for Migraine Relief:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#572670] pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Cortical Excitability Regulation</h4>
                      <p className="text-gray-700">
                        TMS normalizes abnormal cortical excitability that underlies migraine susceptibility. It helps stabilize the brain's electrical activity, reducing the likelihood of migraine triggers.
                      </p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Neurotransmitter Modulation</h4>
                      <p className="text-gray-700">
                        TMS influences serotonin, dopamine, and other neurotransmitters involved in both migraines and mood disorders, addressing multiple conditions simultaneously.
                      </p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Pain Processing Normalization</h4>
                      <p className="text-gray-700">
                        TMS modulates pain perception pathways in the brain, helping to reduce both the frequency and intensity of migraine attacks.
                      </p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">4. Addressing Comorbid Conditions</h4>
                      <p className="text-gray-700">
                        Unlike traditional migraine treatments, TMS can simultaneously treat depression, anxiety, and PTSD—conditions that often coexist with and exacerbate migraines.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-[#572670]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">Why TMS Is Ideal for Veterans with Migraines:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Non-invasive and well-tolerated</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">No systemic side effects</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Treats multiple conditions simultaneously</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Long-lasting results</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">Evidence-based and FDA-cleared</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">No daily medication required</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Clinical Benefits */}
            <section ref={(el) => sectionsRef.current['clinical-benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Clinical Benefits and Research</h2>
             


              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Growing clinical evidence supports the effectiveness of TMS for migraine treatment, particularly for veterans with treatment-resistant migraines and comorbid conditions.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Migraine Frequency Reduction</h4>
                    <p className="text-gray-700 mb-2 text-sm">Studies show 40-60% reduction in monthly migraine days with TMS treatment</p>
                    <div className="text-sm text-[#572670] font-semibold">Evidence Level: Strong</div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Pain Intensity Decrease</h4>
                    <p className="text-gray-700 mb-2 text-sm">Significant reduction in average pain intensity during migraine attacks</p>
                    <div className="text-sm text-[#572670] font-semibold">Evidence Level: Moderate to Strong</div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Medication Reduction</h4>
                    <p className="text-gray-700 mb-2 text-sm">Many patients able to reduce or eliminate preventive and acute migraine medications</p>
                    <div className="text-sm text-[#572670] font-semibold">Evidence Level: Moderate</div>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Quality of Life Improvement</h4>
                    <p className="text-gray-700 mb-2 text-sm">Substantial improvements in daily functioning, work productivity, and social engagement</p>
                    <div className="text-sm text-[#572670] font-semibold">Evidence Level: Strong</div>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 italic">
                    "For the first time in years, I'm not living in fear of the next migraine. TMS didn't just reduce my headaches—it gave me my life back. My depression improved, I sleep better, and I can actually make plans with my family again."
                  </p>
                  <p className="text-gray-600 mt-3 font-medium">— Marine Corps Veteran, Karma TMS Patient</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">The TMS Treatment Journey for Migraines:</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Comprehensive Evaluation</h4>
                        <p className="text-gray-700 text-sm">Detailed assessment of migraine history, patterns, triggers, and comorbid conditions</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Brain Mapping</h4>
                        <p className="text-gray-700 text-sm">Precise identification of treatment areas using advanced neuroimaging technology</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Customized Treatment Plan</h4>
                        <p className="text-gray-700 text-sm">Personalized protocol addressing both migraines and any comorbid conditions</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Treatment Sessions</h4>
                        <p className="text-gray-700 text-sm">20-40 minute sessions, typically 5 days per week for 4-6 weeks</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Monitoring and Adjustment</h4>
                        <p className="text-gray-700 text-sm">Regular tracking of migraine frequency, severity, and overall improvement</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">6</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Maintenance and Follow-Up</h4>
                        <p className="text-gray-700 text-sm">Ongoing support and potential maintenance sessions to sustain benefits</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">A Revolutionary Approach to Migraine Relief</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For veterans struggling with migraines—especially those with comorbid PTSD, depression, or TBI—TMS represents a paradigm shift in treatment. Rather than simply masking symptoms with medications or managing pain, TMS addresses the underlying neurological dysfunction that causes both migraines and related mental health conditions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The ability to treat multiple conditions simultaneously, without systemic side effects, makes TMS particularly valuable for veterans who deserve comprehensive, effective care without additional burden.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you're a veteran with migraines for veterans disability consideration or simply seeking relief from chronic migraines that haven't responded to traditional treatments, TMS may be the breakthrough you've been searching for.
              </p>
            </section>

            {/* Author Box */}
            <AuthorBox
              name={author.name}
              role={author.credentials}
              bio={author.bio}
              image={author.image} />


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
                  Find Relief from Chronic Migraines with TMS
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Stop living in fear of the next migraine. Discover how TMS can provide lasting relief for veterans with chronic migraines and comorbid conditions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Schedule Free Consultation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    



                  </Button>
                </div>
                <p className="mt-6 text-white/90">
                  Specialized veteran care in Palm Springs and Twentynine Palms
                </p>
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

}