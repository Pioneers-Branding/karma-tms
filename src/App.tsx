import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
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

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {/* About & Team Routes */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/affiliations" element={<AffiliationsPage />} />
          <Route path="/interns" element={<InternsPage />} />
          
          {/* Treatment Routes */}
          <Route path="/tms-therapy" element={<TMSTherapyPage />} />
          <Route path="/prtms" element={<PRTMSPage />} />
          <Route path="/brain-mapping" element={<BrainMappingPage />} />
          <Route path="/neurofeedback" element={<NeurofeedbackPage />} />
          <Route path="/medication-management" element={<MedicationManagementPage />} />
          
          {/* Conditions Routes */}
          <Route path="/conditions/depression" element={<DepressionPage />} />
          <Route path="/conditions/anxiety" element={<AnxietyPage />} />
          <Route path="/conditions/ocd" element={<OCDPage />} />
          <Route path="/conditions/ptsd" element={<PTSDPage />} />
          <Route path="/conditions/bipolar" element={<BipolarPage />} />
          <Route path="/conditions/addiction" element={<AddictionPage />} />
          <Route path="/conditions/stress" element={<StressPage />} />
          <Route path="/conditions/womens-mood" element={<WomensMoodPage />} />
          
          {/* Info & Resources Routes */}
          <Route path="/insurance-pricing" element={<InsurancePricingPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/research" element={<ResearchPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          
          {/* Action Routes */}
          <Route path="/book" element={<BookPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/tms-quiz" element={<TMSQuizPage />} />
          
          {/* Legal Routes */}
          <Route path="/hipaa" element={<HIPAAPage />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;