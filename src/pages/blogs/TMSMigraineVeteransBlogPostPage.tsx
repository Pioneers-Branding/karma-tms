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

const TMSMigraineVeteransBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'understanding', label: 'Understanding Migraines in Veterans' },
    { id: 'va-disability', label: 'VA Disability for Migraines' },
    { id: 'comorbidity', label: 'Comorbidity with PTSD & Depression' },
    { id: 'how-tms-helps', label: 'How TMS Helps' },
    { id: 'clinical-benefits', label: 'Clinical Benefits' },
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
      question: 'Does the VA cover TMS therapy for migraines?',
      answer: 'Some VA facilities offer TMS therapy for eligible veterans. Coverage varies by location and individual eligibility. Contact your local VA medical center to inquire about availability. Many veterans choose private providers like KarmaTMS for faster access.'
    },
    {
      question: 'How effective is TMS for migraine relief in veterans?',
      answer: 'Studies show 40-60% reduction in monthly migraine days with TMS treatment. Veterans often experience reduced frequency, decreased severity, and improved quality of life. TMS is particularly effective for treatment-resistant migraines.'
    },
    {
      question: 'Can TMS help with both migraines and PTSD?',
      answer: 'Yes! TMS targets brain regions involved in both conditions, making it uniquely effective for veterans with comorbid migraines and PTSD. This dual benefit is one of TMS\'s greatest advantages for veterans.'
    },
    {
      question: 'What is the VA disability rating for migraines?',
      answer: 'VA disability ratings for migraines range from 0% to 50% based on frequency and severity. Ratings of 10%, 30%, and 50% are available depending on how prostrating attacks are and how often they occur.'
    },
    {
      question: 'How long does TMS treatment take for migraines?',
      answer: 'A typical TMS course lasts 4-6 weeks with sessions 5 days per week. Each session is 20-40 minutes. Many veterans notice improvement within 2-3 weeks of starting treatment.'
    },
    {
      question: 'Are there side effects of TMS for migraines?',
      answer: 'TMS is well-tolerated with minimal side effects. The most common is mild scalp discomfort during treatment, which typically subsides quickly. Unlike medications, TMS doesn\'t cause systemic side effects like weight gain or cognitive impairment.'
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
      title: 'TMS for Anxiety in Veterans',
      excerpt: 'Learn how TMS helps veterans manage anxiety beyond medication.',
      link: '/blog/tms-anxiety-veterans',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/66e6e1ae-8cc3-4469-bfaf-b1f3f3d07006.webp'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives',
    description: 'Learn how TMS therapy helps veterans with migraines and VA disability for migraines. Understand the comorbidity with PTSD and depression, and discover clinical benefits of TMS.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863799/blog_4_hzwvvb.png',
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
    datePublished: '2025-11-10',
    dateModified: '2025-11-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/tms-migraine-veterans'
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
        title="TMS for Migraine Relief in Veterans: Brain Stimulation Treatment | KarmaTMS"
        description="Discover how TMS helps veterans with migraines. Learn about VA disability for migraines, comorbidity with PTSD and depression, and clinical benefits of brain stimulation therapy."
        keywords="migraines for veterans, migraines veterans disability, migraines veterans, migraines for va disability, va disability for migraines, TMS for migraines, veteran migraine treatment"
        canonical="/blog/tms-migraine-veterans"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863799/blog_4_hzwvvb.png"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'TMS for Migraine Relief in Veterans', url: '/blog/tms-migraine-veterans' }
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
                10 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TMS for Migraine Relief in Veterans: How Brain Stimulation Is Changing Lives
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how TMS therapy offers veterans breakthrough treatment for chronic migraines and comorbid conditions
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033673/7_lnxkrv.png"
                alt="TMS for Migraine Relief in Veterans"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              <p className="text-xl text-gray-700 leading-relaxed">
                Migraines affect a significantly higher percentage of veterans compared to the general population. For many veterans, chronic migraines aren't just debilitating headaches—they're often interconnected with other service-related conditions like PTSD, traumatic brain injury (TBI), and depression. While traditional migraine treatments offer limited relief for many veterans, Transcranial Magnetic Stimulation (TMS) is emerging as a game-changing intervention that addresses both migraines and their underlying neurological causes.
              </p>
            </div>

            {/* Section 1: Understanding Migraines in Veterans */}
            <section ref={(el) => sectionsRef.current['understanding'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Migraines in Veterans</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">Migraine Statistics in Veterans</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-[#572670] mb-2">36%</div>
                      <p className="text-gray-700">of post-9/11 veterans experience migraines, compared to 12% of the general population</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-blue-600 mb-2">3x Higher</div>
                      <p className="text-gray-700">Migraine rates in veterans who served in combat zones</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-green-600 mb-2">50%+</div>
                      <p className="text-gray-700">of veterans with TBI also experience chronic migraines</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm">
                      <div className="text-3xl font-bold text-orange-600 mb-2">Top 5</div>
                      <p className="text-gray-700">Migraines rank in the top 5 conditions for VA disability claims</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp"
                alt="Veterans receiving care"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
            </section>

            {/* Section 2: VA Disability */}
            <section ref={(el) => sectionsRef.current['va-disability'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">VA Disability for Migraines</h2>
              
              <p className="mb-6">
                The VA recognizes migraines as a potentially disabling condition for veterans. Understanding how to navigate <strong>VA disability for migraines</strong> is crucial for accessing proper care and compensation.
              </p>

              <Card className="bg-green-50 border-green-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">VA Disability Ratings for Migraines</h3>
                  <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">50%</div>
                        <div className="text-gray-700">
                          <strong>Severe:</strong> Very frequent completely prostrating and prolonged attacks productive of severe economic inadaptability
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">30%</div>
                        <div className="text-gray-700">
                          <strong>Moderately Severe:</strong> Characteristic prostrating attacks occurring on average once a month over last several months
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <div className="font-bold text-[#572670] text-lg">10%</div>
                        <div className="text-gray-700">
                          <strong>Moderate:</strong> With characteristic prostrating attacks occurring on average once every 2 months
                        </div>
                      </div>
                    </div>
                    <div className="bg-white rounded-lg p-4">
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
            </section>

            {/* Section 3: Comorbidity */}
            <section ref={(el) => sectionsRef.current['comorbidity'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Complex Connection: Migraines, PTSD, and Depression</h2>
              
              <p className="mb-6">
                One of the most critical aspects of understanding migraines in veterans is recognizing their comorbidity with mental health conditions. These conditions often exist together and can exacerbate each other, creating a challenging cycle.
              </p>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp"
                alt="Treatment options"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="grid md:grid-cols-3 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Migraines and PTSD</h4>
                    <p className="text-sm text-gray-600">Veterans with PTSD are 3-5 times more likely to experience migraines</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Migraines and Depression</h4>
                    <p className="text-sm text-gray-600">Depression is 2-4 times more common in people with migraines</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2 text-[#572670]">Migraines and TBI</h4>
                    <p className="text-sm text-gray-600">Over 50% of veterans with TBI experience chronic migraines</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: How TMS Helps */}
            <section ref={(el) => sectionsRef.current['how-tms-helps'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Helps with Migraines</h2>
              
              <p className="mb-6">
                TMS offers a fundamentally different approach to migraine treatment by addressing the neurological dysfunction that underlies both migraines and comorbid mental health conditions.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-4">TMS Mechanisms for Migraine Relief</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#572670] pl-6">
                      <h4 className="font-bold mb-2">Cortical Excitability Regulation</h4>
                      <p className="text-gray-700">TMS normalizes abnormal cortical excitability that underlies migraine susceptibility</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="font-bold mb-2">Neurotransmitter Modulation</h4>
                      <p className="text-gray-700">TMS influences serotonin, dopamine, and other neurotransmitters involved in both migraines and mood disorders</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="font-bold mb-2">Pain Processing Normalization</h4>
                      <p className="text-gray-700">TMS modulates pain perception pathways in the brain</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-6">
                      <h4 className="font-bold mb-2">Addressing Comorbid Conditions</h4>
                      <p className="text-gray-700">Unlike traditional treatments, TMS can simultaneously treat depression, anxiety, and PTSD</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Clinical Benefits */}
            <section ref={(el) => sectionsRef.current['clinical-benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Clinical Benefits and Research</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
                alt="TMS therapy"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Research Findings</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>40-60% reduction in monthly migraine days</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Significant decrease in pain intensity</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Reduced medication dependence</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Improved quality of life</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Better sleep quality</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Improvement in comorbid conditions</span>
                      </div>
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
                  Ready to Find Relief from Chronic Migraines?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Join the veterans who have found lasting relief with TMS therapy. Our team is ready to help you reclaim your life.
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

export default TMSMigraineVeteransBlogPostPage;
