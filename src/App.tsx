import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import SearchJob from "./pages/SearchJob.tsx";
import JobDetail from "./pages/JobDetail.tsx";
import JobseekerLogin from "./pages/JobseekerLogin.tsx";
import JobseekerRegister from "./pages/JobseekerRegister.tsx";
import EmployerLogin from "./pages/EmployerLogin.tsx";
import EmployerRegister from "./pages/EmployerRegister.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="/search-job" element={<SearchJob />} />
          <Route path="/job-description/:slug" element={<JobDetail />} />
          <Route path="/user/jobseeker-login" element={<JobseekerLogin />} />
          <Route path="/user/jobseeker-registration" element={<JobseekerRegister />} />
          <Route path="/user/employer-login" element={<EmployerLogin />} />
          <Route path="/user/employer-registration" element={<EmployerRegister />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
