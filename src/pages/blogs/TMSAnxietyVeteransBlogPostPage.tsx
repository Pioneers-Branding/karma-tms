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

export default function TMSAnxietyVeteransBlogPostPage() {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef({});

  const publishDate = '2025-10-27';
  const author = {
    name: 'Dr. Keerthy Sunder',
    credentials: 'MD, Board-Certified Psychiatrist',
    image: 'https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg',
    bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy and treatment-resistant mental health conditions. With extensive experience treating veterans, Dr. Sunder is dedicated to providing innovative, evidence-based care to those who have served our country.'
  };

  const tocItems = [
  { id: 'understanding-anxiety', label: 'Understanding Anxiety in Veterans' },
  { id: 'standalone-disorder', label: 'Anxiety as a Standalone Disorder' },
  { id: 'recognizing-anxiety', label: 'Recognizing Anxiety in Veterans' },
  { id: 'va-support', label: 'VA Anxiety Support and Resources' },
  { id: 'how-tms-works', label: 'How TMS Works for Anxiety' },
  { id: 'brain-regulation', label: 'Brain Regulation Through TMS' },
  { id: 'treatment-benefits', label: 'Benefits of TMS for Veterans' },
  { id: 'faqs', label: 'Frequently Asked Questions' }];


  const faqs = [
  {
    question: 'Can TMS therapy help with veteran anxiety disorders?',
    answer: 'Yes, TMS therapy has shown significant effectiveness in treating various anxiety disorders in veterans. Clinical studies demonstrate that 60-70% of patients show significant anxiety reduction, with over 50% achieving remission of anxiety symptoms. TMS works by targeting specific brain regions involved in anxiety regulation, offering relief without the systemic side effects of medications.'
  },
  {
    question: 'How does TMS for anxiety differ from traditional medication?',
    answer: 'Unlike medications that work systemically throughout the body and often cause side effects like weight gain or sexual dysfunction, TMS provides targeted brain stimulation to anxiety centers. TMS promotes lasting neuroplastic changes without requiring daily pills, and many veterans experience sustained improvement after completing treatment without ongoing medication.'
  },
  {
    question: 'Is TMS covered by VA benefits for anxiety treatment?',
    answer: 'TMS is increasingly available through VA facilities for veterans with treatment-resistant depression, and coverage is expanding for anxiety disorders. Veterans should check with their local VA facility about TMS availability. Many private TMS providers like Karma TMS also work with veterans to explore coverage options and payment plans.'
  },
  {
    question: 'What types of anxiety disorders can TMS treat in veterans?',
    answer: 'TMS has shown effectiveness for various anxiety disorders including Generalized Anxiety Disorder (GAD), Panic Disorder, Social Anxiety Disorder, and anxiety that occurs independently from PTSD. The treatment can be particularly beneficial for veterans with treatment-resistant anxiety who haven\'t found relief through traditional medications or therapy alone.'
  },
  {
    question: 'How long does it take to see results from TMS for anxiety?',
    answer: 'Most veterans begin noticing improvements within 3-4 weeks of starting TMS treatment. A typical treatment course lasts 4-6 weeks with daily sessions (5 days per week), and improvements often continue after treatment completion as the brain continues to benefit from the neuroplastic changes induced by TMS.'
  },
  {
    question: 'Can TMS be combined with other anxiety treatments?',
    answer: 'Yes, TMS can be effectively combined with therapy (such as Cognitive Behavioral Therapy), reduced medication doses, or other treatments. Many veterans find that TMS enhances the effectiveness of therapy and allows them to reduce or eliminate anxiety medications over time. This comprehensive approach often provides the best outcomes.'
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
    headline: 'TMS for Anxiety in Veterans: A Promising Path Beyond Medication',
    description: 'Discover how TMS therapy helps veterans with anxiety beyond traditional medication. Learn about VA anxiety support and brain regulation through TMS.',
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
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_6_z1bbda.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.karmatms.com/blogs/tms-anxiety-veterans'
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
        title="TMS for Anxiety in Veterans: Beyond Medication Treatment | Karma TMS"
        description="Learn how TMS therapy helps veterans with anxiety disorders. Discover how brain stimulation regulates anxiety centers beyond traditional medication. VA anxiety support available."
        keywords="va anxiety, veteran anxiety, veterans with anxiety, anxiety for veterans, TMS for anxiety, veteran anxiety treatment, anxiety disorder veterans"
        canonicalUrl="https://www.karmatms.com/blogs/tms-anxiety-veterans" />


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
                10 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                {author.name}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              TMS for Anxiety in Veterans: A Promising Path Beyond Medication
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Discover how brain regulation through TMS offers lasting relief from anxiety without medication side effects
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png"
                alt="TMS for Anxiety in Veterans"
                className="w-full  object-cover rounded-lg mb-6" />

            </div>

            {/* Section 1: Understanding Anxiety */}
            <section ref={(el) => sectionsRef.current['understanding-anxiety'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Anxiety in Veterans</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Anxiety disorders affect millions of veterans, often as a standalone condition separate from PTSD. While many associate veteran mental health primarily with combat-related PTSD, veteran anxiety can manifest independently and requires specialized attention and treatment.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For veterans with anxiety who haven't found relief through traditional treatments, Transcranial Magnetic Stimulation (TMS) offers a promising alternative path—one that works by directly regulating the brain's anxiety centers without the side effects of medication.
              </p>
            </section>

            {/* Section 2: Standalone Disorder */}
            <section ref={(el) => sectionsRef.current['standalone-disorder'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Anxiety as a Standalone Disorder in Veterans</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    While often discussed alongside PTSD, anxiety disorders can occur independently in veterans. The stress of military service, transitions to civilian life, and ongoing life challenges can trigger various anxiety conditions.
                  </p>
                  <h3 className="text-2xl font-bold text-[#572670] mb-4">Common Anxiety Disorders in Veterans:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#572670] pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Generalized Anxiety Disorder (GAD)</h4>
                      <p className="text-gray-700">Persistent, excessive worry about various aspects of life including health, finances, work, and family.</p>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Panic Disorder</h4>
                      <p className="text-gray-700">Recurrent, unexpected panic attacks with intense physical symptoms and fear of future attacks.</p>
                    </div>
                    <div className="border-l-4 border-green-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Social Anxiety Disorder</h4>
                      <p className="text-gray-700">Intense fear of social situations, particularly common during the transition from military to civilian life.</p>
                    </div>
                    <div className="border-l-4 border-yellow-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">Specific Phobias</h4>
                      <p className="text-gray-700">Intense fear of specific objects or situations, which may develop or worsen during service.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Recognizing Anxiety */}
            <section ref={(el) => sectionsRef.current['recognizing-anxiety'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Recognizing Anxiety in Veterans</h2>
              


              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#572670] mb-4">Physical Symptoms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Rapid heartbeat or palpitations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Sweating and trembling</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Shortness of breath</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Muscle tension and headaches</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Fatigue and sleep disturbances</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Gastrointestinal issues</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-blue-600 mb-4">Psychological Symptoms</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Excessive worry or fear</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Difficulty concentrating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Restlessness or feeling on edge</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Irritability</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Sense of impending doom</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span>Avoidance of certain situations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: VA Support */}
            <section ref={(el) => sectionsRef.current['va-support'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">VA Anxiety Support and Resources</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Department of Veterans Affairs (VA) recognizes anxiety disorders as a significant health concern for veterans and offers various support services:
              </p>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">VA Benefits for Anxiety:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Disability Compensation:</strong> Veterans can receive disability ratings for anxiety disorders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Mental Health Services:</strong> Access to psychiatrists, psychologists, and therapists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Evidence-Based Treatments:</strong> Cognitive Behavioral Therapy (CBT) and other proven interventions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Medication Management:</strong> Access to anxiety medications through VA pharmacies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>Crisis Support:</strong> 24/7 Veterans Crisis Line (988, then press 1)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span><strong>TMS Therapy:</strong> Growing availability of TMS treatment at select VA facilities</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: How TMS Works */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Works for Anxiety</h2>
             


              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Transcranial Magnetic Stimulation (TMS) is a non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain involved in mood regulation and anxiety processing.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#572670] mb-6">The Science Behind TMS for Anxiety</h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-[#572670] pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Targeting Anxiety Centers</h4>
                      <p className="text-gray-700 mb-2">
                        TMS targets the dorsolateral prefrontal cortex (DLPFC) and other brain regions involved in:
                      </p>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Emotional regulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Fear response modulation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Worry and rumination control</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Stress response management</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">Neuroplasticity and Healing</h4>
                      <p className="text-gray-700">
                        By repeatedly stimulating these areas, TMS promotes neuroplasticity—the brain's ability to form new neural connections and pathways. This helps "retrain" the brain's anxiety response, leading to lasting improvements.
                      </p>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-3">The Treatment Process</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Sessions last 20-40 minutes</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Typically 5 days per week for 4-6 weeks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>No anesthesia or sedation required</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Return to normal activities immediately after</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Minimal to no side effects</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 6: Brain Regulation */}
            <section ref={(el) => sectionsRef.current['brain-regulation'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Brain Regulation Through TMS: Beyond Symptom Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Unlike medications that work systemically throughout the body, TMS offers targeted brain regulation:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <Card className="border-l-4 border-red-400">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Medication Approach</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>Systemic side effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>Weight gain, sexual dysfunction</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>Dependency concerns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>Trial and error process</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-red-500 mt-1 text-lg">✗</span>
                        <span>Daily pill requirements</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500 bg-gradient-to-br from-green-50 to-blue-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">TMS Approach</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>Targeted brain stimulation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>Minimal side effects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>No systemic medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>Promotes lasting brain changes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-green-500 mt-1 text-lg">✓</span>
                        <span>Non-invasive and well-tolerated</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 7: Treatment Benefits */}
            <section ref={(el) => sectionsRef.current['treatment-benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Benefits of TMS for Veterans with Anxiety</h2>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">1. No Systemic Side Effects</h3>
                    <p className="text-gray-700">
                      TMS doesn't cause weight gain, sexual dysfunction, or the cognitive fog often associated with anxiety medications. This is particularly important for veterans returning to work or education.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">2. Effective for Treatment-Resistant Anxiety</h3>
                    <p className="text-gray-700">
                      Studies show TMS can be effective even when multiple medications have failed, offering new hope for veterans who haven't found relief through traditional treatments.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">3. Can Be Combined with Other Treatments</h3>
                    <p className="text-gray-700">
                      TMS can be used alongside therapy, reduced medication doses, or other interventions, providing a comprehensive treatment approach.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-yellow-500">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">4. Lasting Results</h3>
                    <p className="text-gray-700">
                      Rather than requiring daily pills, TMS promotes lasting changes in brain function, with many patients experiencing sustained improvement after treatment completion.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-blue-50 border-[#572670]/20 mt-8">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-[#572670] mb-6">Clinical Evidence:</h3>
                  <div className="grid md:grid-cols-3 gap-6">
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
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200 mt-6">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-[#572670] mb-3">What Veterans Report:</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Reduced frequency and intensity of anxiety attacks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Improved ability to manage stressful situations</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Better sleep quality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Enhanced concentration and focus</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Greater engagement in daily activities and relationships</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Reduced reliance on anti-anxiety medications</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Getting Started Section */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Getting Started with TMS for Anxiety</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">The Process at Karma TMS:</h3>
                  <ol className="space-y-4">
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Initial Consultation</h4>
                        <p className="text-gray-700 text-sm">Comprehensive evaluation of your anxiety symptoms and treatment history</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Brain Mapping</h4>
                        <p className="text-gray-700 text-sm">Precise identification of treatment targets using advanced technology</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Personalized Treatment Plan</h4>
                        <p className="text-gray-700 text-sm">Customized TMS protocol designed for your specific needs</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Treatment Sessions</h4>
                        <p className="text-gray-700 text-sm">Regular TMS sessions over 4-6 weeks</p>
                      </div>
                    </li>
                    <li className="flex gap-4">
                      <span className="flex-shrink-0 w-8 h-8 bg-[#572670] text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Ongoing Support</h4>
                        <p className="text-gray-700 text-sm">Regular monitoring and follow-up care</p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">A New Path Forward for Veterans with Anxiety</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                For veterans with anxiety, TMS represents more than just another treatment option—it's a fundamentally different approach that addresses the root neurological causes of anxiety rather than just masking symptoms.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                By directly regulating the brain's anxiety centers through targeted magnetic stimulation, TMS offers veterans a path to lasting relief without the burden of daily medications and their side effects.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you're a veteran struggling with anxiety—whether generalized anxiety, panic disorder, or social anxiety—and traditional treatments haven't provided the relief you deserve, TMS therapy may be the answer you've been looking for.
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
                  Break Free from Anxiety with TMS Therapy
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Discover how TMS can help you overcome anxiety without the side effects of medication. Specialized care for veterans at Karma TMS.
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
                  Proudly serving veterans in Palm Springs, Twentynine Palms, and surrounding communities
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