import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, ArrowRight, ArrowLeft, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface QuizQuestion {
  id: string;
  name: string;
  question: string;
  options: {value: string;label: string;}[];
}

const quizQuestions: QuizQuestion[] = [
{
  id: 'q1',
  name: 'antidepressant_history',
  question: 'Have you tried antidepressant medications for your current episode?',
  options: [
  { value: 'No, I have not tried any antidepressants', label: 'No, I have not tried any antidepressants' },
  { value: 'Yes, I have tried 1 antidepressant', label: 'Yes, I have tried 1 antidepressant' },
  { value: 'Yes, I have tried 2 antidepressants', label: 'Yes, I have tried 2 antidepressants' },
  { value: 'Yes, I have tried 3 or more antidepressants', label: 'Yes, I have tried 3 or more antidepressants' }]

},
{
  id: 'q2',
  name: 'symptom_duration',
  question: 'How long have you been experiencing symptoms of depression?',
  options: [
  { value: 'Less than 1 month', label: 'Less than 1 month' },
  { value: '1-3 months', label: '1-3 months' },
  { value: '3-6 months', label: '3-6 months' },
  { value: 'More than 6 months', label: 'More than 6 months' }]

},
{
  id: 'q3',
  name: 'symptom_severity',
  question: 'How would you rate the severity of your depression symptoms?',
  options: [
  { value: 'Mild - minimal impact on daily activities', label: 'Mild - minimal impact on daily activities' },
  { value: 'Moderate - some impact on daily activities', label: 'Moderate - some impact on daily activities' },
  { value: 'Severe - significant impact on daily activities', label: 'Severe - significant impact on daily activities' },
  { value: 'Very severe - unable to function normally', label: 'Very severe - unable to function normally' }]

},
{
  id: 'q4',
  name: 'symptoms_experienced',
  question: 'Do you experience any of the following symptoms? (Select the one that best describes you)',
  options: [
  { value: 'None of the below symptoms', label: 'None of the below symptoms' },
  { value: 'Sleep problems, appetite changes, or fatigue', label: 'Sleep problems, appetite changes, or fatigue' },
  { value: 'Loss of interest, difficulty concentrating, feelings of worthlessness', label: 'Loss of interest, difficulty concentrating, feelings of worthlessness' },
  { value: 'Thoughts of self-harm or suicide', label: 'Thoughts of self-harm or suicide' }]

},
{
  id: 'q5',
  name: 'medication_side_effects',
  question: 'Have you experienced side effects from antidepressant medications?',
  options: [
  { value: 'I have not taken antidepressant medications', label: 'I have not taken antidepressant medications' },
  { value: 'No significant side effects', label: 'No significant side effects' },
  { value: 'Some bothersome side effects', label: 'Some bothersome side effects' },
  { value: 'Severe or intolerable side effects', label: 'Severe or intolerable side effects' }]

},
{
  id: 'q6',
  name: 'daily_interference',
  question: 'How much do your symptoms interfere with your work, relationships, or daily activities?',
  options: [
  { value: 'Minimal interference', label: 'Minimal interference' },
  { value: 'Some interference but manageable', label: 'Some interference but manageable' },
  { value: 'Significant interference', label: 'Significant interference' },
  { value: 'Severe interference - unable to function', label: 'Severe interference - unable to function' }]

}];


