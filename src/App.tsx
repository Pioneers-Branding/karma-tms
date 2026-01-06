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
import TMSQuizPage from "./pages/TMSQuizPage";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/conditions/depression" element={<DepressionPage />} />
          <Route path="/conditions/anxiety" element={<AnxietyPage />} />
          <Route path="/conditions/ocd" element={<OCDPage />} />
          <Route path="/conditions/ptsd" element={<PTSDPage />} />
          <Route path="/conditions/bipolar" element={<BipolarPage />} />
          <Route path="/conditions/addiction" element={<AddictionPage />} />
          <Route path="/tms-quiz" element={<TMSQuizPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;