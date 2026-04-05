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
import ContactUs from "./pages/ContactUs.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import NotFound from "./pages/NotFound.tsx";
import EmployerDashboard from "./pages/employer/EmployerDashboard.tsx";
import EmployerProfile from "./pages/employer/EmployerProfile.tsx";
import EmployerEditProfile from "./pages/employer/EmployerEditProfile.tsx";
import EmployerManageJobs from "./pages/employer/EmployerManageJobs.tsx";
import EmployerCreateJob from "./pages/employer/EmployerCreateJob.tsx";
import EmployerPaymentHistory from "./pages/employer/EmployerPaymentHistory.tsx";
import EmployerFavourites from "./pages/employer/EmployerFavourites.tsx";
import EmployerImportJobseekers from "./pages/employer/EmployerImportJobseekers.tsx";
import EmployerChangePassword from "./pages/employer/EmployerChangePassword.tsx";
import EmployerChangeLogo from "./pages/employer/EmployerChangeLogo.tsx";
import EmployerMailHistory from "./pages/employer/EmployerMailHistory.tsx";

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
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/employer/dashboard" element={<EmployerDashboard />}>
            <Route index element={<EmployerProfile />} />
            <Route path="profile" element={<EmployerProfile />} />
            <Route path="edit-profile" element={<EmployerEditProfile />} />
            <Route path="manage-jobs" element={<EmployerManageJobs />} />
            <Route path="create-job" element={<EmployerCreateJob />} />
            <Route path="payment-history" element={<EmployerPaymentHistory />} />
            <Route path="favourites" element={<EmployerFavourites />} />
            <Route path="import-jobseekers" element={<EmployerImportJobseekers />} />
            <Route path="change-password" element={<EmployerChangePassword />} />
            <Route path="change-logo" element={<EmployerChangeLogo />} />
            <Route path="mail-history" element={<EmployerMailHistory />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
