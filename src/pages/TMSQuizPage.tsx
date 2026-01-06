import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import Navigation from '@/components/Navigation';
import FooterSection from '@/components/FooterSection';
import { Brain, ArrowRight, ArrowLeft, Calendar, CheckCircle } from 'lucide-react';

interface QuizQuestion {
  id: string;
  question: string;
  options: {value: string;label: string;score: number;}[];
}

const quizQuestions: QuizQuestion[] = [
{
  id: 'q1',
  question: 'Have you tried antidepressant medications for your current episode?',
  options: [
  { value: 'no', label: 'No, I have not tried any antidepressants', score: 0 },
  { value: 'one', label: 'Yes, I have tried 1 antidepressant', score: 1 },
  { value: 'two', label: 'Yes, I have tried 2 antidepressants', score: 2 },
  { value: 'three-plus', label: 'Yes, I have tried 3 or more antidepressants', score: 3 }]

},
{
  id: 'q2',
  question: 'How long have you been experiencing symptoms of depression?',
  options: [
  { value: 'less-month', label: 'Less than 1 month', score: 0 },
  { value: 'one-three', label: '1-3 months', score: 1 },
  { value: 'three-six', label: '3-6 months', score: 2 },
  { value: 'more-six', label: 'More than 6 months', score: 3 }]

},
{
  id: 'q3',
  question: 'How would you rate the severity of your depression symptoms?',
  options: [
  { value: 'mild', label: 'Mild - minimal impact on daily activities', score: 1 },
  { value: 'moderate', label: 'Moderate - some impact on daily activities', score: 2 },
  { value: 'severe', label: 'Severe - significant impact on daily activities', score: 3 },
  { value: 'very-severe', label: 'Very severe - unable to function normally', score: 4 }]

},
{
  id: 'q4',
  question: 'Do you experience any of the following symptoms? (Select the one that best describes you)',
  options: [
  { value: 'none', label: 'None of the below symptoms', score: 0 },
  { value: 'some', label: 'Sleep problems, appetite changes, or fatigue', score: 1 },
  { value: 'multiple', label: 'Loss of interest, difficulty concentrating, feelings of worthlessness', score: 2 },
  { value: 'severe', label: 'Thoughts of self-harm or suicide', score: 4 }]

},
{
  id: 'q5',
  question: 'Have you experienced side effects from antidepressant medications?',
  options: [
  { value: 'no-meds', label: 'I have not taken antidepressant medications', score: 0 },
  { value: 'no-sides', label: 'No significant side effects', score: 1 },
  { value: 'some-sides', label: 'Some bothersome side effects', score: 2 },
  { value: 'severe-sides', label: 'Severe or intolerable side effects', score: 3 }]

},
{
  id: 'q6',
  question: 'How much do your symptoms interfere with your work, relationships, or daily activities?',
  options: [
  { value: 'minimal', label: 'Minimal interference', score: 1 },
  { value: 'some', label: 'Some interference but manageable', score: 2 },
  { value: 'significant', label: 'Significant interference', score: 3 },
  { value: 'severe', label: 'Severe interference - unable to function', score: 4 }]

}];


const TMSQuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (questionId: string, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  const calculateScore = () => {
    return Object.entries(answers).reduce((total, [questionId, selectedValue]) => {
      const question = quizQuestions.find((q) => q.id === questionId);
      const selectedOption = question?.options.find((option) => option.value === selectedValue);
      return total + (selectedOption?.score || 0);
    }, 0);
  };

  const getRecommendation = (score: number) => {
    if (score >= 15) {
      return {
        level: 'High Candidate',
        message: 'Based on your responses, you may be an excellent candidate for TMS therapy. Your symptoms suggest treatment-resistant depression that could benefit significantly from TMS treatment.',
        color: 'text-green-600',
        bgColor: 'bg-green-50'
      };
    } else if (score >= 10) {
      return {
        level: 'Good Candidate',
        message: 'Your responses indicate you may be a good candidate for TMS therapy. We recommend scheduling a consultation to discuss your treatment options.',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50'
      };
    } else if (score >= 6) {
      return {
        level: 'Potential Candidate',
        message: 'You may benefit from TMS therapy, though other treatment options might also be considered. A consultation would help determine the best approach.',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50'
      };
    } else {
      return {
        level: 'Consultation Recommended',
        message: 'While TMS may still be an option, we recommend discussing your full range of treatment options with a mental health professional.',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50'
      };
    }
  };

  const progress = (currentQuestion + 1) / quizQuestions.length * 100;
  const currentQ = quizQuestions[currentQuestion];
  const canProceed = answers[currentQ?.id];

  if (showResults) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);

    return (
      <div className="min-h-screen">
        <Navigation />
        
        <div className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-3xl font-bold text-gray-900 mb-4">Assessment Complete</h1>
              <p className="text-lg text-gray-700">Thank you for completing the TMS candidacy assessment.</p>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-center">Your Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`text-center p-6 rounded-lg ${recommendation.bgColor} mb-6`}>
                  <h3 className={`text-2xl font-bold ${recommendation.color} mb-2`}>
                    {recommendation.level}
                  </h3>
                  <p className="text-gray-700">{recommendation.message}</p>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Next Steps</h4>
                  <p className="text-gray-700 mb-6">
                    This assessment is for informational purposes only and does not constitute medical advice. 
                    A thorough evaluation by our medical team is required to determine TMS candidacy.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-[#572670] hover:bg-[#572670]/90">
                      <Calendar className="h-5 w-5 mr-2" />
                      Schedule Consultation
                    </Button>
                    <Button size="lg" variant="outline">
                      Learn More About TMS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Important Information</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  <li>• This assessment is a screening tool and does not replace professional medical evaluation</li>
                  <li>• TMS candidacy depends on many factors not covered in this brief assessment</li>
                  <li>• Insurance coverage and other treatment options will be discussed during consultation</li>
                  <li>• All information provided is confidential and secure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <FooterSection />
      </div>);

  }

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
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQ.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQ.id] || ''}
                onValueChange={(value) => handleAnswerChange(currentQ.id, value)}
                className="space-y-4">

                {currentQ.options.map((option, index) =>
                <div key={option.value} className="flex items-start space-x-3">
                    <RadioGroupItem value={option.value} id={option.value} className="mt-0.5" />
                    <Label htmlFor={option.value} className="text-gray-700 cursor-pointer leading-relaxed">
                      {option.label}
                    </Label>
                  </div>
                )}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}>

                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="bg-[#572670] hover:bg-[#572670]/90">

                  {currentQuestion === quizQuestions.length - 1 ? 'Get Results' : 'Next'}
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>

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