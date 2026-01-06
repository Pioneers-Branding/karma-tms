
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger } from
"@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Brain, Users } from "lucide-react";

const FAQsPage = () => {
  const faqCategories = [
  {
    id: "tms-therapy",
    title: "TMS Therapy",
    icon: <Brain className="h-5 w-5" />,
    questions: [
    {
      question: "What is TMS therapy and how does it work?",
      answer: "TMS (Transcranial Magnetic Stimulation) is a non-invasive treatment that uses magnetic fields to stimulate nerve cells in the brain. It targets specific areas associated with mood control to help alleviate symptoms of depression, anxiety, and other mental health conditions."
    },
    {
      question: "Is TMS therapy safe?",
      answer: "Yes, TMS therapy is FDA-approved and considered very safe. It's non-invasive, requires no anesthesia, and has minimal side effects. The most common side effect is mild scalp discomfort during treatment, which typically decreases over time."
    },
    {
      question: "How long does a TMS treatment session take?",
      answer: "Each TMS session typically lasts 18-37 minutes, depending on the specific protocol. Most patients receive treatment 5 days a week for 4-6 weeks, though the exact duration varies based on individual needs."
    },
    {
      question: "When will I see results from TMS therapy?",
      answer: "While individual responses vary, many patients begin to notice improvements after 2-4 weeks of treatment. Some patients may see changes sooner, while others may require the full treatment course to experience significant benefits."
    },
    {
      question: "Can I drive after TMS treatment?",
      answer: "Yes, you can drive immediately after TMS treatment. Unlike ECT, TMS doesn't affect your consciousness or memory, so you can resume normal activities right after your session."
    }]

  },
  {
    id: "depression-anxiety",
    title: "Depression & Anxiety",
    icon: <Heart className="h-5 w-5" />,
    questions: [
    {
      question: "How effective is TMS for depression?",
      answer: "Clinical studies show that approximately 50-60% of people with treatment-resistant depression experience a significant reduction in symptoms with TMS therapy. About one-third achieve complete remission of their depression."
    },
    {
      question: "Can TMS help with anxiety disorders?",
      answer: "Yes, TMS can be effective for various anxiety disorders including generalized anxiety disorder, panic disorder, and PTSD. The treatment targets brain regions involved in emotional regulation and stress response."
    },
    {
      question: "What if antidepressants haven't worked for me?",
      answer: "TMS is specifically designed for people who haven't responded well to traditional antidepressant medications. It's considered a treatment for 'treatment-resistant depression' and offers hope when medications have been ineffective."
    },
    {
      question: "Can I continue my medications during TMS treatment?",
      answer: "In most cases, yes. TMS can be used alongside antidepressant medications. Our medical team will review all your current medications to ensure there are no contraindications before starting treatment."
    }]

  },
  {
    id: "treatment-process",
    title: "Treatment Process",
    icon: <Users className="h-5 w-5" />,
    questions: [
    {
      question: "What happens during the first TMS appointment?",
      answer: "Your first appointment includes a comprehensive evaluation, brain mapping to determine the precise treatment location, and motor threshold testing. This process typically takes 60-90 minutes and ensures personalized treatment parameters."
    },
    {
      question: "Do I need to prepare anything before TMS treatment?",
      answer: "No special preparation is needed. Simply arrive as you normally would. Remove any metal objects from your head/neck area (jewelry, hairpins, etc.) and inform us of any changes in medications or health status."
    },
    {
      question: "What does TMS treatment feel like?",
      answer: "Most patients describe the sensation as a tapping or knocking feeling on the scalp. Some may experience mild discomfort initially, but this typically decreases as you become accustomed to the treatment over the first few sessions."
    },
    {
      question: "How many TMS sessions will I need?",
      answer: "The standard protocol involves 36 sessions over 6-7 weeks (5 sessions per week). However, the exact number may vary based on your individual response and our clinical assessment. Some patients may benefit from additional sessions."
    }]

  },
  {
    id: "eligibility-insurance",
    title: "Eligibility & Insurance",
    icon: <Users className="h-5 w-5" />,
    questions: [
    {
      question: "Am I a candidate for TMS therapy?",
      answer: "Good candidates for TMS typically have treatment-resistant depression or anxiety, haven't responded well to medications, or can't tolerate medication side effects. Our team will conduct a thorough evaluation to determine if TMS is right for you."
    },
    {
      question: "Does insurance cover TMS therapy?",
      answer: "Most major insurance plans, including Medicare, cover TMS therapy for treatment-resistant depression. We work with your insurance company to verify coverage and handle pre-authorization requirements."
    },
    {
      question: "What if I'm not covered by insurance?",
      answer: "We offer flexible payment plans and financing options to make TMS therapy accessible. Our financial counselors will work with you to find a solution that fits your budget and needs."
    },
    {
      question: "Are there any conditions that would prevent me from receiving TMS?",
      answer: "TMS may not be suitable if you have certain types of metal implants in your head, a history of seizures, or certain neurological conditions. Our medical team will review your complete medical history during the consultation."
    }]

  }];


  const doctorVideos = [
  {
    id: 1,
    title: "What to Expect During Your First TMS Session",
    thumbnail: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=225&fit=crop&crop=face",
    duration: "3:45",
    topic: "TMS Process"
  },
  {
    id: 2,
    title: "TMS vs Traditional Antidepressants",
    thumbnail: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=225&fit=crop&crop=face",
    duration: "2:30",
    topic: "Treatment Options"
  },
  {
    id: 3,
    title: "Managing Side Effects During TMS Treatment",
    thumbnail: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=225&fit=crop&crop=face",
    duration: "4:12",
    topic: "Side Effects"
  },
  {
    id: 4,
    title: "Success Stories: Patient Recovery Journey",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&h=225&fit=crop&crop=face",
    duration: "5:20",
    topic: "Patient Stories"
  },
  {
    id: 5,
    title: "TMS for Anxiety: How It Helps",
    thumbnail: "https://images.unsplash.com/photo-1667745536414-0756ad6c23a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MTg3MTl8MHwxfHNlYXJjaHwxfHxBJTIwY3JvcHBlZCUyMGltYWdlJTIwb2YlMjBhJTIwc2VyZW5lJTIwYW5kJTIwY2FsbWluZyUyMHNjZW5lJTJDJTIwcG9zc2libHklMjByZWxhdGVkJTIwdG8lMjBtZW50YWwlMjBoZWFsdGglMjBvciUyMHRoZXJhcHkufGVufDB8fHx8MTc1NjcxNDMxOXww&ixlib=rb-4.1.0&q=80&w=200$w=400",
    duration: "3:15",
    topic: "Anxiety Treatment"
  },
  {
    id: 6,
    title: "Insurance Coverage for TMS Therapy",
    thumbnail: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=400&h=225&fit=crop&crop=face",
    duration: "2:45",
    topic: "Insurance"
  }];


  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-600 mb-2">
              Get answers to common questions about TMS therapy and our treatment approach
            </p>
            <p className="text-gray-500">
              Can't find what you're looking for? Contact us directly for personalized answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-4">
              {faqCategories.map((category) =>
              <Card key={category.id} className="border border-gray-200">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                        {category.icon}
                      </div>
                      <h2 className="text-2xl font-semibold text-gray-900">
                        {category.title}
                      </h2>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, index) =>
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="border-b border-gray-100 last:border-b-0">

                          <AccordionTrigger className="text-left py-4 hover:no-underline">
                            <span className="font-medium text-gray-900 pr-4">
                              {faq.question}
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="pb-4 pt-0">
                            <p className="text-gray-600 leading-relaxed">
                              {faq.answer}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                    )}
                    </Accordion>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Ask the Doctor Video Section - hidden as requested */}
      {/*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      <section className="py-8 bg-gray-50">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <div className="container mx-auto px-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="text-center mb-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <h2 className="text-3xl font-bold text-gray-900 mb-4">Ask the Doctor</h2>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             Watch our expert physicians answer the most common questions about TMS therapy, 
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             treatment process, and patient care.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           </p>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           {doctorVideos.map((video) => (
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             <Card key={video.id} className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               <CardContent className="p-0">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <div className="relative overflow-hidden rounded-t-lg">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <img src={video.thumbnail} alt={video.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       <Play className="h-6 w-6 text-blue-600 ml-1" />
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">{video.duration}</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <div className="absolute bottom-3 left-3 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">{video.topic}</div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 <div className="p-4">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <h3 className="font-semibold text-gray-900 leading-tight mb-2 group-hover:text-blue-600 transition-colors">{video.title}</h3>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700 font-medium">Watch Video →</Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               </CardContent>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             </Card>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ))}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         <div className="text-center mt-8">
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8">View All Doctor Videos</Button>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       </div>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      </section>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */}

    

      <FooterSection />
    </div>);

};

export default FAQsPage;