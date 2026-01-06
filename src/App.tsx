import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./pages/HomePage";
import DepressionPage from "./pages/DepressionPage";
import AnxietyPage from "./pages/AnxietyPage";
import OCDPage from "./pages/OCDPage";
import PTSDPage from "./pages/PTSDPage";
import BipolarPage from "./pages/BipolarPage";
import AddictionPage from "./pages/AddictionPage";
import StressPage from "./pages/StressPage";
import WomensMoodPage from "./pages/WomensMoodPage";
import TMSQuizPage from "./pages/TMSQuizPage";
import ThankYouPage from "./pages/ThankYouPage";
import AboutPage from "./pages/AboutPage";
import TeamPage from "./pages/TeamPage";
import TeamMemberPage from "./pages/TeamMemberPage";
import AffiliationsPage from "./pages/AffiliationsPage";
import InternsPage from "./pages/InternsPage";
import TMSTherapyPage from "./pages/TMSTherapyPage";
import PRTMSPage from "./pages/PRTMSPage";
import BrainMappingPage from "./pages/BrainMappingPage";
import NeurofeedbackPage from "./pages/NeurofeedbackPage";
import MedicationManagementPage from "./pages/MedicationManagementPage";
import InsurancePricingPage from "./pages/InsurancePricingPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BlogPage from "./pages/BlogPage";
import ResearchPage from "./pages/ResearchPage";

