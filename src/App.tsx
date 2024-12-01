import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OralHealth from "./pages/OralHealth";
import MalariaPrevention from "./pages/MalariaPrevention";
import Nutrition from "./pages/Nutrition";
import Monkeypox from "./pages/Monkeypox";
import SexualHealth from "./pages/SexualHealth";
import ChildHealth from "./pages/ChildHealth";
import Contact from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/oral-health" element={<OralHealth />} />
          <Route path="/malaria" element={<MalariaPrevention />} />
          <Route path="/nutrition" element={<Nutrition />} />
          <Route path="/monkeypox" element={<Monkeypox />} />
          <Route path="/sexual-health" element={<SexualHealth />} />
          <Route path="/child-health" element={<ChildHealth />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;