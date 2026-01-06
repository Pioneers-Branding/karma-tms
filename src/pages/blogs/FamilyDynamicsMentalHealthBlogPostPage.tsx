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
import { Calendar, Clock, User, CheckCircle2, ArrowRight } from 'lucide-react';
import AuthorBox from '@/components/AuthorBox';

const FamilyDynamicsMentalHealthBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState('');
  const sectionsRef = useRef<{[key: string]: HTMLElement | null;}>({});

  const tocItems = [
  { id: 'understanding-family-dynamics', label: 'Understanding Family Dynamics' },
  { id: 'impact-on-recovery', label: 'Impact on Mental Health Recovery' },
  { id: 'positive-family-patterns', label: 'Positive Family Patterns' },
  { id: 'addressing-challenges', label: 'Addressing Family Challenges' },
  { id: 'family-therapy', label: 'Role of Family Therapy' },
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
    question: 'How do family dynamics affect mental health recovery?',
    answer: 'Family dynamics significantly influence recovery by affecting emotional support, treatment adherence, stress levels, and overall environment. Supportive family relationships can accelerate recovery, while toxic dynamics can hinder progress. Research shows that individuals with strong family support have better treatment outcomes and lower relapse rates.'
  },
  {
    question: 'Can family therapy help even if only one member has a mental health diagnosis?',
    answer: 'Absolutely. Mental health conditions affect the entire family system, not just the diagnosed individual. Family therapy helps all members understand the condition, improve communication, develop healthy coping strategies, and create a supportive environment that benefits everyone, regardless of who has the diagnosis.'
  },
  {
    question: 'What if my family is resistant to participating in treatment?',
    answer: 'Resistance is common and often stems from stigma, fear, or misunderstanding. Start by educating family members about mental health, sharing your needs clearly, and inviting rather than demanding participation. Sometimes beginning with individual therapy and gradually incorporating family sessions works best. A therapist can guide this process.'
  },
  {
    question: 'How can I set boundaries with family while in recovery?',
    answer: 'Healthy boundaries are essential for recovery. Clearly communicate your needs and limits, be consistent in enforcing boundaries, don\'t over-explain or apologize excessively, and recognize that boundary-setting may initially cause discomfort but is necessary for your well-being. A therapist can help you develop and maintain appropriate boundaries.'
  },
  {
    question: 'What role does family history play in mental health?',
    answer: 'Family history influences mental health through both genetics and learned behaviors. While genetic predisposition matters, family patterns of communication, conflict resolution, emotional expression, and coping also significantly impact mental health. Understanding your family history helps identify patterns to continue or change.'
  },
  {
    question: 'When should families seek professional help?',
    answer: 'Seek professional help when: communication has broken down, conflicts escalate to crisis, family dynamics interfere with treatment progress, there\'s abuse or substance misuse, or when family members feel overwhelmed. Early intervention prevents problems from deepening and improves outcomes for everyone.'
  }];


  const relatedPosts = [
  {
    title: 'Empowering Youth: Strategies for Building Emotional Resilience',
    excerpt: 'Learn effective strategies for helping young people develop emotional resilience and mental wellness.',
    link: '/blog/empowering-youth-emotional-resilience',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp'
  },
  {
    title: 'Managing Anxiety Triggers in Everyday Life',
    excerpt: 'Discover practical approaches to identifying and managing anxiety triggers in daily situations.',
    link: '/blog/managing-anxiety-triggers',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/9705b922-d0fc-4d29-be10-acd507ce308c.webp'
  },
  {
    title: 'Mental Health First Aid: How to Help Someone in Crisis',
    excerpt: 'Essential mental health first aid skills for recognizing crisis signs and providing support.',
    link: '/blog/mental-health-first-aid',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/76caee2d-5629-4dc1-a3b4-8c5cea23ede6.webp'
  }];


  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'The Role of Family Dynamics in Mental Health Recovery',
    description: 'Comprehensive guide on how family relationships and dynamics influence mental health recovery. Learn about positive patterns, addressing challenges, and the role of family therapy.',
    image: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp',
    author: {
      '@type': 'Organization',
      name: 'karmatms'
    },
    publisher: {
      '@type': 'Organization',
      name: 'KarmaTMS',
      logo: {
        '@type': 'ImageObject',
        url: 'https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png'
      }
    },
    datePublished: '2024-12-19',
    dateModified: '2024-12-19',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://karmatms.com/blog/family-dynamics-mental-health'
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
        title="The Role of Family Dynamics in Mental Health Recovery"
        description="Discover how family relationships and dynamics significantly influence mental health recovery. Learn about supportive patterns, addressing challenges, and the transformative role of family therapy."
        keywords="family dynamics, mental health recovery, family therapy, family support mental health, family relationships, mental health family involvement, family systems therapy"
        canonical="/blog/family-dynamics-mental-health"
        ogImage="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/6cfeb881-529d-42c6-875a-321eac7d440c.webp"
        ogType="article" />


      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
        { name: 'Family Dynamics in Mental Health', url: '/blog/family-dynamics-mental-health' }]
        } />


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
                <BreadcrumbPage>Family Dynamics in Mental Health Recovery</BreadcrumbPage>
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
                December 19, 2024
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                karmatms
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              The Role of Family Dynamics in Mental Health Recovery
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Understanding how family relationships influence healing and creating supportive environments for lasting recovery
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
                      <Link to="/contact">Get Support</Link>
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
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376735/21_tyzclt.png"
                alt="Family supporting mental health recovery"
                className="w-full  md:h-96 object-cover rounded-lg mb-6" />

              <p className="text-xl text-gray-700 leading-relaxed">
                Mental health doesn't exist in a vacuum—it's deeply intertwined with our relationships, particularly those within our families. Whether you're navigating <Link to="/depression" className="text-[#572670] hover:underline font-medium">depression</Link>, <Link to="/anxiety" className="text-[#572670] hover:underline font-medium">anxiety</Link>, or another mental health condition, the dynamics within your family system can either accelerate your healing journey or present significant obstacles to recovery.
              </p>
            </div>

            {/* Section 1: Understanding Family Dynamics */}
            <section ref={(el) => sectionsRef.current['understanding-family-dynamics'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Understanding Family Dynamics</h2>
              <Card className="bg-gradient-to-br from-[#572670]/5 to-transparent border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <p className="text-lg font-medium text-[#572670] mb-2">What Are Family Dynamics?</p>
                  <p className="text-gray-700">
                    Family dynamics refer to the patterns of interactions, relationships, roles, and behaviors that exist within a family system. These patterns—established over years or even generations—shape how family members relate to each other, communicate, resolve conflicts, and provide (or withhold) support.
                  </p>
                </CardContent>
              </Card>

              <p className="mb-4">
                Family dynamics include both spoken and unspoken rules, emotional patterns, power structures, and relationship bonds. They're influenced by cultural background, generational transmission, past trauma, communication styles, and individual personalities.
              </p>

              <div className="grid md:grid-cols-2 gap-4 my-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Communication Patterns</h4>
                    <p className="text-sm text-gray-600">How family members express thoughts and feelings</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Emotional Climate</h4>
                    <p className="text-sm text-gray-600">The overall emotional atmosphere within the family</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Boundaries</h4>
                    <p className="text-sm text-gray-600">Limits between individuals and subsystems</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Roles</h4>
                    <p className="text-sm text-gray-600">Functions each member plays in the family system</p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 2: Impact on Recovery */}
            <section ref={(el) => sectionsRef.current['impact-on-recovery'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">How Family Dynamics Impact Mental Health Recovery</h2>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Positive Impacts</h3>
              <p className="mb-4">
                Healthy family dynamics can significantly enhance recovery outcomes:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Emotional Support:</strong> Feeling understood, accepted, and loved provides psychological safety essential for healing</li>
                <li><strong>Practical Assistance:</strong> Help with daily tasks, appointments, and treatment adherence</li>
                <li><strong>Motivation and Encouragement:</strong> Family members cheering progress and celebrating small victories</li>
                <li><strong>Accountability:</strong> Gentle reminders about self-care, medication, and therapy appointments</li>
                <li><strong>Social Connection:</strong> Combating isolation through meaningful interaction</li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Negative Impacts</h3>
              <p className="mb-4">
                Conversely, unhealthy family dynamics can impede recovery:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li><strong>Stigma and Denial:</strong> Minimizing symptoms or viewing mental illness as weakness</li>
                <li><strong>Enabling Behaviors:</strong> Unintentionally reinforcing unhealthy patterns</li>
                <li><strong>Codependency:</strong> Enmeshed relationships that prevent individual growth</li>
                <li><strong>Poor Communication:</strong> Criticism, passive-aggression, or emotional distance</li>
                <li><strong>Unresolved Trauma:</strong> Past family trauma affecting current relationships</li>
              </ul>

              <Card className="bg-blue-50 border-blue-200 mb-6">
                <CardContent className="p-6">
                  <p className="font-medium text-blue-900 mb-2">Research Finding</p>
                  <p className="text-gray-700">
                    Studies consistently show that individuals with strong family support have 50-60% better treatment adherence rates, faster symptom improvement, and significantly lower relapse rates compared to those without family involvement in their recovery process.
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* Section 3: Positive Family Patterns */}
            <section ref={(el) => sectionsRef.current['positive-family-patterns'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Cultivating Positive Family Patterns</h2>

              <p className="mb-6">
                Families can actively develop patterns that support mental health recovery:
              </p>

              <div className="space-y-4 mb-8">
                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Open, Honest Communication</h4>
                    <p className="text-gray-700">
                      Create a family culture where feelings can be expressed without judgment. Regular family meetings, active listening, and validating emotions build trust and connection.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Healthy Boundaries</h4>
                    <p className="text-gray-700">
                      Respect each person's need for privacy and autonomy while maintaining appropriate involvement. Balance support with allowing the individual to develop independence and self-efficacy.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Education About Mental Health</h4>
                    <p className="text-gray-700">
                      Learn together about the specific condition, treatment options, and recovery process. Understanding reduces fear, eliminates stigma, and helps family members provide more effective support.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Shared Wellness Activities</h4>
                    <p className="text-gray-700">
                      Engage in healthy activities together—walks, cooking nutritious meals, meditation, or hobbies. This normalizes self-care and provides positive shared experiences.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-[#572670]">
                  <CardContent className="p-6">
                    <h4 className="font-bold text-lg mb-2">Crisis Planning</h4>
                    <p className="text-gray-700">
                      Develop together a clear plan for managing crises, including warning signs, emergency contacts, and agreed-upon interventions. Having a plan reduces anxiety for everyone.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Section 4: Addressing Challenges */}
            <section ref={(el) => sectionsRef.current['addressing-challenges'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Addressing Family Challenges</h2>

              <p className="mb-6">
                Even well-intentioned families face challenges when supporting a member with mental health conditions:
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Common Challenges</h3>

              <Card className="border-[#572670]/20 mb-6">
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Caregiver Burnout:</strong> Family members may exhaust themselves trying to help, neglecting their own needs
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Conflicting Opinions:</strong> Disagreements about treatment approaches or the severity of the condition
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Financial Stress:</strong> Mental health treatment costs creating additional family tension
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Communication Breakdown:</strong> Inability to discuss the condition productively
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#572670] rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong>Resentment:</strong> Other family members feeling neglected or burdened
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Strategies for Overcoming Challenges</h3>

              <p className="mb-4">
                Acknowledge difficulties openly and work together on solutions:
              </p>

              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>Seek education and support groups for family members</li>
                <li>Practice self-care individually and as a family unit</li>
                <li>Consider respite care or outside help when needed</li>
                <li>Attend family therapy sessions to improve communication</li>
                <li>Set realistic expectations about recovery timelines</li>
                <li>Celebrate small victories and progress</li>
              </ul>
            </section>

            {/* Section 5: Family Therapy */}
            <section ref={(el) => sectionsRef.current['family-therapy'] = el} className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">The Role of Family Therapy in Recovery</h2>

              <p className="mb-6">
                Family therapy can be transformative in mental health recovery, providing a structured environment to:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Improve Communication</h4>
                    <p className="text-sm text-gray-600">Learn effective ways to express needs and listen actively</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Resolve Conflicts</h4>
                    <p className="text-sm text-gray-600">Address longstanding issues in a safe, moderated space</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Understand Patterns</h4>
                    <p className="text-sm text-gray-600">Identify and change unhelpful family dynamics</p>
                  </CardContent>
                </Card>
                <Card className="border-[#572670]/20">
                  <CardContent className="p-6">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mb-3" />
                    <h4 className="font-bold mb-2">Strengthen Bonds</h4>
                    <p className="text-sm text-gray-600">Build deeper connections and mutual support</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-r from-[#572670]/10 to-transparent p-6 rounded-lg border-l-4 border-[#572670] mb-6">
                <p className="font-medium mb-2">Comprehensive Treatment Approach</p>
                <p className="text-gray-700">
                  At KarmaTMS, we recognize that effective mental health treatment often requires addressing family dynamics alongside individual therapy. We offer family counseling and can coordinate with <Link to="/tms-therapy" className="text-[#572670] hover:underline font-medium">TMS therapy</Link> and other treatments to provide comprehensive care that considers your entire support system.
                </p>
              </div>
            </section>

            {/* Author Box */}
             <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist | Medical Director at KarmaTMS"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy for veterans and treatment-resistant mental health conditions. With extensive experience in neuroscience and innovative treatment modalities, Dr. Sunder is dedicated to helping veterans overcome PTSD, depression, and anxiety through evidence-based, compassionate care."
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
                    <AccordionContent className="text-gray-700 pt-2 pb-4">{faq.answer}</AccordionContent>
                  </AccordionItem>
                )}
              </Accordion>
            </section>

            {/* CTA Section */}
            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Improve Your Family's Mental Health Journey?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Our team specializes in family-centered mental health care. Let us help you build the supportive environment that promotes lasting recovery.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button asChild size="lg" className="bg-white text-[#572670] hover:bg-gray-100">
                    <Link to="/contact">Schedule Family Consultation</Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white/10">

                    
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Posts */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) =>
                <Card
                  key={index}
                  className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow">

                    <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 hover:text-[#572670] transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                      <Button
                      asChild
                      variant="ghost"
                      className="text-[#572670] p-0 h-auto hover:bg-transparent">

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

export default FamilyDynamicsMentalHealthBlogPostPage;