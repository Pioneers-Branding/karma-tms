import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, Phone, FileText } from 'lucide-react';

const InsuranceSection = () => {
  const insuranceProviders = [
  "Aetna", "Blue Cross Blue Shield", "Cigna", "United Healthcare",
  "Anthem", "Kaiser Permanente", "Medicare", "Tricare"];


  return (
    <section className="py-16 bg-gradient-to-br from-[#572670]/5 to-[#572670]/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Shield className="h-8 w-8 text-[#572670]" />
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  TMS is Covered by Insurance
                </h2>
              </div>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                All major insurance providers cover TMS therapy for depression when you've tried 
                multiple antidepressants and therapy without success. We handle all the paperwork 
                to make the process as smooth as possible.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-[#572670]" />
                Coverage Requirements Met:
              </h3>
              <ul className="space-y-2 ml-7">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#572670]"></div>
                  <span>Diagnosis of Major Depressive Disorder</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#572670]"></div>
                  <span>Failed multiple antidepressant trials</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#572670]"></div>
                  <span>Current depressive episode documentation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-[#572670]"></div>
                  <span>Tried psychotherapy with limited success</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#572670] hover:bg-[#572670]/90 text-white px-8 flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Verify Your Coverage
              </Button>
              <Button variant="outline" className="border-[#572670] text-[#572670] hover:bg-[#572670] hover:text-white px-8 flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Call for Quick Check
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <Card className="bg-white shadow-2xl border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Accepted Insurance Providers
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {insuranceProviders.map((provider, index) =>
                  <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-[#572670]" />
                      <span className="font-medium text-gray-800">{provider}</span>
                    </div>
                  )}
                </div>
                <div className="text-center p-4 bg-[#572670]/10 rounded-lg">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Don't see your insurance?</strong>
                  </p>
                  <p className="text-sm text-gray-600">
                    We work with many additional providers. Contact us to verify your specific coverage.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-[#572670] to-[#572670]/90 text-white">
              <CardContent className="p-6 text-center">
                <h4 className="text-lg font-bold mb-2">Typical Coverage</h4>
                <div className="text-3xl font-bold mb-1">80-100%</div>
                <p className="text-white/90 text-sm">
                  Most insurance plans cover TMS therapy after deductible
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>);

};

export default InsuranceSection;