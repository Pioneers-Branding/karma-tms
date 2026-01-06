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

const UnderstandingPTSDVeteransBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'what-is-ptsd', label: 'What Is PTSD for Veterans?' },
    { id: 'what-looks-like', label: 'What PTSD Looks Like' },
    { id: 'war-veterans', label: 'PTSD in War Veterans' },
    { id: 'recognition', label: 'Recognition and Diagnosis' },
    { id: 'treatment-paths', label: 'Treatment Paths' },
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
      question: 'How common is PTSD in veterans?',
      answer: 'Approximately 11-20% of veterans who served in Operations Iraqi Freedom and Enduring Freedom have PTSD in a given year. About 12% of Gulf War veterans have PTSD, and up to 30% of Vietnam veterans have experienced PTSD at some point in their lives.'
    },
    {
      question: 'Can PTSD develop years after service?',
      answer: 'Yes, PTSD symptoms can emerge months or even years after a traumatic event. Some veterans don\'t experience symptoms until they face triggers or stressors later in life. This is known as delayed-onset PTSD.'
    },
    {
      question: 'What is the difference between PTSD and combat stress?',
      answer: 'Combat stress is a normal response to the abnormal conditions of war and typically resolves with time and rest. PTSD is a clinical disorder that persists beyond normal adjustment periods and significantly impacts daily functioning.'
    },
    {
      question: 'How effective is TMS for PTSD in veterans?',
      answer: 'Studies show that TMS can reduce PTSD symptoms by up to 50% in veterans who haven\'t responded to traditional treatments. TMS specifically targets the prefrontal cortex, helping regulate the overactive fear response common in PTSD.'
    },
    {
      question: 'Can PTSD be cured?',
      answer: 'While PTSD may not be completely "cured," effective treatment can significantly reduce symptoms and help veterans regain quality of life. Many veterans learn to manage their symptoms successfully and live fulfilling lives.'
    },
    {
      question: 'How can family members help a veteran with PTSD?',
      answer: 'Family members can help by educating themselves about PTSD, being patient and understanding, encouraging treatment, avoiding judgment, and taking care of their own mental health. Professional family therapy can also be beneficial.'
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
      title: 'VA & Veterans Mental Health Programs',
      excerpt: 'Learn about VA mental health programs and how to access TMS therapy.',
      link: '/blog/va-veterans-ptsd-tms-treatment',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp'
    },
    {
      title: 'TMS for Anxiety in Veterans',
      excerpt: 'Discover how TMS helps veterans manage anxiety beyond medication.',
      link: '/blog/tms-anxiety-veterans',
      image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/66e6e1ae-8cc3-4469-bfaf-b1f3f3d07006.webp'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths',
    description: 'A comprehensive guide to understanding PTSD in war veterans, including Vietnam vets. Learn about signs, symptoms, and modern treatment paths including TMS therapy.',
    image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_2_ahwkma.png',
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
    datePublished: '2025-10-20',
    dateModified: '2025-10-20',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/understanding-ptsd-veterans'
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
        title="Understanding PTSD in Veterans: Signs, Symptoms & Treatment | KarmaTMS"
        description="Complete guide to PTSD in war veterans including Vietnam vets. Learn what PTSD looks like in veterans, common signs, symptoms, and effective treatment paths including TMS therapy."
        keywords="what is ptsd for veterans, what does ptsd look like in veterans, ptsd war veterans, ptsd war vets, ptsd vietnam vets, ptsd vietnam war veterans, veteran ptsd symptoms, ptsd treatment for veterans"
        canonical="/blog/understanding-ptsd-veterans"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1762863798/blog_2_ahwkma.png"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Understanding PTSD in Veterans', url: '/blog/understanding-ptsd-veterans' }
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
                15 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Understanding PTSD in Veterans: Signs, Symptoms, and Treatment Paths
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              A comprehensive guide to recognizing and treating PTSD in war veterans, including Vietnam vets and modern service members
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/5_kvtlku.png"
                alt="Understanding PTSD in Veterans"
                className="w-full h-64 md:h-96 object-cover rounded-lg mb-6"
              />
              <p className="text-xl text-gray-700 leading-relaxed">
                Post-Traumatic Stress Disorder (PTSD) is a mental health condition that develops after experiencing or witnessing traumatic events. For veterans, particularly <strong>war veterans</strong> including <strong>Vietnam vets</strong>, the experiences of combat, loss of fellow service members, and exposure to life-threatening situations can create lasting psychological impacts that manifest as PTSD. Understanding what PTSD looks like in veterans is crucial for recognition, early intervention, and effective treatment.
              </p>
            </div>

            {/* Section 1: What Is PTSD */}
            <section ref={(el) => sectionsRef.current['what-is-ptsd'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What Is PTSD for Veterans?</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Quick Definition</p>
                  <p className="text-gray-700">
                    PTSD is a mental health condition triggered by experiencing or witnessing a terrifying event. In veterans, it often stems from combat exposure, military sexual trauma, training accidents, or other service-related traumatic experiences.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-6">
                Unlike normal stress reactions that fade over time, PTSD symptoms persist for months or years and significantly interfere with daily life. The condition affects not just the veteran but their families, relationships, and ability to function in civilian society.
              </p>
            </section>

            {/* Section 2: What PTSD Looks Like */}
            <section ref={(el) => sectionsRef.current['what-looks-like'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">What Does PTSD Look Like in Veterans?</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/0a00bae7-03d4-4867-b6ee-a18528b1c447.webp"
                alt="PTSD in war veterans"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <p className="mb-6">
                PTSD manifests through four main symptom clusters that create a distinctive pattern in veterans:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-[#572670]">Intrusive Memories</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Recurrent, unwanted memories of traumatic combat experiences</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Flashbacks that feel like reliving the event</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Nightmares about war experiences</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-[#572670]">Avoidance Behaviors</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Avoiding thoughts or conversations about service</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Staying away from places or people that trigger memories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Emotional numbing and detachment</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-[#572670]">Negative Changes in Thinking</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Negative beliefs about oneself or the world</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Persistent guilt or shame (survivor's guilt)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Feeling detached from family and friends</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-3 text-[#572670]">Changes in Reactions</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Hypervigilance and exaggerated startle response</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Difficulty sleeping or concentrating</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Irritability and angry outbursts</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 3: War Veterans */}
            <section ref={(el) => sectionsRef.current['war-veterans'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">PTSD in War Veterans: Special Considerations</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/dd7dd986-540f-4359-99af-39f398491cf0.webp"
                alt="Veterans receiving support"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <h3 className="text-2xl font-bold text-gray-900 mb-4">PTSD in Vietnam War Veterans</h3>
              <p className="mb-6">
                <strong>Vietnam vets</strong> face unique PTSD challenges. The Vietnam War created specific trauma patterns due to guerrilla warfare, unclear enemy lines, and the difficult homecoming many veterans experienced. Studies show that approximately 30% of Vietnam war veterans have experienced PTSD at some point in their lives.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern War Veterans</h3>
              <p className="mb-4">
                Veterans from Iraq, Afghanistan, and other recent conflicts face their own distinct challenges, including:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Exposure to IEDs (Improvised Explosive Devices)</li>
                <li>Multiple deployments and prolonged combat exposure</li>
                <li>Traumatic brain injury (TBI) comorbidity</li>
                <li>Moral injury from complex combat situations</li>
              </ul>
            </section>

            {/* Section 4: Recognition */}
            <section ref={(el) => sectionsRef.current['recognition'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Recognition and Diagnosis</h2>
              
              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">When to Seek Help</h3>
                  <p className="mb-4">Consider seeking professional evaluation if you or a veteran you know experiences:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Symptoms lasting more than one month</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Symptoms interfering with work, relationships, or daily functioning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Thoughts of self-harm or suicide</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Substance abuse as a coping mechanism</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                      <span>Inability to control emotional responses</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Section 5: Treatment Paths */}
            <section ref={(el) => sectionsRef.current['treatment-paths'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Treatment Paths for PTSD in Veterans</h2>
              
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp"
                alt="TMS therapy for veterans"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />

              <div className="space-y-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3">Evidence-Based Psychotherapy</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Cognitive Processing Therapy (CPT):</strong> Addresses how trauma has affected thoughts and beliefs</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>Prolonged Exposure (PE) Therapy:</strong> Gradually confronts trauma-related memories</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span><strong>EMDR:</strong> Uses eye movements to process traumatic memories</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="text-xl font-bold mb-3 text-[#572670]">TMS Therapy: A Revolutionary Option</h4>
                    <p className="mb-4">
                      <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">Transcranial Magnetic Stimulation (TMS)</Link> represents a breakthrough treatment for PTSD, especially for veterans who haven't responded to traditional therapies.
                    </p>
                    <h5 className="font-bold mb-3">How TMS Works for PTSD:</h5>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Non-invasive brain stimulation targeting trauma-affected areas</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Helps regulate emotional processing and fear responses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>No systemic side effects like medications</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        <span>Can be combined with therapy for enhanced results</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
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
                  Ready to Start Your Healing Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  At KarmaTMS, we specialize in helping veterans overcome PTSD with cutting-edge TMS therapy and compassionate care.
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

export default UnderstandingPTSDVeteransBlogPostPage;
