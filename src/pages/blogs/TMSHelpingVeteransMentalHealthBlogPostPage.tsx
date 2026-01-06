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

const TMSHelpingVeteransMentalHealthBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'mental-health-crisis', label: 'Veterans Mental Health Crisis' },
    { id: 'how-tms-works', label: 'How TMS Works' },
    { id: 'conditions-treated', label: 'Conditions Treated' },
    { id: 'success-rates', label: 'Success Rates' },
    { id: 'treatment-benefits', label: 'Treatment Benefits' },
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
      question: 'How is TMS helping veterans with treatment-resistant conditions?',
      answer: 'TMS is revolutionizing care for veterans with treatment-resistant depression, PTSD, and anxiety by directly targeting brain regions affected by trauma and mental health conditions. Unlike medications that affect the entire body, TMS provides precise, non-invasive brain stimulation that helps restore normal neural activity. Studies show that 50-60% of veterans who haven\'t responded to traditional treatments experience significant improvement with TMS.'
    },
    {
      question: 'What mental health challenges do veterans face that TMS can address?',
      answer: 'TMS therapy effectively addresses multiple mental health challenges common in veterans including treatment-resistant depression, PTSD, anxiety disorders, panic disorder, and co-occurring conditions. Many veterans experience complex mental health issues stemming from combat exposure, military sexual trauma, or the stress of transitioning to civilian life. TMS offers hope when traditional treatments haven\'t been successful.'
    },
    {
      question: 'How long does it take to see results from TMS therapy?',
      answer: 'Most veterans begin noticing improvements within 2-3 weeks of starting TMS treatment. A typical treatment course lasts 4-6 weeks with daily sessions Monday through Friday. Each session takes only 20-40 minutes, and veterans can immediately return to normal activities. The full benefits of TMS continue to build even after treatment concludes.'
    },
    {
      question: 'Is TMS therapy covered for veterans?',
      answer: 'Many VA hospitals now offer TMS therapy for eligible veterans with treatment-resistant depression and PTSD. Private insurance, including TRICARE, often covers TMS when deemed medically necessary. Veterans seeking treatment at private facilities like KarmaTMS can work with our team to verify insurance coverage and explore payment options.'
    },
    {
      question: 'Can TMS help with combat-related trauma?',
      answer: 'Yes, TMS has shown significant promise in treating combat-related PTSD and trauma. The therapy helps regulate the overactive fear response common in combat veterans and strengthens neural pathways involved in emotional regulation. Veterans with combat-related trauma often experience reduced flashbacks, better sleep, decreased hypervigilance, and improved emotional control after TMS treatment.'
    },
    {
      question: 'What makes TMS different from other treatments for veterans?',
      answer: 'TMS stands out because it\'s non-invasive, drug-free, and targets specific brain regions without affecting the entire body. Veterans can avoid medication side effects like weight gain, sexual dysfunction, and cognitive fog. There\'s no downtime, no anesthesia, and no surgery required. Many veterans appreciate that TMS offers a fresh approach when other treatments haven\'t worked.'
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
      title: 'Inside the VA & Veterans\' Mental Health',
      excerpt: 'Educational guide explaining the relationship between VA programs and TMS therapy.',
      link: '/blog/va-veterans-ptsd-tms-treatment',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp'
    },
    {
      title: 'Understanding PTSD in Veterans',
      excerpt: 'A comprehensive guide to recognizing PTSD in war veterans with modern treatment options.',
      link: '/blogs/understanding-ptsd-veterans',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/02c362bd-cde2-431d-8820-a07a14939638.webp'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How TMS is helping Veterans Address Mental Health Challenges?',
    description: 'Discover how TMS therapy is revolutionizing mental health treatment for veterans, addressing PTSD, depression, and anxiety with non-invasive brain stimulation technology.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp',
    author: {
      '@type': 'Person',
      name: 'KarmatmsAdmin',
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
    datePublished: '2025-08-11',
    dateModified: '2025-08-11',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/tms-helping-veterans-mental-health'
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
        title="How TMS is helping Veterans Address Mental Health Challenges?"
        description="Discover how TMS therapy is revolutionizing mental health treatment for veterans. Learn about success rates, conditions treated, and why veterans are choosing TMS for PTSD, depression, and anxiety."
        keywords="tms for veterans, tms therapy mental health, veterans mental health treatment, tms ptsd treatment, tms depression veterans, non-invasive brain stimulation, treatment-resistant depression veterans"
        canonical="/blogs/tms-helping-veterans-mental-health"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'TMS Helping Veterans Mental Health', url: '/blogs/tms-helping-veterans-mental-health' }
        ]}
      />

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
                <BreadcrumbPage>TMS Helping Veterans Mental Health</BreadcrumbPage>
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
                August 11, 2025
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                10 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                KarmatmsAdmin
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              How TMS is helping Veterans Address Mental Health Challenges?
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Exploring how Transcranial Magnetic Stimulation is transforming mental health care for America's veterans
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/f00dd3f4-cea1-4918-8fec-5976198e195f.webp"
                alt="TMS therapy helping veterans with mental health challenges"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              <p className="text-xl text-gray-700 leading-relaxed">
                America's veterans face unique mental health challenges stemming from combat exposure, military service stress, and the difficult transition to civilian life. While traditional treatments like therapy and medication help many, a growing number of veterans are finding new hope through <strong>Transcranial Magnetic Stimulation (TMS) therapy</strong>. This innovative, non-invasive treatment is transforming how we address veteran mental health, offering relief for those who haven't responded to conventional approaches.
              </p>
            </div>

            {/* Section 1: Mental Health Crisis */}
            <section ref={(el) => sectionsRef.current['mental-health-crisis'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Veterans Mental Health Crisis</h2>
              
              <p className="mb-4">
                The statistics are sobering: according to the Department of Veterans Affairs, approximately <strong>20 veterans die by suicide every day</strong>. Mental health conditions affect millions of veterans, with PTSD, depression, and anxiety being the most prevalent. These conditions don't just impact the veterans themselves—they affect families, communities, and society as a whole.
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Mental Health Challenges Facing Veterans</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span><strong>PTSD:</strong> Up to 30% of combat veterans experience PTSD</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span><strong>Depression:</strong> Twice as common in veterans as civilians</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span><strong>Anxiety:</strong> Affects nearly 20% of veterans</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span><strong>Substance Use:</strong> Often develops as self-medication for mental health symptoms</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-1 flex-shrink-0" />
                      <span><strong>Co-occurring Conditions:</strong> Many veterans struggle with multiple mental health issues simultaneously</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <p className="mb-6">
                Traditional treatments, while helpful for many, leave a significant portion of veterans without adequate relief. This is where TMS therapy is making a crucial difference.
              </p>
            </section>

            {/* Section 2: How TMS Works */}
            <section ref={(el) => sectionsRef.current['how-tms-works'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How TMS Works for Veterans</h2>
              
              <p className="mb-6">
                <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> uses magnetic pulses to stimulate specific brain regions affected by mental health conditions. For veterans, this targeted approach addresses the neurological changes that occur due to trauma, combat stress, and service-related conditions.
              </p>

              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
                alt="TMS therapy equipment"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Science Behind TMS</h3>
              
              <p className="mb-4">
                Combat and military trauma can alter brain function, particularly in areas responsible for mood regulation, fear response, and emotional processing. TMS helps by:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Stimulating underactive regions of the prefrontal cortex</li>
                <li>Regulating the overactive amygdala (fear center)</li>
                <li>Promoting neuroplasticity and healthy brain connectivity</li>
                <li>Increasing production of mood-regulating neurotransmitters</li>
                <li>Helping restore normal brain activity patterns disrupted by trauma</li>
              </ul>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Why TMS Works When Other Treatments Don't</p>
                  <p className="text-gray-700">
                    Unlike medications that affect the entire body or therapy that requires reliving trauma, TMS directly addresses the neurological dysfunction at its source. This makes it particularly effective for veterans with treatment-resistant conditions who haven't found relief through traditional approaches.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Conditions Treated */}
            <section ref={(el) => sectionsRef.current['conditions-treated'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Conditions TMS Treats in Veterans</h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">PTSD & Trauma</h4>
                    <p className="text-gray-700 mb-3">
                      TMS helps reduce flashbacks, nightmares, hypervigilance, and emotional numbing associated with combat trauma.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Decreased intrusive memories</li>
                      <li>• Improved sleep quality</li>
                      <li>• Reduced startle response</li>
                      <li>• Better emotional regulation</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Treatment-Resistant Depression</h4>
                    <p className="text-gray-700 mb-3">
                      When antidepressants fail, TMS offers a drug-free alternative with proven effectiveness.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• No medication side effects</li>
                      <li>• 50-60% response rate</li>
                      <li>• Long-lasting relief</li>
                      <li>• Improved daily functioning</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Anxiety Disorders</h4>
                    <p className="text-gray-700 mb-3">
                      TMS calms the overactive neural circuits responsible for chronic anxiety and panic.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Reduced panic attacks</li>
                      <li>• Decreased constant worry</li>
                      <li>• Improved social functioning</li>
                      <li>• Better stress management</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-3">Co-occurring Conditions</h4>
                    <p className="text-gray-700 mb-3">
                      Many veterans have multiple conditions; TMS can address several simultaneously.
                    </p>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Depression + PTSD</li>
                      <li>• Anxiety + Depression</li>
                      <li>• TBI-related symptoms</li>
                      <li>• Chronic pain + depression</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Success Rates */}
            <section ref={(el) => sectionsRef.current['success-rates'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Success Rates and Outcomes for Veterans</h2>
              
              <p className="mb-6">
                The evidence supporting TMS therapy for veterans is compelling. Clinical studies and real-world data show significant improvements across multiple measures.
              </p>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Clinical Success Rates</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-gradient-to-br from-green-50 to-transparent rounded-lg">
                      <div className="text-4xl font-bold text-green-600 mb-2">50-60%</div>
                      <div className="text-sm text-gray-700">Significant symptom improvement</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-transparent rounded-lg">
                      <div className="text-4xl font-bold text-blue-600 mb-2">30-35%</div>
                      <div className="text-sm text-gray-700">Complete remission achieved</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-transparent rounded-lg">
                      <div className="text-4xl font-bold text-purple-600 mb-2">75%</div>
                      <div className="text-sm text-gray-700">Report improved quality of life</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">What Veterans Report</h3>
              <p className="mb-4">Veterans who complete TMS therapy commonly report:</p>
              
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Significant reduction in PTSD flashbacks and nightmares</li>
                <li>Improved mood and decreased depression symptoms</li>
                <li>Better sleep quality and duration</li>
                <li>Reduced anxiety and panic episodes</li>
                <li>Enhanced ability to connect with family and friends</li>
                <li>Improved work performance and daily functioning</li>
                <li>Decreased reliance on medications</li>
                <li>Better emotional regulation and stress management</li>
              </ul>
            </section>

            {/* Section 5: Treatment Benefits */}
            <section ref={(el) => sectionsRef.current['treatment-benefits'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Why Veterans Choose TMS Therapy</h2>
              
              <p className="mb-6">
                Beyond clinical effectiveness, TMS offers several advantages that make it particularly appealing to veterans.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">No Medication Side Effects</h4>
                    <p className="text-sm text-gray-600">Avoid weight gain, sexual dysfunction, cognitive fog, and other medication side effects that impact quality of life.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Non-Invasive Treatment</h4>
                    <p className="text-sm text-gray-600">No surgery, no anesthesia, no recovery time. Resume normal activities immediately after each session.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Short Treatment Sessions</h4>
                    <p className="text-sm text-gray-600">Each session takes only 20-40 minutes, making it easy to fit into busy schedules with work and family commitments.</p>
                  </CardContent>
                </Card>
                
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Evidence-Based Approach</h4>
                    <p className="text-sm text-gray-600">FDA-cleared treatment backed by extensive research and proven effectiveness in veteran populations.</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">KarmaTMS Veterans Program</h3>
                  <p className="mb-4">
                    At <Link to="/veterans" className="text-[#572670] hover:underline font-medium">KarmaTMS</Link>, we understand the unique needs of veterans. Our specialized program offers:
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Priority scheduling and flexible appointment times</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Trauma-informed care from experienced providers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Insurance verification assistance including TRICARE</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Coordination with VA care when needed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>State-of-the-art equipment and latest treatment protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="KarmatmsAdmin"
              role="Content Team at KarmaTMS"
              bio="The KarmaTMS content team is dedicated to providing veterans and their families with accurate, helpful information about mental health treatment options. We work closely with our clinical staff to ensure all content reflects the latest research and best practices in TMS therapy."
              image="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png"
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
                  Ready to Explore TMS Therapy?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Join the veterans who are finding relief and reclaiming their lives with TMS therapy. Our team is ready to answer your questions and help you get started.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/veterans">Learn More About Veterans Program</Link>
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
                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
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

export default TMSHelpingVeteransMentalHealthBlogPostPage;
