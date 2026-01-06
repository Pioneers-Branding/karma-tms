import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import BookPage from "./pages/BookPage";
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
import VeteransPage from "./pages/VeteransPage";
import DisclaimerPage from "./pages/DisclaimerPage";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
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
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/" element={<BlogPage />} />
          <Route path="/research-and-publications" element={<ResearchPage />} />
          <Route path="/research-and-publications/" element={<ResearchPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          
          {/* Action Routes - Sitemap URLs */}
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/quiz" element={<TMSQuizPage />} />
          <Route path="/quiz/" element={<TMSQuizPage />} />
          {/* Keep old route for backwards compatibility */}
          <Route path="/tms-quiz" element={<TMSQuizPage />} />
          
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
          
          {/* Catch-all route redirects to home instead of 404 */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;