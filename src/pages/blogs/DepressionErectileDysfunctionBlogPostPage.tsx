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

const DepressionErectileDysfunctionBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'understanding-connection', label: 'Understanding the Connection' },
    { id: 'biological-factors', label: 'Biological Factors' },
    { id: 'psychological-impact', label: 'Psychological Impact' },
    { id: 'medication-effects', label: 'Medication Effects' },
    { id: 'treatment-options', label: 'Treatment Options' },
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
      question: 'Can depression alone cause erectile dysfunction?',
      answer: 'Yes, depression can directly cause erectile dysfunction through multiple mechanisms. Depression affects neurotransmitters like serotonin and dopamine that regulate sexual desire and arousal. It also impacts energy levels, self-esteem, and emotional connection—all crucial for healthy sexual function.'
    },
    {
      question: 'Will treating my depression improve erectile dysfunction?',
      answer: 'In many cases, yes. Studies show that effectively treating depression often leads to significant improvements in sexual function. However, it\'s important to work with your healthcare provider to find treatments that address both conditions, as some antidepressants can worsen ED symptoms.'
    },
    {
      question: 'How does TMS therapy help with depression-related ED?',
      answer: 'TMS therapy treats depression without the sexual side effects commonly associated with antidepressants. By addressing the root cause of depression through brain stimulation, TMS can improve both mood and sexual function naturally, without medication-induced ED.'
    },
    {
      question: 'Is erectile dysfunction from depression permanent?',
      answer: 'No, erectile dysfunction caused by depression is typically not permanent. When depression is effectively treated, sexual function usually improves. The timeline varies by individual, but many men notice improvements within weeks to months of starting effective depression treatment.'
    },
    {
      question: 'Should I talk to my doctor about both depression and ED?',
      answer: 'Absolutely. Open communication with your healthcare provider about both conditions is essential for effective treatment. Many men feel embarrassed discussing ED, but it\'s a common medical concern that deserves professional attention, especially when linked to depression.'
    },
    {
      question: 'Can lifestyle changes help with both conditions?',
      answer: 'Yes, lifestyle modifications can benefit both depression and ED. Regular exercise, healthy diet, adequate sleep, stress management, and limiting alcohol can improve mood, energy, and sexual function. These changes work synergistically with professional treatment.'
    }
  ];

  const relatedPosts = [
    {
      title: 'How TMS Therapy Helps Veterans Heal',
      excerpt: 'Discover how TMS therapy offers veterans new hope for PTSD, depression, and anxiety.',
      link: '/blog/veterans-tms-therapy',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763036078/0_zutd9g.png'
    },
    {
      title: 'TMS vs Medication for Depression',
      excerpt: 'Compare TMS therapy and medication for depression treatment.',
      link: '/blog/tms-vs-medication-veterans-depression',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033665/3_zl830g.png'
    },
    {
      title: 'Is TMS Therapy Permanent?',
      excerpt: 'Explore the long-term effectiveness of TMS therapy for lasting relief.',
      link: '/blog/is-tms-therapy-permanent',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/13_nl6y75.png'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Understanding the Complex Connection between Depression and Erectile Dysfunction',
    description: 'Comprehensive guide exploring the bidirectional relationship between depression and erectile dysfunction, including biological factors, treatment options, and how TMS therapy can help both conditions.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp',
    author: {
      '@type': 'Person',
      name: 'karmatmsdev'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2024-10-24',
    dateModified: '2024-10-24',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/depression-erectile-dysfunction'
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
        title="Understanding the Complex Connection between Depression and Erectile Dysfunction"
        description="Explore the bidirectional relationship between depression and erectile dysfunction. Learn about biological factors, psychological impact, medication effects, and comprehensive treatment options including TMS therapy."
        keywords="depression erectile dysfunction, ED and depression, mental health sexual dysfunction, depression treatment ED, TMS therapy for depression, sexual side effects antidepressants"
        canonical="/blogs/depression-erectile-dysfunction"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Depression and Erectile Dysfunction', url: '/blogs/depression-erectile-dysfunction' }
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
                <BreadcrumbPage>Depression and Erectile Dysfunction</BreadcrumbPage>
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
                October 24, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                15 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatmsdev
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Understanding the Complex Connection between Depression and Erectile Dysfunction
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Exploring the bidirectional relationship and comprehensive treatment approaches for both conditions
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/2ddc8d69-b09a-4f1d-bd47-6d783ceefbd1.webp"
                alt="Depression and erectile dysfunction connection"
                className="w-full object-cover rounded-lg mb-6"
              />

              <p className="text-xl text-gray-700 leading-relaxed">
                The relationship between depression and erectile dysfunction (ED) is far more complex than many people realize. These two conditions often coexist, creating a cyclical pattern where each exacerbates the other. Understanding this connection is crucial for effective treatment and recovery. Whether depression leads to ED, or ED triggers depression, addressing both conditions simultaneously offers the best path forward.
              </p>
            </div>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current['understanding-connection'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding the Bidirectional Connection</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">The Two-Way Street</p>
                  <p className="text-gray-700">
                    Depression can cause erectile dysfunction, and erectile dysfunction can lead to or worsen depression. This bidirectional relationship creates a challenging cycle that requires comprehensive treatment addressing both conditions.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                Research indicates that men with <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link> are significantly more likely to experience ED than those without depression. Studies show the prevalence of ED in depressed men ranges from 35-90%, compared to just 5-10% in the general population.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Depression → ED</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Decreased libido and sexual interest</li>
                      <li>• Reduced energy and motivation</li>
                      <li>• Neurochemical imbalances</li>
                      <li>• Hormonal changes</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">ED → Depression</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Loss of self-esteem and confidence</li>
                      <li>• Relationship strain and anxiety</li>
                      <li>• Social withdrawal</li>
                      <li>• Feelings of inadequacy</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current['biological-factors'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Biological Factors Linking Depression and ED</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Neurotransmitter Imbalances</h3>
              <p className="mb-4">
                Both depression and sexual function are regulated by neurotransmitters—chemical messengers in the brain. Depression disrupts the balance of key neurotransmitters:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Serotonin:</strong> While low serotonin contributes to depression, elevated serotonin levels (often from antidepressants) can inhibit sexual arousal and orgasm.</li>
                <li><strong>Dopamine:</strong> This "pleasure chemical" is crucial for both mood and sexual desire. Depression reduces dopamine activity, decreasing libido and erectile response.</li>
                <li><strong>Norepinephrine:</strong> Essential for arousal and maintaining erections, this neurotransmitter is often dysregulated in depression.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Hormonal Changes</h3>
              <p className="mb-4">
                Depression affects the endocrine system, leading to hormonal imbalances that impact sexual function:
              </p>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Testosterone and Depression</p>
                  <p className="text-gray-700">
                    Chronic depression can lower testosterone levels, which are essential for sexual desire and erectile function. Low testosterone also worsens depressive symptoms, creating a reinforcing cycle. Some studies show that up to 25% of men with depression have low testosterone.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cardiovascular Impact</h3>
              <p className="mb-4">
                Depression affects cardiovascular health through multiple pathways, and since erections depend on healthy blood flow, this connection is significant:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Increased inflammation throughout the body</li>
                <li>Elevated cortisol levels damaging blood vessels</li>
                <li>Higher risk of atherosclerosis (arterial hardening)</li>
                <li>Reduced nitric oxide production (essential for erections)</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current['psychological-impact'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Psychological and Emotional Factors</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Anxiety</h3>
              <p className="mb-4">
                When depression-related ED occurs, many men develop performance anxiety—fear of failure that becomes a self-fulfilling prophecy. This anxiety triggers the body's stress response, releasing adrenaline that constricts blood vessels and makes erections even more difficult.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Decreased Self-Esteem</h3>
              <p className="mb-4">
                Both depression and ED severely impact self-esteem and masculinity. Men may feel:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Less attractive or desirable</li>
                <li>Inadequate as a partner</li>
                <li>Ashamed and embarrassed</li>
                <li>Isolated and alone with their struggle</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Relationship Strain</h3>
              <p className="mb-4">
                The combination of depression and ED often creates significant relationship challenges. Communication may break down, intimacy decreases, and partners may misinterpret symptoms as lack of attraction or emotional distance. This relationship stress further worsens both conditions.
              </p>
            </section>

            {/* Section 4 */}
            <section ref={(el) => sectionsRef.current['medication-effects'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Antidepressant Medications and Sexual Side Effects</h2>

              <p className="mb-6">
                One of the most challenging aspects of treating depression-related ED is that many antidepressants themselves cause sexual dysfunction. This creates a difficult dilemma: treating depression may help ED, but the medications used can make it worse.
              </p>

              <div className="bg-gradient-to-r from-amber-50 to-transparent p-6 rounded-lg border-l-4 border-amber-500 mb-6">
                <p className="font-medium mb-2">The SSRI Paradox</p>
                <p className="text-gray-700">
                  Selective Serotonin Reuptake Inhibitors (SSRIs), the most commonly prescribed antidepressants, cause sexual side effects in 40-80% of users. These include decreased libido, difficulty achieving erections, delayed orgasm, and reduced sexual satisfaction.
                </p>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Culprits</h3>
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Medications Most Likely to Cause ED:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>SSRIs:</strong> Sertraline, paroxetine, fluoxetine, citalopram</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>SNRIs:</strong> Venlafaxine, duloxetine</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                      <span><strong>Tricyclics:</strong> Amitriptyline, imipramine</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <p className="text-sm text-gray-600"><strong>Note:</strong> Never stop or change medications without consulting your healthcare provider.</p>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 5 */}
            <section ref={(el) => sectionsRef.current['treatment-options'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Comprehensive Treatment Approaches</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">TMS Therapy: Addressing Both Conditions</h3>
              <p className="mb-4">
                <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">Transcranial Magnetic Stimulation (TMS)</Link> offers a unique advantage in treating depression-related ED: it effectively treats depression without the sexual side effects of medications.
              </p>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">Why TMS Works for Both Conditions</p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Treats depression by stimulating underactive brain regions</li>
                    <li>• No sexual side effects, unlike antidepressants</li>
                    <li>• Can be used alongside other treatments</li>
                    <li>• Improves mood naturally, which enhances libido</li>
                    <li>• FDA-cleared with proven efficacy for depression</li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrated Treatment Strategies</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#572670] text-white flex items-center justify-center font-bold flex-shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">Psychological Counseling</h4>
                        <p className="text-gray-700">
                          Cognitive-behavioral therapy (CBT) addresses both depression and ED-related anxiety. Sex therapy can help couples navigate intimacy challenges and rebuild confidence.
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
                        <h4 className="font-bold text-lg mb-2">Lifestyle Modifications</h4>
                        <p className="text-gray-700">
                          Regular exercise improves mood, cardiovascular health, and testosterone levels. Healthy diet, adequate sleep, and stress reduction benefit both conditions significantly.
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
                        <h4 className="font-bold text-lg mb-2">Medication Optimization</h4>
                        <p className="text-gray-700">
                          If antidepressants are necessary, work with your doctor to find options with fewer sexual side effects (like bupropion or mirtazapine), or consider adding medications to counteract sexual dysfunction.
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
                        <h4 className="font-bold text-lg mb-2">ED-Specific Treatments</h4>
                        <p className="text-gray-700">
                          While addressing depression, ED medications (like sildenafil), vacuum devices, or other interventions may provide temporary support and help break the cycle of performance anxiety.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Importance of Open Communication</h3>
              <p className="mb-4">
                Discussing these sensitive topics with healthcare providers and partners is crucial. Many men suffer in silence due to embarrassment, but both depression and ED are common medical conditions that respond well to treatment when properly addressed.
              </p>
            </section>

            {/* Author Box */}
            <AuthorBox
              name="karmatmsdev"
              role="Mental Health Content Specialist at KarmaTMS"
              bio="Dedicated to providing evidence-based mental health information and resources. Our team works with medical professionals to deliver accurate, compassionate content on depression, anxiety, and innovative treatments like TMS therapy."
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
                  Ready to Address Both Depression and Sexual Health?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our comprehensive approach treats depression without compromising your sexual health. Schedule a consultation to learn more about TMS therapy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/tms-therapy">Learn About TMS</Link>
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
                      className="w-full object-cover"
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

export default DepressionErectileDysfunctionBlogPostPage;
