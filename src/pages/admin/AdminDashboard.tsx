import { Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from '@/components/admin/AdminSidebar';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const AdminDashboard = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <div className="flex flex-1">
          <AdminSidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <header className="h-14 flex items-center justify-between border-b border-border bg-background px-4 sticky top-0 z-30">
              <div className="flex items-center gap-3">
                <SidebarTrigger />
                <Link to="/" className="text-xl font-bold text-primary italic">
                  JS Jobber
                </Link>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors">
                  Admin <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </header>
            <main className="flex-1 p-4 md:p-6 lg:p-8 bg-muted/30">
              <Outlet />
            </main>
          </div>
        </div>
        <Footer />
      </div>
    </SidebarProvider>
  );
};

export default AdminDashboard;
