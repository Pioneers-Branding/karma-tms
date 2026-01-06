import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Card, CardContent } from '@/components/ui/card';
import { AlertCircle, FileText, Shield } from 'lucide-react';

const DisclaimerPage = () => {
  const sections = [
  {
    title: 'Medical Information Disclaimer',
    content: [
    'The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.',
    'Never disregard professional medical advice or delay in seeking it because of something you have read on this website. If you think you may have a medical emergency, call your doctor or 911 immediately.']

  },
  {
    title: 'Treatment Information',
    content: [
    'Information about Transcranial Magnetic Stimulation (TMS) therapy and other treatments described on this website is provided for educational purposes. Individual results may vary, and not all patients will experience the same outcomes.',
    'TMS therapy is FDA-cleared for the treatment of Major Depressive Disorder and other conditions as specified by the FDA. However, the effectiveness of treatment can vary based on individual circumstances, medical history, and adherence to treatment protocols.',
    'All treatment decisions should be made in consultation with qualified healthcare professionals who can evaluate your specific situation and medical needs.']

  },
  {
    title: 'No Doctor-Patient Relationship',
    content: [
    'The use of this website and the information contained herein does not create a doctor-patient relationship between you and Karma TMS or any of its healthcare providers. A doctor-patient relationship can only be established through an in-person consultation and evaluation.',
    'Communication through this website, including email or contact forms, should not be used for emergency or time-sensitive medical needs. For urgent medical concerns, please call our office directly or seek immediate medical attention.']

  },
  {
    title: 'Insurance and Financial Information',
    content: [
    'Insurance coverage information provided on this website is general in nature. Actual coverage, benefits, and out-of-pocket costs will vary based on your specific insurance plan, policy terms, and medical necessity determinations.',
    'We recommend contacting your insurance provider directly to verify coverage for TMS therapy and other services. Our staff can assist with insurance verification, but the final determination of coverage rests with your insurance company.',
    'Pricing information is subject to change and may vary based on individual treatment plans and insurance coverage.']

  },
  {
    title: 'Testimonials and Results',
    content: [
    'Patient testimonials and success stories shared on this website represent individual experiences and outcomes. These are not guarantees of similar results for all patients.',
    'Results from TMS therapy and other treatments vary from person to person. Factors affecting treatment outcomes include but are not limited to: severity of condition, duration of illness, previous treatments, overall health status, and individual response to therapy.',
    'Clinical outcomes and statistics presented are based on published research studies and clinical trials. Your individual results may differ from reported averages.']

  },
  {
    title: 'External Links',
    content: [
    'This website may contain links to external websites for additional information and resources. Karma TMS is not responsible for the content, accuracy, or privacy practices of external websites.',
    'The inclusion of any link does not imply endorsement by Karma TMS. We encourage you to review the terms of use and privacy policies of any external websites you visit.']

  },
  {
    title: 'Research and Clinical Studies',
    content: [
    'References to research studies, clinical trials, and scientific publications are provided for informational purposes. While we strive to present accurate and current information, medical research is constantly evolving.',
    'The interpretation and application of research findings to individual patient care should be made by qualified healthcare professionals in the context of each patient\'s unique circumstances.']

  },
  {
    title: 'Eligibility for Treatment',
    content: [
    'Not all patients are candidates for TMS therapy or other treatments offered. Eligibility is determined through a comprehensive evaluation process that includes medical history review, diagnostic assessment, and consultation with our healthcare providers.',
    'Certain medical conditions, implanted medical devices, or other factors may preclude or require modification of TMS treatment. A thorough screening is required before beginning any treatment program.']

  },
  {
    title: 'Continuing Care',
    content: [
    'TMS therapy and other treatments may be part of a comprehensive treatment plan that could include medication management, psychotherapy, lifestyle modifications, and ongoing monitoring.',
    'Discontinuing or modifying any current treatments should only be done under the guidance of your healthcare provider. Do not stop taking prescribed medications without consulting your doctor.']

  },
  {
    title: 'Website Accuracy',
    content: [
    'While we make every effort to ensure the accuracy and currency of information on this website, we cannot guarantee that all information is complete, accurate, or current at all times.',
    'Medical information, treatment protocols, insurance policies, and other details are subject to change. We reserve the right to modify, update, or remove content without notice.',
    'For the most current information about our services, please contact our office directly.']

  }];


  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-6">
              <FileText className="w-8 h-8" />
            </div>
            <h1 className="text-4xl font-bold mb-4">Medical Disclaimer</h1>
            <p className="text-xl text-blue-100">
              Important information about the use of this website and the services we provide
            </p>
          </div>
        </div>
      </div>

      {/* Important Notice */}
      <div className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-amber-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <AlertCircle className="w-8 h-8 text-amber-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-amber-900 mb-4">Important Notice</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      This disclaimer applies to all information, services, and content provided on the 
                      Karma TMS website. By using this website, you acknowledge and agree to these terms. 
                      Please read this disclaimer carefully before using our website or services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Disclaimer Content */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, idx) =>
            <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">{section.title}</h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIdx) =>
                  <p key={pIdx} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                  )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>

      {/* Emergency Information */}
      <div className="py-12 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-red-200 bg-white">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Shield className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                  <div>
                    <h2 className="text-2xl font-bold text-red-900 mb-4">In Case of Emergency</h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                      If you are experiencing a medical or mental health emergency, do not use this website. 
                      Instead:
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg ml-4">
                      <li>Call 911 immediately</li>
                      <li>Go to your nearest emergency room</li>
                      <li>Contact the National Suicide Prevention Lifeline: 988</li>
                      <li>Contact the Crisis Text Line: Text HOME to 741741</li>
                      <li>Contact the Veterans Crisis Line: 1-800-273-8255 (Press 1)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About This Disclaimer?</h2>
            <p className="text-lg text-gray-700 mb-8">
              If you have questions about this disclaimer or need clarification on any point, 
              please contact our office directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="tel:7607605675" className="inline-block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <p className="font-medium text-gray-600 mb-2">Phone</p>
                    <p className="text-xl font-bold text-blue-600">760-760-5675</p>
                  </CardContent>
                </Card>
              </a>
              <a href="mailto:contact@karmatms.com" className="inline-block">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6">
                    <p className="font-medium text-gray-600 mb-2">Email</p>
                    <p className="text-xl font-bold text-blue-600">contact@karmatms.com</p>
                  </CardContent>
                </Card>
              </a>
            </div>
            <p className="text-sm text-gray-600 mt-8">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default DisclaimerPage;