const TMSQuizPage = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Combined form data: quiz answers + lead form fields
  const [formData, setFormData] = useState({
    // Quiz answers
    antidepressant_history: '',
    symptom_duration: '',
    symptom_severity: '',
    symptoms_experienced: '',
    medication_side_effects: '',
    daily_interference: '',
    // Lead form fields
    full_name: '',
    email: '',
    phone: '',
    condition: '',
    message: '',
    consent: false
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = quizQuestions.length + 1; // Quiz questions + 1 lead form step
  const progress = (currentStep + 1) / totalSteps * 100;
  const isQuizStep = currentStep < quizQuestions.length;
  const isLeadFormStep = currentStep === quizQuestions.length;

  // Handle quiz answer change
  const handleQuizAnswerChange = (fieldName: string, value: string) => {
    setFormData((prev) => ({ ...prev, [fieldName]: value }));
  };

  // Handle lead form field change
  const handleLeadFormChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for this field
    if (formErrors[field]) {
      setFormErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  // Validate current step before proceeding
  const validateCurrentStep = (): boolean => {
    if (isQuizStep) {
      const currentQuestion = quizQuestions[currentStep];
      return !!formData[currentQuestion.name as keyof typeof formData];
    }

    if (isLeadFormStep) {
      const errors: Record<string, string> = {};

      if (!formData.full_name.trim()) {
        errors.full_name = 'Full name is required';
      }

      if (!formData.email.trim()) {
        errors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
      }

      if (!formData.phone.trim()) {
        errors.phone = 'Phone number is required';
      }

      if (!formData.condition) {
        errors.condition = 'Please select a condition';
      }

      if (!formData.consent) {
        errors.consent = 'You must agree to receive communications';
      }

      setFormErrors(errors);
      return Object.keys(errors).length === 0;
    }

    return true;
  };

  // Handle Next button
  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();

    if (!validateCurrentStep()) {
      if (isQuizStep) {
        toast({
          variant: "destructive",
          title: "Please select an answer",
          description: "You must select an answer before proceeding."
        });
      }
      return;
    }

    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle Previous button
  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };


  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <Brain className="h-16 w-16 text-[#572670] mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-gray-900 mb-4">TMS Candidacy Assessment</h1>
            <p className="text-lg text-gray-700">
              This brief assessment helps determine if TMS therapy might be right for you.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progress</span>
              <span className="text-sm text-gray-600">
                Step {currentStep + 1} of {totalSteps}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <form
            acceptCharset="UTF-8"
            action="https://app.formester.com/forms/oktnrNSVh/submissions"
            method="POST"
            onSubmit={handleSubmit}>

            {/* Hidden inputs for all quiz answers */}
            {quizQuestions.map((question) =>
            <input
              key={question.id}
              type="hidden"
              name={question.name}
              value={formData[question.name as keyof typeof formData] as string || ''} />

            )}

            {/* Redirect URL after form submission */}
            <input type="hidden" name="redirect_to" value="/thank-you" />

            {/* Quiz Question Steps */}
            {isQuizStep &&
            <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    {quizQuestions[currentStep].question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {quizQuestions[currentStep].options.map((option) =>
                  <div key={option.value} className="flex items-start space-x-3">
                        <input
                      type="radio"
                      id={`${quizQuestions[currentStep].id}-${option.value}`}
                      name={quizQuestions[currentStep].name}
                      value={option.value}
                      checked={formData[quizQuestions[currentStep].name as keyof typeof formData] === option.value}
                      onChange={(e) => handleQuizAnswerChange(quizQuestions[currentStep].name, e.target.value)}
                      className="mt-1 h-4 w-4 text-[#572670] focus:ring-[#572670] border-gray-300" />

                        <Label
                      htmlFor={`${quizQuestions[currentStep].id}-${option.value}`}
                      className="text-gray-700 cursor-pointer leading-relaxed font-normal">

                          {option.label}
                        </Label>
                      </div>
                  )}
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={currentStep === 0}>

                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData[quizQuestions[currentStep].name as keyof typeof formData]}
                    className="bg-[#572670] hover:bg-[#572670]/90">

                      {currentStep === quizQuestions.length - 1 ? 'Continue to Contact Form' : 'Next'}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            }

            {/* Lead Form Step */}
            {isLeadFormStep &&
            <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                  <p className="text-sm text-gray-600 mt-2">
                    Please provide your contact details so we can discuss your assessment results and next steps.
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {/* Full Name */}
                    <div>
                      <Label htmlFor="fullName" className="flex items-center gap-2 mb-2">
                        <User className="h-4 w-4 text-[#572670]" />
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                      id="fullName"
                      name="full_name"
                      type="text"
                      value={formData.full_name}
                      onChange={(e) => handleLeadFormChange('full_name', e.target.value)}
                      placeholder="Enter your full name"
                      className={formErrors.full_name ? 'border-red-500' : ''} />

                      {formErrors.full_name &&
                    <p className="text-red-500 text-sm mt-1">{formErrors.full_name}</p>
                    }
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                        <Mail className="h-4 w-4 text-[#572670]" />
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleLeadFormChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className={formErrors.email ? 'border-red-500' : ''} />

                      {formErrors.email &&
                    <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    }
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="flex items-center gap-2 mb-2">
                        <Phone className="h-4 w-4 text-[#572670]" />
                        Phone Number <span className="text-red-500">*</span>
                      </Label>
                      <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleLeadFormChange('phone', e.target.value)}
                      placeholder="(555) 123-4567"
                      className={formErrors.phone ? 'border-red-500' : ''} />

                      {formErrors.phone &&
                    <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                    }
                    </div>

                    {/* Condition */}
                    <div>
                      <Label htmlFor="condition" className="flex items-center gap-2 mb-2">
                        <Brain className="h-4 w-4 text-[#572670]" />
                        Primary Condition <span className="text-red-500">*</span>
                      </Label>
                      <Select
                      name="condition"
                      value={formData.condition}
                      onValueChange={(value) => handleLeadFormChange('condition', value)}>

                        <SelectTrigger className={formErrors.condition ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select your primary condition" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Depression">Depression</SelectItem>
                          <SelectItem value="Anxiety">Anxiety</SelectItem>
                          <SelectItem value="OCD">OCD</SelectItem>
                          <SelectItem value="PTSD">PTSD</SelectItem>
                          <SelectItem value="Bipolar Disorder">Bipolar Disorder</SelectItem>
                          <SelectItem value="Addiction">Addiction</SelectItem>
                          <SelectItem value="Stress">Stress</SelectItem>
                          <SelectItem value="Women's Mood Disorders">Women's Mood Disorders</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      {formErrors.condition &&
                    <p className="text-red-500 text-sm mt-1">{formErrors.condition}</p>
                    }
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-[#572670]" />
                        Additional Message (Optional)
                      </Label>
                      <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleLeadFormChange('message', e.target.value)}
                      placeholder="Tell us more about your situation or any questions you have..."
                      rows={4} />

                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start space-x-3">
                      <Checkbox
                      id="consent"
                      name="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => handleLeadFormChange('consent', checked as boolean)}
                      className={formErrors.consent ? 'border-red-500' : ''} />

                      <div className="flex-1">
                        <Label
                        htmlFor="consent"
                        className="text-sm text-gray-700 cursor-pointer leading-relaxed font-normal">

                          I understand that I will receive emails and calls from the Karma team after submitting this form. My data will be used for communication purposes only. <span className="text-red-500">*</span>
                        </Label>
                        {formErrors.consent &&
                      <p className="text-red-500 text-sm mt-1">{formErrors.consent}</p>
                      }
                      </div>
                    </div>

                    {/* Hidden field to pass consent value to formester */}
                    <input type="hidden" name="consent_agreed" value={formData.consent ? 'yes' : 'no'} />
                  </div>

                  <div className="flex justify-between mt-8">
                    <Button
                    type="button"
                    variant="outline"
                    onClick={handlePrevious}
                    disabled={isSubmitting}>

                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>
                    
                    <Button
                    type="submit"
                    className="bg-[#572670] hover:bg-[#572670]/90">
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            }
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>This assessment takes approximately 3-5 minutes to complete.</p>
            <p>Your responses are confidential and will help us provide personalized recommendations.</p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>);

};

export default TMSQuizPage;