import ContactPage from "./pages/ContactPage";
import FAQsPage from "./pages/FAQsPage";
import HIPAAPage from "./pages/HIPAAPage";
import RefundPolicyPage from "./pages/RefundPolicyPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import ConditionsPage from "./pages/ConditionsPage";
import LocationsPage from "./pages/LocationsPage";
import PalmSpringsPage from "./pages/PalmSpringsPage";
import TwentyNinePalmsPage from "./pages/TwentyNinePalmsPage";
import RanchoMiragePage from "./pages/RanchoMiragePage";
import VeteransPage from "./pages/VeteransPage";
import VeteransBlogPostPage from "./pages/blogs/VeteransBlogPostPage";
import VAVeteransPTSDTMSBlogPostPage from "./pages/blogs/VAVeteransPTSDTMSBlogPostPage";
import VADisabilityBenefitsMentalHealthBlogPostPage from "./pages/blogs/VADisabilityBenefitsMentalHealthBlogPostPage";
import TMSvsMedicationVeteransBlogPostPage from "./pages/blogs/TMSvsMedicationVeteransBlogPostPage";
import HelpingVeteransPTSDBlogPostPage from "./pages/blogs/HelpingVeteransPTSDBlogPostPage";
import UnderstandingPTSDVeteransBlogPostPage from "./pages/blogs/UnderstandingPTSDVeteransBlogPostPage";
import TMSAnxietyVeteransBlogPostPage from "./pages/blogs/TMSAnxietyVeteransBlogPostPage";
import TMSMigraineVeteransBlogPostPage from "./pages/blogs/TMSMigraineVeteransBlogPostPage";
import TMSMultipleSessionsBlogPostPage from "./pages/blogs/TMSMultipleSessionsBlogPostPage";
import StressManagementFourAsBlogPostPage from "./pages/blogs/StressManagementFourAsBlogPostPage";
import IsTMSTherapyPermanentBlogPostPage from "./pages/blogs/IsTMSTherapyPermanentBlogPostPage";
import IsTMSTherapyLegitimateBlogPostPage from "./pages/blogs/IsTMSTherapyLegitimateBlogPostPage";
import HowSuccessfulTMSTreatmentBlogPostPage from "./pages/blogs/HowSuccessfulTMSTreatmentBlogPostPage";
import ScreenTimeMentalHealthBlogPostPage from "./pages/blogs/ScreenTimeMentalHealthBlogPostPage";
import MindfulnessStressManagementBlogPostPage from "./pages/blogs/MindfulnessStressManagementBlogPostPage";
import TechMentalHealthBlogPostPage from "./pages/blogs/TechMentalHealthBlogPostPage";
import MentalHealthFirstAidBlogPostPage from "./pages/blogs/MentalHealthFirstAidBlogPostPage";
import EmpoweringYouthBlogPostPage from "./pages/blogs/EmpoweringYouthBlogPostPage";
import FamilyDynamicsMentalHealthBlogPostPage from "./pages/blogs/FamilyDynamicsMentalHealthBlogPostPage";
import ManagingAnxietyTriggersBlogPostPage from "./pages/blogs/ManagingAnxietyTriggersBlogPostPage";
import DepressionErectileDysfunctionBlogPostPage from "./pages/blogs/DepressionErectileDysfunctionBlogPostPage";
import ConnectingTeensMentalWellnessBlogPostPage from "./pages/blogs/ConnectingTeensMentalWellnessBlogPostPage";
import MentalHealthCommunityViolenceBlogPostPage from "./pages/blogs/MentalHealthCommunityViolenceBlogPostPage";
import RuralMentalHealthcareBlogPostPage from "./pages/blogs/RuralMentalHealthcareBlogPostPage";
import SocialMediaMentalWellbeingBlogPostPage from "./pages/blogs/SocialMediaMentalWellbeingBlogPostPage";
import CommonReasonsPsychotherapyBlogPostPage from "./pages/blogs/CommonReasonsPsychotherapyBlogPostPage";
import ExploringTheMultifacetedDynamicsOfSuicideInTheElderlyPopulation from "./pages/blogs/ExploringTheMultifacetedDynamicsOfSuicideInTheElderlyPopulation";
import PsychiatristsBoostWellBeingThroughExpertCareForMentalHealth from "./pages/blogs/PsychiatristsBoostWellBeingThroughExpertCareForMentalHealth";
import TMSTherapyForTreatmentResistantDepression from "./pages/blogs/TMSTherapyForTreatmentResistantDepression";
import HowDoesADHDTreatmentWorkBlogPostPage from "./pages/blogs/HowDoesADHDTreatmentWorkBlogPostPage";
import HowToAvoidStressDuringHolidaysBlogPostPage from "./pages/blogs/HowToAvoidStressDuringHolidaysBlogPostPage";
import DoesTMSTherapyWorkForAnxiety from "./pages/blogs/DoesTMSTherapyWorkForAnxiety";
import IsDepressionADisabilityBlogPostPage from "./pages/blogs/IsDepressionADisabilityBlogPostPage";
import CanYouGetDisabilityForDepressionBlogPostPage from "./pages/blogs/CanYouGetDisabilityForDepressionBlogPostPage";
import DisclaimerPage from "./pages/DisclaimerPage";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About & Team Routes - Sitemap URLs */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/about/" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
        <Route path="/team/:id" element={<TeamMemberPage />} />
          <Route path="/affiliations" element={<AffiliationsPage />} />
          <Route path="/affiliations/" element={<AffiliationsPage />} />
          <Route path="/interns-medical-students" element={<InternsPage />} />
          <Route path="/interns-medical-students/" element={<InternsPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/interns" element={<InternsPage />} />
          
          {/* Treatment Routes */}
          <Route path="/tms-therapy" element={<TMSTherapyPage />} />
          <Route path="/prtms" element={<PRTMSPage />} />
          <Route path="/brain-mapping" element={<BrainMappingPage />} />
          <Route path="/brain-mapping/" element={<BrainMappingPage />} />
          <Route path="/neurofeedback" element={<NeurofeedbackPage />} />
          <Route path="/medication-management" element={<MedicationManagementPage />} />
          
          {/* Conditions Routes - Sitemap URLs */}
          <Route path="/conditions" element={<ConditionsPage />} />
          <Route path="/conditions/" element={<ConditionsPage />} />
          <Route path="/depression" element={<DepressionPage />} />
          <Route path="/depression/" element={<DepressionPage />} />
          <Route path="/anxiety" element={<AnxietyPage />} />
          <Route path="/anxiety/" element={<AnxietyPage />} />
          <Route path="/ocd" element={<OCDPage />} />
          <Route path="/ocd/" element={<OCDPage />} />
          <Route path="/stress-management" element={<StressPage />} />
          <Route path="/stress-management/" element={<StressPage />} />
          {/* Keep old nested routes for backwards compatibility */}
          <Route path="/conditions/depression" element={<DepressionPage />} />
          <Route path="/conditions/anxiety" element={<AnxietyPage />} />
          <Route path="/conditions/ocd" element={<OCDPage />} />
          <Route path="/conditions/ptsd" element={<PTSDPage />} />
          <Route path="/conditions/bipolar" element={<BipolarPage />} />
          <Route path="/conditions/addiction" element={<AddictionPage />} />
          <Route path="/conditions/stress" element={<StressPage />} />
          <Route path="/conditions/womens-mood" element={<WomensMoodPage />} />
          
          {/* Info & Resources Routes - Sitemap URLs */}
          <Route path="/insurance-pricing" element={<InsurancePricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/testimonials/" element={<TestimonialsPage />} />
          <Route path="/blog/veterans-tms-therapy" element={<VeteransBlogPostPage />} />
          <Route path="/blog/va-veterans-ptsd-tms-treatment" element={<VAVeteransPTSDTMSBlogPostPage />} />
          <Route path="/blog/va-disability-benefits-depression-anxiety-ptsd" element={<VADisabilityBenefitsMentalHealthBlogPostPage />} />
          <Route path="/blog/tms-vs-medication-veterans-depression" element={<TMSvsMedicationVeteransBlogPostPage />} />
          <Route path="/blog/how-to-help-veterans-ptsd" element={<HelpingVeteransPTSDBlogPostPage />} />
          <Route path="/blog/understanding-ptsd-veterans" element={<UnderstandingPTSDVeteransBlogPostPage />} />
          <Route path="/blog/tms-anxiety-veterans" element={<TMSAnxietyVeteransBlogPostPage />} />
          <Route path="/blog/tms-migraine-veterans" element={<TMSMigraineVeteransBlogPostPage />} />
          <Route path="/blog/why-tms-requires-multiple-sessions" element={<TMSMultipleSessionsBlogPostPage />} />
          <Route path="/blog/four-as-stress-management" element={<StressManagementFourAsBlogPostPage />} />
          <Route path="/blog/is-tms-therapy-permanent" element={<IsTMSTherapyPermanentBlogPostPage />} />
          <Route path="/blog/is-tms-therapy-legitimate" element={<IsTMSTherapyLegitimateBlogPostPage />} />
          <Route path="/blog/how-successful-tms-treatment" element={<HowSuccessfulTMSTreatmentBlogPostPage />} />
          <Route path="/blog/screen-time-mental-health" element={<ScreenTimeMentalHealthBlogPostPage />} />
          <Route path="/blog/mindfulness-stress-management" element={<MindfulnessStressManagementBlogPostPage />} />
          <Route path="/blog/tech-mental-health-impact" element={<TechMentalHealthBlogPostPage />} />
          <Route path="/blog/mental-health-first-aid" element={<MentalHealthFirstAidBlogPostPage />} />
          <Route path="/blog/empowering-youth-emotional-resilience" element={<EmpoweringYouthBlogPostPage />} />
          <Route path="/blog/family-dynamics-mental-health" element={<FamilyDynamicsMentalHealthBlogPostPage />} />
          <Route path="/blog/managing-anxiety-triggers" element={<ManagingAnxietyTriggersBlogPostPage />} />
          <Route path="/blog/depression-erectile-dysfunction" element={<DepressionErectileDysfunctionBlogPostPage />} />
          <Route path="/blog/connecting-teens-mental-wellness" element={<ConnectingTeensMentalWellnessBlogPostPage />} />
          <Route path="/blog/mental-health-community-violence" element={<MentalHealthCommunityViolenceBlogPostPage />} />
          <Route path="/blog/rural-mental-healthcare" element={<RuralMentalHealthcareBlogPostPage />} />
          <Route path="/blog/social-media-mental-wellbeing" element={<SocialMediaMentalWellbeingBlogPostPage />} />
          <Route path="/blog/common-reasons-psychotherapy" element={<CommonReasonsPsychotherapyBlogPostPage />} />
          <Route path="/blog/exploring-multifaceted-dynamics-suicide-elderly-population" element={<ExploringTheMultifacetedDynamicsOfSuicideInTheElderlyPopulation />} />
          <Route path="/blog/psychiatrists-boost-well-being-expert-care-mental-health" element={<PsychiatristsBoostWellBeingThroughExpertCareForMentalHealth />} />
          <Route path="/blog/tms-therapy-treatment-resistant-depression" element={<TMSTherapyForTreatmentResistantDepression />} />
          <Route path="/blog/how-does-adhd-treatment-work" element={<HowDoesADHDTreatmentWorkBlogPostPage />} />
          <Route path="/blog/how-to-avoid-stress-during-holidays" element={<HowToAvoidStressDuringHolidaysBlogPostPage />} />
          <Route path="/blog/does-tms-therapy-work-for-anxiety" element={<DoesTMSTherapyWorkForAnxiety />} />
          <Route path="/blog/is-depression-a-disability" element={<IsDepressionADisabilityBlogPostPage />} />
          <Route path="/blog/can-you-get-disability-for-depression" element={<CanYouGetDisabilityForDepressionBlogPostPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/" element={<BlogPage />} />
          <Route path="/research-and-publications" element={<ResearchPage />} />
          <Route path="/research-and-publications/" element={<ResearchPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          
          {/* Action Routes - Sitemap URLs */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/quiz" element={<TMSQuizPage />} />
          <Route path="/quiz/" element={<TMSQuizPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/tms-quiz" element={<TMSQuizPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          
          {/* Legal Routes - Sitemap URLs */}
          <Route path="/hipaa" element={<HIPAAPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/terms-of-use" element={<TermsPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy-policy" element={<PrivacyPage />} />
          <Route path="/privacy-policy/" element={<PrivacyPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/privacy" element={<PrivacyPage />} />
          
          {/* Location Routes */}
          <Route path="/palm-springs" element={<PalmSpringsPage />} />
          <Route path="/29-palms" element={<TwentyNinePalmsPage />} />
          <Route path="/rancho-mirage" element={<RanchoMiragePage />} />
          
          {/* Veterans & Disclaimer Routes */}
          <Route path="/veterans" element={<VeteransPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          
          {/* Catch-all route redirects to home instead of 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;