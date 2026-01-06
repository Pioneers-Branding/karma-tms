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
import { Calendar, Clock, User, CheckCircle2, ArrowRight, Phone, Heart } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const MentalHealthCommunityViolenceBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
    { id: 'understanding-impact', label: 'Understanding the Impact' },
    { id: 'trauma-responses', label: 'Trauma Responses' },
    { id: 'coping-strategies', label: 'Immediate Coping Strategies' },
    { id: 'community-resources', label: 'Community Resources' },
    { id: 'building-resilience', label: 'Building Long-term Resilience' },
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
      question: 'How long do psychological effects of community violence last?',
      answer: 'The duration varies significantly by individual and depends on factors like proximity to violence, previous trauma history, available support, and access to treatment. Some people recover within weeks, while others experience long-lasting effects requiring professional intervention. Early support significantly improves outcomes.'
    },
    {
      question: 'Can witnessing violence cause PTSD even if I wasn\'t directly harmed?',
      answer: 'Absolutely. Witnessing violence, learning about violence to loved ones, or repeated exposure to violent details can all cause PTSD. Secondary trauma is real and deserves the same attention and treatment as direct trauma exposure.'
    },
    {
      question: 'How do I talk to children about community violence?',
      answer: 'Be honest but age-appropriate. Reassure them of safety measures while acknowledging their feelings. Limit their media exposure to violent events. Answer their questions honestly but simply. Maintain routines to provide stability. Watch for changes in behavior that might indicate distress.'
    },
    {
      question: 'What if I can\'t afford mental health treatment?',
      answer: 'Many resources exist for low-cost or free mental health support: community health centers, crisis hotlines, support groups, employee assistance programs, sliding-scale therapy, university training clinics, and online resources. The 988 Suicide & Crisis Lifeline and SAMHSA National Helpline (1-800-662-4357) can connect you with local resources.'
    },
    {
      question: 'How can I support someone affected by community violence?',
      answer: 'Listen without judgment, validate their feelings, offer practical help (meals, childcare, etc.), respect their pace of recovery, educate yourself about trauma responses, avoid pushing them to talk before they\'re ready, and encourage professional support while respecting their autonomy.'
    },
    {
      question: 'When should I seek professional help after exposure to violence?',
      answer: 'Seek help if symptoms persist beyond a month, interfere with daily functioning, cause significant distress, include thoughts of self-harm, or if you\'re using substances to cope. However, you don\'t need to wait—early intervention often prevents more serious problems.'
    }
  ];

  const relatedPosts = [
    {
      title: 'Understanding PTSD in Veterans',
      excerpt: 'A comprehensive guide to recognizing PTSD signs, symptoms, and treatment paths.',
      link: '/blogs/understanding-ptsd-veterans',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/5_kvtlku.png'
    },
    {
      title: 'Mental Health First Aid: How to Help Someone in Crisis',
      excerpt: 'Learn essential mental health first aid skills for crisis situations.',
      link: '/blog/mental-health-first-aid',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/19_luad51.png'
    },
    {
      title: 'Managing Anxiety Triggers in Everyday Life',
      excerpt: 'Learn practical strategies to identify and manage anxiety triggers effectively.',
      link: '/blog/managing-anxiety-triggers',
      image: 'https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376737/22_wiizht.png'
    }
  ];

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'A Guide to Mental Health Resources for Coping with Community Violence',
    description: 'Comprehensive guide on understanding trauma responses, accessing mental health resources, and building resilience after exposure to community violence. Evidence-based coping strategies and professional treatment options.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b3740a3e-1c6d-4eb7-8300-432f7cb4655c.webp',
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
    datePublished: '2024-10-10',
    dateModified: '2024-10-10',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blogs/mental-health-community-violence'
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
        title="A Guide to Mental Health Resources for Coping with Community Violence"
        description="Comprehensive guide to understanding trauma, accessing mental health resources, and building resilience after community violence. Learn evidence-based coping strategies and treatment options including trauma-informed care."
        keywords="community violence, trauma recovery, PTSD treatment, mental health resources, trauma-informed care, violence exposure, community mental health, crisis support"
        canonical="/blogs/mental-health-community-violence"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b3740a3e-1c6d-4eb7-8300-432f7cb4655c.webp"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: 'Home', url: '/' },
          { name: 'Blog', url: '/blog' },
          { name: 'Mental Health & Community Violence', url: '/blogs/mental-health-community-violence' }
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
                <BreadcrumbPage>Mental Health & Community Violence</BreadcrumbPage>
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
                October 10, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                16 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatmsdev
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              A Guide to Mental Health Resources for Coping with Community Violence
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding trauma, accessing support, and building resilience in the aftermath of violence
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                <Link to="/contact">Get Support Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/ptsd">Learn About Trauma Treatment</Link>
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
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
                      <p className="text-sm font-medium text-red-900 mb-2">Crisis Support</p>
                      <p className="text-xs text-gray-700 mb-2">If you're in immediate danger, call 911</p>
                      <p className="text-xs text-gray-700">988 Suicide & Crisis Lifeline</p>
                    </div>
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
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/b3740a3e-1c6d-4eb7-8300-432f7cb4655c.webp"
                alt="Community support and mental health resources"
                className="w-full object-cover rounded-lg mb-6"
              />

              <p className="text-xl text-gray-700 leading-relaxed">
                Community violence—whether a shooting, assault, or other traumatic event—leaves invisible wounds that can persist long after physical injuries heal. The psychological impact extends beyond direct victims to witnesses, first responders, families, and entire communities. Understanding these effects and knowing where to turn for help is crucial for healing and recovery. This comprehensive guide provides evidence-based information on coping with trauma, accessing mental health resources, and building long-term resilience.
              </p>
            </div>

            {/* Section 1 */}
            <section ref={(el) => sectionsRef.current['understanding-impact'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding the Psychological Impact of Community Violence</h2>
              
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">Who Is Affected?</p>
                  <p className="text-gray-700">
                    Community violence affects far more people than those directly involved. Research shows that psychological impact extends to witnesses, family members, friends, neighbors, first responders, and the broader community. The ripple effects can persist for years.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Psychological Responses</h3>
              <p className="mb-4">
                Exposure to violence can trigger various mental health challenges:
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Immediate Reactions</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Shock and disbelief</li>
                      <li>• Fear and helplessness</li>
                      <li>• Anger and rage</li>
                      <li>• Guilt or shame</li>
                      <li>• Emotional numbness</li>
                      <li>• Confusion and disorientation</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <h4 className="font-bold mb-2">Long-term Effects</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Post-Traumatic Stress Disorder (PTSD)</li>
                      <li>• Depression and anxiety</li>
                      <li>• Substance abuse</li>
                      <li>• Sleep disturbances</li>
                      <li>• Hypervigilance</li>
                      <li>• Social withdrawal</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Cycle of Community Violence</h3>
              <p className="mb-4">
                Community violence creates a cycle of trauma that can perpetuate across generations. Witnessing violence, especially in childhood, increases the risk of mental health problems, substance abuse, and even perpetrating violence later in life. Breaking this cycle requires comprehensive community-level interventions and accessible mental health support.
              </p>
            </section>

            {/* Section 2 */}
            <section ref={(el) => sectionsRef.current['trauma-responses'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Trauma Responses</h2>

              <p className="mb-6">
                Trauma responses are the brain and body's natural reactions to overwhelming experiences. Understanding these responses helps normalize your experience and guides appropriate treatment.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fight, Flight, Freeze, and Fawn</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Fight Response</h4>
                    <p className="text-gray-700">
                      Manifests as anger, aggression, or irritability. You may feel on edge, ready to defend yourself at any moment. This can strain relationships and lead to conflicts.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Flight Response</h4>
                    <p className="text-gray-700">
                      Expressed through avoidance, restlessness, or panic. You may avoid places, people, or situations that remind you of the trauma. Anxiety and hypervigilance are common.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Freeze Response</h4>
                    <p className="text-gray-700">
                      Characterized by feeling stuck, numb, or dissociated. You may feel emotionally distant or have difficulty making decisions. This can be mistaken for not caring or being in denial.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Fawn Response</h4>
                    <p className="text-gray-700">
                      Involves people-pleasing and difficulty setting boundaries. You may try to avoid conflict at all costs or feel responsible for others' emotions.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Important to Remember</p>
                  <p className="text-gray-700">
                    These responses are automatic and not choices. They're survival mechanisms developed to protect you. There's no "right" or "wrong" way to respond to trauma. Self-compassion is essential for healing.
                  </p>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Signs of <Link to="/ptsd" className="text-[#572670] hover:underline">PTSD</Link></h3>
              <p className="mb-4">
                Not everyone exposed to violence develops PTSD, but it's important to recognize the signs:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Re-experiencing:</strong> Intrusive memories, nightmares, flashbacks, or intense distress when reminded of the event</li>
                <li><strong>Avoidance:</strong> Avoiding thoughts, feelings, places, or people associated with the trauma</li>
                <li><strong>Negative changes:</strong> Persistent negative emotions, feeling detached, inability to experience positive emotions</li>
                <li><strong>Hyperarousal:</strong> Being easily startled, feeling on edge, difficulty sleeping, irritability, hypervigilance</li>
              </ul>

              <p className="mb-4">
                If these symptoms persist for more than a month and interfere with daily functioning, professional evaluation is recommended.
              </p>
            </section>

            {/* Section 3 */}
            <section ref={(el) => sectionsRef.current['coping-strategies'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Immediate Coping Strategies</h2>

              <p className="mb-6">
                In the immediate aftermath of community violence, these strategies can help manage acute stress and begin the healing process:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Self-Care</h3>
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Maintain Routines</h4>
                    <p className="text-sm text-gray-600">Keep regular sleep, meal, and activity schedules to provide stability and structure.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Physical Activity</h4>
                    <p className="text-sm text-gray-600">Gentle exercise helps process stress hormones and improves mood naturally.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Limit Media Exposure</h4>
                    <p className="text-sm text-gray-600">Repeated exposure to violent images can retraumatize. Stay informed but set boundaries.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Grounding Techniques</h4>
                    <p className="text-sm text-gray-600">Use 5-4-3-2-1 method: identify 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Emotional Processing</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Allow yourself to feel:</strong> Don't suppress emotions. Crying, anger, and fear are normal responses.</li>
                <li><strong>Talk to trusted people:</strong> Share your experience with supportive friends or family members.</li>
                <li><strong>Journal:</strong> Writing about your experience can help process emotions and track your healing.</li>
                <li><strong>Practice self-compassion:</strong> Be patient with yourself. Healing isn't linear.</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Breathing and Relaxation</h3>
              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <h4 className="font-bold mb-3">Box Breathing Technique:</h4>
                  <ol className="space-y-2 text-gray-700">
                    <li>1. Breathe in slowly through your nose for 4 counts</li>
                    <li>2. Hold your breath for 4 counts</li>
                    <li>3. Exhale slowly through your mouth for 4 counts</li>
                    <li>4. Hold empty lungs for 4 counts</li>
                    <li>5. Repeat 4-5 times or until you feel calmer</li>
                  </ol>
                  <p className="mt-3 text-sm text-gray-600">This technique activates the parasympathetic nervous system, reducing stress and anxiety.</p>
                </CardContent>
              </Card>
            </section>

            {/* Section 4 */}
            <section ref={(el) => sectionsRef.current['community-resources'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Accessing Mental Health Resources</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Crisis Resources</h3>
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-red-500 bg-red-50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <Phone className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-bold text-lg mb-2">Immediate Crisis Support</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li><strong>911:</strong> For immediate physical danger or medical emergencies</li>
                          <li><strong>988 Suicide & Crisis Lifeline:</strong> 24/7 emotional support and crisis intervention</li>
                          <li><strong>Crisis Text Line:</strong> Text "HELLO" to 741741 for 24/7 text-based support</li>
                          <li><strong>SAMHSA National Helpline:</strong> 1-800-662-4357 (treatment referrals and information)</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community-Based Resources</h3>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Community Mental Health Centers:</strong> Offer affordable, sliding-scale services for trauma treatment</li>
                <li><strong>Victim Services Programs:</strong> Many areas have victim advocates who can connect you with resources</li>
                <li><strong>Faith-Based Organizations:</strong> Many offer counseling services and support groups</li>
                <li><strong>Employee Assistance Programs (EAP):</strong> Check if your employer offers free counseling sessions</li>
                <li><strong>University Counseling Centers:</strong> Training clinics often provide low-cost services to the community</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional Treatment Options</h3>
              
              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Trauma-Focused Therapy</h4>
                    <p className="text-gray-700 mb-3">
                      Evidence-based approaches like Cognitive Processing Therapy (CPT), Prolonged Exposure (PE), and Eye Movement Desensitization and Reprocessing (EMDR) have proven effectiveness for trauma recovery.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Medication Management</h4>
                    <p className="text-gray-700 mb-3">
                      For some individuals, medications like SSRIs can help manage PTSD, <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, and <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">anxiety</Link> symptoms while engaging in therapy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">TMS Therapy for Treatment-Resistant Cases</h4>
                    <p className="text-gray-700 mb-3">
                      When traditional treatments aren't effective, <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">Transcranial Magnetic Stimulation (TMS)</Link> offers a non-invasive alternative for treating depression and PTSD without medication side effects.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Support Groups</h4>
                    <p className="text-gray-700 mb-3">
                      Connecting with others who've experienced similar trauma can reduce isolation and provide peer support. Many communities offer trauma-specific support groups.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-gradient-to-br from-green-50 to-transparent border-green-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-green-900 mb-2">Finding the Right Support at KarmaTMS</p>
                  <p className="text-gray-700">
                    At <Link to="/" className="text-[#572670] hover:underline font-medium">KarmaTMS</Link>, we provide trauma-informed care using evidence-based treatments including TMS therapy for individuals struggling with trauma-related depression and PTSD. Our compassionate team understands the unique needs of those affected by violence and provides comprehensive support throughout your healing journey. <Link to="/contact" className="text-[#572670] hover:underline font-medium">Contact us</Link> to learn how we can help.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 5 */}
            <section ref={(el) => sectionsRef.current['building-resilience'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Building Long-Term Resilience</h2>

              <p className="mb-6">
                Recovery from trauma is possible. Building resilience helps prevent long-term psychological damage and promotes post-traumatic growth.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Components of Resilience</h3>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-[#572670] mb-3" />
                    <h4 className="font-bold mb-2">Social Connection</h4>
                    <p className="text-sm text-gray-600">Strong relationships provide emotional support, reduce isolation, and facilitate healing.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-[#572670] mb-3" />
                    <h4 className="font-bold mb-2">Sense of Purpose</h4>
                    <p className="text-sm text-gray-600">Finding meaning through work, hobbies, volunteering, or advocacy can promote healing.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-[#572670] mb-3" />
                    <h4 className="font-bold mb-2">Self-Efficacy</h4>
                    <p className="text-sm text-gray-600">Believing in your ability to cope and overcome challenges strengthens resilience.</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <Heart className="w-8 h-8 text-[#572670] mb-3" />
                    <h4 className="font-bold mb-2">Healthy Coping Skills</h4>
                    <p className="text-sm text-gray-600">Developing positive ways to manage stress prevents harmful coping mechanisms.</p>
                  </CardContent>
                </Card>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Community-Level Interventions</h3>
              <p className="mb-4">
                Individual healing is important, but addressing community violence requires collective action:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Community violence prevention programs</li>
                <li>Accessible mental health services in affected areas</li>
                <li>Youth mentorship and after-school programs</li>
                <li>Economic development and opportunity creation</li>
                <li>Restorative justice initiatives</li>
                <li>Trauma-informed schools and workplaces</li>
              </ul>

              <div className="bg-gradient-to-r from-[#572670]/10 to-transparent p-6 rounded-lg border-l-4 border-[#572670] mb-6">
                <p className="font-medium mb-2">Post-Traumatic Growth</p>
                <p className="text-gray-700">
                  While trauma is painful, many people experience positive changes after overcoming it: deeper relationships, greater appreciation for life, increased personal strength, new possibilities, and spiritual growth. Healing doesn't mean forgetting—it means integrating the experience and moving forward.
                </p>
              </div>
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
                  You Don't Have to Heal Alone
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our trauma-informed team provides compassionate, evidence-based care for individuals affected by community violence. Take the first step toward healing.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Get Support Today</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    <Link to="/ptsd">Learn About PTSD Treatment</Link>
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

export default MentalHealthCommunityViolenceBlogPostPage;
