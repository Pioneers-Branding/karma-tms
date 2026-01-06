import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import SEO from '@/components/SEO';
import StructuredData from '@/components/StructuredData';
import AuthorBox from '@/components/AuthorBox';
import { Link } from 'react-router-dom';
import { ChevronRight, Phone, Calendar } from 'lucide-react';

export default function TMSAnxietyVeteransBlogPostPage() {
  const publishDate = '2025-10-27';
  const author = {
    name: 'Dr. Keerthy Sunder',
    credentials: 'MD, Board-Certified Psychiatrist',
    image: 'https://www.prtms.com/wp-content/uploads/2023/03/Dr.-Keerthy-Sunder-scaled.jpg',
    bio: 'Dr. Keerthy Sunder is a board-certified psychiatrist specializing in TMS therapy and treatment-resistant mental health conditions. With extensive experience treating veterans, Dr. Sunder is dedicated to providing innovative, evidence-based care to those who have served our country.'
  };

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

  return (
    <>
      <SEO
        title="TMS for Anxiety in Veterans: Beyond Medication Treatment | Karma TMS"
        description="Learn how TMS therapy helps veterans with anxiety disorders. Discover how brain stimulation regulates anxiety centers beyond traditional medication. VA anxiety support available."
        keywords="va anxiety, veteran anxiety, veterans with anxiety, anxiety for veterans, TMS for anxiety, veteran anxiety treatment, anxiety disorder veterans"
        canonicalUrl="https://www.karmatms.com/blogs/tms-anxiety-veterans" />

      <StructuredData data={structuredData} />
      <Navigation />

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 pt-24 pb-4">
          <nav className="flex items-center space-x-2 text-sm text-slate-600">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/blog" className="hover:text-purple-600 transition-colors">Blog</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-purple-600">TMS for Anxiety in Veterans</span>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-full inline-block text-sm font-semibold mb-6">
              Treatment Innovation
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              TMS for Anxiety in Veterans: A Promising Path Beyond Medication
            </h1>
            <div className="flex items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <img
                  src={author.image}
                  alt={author.name}
                  className="w-10 h-10 rounded-full object-cover" />

                <div>
                  <p className="font-semibold text-slate-900">{author.name}</p>
                  <p className="text-sm">{author.credentials}</p>
                </div>
              </div>
              <span>•</span>
              <time dateTime={publishDate} className="text-sm">
                {new Date(publishDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
            </div>
            <img
              src="https://res.cloudinary.com/de4kw1t2i/image/upload/v1763033666/6_rrkhgo.png"
              alt="TMS for Anxiety in Veterans"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl mb-12" />

          </div>
        </section>

        {/* Content */}
        <article className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            
            {/* Introduction */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Understanding Anxiety in Veterans</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Anxiety disorders affect millions of veterans, often as a standalone condition separate from PTSD. While many associate veteran mental health primarily with combat-related PTSD, veteran anxiety can manifest independently and requires specialized attention and treatment.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For veterans with anxiety who haven't found relief through traditional treatments, Transcranial Magnetic Stimulation (TMS) offers a promising alternative path—one that works by directly regulating the brain's anxiety centers without the side effects of medication.
              </p>
            </section>

            {/* Anxiety as Standalone Disorder */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Anxiety as a Standalone Disorder in Veterans</h2>
              <div className="bg-slate-50 rounded-xl p-8 mb-6">
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  While often discussed alongside PTSD, anxiety disorders can occur independently in veterans. The stress of military service, transitions to civilian life, and ongoing life challenges can trigger various anxiety conditions.
                </p>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Common Anxiety Disorders in Veterans:</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Generalized Anxiety Disorder (GAD)</h4>
                    <p className="text-slate-700">Persistent, excessive worry about various aspects of life including health, finances, work, and family.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Panic Disorder</h4>
                    <p className="text-slate-700">Recurrent, unexpected panic attacks with intense physical symptoms and fear of future attacks.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Social Anxiety Disorder</h4>
                    <p className="text-slate-700">Intense fear of social situations, particularly common during the transition from military to civilian life.</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="text-xl font-semibold text-slate-900 mb-2">Specific Phobias</h4>
                    <p className="text-slate-700">Intense fear of specific objects or situations, which may develop or worsen during service.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Signs and Symptoms */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Recognizing Anxiety in Veterans</h2>
              <img
                src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/17785/66e6e1ae-8cc3-4469-bfaf-b1f3f3d07006.webp"
                alt="Understanding anxiety in veterans"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg mb-6" />

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Physical Symptoms</h3>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li>Rapid heartbeat or palpitations</li>
                    <li>Sweating and trembling</li>
                    <li>Shortness of breath</li>
                    <li>Muscle tension and headaches</li>
                    <li>Fatigue and sleep disturbances</li>
                    <li>Gastrointestinal issues</li>
                  </ul>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Psychological Symptoms</h3>
                  <ul className="list-disc pl-6 text-slate-700 space-y-2">
                    <li>Excessive worry or fear</li>
                    <li>Difficulty concentrating</li>
                    <li>Restlessness or feeling on edge</li>
                    <li>Irritability</li>
                    <li>Sense of impending doom</li>
                    <li>Avoidance of certain situations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* VA Anxiety Support */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">VA Anxiety Support and Resources</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                The Department of Veterans Affairs (VA) recognizes anxiety disorders as a significant health concern for veterans and offers various support services:
              </p>
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">VA Benefits for Anxiety:</h3>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li><strong>Disability Compensation:</strong> Veterans can receive disability ratings for anxiety disorders</li>
                  <li><strong>Mental Health Services:</strong> Access to psychiatrists, psychologists, and therapists</li>
                  <li><strong>Evidence-Based Treatments:</strong> Cognitive Behavioral Therapy (CBT) and other proven interventions</li>
                  <li><strong>Medication Management:</strong> Access to anxiety medications through VA pharmacies</li>
                  <li><strong>Crisis Support:</strong> 24/7 Veterans Crisis Line (988, then press 1)</li>
                  <li><strong>TMS Therapy:</strong> Growing availability of TMS treatment at select VA facilities</li>
                </ul>
              </div>
            </section>

            {/* How TMS Works for Anxiety */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">How TMS Works for Anxiety</h2>
              <img
                src="https://images.unsplash.com/photo-1662596594694-a7ec7c2f8979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBbiUyMGltYWdlJTIwZGVwaWN0aW5nJTIwVE1TJTIwdGhlcmFweSUyMGZvciUyMGFueGlldHklMkMlMjBzaG93Y2FzaW5nJTIwYSUyMHNlcmVuZSUyMGFuZCUyMGNhbG1pbmclMjBlbnZpcm9ubWVudC58ZW58MHx8fHwxNzYyNzgxMjg4fDA&ixlib=rb-4.1.0&q=80&w=200$w=800"
                alt="TMS therapy for anxiety"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg mb-6" />

              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Transcranial Magnetic Stimulation (TMS) is a non-invasive treatment that uses magnetic pulses to stimulate specific areas of the brain involved in mood regulation and anxiety processing.
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">The Science Behind TMS for Anxiety</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">Targeting Anxiety Centers</h4>
                    <p className="text-slate-700 mb-2">
                      TMS targets the dorsolateral prefrontal cortex (DLPFC) and other brain regions involved in:
                    </p>
                    <ul className="list-disc pl-6 text-slate-700 space-y-1">
                      <li>Emotional regulation</li>
                      <li>Fear response modulation</li>
                      <li>Worry and rumination control</li>
                      <li>Stress response management</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">Neuroplasticity and Healing</h4>
                    <p className="text-slate-700">
                      By repeatedly stimulating these areas, TMS promotes neuroplasticity—the brain's ability to form new neural connections and pathways. This helps "retrain" the brain's anxiety response, leading to lasting improvements.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-3">The Treatment Process</h4>
                    <ul className="list-disc pl-6 text-slate-700 space-y-2">
                      <li>Sessions last 20-40 minutes</li>
                      <li>Typically 5 days per week for 4-6 weeks</li>
                      <li>No anesthesia or sedation required</li>
                      <li>Return to normal activities immediately after</li>
                      <li>Minimal to no side effects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Brain Regulation Through TMS */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Brain Regulation Through TMS: Beyond Symptom Management</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Unlike medications that work systemically throughout the body, TMS offers targeted brain regulation:
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">Traditional Medication Approach</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Systemic side effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Weight gain, sexual dysfunction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Dependency concerns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Trial and error process</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-red-500 mt-1">✗</span>
                      <span>Daily pill requirements</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">TMS Approach</h3>
                  <ul className="space-y-3 text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Targeted brain stimulation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Minimal side effects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>No systemic medications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Promotes lasting brain changes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Non-invasive and well-tolerated</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits Beyond Medication */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Benefits of TMS for Veterans with Anxiety</h2>
              <div className="space-y-6">
                <div className="bg-blue-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">1. No Systemic Side Effects</h3>
                  <p className="text-slate-700">
                    TMS doesn't cause weight gain, sexual dysfunction, or the cognitive fog often associated with anxiety medications. This is particularly important for veterans returning to work or education.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">2. Effective for Treatment-Resistant Anxiety</h3>
                  <p className="text-slate-700">
                    Studies show TMS can be effective even when multiple medications have failed, offering new hope for veterans who haven't found relief through traditional treatments.
                  </p>
                </div>
                <div className="bg-green-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">3. Can Be Combined with Other Treatments</h3>
                  <p className="text-slate-700">
                    TMS can be used alongside therapy, reduced medication doses, or other interventions, providing a comprehensive treatment approach.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">4. Lasting Results</h3>
                  <p className="text-slate-700">
                    Rather than requiring daily pills, TMS promotes lasting changes in brain function, with many patients experiencing sustained improvement after treatment completion.
                  </p>
                </div>
              </div>
            </section>

            {/* Treatment Outcomes */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Treatment Outcomes: What Veterans Can Expect</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Clinical studies and real-world outcomes demonstrate the effectiveness of TMS for anxiety in veterans:
              </p>
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-8 mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Clinical Evidence:</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-purple-600 mb-2">60-70%</div>
                    <p className="text-slate-700">of patients show significant anxiety reduction</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">50%+</div>
                    <p className="text-slate-700">achieve remission of anxiety symptoms</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600 mb-2">3-4 weeks</div>
                    <p className="text-slate-700">typical timeframe to notice improvements</p>
                  </div>
                </div>
              </div>
              <div className="bg-slate-50 border-l-4 border-purple-500 p-6 rounded-lg">
                <h4 className="text-xl font-bold text-slate-900 mb-3">What Veterans Report:</h4>
                <ul className="list-disc pl-6 text-slate-700 space-y-2">
                  <li>Reduced frequency and intensity of anxiety attacks</li>
                  <li>Improved ability to manage stressful situations</li>
                  <li>Better sleep quality</li>
                  <li>Enhanced concentration and focus</li>
                  <li>Greater engagement in daily activities and relationships</li>
                  <li>Reduced reliance on anti-anxiety medications</li>
                </ul>
              </div>
            </section>

            {/* Who Is a Good Candidate */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Is TMS Right for Your Anxiety?</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                TMS may be an excellent option for veterans with anxiety who:
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-slate-700">Haven't responded adequately to medications</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-slate-700">Experience significant side effects from anxiety medications</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-slate-700">Want to reduce or eliminate medication use</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-slate-700">Are committed to a 4-6 week treatment course</p>
                </div>
                <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
                  <span className="text-green-500 text-xl">✓</span>
                  <p className="text-slate-700">Prefer non-invasive, medication-free treatment options</p>
                </div>
              </div>
            </section>

            {/* Getting Started */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Getting Started with TMS for Anxiety</h2>
              <div className="bg-purple-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-slate-900 mb-4">The Process at Karma TMS:</h3>
                <ol className="space-y-4 text-slate-700">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">1</span>
                    <div>
                      <strong className="text-slate-900">Initial Consultation:</strong> Comprehensive evaluation of your anxiety symptoms and treatment history
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">2</span>
                    <div>
                      <strong className="text-slate-900">Brain Mapping:</strong> Precise identification of treatment targets using advanced technology
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">3</span>
                    <div>
                      <strong className="text-slate-900">Personalized Treatment Plan:</strong> Customized TMS protocol designed for your specific needs
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">4</span>
                    <div>
                      <strong className="text-slate-900">Treatment Sessions:</strong> Regular TMS sessions over 4-6 weeks
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">5</span>
                    <div>
                      <strong className="text-slate-900">Ongoing Support:</strong> Regular monitoring and follow-up care
                    </div>
                  </li>
                </ol>
              </div>
            </section>

            {/* Conclusion */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">A New Path Forward for Veterans with Anxiety</h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                For veterans with anxiety, TMS represents more than just another treatment option—it's a fundamentally different approach that addresses the root neurological causes of anxiety rather than just masking symptoms.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                By directly regulating the brain's anxiety centers through targeted magnetic stimulation, TMS offers veterans a path to lasting relief without the burden of daily medications and their side effects.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                If you're a veteran struggling with anxiety—whether generalized anxiety, panic disorder, or social anxiety—and traditional treatments haven't provided the relief you deserve, TMS therapy may be the answer you've been looking for.
              </p>
            </section>

            {/* Related Articles */}
            <section className="mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to="/blogs/understanding-ptsd-veterans" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h4 className="font-semibold text-purple-600 mb-2">Understanding PTSD in Veterans</h4>
                  <p className="text-sm text-slate-600">Learn about PTSD signs, symptoms, and treatment paths for veterans.</p>
                </Link>
                <Link to="/blogs/va-veterans-ptsd-tms" className="p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors">
                  <h4 className="font-semibold text-purple-600 mb-2">VA Approves TMS for Veterans</h4>
                  <p className="text-sm text-slate-600">Discover how to access TMS therapy through VA benefits.</p>
                </Link>
              </div>
            </section>

          </div>
        </article>

        {/* Author Box */}
        <div className="container mx-auto px-4 pb-16">
          <div className="max-w-4xl mx-auto">
            <AuthorBox
              name={author.name}
              credentials={author.credentials}
              image={author.image}
              bio={author.bio} />

          </div>
        </div>

        {/* CTA Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Break Free from Anxiety with TMS Therapy
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Discover how TMS can help you overcome anxiety without the side effects of medication. Specialized care for veterans at Karma TMS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-colors font-semibold text-lg">

                  <Calendar className="h-5 w-5" />
                  Schedule Free Consultation
                </Link>
                <a
                  href="tel:760-760-5675"
                  className="inline-flex items-center justify-center gap-2 bg-blue-700 text-white px-8 py-4 rounded-lg hover:bg-blue-800 transition-colors font-semibold text-lg border-2 border-white">

                  <Phone className="h-5 w-5" />
                  (760) 449-8185
                </a>
              </div>
              <p className="mt-6 text-blue-100">
                Proudly serving veterans in Palm Springs, Twentynine Palms, and surrounding communities
              </p>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>);

}