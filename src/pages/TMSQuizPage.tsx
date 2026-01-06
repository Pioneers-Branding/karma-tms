import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, ArrowRight, ArrowLeft } from 'lucide-react';

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
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    setCurrentQuestion(currentQuestion - 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {








































































































































































































































































































































































































    // Let the form submit naturally to Formester
    // After submission, Formester will handle the redirect
    // If you want to redirect to a specific page, you can add a hidden input
    // with name="redirect_to" and value="/thank-you"
  };const progress = (currentQuestion + 1) / quizQuestions.length * 100;const currentQ = quizQuestions[currentQuestion];const canProceed = answers[currentQ?.id];const isLastQuestion = currentQuestion === quizQuestions.length - 1;return <div className="min-h-screen">
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
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <form acceptCharset="UTF-8" action="https://app.formester.com/forms/oktnrNSVh/submissions" method="POST" onSubmit={handleSubmit}>

            {/* Hidden inputs for all answers */}
            {quizQuestions.map((question) => <input key={question.id} type="hidden" name={question.name} value={answers[question.id] || ''} />)}

            {/* Redirect URL after form submission */}
            <input type="hidden" name="redirect_to" value="/thank-you" />

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">{currentQ.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentQ.options.map((option) => <div key={option.value} className="flex items-start space-x-3">
                      <input type="radio" id={`${currentQ.id}-${option.value}`} name={`current_${currentQ.name}`} value={option.value} checked={answers[currentQ.id] === option.value} onChange={(e) => handleAnswerChange(currentQ.id, e.target.value)} className="mt-1 h-4 w-4 text-[#572670] focus:ring-[#572670] border-gray-300" />

                      <Label htmlFor={`${currentQ.id}-${option.value}`} className="text-gray-700 cursor-pointer leading-relaxed font-normal">

                        {option.label}
                      </Label>
                    </div>)}
                </div>

                <div className="flex justify-between mt-8">
                  <Button type="button" variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>

                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Previous
                  </Button>
                  
                  {!isLastQuestion ? <Button type="button" onClick={handleNext} disabled={!canProceed} className="bg-[#572670] hover:bg-[#572670]/90">

                      Next
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button> : <Button type="submit" disabled={!canProceed} className="bg-[#572670] hover:bg-[#572670]/90">

                      Submit Assessment
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>}
                </div>
              </CardContent>
            </Card>
          </form>

          <div className="mt-6 text-center text-sm text-gray-600">
            <p>This assessment takes approximately 3-5 minutes to complete.</p>
            <p>Your responses are confidential and will help us provide personalized recommendations.</p>
          </div>
        </div>
      </div>

      <FooterSection />
    </div>;};export default TMSQuizPage;