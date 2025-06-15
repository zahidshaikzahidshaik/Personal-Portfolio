import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingSinglePage from "./pages/LandingSinglePage";
// import NotFound from "./pages/NotFound";
// import Navbar from "@/components/Navbar";
// import About from "@/pages/about";
// import Projects from "@/pages/projects";
// import Experience from "@/pages/experience";
// import Certificates from "@/pages/certificates";
// import Contact from "@/pages/contact";
// import Resume from "@/pages/resume";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<LandingSinglePage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
