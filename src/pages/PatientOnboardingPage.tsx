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
        <iframe
          src="https://makeforms.io/form/6958dddf14437b1543e0a27c"
          title="Patient Onboarding Form"
          className="w-full h-full border-0"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            margin: 0,
            padding: 0
          }}
          allow="geolocation; microphone; camera"
          loading="lazy" />

      </div>
    </>);

};

export default PatientOnboardingPage;