import SEO from '@/components/SEO';

const PatientOnboardingPage = () => {
  return (
    <>
      <SEO
        title="Patient Onboarding | Karma TMS"
        description="Begin your journey to mental wellness. Complete our patient onboarding form to start TMS therapy at Karma TMS."
        keywords="patient onboarding, TMS therapy registration, mental health intake, Karma TMS enrollment"
        canonicalUrl="/patient-onboarding" />


      <div className="w-full h-screen overflow-hidden">
        <iframe src="https://us.makeforms.co/ke7qese/" style={{ width: '100%', height: '500px', maxHeight: '100%', maxWidth: '100%' }} frameBorder="none"></iframe>

      </div>
    </>);

};

export default PatientOnboardingPage;