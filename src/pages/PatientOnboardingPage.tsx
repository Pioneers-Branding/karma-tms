import { useEffect, useRef } from 'react';
import SEO from '@/components/SEO';

// Extend Window interface to include MFWidget
declare global {
  interface Window {
    MFWidget: any;
  }
}

const PatientOnboardingPage = () => {
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Avoid duplicate script loading
    if (scriptLoadedRef.current) return;

    // Load MakeForm script
    const script = document.createElement('script');
    script.src = 'https://assets.makeforms.io/widgets/us/mfwidget.js';
    script.async = true;
    
    script.onload = () => {
      scriptLoadedRef.current = true;
      // Initialize MakeForm widget after script loads
      if (window.MFWidget) {
        try {
          new window.MFWidget('6958dddf14437b1543e0a27c').init();
        } catch (error) {
          console.error('Error initializing MakeForm widget:', error);
        }
      }
    };

    script.onerror = () => {
      console.error('Failed to load MakeForm script');
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      scriptLoadedRef.current = false;
    };
  }, []);

  return (
    <>
      <SEO
        title="Patient Onboarding | Karma TMS"
        description="Begin your journey to mental wellness. Complete our patient onboarding form to start TMS therapy at Karma TMS."
        keywords="patient onboarding, TMS therapy registration, mental health intake, Karma TMS enrollment"
        canonicalUrl="/patient-onboarding"
      />
      <div 
        id="mf-container" 
        style={{ 
          height: '100vh', 
          width: '100%', 
          margin: 0, 
          padding: 0,
          overflow: 'hidden'
        }}
      />
    </>
  );
};

export default PatientOnboardingPage;