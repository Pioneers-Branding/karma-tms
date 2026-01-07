import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import FooterSection from "@/components/FooterSection";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Calendar, Clock, User, ArrowRight, CheckCircle2 } from "lucide-react";
import AuthorBox from "@/components/AuthorBox";

const WhoIsAGoodCandidateForTMSTherapyBlogPostPage = () => {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const tocItems = [
    { id: "understanding-tms", label: "Understanding TMS Therapy" },
    { id: "why-candidacy-matters", label: "Why Candidacy Matters" },
    { id: "treatment-resistant", label: "Treatment-Resistant Depression" },
    { id: "medication-intolerance", label: "Medication Intolerance" },
    { id: "mdd-diagnosis", label: "MDD Diagnosis" },
    { id: "other-conditions", label: "Anxiety, PTSD, & OCD" },
    { id: "non-invasive-appeal", label: "Non-Invasive Appeal" },
    { id: "safety-factors", label: "Medical & Safety Factors" },
    { id: "evaluation-role", label: "Psychiatric Evaluation" },
    { id: "commitment", label: "Commitment & Expectations" },
    { id: "who-is-not", label: "Who Is Not a Candidate" },
    { id: "future-care", label: "Future of Mental Health" },
    { id: "faqs", label: "FAQs" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const item of tocItems) {
        const section = sectionsRef.current[item.id];
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const section = sectionsRef.current[id];
    if (section) {
      const yOffset = -100;
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const faqs = [
    {
      question: "Who is a good candidate for TMS therapy?",
      answer:
        "A good candidate for TMS therapy is typically an adult diagnosed with depression who has not experienced sufficient relief from antidepressant medications. People who cannot tolerate medication side effects or prefer a non-invasive treatment may also qualify. A psychiatric evaluation is essential to confirm TMS therapy eligibility.",
    },
    {
      question: "How do doctors determine TMS therapy eligibility?",
      answer:
        "Doctors assess TMS therapy eligibility through a comprehensive evaluation that includes diagnosis, severity of symptoms, treatment history, medication response, and medical safety factors. This process helps identify whether someone is an appropriate TMS treatment candidate and ensures the therapy is both safe and effective.",
    },
    {
      question:
        "Can someone with anxiety or PTSD be a TMS treatment candidate?",
      answer:
        "Yes, in some cases. While TMS therapy is primarily approved for depression, individuals with anxiety, PTSD, or OCD may be considered TMS treatment candidates, especially if depression is also present. Eligibility depends on symptoms, prior treatments, and clinical judgment.",
    },
    {
      question: "Who should not consider TMS therapy?",
      answer:
        "People with certain metal implants in or near the head, uncontrolled seizure disorders, or unstable medical conditions may not be good candidates for TMS therapy. A full medical history review is necessary to rule out safety concerns and determine the most appropriate treatment option.",
    },
    {
      question: "How long does it take to know if TMS therapy is working?",
      answer:
        "Most patients begin noticing improvements after a few weeks of consistent treatment. Because results are gradual, commitment to the full treatment schedule is important. Individuals who meet TMS therapy eligibility criteria often experience continued improvement as sessions progress.",
    },
  ];

  const relatedPosts = [
    {
      title: "Is TMS Therapy Covered by Insurance?",
      excerpt:
        "Learn eligibility, approval criteria, costs, and coverage details to access effective TMS treatment.",
      link: "/blog/is-tms-therapy-covered-by-insurance",
      image:
        "https://res.cloudinary.com/de4kw1t2i/image/upload/v1767775408/37_l0hdbk.png",
    },
    {
      title: "How Successful is TMS Treatment?",
      excerpt:
        "Learn about TMS therapy success rates based on clinical research and real patient outcomes.",
      link: "/blog/how-successful-tms-treatment",
      image:
        "https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/15_ym6n6b.png",
    },
    {
      title: "Is TMS Therapy Permanent?",
      excerpt:
        "Discover how long TMS therapy results last and what factors influence the longevity of treatment benefits.",
      link: "/blog/is-tms-therapy-permanent",
      image:
        "https://res.cloudinary.com/de4kw1t2i/image/upload/v1763376733/13_nl6y75.png",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Who Is a Good Candidate for TMS Therapy? Complete Guide",
    description:
      "Learn who is a good candidate for TMS therapy, eligibility criteria, benefits, risks, and how to know if TMS treatment is right for you.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=1200", // Generic medical consultation image
    author: {
      "@type": "Person",
      name: "Dr. Keerthy Sunder",
      affiliation: {
        "@type": "Organization",
        name: "KarmaTMS",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "KarmaTMS",
      logo: {
        "@type": "ImageObject",
        url: "https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png",
      },
    },
    datePublished: "2026-01-07",
    dateModified: "2026-01-07",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id":
        "https://karmatms.com/blog/who-is-a-good-candidate-for-tms-therapy",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Who Is a Good Candidate for TMS Therapy? Complete Guide"
        description="Learn who is a good candidate for TMS therapy, eligibility criteria, benefits, risks, and how to know if TMS treatment is right for you."
        keywords="who is a good candidate for tms therapy, tms therapy eligibility, tms treatment candidates, tms therapy for depression, transcranial magnetic stimulation, treatment resistant depression, non invasive depression treatment, mental health clinic palm springs, tms therapy benefits, tms therapy safety, alternatives to antidepressants, advanced depression treatment"
        canonical="/blog/who-is-a-good-candidate-for-tms-therapy"
        ogImage="https://res.cloudinary.com/de4kw1t2i/image/upload/v1767775415/36_sqhczb.png"
        ogType="article"
      />

      <StructuredData
        type="breadcrumb"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          {
            name: "Who Is a Good Candidate for TMS Therapy?",
            url: "/blog/who-is-a-good-candidate-for-tms-therapy",
          },
        ]}
      />

      <script type="application/ld+json">
        {JSON.stringify(articleSchema)}
      </script>

      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <Navigation />

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
                <BreadcrumbPage>
                  Who Is a Good Candidate for TMS Therapy?
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <section className="relative bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-sm">
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Calendar className="w-4 h-4" />
                January 07, 2026
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <Clock className="w-4 h-4" />
                12 min read
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-3 py-1 rounded-full backdrop-blur-sm">
                <User className="w-4 h-4" />
                Dr. Keerthy Sunder
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Who Is a Good Candidate for TMS Therapy? Complete Guide
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Learn who is a good candidate for TMS therapy, eligibility
              criteria, benefits, risks, and how to know if TMS treatment is
              right for you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="bg-white text-[#572670] hover:bg-gray-100"
              >
                <Link to="/contact">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24">
              <Card className="border-[#572670]/20">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4 text-[#572670]">
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`block w-full text-left px-3 py-2 rounded-md text-sm transition-all ${
                          activeSection === item.id
                            ? "bg-[#572670] text-white font-medium"
                            : "text-gray-700 hover:bg-[#572670]/10"
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                  <div className="mt-6 pt-6 border-t">
                    <Button
                      asChild
                      className="w-full bg-[#572670] hover:bg-[#7B3FA0]"
                    >
                      <Link to="/contact">Check Eligibility</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </aside>

          <article className="lg:col-span-3 prose prose-lg max-w-none">
            <div className="mb-12">
              <img
                src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1767775415/36_sqhczb.png"
                alt="Who is a good candidate for TMS therapy receiving non-invasive treatment at a mental health clinic"
                className="w-full object-cover rounded-lg mb-6"
              />

              <p className="text-xl text-gray-700 leading-relaxed">
                If you are researching who is a good candidate for TMS therapy,
                you are likely looking for answers that go beyond surface-level
                explanations. Many people who reach this stage have already
                tried medications, counseling, or lifestyle changes and still
                feel stuck. At a TMS treatment in Palm Springs, Mental Health
                Clinic, patients often ask whether they truly qualify for this
                advanced therapy and what makes someone an ideal candidate. This
                guide is written to give clear, medically accurate, and
                human-centered information while aligning with Google’s latest
                guidelines for high-quality, trustworthy health content.
              </p>
            </div>

            <section
              ref={(el) => (sectionsRef.current["understanding-tms"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Understanding TMS Therapy from a Medical Perspective
              </h2>
              <p className="mb-4">
                Transcranial Magnetic Stimulation, commonly known as TMS
                therapy, is a non-invasive brain stimulation treatment that
                targets areas of the brain involved in mood regulation. In
                people with depression and certain other mental health
                conditions, these regions tend to be underactive. TMS therapy
                uses focused magnetic pulses to stimulate these areas,
                encouraging healthier brain activity over time.
              </p>
              <p className="mb-4">
                Unlike medication-based treatments, TMS therapy does not affect
                the entire body. There is no need for anesthesia, no sedation,
                and no recovery time after each session. Patients remain awake
                and alert and can return to normal activities immediately.
                Because of this targeted and well-tolerated approach, interest
                in TMS therapy eligibility has grown rapidly among patients
                seeking alternatives to traditional psychiatric care.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["why-candidacy-matters"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Why Knowing Who Is a Good Candidate for TMS Therapy Matters
              </h2>
              <p className="mb-4">
                Determining who is a good candidate for TMS therapy is not just
                about qualifying for a treatment. It is about ensuring safety,
                maximizing the chance of success, and setting realistic
                expectations. TMS therapy is highly effective for the right
                patients, but it is not designed to be a one-size-fits-all
                solution.
              </p>
              <p className="mb-4">
                A proper evaluation looks at diagnosis, symptom history,
                response to previous treatments, medical background, and
                personal goals. This process helps clinicians decide whether TMS
                therapy is appropriate now, later, or not at all. Understanding
                these factors empowers patients to make informed decisions about
                their mental health journey.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["treatment-resistant"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Adults with Treatment-Resistant Depression
              </h2>
              <p className="mb-4">
                The strongest and most well-established group of TMS treatment
                candidates includes adults with treatment-resistant depression.
                This typically refers to individuals who have tried one or more
                antidepressant medications at appropriate doses and durations
                without experiencing meaningful improvement.
              </p>
              <p className="mb-4">
                For many patients, years of medication trials can lead to
                frustration, emotional exhaustion, and a sense of hopelessness.
                TMS therapy offers a different approach by directly stimulating
                the brain rather than relying solely on chemical changes.
                Clinical studies and real-world outcomes consistently show that
                people with treatment-resistant depression are among the most
                likely to benefit from TMS therapy.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["medication-intolerance"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Individuals Who Cannot Tolerate Antidepressant Side Effects
              </h2>
              <p className="mb-4">
                Another important group when discussing TMS therapy eligibility
                includes people who cannot tolerate antidepressant medications.
                Side effects such as weight gain, sexual dysfunction, fatigue,
                digestive problems, or emotional blunting can significantly
                affect quality of life. In some cases, these side effects lead
                patients to discontinue treatment altogether.
              </p>
              <p className="mb-4">
                Because TMS therapy is non-systemic, it avoids many of these
                issues. The magnetic stimulation is localized to specific brain
                regions, which means the rest of the body is largely unaffected.
                For patients who are sensitive to medications or prefer a
                non-drug approach, this can make TMS therapy an appealing and
                practical option.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["mdd-diagnosis"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Patients Diagnosed with Major Depressive Disorder
              </h2>
              <p className="mb-4">
                A formal diagnosis of Major Depressive Disorder is a key factor
                in determining who is a good candidate for TMS therapy. During
                the evaluation process, clinicians assess symptom severity,
                duration, functional impairment, and previous treatment
                outcomes. TMS therapy is particularly well-suited for
                individuals with moderate to severe depression that persists
                despite standard care.
              </p>
              <p className="mb-4">
                The goal of treatment is not simply to reduce symptoms on a
                checklist. It is to help patients regain motivation, emotional
                balance, and the ability to engage fully in daily life. When
                used appropriately, TMS therapy can support long-term
                improvement rather than short-term symptom control.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["other-conditions"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                TMS Therapy Eligibility for Anxiety, PTSD, and OCD
              </h2>
              <p className="mb-4">
                While depression remains the primary indication, TMS therapy
                eligibility may extend to other mental health conditions in
                certain cases. Anxiety disorders, post-traumatic stress
                disorder, and obsessive-compulsive disorder are increasingly
                being treated with TMS therapy under careful clinical guidance.
              </p>
              <p className="mb-4">
                Candidacy in these situations depends on the individual’s
                symptom pattern and whether depression is also present. A
                thorough psychiatric evaluation helps determine if TMS therapy
                may be beneficial on its own or as part of a combined treatment
                plan. This personalized approach is essential to achieving
                meaningful results.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["non-invasive-appeal"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                The Appeal of a Non-Invasive and Outpatient Treatment
              </h2>
              <p className="mb-4">
                One reason many people explore who is a good candidate for TMS
                therapy is the desire for a treatment that fits into everyday
                life. TMS therapy is performed on an outpatient basis and does
                not require hospitalization or downtime. Sessions are typically
                scheduled on weekdays, and patients can drive themselves to and
                from appointments.
              </p>
              <p className="mb-4">
                This convenience makes TMS therapy especially appealing to
                working professionals, parents, and caregivers who need
                effective treatment without major lifestyle disruption. The
                ability to continue normal activities while receiving care is
                often a deciding factor for many patients.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["safety-factors"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Medical and Safety Factors That Affect Candidacy
              </h2>
              <p className="mb-4">
                Although TMS therapy has an excellent safety profile, certain
                medical considerations must be evaluated carefully. Individuals
                with non-removable metal objects in or near the head, such as
                certain types of aneurysm clips or cochlear implants, are
                generally not eligible due to the magnetic field used during
                treatment.
              </p>
              <p className="mb-4">
                A history of seizures or certain neurological conditions does
                not automatically disqualify someone, but it does require closer
                evaluation. Full transparency about medical history is essential
                to ensure safe and appropriate care. These precautions reflect
                the importance of personalized screening rather than blanket
                eligibility rules.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["evaluation-role"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                The Role of a Comprehensive Psychiatric Evaluation
              </h2>
              <p className="mb-4">
                Determining TMS therapy eligibility is a detailed and thoughtful
                process. A comprehensive psychiatric evaluation reviews mental
                health history, current symptoms, medication trials, medical
                conditions, and personal treatment goals. This evaluation
                ensures that TMS therapy is recommended for the right reasons
                and at the right time.
              </p>
              <p className="mb-4">
                At Karma TMS, this evaluation process is designed to be
                patient-centered and evidence-based. The focus is on
                understanding the individual, not just the diagnosis, which
                plays a critical role in long-term treatment success.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["commitment"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Commitment, Readiness, and Realistic Expectations
              </h2>
              <p className="mb-4">
                An often overlooked factor in who is a good candidate for TMS
                therapy is the patient’s readiness to commit to the treatment
                schedule. TMS therapy typically involves multiple sessions per
                week over several weeks. Consistency is essential to achieving
                optimal results.
              </p>
              <p className="mb-4">
                Equally important is having realistic expectations. Improvement
                with TMS therapy is usually gradual, with changes becoming more
                noticeable as treatment progresses. Patients who are informed,
                motivated, and engaged in their care tend to experience the most
                meaningful outcomes.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["who-is-not"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Who May Not Be an Ideal Candidate for TMS Therapy
              </h2>
              <p className="mb-4">
                While many people qualify, TMS therapy is not suitable for
                everyone. Individuals with untreated substance use disorders,
                unstable medical conditions, or certain neurological risks may
                need alternative treatments or stabilization before considering
                TMS therapy. In these cases, clinicians may recommend addressing
                underlying issues first.
              </p>
              <p className="mb-4">
                This careful approach reflects responsible mental health care
                and ensures that patients receive the most appropriate treatment
                for their situation rather than pursuing options that may not be
                effective or safe.
              </p>
            </section>

            <section
              ref={(el) => (sectionsRef.current["future-care"] = el)}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                How TMS Therapy Is Shaping the Future of Mental Health Care
              </h2>
              <p className="mb-4">
                TMS therapy represents a major shift in how depression and
                related conditions are treated. By directly targeting brain
                function, it offers a level of precision that traditional
                treatments often cannot achieve. For patients who have struggled
                for years without relief, understanding who is a good candidate
                for TMS therapy can be the first step toward renewed hope.
              </p>
              <p className="mb-4">
                As research continues and access expands, TMS therapy is
                becoming an integral part of comprehensive mental health care.
                Its effectiveness, safety, and non-invasive nature make it a
                valuable option for many individuals seeking lasting
                improvement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Final Thoughts
              </h2>
              <p className="mb-4">
                So, who is a good candidate for TMS therapy? In most cases, it
                is an adult with depression or related conditions who has not
                responded adequately to medications, cannot tolerate side
                effects, and is seeking a non-invasive, evidence-based solution.
                Determining TMS therapy eligibility through a thorough
                psychiatric evaluation remains the most reliable way to ensure
                safety and success.
              </p>
            </section>

            <AuthorBox
              name="Dr. Keerthy Sunder"
              role="Board-Certified Psychiatrist"
              bio="Dr. Keerthy Sunder is a board-certified psychiatrist with over 15 years of experience in treating depression, anxiety, and PTSD."
              image="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/ebadb369-a58d-421c-b937-24f900be5867.png"
            />

            <section
              ref={(el) => (sectionsRef.current["faqs"] = el)}
              className="mb-12 mt-12"
            >
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Frequently Asked Questions
              </h2>
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

            <Card className="bg-gradient-to-br from-[#572670] to-[#7B3FA0] text-white mb-12">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Find Out If You're a Candidate?
                </h3>
                <p className="text-lg mb-6 text-white/90">
                  Join the thousands who have found relief with TMS therapy.
                  Schedule a consultation to confirm your eligibility today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-white text-[#572670] hover:bg-gray-100"
                  >
                    <Link to="/contact">Schedule Free Consultation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-[#572670] mb-6">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post, index) => (
                  <Card
                    key={index}
                    className="border-[#572670]/20 overflow-hidden hover:shadow-lg transition-shadow"
                  >
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full object-cover"
                    />
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-2 hover:text-[#572670] transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {post.excerpt}
                      </p>
                      <Button
                        asChild
                        variant="ghost"
                        className="text-[#572670] p-0 h-auto hover:bg-transparent"
                      >
                        <Link
                          to={post.link}
                          className="inline-flex items-center gap-2"
                        >
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

export default WhoIsAGoodCandidateForTMSTherapyBlogPostPage;
