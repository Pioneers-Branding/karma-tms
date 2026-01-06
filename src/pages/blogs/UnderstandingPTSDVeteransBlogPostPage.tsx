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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Phone } from 'lucide-react';

export default function UnderstandingPTSDVeteransBlogPostPage() {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef({});

  const publishDate = '2025-10-20';
  const author = {
    name: 'Dr. Keerthy Sunder',
    credentials: 'MD, Board-Certified Psychiatrist',
    image: 'https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg',
    bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy and treatment-resistant mental health conditions. With extensive experience treating veterans, Dr. Sunder is dedicated to providing innovative, evidence-based care to those who have served our country.'
  };

  const tocItems = [
    { id: 'what-is-ptsd', label: 'What Is PTSD for Veterans?' },
    { id: 'what-ptsd-looks-like', label: 'What Does PTSD Look Like?' },
    { id: 'war-veterans', label: 'PTSD in War Veterans' },
    { id: 'recognition-diagnosis', label: 'Recognition and Diagnosis' },
    { id: 'treatment-paths', label: 'Treatment Paths' },
    { id: 'recovery-journey', label: 'The Recovery Journey' },
    { id: 'supporting-veterans', label: 'Supporting Veterans with PTSD' },
    { id: 'faqs', label: 'Frequently Asked Questions' }
  ];

  const faqs = [
    {
      question: 'What is PTSD for veterans and how is it different from civilian PTSD?',
      answer: 'PTSD for veterans is a mental health condition that develops after experiencing or witnessing traumatic combat events. Veteran PTSD often involves unique triggers related to combat experiences, such as loud noises, crowds, or authority figures. Veterans may also experience moral injury, survivor\'s guilt, and hypervigilance that stems specifically from military training and combat situations, making their PTSD experience distinct from civilian trauma.'
    },
    {
      question: 'What are the most common signs of PTSD in war veterans?',
      answer: 'Common signs include: recurrent nightmares or flashbacks of combat, hypervigilance and exaggerated startle response, avoidance of people or situations that remind them of service, emotional numbing or detachment from loved ones, difficulty sleeping, irritability or angry outbursts, difficulty concentrating, and survivor\'s guilt. These symptoms must last more than one month and significantly impact daily functioning to be diagnosed as PTSD.'
    },
    {
      question: 'How common is PTSD in Vietnam war veterans?',
      answer: 'Studies show that approximately 30% of Vietnam war veterans have experienced PTSD at some point in their lives. Vietnam vets face unique PTSD challenges due to the nature of guerrilla warfare, unclear enemy lines, and the difficult homecoming many experienced. Many Vietnam veterans dealt with delayed PTSD diagnosis and treatment, as understanding of the condition was less developed during and immediately after the war.'
    },
    {
      question: 'Can TMS therapy help veterans with PTSD?',
      answer: 'Yes, TMS (Transcranial Magnetic Stimulation) has shown significant promise for veterans with PTSD, especially those who haven\'t responded to traditional treatments. TMS uses non-invasive brain stimulation to target trauma-affected areas, helping regulate emotional processing and fear responses. It has no systemic side effects like medications and can be combined with therapy for enhanced results. Clinical research shows TMS is particularly effective for treatment-resistant PTSD.'
    },
    {
      question: 'When should a veteran seek help for PTSD symptoms?',
      answer: 'Veterans should seek professional help if symptoms last more than one month, interfere with work or relationships, include thoughts of self-harm, involve substance abuse as a coping mechanism, or cause an inability to control emotional responses. Early intervention is crucial for successful treatment. Remember: seeking help is a sign of strength, not weakness.'
    },
    {
      question: 'What are the most effective treatments for PTSD in veterans?',
      answer: 'Evidence-based treatments include: Cognitive Processing Therapy (CPT), Prolonged Exposure Therapy (PE), Eye Movement Desensitization and Reprocessing (EMDR), medications like SSRIs and SNRIs, and innovative options like TMS therapy. The most effective approach often combines therapy with other interventions. What works best varies by individual, so working with a specialized provider to find the right treatment combination is essential.'
    }
  ];

  const relatedPosts = [
    {
      title: 'VA Approves TMS for Veterans with PTSD',
      excerpt: 'Learn about VA coverage for TMS therapy and how to access this breakthrough treatment.',
      link: '/blogs/va-veterans-ptsd-tms',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&auto=format'
    },
    {
      title: 'TMS for Anxiety in Veterans',
      excerpt: 'Discover how TMS helps veterans manage anxiety beyond medication.',
      link: '/blogs/tms-anxiety-veterans',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format'
    },
    {
      title: 'TMS for Migraine Relief in Veterans',
      excerpt: 'Learn how TMS helps veterans with migraines and comorbid conditions.',
      link: '/blogs/tms-migraine-veterans',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&auto=format'
    }
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths',
    description: 'A comprehensive guide to understanding PTSD in war veterans, including Vietnam vets. Learn about signs, symptoms, and modern treatment paths including TMS therapy.',
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
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_2_ahwkma.png',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.karmatms.com/blogs/understanding-ptsd-veterans'
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
        title="Understanding PTSD in Veterans: Signs, Symptoms & Treatment | Karma TMS"
        description="Complete guide to PTSD in war veterans including Vietnam vets. Learn what PTSD looks like in veterans, common signs, symptoms, and effective treatment paths including TMS therapy."
        keywords="what is ptsd for veterans, what does ptsd look like in veterans, ptsd war veterans, ptsd war vets, ptsd vietnam vets, ptsd vietnam war veterans, veteran ptsd symptoms, ptsd treatment for veterans"
        canonicalUrl="https://www.karmatms.com/blogs/understanding-ptsd-veterans"
      />

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
                <BreadcrumbPage>Understanding PTSD in Veterans</BreadcrumbPage>
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
                October 20, 2025
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
              Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              A comprehensive guide to recognizing and treating PTSD in war veterans, including breakthrough TMS therapy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Schedule Free Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <a href="tel:760-449-8185" className="inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (760) 449-8185
                </a>
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
                      <Link to="/contact">Get Help Today</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/5_kvtlku.png"
                alt="Understanding PTSD in Veterans"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
            </div>

            {/* Section 1: What Is PTSD */}
            <section ref={(el) => (sectionsRef.current['what-is-ptsd'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What Is PTSD for Veterans?</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Post-Traumatic Stress Disorder (PTSD) is a mental health condition that develops after experiencing or witnessing traumatic events. For veterans, particularly war veterans including Vietnam vets, the experiences of combat, loss of fellow service members, and exposure to life-threatening situations can create lasting psychological impacts that manifest as PTSD.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Understanding what PTSD looks like in veterans is crucial for recognition, early intervention, and effective treatment. This comprehensive guide explores the signs, symptoms, and modern treatment paths available to help veterans reclaim their lives from the grip of trauma.
              </p>
            </section>

            {/* Section 2: What PTSD Looks Like */}
            <section ref={(el) => (sectionsRef.current['what-ptsd-looks-like'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What Does PTSD Look Like in Veterans?</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-8">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    PTSD in war veterans and war vets manifests in unique ways, often different from civilian PTSD. The combat experience creates specific triggers and symptoms that require specialized understanding.
                  </p>
                  <h3 className="text-2xl font-bold text-[#572670] mb-4">Core Symptom Clusters:</h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-[#572670] pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">1. Intrusive Memories</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Recurrent, unwanted memories of traumatic combat experiences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Flashbacks that feel like reliving the event</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Nightmares about war experiences</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                          <span>Severe emotional distress or physical reactions to reminders</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">2. Avoidance Behaviors</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Avoiding thoughts or conversations about service</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Staying away from places, people, or activities that trigger memories</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Emotional numbing and detachment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                          <span>Difficulty experiencing positive emotions</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-green-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">3. Negative Changes in Thinking and Mood</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Negative beliefs about oneself or the world</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Persistent guilt or shame (survivor's guilt)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Loss of interest in previously enjoyed activities</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Feeling detached from family and friends</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                          <span>Difficulty maintaining close relationships</span>
                        </li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-yellow-500 pl-6 bg-white rounded-r-lg p-4">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">4. Changes in Physical and Emotional Reactions</h4>
                      <ul className="space-y-2 text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                          <span>Hypervigilance and exaggerated startle response</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                          <span>Difficulty sleeping or concentrating</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                          <span>Irritability, angry outbursts, or aggressive behavior</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-yellow-600 mt-1 flex-shrink-0" />
                          <span>Overwhelming guilt or self-destructive behavior</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: War Veterans */}
            <section ref={(el) => (sectionsRef.current['war-veterans'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">PTSD in War Veterans: Special Considerations</h2>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0a00bae7-03d4-4867-b6ee-a18528b1c447.webp"
                alt="PTSD in war veterans"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
              />

              <Card className="border-l-4 border-[#572670] mb-6">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">PTSD in Vietnam War Veterans</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Vietnam vets face unique PTSD challenges. The Vietnam War created specific trauma patterns due to guerrilla warfare, unclear enemy lines, and the difficult homecoming many veterans experienced. Studies show that approximately 30% of Vietnam war veterans have experienced PTSD at some point in their lives.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern War Veterans</h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-4">
                    Veterans from Iraq, Afghanistan, and other recent conflicts face their own distinct challenges, including:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Exposure to IEDs (Improvised Explosive Devices)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Multiple deployments and prolonged combat exposure</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Traumatic brain injury (TBI) comorbidity</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                      <span>Moral injury from complex combat situations</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 4: Recognition and Diagnosis */}
            <section ref={(el) => (sectionsRef.current['recognition-diagnosis'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Recognition and Diagnosis</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Early recognition of PTSD symptoms is critical for successful treatment. Many veterans don't realize they have PTSD, attributing their struggles to normal adjustment challenges or trying to "tough it out."
              </p>

              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-3">When to Seek Help</h3>
                  <p className="text-gray-700 mb-4">Consider seeking professional evaluation if you or a veteran you know experiences:</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Symptoms lasting more than one month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Symptoms interfering with work, relationships, or daily functioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Thoughts of self-harm or suicide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Substance abuse as a coping mechanism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span>Inability to control emotional responses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Treatment Paths */}
            <section ref={(el) => (sectionsRef.current['treatment-paths'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Treatment Paths for PTSD in Veterans</h2>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp"
                alt="TMS therapy for veterans"
                className="w-full h-64 md:h-80 object-cover rounded-lg mb-6"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Evidence-Based Treatments</h3>
              
              <div className="space-y-6">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">1. Psychotherapy</h4>
                    <p className="text-gray-700 mb-4">
                      Evidence-based therapies specifically effective for veteran PTSD:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                        <span><strong>Cognitive Processing Therapy (CPT):</strong> Addresses how trauma has affected thoughts and beliefs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                        <span><strong>Prolonged Exposure (PE) Therapy:</strong> Gradually confronts trauma-related memories and situations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#572670] mt-1 flex-shrink-0" />
                        <span><strong>Eye Movement Desensitization and Reprocessing (EMDR):</strong> Uses eye movements to process traumatic memories</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">2. Medication Management</h4>
                    <p className="text-gray-700 mb-4">
                      Medications can help manage PTSD symptoms, including:
                    </p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>SSRIs (Selective Serotonin Reuptake Inhibitors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>SNRIs (Serotonin-Norepinephrine Reuptake Inhibitors)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Prazosin for nightmares</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#572670]/5 to-blue-50 border-[#572670]/20 border-2">
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-semibold text-[#572670] mb-4">3. TMS Therapy: A Revolutionary Option</h4>
                    <p className="text-gray-700 mb-4">
                      <strong>Transcranial Magnetic Stimulation (TMS)</strong> represents a breakthrough treatment for PTSD, especially for veterans who haven't responded to traditional therapies.
                    </p>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">How TMS Works for PTSD:</h5>
                    <ul className="space-y-2 text-gray-700 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Non-invasive brain stimulation targeting trauma-affected areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Helps regulate emotional processing and fear responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>No systemic side effects like medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>Can be combined with therapy for enhanced results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                        <span>FDA-cleared and backed by clinical research</span>
                      </li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                      TMS has shown particular promise for veterans with treatment-resistant PTSD, offering hope when other interventions have fallen short.
                    </p>
                    <Button asChild className="bg-[#572670] hover:bg-[#7B3FA0]">
                      <Link to="/services/tms-therapy">
                        Learn More About TMS for PTSD
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 6: Recovery Journey */}
            <section ref={(el) => (sectionsRef.current['recovery-journey'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Recovery Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Recovery from PTSD is a journey, not a destination. While symptoms may never completely disappear, effective treatment can significantly reduce their impact and help veterans reclaim their quality of life.
              </p>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#572670] mb-4">Keys to Successful Recovery:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Seek Professional Help:</strong> Don't try to manage PTSD alone</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Build a Support Network:</strong> Connect with other veterans and supportive family/friends</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Be Patient:</strong> Recovery takes time and progress isn't always linear</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Stay Engaged:</strong> Continue with treatment even when feeling better</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Practice Self-Care:</strong> Exercise, healthy eating, and stress management are essential</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-[#572670] mt-0.5 flex-shrink-0" />
                      <span><strong>Explore Multiple Treatment Options:</strong> What works for one veteran may not work for another</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-50 to-blue-50 border-green-200 mt-6">
                <CardContent className="p-6">
                  <p className="text-lg text-gray-700 italic font-medium">
                    Remember: Seeking help for PTSD is not a sign of weakness—it's a sign of strength and a commitment to healing.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 7: Supporting Veterans */}
            <section ref={(el) => (sectionsRef.current['supporting-veterans'] = el)} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">For Families: Supporting Veterans with PTSD</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Family members and loved ones play a crucial role in supporting veterans with PTSD. Understanding the condition and knowing how to help can make a significant difference.
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Educate Yourself</h4>
                    <p className="text-gray-700">Learn about PTSD, its symptoms, and treatment options to better understand what your loved one is experiencing.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-blue-500">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Be Patient and Understanding</h4>
                    <p className="text-gray-700">Recovery takes time. Avoid judgment and provide consistent support.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-green-500">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Encourage Treatment</h4>
                    <p className="text-gray-700">Gently encourage your loved one to seek professional help and stay engaged with treatment.</p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-yellow-500">
                  <CardContent className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Take Care of Yourself</h4>
                    <p className="text-gray-700">Supporting someone with PTSD can be emotionally draining. Ensure you're also getting the support you need.</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Moving Forward with Hope</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                PTSD in veterans—whether war veterans, Vietnam vets, or those who served in recent conflicts—is a serious but treatable condition. Understanding what PTSD looks like in veterans is the first step toward healing.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                With advances in treatment, including innovative options like TMS therapy, there is genuine hope for recovery. No veteran should suffer in silence. Help is available, and recovery is possible.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                If you or a veteran you know is struggling with PTSD, reach out for help today. Your service to our country deserves the best care available.
              </p>
            </section>

            {/* Author Box */}
            <AuthorBox
              name={author.name}
              role={author.credentials}
              bio={author.bio}
              image={author.image}
            />

            {/* FAQ Section */}
            <section ref={(el) => (sectionsRef.current['faqs'] = el)} className="mb-12 mt-12">
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
                  Ready to Start Your Healing Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  At Karma TMS, we specialize in helping veterans overcome PTSD with cutting-edge TMS therapy and compassionate care.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Schedule Consultation
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <a href="tel:760-449-8185" className="inline-flex items-center gap-2">
                      <Phone className="h-5 w-5" />
                      (760) 449-8185
                    </a>
                  </Button>
                </div>
                <p className="mt-6 text-white/90">
                  Serving veterans in Palm Springs, Twentynine Palms, and surrounding areas
                </p>
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
}